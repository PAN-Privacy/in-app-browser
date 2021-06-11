'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var JAnalytics = /** @class */ (function (_super) {
    tslib.__extends(JAnalytics, _super);
    function JAnalytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JAnalytics.prototype.init = function () { return core.cordova(this, "init", {}, arguments); };
    JAnalytics.prototype.initCrashHandler = function () { return core.cordova(this, "initCrashHandler", {}, arguments); };
    JAnalytics.prototype.stopCrashHandler = function () { return core.cordova(this, "stopCrashHandler", {}, arguments); };
    JAnalytics.prototype.onPageStart = function (params) { return core.cordova(this, "onPageStart", {}, arguments); };
    JAnalytics.prototype.onPageEnd = function (params) { return core.cordova(this, "onPageEnd", {}, arguments); };
    JAnalytics.prototype.addCountEvent = function (params) { return core.cordova(this, "addCountEvent", {}, arguments); };
    JAnalytics.prototype.addCalculateEvent = function (params) { return core.cordova(this, "addCalculateEvent", {}, arguments); };
    JAnalytics.prototype.addLoginEvent = function (params) { return core.cordova(this, "addLoginEvent", {}, arguments); };
    JAnalytics.prototype.addRegisterEvent = function (params) { return core.cordova(this, "addRegisterEvent", {}, arguments); };
    JAnalytics.prototype.addBrowseEvent = function (params) { return core.cordova(this, "addBrowseEvent", {}, arguments); };
    JAnalytics.prototype.addPurchaseEvent = function (params) { return core.cordova(this, "addPurchaseEvent", {}, arguments); };
    JAnalytics.pluginName = "JAnalytics";
    JAnalytics.plugin = "cordova-plugin-janalytics";
    JAnalytics.pluginRef = "JAnalytics";
    JAnalytics.repo = "https://github.com/jpush/cordova-plugin-janalytics";
    JAnalytics.install = "ionic cordova plugin add cordova-plugin-janalytics --variable APP_KEY=YOUR_APP_KEY";
    JAnalytics.installVariables = ["APP_KEY"];
    JAnalytics.platforms = ["Android", "iOS"];
    JAnalytics.decorators = [
        { type: core$1.Injectable }
    ];
    return JAnalytics;
}(core.IonicNativePlugin));

exports.JAnalytics = JAnalytics;
