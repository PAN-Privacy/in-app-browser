'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@ionic-native/core');
var core$1 = require('@angular/core');

var QQSDK = /** @class */ (function (_super) {
    tslib.__extends(QQSDK, _super);
    function QQSDK() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * QQ Share Scene
         */
        _this.Scene = {
            QQ: 0,
            QQZone: 1,
            Favorite: 2,
        };
        /**
         *  client type:  QQ application or TIM application
         */
        _this.ClientType = {
            QQ: 0,
            TIM: 1,
        };
        return _this;
    }
    QQSDK.prototype.ssoLogin = function (options) { return core.cordova(this, "ssoLogin", { "callbackOrder": "reverse" }, arguments); };
    QQSDK.prototype.logout = function () { return core.cordova(this, "logout", { "callbackOrder": "reverse" }, arguments); };
    QQSDK.prototype.checkClientInstalled = function (options) { return core.cordova(this, "checkClientInstalled", { "callbackOrder": "reverse" }, arguments); };
    QQSDK.prototype.shareText = function (options) { return core.cordova(this, "shareText", { "callbackOrder": "reverse" }, arguments); };
    QQSDK.prototype.shareImage = function (options) { return core.cordova(this, "shareImage", { "callbackOrder": "reverse" }, arguments); };
    QQSDK.prototype.shareNews = function (options) { return core.cordova(this, "shareNews", { "callbackOrder": "reverse" }, arguments); };
    QQSDK.prototype.shareAudio = function (options) { return core.cordova(this, "shareAudio", { "callbackOrder": "reverse" }, arguments); };
    QQSDK.pluginName = "QQSDK";
    QQSDK.plugin = "cordova-plugin-qqsdk";
    QQSDK.pluginRef = "QQSDK";
    QQSDK.repo = "https://github.com/iVanPan/Cordova_QQ";
    QQSDK.platforms = ["Android", "iOS"];
    QQSDK.install = "ionic cordova plugin add cordova-plugin-qqsdk --variable QQ_APP_ID=YOUR_QQ_APPID";
    QQSDK.installVariables = ["QQ_APP_ID"];
    QQSDK.decorators = [
        { type: core$1.Injectable }
    ];
    return QQSDK;
}(core.IonicNativePlugin));

exports.QQSDK = QQSDK;
