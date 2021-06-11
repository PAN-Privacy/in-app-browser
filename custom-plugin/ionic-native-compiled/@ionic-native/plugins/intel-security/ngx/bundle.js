'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@ionic-native/core');
var core = require('@angular/core');

var IntelSecurity = /** @class */ (function (_super) {
    tslib.__extends(IntelSecurity, _super);
    function IntelSecurity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * returns an IntelSecurityStorage object
         * @type {IntelSecurityStorage}
         */
        _this.storage = new IntelSecurityStorage();
        /**
         * Returns an IntelSecurityData object
         * @type {IntelSecurityData}
         */
        _this.data = new IntelSecurityData();
        return _this;
    }
    IntelSecurity.pluginName = "IntelSecurity";
    IntelSecurity.plugin = "com-intel-security-cordova-plugin";
    IntelSecurity.pluginRef = "intel.security";
    IntelSecurity.repo = "https://github.com/AppSecurityApi/com-intel-security-cordova-plugin";
    IntelSecurity.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    IntelSecurity.decorators = [
        { type: core.Injectable }
    ];
    return IntelSecurity;
}(core$1.IonicNativePlugin));
var IntelSecurityData = /** @class */ (function () {
    function IntelSecurityData() {
    }
    IntelSecurityData.prototype.createFromData = function (options) { return core$1.cordova(this, "createFromData", { "otherPromise": true }, arguments); };
    IntelSecurityData.prototype.createFromSealedData = function (options) { return core$1.cordova(this, "createFromSealedData", { "otherPromise": true }, arguments); };
    IntelSecurityData.prototype.getData = function (instanceID) { return core$1.cordova(this, "getData", { "otherPromise": true }, arguments); };
    IntelSecurityData.prototype.getSealedData = function (instanceID) { return core$1.cordova(this, "getSealedData", { "otherPromise": true }, arguments); };
    IntelSecurityData.prototype.getTag = function (instanceID) { return core$1.cordova(this, "getTag", { "otherPromise": true }, arguments); };
    IntelSecurityData.prototype.getPolicy = function (instanceID) { return core$1.cordova(this, "getPolicy", { "otherPromise": true }, arguments); };
    IntelSecurityData.prototype.getOwners = function (instanceID) { return core$1.cordova(this, "getOwners", { "otherPromise": true }, arguments); };
    IntelSecurityData.prototype.getCreator = function (instanceID) { return core$1.cordova(this, "getCreator", { "otherPromise": true }, arguments); };
    IntelSecurityData.prototype.getWebOwners = function (instanceID) { return core$1.cordova(this, "getWebOwners", { "otherPromise": true }, arguments); };
    IntelSecurityData.prototype.changeExtraKey = function (options) { return core$1.cordova(this, "changeExtraKey", { "otherPromise": true }, arguments); };
    IntelSecurityData.prototype.destroy = function (instanceID) { return core$1.cordova(this, "destroy", { "otherPromise": true }, arguments); };
    IntelSecurityData.pluginName = "IntelSecurity";
    IntelSecurityData.plugin = "com-intel-security-cordova-plugin";
    IntelSecurityData.pluginRef = "intel.security.secureData";
    return IntelSecurityData;
}());
var IntelSecurityStorage = /** @class */ (function () {
    function IntelSecurityStorage() {
    }
    IntelSecurityStorage.prototype.delete = function (options) { return core$1.cordova(this, "delete", { "otherPromise": true }, arguments); };
    IntelSecurityStorage.prototype.read = function (options) { return core$1.cordova(this, "read", { "otherPromise": true }, arguments); };
    IntelSecurityStorage.prototype.write = function (options) { return core$1.cordova(this, "write", { "otherPromise": true }, arguments); };
    IntelSecurityStorage.pluginName = "IntelSecurity";
    IntelSecurityStorage.plugin = "com-intel-security-cordova-plugin";
    IntelSecurityStorage.pluginRef = "intel.security.secureStorage";
    return IntelSecurityStorage;
}());

exports.IntelSecurity = IntelSecurity;
exports.IntelSecurityData = IntelSecurityData;
exports.IntelSecurityStorage = IntelSecurityStorage;
