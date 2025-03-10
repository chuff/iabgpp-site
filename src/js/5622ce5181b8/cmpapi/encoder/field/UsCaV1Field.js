export var UsCaV1Field;
(function (UsCaV1Field) {
    UsCaV1Field["VERSION"] = "Version";
    UsCaV1Field["SALE_OPT_OUT_NOTICE"] = "SaleOptOutNotice";
    UsCaV1Field["SHARING_OPT_OUT_NOTICE"] = "SharingOptOutNotice";
    UsCaV1Field["SENSITIVE_DATA_LIMIT_USE_NOTICE"] = "SensitiveDataLimitUseNotice";
    UsCaV1Field["SALE_OPT_OUT"] = "SaleOptOut";
    UsCaV1Field["SHARING_OPT_OUT"] = "SharingOptOut";
    UsCaV1Field["SENSITIVE_DATA_PROCESSING"] = "SensitiveDataProcessing";
    UsCaV1Field["KNOWN_CHILD_SENSITIVE_DATA_CONSENTS"] = "KnownChildSensitiveDataConsents";
    UsCaV1Field["PERSONAL_DATA_CONSENTS"] = "PersonalDataConsents";
    UsCaV1Field["MSPA_COVERED_TRANSACTION"] = "MspaCoveredTransaction";
    UsCaV1Field["MSPA_OPT_OUT_OPTION_MODE"] = "MspaOptOutOptionMode";
    UsCaV1Field["MSPA_SERVICE_PROVIDER_MODE"] = "MspaServiceProviderMode";
    UsCaV1Field["GPC_SEGMENT_TYPE"] = "GpcSegmentType";
    UsCaV1Field["GPC_SEGMENT_INCLUDED"] = "GpcSegmentIncluded";
    UsCaV1Field["GPC"] = "Gpc";
})(UsCaV1Field || (UsCaV1Field = {}));
export const USCAV1_CORE_SEGMENT_FIELD_NAMES = [
    UsCaV1Field.VERSION,
    UsCaV1Field.SALE_OPT_OUT_NOTICE,
    UsCaV1Field.SHARING_OPT_OUT_NOTICE,
    UsCaV1Field.SENSITIVE_DATA_LIMIT_USE_NOTICE,
    UsCaV1Field.SALE_OPT_OUT,
    UsCaV1Field.SHARING_OPT_OUT,
    UsCaV1Field.SENSITIVE_DATA_PROCESSING,
    UsCaV1Field.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,
    UsCaV1Field.PERSONAL_DATA_CONSENTS,
    UsCaV1Field.MSPA_COVERED_TRANSACTION,
    UsCaV1Field.MSPA_OPT_OUT_OPTION_MODE,
    UsCaV1Field.MSPA_SERVICE_PROVIDER_MODE,
];
export const USCAV1_GPC_SEGMENT_FIELD_NAMES = [UsCaV1Field.GPC_SEGMENT_TYPE, UsCaV1Field.GPC];
