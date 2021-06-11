'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var MSAdal = /** @class */ (function (_super) {
    tslib.__extends(MSAdal, _super);
    function MSAdal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MSAdal.prototype.createAuthenticationContext = function (authority, validateAuthority) {
        if (validateAuthority === void 0) { validateAuthority = true; }
        var authContext;
        if (core.checkAvailability(MSAdal.getPluginRef(), null, MSAdal.getPluginName()) === true) {
            authContext = new (MSAdal.getPlugin().AuthenticationContext)(authority, validateAuthority);
        }
        return new AuthenticationContext(authContext);
    };
    MSAdal.pluginName = "MSADAL";
    MSAdal.plugin = "cordova-plugin-ms-adal";
    MSAdal.pluginRef = "Microsoft.ADAL";
    MSAdal.repo = "https://github.com/AzureAD/azure-activedirectory-library-for-cordova";
    MSAdal.platforms = ["Android", "iOS", "Windows"];
    MSAdal.decorators = [
        { type: core$1.Injectable }
    ];
    return MSAdal;
}(core.IonicNativePlugin));
var AuthenticationContext = /** @class */ (function () {
    function AuthenticationContext(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    AuthenticationContext.prototype.acquireTokenAsync = function (resourceUrl, clientId, redirectUrl, userId, extraQueryParameters, claims) { return core.cordovaInstance(this, "acquireTokenAsync", { "otherPromise": true }, arguments); };
    AuthenticationContext.prototype.acquireTokenSilentAsync = function (resourceUrl, clientId, userId) { return core.cordovaInstance(this, "acquireTokenSilentAsync", { "otherPromise": true }, arguments); };
    Object.defineProperty(AuthenticationContext.prototype, "authority", {
        get: function () { return core.instancePropertyGet(this, "authority"); },
        set: function (value) { core.instancePropertySet(this, "authority", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticationContext.prototype, "validateAuthority", {
        get: function () { return core.instancePropertyGet(this, "validateAuthority"); },
        set: function (value) { core.instancePropertySet(this, "validateAuthority", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticationContext.prototype, "tokenCache", {
        get: function () { return core.instancePropertyGet(this, "tokenCache"); },
        set: function (value) { core.instancePropertySet(this, "tokenCache", value); },
        enumerable: false,
        configurable: true
    });
    return AuthenticationContext;
}());
var AuthenticationSettings = /** @class */ (function () {
    function AuthenticationSettings() {
    }
    AuthenticationSettings.prototype.setUseBroker = function (useBroker) { return core.cordovaInstance(this, "setUseBroker", { "otherPromise": true }, arguments); };
    return AuthenticationSettings;
}());

exports.AuthenticationContext = AuthenticationContext;
exports.AuthenticationSettings = AuthenticationSettings;
exports.MSAdal = MSAdal;
