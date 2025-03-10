import { CompressedBase64UrlEncoder } from "../base64/CompressedBase64UrlEncoder.js";
import { BitStringEncoder } from "../bitstring/BitStringEncoder.js";
import { EncodableFixedInteger } from "../datatype/EncodableFixedInteger.js";
import { EncodableFixedIntegerList } from "../datatype/EncodableFixedIntegerList.js";
import { DecodingError } from "../error/DecodingError.js";
import { EncodableBitStringFields } from "../field/EncodableBitStringFields.js";
import { USCO_CORE_SEGMENT_FIELD_NAMES } from "../field/UsCoField.js";
import { UsCoField } from "../field/UsCoField.js";
import { UsCo } from "../section/UsCo.js";
import { AbstractLazilyEncodableSegment } from "./AbstractLazilyEncodableSegment.js";
export class UsCoCoreSegment extends AbstractLazilyEncodableSegment {
    base64UrlEncoder = CompressedBase64UrlEncoder.getInstance();
    bitStringEncoder = BitStringEncoder.getInstance();
    constructor(encodedString) {
        super();
        if (encodedString) {
            this.decode(encodedString);
        }
    }
    // overriden
    getFieldNames() {
        return USCO_CORE_SEGMENT_FIELD_NAMES;
    }
    // overriden
    initializeFields() {
        const nullableBooleanAsTwoBitIntegerValidator = new (class {
            test(n) {
                return n >= 0 && n <= 2;
            }
        })();
        const nonNullableBooleanAsTwoBitIntegerValidator = new (class {
            test(n) {
                return n >= 1 && n <= 2;
            }
        })();
        const nullableBooleanAsTwoBitIntegerListValidator = new (class {
            test(l) {
                for (let i = 0; i < l.length; i++) {
                    let n = l[i];
                    if (n < 0 || n > 2) {
                        return false;
                    }
                }
                return true;
            }
        })();
        let fields = new EncodableBitStringFields();
        fields.put(UsCoField.VERSION.toString(), new EncodableFixedInteger(6, UsCo.VERSION));
        fields.put(UsCoField.SHARING_NOTICE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsCoField.SALE_OPT_OUT_NOTICE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsCoField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsCoField.SALE_OPT_OUT.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsCoField.TARGETED_ADVERTISING_OPT_OUT.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsCoField.SENSITIVE_DATA_PROCESSING.toString(), new EncodableFixedIntegerList(2, [0, 0, 0, 0, 0, 0, 0]).withValidator(nullableBooleanAsTwoBitIntegerListValidator));
        fields.put(UsCoField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsCoField.MSPA_COVERED_TRANSACTION.toString(), new EncodableFixedInteger(2, 1).withValidator(nonNullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsCoField.MSPA_OPT_OUT_OPTION_MODE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsCoField.MSPA_SERVICE_PROVIDER_MODE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        return fields;
    }
    // overriden
    encodeSegment(fields) {
        let bitString = this.bitStringEncoder.encode(fields, this.getFieldNames());
        let encodedString = this.base64UrlEncoder.encode(bitString);
        return encodedString;
    }
    // overriden
    decodeSegment(encodedString, fields) {
        if (encodedString == null || encodedString.length === 0) {
            this.fields.reset(fields);
        }
        try {
            let bitString = this.base64UrlEncoder.decode(encodedString);
            this.bitStringEncoder.decode(bitString, this.getFieldNames(), fields);
        }
        catch (e) {
            throw new DecodingError("Unable to decode UsCoCoreSegment '" + encodedString + "'");
        }
    }
}
