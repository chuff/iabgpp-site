export var UsCoV1Field;
(function (UsCoV1Field) {
    UsCoV1Field["VERSION"] = "Version";
    UsCoV1Field["SHARING_NOTICE"] = "SharingNotice";
    UsCoV1Field["SALE_OPT_OUT_NOTICE"] = "SaleOptOutNotice";
    UsCoV1Field["TARGETED_ADVERTISING_OPT_OUT_NOTICE"] = "TargetedAdvertisingOptOutNotice";
    UsCoV1Field["SALE_OPT_OUT"] = "SaleOptOut";
    UsCoV1Field["TARGETED_ADVERTISING_OPT_OUT"] = "TargetedAdvertisingOptOut";
    UsCoV1Field["SENSITIVE_DATA_PROCESSING"] = "SensitiveDataProcessing";
    UsCoV1Field["KNOWN_CHILD_SENSITIVE_DATA_CONSENTS"] = "KnownChildSensitiveDataConsents";
    UsCoV1Field["MSPA_COVERED_TRANSACTION"] = "MspaCoveredTransaction";
    UsCoV1Field["MSPA_OPT_OUT_OPTION_MODE"] = "MspaOptOutOptionMode";
    UsCoV1Field["MSPA_SERVICE_PROVIDER_MODE"] = "MspaServiceProviderMode";
    UsCoV1Field["GPC_SEGMENT_TYPE"] = "GpcSegmentType";
    UsCoV1Field["GPC_SEGMENT_INCLUDED"] = "GpcSegmentIncluded";
    UsCoV1Field["GPC"] = "Gpc";
})(UsCoV1Field || (UsCoV1Field = {}));
export const USCOV1_CORE_SEGMENT_FIELD_NAMES = [
    UsCoV1Field.VERSION,
    UsCoV1Field.SHARING_NOTICE,
    UsCoV1Field.SALE_OPT_OUT_NOTICE,
    UsCoV1Field.TARGETED_ADVERTISING_OPT_OUT_NOTICE,
    UsCoV1Field.SALE_OPT_OUT,
    UsCoV1Field.TARGETED_ADVERTISING_OPT_OUT,
    UsCoV1Field.SENSITIVE_DATA_PROCESSING,
    UsCoV1Field.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,
    UsCoV1Field.MSPA_COVERED_TRANSACTION,
    UsCoV1Field.MSPA_OPT_OUT_OPTION_MODE,
    UsCoV1Field.MSPA_SERVICE_PROVIDER_MODE,
];
export const USCOV1_GPC_SEGMENT_FIELD_NAMES = [UsCoV1Field.GPC_SEGMENT_TYPE, UsCoV1Field.GPC];
