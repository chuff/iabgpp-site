export var UsCtV1Field;
(function (UsCtV1Field) {
    UsCtV1Field["VERSION"] = "Version";
    UsCtV1Field["SHARING_NOTICE"] = "SharingNotice";
    UsCtV1Field["SALE_OPT_OUT_NOTICE"] = "SaleOptOutNotice";
    UsCtV1Field["TARGETED_ADVERTISING_OPT_OUT_NOTICE"] = "TargetedAdvertisingOptOutNotice";
    UsCtV1Field["SALE_OPT_OUT"] = "SaleOptOut";
    UsCtV1Field["TARGETED_ADVERTISING_OPT_OUT"] = "TargetedAdvertisingOptOut";
    UsCtV1Field["SENSITIVE_DATA_PROCESSING"] = "SensitiveDataProcessing";
    UsCtV1Field["KNOWN_CHILD_SENSITIVE_DATA_CONSENTS"] = "KnownChildSensitiveDataConsents";
    UsCtV1Field["MSPA_COVERED_TRANSACTION"] = "MspaCoveredTransaction";
    UsCtV1Field["MSPA_OPT_OUT_OPTION_MODE"] = "MspaOptOutOptionMode";
    UsCtV1Field["MSPA_SERVICE_PROVIDER_MODE"] = "MspaServiceProviderMode";
    UsCtV1Field["GPC_SEGMENT_TYPE"] = "GpcSegmentType";
    UsCtV1Field["GPC_SEGMENT_INCLUDED"] = "GpcSegmentIncluded";
    UsCtV1Field["GPC"] = "Gpc";
})(UsCtV1Field || (UsCtV1Field = {}));
export const USCTV1_CORE_SEGMENT_FIELD_NAMES = [
    UsCtV1Field.VERSION,
    UsCtV1Field.SHARING_NOTICE,
    UsCtV1Field.SALE_OPT_OUT_NOTICE,
    UsCtV1Field.TARGETED_ADVERTISING_OPT_OUT_NOTICE,
    UsCtV1Field.SALE_OPT_OUT,
    UsCtV1Field.TARGETED_ADVERTISING_OPT_OUT,
    UsCtV1Field.SENSITIVE_DATA_PROCESSING,
    UsCtV1Field.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,
    UsCtV1Field.MSPA_COVERED_TRANSACTION,
    UsCtV1Field.MSPA_OPT_OUT_OPTION_MODE,
    UsCtV1Field.MSPA_SERVICE_PROVIDER_MODE,
];
export const USCTV1_GPC_SEGMENT_FIELD_NAMES = [UsCtV1Field.GPC_SEGMENT_TYPE, UsCtV1Field.GPC];
