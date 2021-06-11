'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var SumUpKeys = /** @class */ (function () {
    function SumUpKeys() {
        this.accessToken = '';
        this.affiliateKey = '';
    }
    return SumUpKeys;
}());
var SumUp = /** @class */ (function (_super) {
    tslib.__extends(SumUp, _super);
    function SumUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SumUp.prototype.login = function (sumUpKeys) { return core.cordova(this, "login", {}, arguments); };
    SumUp.prototype.auth = function (accessToken) { return core.cordova(this, "auth", {}, arguments); };
    SumUp.prototype.getSettings = function () { return core.cordova(this, "getSettings", {}, arguments); };
    SumUp.prototype.logout = function () { return core.cordova(this, "logout", {}, arguments); };
    SumUp.prototype.isLoggedIn = function () { return core.cordova(this, "isLoggedIn", {}, arguments); };
    SumUp.prototype.prepare = function () { return core.cordova(this, "prepare", {}, arguments); };
    SumUp.prototype.closeConnection = function () { return core.cordova(this, "closeConnection", {}, arguments); };
    SumUp.prototype.pay = function (amount, currencycode) { return core.cordova(this, "pay", {}, arguments); };
    SumUp.pluginName = "SumUp";
    SumUp.plugin = "cordova-sumup-plugin";
    SumUp.pluginRef = "window.SumUp";
    SumUp.repo = "https://github.com/mariusbackes/cordova-plugin-sumup";
    SumUp.install = "cordova plugin add cordova-sumup-plugin --variable SUMUP_API_KEY=INSERT_YOUR_KEY";
    SumUp.installVariables = ["SUMUP_API_KEY"];
    SumUp.platforms = ["Android", "iOS"];
    SumUp.decorators = [
        { type: core$1.Injectable }
    ];
    return SumUp;
}(core.IonicNativePlugin));

exports.SumUp = SumUp;
exports.SumUpKeys = SumUpKeys;
