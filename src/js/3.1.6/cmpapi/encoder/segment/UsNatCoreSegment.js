import { CompressedBase64UrlEncoder } from "../base64/CompressedBase64UrlEncoder.js";
import { BitStringEncoder } from "../bitstring/BitStringEncoder.js";
import { EncodableFixedInteger } from "../datatype/EncodableFixedInteger.js";
import { EncodableFixedIntegerList } from "../datatype/EncodableFixedIntegerList.js";
import { DecodingError } from "../error/DecodingError.js";
import { EncodableBitStringFields } from "../field/EncodableBitStringFields.js";
import { USNAT_CORE_SEGMENT_FIELD_NAMES } from "../field/UsNatField.js";
import { UsNatField } from "../field/UsNatField.js";
import { UsNat } from "../section/UsNat.js";
import { AbstractLazilyEncodableSegment } from "./AbstractLazilyEncodableSegment.js";
export class UsNatCoreSegment extends AbstractLazilyEncodableSegment {
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
        return USNAT_CORE_SEGMENT_FIELD_NAMES;
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
        fields.put(UsNatField.VERSION.toString(), new EncodableFixedInteger(6, UsNat.VERSION));
        fields.put(UsNatField.SHARING_NOTICE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsNatField.SALE_OPT_OUT_NOTICE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsNatField.SHARING_OPT_OUT_NOTICE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsNatField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsNatField.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsNatField.SENSITIVE_DATA_LIMIT_USE_NOTICE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsNatField.SALE_OPT_OUT.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsNatField.SHARING_OPT_OUT.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsNatField.TARGETED_ADVERTISING_OPT_OUT.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsNatField.SENSITIVE_DATA_PROCESSING.toString(), new EncodableFixedIntegerList(2, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]).withValidator(nullableBooleanAsTwoBitIntegerListValidator));
        fields.put(UsNatField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new EncodableFixedIntegerList(2, [0, 0, 0]).withValidator(nullableBooleanAsTwoBitIntegerListValidator));
        fields.put(UsNatField.PERSONAL_DATA_CONSENTS.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsNatField.MSPA_COVERED_TRANSACTION.toString(), new EncodableFixedInteger(2, 1).withValidator(nonNullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsNatField.MSPA_OPT_OUT_OPTION_MODE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsNatField.MSPA_SERVICE_PROVIDER_MODE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
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
            // Necessary to maintain backwards compatibility when sensitive data processing changed from a
            // length of 12 to 16 and known child sensitive data consents changed from a length of 2 to 3 in the
            // DE, IA, NE, NH, NJ, TN release
            if (bitString.length == 66) {
                bitString =
                    bitString.substring(0, 48) + "00000000" + bitString.substring(48, 52) + "00" + bitString.substring(52, 62);
            }
            this.bitStringEncoder.decode(bitString, this.getFieldNames(), fields);
        }
        catch (e) {
            throw new DecodingError("Unable to decode UsNatCoreSegment '" + encodedString + "'");
        }
    }
}
