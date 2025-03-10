import { CompressedBase64UrlEncoder } from "../base64/CompressedBase64UrlEncoder.js";
import { BitStringEncoder } from "../bitstring/BitStringEncoder.js";
import { EncodableFixedInteger } from "../datatype/EncodableFixedInteger.js";
import { EncodableFixedIntegerList } from "../datatype/EncodableFixedIntegerList.js";
import { DecodingError } from "../error/DecodingError.js";
import { ValidationError } from "../error/ValidationError.js";
import { EncodableBitStringFields } from "../field/EncodableBitStringFields.js";
import { USCAV1_CORE_SEGMENT_FIELD_NAMES } from "../field/UsCaV1Field.js";
import { UsCaV1Field } from "../field/UsCaV1Field.js";
import { UsCaV1 } from "../section/UsCaV1.js";
import { AbstractLazilyEncodableSegment } from "./AbstractLazilyEncodableSegment.js";
export class UsCaV1CoreSegment extends AbstractLazilyEncodableSegment {
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
        return USCAV1_CORE_SEGMENT_FIELD_NAMES;
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
        fields.put(UsCaV1Field.VERSION.toString(), new EncodableFixedInteger(6, UsCaV1.VERSION));
        fields.put(UsCaV1Field.SALE_OPT_OUT_NOTICE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsCaV1Field.SHARING_OPT_OUT_NOTICE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsCaV1Field.SENSITIVE_DATA_LIMIT_USE_NOTICE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsCaV1Field.SALE_OPT_OUT.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsCaV1Field.SHARING_OPT_OUT.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsCaV1Field.SENSITIVE_DATA_PROCESSING.toString(), new EncodableFixedIntegerList(2, [0, 0, 0, 0, 0, 0, 0, 0, 0]).withValidator(nullableBooleanAsTwoBitIntegerListValidator));
        fields.put(UsCaV1Field.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new EncodableFixedIntegerList(2, [0, 0]).withValidator(nullableBooleanAsTwoBitIntegerListValidator));
        fields.put(UsCaV1Field.PERSONAL_DATA_CONSENTS.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsCaV1Field.MSPA_COVERED_TRANSACTION.toString(), new EncodableFixedInteger(2, 1).withValidator(nonNullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsCaV1Field.MSPA_OPT_OUT_OPTION_MODE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
        fields.put(UsCaV1Field.MSPA_SERVICE_PROVIDER_MODE.toString(), new EncodableFixedInteger(2, 0).withValidator(nullableBooleanAsTwoBitIntegerValidator));
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
            throw new DecodingError("Unable to decode UsCaV1CoreSegment '" + encodedString + "'");
        }
    }
    // overriden
    validate() {
        let sharingOptOutNotice = this.fields.get(UsCaV1Field.SHARING_OPT_OUT_NOTICE).getValue();
        let sharingOptOut = this.fields.get(UsCaV1Field.SHARING_OPT_OUT).getValue();
        let saleOptOutNotice = this.fields.get(UsCaV1Field.SALE_OPT_OUT_NOTICE).getValue();
        let saleOptOut = this.fields.get(UsCaV1Field.SALE_OPT_OUT).getValue();
        let mspaServiceProviderMode = this.fields.get(UsCaV1Field.MSPA_SERVICE_PROVIDER_MODE).getValue();
        let mspaOptOutOptionMode = this.fields.get(UsCaV1Field.MSPA_OPT_OUT_OPTION_MODE).getValue();
        let sensitiveDataLimtUserNotice = this.fields.get(UsCaV1Field.SENSITIVE_DATA_LIMIT_USE_NOTICE).getValue();
        if (sharingOptOutNotice == 0) {
            if (sharingOptOut != 0) {
                throw new ValidationError("Invalid usca sharing notice / opt out combination: {" + sharingOptOutNotice + " / " + sharingOptOut + "}");
            }
        }
        else if (sharingOptOutNotice == 1) {
            if (sharingOptOut != 1 && sharingOptOut != 2) {
                throw new ValidationError("Invalid usca sharing notice / opt out combination: {" + sharingOptOutNotice + " / " + sharingOptOut + "}");
            }
        }
        else if (sharingOptOutNotice == 2) {
            if (sharingOptOut != 1) {
                throw new ValidationError("Invalid usca sharing notice / opt out combination: {" + sharingOptOutNotice + " / " + sharingOptOut + "}");
            }
        }
        if (saleOptOutNotice == 0) {
            if (saleOptOut != 0) {
                throw new ValidationError("Invalid usca sale notice / opt out combination: {" + saleOptOutNotice + " / " + saleOptOut + "}");
            }
        }
        else if (saleOptOutNotice == 1) {
            if (saleOptOut != 1 && saleOptOut != 2) {
                throw new ValidationError("Invalid usca sale notice / opt out combination: {" + saleOptOutNotice + " / " + saleOptOut + "}");
            }
        }
        else if (saleOptOutNotice == 2) {
            if (saleOptOut != 1) {
                throw new ValidationError("Invalid usca sale notice / opt out combination: {" + saleOptOutNotice + " / " + saleOptOut + "}");
            }
        }
        if (mspaServiceProviderMode == 0) {
            if (saleOptOutNotice != 0) {
                throw new ValidationError("Invalid usca mspa service provider mode / sale opt out notice combination: {" +
                    mspaServiceProviderMode +
                    " / " +
                    saleOptOutNotice +
                    "}");
            }
            if (sharingOptOutNotice != 0) {
                throw new ValidationError("Invalid usca mspa service provider mode / sharing opt out notice combination: {" +
                    mspaServiceProviderMode +
                    " / " +
                    sharingOptOutNotice +
                    "}");
            }
            if (sensitiveDataLimtUserNotice != 0) {
                throw new ValidationError("Invalid usca mspa service provider mode / sensitive data limit use notice combination: {" +
                    mspaServiceProviderMode +
                    " / " +
                    sensitiveDataLimtUserNotice +
                    "}");
            }
        }
        else if (mspaServiceProviderMode == 1) {
            if (mspaOptOutOptionMode != 2) {
                throw new ValidationError("Invalid usca mspa service provider / opt out option modes combination: {" +
                    mspaServiceProviderMode +
                    " / " +
                    mspaServiceProviderMode +
                    "}");
            }
            if (saleOptOutNotice != 0) {
                throw new ValidationError("Invalid usca mspa service provider mode / sale opt out notice combination: {" +
                    mspaServiceProviderMode +
                    " / " +
                    saleOptOutNotice +
                    "}");
            }
            if (sharingOptOutNotice != 0) {
                throw new ValidationError("Invalid usca mspa service provider mode / sharing opt out notice combination: {" +
                    mspaServiceProviderMode +
                    " / " +
                    sharingOptOutNotice +
                    "}");
            }
            if (sensitiveDataLimtUserNotice != 0) {
                throw new ValidationError("Invalid usca mspa service provider mode / sensitive data limit use notice combination: {" +
                    mspaServiceProviderMode +
                    " / " +
                    sensitiveDataLimtUserNotice +
                    "}");
            }
        }
        else if (mspaServiceProviderMode == 2) {
            if (mspaOptOutOptionMode != 1) {
                throw new ValidationError("Invalid usca mspa service provider / opt out option modes combination: {" +
                    mspaServiceProviderMode +
                    " / " +
                    mspaOptOutOptionMode +
                    "}");
            }
        }
    }
}
