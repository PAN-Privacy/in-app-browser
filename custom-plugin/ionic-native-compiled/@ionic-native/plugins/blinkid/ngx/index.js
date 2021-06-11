import { __extends } from "tslib";
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
export var BarcodeType;
(function (BarcodeType) {
    BarcodeType[BarcodeType["None"] = 1] = "None";
    BarcodeType[BarcodeType["QRCode"] = 2] = "QRCode";
    BarcodeType[BarcodeType["DataMatrix"] = 3] = "DataMatrix";
    BarcodeType[BarcodeType["UPCE"] = 4] = "UPCE";
    BarcodeType[BarcodeType["UPCA"] = 5] = "UPCA";
    BarcodeType[BarcodeType["EAN8"] = 6] = "EAN8";
    BarcodeType[BarcodeType["EAN13"] = 7] = "EAN13";
    BarcodeType[BarcodeType["Code128"] = 8] = "Code128";
    BarcodeType[BarcodeType["Code39"] = 9] = "Code39";
    BarcodeType[BarcodeType["ITF"] = 10] = "ITF";
    BarcodeType[BarcodeType["Aztec"] = 11] = "Aztec";
    BarcodeType[BarcodeType["PDF417"] = 12] = "PDF417";
})(BarcodeType || (BarcodeType = {}));
export var RecognizerResultState;
(function (RecognizerResultState) {
    RecognizerResultState[RecognizerResultState["empty"] = 1] = "empty";
    RecognizerResultState[RecognizerResultState["uncertain"] = 2] = "uncertain";
    RecognizerResultState[RecognizerResultState["valid"] = 3] = "valid";
})(RecognizerResultState || (RecognizerResultState = {}));
export var MrtdDocumentType;
(function (MrtdDocumentType) {
    MrtdDocumentType[MrtdDocumentType["Unknown"] = 1] = "Unknown";
    MrtdDocumentType[MrtdDocumentType["IdentityCard"] = 2] = "IdentityCard";
    MrtdDocumentType[MrtdDocumentType["Passport"] = 3] = "Passport";
    MrtdDocumentType[MrtdDocumentType["Visa"] = 4] = "Visa";
    MrtdDocumentType[MrtdDocumentType["GreenCard"] = 5] = "GreenCard";
    MrtdDocumentType[MrtdDocumentType["MalaysianPassIMM13P"] = 6] = "MalaysianPassIMM13P";
})(MrtdDocumentType || (MrtdDocumentType = {}));
export var EudlCountry;
(function (EudlCountry) {
    EudlCountry[EudlCountry["UK"] = 1] = "UK";
    EudlCountry[EudlCountry["Germany"] = 2] = "Germany";
    EudlCountry[EudlCountry["Austria"] = 3] = "Austria";
    EudlCountry[EudlCountry["Automatic"] = 4] = "Automatic";
})(EudlCountry || (EudlCountry = {}));
export var DocumentFaceDetectorType;
(function (DocumentFaceDetectorType) {
    DocumentFaceDetectorType[DocumentFaceDetectorType["TD1"] = 1] = "TD1";
    DocumentFaceDetectorType[DocumentFaceDetectorType["TD2"] = 2] = "TD2";
    DocumentFaceDetectorType[DocumentFaceDetectorType["PassportsAndVisas"] = 3] = "PassportsAndVisas";
})(DocumentFaceDetectorType || (DocumentFaceDetectorType = {}));
export var UsdlKeys;
(function (UsdlKeys) {
    UsdlKeys[UsdlKeys["DocumentType"] = 0] = "DocumentType";
    UsdlKeys[UsdlKeys["StandardVersionNumber"] = 1] = "StandardVersionNumber";
    UsdlKeys[UsdlKeys["CustomerFamilyName"] = 2] = "CustomerFamilyName";
    UsdlKeys[UsdlKeys["CustomerFirstName"] = 3] = "CustomerFirstName";
    UsdlKeys[UsdlKeys["CustomerFullName"] = 4] = "CustomerFullName";
    UsdlKeys[UsdlKeys["DateOfBirth"] = 5] = "DateOfBirth";
    UsdlKeys[UsdlKeys["Sex"] = 6] = "Sex";
    UsdlKeys[UsdlKeys["EyeColor"] = 7] = "EyeColor";
    UsdlKeys[UsdlKeys["AddressStreet"] = 8] = "AddressStreet";
    UsdlKeys[UsdlKeys["AddressCity"] = 9] = "AddressCity";
    UsdlKeys[UsdlKeys["AddressJurisdictionCode"] = 10] = "AddressJurisdictionCode";
    UsdlKeys[UsdlKeys["AddressPostalCode"] = 11] = "AddressPostalCode";
    UsdlKeys[UsdlKeys["FullAddress"] = 12] = "FullAddress";
    UsdlKeys[UsdlKeys["Height"] = 13] = "Height";
    UsdlKeys[UsdlKeys["HeightIn"] = 14] = "HeightIn";
    UsdlKeys[UsdlKeys["HeightCm"] = 15] = "HeightCm";
    UsdlKeys[UsdlKeys["CustomerMiddleName"] = 16] = "CustomerMiddleName";
    UsdlKeys[UsdlKeys["HairColor"] = 17] = "HairColor";
    UsdlKeys[UsdlKeys["NameSuffix"] = 18] = "NameSuffix";
    UsdlKeys[UsdlKeys["AKAFullName"] = 19] = "AKAFullName";
    UsdlKeys[UsdlKeys["AKAFamilyName"] = 20] = "AKAFamilyName";
    UsdlKeys[UsdlKeys["AKAGivenName"] = 21] = "AKAGivenName";
    UsdlKeys[UsdlKeys["AKASuffixName"] = 22] = "AKASuffixName";
    UsdlKeys[UsdlKeys["WeightRange"] = 23] = "WeightRange";
    UsdlKeys[UsdlKeys["WeightPounds"] = 24] = "WeightPounds";
    UsdlKeys[UsdlKeys["WeightKilograms"] = 25] = "WeightKilograms";
    UsdlKeys[UsdlKeys["CustomerIdNumber"] = 26] = "CustomerIdNumber";
    UsdlKeys[UsdlKeys["FamilyNameTruncation"] = 27] = "FamilyNameTruncation";
    UsdlKeys[UsdlKeys["FirstNameTruncation"] = 28] = "FirstNameTruncation";
    UsdlKeys[UsdlKeys["MiddleNameTruncation"] = 29] = "MiddleNameTruncation";
    UsdlKeys[UsdlKeys["PlaceOfBirth"] = 30] = "PlaceOfBirth";
    UsdlKeys[UsdlKeys["AddressStreet2"] = 31] = "AddressStreet2";
    UsdlKeys[UsdlKeys["RaceEthnicity"] = 32] = "RaceEthnicity";
    UsdlKeys[UsdlKeys["NamePrefix"] = 33] = "NamePrefix";
    UsdlKeys[UsdlKeys["CountryIdentification"] = 34] = "CountryIdentification";
    UsdlKeys[UsdlKeys["ResidenceStreetAddress"] = 35] = "ResidenceStreetAddress";
    UsdlKeys[UsdlKeys["ResidenceStreetAddress2"] = 36] = "ResidenceStreetAddress2";
    UsdlKeys[UsdlKeys["ResidenceCity"] = 37] = "ResidenceCity";
    UsdlKeys[UsdlKeys["ResidenceJurisdictionCode"] = 38] = "ResidenceJurisdictionCode";
    UsdlKeys[UsdlKeys["ResidencePostalCode"] = 39] = "ResidencePostalCode";
    UsdlKeys[UsdlKeys["ResidenceFullAddress"] = 40] = "ResidenceFullAddress";
    UsdlKeys[UsdlKeys["Under18"] = 41] = "Under18";
    UsdlKeys[UsdlKeys["Under19"] = 42] = "Under19";
    UsdlKeys[UsdlKeys["Under21"] = 43] = "Under21";
    UsdlKeys[UsdlKeys["SocialSecurityNumber"] = 44] = "SocialSecurityNumber";
    UsdlKeys[UsdlKeys["AKASocialSecurityNumber"] = 45] = "AKASocialSecurityNumber";
    UsdlKeys[UsdlKeys["AKAMiddleName"] = 46] = "AKAMiddleName";
    UsdlKeys[UsdlKeys["AKAPrefixName"] = 47] = "AKAPrefixName";
    UsdlKeys[UsdlKeys["OrganDonor"] = 48] = "OrganDonor";
    UsdlKeys[UsdlKeys["Veteran"] = 49] = "Veteran";
    UsdlKeys[UsdlKeys["AKADateOfBirth"] = 50] = "AKADateOfBirth";
    UsdlKeys[UsdlKeys["IssuerIdentificationNumber"] = 51] = "IssuerIdentificationNumber";
    UsdlKeys[UsdlKeys["DocumentExpirationDate"] = 52] = "DocumentExpirationDate";
    UsdlKeys[UsdlKeys["JurisdictionVersionNumber"] = 53] = "JurisdictionVersionNumber";
    UsdlKeys[UsdlKeys["JurisdictionVehicleClass"] = 54] = "JurisdictionVehicleClass";
    UsdlKeys[UsdlKeys["JurisdictionRestrictionCodes"] = 55] = "JurisdictionRestrictionCodes";
    UsdlKeys[UsdlKeys["JurisdictionEndorsementCodes"] = 56] = "JurisdictionEndorsementCodes";
    UsdlKeys[UsdlKeys["DocumentIssueDate"] = 57] = "DocumentIssueDate";
    UsdlKeys[UsdlKeys["FederalCommercialVehicleCodes"] = 58] = "FederalCommercialVehicleCodes";
    UsdlKeys[UsdlKeys["IssuingJurisdiction"] = 59] = "IssuingJurisdiction";
    UsdlKeys[UsdlKeys["StandardVehicleClassification"] = 60] = "StandardVehicleClassification";
    UsdlKeys[UsdlKeys["IssuingJurisdictionName"] = 61] = "IssuingJurisdictionName";
    UsdlKeys[UsdlKeys["StandardEndorsementCode"] = 62] = "StandardEndorsementCode";
    UsdlKeys[UsdlKeys["StandardRestrictionCode"] = 63] = "StandardRestrictionCode";
    UsdlKeys[UsdlKeys["JurisdictionVehicleClassificationDescription"] = 64] = "JurisdictionVehicleClassificationDescription";
    UsdlKeys[UsdlKeys["JurisdictionEndorsmentCodeDescription"] = 65] = "JurisdictionEndorsmentCodeDescription";
    UsdlKeys[UsdlKeys["JurisdictionRestrictionCodeDescription"] = 66] = "JurisdictionRestrictionCodeDescription";
    UsdlKeys[UsdlKeys["InventoryControlNumber"] = 67] = "InventoryControlNumber";
    UsdlKeys[UsdlKeys["CardRevisionDate"] = 68] = "CardRevisionDate";
    UsdlKeys[UsdlKeys["DocumentDiscriminator"] = 69] = "DocumentDiscriminator";
    UsdlKeys[UsdlKeys["LimitedDurationDocument"] = 70] = "LimitedDurationDocument";
    UsdlKeys[UsdlKeys["AuditInformation"] = 71] = "AuditInformation";
    UsdlKeys[UsdlKeys["ComplianceType"] = 72] = "ComplianceType";
    UsdlKeys[UsdlKeys["IssueTimestamp"] = 73] = "IssueTimestamp";
    UsdlKeys[UsdlKeys["PermitExpirationDate"] = 74] = "PermitExpirationDate";
    UsdlKeys[UsdlKeys["PermitIdentifier"] = 75] = "PermitIdentifier";
    UsdlKeys[UsdlKeys["PermitIssueDate"] = 76] = "PermitIssueDate";
    UsdlKeys[UsdlKeys["NumberOfDuplicates"] = 77] = "NumberOfDuplicates";
    UsdlKeys[UsdlKeys["HAZMATExpirationDate"] = 78] = "HAZMATExpirationDate";
    UsdlKeys[UsdlKeys["MedicalIndicator"] = 79] = "MedicalIndicator";
    UsdlKeys[UsdlKeys["NonResident"] = 80] = "NonResident";
    UsdlKeys[UsdlKeys["UniqueCustomerId"] = 81] = "UniqueCustomerId";
    UsdlKeys[UsdlKeys["DataDiscriminator"] = 82] = "DataDiscriminator";
    UsdlKeys[UsdlKeys["DocumentExpirationMonth"] = 83] = "DocumentExpirationMonth";
    UsdlKeys[UsdlKeys["DocumentNonexpiring"] = 84] = "DocumentNonexpiring";
    UsdlKeys[UsdlKeys["SecurityVersion"] = 85] = "SecurityVersion";
})(UsdlKeys || (UsdlKeys = {}));
var BlinkId = /** @class */ (function (_super) {
    __extends(BlinkId, _super);
    function BlinkId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlinkId.prototype.scanWithCamera = function (overlaySettings, recognizerCollection, licenses) { return cordova(this, "scanWithCamera", { "callbackOrder": "reverse" }, arguments); };
    Object.defineProperty(BlinkId.prototype, "Date", {
        get: function () { return cordovaPropertyGet(this, "Date"); },
        set: function (value) { cordovaPropertySet(this, "Date", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Point", {
        get: function () { return cordovaPropertyGet(this, "Point"); },
        set: function (value) { cordovaPropertySet(this, "Point", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Quadrilateral", {
        get: function () { return cordovaPropertyGet(this, "Quadrilateral"); },
        set: function (value) { cordovaPropertySet(this, "Quadrilateral", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BarcodeOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BarcodeOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "DocumentOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "DocumentOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "DocumentOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "DocumentVerificationOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "DocumentVerificationOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "DocumentVerificationOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "RecognizerCollection", {
        get: function () { return cordovaPropertyGet(this, "RecognizerCollection"); },
        set: function (value) { cordovaPropertySet(this, "RecognizerCollection", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BarcodeRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BarcodeRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BarcodeRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BarcodeRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SuccessFrameGrabberRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SuccessFrameGrabberRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SuccessFrameGrabberRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SuccessFrameGrabberRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SuccessFrameGrabberRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SuccessFrameGrabberRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaPassportRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaPassportRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardEliteRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardEliteRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardEliteRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardEliteRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardEliteRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardEliteRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CroatiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CroatiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CroatiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CzechiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CzechiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CzechiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CzechiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CzechiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CzechiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "DocumentFaceRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "DocumentFaceRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "DocumentFaceRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "EgyptIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "EgyptIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "EgyptIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "EgyptIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "EgyptIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "EgyptIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "EudlRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "EudlRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "EudlRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyDlBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyDlBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyOldIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyOldIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyOldIdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyOldIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyOldIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyOldIdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyPassportRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyPassportRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "HongKongIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "HongKongIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "HongKongIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "HongKongIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "HongKongIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "HongKongIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IkadRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IkadRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IkadRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IkadRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IkadRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IkadRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IndonesiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IndonesiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IndonesiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IndonesiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IndonesiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IndonesiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IrelandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IrelandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IrelandDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IrelandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IrelandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IrelandDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ItalyDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ItalyDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ItalyDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ItalyDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ItalyDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ItalyDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaMyTenteraRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaMyTenteraRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaMyTenteraRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaMyTenteraRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaMyTenteraRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaMyTenteraRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MexicoVoterIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MexicoVoterIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MexicoVoterIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MexicoVoterIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MexicoVoterIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MexicoVoterIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MrtdCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MrtdCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MrtdCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MrtdCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MrtdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MrtdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MrtdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MrtdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MyKadBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MyKadBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MyKadBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MyKadBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MyKadFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MyKadFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MyKadFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MyKadFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "NewZealandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "NewZealandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "NewZealandDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "NewZealandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "NewZealandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "NewZealandDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Pdf417RecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "Pdf417RecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "Pdf417RecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Pdf417Recognizer", {
        get: function () { return cordovaPropertyGet(this, "Pdf417Recognizer"); },
        set: function (value) { cordovaPropertySet(this, "Pdf417Recognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "RomaniaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "RomaniaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "RomaniaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "RomaniaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "RomaniaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "RomaniaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SimNumberRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SimNumberRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SimNumberRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SimNumberRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SimNumberRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SimNumberRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeChangiEmployeeIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeChangiEmployeeIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeChangiEmployeeIdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeChangiEmployeeIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeChangiEmployeeIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeChangiEmployeeIdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SpainDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SpainDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SpainDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SpainDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SpainDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SpainDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwedenDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwedenDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwedenDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwedenDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwedenDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwedenDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandPassportRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandPassportRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "VinRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "VinRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "VinRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "VinRecognizer", {
        get: function () { return cordovaPropertyGet(this, "VinRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "VinRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UsdlRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UsdlRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UsdlRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UsdlRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UsdlCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UsdlCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UsdlCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UsdlCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkIdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkIdOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BlinkIdOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BlinkIdOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkIdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    BlinkId.pluginName = "BlinkId";
    BlinkId.plugin = "blinkid-cordova";
    BlinkId.pluginRef = "cordova.plugins.BlinkID";
    BlinkId.repo = "https://github.com/BlinkID/blinkid-phonegap";
    BlinkId.install = "ionic cordova plugin add blinkid-cordova --variable CAMERA_USAGE_DESCRIPTION=\"Enable your camera so that you can scan your ID to validate your account\"";
    BlinkId.platforms = ["iOS", "Android"];
    BlinkId.decorators = [
        { type: Injectable }
    ];
    return BlinkId;
}(IonicNativePlugin));
export { BlinkId };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JsaW5raWQvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLHNFQUF1RCxNQUFNLG9CQUFvQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPM0MsTUFBTSxDQUFOLElBQVksV0FhWDtBQWJELFdBQVksV0FBVztJQUNyQiw2Q0FBUSxDQUFBO0lBQ1IsaURBQVUsQ0FBQTtJQUNWLHlEQUFjLENBQUE7SUFDZCw2Q0FBUSxDQUFBO0lBQ1IsNkNBQVEsQ0FBQTtJQUNSLDZDQUFRLENBQUE7SUFDUiwrQ0FBUyxDQUFBO0lBQ1QsbURBQVcsQ0FBQTtJQUNYLGlEQUFVLENBQUE7SUFDViw0Q0FBUSxDQUFBO0lBQ1IsZ0RBQVUsQ0FBQTtJQUNWLGtEQUFXLENBQUE7QUFDYixDQUFDLEVBYlcsV0FBVyxLQUFYLFdBQVcsUUFhdEI7QUFFRCxNQUFNLENBQU4sSUFBWSxxQkFJWDtBQUpELFdBQVkscUJBQXFCO0lBQy9CLG1FQUFTLENBQUE7SUFDVCwyRUFBYSxDQUFBO0lBQ2IsbUVBQVMsQ0FBQTtBQUNYLENBQUMsRUFKVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBSWhDO0FBRUQsTUFBTSxDQUFOLElBQVksZ0JBT1g7QUFQRCxXQUFZLGdCQUFnQjtJQUMxQiw2REFBVyxDQUFBO0lBQ1gsdUVBQWdCLENBQUE7SUFDaEIsK0RBQVksQ0FBQTtJQUNaLHVEQUFRLENBQUE7SUFDUixpRUFBYSxDQUFBO0lBQ2IscUZBQXVCLENBQUE7QUFDekIsQ0FBQyxFQVBXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFPM0I7QUFFRCxNQUFNLENBQU4sSUFBWSxXQUtYO0FBTEQsV0FBWSxXQUFXO0lBQ3JCLHlDQUFNLENBQUE7SUFDTixtREFBVyxDQUFBO0lBQ1gsbURBQVcsQ0FBQTtJQUNYLHVEQUFhLENBQUE7QUFDZixDQUFDLEVBTFcsV0FBVyxLQUFYLFdBQVcsUUFLdEI7QUFFRCxNQUFNLENBQU4sSUFBWSx3QkFJWDtBQUpELFdBQVksd0JBQXdCO0lBQ2xDLHFFQUFPLENBQUE7SUFDUCxxRUFBTyxDQUFBO0lBQ1AsaUdBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQUpXLHdCQUF3QixLQUF4Qix3QkFBd0IsUUFJbkM7QUFFRCxNQUFNLENBQU4sSUFBWSxRQXVGWDtBQXZGRCxXQUFZLFFBQVE7SUFDbEIsdURBQWdCLENBQUE7SUFDaEIseUVBQXlCLENBQUE7SUFDekIsbUVBQXNCLENBQUE7SUFDdEIsaUVBQXFCLENBQUE7SUFDckIsK0RBQW9CLENBQUE7SUFDcEIscURBQWUsQ0FBQTtJQUNmLHFDQUFPLENBQUE7SUFDUCwrQ0FBWSxDQUFBO0lBQ1oseURBQWlCLENBQUE7SUFDakIscURBQWUsQ0FBQTtJQUNmLDhFQUE0QixDQUFBO0lBQzVCLGtFQUFzQixDQUFBO0lBQ3RCLHNEQUFnQixDQUFBO0lBQ2hCLDRDQUFXLENBQUE7SUFDWCxnREFBYSxDQUFBO0lBQ2IsZ0RBQWEsQ0FBQTtJQUNiLG9FQUF1QixDQUFBO0lBQ3ZCLGtEQUFjLENBQUE7SUFDZCxvREFBZSxDQUFBO0lBQ2Ysc0RBQWdCLENBQUE7SUFDaEIsMERBQWtCLENBQUE7SUFDbEIsd0RBQWlCLENBQUE7SUFDakIsMERBQWtCLENBQUE7SUFDbEIsc0RBQWdCLENBQUE7SUFDaEIsd0RBQWlCLENBQUE7SUFDakIsOERBQW9CLENBQUE7SUFDcEIsZ0VBQXFCLENBQUE7SUFDckIsd0VBQXlCLENBQUE7SUFDekIsc0VBQXdCLENBQUE7SUFDeEIsd0VBQXlCLENBQUE7SUFDekIsd0RBQWlCLENBQUE7SUFDakIsNERBQW1CLENBQUE7SUFDbkIsMERBQWtCLENBQUE7SUFDbEIsb0RBQWUsQ0FBQTtJQUNmLDBFQUEwQixDQUFBO0lBQzFCLDRFQUEyQixDQUFBO0lBQzNCLDhFQUE0QixDQUFBO0lBQzVCLDBEQUFrQixDQUFBO0lBQ2xCLGtGQUE4QixDQUFBO0lBQzlCLHNFQUF3QixDQUFBO0lBQ3hCLHdFQUF5QixDQUFBO0lBQ3pCLDhDQUFZLENBQUE7SUFDWiw4Q0FBWSxDQUFBO0lBQ1osOENBQVksQ0FBQTtJQUNaLHdFQUF5QixDQUFBO0lBQ3pCLDhFQUE0QixDQUFBO0lBQzVCLDBEQUFrQixDQUFBO0lBQ2xCLDBEQUFrQixDQUFBO0lBQ2xCLG9EQUFlLENBQUE7SUFDZiw4Q0FBWSxDQUFBO0lBQ1osNERBQW1CLENBQUE7SUFDbkIsb0ZBQStCLENBQUE7SUFDL0IsNEVBQTJCLENBQUE7SUFDM0Isa0ZBQThCLENBQUE7SUFDOUIsZ0ZBQTZCLENBQUE7SUFDN0Isd0ZBQWlDLENBQUE7SUFDakMsd0ZBQWlDLENBQUE7SUFDakMsa0VBQXNCLENBQUE7SUFDdEIsMEZBQWtDLENBQUE7SUFDbEMsc0VBQXdCLENBQUE7SUFDeEIsMEZBQWtDLENBQUE7SUFDbEMsOEVBQTRCLENBQUE7SUFDNUIsOEVBQTRCLENBQUE7SUFDNUIsOEVBQTRCLENBQUE7SUFDNUIsd0hBQWlELENBQUE7SUFDakQsMEdBQTBDLENBQUE7SUFDMUMsNEdBQTJDLENBQUE7SUFDM0MsNEVBQTJCLENBQUE7SUFDM0IsZ0VBQXFCLENBQUE7SUFDckIsMEVBQTBCLENBQUE7SUFDMUIsOEVBQTRCLENBQUE7SUFDNUIsZ0VBQXFCLENBQUE7SUFDckIsNERBQW1CLENBQUE7SUFDbkIsNERBQW1CLENBQUE7SUFDbkIsd0VBQXlCLENBQUE7SUFDekIsZ0VBQXFCLENBQUE7SUFDckIsOERBQW9CLENBQUE7SUFDcEIsb0VBQXVCLENBQUE7SUFDdkIsd0VBQXlCLENBQUE7SUFDekIsZ0VBQXFCLENBQUE7SUFDckIsc0RBQWdCLENBQUE7SUFDaEIsZ0VBQXFCLENBQUE7SUFDckIsa0VBQXNCLENBQUE7SUFDdEIsOEVBQTRCLENBQUE7SUFDNUIsc0VBQXdCLENBQUE7SUFDeEIsOERBQW9CLENBQUE7QUFDdEIsQ0FBQyxFQXZGVyxRQUFRLEtBQVIsUUFBUSxRQXVGbkI7O0lBcWtGNEIsMkJBQWlCOzs7O0lBVTVDLGdDQUFjLGFBQ1osZUFBZ0MsRUFDaEMsb0JBQTBDLEVBQzFDLFFBQWtCOzBCQUtELHlCQUFJOzs7Ozs7MEJBQ0osMEJBQUs7Ozs7OzswQkFDTCxrQ0FBYTs7Ozs7OzBCQUViLDJDQUFzQjs7Ozs7OzBCQUN0Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsd0RBQW1DOzs7Ozs7MEJBQ25DLDZDQUF3Qjs7Ozs7OzBCQUV4Qix5Q0FBb0I7Ozs7OzswQkFFcEIsNENBQXVCOzs7Ozs7MEJBQ3ZCLHNDQUFpQjs7Ozs7OzBCQUNqQix3REFBbUM7Ozs7OzswQkFDbkMsa0RBQTZCOzs7Ozs7MEJBRTdCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIscURBQWdDOzs7Ozs7MEJBQ2hDLCtDQUEwQjs7Ozs7OzBCQUMxQixvREFBK0I7Ozs7OzswQkFDL0IsOENBQXlCOzs7Ozs7MEJBQ3pCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2QixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsNkNBQXdCOzs7Ozs7MEJBQ3hCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw4Q0FBeUI7Ozs7OzswQkFDekIsd0NBQW1COzs7Ozs7MEJBQ25CLG9EQUErQjs7Ozs7OzBCQUMvQixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsb0RBQStCOzs7Ozs7MEJBQy9CLGtEQUE2Qjs7Ozs7OzBCQUM3QixtREFBOEI7Ozs7OzswQkFDOUIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLG9EQUErQjs7Ozs7OzBCQUMvQixrREFBNkI7Ozs7OzswQkFDN0IsaURBQTRCOzs7Ozs7MEJBQzVCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIseUNBQW9COzs7Ozs7MEJBQ3BCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0QixvREFBK0I7Ozs7OzswQkFDL0IsOENBQXlCOzs7Ozs7MEJBQ3pCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIseUNBQW9COzs7Ozs7MEJBQ3BCLG1DQUFjOzs7Ozs7MEJBQ2QscURBQWdDOzs7Ozs7MEJBQ2hDLCtDQUEwQjs7Ozs7OzBCQUMxQixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsc0RBQWlDOzs7Ozs7MEJBQ2pDLGdEQUEyQjs7Ozs7OzBCQUMzQix1REFBa0M7Ozs7OzswQkFDbEMsaURBQTRCOzs7Ozs7MEJBQzVCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLHlDQUFvQjs7Ozs7OzBCQUNwQixtQ0FBYzs7Ozs7OzBCQUNkLDhDQUF5Qjs7Ozs7OzBCQUN6Qix3Q0FBbUI7Ozs7OzswQkFDbkIsK0NBQTBCOzs7Ozs7MEJBQzFCLHlDQUFvQjs7Ozs7OzBCQUNwQixzREFBaUM7Ozs7OzswQkFDakMsZ0RBQTJCOzs7Ozs7MEJBQzNCLDJDQUFzQjs7Ozs7OzBCQUN0QixxQ0FBZ0I7Ozs7OzswQkFDaEIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2Qiw4Q0FBeUI7Ozs7OzswQkFDekIsd0NBQW1COzs7Ozs7MEJBQ25CLDhEQUF5Qzs7Ozs7OzBCQUN6Qyx3REFBbUM7Ozs7OzswQkFDbkMsc0RBQWlDOzs7Ozs7MEJBQ2pDLGdEQUEyQjs7Ozs7OzBCQUMzQixxREFBZ0M7Ozs7OzswQkFDaEMsK0NBQTBCOzs7Ozs7MEJBQzFCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIscURBQWdDOzs7Ozs7MEJBQ2hDLCtDQUEwQjs7Ozs7OzBCQUMxQixxREFBZ0M7Ozs7OzswQkFDaEMsK0NBQTBCOzs7Ozs7MEJBQzFCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6QixxREFBZ0M7Ozs7OzswQkFDaEMsK0NBQTBCOzs7Ozs7MEJBQzFCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsdURBQWtDOzs7Ozs7MEJBQ2xDLGlEQUE0Qjs7Ozs7OzBCQUM1QixzREFBaUM7Ozs7OzswQkFDakMsZ0RBQTJCOzs7Ozs7MEJBQzNCLHVEQUFrQzs7Ozs7OzBCQUNsQyxpREFBNEI7Ozs7OzswQkFDNUIsd0RBQW1DOzs7Ozs7MEJBQ25DLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw4REFBeUM7Ozs7OzswQkFDekMsd0RBQW1DOzs7Ozs7MEJBQ25DLDZEQUF3Qzs7Ozs7OzBCQUN4Qyx1REFBa0M7Ozs7OzswQkFDbEMsOERBQXlDOzs7Ozs7MEJBQ3pDLHdEQUFtQzs7Ozs7OzBCQUNuQyx3Q0FBbUI7Ozs7OzswQkFDbkIsa0NBQWE7Ozs7OzswQkFDYix5Q0FBb0I7Ozs7OzswQkFDcEIsbUNBQWM7Ozs7OzswQkFDZCxpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLHNDQUFpQjs7Ozs7OzBCQUNqQiwyQ0FBc0I7Ozs7OzswQkFDdEIsNENBQXVCOzs7Ozs7Ozs7Ozs7O2dCQTdMM0MsVUFBVTs7a0JBOXNGWDtFQStzRjZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBMaWNlbnNlcyB7XG4gIGlvczogc3RyaW5nO1xuICBhbmRyb2lkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIEJhcmNvZGVUeXBlIHtcbiAgTm9uZSA9IDEsXG4gIFFSQ29kZSA9IDIsXG4gIERhdGFNYXRyaXggPSAzLFxuICBVUENFID0gNCxcbiAgVVBDQSA9IDUsXG4gIEVBTjggPSA2LFxuICBFQU4xMyA9IDcsXG4gIENvZGUxMjggPSA4LFxuICBDb2RlMzkgPSA5LFxuICBJVEYgPSAxMCxcbiAgQXp0ZWMgPSAxMSxcbiAgUERGNDE3ID0gMTIsXG59XG5cbmV4cG9ydCBlbnVtIFJlY29nbml6ZXJSZXN1bHRTdGF0ZSB7XG4gIGVtcHR5ID0gMSxcbiAgdW5jZXJ0YWluID0gMixcbiAgdmFsaWQgPSAzLFxufVxuXG5leHBvcnQgZW51bSBNcnRkRG9jdW1lbnRUeXBlIHtcbiAgVW5rbm93biA9IDEsXG4gIElkZW50aXR5Q2FyZCA9IDIsXG4gIFBhc3Nwb3J0ID0gMyxcbiAgVmlzYSA9IDQsXG4gIEdyZWVuQ2FyZCA9IDUsXG4gIE1hbGF5c2lhblBhc3NJTU0xM1AgPSA2LFxufVxuXG5leHBvcnQgZW51bSBFdWRsQ291bnRyeSB7XG4gIFVLID0gMSxcbiAgR2VybWFueSA9IDIsXG4gIEF1c3RyaWEgPSAzLFxuICBBdXRvbWF0aWMgPSA0LFxufVxuXG5leHBvcnQgZW51bSBEb2N1bWVudEZhY2VEZXRlY3RvclR5cGUge1xuICBURDEgPSAxLFxuICBURDIgPSAyLFxuICBQYXNzcG9ydHNBbmRWaXNhcyA9IDMsXG59XG5cbmV4cG9ydCBlbnVtIFVzZGxLZXlzIHtcbiAgRG9jdW1lbnRUeXBlID0gMCxcbiAgU3RhbmRhcmRWZXJzaW9uTnVtYmVyID0gMSxcbiAgQ3VzdG9tZXJGYW1pbHlOYW1lID0gMixcbiAgQ3VzdG9tZXJGaXJzdE5hbWUgPSAzLFxuICBDdXN0b21lckZ1bGxOYW1lID0gNCxcbiAgRGF0ZU9mQmlydGggPSA1LFxuICBTZXggPSA2LFxuICBFeWVDb2xvciA9IDcsXG4gIEFkZHJlc3NTdHJlZXQgPSA4LFxuICBBZGRyZXNzQ2l0eSA9IDksXG4gIEFkZHJlc3NKdXJpc2RpY3Rpb25Db2RlID0gMTAsXG4gIEFkZHJlc3NQb3N0YWxDb2RlID0gMTEsXG4gIEZ1bGxBZGRyZXNzID0gMTIsXG4gIEhlaWdodCA9IDEzLFxuICBIZWlnaHRJbiA9IDE0LFxuICBIZWlnaHRDbSA9IDE1LFxuICBDdXN0b21lck1pZGRsZU5hbWUgPSAxNixcbiAgSGFpckNvbG9yID0gMTcsXG4gIE5hbWVTdWZmaXggPSAxOCxcbiAgQUtBRnVsbE5hbWUgPSAxOSxcbiAgQUtBRmFtaWx5TmFtZSA9IDIwLFxuICBBS0FHaXZlbk5hbWUgPSAyMSxcbiAgQUtBU3VmZml4TmFtZSA9IDIyLFxuICBXZWlnaHRSYW5nZSA9IDIzLFxuICBXZWlnaHRQb3VuZHMgPSAyNCxcbiAgV2VpZ2h0S2lsb2dyYW1zID0gMjUsXG4gIEN1c3RvbWVySWROdW1iZXIgPSAyNixcbiAgRmFtaWx5TmFtZVRydW5jYXRpb24gPSAyNyxcbiAgRmlyc3ROYW1lVHJ1bmNhdGlvbiA9IDI4LFxuICBNaWRkbGVOYW1lVHJ1bmNhdGlvbiA9IDI5LFxuICBQbGFjZU9mQmlydGggPSAzMCxcbiAgQWRkcmVzc1N0cmVldDIgPSAzMSxcbiAgUmFjZUV0aG5pY2l0eSA9IDMyLFxuICBOYW1lUHJlZml4ID0gMzMsXG4gIENvdW50cnlJZGVudGlmaWNhdGlvbiA9IDM0LFxuICBSZXNpZGVuY2VTdHJlZXRBZGRyZXNzID0gMzUsXG4gIFJlc2lkZW5jZVN0cmVldEFkZHJlc3MyID0gMzYsXG4gIFJlc2lkZW5jZUNpdHkgPSAzNyxcbiAgUmVzaWRlbmNlSnVyaXNkaWN0aW9uQ29kZSA9IDM4LFxuICBSZXNpZGVuY2VQb3N0YWxDb2RlID0gMzksXG4gIFJlc2lkZW5jZUZ1bGxBZGRyZXNzID0gNDAsXG4gIFVuZGVyMTggPSA0MSxcbiAgVW5kZXIxOSA9IDQyLFxuICBVbmRlcjIxID0gNDMsXG4gIFNvY2lhbFNlY3VyaXR5TnVtYmVyID0gNDQsXG4gIEFLQVNvY2lhbFNlY3VyaXR5TnVtYmVyID0gNDUsXG4gIEFLQU1pZGRsZU5hbWUgPSA0NixcbiAgQUtBUHJlZml4TmFtZSA9IDQ3LFxuICBPcmdhbkRvbm9yID0gNDgsXG4gIFZldGVyYW4gPSA0OSxcbiAgQUtBRGF0ZU9mQmlydGggPSA1MCxcbiAgSXNzdWVySWRlbnRpZmljYXRpb25OdW1iZXIgPSA1MSxcbiAgRG9jdW1lbnRFeHBpcmF0aW9uRGF0ZSA9IDUyLFxuICBKdXJpc2RpY3Rpb25WZXJzaW9uTnVtYmVyID0gNTMsXG4gIEp1cmlzZGljdGlvblZlaGljbGVDbGFzcyA9IDU0LFxuICBKdXJpc2RpY3Rpb25SZXN0cmljdGlvbkNvZGVzID0gNTUsXG4gIEp1cmlzZGljdGlvbkVuZG9yc2VtZW50Q29kZXMgPSA1NixcbiAgRG9jdW1lbnRJc3N1ZURhdGUgPSA1NyxcbiAgRmVkZXJhbENvbW1lcmNpYWxWZWhpY2xlQ29kZXMgPSA1OCxcbiAgSXNzdWluZ0p1cmlzZGljdGlvbiA9IDU5LFxuICBTdGFuZGFyZFZlaGljbGVDbGFzc2lmaWNhdGlvbiA9IDYwLFxuICBJc3N1aW5nSnVyaXNkaWN0aW9uTmFtZSA9IDYxLFxuICBTdGFuZGFyZEVuZG9yc2VtZW50Q29kZSA9IDYyLFxuICBTdGFuZGFyZFJlc3RyaWN0aW9uQ29kZSA9IDYzLFxuICBKdXJpc2RpY3Rpb25WZWhpY2xlQ2xhc3NpZmljYXRpb25EZXNjcmlwdGlvbiA9IDY0LFxuICBKdXJpc2RpY3Rpb25FbmRvcnNtZW50Q29kZURlc2NyaXB0aW9uID0gNjUsXG4gIEp1cmlzZGljdGlvblJlc3RyaWN0aW9uQ29kZURlc2NyaXB0aW9uID0gNjYsXG4gIEludmVudG9yeUNvbnRyb2xOdW1iZXIgPSA2NyxcbiAgQ2FyZFJldmlzaW9uRGF0ZSA9IDY4LFxuICBEb2N1bWVudERpc2NyaW1pbmF0b3IgPSA2OSxcbiAgTGltaXRlZER1cmF0aW9uRG9jdW1lbnQgPSA3MCxcbiAgQXVkaXRJbmZvcm1hdGlvbiA9IDcxLFxuICBDb21wbGlhbmNlVHlwZSA9IDcyLFxuICBJc3N1ZVRpbWVzdGFtcCA9IDczLFxuICBQZXJtaXRFeHBpcmF0aW9uRGF0ZSA9IDc0LFxuICBQZXJtaXRJZGVudGlmaWVyID0gNzUsXG4gIFBlcm1pdElzc3VlRGF0ZSA9IDc2LFxuICBOdW1iZXJPZkR1cGxpY2F0ZXMgPSA3NyxcbiAgSEFaTUFURXhwaXJhdGlvbkRhdGUgPSA3OCxcbiAgTWVkaWNhbEluZGljYXRvciA9IDc5LFxuICBOb25SZXNpZGVudCA9IDgwLFxuICBVbmlxdWVDdXN0b21lcklkID0gODEsXG4gIERhdGFEaXNjcmltaW5hdG9yID0gODIsXG4gIERvY3VtZW50RXhwaXJhdGlvbk1vbnRoID0gODMsXG4gIERvY3VtZW50Tm9uZXhwaXJpbmcgPSA4NCxcbiAgU2VjdXJpdHlWZXJzaW9uID0gODUsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VFeHRlbnNpb25GYWN0b3JzIHtcbiAgdXBGYWN0b3I6IG51bWJlcjtcbiAgcmlnaHRGYWN0b3I6IG51bWJlcjtcbiAgZG93bkZhY3RvcjogbnVtYmVyO1xuICBsZWZ0RmFjdG9yOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZSB7XG4gIGRheTogc3RyaW5nO1xuICBtb250aDogc3RyaW5nO1xuICB5ZWFyOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIERhdGVDdG9yIHtcbiAgbmV3IChuYXRpdmVEYXRlOiBEYXRlKTogRGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XG4gIHg6IHN0cmluZztcbiAgeTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBQb2ludEN0b3Ige1xuICBuZXcgKG5hdGl2ZVBvaW50OiBQb2ludCk6IFBvaW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1YWRyaWxhdGVyYWwge1xuICB1cHBlckxlZnQ6IHN0cmluZztcbiAgdXBwZXJSaWdodDogc3RyaW5nO1xuICBsb3dlckxlZnQ6IHN0cmluZztcbiAgbG93ZXJSaWdodDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWFkcmlsYXRlcmFsQ3RvciB7XG4gIG5ldyAobmF0aXZlUXVhZDogUXVhZHJpbGF0ZXJhbCk6IFF1YWRyaWxhdGVyYWw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheVNldHRpbmdzIHtcbiAgb3ZlcmxheVNldHRpbmdzVHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVPdmVybGF5U2V0dGluZ3MgZXh0ZW5kcyBPdmVybGF5U2V0dGluZ3Mge31cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZU92ZXJsYXlTZXR0aW5nc0N0b3Ige1xuICBuZXcgKCk6IEJhcmNvZGVPdmVybGF5U2V0dGluZ3M7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRPdmVybGF5U2V0dGluZ3MgZXh0ZW5kcyBPdmVybGF5U2V0dGluZ3Mge31cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRPdmVybGF5U2V0dGluZ3NDdG9yIHtcbiAgbmV3ICgpOiBEb2N1bWVudE92ZXJsYXlTZXR0aW5ncztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudFZlcmlmaWNhdGlvbk92ZXJsYXlTZXR0aW5ncyBleHRlbmRzIE92ZXJsYXlTZXR0aW5ncyB7XG4gIGZpcnN0U2lkZVNwbGFzaE1lc3NhZ2U6IHN0cmluZztcbiAgc2Vjb25kU2lkZVNwbGFzaE1lc3NhZ2U6IHN0cmluZztcbiAgc2Nhbm5pbmdEb25lU3BsYXNoTWVzc2FnZTogc3RyaW5nO1xuICBmaXJzdFNpZGVJbnN0cnVjdGlvbnM6IHN0cmluZztcbiAgc2Vjb25kU2lkZUluc3RydWN0aW9uczogc3RyaW5nO1xuICBnbGFyZU1lc3NhZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRWZXJpZmljYXRpb25PdmVybGF5U2V0dGluZ3NDdG9yIHtcbiAgbmV3ICgpOiBEb2N1bWVudFZlcmlmaWNhdGlvbk92ZXJsYXlTZXR0aW5ncztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRPdmVybGF5U2V0dGluZ3MgZXh0ZW5kcyBPdmVybGF5U2V0dGluZ3Mge1xuICBnbGFyZU1lc3NhZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkT3ZlcmxheVNldHRpbmdzQ3RvciB7XG4gIG5ldyAoKTogQmxpbmtDYXJkT3ZlcmxheVNldHRpbmdzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlY29nbml6ZXJSZXN1bHQge1xuICByZXN1bHRTdGF0ZTogUmVjb2duaXplclJlc3VsdFN0YXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlY29nbml6ZXJSZXN1bHRDdG9yPFQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0PiB7XG4gIG5ldyAobmF0aXZlUmVzdWx0OiBhbnkpOiBUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlY29nbml6ZXI8VCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQgPSBhbnk+IHtcbiAgcmVjb2duaXplclR5cGU6IHN0cmluZztcbiAgcmVzdWx0OiBUO1xuICBjcmVhdGVSZXN1bHRGcm9tTmF0aXZlKG5hdGl2ZVJlc3VsdDogYW55KTogVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWNvZ25pemVyQ3RvcjxUIGV4dGVuZHMgUmVjb2duaXplcj4ge1xuICBuZXcgKCk6IFQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplckNvbGxlY3Rpb24ge1xuICByZWNvZ25pemVyQXJyYXk6IFJlY29nbml6ZXJbXTtcbiAgYWxsb3dNdWx0aXBsZVJlc3VsdHM6IGJvb2xlYW47XG4gIC8vIHNpY1xuICBtaWxpc2Vjb25kc0JlZm9yZVRpbWVvdXQ6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplckNvbGxlY3Rpb25DdG9yIHtcbiAgbmV3IChyZWNvZ25pemVyQ29sbGVjdGlvbjogUmVjb2duaXplcltdKTogUmVjb2duaXplckNvbGxlY3Rpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYmFyY29kZVR5cGU6IEJhcmNvZGVUeXBlO1xuICByYXdEYXRhOiBzdHJpbmc7XG4gIHN0cmluZ0RhdGE6IHN0cmluZztcbiAgdW5jZXJ0YWluOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxCYXJjb2RlUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QmFyY29kZVJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgYXV0b1NjYWxlRGV0ZWN0aW9uOiBib29sZWFuO1xuICBudWxsUXVpZXRab25lQWxsb3dlZDogYm9vbGVhbjtcbiAgcmVhZENvZGUzOUFzRXh0ZW5kZWREYXRhOiBib29sZWFuO1xuICBzY2FuQXp0ZWNDb2RlOiBib29sZWFuO1xuICBzY2FuQ29kZTEyODogYm9vbGVhbjtcbiAgc2NhbkNvZGUzOTogYm9vbGVhbjtcbiAgc2NhbkRhdGFNYXRyaXg6IGJvb2xlYW47XG4gIHNjYW5FYW4xMzogYm9vbGVhbjtcbiAgc2NhbkVhbjg6IGJvb2xlYW47XG4gIHNjYW5JbnZlcnNlOiBib29sZWFuO1xuICBzY2FuSXRmOiBib29sZWFuO1xuICBzY2FuUGRmNDE3OiBib29sZWFuO1xuICBzY2FuUXJDb2RlOiBib29sZWFuO1xuICBzY2FuVW5jZXJ0YWluOiBib29sZWFuO1xuICBzY2FuVXBjYTogYm9vbGVhbjtcbiAgc2NhblVwY2U6IGJvb2xlYW47XG4gIHNsb3dlclRob3JvdWdoU2NhbjogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8QmFyY29kZVJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXJ6UmVzdWx0IHtcbiAgZG9jdW1lbnRUeXBlOiBzdHJpbmc7XG4gIHByaW1hcnlJZDogc3RyaW5nO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIGdlbmRlcjogc3RyaW5nO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgYWxpZW5OdW1iZXI6IHN0cmluZztcbiAgYXBwbGljYXRpb25SZWNlaXB0TnVtYmVyOiBzdHJpbmc7XG4gIGltbWlncmFudENhc2VOdW1iZXI6IHN0cmluZztcbiAgbXJ6VGV4dDogc3RyaW5nO1xuICBtcnpQYXJzZWQ6IGJvb2xlYW47XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIHN1Y2Nlc3NGcmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplclJlc3VsdEN0b3JcbiAgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgc2xhdmVSZWNvZ25pemVyOiBSZWNvZ25pemVyO1xuICBjcmVhdGVSZXN1bHRGcm9tTmF0aXZlKG5hdGl2ZVJlc3VsdDogeyBzbGF2ZVJlY29nbml6ZXJSZXN1bHQ6IGFueSB9KTogU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJSZXN1bHQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyQ3RvciB7XG4gIG5ldyAocmVjb2duaXplcjogUmVjb2duaXplcik6IFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIGxpY2Vuc2VOdW1iZXI6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdExhc3ROYW1lOiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGxpY2Vuc2VOdW1iZXI6IHN0cmluZztcbiAgbGljZW5zZVR5cGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmFsaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxBdXN0cmFsaWFEbEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmFsaWFEbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWFuY2U6IERhdGU7XG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGV5ZUNvbG9yOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xuICBnaXZlbk5hbWU6IHN0cmluZztcbiAgaGVpZ2h0OiBzdHJpbmc7XG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgbXJ0ZFZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgcHJpbmNpcGFsUmVzaWRlbmNlOiBzdHJpbmc7XG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcbiAgc2V4OiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG4gIHN1cm5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VhbmNlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3RHaXZlbk5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RIZWlnaHQ6IGJvb2xlYW47XG4gIGV4dHJhY3RJc3N1aW5nQXV0aG9yaXR5OiBib29sZWFuO1xuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RQYXNzcG9ydE51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFByaW5jaXBhbFJlc2lkZW5jZTogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFEbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XG4gIGxpY2Vuc2VOdW1iZXI6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgdmVoaWNsZUNhdGVnb3JpZXM6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyaWFEbEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEF1c3RyaWFEbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RJc3N1aW5nQXV0aG9yaXR5OiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFZlaGljbGVDYXRlZ29yaWVzOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8QXVzdHJpYURsRnJvbnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZklzc3VhbmNlOiBEYXRlO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBleWVDb2xvcjogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBoZWlnaHQ6IHN0cmluZztcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xuICBtcnpSZXN1bHQ6IE1yelJlc3VsdDtcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHByaW5jaXBhbFJlc2lkZW5jZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxBdXN0cmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QXVzdHJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1YW5jZTogYm9vbGVhbjtcbiAgZXh0cmFjdEhlaWdodDogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RQcmluY2lwYWxSZXNpZGVuY2U6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUlkQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8QXVzdHJpYUlkQmFja1JlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxBdXN0cmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEF1c3RyaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0R2l2ZW5OYW1lOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8QXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWFuY2U6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBnaXZlbk5hbWU6IHN0cmluZztcbiAgaGVpZ2h0OiBzdHJpbmc7XG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgbXJ6UmVzdWx0OiBNcnpSZXN1bHQ7XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIHBhc3Nwb3J0TnVtYmVyOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3RHaXZlbk5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RIZWlnaHQ6IGJvb2xlYW47XG4gIGV4dHJhY3RJc3N1aW5nQXV0aG9yaXR5OiBib29sZWFuO1xuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RQYXNzcG9ydE51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkcml2ZXJSZXN0cmljdGlvbnM6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3VpbmdBZ2VuY3k6IHN0cmluZztcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8Q29sb21iaWFEbEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REcml2ZXJSZXN0cmljdGlvbnM6IGJvb2xlYW47XG4gIGV4dHJhY3RJc3N1aW5nQWdlbmN5OiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBiaXJ0aERhdGU6IERhdGU7XG4gIGJsb29kR3JvdXA6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmluZ2VycHJpbnQ6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplcjxDb2xvbWJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDb2xvbWJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICBudWxsUXVpZXRab25lQWxsb3dlZDogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHNjYW5VbmNlcnRhaW46IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhSWRCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxDb2xvbWJpYUlkQmFja1JlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplcjxDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RMYXN0TmFtZTogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JvYXRpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGNpdGl6ZW5zaGlwOiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZkV4cGlyeVBlcm1hbmVudDogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcbiAgZG9jdW1lbnRCaWxpbmd1YWw6IGJvb2xlYW47XG4gIGRvY3VtZW50RGF0YU1hdGNoOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5vblJlc2lkZW50OiBib29sZWFuO1xuICBwZXJzb25hbElkZW50aWZpY2F0aW9uTnVtYmVyOiBzdHJpbmc7XG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcbiAgc2V4OiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIENyb2F0aWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8Q3JvYXRpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDcm9hdGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZFeHBpcnlQZXJtYW5lbnQ6IGJvb2xlYW47XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkb2N1bWVudEZvck5vblJlc2lkZW50OiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZWRCeTogc3RyaW5nO1xuICBtcnpSZXN1bHQ6IE1yelJlc3VsdDtcbiAgcmVzaWRlbmNlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIENyb2F0aWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPENyb2F0aWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIENyb2F0aWFJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDcm9hdGlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0SXNzdWVkQnk6IGJvb2xlYW47XG4gIGV4dHJhY3RSZXNpZGVuY2U6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgY2l0aXplbnNoaXA6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5UGVybWFuZW50OiBib29sZWFuO1xuICBkb2N1bWVudEJpbGluZ3VhbDogYm9vbGVhbjtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ3JvYXRpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPENyb2F0aWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPENyb2F0aWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdENpdGl6ZW5zaGlwOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RMYXN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBleHBpcmVzT246IERhdGU7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEN5cHJ1c0lkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q3lwcnVzSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEV4cGlyZXNPbjogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEN5cHJ1c0lkQmFja1JlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlkTnVtYmVyOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REb2N1bWVudE51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgcGVyc29uYWxJZGVudGlmaWNhdGlvbk51bWJlcjogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ3plY2hpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDemVjaGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3plY2hpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xuICBtcnpUZXh0OiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcGVybWFuZW50U3RheTogc3RyaW5nO1xuICBwZXJzb25hbE51bWJlcjogc3RyaW5nO1xuICBwcmltYXJ5SWQ6IHN0cmluZztcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEN6ZWNoaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEN6ZWNoaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEN6ZWNoaWFJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDemVjaGlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEF1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdFBlcm1hbmVudFN0YXk6IGJvb2xlYW47XG4gIGV4dHJhY3RQZXJzb25hbE51bWJlcjogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8Q3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdEdpdmVuTmFtZXM6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8Q3lwcnVzSWRGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRGYWNlUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkb2N1bWVudExvY2F0aW9uOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmYWNlTG9jYXRpb246IFF1YWRyaWxhdGVyYWw7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50RmFjZVJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8RG9jdW1lbnRGYWNlUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudEZhY2VSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxEb2N1bWVudEZhY2VSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdG9yVHlwZTogRG9jdW1lbnRGYWNlRGV0ZWN0b3JUeXBlLlREMTtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICBudW1TdGFibGVEZXRlY3Rpb25zVGhyZXNob2xkOiBudW1iZXI7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFZ3lwdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBuYXRpb25hbE51bWJlcjogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBFZ3lwdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEVneXB0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWd5cHRJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8RWd5cHRJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hdGlvbmFsTnVtYmVyOiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBFZ3lwdElkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEVneXB0SWRGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGNhcmROdW1iZXI6IHN0cmluZztcbiAgY3Z2OiBzdHJpbmc7XG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XG4gIGludmVudG9yeU51bWJlcjogc3RyaW5nO1xuICBvd25lcjogc3RyaW5nO1xuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XG4gIHZhbGlkVGhydTogRGF0ZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplclJlc3VsdD4ge1xuICBhbm9ueW1pemVDYXJkTnVtYmVyOiBib29sZWFuO1xuICBhbm9ueW1pemVDdnY6IGJvb2xlYW47XG4gIGFub255bWl6ZU93bmVyOiBib29sZWFuO1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEludmVudG9yeU51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdE93bmVyOiBib29sZWFuO1xuICBleHRyYWN0VmFsaWRUaHJ1OiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXVkbFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBiaXJ0aERhdGE6IHN0cmluZztcbiAgY291bnRyeTogc3RyaW5nO1xuICBkcml2ZXJOdW1iZXI6IHN0cmluZztcbiAgZXhwaXJ5RGF0ZTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZURhdGU6IERhdGU7XG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgcGVyc29uYWxOdW1iZXI6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRXVkbFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8RXVkbFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXVkbFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEV1ZGxSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGNvdW50cnk6IEV1ZGxDb3VudHJ5LkF1dG9tYXRpYztcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RQZXJzb25hbE51bWJlcjogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBjYW5OdW1iZXI6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XG4gIGV5ZUNvbG9yOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcbiAgaGVpZ2h0OiBzdHJpbmc7XG4gIGlkZW50aXR5Q2FyZE51bWJlcjogc3RyaW5nO1xuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xuICBzZXg6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8R2VybWFueUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduUmVzdWx0OiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueURsQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mSXNzdWVCMTA6IHN0cmluZztcbiAgZGF0ZU9mSXNzdWVCMTBOb3RTcGVjaWZpZWQ6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxHZXJtYW55RGxCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55RGxCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxHZXJtYW55RGxCYWNrUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55SWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGFkZHJlc3NDaXR5OiBzdHJpbmc7XG4gIGFkZHJlc3NIb3VzZU51bWJlcjogc3RyaW5nO1xuICBhZGRyZXNzU3RyZWV0OiBzdHJpbmc7XG4gIGFkZHJlc3NaaXBDb2RlOiBzdHJpbmc7XG4gIGF1dGhvcml0eTogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGV5ZUNvbG91cjogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBoZWlnaHQ6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG1yelBhcnNlZDogYm9vbGVhbjtcbiAgbXJ6VGV4dDogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgb3B0MTogc3RyaW5nO1xuICBvcHQyOiBzdHJpbmc7XG4gIHByaW1hcnlJZDogc3RyaW5nO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8R2VybWFueUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0RXllQ29sb3VyOiBib29sZWFuO1xuICBleHRyYWN0SGVpZ2h0OiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBjYW5OdW1iZXI6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGdpdmVuTmFtZXM6IHN0cmluZztcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG4gIHN1cm5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEdlcm1hbnlJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55SWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdENhbk51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERvY3VtZW50TnVtYmVyOiBib29sZWFuO1xuICBleHRyYWN0R2l2ZW5OYW1lczogYm9vbGVhbjtcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUlkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEdlcm1hbnlJZEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55T2xkSWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG1yelBhcnNlZDogYm9vbGVhbjtcbiAgbXJ6VGV4dDogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgb3B0MTogc3RyaW5nO1xuICBvcHQyOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBwcmltYXJ5SWQ6IHN0cmluZztcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlPbGRJZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8R2VybWFueU9sZElkUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55T2xkSWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxHZXJtYW55T2xkSWRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlPbGRJZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8R2VybWFueU9sZElkUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGF1dGhvcml0eTogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xuICBtcnpUZXh0OiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgb3B0MTogc3RyaW5nO1xuICBvcHQyOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBwcmltYXJ5SWQ6IHN0cmluZztcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG4gIHN1cm5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueVBhc3Nwb3J0UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgY29tbWVyY2lhbENvZGU6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgZnVsbE5hbWU6IHN0cmluZztcbiAgcmVzaWRlbnRpYWxTdGF0dXM6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8SG9uZ0tvbmdJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdEZ1bGxOYW1lOiBib29sZWFuO1xuICBleHRyYWN0UmVzaWRlbnRpYWxTdGF0dXM6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSG9uZ0tvbmdJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIElrYWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGVtcGxveWVyOiBzdHJpbmc7XG4gIGV4cGlyeURhdGU6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmYWN1bHR5QWRkcmVzczogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIHBhc3Nwb3J0TnVtYmVyOiBzdHJpbmc7XG4gIHNlY3Rvcnk6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIElrYWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPElrYWRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIElrYWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxJa2FkUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEVtcGxveWVyOiBib29sZWFuO1xuICBleHRyYWN0RXhwaXJ5RGF0ZTogYm9vbGVhbjtcbiAgZXh0cmFjdEZhY3VsdHlBZGRyZXNzOiBib29sZWFuO1xuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RQYXNzcG9ydE51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdFNlY3RvcjogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSWthZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8SWthZFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBibG9vZFR5cGU6IHN0cmluZztcbiAgY2l0aXplbnNoaXA6IHN0cmluZztcbiAgY2l0eTogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZFeHBpcnlQZXJtYW5lbnQ6IHN0cmluZztcbiAgZGlzdHJpY3Q6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGtlbERlc2E6IHN0cmluZztcbiAgbWFyaXRhbFN0YXR1czogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIG9jY3VwYXRpb246IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHByb3ZpbmNlOiBzdHJpbmc7XG4gIHJlbGlnaW9uOiBzdHJpbmc7XG4gIHJ0OiBzdHJpbmc7XG4gIHJ3OiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxJbmRvbmVzaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8SW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xuICBleHRyYWN0Qmxvb2RUeXBlOiBib29sZWFuO1xuICBleHRyYWN0Q2l0aXplbnNoaXA6IGJvb2xlYW47XG4gIGV4dHJhY3RDaXR5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGlzdHJpY3Q6IGJvb2xlYW47XG4gIGV4dHJhY3RLZWxEZXNhOiBib29sZWFuO1xuICBleHRyYWN0TWFyaXRhbFN0YXR1czogYm9vbGVhbjtcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RPY2N1cGF0aW9uOiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0UmVsaWdpb246IGJvb2xlYW47XG4gIGV4dHJhY3RSdDogYm9vbGVhbjtcbiAgZXh0cmFjdFJ3OiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxJbmRvbmVzaWFJZEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZHJpdmVyTnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWVkQnk6IHN0cmluZztcbiAgLy8gc2ljXG4gIGxpY2VuY2VDYXRlZ29yaWVzOiBzdHJpbmc7XG4gIC8vIHNpY1xuICBsaWNlbmNlTnVtYmVyOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIElyZWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxJcmVsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxJcmVsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VlZEJ5OiBib29sZWFuO1xuICBleHRyYWN0TGljZW5jZUNhdGVnb3JpZXM6IGJvb2xlYW47XG4gIGV4dHJhY3RMaWNlbmNlTnVtYmVyOiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPElyZWxhbmREbEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgLy8gc2ljXG4gIGxpY2VuY2VDYXRlZ29yaWVzOiBzdHJpbmc7XG4gIC8vIHNpY1xuICBsaWNlbmNlTnVtYmVyOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEl0YWx5RGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8SXRhbHlEbEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBJdGFseURsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3RHaXZlbk5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RJc3N1aW5nQXV0aG9yaXR5OiBib29sZWFuO1xuICBleHRyYWN0TGljZW5jZUNhdGVnb3JpZXM6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBJdGFseURsRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEl0YWx5RGxGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hbWU6IHN0cmluZztcbiAgbmF0aW9uYWxOdW1iZXI6IHN0cmluZztcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEpvcmRhbkNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEpvcmRhbkNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIEpvcmRhbkNvbWJpbmVkUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxKb3JkYW5Db21iaW5lZFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG1yelBhcnNlZDogYm9vbGVhbjtcbiAgbXJ6VGV4dDogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgb3B0MTogc3RyaW5nO1xuICBvcHQyOiBzdHJpbmc7XG4gIHByaW1hcnlJZDogc3RyaW5nO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxKb3JkYW5JZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEpvcmRhbklkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEpvcmRhbklkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIEpvcmRhbklkQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8Sm9yZGFuSWRCYWNrUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5JZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgbmF0aW9uYWxOdW1iZXI6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEpvcmRhbklkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEpvcmRhbklkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEpvcmRhbklkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxKb3JkYW5JZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8Sm9yZGFuSWRGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgS3V3YWl0SWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBtcnpSZXN1bHQ6IE1yelJlc3VsdDtcbiAgc2VyaWFsTm86IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgS3V3YWl0SWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxLdXdhaXRJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEt1d2FpdElkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEt1d2FpdElkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXJpYWxObzogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBLdXdhaXRJZEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEt1d2FpdElkQmFja1JlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgS3V3YWl0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYmlydGhEYXRhOiBEYXRlO1xuICBjaXZpbElkTnVtYmVyOiBzdHJpbmc7XG4gIGV4cGlyeURhdGU6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBLdXdhaXRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxLdXdhaXRJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBLdXdhaXRJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8S3V3YWl0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RCaXJ0aERhdGU6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgS3V3YWl0SWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8S3V3YWl0SWRGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFsYXlzaWFEbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBjaXR5OiBzdHJpbmc7XG4gIGRsQ2xhc3M6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxBZGRyZXNzOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlkZW50aXR5TnVtYmVyOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgb3duZXJTdGF0ZTogc3RyaW5nO1xuICBzdHJlZXQ6IHN0cmluZztcbiAgdmFsaWRGcm9tOiBEYXRlO1xuICB2YWxpZFVudGlsOiBEYXRlO1xuICB6aXBjb2RlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8TWFsYXlzaWFEbEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcbiAgZXh0cmFjdENsYXNzOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xuICBleHRyYWN0VmFsaWRGcm9tOiBib29sZWFuO1xuICBleHRyYWN0VmFsaWRVbnRpbDogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFybXlOdW1iZXI6IHN0cmluZztcbiAgYmlydGhEYXRhOiBEYXRlO1xuICBjaXR5OiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsQWRkcmVzczogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBmdWxsTmFtZTogc3RyaW5nO1xuICBucmljOiBzdHJpbmc7XG4gIG93bmVyU3RhdGU6IHN0cmluZztcbiAgcmVsaWdpb246IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG4gIHN0cmVldDogc3RyaW5nO1xuICB6aXBjb2RlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplclJlc3VsdEN0b3JcbiAgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RGdWxsTmFtZUFuZEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3RSZWxpZ2lvbjogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8TWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBjdXJwOiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBlbGVjdG9yS2V5OiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBmdWxsTmFtZTogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3JcbiAgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xuICBleHRyYWN0Q3VycDogYm9vbGVhbjtcbiAgZXh0cmFjdEZ1bGxOYW1lOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9yb2Njb0lkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBjaXZpbFN0YXR1c051bWJlcjogc3RyaW5nO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhdGhlcnNOYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG1vdGhlcnNOYW1lOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBNb3JvY2NvSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNb3JvY2NvSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBNb3JvY2NvSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TW9yb2Njb0lkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xuICBleHRyYWN0Q2l2aWxTdGF0dXNOdW1iZXI6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3RGYXRoZXJzTmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdE1vdGhlcnNOYW1lOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIE1vcm9jY29JZEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPE1vcm9jY29JZEJhY2tSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vcm9jY29JZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG4gIHN1cm5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPE1vcm9jY29JZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBNb3JvY2NvSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE1vcm9jY29JZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1vcm9jY29JZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxNb3JvY2NvSWRGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXJ0ZENvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhbGllbk51bWJlcjogc3RyaW5nO1xuICBhcHBsaWNhdGlvblJlY2VpcHROdW1iZXI6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGRvY3VtZW50VHlwZTogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcbiAgaW1taWdyYW50Q2FzZU51bWJlcjogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbXJ6SW1hZ2U6IHN0cmluZztcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xuICBtcnpUZXh0OiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1ydGRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8TXJ0ZENvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBNcnRkQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNcnRkQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGFsbG93VW5wYXJzZWRSZXN1bHRzOiBib29sZWFuO1xuICBhbGxvd1VudmVyaWZpZWRSZXN1bHRzOiBib29sZWFuO1xuICBudW1TdGFibGVEZXRlY3Rpb25zVGhyZXNob2xkOiBudW1iZXI7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybk1yekltYWdlOiBib29sZWFuO1xuICBzaWduUmVzdWx0OiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBNcnRkQ29tYmluZWRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPE1ydGRDb21iaW5lZFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXJ0ZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbXJ6SW1hZ2U6IHN0cmluZztcbiAgbXJ6UmVzdWx0OiBNcnpSZXN1bHQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1ydGRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPE1ydGRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ydGRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNcnRkUmVjb2duaXplclJlc3VsdD4ge1xuICBhbGxvd1VucGFyc2VkUmVzdWx0czogYm9vbGVhbjtcbiAgYWxsb3dVbnZlcmlmaWVkUmVzdWx0czogYm9vbGVhbjtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5NcnpJbWFnZTogYm9vbGVhbjtcbiAgc2F2ZUltYWdlRFBJOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1ydGRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPE1ydGRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIE15S2FkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGV4dGVuZGVkTnJpYzogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBucmljOiBzdHJpbmc7XG4gIG9sZE5yaWM6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE15S2FkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8TXlLYWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBNeUthZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNeUthZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0T2xkTnJpYzogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTXlLYWRCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxNeUthZEJhY2tSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIE15S2FkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFybXlOdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG5yaWNOdW1iZXI6IHN0cmluZztcbiAgb3duZXJBZGRyZXNzOiBzdHJpbmc7XG4gIG93bmVyQWRkcmVzc0NpdHk6IHN0cmluZztcbiAgb3duZXJBZGRyZXNzU3RhdGU6IHN0cmluZztcbiAgb3duZXJBZGRyZXNzU3RyZWV0OiBzdHJpbmc7XG4gIG93bmVyQWRkcmVzc1ppcENvZGU6IHN0cmluZztcbiAgb3duZXJCaXJ0aERhdGU6IERhdGU7XG4gIG93bmVyRnVsbE5hbWU6IHN0cmluZztcbiAgb3duZXJSZWxpZ2lvbjogc3RyaW5nO1xuICBvd25lclNleDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBNeUthZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNeUthZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBNeUthZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TXlLYWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZXh0cmFjdEFybXlOdW1iZXI6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIE15S2FkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPE15S2FkRnJvbnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ld1plYWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGNhcmRWZXJzaW9uOiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkb25vckluZGljYXRvcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lczogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBsaWNlbmNlTnVtYmVyOiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG4gIHN1cm5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvclxuICBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPE5ld1plYWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE5ld1plYWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0RG9ub3JJbmRpY2F0b3I6IGJvb2xlYW47XG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8TmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rQ2FyZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgY2FyZE51bWJlcjogc3RyaW5nO1xuICBjdnY6IHN0cmluZztcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xuICBkb2N1bWVudERhdGFNYXRjaDogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xuICBpbnZlbnRvcnlOdW1iZXI6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG93bmVyOiBzdHJpbmc7XG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcbiAgdmFsaWRUaHJ1OiBEYXRlO1xufVxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEJsaW5rQ2FyZFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QmxpbmtDYXJkUmVjb2duaXplclJlc3VsdD4ge1xuICBhbm9ueW1pemVDYXJkTnVtYmVyOiBib29sZWFuO1xuICBhbm9ueW1pemVDdnY6IGJvb2xlYW47XG4gIGFub255bWl6ZU93bmVyOiBib29sZWFuO1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEN2djogYm9vbGVhbjtcbiAgZXh0cmFjdEludmVudG9yeU51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdE93bmVyOiBib29sZWFuO1xuICBleHRyYWN0VmFsaWRUaHJ1OiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rQ2FyZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8QmxpbmtDYXJkUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBQZGY0MTdSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGJhcmNvZGVUeXBlOiBzdHJpbmc7XG4gIHJhd0RhdGE6IHN0cmluZztcbiAgc3RyaW5nRGF0YTogc3RyaW5nO1xuICB1bmNlcnRhaW46IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFBkZjQxN1JlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8UGRmNDE3UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBQZGY0MTdSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxQZGY0MTdSZWNvZ25pemVyUmVzdWx0PiB7XG4gIG51bGxRdWlldFpvbmVBbGxvd2VkOiBib29sZWFuO1xuICBzY2FuSW52ZXJzZTogYm9vbGVhbjtcbiAgc2NhblVuY2VydGFpbjogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUGRmNDE3UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxQZGY0MTdSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvbGFuZENvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XG4gIGRvY3VtZW50RGF0YU1hdGNoOiBzdHJpbmc7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmYW1pbHlOYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XG4gIGdpdmVuTmFtZXM6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBwYXJlbnRzR2l2ZW5OYW1lczogc3RyaW5nO1xuICBwZXJzb25hbE51bWJlcjogc3RyaW5nO1xuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XG4gIHNleDogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFBvbGFuZENvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdEZhbWlseU5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RHaXZlbk5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RQYXJlbnRzR2l2ZW5OYW1lczogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFBvbGFuZENvbWJpbmVkUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxQb2xhbmRDb21iaW5lZFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG1yelBhcnNlZDogYm9vbGVhbjtcbiAgbXJ6VGV4dDogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgb3B0MTogc3RyaW5nO1xuICBvcHQyOiBzdHJpbmc7XG4gIHByaW1hcnlJZDogc3RyaW5nO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxQb2xhbmRJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvbGFuZElkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFBvbGFuZElkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRJZEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFBvbGFuZElkQmFja1JlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmYW1pbHlOYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGdpdmVuTmFtZXM6IHN0cmluZztcbiAgcGFyZW50c0dpdmVuTmFtZXM6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG4gIHN1cm5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8UG9sYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFBvbGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RGYW1pbHlOYW1lOiBib29sZWFuO1xuICBleHRyYWN0R2l2ZW5OYW1lczogYm9vbGVhbjtcbiAgZXh0cmFjdFBhcmVudHNHaXZlbk5hbWVzOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kSWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8UG9sYW5kSWRGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm9tYW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgY2FyZE51bWJlcjogc3RyaW5nO1xuICBjbnA6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaWRTZXJpZXM6IHN0cmluZztcbiAgaXNzdWVkQnk6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIG1yelBhcnNlZDogYm9vbGVhbjtcbiAgbXJ6VGV4dDogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgbm9uTVJaTmF0aW9uYWxpdHk6IHN0cmluZztcbiAgbm9uTVJaU2V4OiBzdHJpbmc7XG4gIG9wdDE6IHN0cmluZztcbiAgb3B0Mjogc3RyaW5nO1xuICBwYXJlbnROYW1lczogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICB2YWxpZEZyb206IERhdGU7XG4gIHZhbGlkVW50aWw6IERhdGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIFJvbWFuaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxSb21hbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm9tYW5pYUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxSb21hbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xuICBleHRyYWN0Rmlyc3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0SXNzdWVkQnk6IGJvb2xlYW47XG4gIGV4dHJhY3RMYXN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdE5vbk1SWlNleDogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFZhbGlkRnJvbTogYm9vbGVhbjtcbiAgZXh0cmFjdFZhbGlkVW50aWw6IGJvb2xlYW47XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFJvbWFuaWFJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxSb21hbmlhSWRGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XG4gIGlkZW50aXR5Q2FyZE51bWJlcjogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgam1iZzogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNlcmJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNlcmJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFNlcmJpYUNvbWJpbmVkUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTZXJiaWFDb21iaW5lZFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG1yelBhcnNlZDogYm9vbGVhbjtcbiAgbXJ6VGV4dDogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgb3B0MTogc3RyaW5nO1xuICBvcHQyOiBzdHJpbmc7XG4gIHByaW1hcnlJZDogc3RyaW5nO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTZXJiaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcmJpYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNlcmJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFJZEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNlcmJpYUlkQmFja1JlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3VpbmdEYXRlOiBEYXRlO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICB2YWxpZFRocnU6IERhdGU7XG4gIHZhbGlkVW50aWw6IERhdGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTZXJiaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VpbmdEYXRlOiBib29sZWFuO1xuICBleHRyYWN0VmFsaWRVbnRpbDogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbU51bWJlclJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgc2ltTnVtYmVyOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFNpbU51bWJlclJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U2ltTnVtYmVyUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTaW1OdW1iZXJSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTaW1OdW1iZXJSZWNvZ25pemVyUmVzdWx0PiB7fVxuZXhwb3J0IGludGVyZmFjZSBTaW1OdW1iZXJSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNpbU51bWJlclJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgY29tcGFueU5hbWU6IHN0cmluZztcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplclJlc3VsdEN0b3JcbiAgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RDb21wYW55TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgYWRkcmVzc0NoYW5nZURhdGU6IERhdGU7XG4gIGJsb29kR3JvdXA6IHN0cmluZztcbiAgY291bnRyeU9mQmlydGg6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcmFjZTogc3RyaW5nO1xuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3JcbiAgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xuICBleHRyYWN0QWRkcmVzc0NoYW5nZURhdGU6IGJvb2xlYW47XG4gIGV4dHJhY3RCbG9vZEdyb3VwOiBib29sZWFuO1xuICBleHRyYWN0Q291bnRyeU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFJhY2U6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBiaXJ0aERhdGE6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZURhdGU6IERhdGU7XG4gIGxpY2VuY2VOdW1iZXI6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB2YWxpZFRpbGw6IERhdGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTaW5nYXBvcmVEbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEJpcnRoRGF0ZTogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VlRGF0ZTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RWYWxpZFRpbGw6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGFkZHJlc3NDaGFuZ2VEYXRlOiBzdHJpbmc7XG4gIGJsb29kR3JvdXA6IHN0cmluZztcbiAgY2FyZE51bWJlcjogc3RyaW5nO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xuICBleHRyYWN0QWRkcmVzc0NoYW5nZURhdGU6IGJvb2xlYW47XG4gIGV4dHJhY3RCbG9vZEdyb3VwOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGNvdW50cnlPZkJpcnRoOiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcmFjZTogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0Q291bnRyeU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RSYWNlOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRpZ2l0YWxTaWduYXR1cmU6IG51bWJlcjtcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IG51bWJlcjtcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgcGVyc29uYWxJZGVudGlmaWNhdGlvbk51bWJlcjogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICBzcGVjaWFsUmVtYXJrczogc3RyaW5nO1xuICBzdXJuYW1lQXRCaXJ0aDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0RG9jdW1lbnROdW1iZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RJc3N1ZWRCeTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBleHRyYWN0U3BlY2lhbFJlbWFya3M6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lQXRCaXJ0aDogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBtcnpQYXJzZWQ6IGJvb2xlYW47XG4gIG1yelRleHQ6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIG9wdDE6IHN0cmluZztcbiAgb3B0Mjogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzcGVjaWFsUmVtYXJrczogc3RyaW5nO1xuICBzdXJuYW1lQXRCaXJ0aDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U2xvdmFraWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2xvdmFraWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0U3BlY2lhbFJlbWFya3M6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lQXRCaXJ0aDogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhSWRCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTbG92YWtpYUlkQmFja1JlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZWRCeTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBwZXJzb25hbE51bWJlcjogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdERvY3VtZW50TnVtYmVyOiBib29sZWFuO1xuICBleHRyYWN0SXNzdWVkQnk6IGJvb2xlYW47XG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2xvdmFraWFJZEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGNpdGl6ZW5zaGlwOiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XG4gIGlkZW50aXR5Q2FyZE51bWJlcjogc3RyaW5nO1xuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBwZXJzb25hbElkZW50aWZpY2F0aW9uTnVtYmVyOiBzdHJpbmc7XG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcbiAgc2V4OiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGF1dGhvcml0eTogc3RyaW5nO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG1yelBhcnNlZDogYm9vbGVhbjtcbiAgbXJ6VGV4dDogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgb3B0MTogc3RyaW5nO1xuICBvcHQyOiBzdHJpbmc7XG4gIHByaW1hcnlJZDogc3RyaW5nO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEF1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U2xvdmVuaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2xvdmVuaWFJZEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTcGFpbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgbGljZW5jZUNhdGVnb3JpZXM6IHN0cmluZztcbiAgbnVtYmVyOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG4gIHZhbGlkRnJvbTogRGF0ZTtcbiAgdmFsaWRVbnRpbDogRGF0ZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3BhaW5EbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTcGFpbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNwYWluRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RMaWNlbmNlQ2F0ZWdvcmllczogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RWYWxpZEZyb206IGJvb2xlYW47XG4gIGV4dHJhY3RWYWxpZFVudGlsOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBTcGFpbkRsRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNwYWluRGxGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dlZGVuRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1aW5nQWdlbmN5OiBzdHJpbmc7XG4gIGxpY2VuY2VDYXRlZ29yaWVzOiBzdHJpbmc7XG4gIGxpY2VuY2VOdW1iZXI6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICByZWZlcmVuY2VOdW1iZXI6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBTd2VkZW5EbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTd2VkZW5EbEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTd2VkZW5EbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3dlZGVuRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdExpY2VuY2VDYXRlZ29yaWVzOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFJlZmVyZW5jZU51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RWYWxpZEZyb206IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBTd2VkZW5EbEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTd2VkZW5EbEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBleHBpcnlEYXRlUGVybWFuZW50OiBib29sZWFuO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgdmVoaWNsZUNhdGVnb3JpZXM6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplclJlc3VsdEN0b3JcbiAgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0Rmlyc3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdExhc3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0VmVoaWNsZUNhdGVnb3JpZXM6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U3dpdHplcmxhbmREbEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaGVpZ2h0OiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBtcnpQYXJzZWQ6IGJvb2xlYW47XG4gIG1yelRleHQ6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIG5vbk1yekRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgbm9uTXJ6U2V4OiBzdHJpbmc7XG4gIG9wdDE6IHN0cmluZztcbiAgb3B0Mjogc3RyaW5nO1xuICBwbGFjZU9mT3JpZ2luOiBzdHJpbmc7XG4gIHByaW1hcnlJZDogc3RyaW5nO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBzZXg6IFN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvclxuICBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEF1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0SGVpZ2h0OiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZk9yaWdpbjogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGdpdmVuTmFtZTogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yXG4gIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0R2l2ZW5OYW1lOiBib29sZWFuO1xuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGF1dGhvcml0eTogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBnaXZlbk5hbWU6IHN0cmluZztcbiAgaGVpZ2h0OiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBtcnpQYXJzZWQ6IGJvb2xlYW47XG4gIG1yelRleHQ6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIG5vbk1yekRhdGVPZkJpcnRoOiBEYXRlO1xuICBub25NcnpEYXRlT2ZFeHBpcnk6IERhdGU7XG4gIG5vbk1yelNleDogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcGFzc3BvcnROdW1iZXI6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHByaW1hcnlJZDogc3RyaW5nO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplclJlc3VsdEN0b3JcbiAgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0R2l2ZW5OYW1lOiBib29sZWFuO1xuICBleHRyYWN0SGVpZ2h0OiBib29sZWFuO1xuICBleHRyYWN0UGFzc3BvcnROdW1iZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZXhwaXJ5RGF0ZTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3VlRGF0ZTogRGF0ZTtcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xuICBsaWNlbnNpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBwbGFjZU9mSXNzdWU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yXG4gIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8VW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdExpY2Vuc2VOdW1iZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RMaWNlbnNpbmdBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mSXNzdWU6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8VW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBtcnpSZXN1bHQ6IE1yelJlc3VsdDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3JcbiAgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpZE51bWJlcjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvclxuICBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBWaW5SZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIHZpbjogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBWaW5SZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFZpblJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmluUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8VmluUmVjb2duaXplclJlc3VsdD4ge31cbmV4cG9ydCBpbnRlcmZhY2UgVmluUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxWaW5SZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZGxSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIG9wdGlvbmFsRWxlbWVudHM6IGFueVtdO1xuICByYXdEYXRhOiBzdHJpbmc7XG4gIHJhd1N0cmluZ0RhdGE6IHN0cmluZztcbiAgdW5jZXJ0YWluOiBzdHJpbmc7XG4gIGZpZWxkczogYW55W107XG59XG5leHBvcnQgaW50ZXJmYWNlIFVzZGxSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFVzZGxSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZGxSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxVc2RsUmVjb2duaXplclJlc3VsdD4ge1xuICBudWxsUXVpZXRab25lQWxsb3dlZDogYm9vbGVhbjtcbiAgdW5jZXJ0YWluRGVjb2Rpbmc6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFVzZGxSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFVzZGxSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZGxDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcbiAgb3B0aW9uYWxFbGVtZW50czogYW55W107XG4gIHJhd0RhdGE6IHN0cmluZztcbiAgcmF3U3RyaW5nRGF0YTogc3RyaW5nO1xuICB1bmNlcnRhaW46IGJvb2xlYW47XG4gIGZpZWxkczogYW55W107XG59XG5leHBvcnQgaW50ZXJmYWNlIFVzZGxDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8VXNkbENvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBVc2RsQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxVc2RsQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICBzaWduUmVzdWx0OiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBVc2RsQ29tYmluZWRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFVzZGxDb21iaW5lZFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtJZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8QmxpbmtJZFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtJZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEJsaW5rSWRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIGFub255bWl6YXRpb25Nb2RlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtJZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxOYW1lOiBzdHJpbmc7XG4gIGxvY2FsaXplZE5hbWU6IHN0cmluZztcbiAgYWRkaXRpb25hbE5hbWVJbmZvcm1hdGlvbjogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIHNleDogc3RyaW5nO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBtcnpSZXN1bHQ6IE1yelJlc3VsdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCbGlua0lkT3ZlcmxheVNldHRpbmdzQ3RvciB7XG4gIG5ldyAoKTogQmxpbmtJZE92ZXJsYXlTZXR0aW5ncztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtJZE92ZXJsYXlTZXR0aW5ncyBleHRlbmRzIE92ZXJsYXlTZXR0aW5ncyB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rSWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEJsaW5rSWRSZWNvZ25pemVyUmVzdWx0PiB7fVxuLyoqXG4gKiBAbmFtZSBCbGlua0lkXG4gKiBAZGVzY3JpcHRpb25cbiAqIE1pY3JvYmxpbmsgU0RLIHdyYXBwZXIgZm9yIGJhcmNvZGUgYW5kIGRvY3VtZW50IHNjYW5uaW5nLiBTZWUgdGhlXG4gKiBibGlua2lkLXBob25lZ2FwIHJlcG9zaXRvcnkgZm9yIGF2YWlsYWJsZSByZWNvZ25pemVycyBhbmQgb3RoZXIgc2V0dGluZ3NcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJsaW5rSWQsIFJlY29nbml6ZXJSZXN1bHRTdGF0ZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmxpbmtpZC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmxpbmtJZDogQmxpbmtJZCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogY29uc3Qgb3ZlcmxheVNldHRpbmdzID0gbmV3IHRoaXMuYmxpbmtJZC5Eb2N1bWVudE92ZXJsYXlTZXR0aW5ncygpO1xuICpcbiAqIGNvbnN0IHVzZGxSZWNvZ25pemVyID0gbmV3IHRoaXMuYmxpbmtJZC5Vc2RsUmVjb2duaXplcigpO1xuICogY29uc3QgdXNkbFN1Y2Nlc3NGcmFtZUdyYWJiZXIgPSBuZXcgdGhpcy5ibGlua0lkLlN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyKHVzZGxSZWNvZ25pemVyKTtcbiAqXG4gKiBjb25zdCBiYXJjb2RlUmVjb2duaXplciA9IG5ldyB0aGlzLmJsaW5rSWQuQmFyY29kZVJlY29nbml6ZXIoKTtcbiAqIGJhcmNvZGVSZWNvZ25pemVyLnNjYW5QZGY0MTcgPSB0cnVlO1xuICpcbiAqIGNvbnN0IHJlY29nbml6ZXJDb2xsZWN0aW9uID0gbmV3IHRoaXMuYmxpbmtJZC5SZWNvZ25pemVyQ29sbGVjdGlvbihbXG4gKiAgIHVzZGxTdWNjZXNzRnJhbWVHcmFiYmVyLFxuICogICBiYXJjb2RlUmVjb2duaXplcixcbiAqIF0pO1xuICpcbiAqIGNvbnN0IGNhbmNlbGVkID0gYXdhaXQgdGhpcy5ibGlua0lkLnNjYW5XaXRoQ2FtZXJhKFxuICogICBvdmVybGF5U2V0dGluZ3MsXG4gKiAgIHJlY29nbml6ZXJDb2xsZWN0aW9uLFxuICogICB7IGlvczogSU9TX0xJQ0VOU0VfS0VZLCBhbmRyb2lkOiBBTkRST0lEX0xJQ0VOU0VfS0VZIH0sXG4gKiApO1xuICpcbiAqIGlmICghY2FuY2VsZWQpIHtcbiAqICAgaWYgKHVzZGxSZWNvZ25pemVyLnJlc3VsdC5yZXN1bHRTdGF0ZSA9PT0gUmVjb2duaXplclJlc3VsdFN0YXRlLnZhbGlkKSB7XG4gKiAgICAgY29uc3Qgc3VjY2Vzc0ZyYW1lID0gdXNkbFN1Y2Nlc3NGcmFtZUdyYWJiZXIucmVzdWx0LnN1Y2Nlc3NGcmFtZTtcbiAqICAgICBpZiAoc3VjY2Vzc0ZyYW1lKSB7XG4gKiAgICAgICB0aGlzLmJhc2U2NEltZyA9IGBkYXRhOmltYWdlL2pwZztiYXNlNjQsICR7c3VjY2Vzc0ZyYW1lfWA7XG4gKiAgICAgICB0aGlzLmZpZWxkcyA9IHVzZGxSZWNvZ25pemVyLnJlc3VsdC5maWVsZHM7XG4gKiAgICAgfVxuICogICB9IGVsc2Uge1xuICogICAgIHRoaXMuYmFyY29kZVN0cmluZ0RhdGEgPSBiYXJjb2RlUmVjb2duaXplci5yZXN1bHQuc3RyaW5nRGF0YTtcbiAqICAgfVxuICogfVxuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0IG92ZXJsYXlTZXR0aW5ncyA9IG5ldyB0aGlzLmJsaW5rSWQuQmxpbmtDYXJkT3ZlcmxheVNldHRpbmdzKCk7XG4gKiBjb25zdCByZWNvZ25pemVyID0gbmV3IHRoaXMuYmxpbmtJZC5CbGlua0NhcmRSZWNvZ25pemVyKCk7XG4gKiByZWNvZ25pemVyLnJldHVybkZ1bGxEb2N1bWVudEltYWdlID0gZmFsc2U7XG4gKiByZWNvZ25pemVyLmRldGVjdEdsYXJlID0gdHJ1ZTtcbiAqIHJlY29nbml6ZXIuZXh0cmFjdEN2diA9IHRydWU7XG4gKiByZWNvZ25pemVyLmV4dHJhY3RWYWxpZFRocnUgPSB0cnVlO1xuICogcmVjb2duaXplci5leHRyYWN0T3duZXIgPSB0cnVlO1xuICpcbiAqIGNvbnN0IHJlY29nbml6ZXJDb2xsZWN0aW9uID0gbmV3IHRoaXMuYmxpbmtJZC5SZWNvZ25pemVyQ29sbGVjdGlvbihbcmVjb2duaXplcl0pO1xuICogY29uc3QgY2FuY2VsZWQgPSBhd2FpdCB0aGlzLmJsaW5rSWQuc2NhbldpdGhDYW1lcmEoXG4gKiAgIG92ZXJsYXlTZXR0aW5ncyxcbiAqICAgcmVjb2duaXplckNvbGxlY3Rpb24sXG4gKiAgIHtcbiAqICAgICBpb3M6ICcnLCAvL2lPUyBMaWNlbnNlIEtleVxuICogICAgIGFuZHJvaWQ6ICcnIC8vQW5kcm9pZCBMaWNlbnNlIEtleVxuICogICB9LFxuICogKTtcbiAqXG4gKiBpZiAoIWNhbmNlbGVkKSB7XG4gKiAgIGlmIChyZWNvZ25pemVyLnJlc3VsdC5yZXN1bHRTdGF0ZSA9PT0gUmVjb2duaXplclJlc3VsdFN0YXRlLnZhbGlkKSB7XG4gKiAgICAgY29uc3QgcmVzdWx0cyA9IHJlY29nbml6ZXIucmVzdWx0O1xuICpcbiAqICAgICBpZiAocmVzdWx0cy5yZXN1bHRTdGF0ZSA9PT0gUmVjb2duaXplclJlc3VsdFN0YXRlLnZhbGlkKSB7XG4gKiAgICAgICBjb25zdCBjY0luZm8gPSB7XG4gKiAgICAgICAgIGNhcmROdW1iZXI6IE51bWJlcihyZXN1bHRzLmNhcmROdW1iZXIpLFxuICogICAgICAgICBleHBpcmF0aW9uTW9udGg6IE51bWJlcihyZXN1bHRzLnZhbGlkVGhydS5tb250aCksXG4gKiAgICAgICAgIGV4cGlyYXRpb25ZZWFyOiBOdW1iZXIocmVzdWx0cy52YWxpZFRocnUueWVhciksXG4gKiAgICAgICAgIGN2djogTnVtYmVyKHJlc3VsdHMuY3Z2KVxuICogICAgICAgfTtcbiAqICAgICB9XG4gKiAgIH1cbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0JsaW5rSWQnLFxuICBwbHVnaW46ICdibGlua2lkLWNvcmRvdmEnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuQmxpbmtJRCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vQmxpbmtJRC9ibGlua2lkLXBob25lZ2FwJyxcbiAgaW5zdGFsbDpcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGJsaW5raWQtY29yZG92YSAtLXZhcmlhYmxlIENBTUVSQV9VU0FHRV9ERVNDUklQVElPTj1cIkVuYWJsZSB5b3VyIGNhbWVyYSBzbyB0aGF0IHlvdSBjYW4gc2NhbiB5b3VyIElEIHRvIHZhbGlkYXRlIHlvdXIgYWNjb3VudFwiJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJsaW5rSWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBPcGVucyB0aGUgY2FtZXJhIGRpYWxvZyBhbmQgYXR0ZW1wdHMgdG8gc2NhbiBhIGJhcmNvZGUvZG9jdW1lbnRcbiAgICogQHBhcmFtIG92ZXJsYXlTZXR0aW5ncyB7T3ZlcmxheVNldHRpbmdzfSBmb3IgY2FtZXJhIG92ZXJsYXkgY3VzdG9taXphdGlvblxuICAgKiBAcGFyYW0gcmVjb2duaXplckNvbGxlY3Rpb24ge1JlY29nbml6ZXJDb2xsZWN0aW9ufSBjb2xsZWN0aW9uIG9mIHJlY29nbml6ZXJzIHRvIHNjYW4gd2l0aFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIHNjYW5XaXRoQ2FtZXJhKFxuICAgIG92ZXJsYXlTZXR0aW5nczogT3ZlcmxheVNldHRpbmdzLFxuICAgIHJlY29nbml6ZXJDb2xsZWN0aW9uOiBSZWNvZ25pemVyQ29sbGVjdGlvbixcbiAgICBsaWNlbnNlczogTGljZW5zZXNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIERhdGU6IERhdGVDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgUG9pbnQ6IFBvaW50Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFF1YWRyaWxhdGVyYWw6IFF1YWRyaWxhdGVyYWxDdG9yO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCYXJjb2RlT3ZlcmxheVNldHRpbmdzOiBCYXJjb2RlT3ZlcmxheVNldHRpbmdzQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIERvY3VtZW50T3ZlcmxheVNldHRpbmdzOiBEb2N1bWVudE92ZXJsYXlTZXR0aW5nc0N0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBEb2N1bWVudFZlcmlmaWNhdGlvbk92ZXJsYXlTZXR0aW5nczogRG9jdW1lbnRWZXJpZmljYXRpb25PdmVybGF5U2V0dGluZ3NDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQmxpbmtDYXJkT3ZlcmxheVNldHRpbmdzOiBCbGlua0NhcmRPdmVybGF5U2V0dGluZ3NDdG9yO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBSZWNvZ25pemVyQ29sbGVjdGlvbjogUmVjb2duaXplckNvbGxlY3Rpb25DdG9yO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCYXJjb2RlUmVjb2duaXplclJlc3VsdDogQmFyY29kZVJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQmFyY29kZVJlY29nbml6ZXI6IEJhcmNvZGVSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyUmVzdWx0OiBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplcjogU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJDdG9yO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyUmVzdWx0OiBBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXI6IEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyOiBBdXN0cmFsaWFEbEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXI6IEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyOiBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyOiBBdXN0cmlhSWRCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEF1c3RyaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXI6IEF1c3RyaWFJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0OiBBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXI6IEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyOiBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyUmVzdWx0OiBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQmxpbmtDYXJkUmVjb2duaXplclJlc3VsdDogQmxpbmtDYXJkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCbGlua0NhcmRSZWNvZ25pemVyOiBCbGlua0NhcmRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENvbG9tYmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IENvbG9tYmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyOiBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ29sb21iaWFJZEZyb250UmVjb2duaXplclJlc3VsdDogQ29sb21iaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyOiBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENyb2F0aWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IENyb2F0aWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ3JvYXRpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IENyb2F0aWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENyb2F0aWFJZEZyb250UmVjb2duaXplclJlc3VsdDogQ3JvYXRpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEN5cHJ1c0lkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEN5cHJ1c0lkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ3lwcnVzSWRCYWNrUmVjb2duaXplcjogQ3lwcnVzSWRCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdDogQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXI6IEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ3plY2hpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEN6ZWNoaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIERvY3VtZW50RmFjZVJlY29nbml6ZXJSZXN1bHQ6IERvY3VtZW50RmFjZVJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgRWd5cHRJZEZyb250UmVjb2duaXplclJlc3VsdDogRWd5cHRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBFZ3lwdElkRnJvbnRSZWNvZ25pemVyOiBFZ3lwdElkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEV1ZGxSZWNvZ25pemVyUmVzdWx0OiBFdWRsUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXI6IEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueURsQmFja1JlY29nbml6ZXJSZXN1bHQ6IEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyOiBHZXJtYW55RGxCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55SWRCYWNrUmVjb2duaXplclJlc3VsdDogR2VybWFueUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueUlkQmFja1JlY29nbml6ZXI6IEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlJZEZyb250UmVjb2duaXplclJlc3VsdDogR2VybWFueUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlJZEZyb250UmVjb2duaXplcjogR2VybWFueUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlPbGRJZFJlY29nbml6ZXJSZXN1bHQ6IEdlcm1hbnlPbGRJZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueU9sZElkUmVjb2duaXplcjogR2VybWFueU9sZElkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0OiBHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXI6IEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSG9uZ0tvbmdJZEZyb250UmVjb2duaXplclJlc3VsdDogSG9uZ0tvbmdJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyOiBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIElrYWRSZWNvZ25pemVyUmVzdWx0OiBJa2FkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBJa2FkUmVjb2duaXplcjogSWthZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyOiBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IElyZWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXI6IElyZWxhbmREbEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEl0YWx5RGxGcm9udFJlY29nbml6ZXI6IEl0YWx5RGxGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyOiBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSm9yZGFuSWRCYWNrUmVjb2duaXplclJlc3VsdDogSm9yZGFuSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBKb3JkYW5JZEJhY2tSZWNvZ25pemVyOiBKb3JkYW5JZEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEpvcmRhbklkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBKb3JkYW5JZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBKb3JkYW5JZEZyb250UmVjb2duaXplcjogSm9yZGFuSWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgS3V3YWl0SWRCYWNrUmVjb2duaXplclJlc3VsdDogS3V3YWl0SWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBLdXdhaXRJZEJhY2tSZWNvZ25pemVyOiBLdXdhaXRJZEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEt1d2FpdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBLdXdhaXRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBLdXdhaXRJZEZyb250UmVjb2duaXplcjogS3V3YWl0SWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTWFsYXlzaWFEbEZyb250UmVjb2duaXplclJlc3VsdDogTWFsYXlzaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyOiBNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplclJlc3VsdDogTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplcjogTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplcjogTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNb3JvY2NvSWRCYWNrUmVjb2duaXplclJlc3VsdDogTW9yb2Njb0lkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTW9yb2Njb0lkQmFja1JlY29nbml6ZXI6IE1vcm9jY29JZEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1vcm9jY29JZEZyb250UmVjb2duaXplclJlc3VsdDogTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1vcm9jY29JZEZyb250UmVjb2duaXplcjogTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1ydGRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IE1ydGRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTXJ0ZENvbWJpbmVkUmVjb2duaXplcjogTXJ0ZENvbWJpbmVkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNcnRkUmVjb2duaXplclJlc3VsdDogTXJ0ZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTXJ0ZFJlY29nbml6ZXI6IE1ydGRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE15S2FkQmFja1JlY29nbml6ZXJSZXN1bHQ6IE15S2FkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTXlLYWRCYWNrUmVjb2duaXplcjogTXlLYWRCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNeUthZEZyb250UmVjb2duaXplclJlc3VsdDogTXlLYWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTXlLYWRGcm9udFJlY29nbml6ZXI6IE15S2FkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE5ld1plYWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdDogTmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE5ld1plYWxhbmREbEZyb250UmVjb2duaXplcjogTmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBkZjQxN1JlY29nbml6ZXJSZXN1bHQ6IFBkZjQxN1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgUGRmNDE3UmVjb2duaXplcjogUGRmNDE3UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IFBvbGFuZENvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXI6IFBvbGFuZENvbWJpbmVkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQb2xhbmRJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBQb2xhbmRJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBvbGFuZElkQmFja1JlY29nbml6ZXI6IFBvbGFuZElkQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgUG9sYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFBvbGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBvbGFuZElkRnJvbnRSZWNvZ25pemVyOiBQb2xhbmRJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBSb21hbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFJvbWFuaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBSb21hbmlhSWRGcm9udFJlY29nbml6ZXI6IFJvbWFuaWFJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IFNlcmJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXI6IFNlcmJpYUNvbWJpbmVkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTZXJiaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBTZXJiaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNlcmJpYUlkQmFja1JlY29nbml6ZXI6IFNlcmJpYUlkQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2VyYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyOiBTZXJiaWFJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW1OdW1iZXJSZWNvZ25pemVyUmVzdWx0OiBTaW1OdW1iZXJSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbU51bWJlclJlY29nbml6ZXI6IFNpbU51bWJlclJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXJSZXN1bHQ6IFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyOiBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXI6IFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplclJlc3VsdDogU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXI6IFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplcjogU2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVJZEZyb250UmVjb2duaXplclJlc3VsdDogU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXI6IFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplcjogU2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBTbG92YWtpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyOiBTbG92YWtpYUlkQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmFraWFJZEZyb250UmVjb2duaXplclJlc3VsdDogU2xvdmFraWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyOiBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplcjogU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyOiBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmVuaWFJZEZyb250UmVjb2duaXplclJlc3VsdDogU2xvdmVuaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyOiBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU3BhaW5EbEZyb250UmVjb2duaXplcjogU3BhaW5EbEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2VkZW5EbEZyb250UmVjb2duaXplclJlc3VsdDogU3dlZGVuRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU3dlZGVuRGxGcm9udFJlY29nbml6ZXI6IFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplcjogU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJSZXN1bHQ6IFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXI6IFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXI6IFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ6IFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyOiBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplclJlc3VsdDogVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXI6IFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJSZXN1bHQ6IFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgVW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplcjogVW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplclJlc3VsdDogVW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgVW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXI6IFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFZpblJlY29nbml6ZXJSZXN1bHQ6IFZpblJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgVmluUmVjb2duaXplcjogVmluUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVc2RsUmVjb2duaXplclJlc3VsdDogVXNkbFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgVXNkbFJlY29nbml6ZXI6IFVzZGxSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVzZGxDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IFVzZGxDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgVXNkbENvbWJpbmVkUmVjb2duaXplcjogVXNkbENvbWJpbmVkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCbGlua0lkUmVjb2duaXplcjogQmxpbmtJZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQmxpbmtJZE92ZXJsYXlTZXR0aW5nczogQmxpbmtJZE92ZXJsYXlTZXR0aW5nc0N0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCbGlua0lkUmVjb2duaXplclJlc3VsdDogQmxpbmtJZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xufVxuIl19