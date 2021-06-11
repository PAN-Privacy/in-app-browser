'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var FlurryAnalyticsObject = /** @class */ (function () {
    function FlurryAnalyticsObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    FlurryAnalyticsObject.prototype.logEvent = function (eventName, params) { return core.cordovaInstance(this, "logEvent", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FlurryAnalyticsObject.prototype.startTimedEvent = function (eventName, params) { return core.cordovaInstance(this, "startTimedEvent", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FlurryAnalyticsObject.prototype.endTimedEvent = function (eventName, params) { return core.cordovaInstance(this, "endTimedEvent", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FlurryAnalyticsObject.prototype.logError = function (code, message) { return core.cordovaInstance(this, "logError", {}, arguments); };
    FlurryAnalyticsObject.prototype.logPageView = function () { return core.cordovaInstance(this, "logPageView", {}, arguments); };
    FlurryAnalyticsObject.prototype.setLocation = function (location, message) { return core.cordovaInstance(this, "setLocation", {}, arguments); };
    FlurryAnalyticsObject.prototype.startSession = function () { return core.cordovaInstance(this, "startSession", {}, arguments); };
    FlurryAnalyticsObject.prototype.endSession = function () { return core.cordovaInstance(this, "endSession", {}, arguments); };
    return FlurryAnalyticsObject;
}());
var FlurryAnalytics = /** @class */ (function (_super) {
    tslib.__extends(FlurryAnalytics, _super);
    function FlurryAnalytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a new instance of FlurryAnalyticsObject
     * @param {FlurryAnalyticsOptions} options Options
     * @return {FlurryAnalyticsObject}
     */
    FlurryAnalytics.prototype.create = function (options) {
        var instance;
        if (core.checkAvailability(FlurryAnalytics.pluginRef, null, FlurryAnalytics.pluginName) === true) {
            instance = new window.FlurryAnalytics(options);
        }
        return new FlurryAnalyticsObject(instance);
    };
    FlurryAnalytics.pluginName = "FlurryAnalytics";
    FlurryAnalytics.plugin = "cordova-plugin-flurryanalytics";
    FlurryAnalytics.pluginRef = "FlurryAnalytics";
    FlurryAnalytics.repo = "https://github.com/blakgeek/cordova-plugin-flurryanalytics";
    FlurryAnalytics.platforms = ["Android", "iOS"];
    FlurryAnalytics.decorators = [
        { type: core$1.Injectable }
    ];
    return FlurryAnalytics;
}(core.IonicNativePlugin));

exports.FlurryAnalytics = FlurryAnalytics;
exports.FlurryAnalyticsObject = FlurryAnalyticsObject;
