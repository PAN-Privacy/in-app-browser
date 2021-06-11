'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
require('rxjs');

var Appodeal = /** @class */ (function (_super) {
    tslib.__extends(Appodeal, _super);
    function Appodeal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // available types of advertisements
        _this.AD_TYPES = {
            INTERSTITIAL: 1,
            SKIPPABLE_VIDEO: 2,
            BANNER: 4,
            BANNER_BOTTOM: 8,
            BANNER_TOP: 16,
            REWARDED_VIDEO: 128,
            NON_SKIPPABLE_VIDEO: 256,
        };
        return _this;
    }
    Appodeal.prototype.initialize = function (appKey, adType) { return core.cordova(this, "initialize", {}, arguments); };
    Appodeal.prototype.isInitialized = function () { return core.cordova(this, "isInitialized", {}, arguments); };
    Appodeal.prototype.show = function (adType) { return core.cordova(this, "show", {}, arguments); };
    Appodeal.prototype.showWithPlacement = function (adType, placement) { return core.cordova(this, "showWithPlacement", {}, arguments); };
    Appodeal.prototype.hide = function (adType) { return core.cordova(this, "hide", {}, arguments); };
    Appodeal.prototype.canShow = function (adType) { return core.cordova(this, "canShow", {}, arguments); };
    Appodeal.prototype.isLoaded = function (adType) { return core.cordova(this, "isLoaded", {}, arguments); };
    Appodeal.prototype.isPrecache = function (adType) { return core.cordova(this, "isPrecache", {}, arguments); };
    Appodeal.prototype.setAutoCache = function (adType, autoCache) { return core.cordova(this, "setAutoCache", {}, arguments); };
    Appodeal.prototype.cache = function (adType) { return core.cordova(this, "cache", {}, arguments); };
    Appodeal.prototype.setTriggerOnLoadedOnPrecache = function (set) { return core.cordova(this, "setTriggerOnLoadedOnPrecache", {}, arguments); };
    Appodeal.prototype.setSmartBanners = function (enabled) { return core.cordova(this, "setSmartBanners", {}, arguments); };
    Appodeal.prototype.setBannerBackground = function (enabled) { return core.cordova(this, "setBannerBackground", {}, arguments); };
    Appodeal.prototype.setBannerAnimation = function (enabled) { return core.cordova(this, "setBannerAnimation", {}, arguments); };
    Appodeal.prototype.set728x90Banners = function (value) { return core.cordova(this, "set728x90Banners", {}, arguments); };
    Appodeal.prototype.setLogLevel = function (logging) { return core.cordova(this, "setLogLevel", {}, arguments); };
    Appodeal.prototype.setTesting = function (testing) { return core.cordova(this, "setTesting", {}, arguments); };
    Appodeal.prototype.resetUUID = function () { return core.cordova(this, "resetUUID", {}, arguments); };
    Appodeal.prototype.getVersion = function () { return core.cordova(this, "getVersion", {}, arguments); };
    Appodeal.prototype.disableNetwork = function (network, adType) { return core.cordova(this, "disableNetwork", {}, arguments); };
    Appodeal.prototype.disableNetworkType = function (network, adType) { return core.cordova(this, "disableNetworkType", {}, arguments); };
    Appodeal.prototype.disableLocationPermissionCheck = function () { return core.cordova(this, "disableLocationPermissionCheck", {}, arguments); };
    Appodeal.prototype.disableWriteExternalStoragePermissionCheck = function () { return core.cordova(this, "disableWriteExternalStoragePermissionCheck", {}, arguments); };
    Appodeal.prototype.enableInterstitialCallbacks = function (enabled) { return core.cordova(this, "enableInterstitialCallbacks", {}, arguments); };
    Appodeal.prototype.enableSkippableVideoCallbacks = function (enabled) { return core.cordova(this, "enableSkippableVideoCallbacks", {}, arguments); };
    Appodeal.prototype.enableNonSkippableVideoCallbacks = function (enabled) { return core.cordova(this, "enableNonSkippableVideoCallbacks", {}, arguments); };
    Appodeal.prototype.enableBannerCallbacks = function (enabled) { return core.cordova(this, "enableBannerCallbacks", {}, arguments); };
    Appodeal.prototype.enableRewardedVideoCallbacks = function (enabled) { return core.cordova(this, "enableRewardedVideoCallbacks", {}, arguments); };
    Appodeal.prototype.setCustomBooleanRule = function (name, value) { return core.cordova(this, "setCustomBooleanRule", {}, arguments); };
    Appodeal.prototype.setCustomIntegerRule = function (name, value) { return core.cordova(this, "setCustomIntegerRule", {}, arguments); };
    Appodeal.prototype.setCustomDoubleRule = function (name, value) { return core.cordova(this, "setCustomDoubleRule", {}, arguments); };
    Appodeal.prototype.setCustomStringRule = function (name, value) { return core.cordova(this, "setCustomStringRule", {}, arguments); };
    Appodeal.prototype.setUserId = function (id) { return core.cordova(this, "setUserId", {}, arguments); };
    Appodeal.prototype.setEmail = function (email) { return core.cordova(this, "setEmail", {}, arguments); };
    Appodeal.prototype.setBirthday = function (birthday) { return core.cordova(this, "setBirthday", {}, arguments); };
    Appodeal.prototype.setAge = function (age) { return core.cordova(this, "setAge", {}, arguments); };
    Appodeal.prototype.setGender = function (gender) { return core.cordova(this, "setGender", {}, arguments); };
    Appodeal.prototype.setOccupation = function (occupation) { return core.cordova(this, "setOccupation", {}, arguments); };
    Appodeal.prototype.setRelation = function (relation) { return core.cordova(this, "setRelation", {}, arguments); };
    Appodeal.prototype.setSmoking = function (smoking) { return core.cordova(this, "setSmoking", {}, arguments); };
    Appodeal.prototype.setAlcohol = function (alcohol) { return core.cordova(this, "setAlcohol", {}, arguments); };
    Appodeal.prototype.setInterests = function (interests) { return core.cordova(this, "setInterests", {}, arguments); };
    Appodeal.prototype.onInterstitialLoaded = function () { return core.cordova(this, "onInterstitialLoaded", { "eventObservable": true, "event": "onInterstitialLoaded", "element": "document" }, arguments); };
    Appodeal.prototype.onInterstitialFailedToLoad = function () { return core.cordova(this, "onInterstitialFailedToLoad", { "eventObservable": true, "event": "onInterstitialFailedToLoad", "element": "document" }, arguments); };
    Appodeal.prototype.onInterstitialShown = function () { return core.cordova(this, "onInterstitialShown", { "eventObservable": true, "event": "onInterstitialShown", "element": "document" }, arguments); };
    Appodeal.prototype.onInterstitialClicked = function () { return core.cordova(this, "onInterstitialClicked", { "eventObservable": true, "event": "onInterstitialClicked", "element": "document" }, arguments); };
    Appodeal.prototype.onInterstitialClosed = function () { return core.cordova(this, "onInterstitialClosed", { "eventObservable": true, "event": "onInterstitialClosed", "element": "document" }, arguments); };
    Appodeal.prototype.onSkippableVideoLoaded = function () { return core.cordova(this, "onSkippableVideoLoaded", { "eventObservable": true, "event": "onSkippableVideoLoaded", "element": "document" }, arguments); };
    Appodeal.prototype.onSkippableVideoFailedToLoad = function () { return core.cordova(this, "onSkippableVideoFailedToLoad", { "eventObservable": true, "event": "onSkippableVideoFailedToLoad", "element": "document" }, arguments); };
    Appodeal.prototype.onSkippableVideoShown = function () { return core.cordova(this, "onSkippableVideoShown", { "eventObservable": true, "event": "onSkippableVideoShown", "element": "document" }, arguments); };
    Appodeal.prototype.onSkippableVideoFinished = function () { return core.cordova(this, "onSkippableVideoFinished", { "eventObservable": true, "event": "onSkippableVideoFinished", "element": "document" }, arguments); };
    Appodeal.prototype.onSkippableVideoClosed = function () { return core.cordova(this, "onSkippableVideoClosed", { "eventObservable": true, "event": "onSkippableVideoClosed", "element": "document" }, arguments); };
    Appodeal.prototype.onRewardedVideoLoaded = function () { return core.cordova(this, "onRewardedVideoLoaded", { "eventObservable": true, "event": "onRewardedVideoLoaded", "element": "document" }, arguments); };
    Appodeal.prototype.onRewardedVideoFailedToLoad = function () { return core.cordova(this, "onRewardedVideoFailedToLoad", { "eventObservable": true, "event": "onRewardedVideoFailedToLoad", "element": "document" }, arguments); };
    Appodeal.prototype.onRewardedVideoShown = function () { return core.cordova(this, "onRewardedVideoShown", { "eventObservable": true, "event": "onRewardedVideoShown", "element": "document" }, arguments); };
    Appodeal.prototype.onRewardedVideoFinished = function () { return core.cordova(this, "onRewardedVideoFinished", { "eventObservable": true, "event": "onRewardedVideoFinished", "element": "document" }, arguments); };
    Appodeal.prototype.onRewardedVideoClosed = function () { return core.cordova(this, "onRewardedVideoClosed", { "eventObservable": true, "event": "onRewardedVideoClosed", "element": "document" }, arguments); };
    Appodeal.prototype.onNonSkippableVideoLoaded = function () { return core.cordova(this, "onNonSkippableVideoLoaded", { "eventObservable": true, "event": "onNonSkippableVideoLoaded", "element": "document" }, arguments); };
    Appodeal.prototype.onNonSkippableVideoFailedToLoad = function () { return core.cordova(this, "onNonSkippableVideoFailedToLoad", { "eventObservable": true, "event": "onNonSkippableVideoFailedToLoad", "element": "document" }, arguments); };
    Appodeal.prototype.onNonSkippableVideoShown = function () { return core.cordova(this, "onNonSkippableVideoShown", { "eventObservable": true, "event": "onNonSkippableVideoShown", "element": "document" }, arguments); };
    Appodeal.prototype.onNonSkippableVideoFinished = function () { return core.cordova(this, "onNonSkippableVideoFinished", { "eventObservable": true, "event": "onNonSkippableVideoFinished", "element": "document" }, arguments); };
    Appodeal.prototype.onNonSkippableVideoClosed = function () { return core.cordova(this, "onNonSkippableVideoClosed", { "eventObservable": true, "event": "onNonSkippableVideoClosed", "element": "document" }, arguments); };
    Appodeal.prototype.onBannerClicked = function () { return core.cordova(this, "onBannerClicked", { "eventObservable": true, "event": "onBannerClicked", "element": "document" }, arguments); };
    Appodeal.prototype.onBannerFailedToLoad = function () { return core.cordova(this, "onBannerFailedToLoad", { "eventObservable": true, "event": "onBannerFailedToLoad", "element": "document" }, arguments); };
    Appodeal.prototype.onBannerLoaded = function () { return core.cordova(this, "onBannerLoaded", { "eventObservable": true, "event": "onBannerLoaded", "element": "document" }, arguments); };
    Appodeal.prototype.onBannerShown = function () { return core.cordova(this, "onBannerShown", { "eventObservable": true, "event": "onBannerShown", "element": "document" }, arguments); };
    Appodeal.prototype.getRewardParametersForPlacement = function (placement) { return core.cordova(this, "getRewardParametersForPlacement", {}, arguments); };
    Appodeal.prototype.getRewardParameters = function () { return core.cordova(this, "getRewardParameters", {}, arguments); };
    Appodeal.prototype.canShowWithPlacement = function (adType, placement) { return core.cordova(this, "canShowWithPlacement", {}, arguments); };
    Appodeal.prototype.showTestScreen = function (value) { return core.cordova(this, "showTestScreen", { "platforms": ["Android"] }, arguments); };
    Appodeal.prototype.muteVideosIfCallsMuted = function (value) { return core.cordova(this, "muteVideosIfCallsMuted", {}, arguments); };
    Appodeal.prototype.setChildDirectedTreatment = function (value) { return core.cordova(this, "setChildDirectedTreatment", {}, arguments); };
    Appodeal.pluginName = "Appodeal";
    Appodeal.plugin = "https://github.com/appodeal/appodeal-cordova-plugin.git";
    Appodeal.pluginRef = "Appodeal";
    Appodeal.repo = "https://github.com/appodeal/appodeal-cordova-plugin";
    Appodeal.platforms = ["iOS", "Android"];
    Appodeal.decorators = [
        { type: core$1.Injectable }
    ];
    return Appodeal;
}(core.IonicNativePlugin));

exports.Appodeal = Appodeal;
