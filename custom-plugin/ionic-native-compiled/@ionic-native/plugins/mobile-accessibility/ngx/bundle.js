'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@ionic-native/core');
var core$1 = require('@angular/core');

var MobileAccessibility = /** @class */ (function (_super) {
    tslib.__extends(MobileAccessibility, _super);
    function MobileAccessibility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileAccessibility.prototype.isScreenReaderRunning = function () { return core.cordova(this, "isScreenReaderRunning", {}, arguments); };
    MobileAccessibility.prototype.isVoiceOverRunning = function () { return core.cordova(this, "isVoiceOverRunning", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibility.prototype.isTalkBackRunning = function () { return core.cordova(this, "isTalkBackRunning", { "platforms": ["Amazon Fire OS", "Android"] }, arguments); };
    MobileAccessibility.prototype.isChromeVoxActive = function () { return core.cordova(this, "isChromeVoxActive", { "platforms": ["Amazon Fire OS", "Android"] }, arguments); };
    MobileAccessibility.prototype.isBoldTextEnabled = function () { return core.cordova(this, "isBoldTextEnabled", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibility.prototype.isClosedCaptioningEnabled = function () { return core.cordova(this, "isClosedCaptioningEnabled", {}, arguments); };
    MobileAccessibility.prototype.isDarkerSystemColorsEnabled = function () { return core.cordova(this, "isDarkerSystemColorsEnabled", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibility.prototype.isGrayscaleEnabled = function () { return core.cordova(this, "isGrayscaleEnabled", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibility.prototype.isGuidedAccessEnabled = function () { return core.cordova(this, "isGuidedAccessEnabled", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibility.prototype.isInvertColorsEnabled = function () { return core.cordova(this, "isInvertColorsEnabled", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibility.prototype.isMonoAudioEnabled = function () { return core.cordova(this, "isMonoAudioEnabled", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibility.prototype.isReduceMotionEnabled = function () { return core.cordova(this, "isReduceMotionEnabled", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibility.prototype.isReduceTransparencyEnabled = function () { return core.cordova(this, "isReduceTransparencyEnabled", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibility.prototype.isSpeakScreenEnabled = function () { return core.cordova(this, "isSpeakScreenEnabled", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibility.prototype.isSpeakSelectionEnabled = function () { return core.cordova(this, "isSpeakSelectionEnabled", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibility.prototype.isSwitchControlRunning = function () { return core.cordova(this, "isSwitchControlRunning", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibility.prototype.isTouchExplorationEnabled = function () { return core.cordova(this, "isTouchExplorationEnabled", { "platforms": ["Amazon Fire OS", "Android"] }, arguments); };
    MobileAccessibility.prototype.getTextZoom = function () { return core.cordova(this, "getTextZoom", {}, arguments); };
    MobileAccessibility.prototype.setTextZoom = function (textZoom) { return core.cordova(this, "setTextZoom", { "sync": true }, arguments); };
    MobileAccessibility.prototype.updateTextZoom = function () { return core.cordova(this, "updateTextZoom", { "sync": true }, arguments); };
    MobileAccessibility.prototype.usePreferredTextZoom = function (value) { return core.cordova(this, "usePreferredTextZoom", { "sync": true }, arguments); };
    MobileAccessibility.prototype.postNotification = function (mobileAccessibilityNotification, value) { return core.cordova(this, "postNotification", { "platforms": ["iOS"] }, arguments); };
    MobileAccessibility.prototype.speak = function (value, queueMode, properties) { return core.cordova(this, "speak", { "sync": true }, arguments); };
    MobileAccessibility.prototype.stop = function () { return core.cordova(this, "stop", { "sync": true }, arguments); };
    MobileAccessibility.pluginName = "MobileAccessibility";
    MobileAccessibility.plugin = "phonegap-plugin-mobile-accessibility";
    MobileAccessibility.pluginRef = "window.MobileAccessibility";
    MobileAccessibility.repo = "https://github.com/phonegap/phonegap-mobile-accessibility";
    MobileAccessibility.platforms = ["Android Fire OS", "Android", "iOS", "Windows"];
    MobileAccessibility.decorators = [
        { type: core$1.Injectable }
    ];
    return MobileAccessibility;
}(core.IonicNativePlugin));

exports.MobileAccessibility = MobileAccessibility;
