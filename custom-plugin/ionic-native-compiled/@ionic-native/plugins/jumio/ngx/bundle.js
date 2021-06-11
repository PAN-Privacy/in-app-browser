'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var JumioNetverifyConfig = /** @class */ (function () {
    function JumioNetverifyConfig(config) {
        if (config) {
            Object.assign(this, config);
        }
    }
    return JumioNetverifyConfig;
}());
var JumioDocVerificationConfig = /** @class */ (function () {
    function JumioDocVerificationConfig(config) {
        if (config) {
            Object.assign(this, config);
        }
    }
    return JumioDocVerificationConfig;
}());
var JumioAuthenticationConfig = /** @class */ (function () {
    function JumioAuthenticationConfig(config) {
        if (config) {
            Object.assign(this, config);
        }
    }
    return JumioAuthenticationConfig;
}());
var BAMConfig = /** @class */ (function () {
    function BAMConfig(config) {
        if (config) {
            Object.assign(this, config);
        }
    }
    return BAMConfig;
}());
var NetverifyDocumentData = /** @class */ (function () {
    function NetverifyDocumentData() {
    }
    return NetverifyDocumentData;
}());
var MRZData = /** @class */ (function () {
    function MRZData() {
    }
    return MRZData;
}());
var BAMCardInformation = /** @class */ (function () {
    function BAMCardInformation() {
    }
    return BAMCardInformation;
}());
var Jumio = /** @class */ (function (_super) {
    tslib.__extends(Jumio, _super);
    function Jumio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Jumio.prototype.initNetverify = function (apiToken, apiSecret, dataCenter, netverifyConfig) { return core.cordova(this, "initNetverify", {}, arguments); };
    Jumio.prototype.startNetverify = function () { return core.cordova(this, "startNetverify", { "callbackOrder": "reverse" }, arguments); };
    Jumio.prototype.initDocumentVerification = function (apiToken, apiSecret, dataCenter, docVerificationConfig) { return core.cordova(this, "initDocumentVerification", {}, arguments); };
    Jumio.prototype.startDocumentVerification = function () { return core.cordova(this, "startDocumentVerification", { "callbackOrder": "reverse" }, arguments); };
    Jumio.prototype.initAuthentication = function (apiToken, apiSecret, dataCenter, authenticationConfig) { return core.cordova(this, "initAuthentication", {}, arguments); };
    Jumio.prototype.startAuthentication = function () { return core.cordova(this, "startAuthentication", { "callbackOrder": "reverse" }, arguments); };
    Jumio.prototype.initBAM = function (apiToken, apiSecret, dataCenter, bamConfig) { return core.cordova(this, "initBAM", {}, arguments); };
    Jumio.prototype.startBAM = function () { return core.cordova(this, "startBAM", { "callbackOrder": "reverse" }, arguments); };
    Jumio.pluginName = "Jumio";
    Jumio.plugin = "jumio-cordova";
    Jumio.pluginRef = "Jumio";
    Jumio.repo = "https://github.com/danielzen/jumio-cordova";
    Jumio.platforms = ["Android", "iOS"];
    Jumio.decorators = [
        { type: core$1.Injectable }
    ];
    return Jumio;
}(core.IonicNativePlugin));

exports.BAMCardInformation = BAMCardInformation;
exports.BAMConfig = BAMConfig;
exports.Jumio = Jumio;
exports.JumioAuthenticationConfig = JumioAuthenticationConfig;
exports.JumioDocVerificationConfig = JumioDocVerificationConfig;
exports.JumioNetverifyConfig = JumioNetverifyConfig;
exports.MRZData = MRZData;
exports.NetverifyDocumentData = NetverifyDocumentData;
