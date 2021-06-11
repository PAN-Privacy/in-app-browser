import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var AdjustEvent = /** @class */ (function () {
    function AdjustEvent(eventToken) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.eventToken = eventToken;
    }
    AdjustEvent.prototype.setRevenue = function (revenue, currency) {
        this.revenue = revenue;
        this.currency = currency;
    };
    AdjustEvent.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustEvent.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    AdjustEvent.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
    };
    AdjustEvent.prototype.setCallbackId = function (callbackId) {
        this.callbackId = callbackId;
    };
    return AdjustEvent;
}());
export { AdjustEvent };
var AdjustConfig = /** @class */ (function () {
    function AdjustConfig(appToken, environment) {
        this.delayStart = 0.0;
        this.logLevel = null;
        this.defaultTracker = null;
        this.urlStrategy = null;
        this.externalDeviceId = null;
        this.sendInBackground = null;
        this.shouldLaunchDeeplink = null;
        this.eventBufferingEnabled = null;
        this.userAgent = null;
        this.isDeviceKnown = null;
        this.needsCost = null;
        this.secretId = null;
        this.info1 = null;
        this.info2 = null;
        this.info3 = null;
        this.info4 = null;
        this.processName = null; // Android only
        this.preinstallTrackingEnabled = null; // Android only
        this.allowiAdInfoReading = null; // iOS only
        this.allowIdfaReading = null; // iOS only
        this.allowAdServicesInfoReading = null; // iOS only
        this.attributionCallback = null;
        this.eventTrackingSucceededCallback = null;
        this.eventTrackingFailedCallback = null;
        this.sessionTrackingSucceededCallback = null;
        this.sessionTrackingFailedCallback = null;
        this.deferredDeeplinkCallback = null;
        this.appToken = appToken;
        this.environment = environment;
    }
    AdjustConfig.prototype.setAppSecret = function (secretId, info1, info2, info3, info4) {
        this.secretId = secretId;
        this.info1 = info1;
        this.info2 = info2;
        this.info3 = info3;
        this.info4 = info4;
    };
    AdjustConfig.prototype.setDelayStart = function (delayStart) {
        this.delayStart = delayStart;
    };
    AdjustConfig.prototype.setLogLevel = function (logLevel) {
        this.logLevel = logLevel;
    };
    AdjustConfig.prototype.setDefaultTracker = function (defaultTracker) {
        this.defaultTracker = defaultTracker;
    };
    AdjustConfig.prototype.setExternalDeviceId = function (externalDeviceId) {
        this.externalDeviceId = externalDeviceId;
    };
    AdjustConfig.prototype.setUrlStrategy = function (urlStrategy) {
        this.urlStrategy = urlStrategy;
    };
    AdjustConfig.prototype.setSendInBackground = function (sendInBackground) {
        this.sendInBackground = sendInBackground;
    };
    AdjustConfig.prototype.setShouldLaunchDeeplink = function (shouldLaunchDeeplink) {
        this.shouldLaunchDeeplink = shouldLaunchDeeplink;
    };
    AdjustConfig.prototype.setEventBufferingEnabled = function (eventBufferingEnabled) {
        this.eventBufferingEnabled = eventBufferingEnabled;
    };
    AdjustConfig.prototype.setUserAgent = function (userAgent) {
        this.userAgent = userAgent;
    };
    AdjustConfig.prototype.setDeviceKnown = function (isDeviceKnown) {
        this.isDeviceKnown = isDeviceKnown;
    };
    AdjustConfig.prototype.setNeedsCost = function (needsCost) {
        this.needsCost = needsCost;
    };
    AdjustConfig.prototype.setProcessName = function (processName) {
        this.processName = processName;
    };
    AdjustConfig.prototype.setPreinstallTrackingEnabled = function (preinstallTrackingEnabled) {
        this.preinstallTrackingEnabled = preinstallTrackingEnabled;
    };
    AdjustConfig.prototype.setAllowiAdInfoReading = function (allowiAdInfoReading) {
        this.allowiAdInfoReading = allowiAdInfoReading;
    };
    AdjustConfig.prototype.setAllowIdfaReading = function (allowIdfaReading) {
        this.allowIdfaReading = allowIdfaReading;
    };
    AdjustConfig.prototype.setAllowAdServicesInfoReading = function (allowAdServicesInfoReading) {
        this.allowAdServicesInfoReading = allowAdServicesInfoReading;
    };
    AdjustConfig.prototype.setAttributionCallbackListener = function (attributionCallback) {
        this.attributionCallback = attributionCallback;
    };
    AdjustConfig.prototype.setEventTrackingSucceededCallbackListener = function (eventTrackingSucceededCallback) {
        this.eventTrackingSucceededCallback = eventTrackingSucceededCallback;
    };
    AdjustConfig.prototype.setEventTrackingFailedCallbackListener = function (eventTrackingFailedCallback) {
        this.eventTrackingFailedCallback = eventTrackingFailedCallback;
    };
    AdjustConfig.prototype.setSessionTrackingSucceededCallbackListener = function (sessionTrackingSucceededCallback) {
        this.sessionTrackingSucceededCallback = sessionTrackingSucceededCallback;
    };
    AdjustConfig.prototype.setSessionTrackingFailedCallbackListener = function (sessionTrackingFailedCallback) {
        this.sessionTrackingFailedCallback = sessionTrackingFailedCallback;
    };
    AdjustConfig.prototype.setDeferredDeeplinkCallbackListener = function (deferredDeeplinkCallback) {
        this.deferredDeeplinkCallback = deferredDeeplinkCallback;
    };
    AdjustConfig.prototype.getAttributionCallback = function () {
        return this.attributionCallback;
    };
    AdjustConfig.prototype.getEventTrackingSucceededCallback = function () {
        return this.eventTrackingSucceededCallback;
    };
    AdjustConfig.prototype.getEventTrackingFailedCallback = function () {
        return this.eventTrackingFailedCallback;
    };
    AdjustConfig.prototype.getSessionTrackingSucceededCallback = function () {
        return this.sessionTrackingSucceededCallback;
    };
    AdjustConfig.prototype.getSessionTrackingFailedCallback = function () {
        return this.sessionTrackingFailedCallback;
    };
    AdjustConfig.prototype.getDeferredDeeplinkCallback = function () {
        return this.deferredDeeplinkCallback;
    };
    AdjustConfig.prototype.hasAttributionListener = function () {
        return this.attributionCallback !== null;
    };
    AdjustConfig.prototype.hasEventTrackingSucceededListener = function () {
        return this.eventTrackingSucceededCallback !== null;
    };
    AdjustConfig.prototype.hasEventTrackingFailedListener = function () {
        return this.eventTrackingFailedCallback !== null;
    };
    AdjustConfig.prototype.hasSessionTrackingSucceededListener = function () {
        return this.sessionTrackingSucceededCallback !== null;
    };
    AdjustConfig.prototype.hasSessionTrackingFailedListener = function () {
        return this.sessionTrackingFailedCallback !== null;
    };
    AdjustConfig.prototype.hasDeferredDeeplinkCallbackListener = function () {
        return this.deferredDeeplinkCallback !== null;
    };
    return AdjustConfig;
}());
export { AdjustConfig };
var AdjustAppStoreSubscription = /** @class */ (function () {
    function AdjustAppStoreSubscription(price, currency, transactionId, receipt) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.price = price;
        this.currency = currency;
        this.transactionId = transactionId;
        this.receipt = receipt;
    }
    AdjustAppStoreSubscription.prototype.setTransactionDate = function (transactionDate) {
        this.transactionDate = transactionDate;
    };
    AdjustAppStoreSubscription.prototype.setSalesRegion = function (salesRegion) {
        this.salesRegion = salesRegion;
    };
    AdjustAppStoreSubscription.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustAppStoreSubscription.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    return AdjustAppStoreSubscription;
}());
export { AdjustAppStoreSubscription };
var AdjustPlayStoreSubscription = /** @class */ (function () {
    function AdjustPlayStoreSubscription(price, currency, sku, orderId, signature, purchaseToken) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.price = price;
        this.currency = currency;
        this.sku = sku;
        this.orderId = orderId;
        this.signature = signature;
        this.purchaseToken = purchaseToken;
    }
    AdjustPlayStoreSubscription.prototype.setPurchaseTime = function (purchaseTime) {
        this.purchaseTime = purchaseTime;
    };
    AdjustPlayStoreSubscription.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustPlayStoreSubscription.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    return AdjustPlayStoreSubscription;
}());
export { AdjustPlayStoreSubscription };
var AdjustThirdPartySharing = /** @class */ (function () {
    function AdjustThirdPartySharing(isEnabled) {
        this.granularOptions = [];
        this.isEnabled = isEnabled;
    }
    AdjustThirdPartySharing.prototype.addGranularOption = function (partnerName, key, value) {
        this.granularOptions.push(partnerName);
        this.granularOptions.push(key);
        this.granularOptions.push(value);
    };
    return AdjustThirdPartySharing;
}());
export { AdjustThirdPartySharing };
export var AdjustEnvironment;
(function (AdjustEnvironment) {
    AdjustEnvironment["Sandbox"] = "sandbox";
    AdjustEnvironment["Production"] = "production";
})(AdjustEnvironment || (AdjustEnvironment = {}));
export var AdjustLogLevel;
(function (AdjustLogLevel) {
    AdjustLogLevel["Verbose"] = "VERBOSE";
    AdjustLogLevel["Debug"] = "DEBUG";
    AdjustLogLevel["Info"] = "INFO";
    AdjustLogLevel["Warn"] = "WARN";
    AdjustLogLevel["Error"] = "ERROR";
    AdjustLogLevel["Assert"] = "ASSERT";
    AdjustLogLevel["Suppress"] = "SUPPRESS";
})(AdjustLogLevel || (AdjustLogLevel = {}));
export var AdjustUrlStrategy;
(function (AdjustUrlStrategy) {
    AdjustUrlStrategy["India"] = "India";
    AdjustUrlStrategy["China"] = "China";
})(AdjustUrlStrategy || (AdjustUrlStrategy = {}));
export var AdjustAdRevenueSource;
(function (AdjustAdRevenueSource) {
    AdjustAdRevenueSource["AdRevenueSourceMopub"] = "mopub";
    AdjustAdRevenueSource["AdRevenueSourceAdmob"] = "admob";
    AdjustAdRevenueSource["AdRevenueSourceFbNativeAd"] = "facebook_native_ad";
    AdjustAdRevenueSource["AdRevenueSourceFbAudienceNetwork"] = "facebook_audience_network";
    AdjustAdRevenueSource["AdRevenueSourceIronsource"] = "ironsource";
    AdjustAdRevenueSource["AdRevenueSourceFyber"] = "fyber";
    AdjustAdRevenueSource["AdRevenueSourceAerserv"] = "aerserv";
    AdjustAdRevenueSource["AdRevenueSourceAppodeal"] = "appodeal";
    AdjustAdRevenueSource["AdRevenueSourceAdincube"] = "adincube";
    AdjustAdRevenueSource["AdRevenueSourceFusePowered"] = "fusepowered";
    AdjustAdRevenueSource["AdRevenueSourceAddapptr"] = "addapptr";
    AdjustAdRevenueSource["AdRevenueSourceMillennialMediation"] = "millennial_mediation";
    AdjustAdRevenueSource["AdRevenueSourceFlurry"] = "flurry";
    AdjustAdRevenueSource["AdRevenueSourceAdmost"] = "admost";
    AdjustAdRevenueSource["AdRevenueSourceDeltadna"] = "deltadna";
    AdjustAdRevenueSource["AdRevenueSourceUpsight"] = "upsight";
    AdjustAdRevenueSource["AdRevenueSourceUnityAds"] = "unityads";
    AdjustAdRevenueSource["AdRevenueSourceAdtoapp"] = "adtoapp";
    AdjustAdRevenueSource["AdRevenueSourceTapdaq"] = "tapdaq";
})(AdjustAdRevenueSource || (AdjustAdRevenueSource = {}));
var Adjust = /** @class */ (function (_super) {
    __extends(Adjust, _super);
    function Adjust() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adjust.prototype.create = function (config) { return cordova(this, "create", { "sync": true }, arguments); };
    Adjust.prototype.trackEvent = function (event) { return cordova(this, "trackEvent", { "sync": true }, arguments); };
    Adjust.prototype.trackAppStoreSubscription = function (subscription) { return cordova(this, "trackAppStoreSubscription", { "sync": true }, arguments); };
    Adjust.prototype.trackPlayStoreSubscription = function (subscription) { return cordova(this, "trackPlayStoreSubscription", { "sync": true }, arguments); };
    Adjust.prototype.trackThirdPartySharing = function (thirdPartySharing) { return cordova(this, "trackThirdPartySharing", { "sync": true }, arguments); };
    Adjust.prototype.trackAdRevenue = function (source, payload) { return cordova(this, "trackAdRevenue", { "sync": true }, arguments); };
    Adjust.prototype.trackMeasurementConsent = function (measurementConsent) { return cordova(this, "trackMeasurementConsent", { "sync": true }, arguments); };
    Adjust.prototype.setOfflineMode = function (enabled) { return cordova(this, "setOfflineMode", { "sync": true }, arguments); };
    Adjust.prototype.appWillOpenUrl = function (url) { return cordova(this, "appWillOpenUrl", { "sync": true }, arguments); };
    Adjust.prototype.setEnabled = function (enabled) { return cordova(this, "setEnabled", { "sync": true }, arguments); };
    Adjust.prototype.setPushToken = function (pushToken) { return cordova(this, "setPushToken", { "sync": true }, arguments); };
    Adjust.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    Adjust.prototype.gdprForgetMe = function () { return cordova(this, "gdprForgetMe", { "sync": true }, arguments); };
    Adjust.prototype.disableThirdPartySharing = function () { return cordova(this, "disableThirdPartySharing", { "sync": true }, arguments); };
    Adjust.prototype.getGoogleAdId = function () { return cordova(this, "getGoogleAdId", {}, arguments); };
    Adjust.prototype.getAmazonAdId = function () { return cordova(this, "getAmazonAdId", {}, arguments); };
    Adjust.prototype.getIdfa = function () { return cordova(this, "getIdfa", {}, arguments); };
    Adjust.prototype.getAdid = function () { return cordova(this, "getAdid", {}, arguments); };
    Adjust.prototype.getAttribution = function () { return cordova(this, "getAttribution", {}, arguments); };
    Adjust.prototype.getSdkVersion = function () { return cordova(this, "getSdkVersion", {}, arguments); };
    Adjust.prototype.addSessionCallbackParameter = function (key, value) { return cordova(this, "addSessionCallbackParameter", { "sync": true }, arguments); };
    Adjust.prototype.removeSessionCallbackParameter = function (key) { return cordova(this, "removeSessionCallbackParameter", { "sync": true }, arguments); };
    Adjust.prototype.resetSessionCallbackParameters = function () { return cordova(this, "resetSessionCallbackParameters", { "sync": true }, arguments); };
    Adjust.prototype.addSessionPartnerParameter = function (key, value) { return cordova(this, "addSessionPartnerParameter", { "sync": true }, arguments); };
    Adjust.prototype.removeSessionPartnerParameter = function (key) { return cordova(this, "removeSessionPartnerParameter", { "sync": true }, arguments); };
    Adjust.prototype.resetSessionPartnerParameters = function () { return cordova(this, "resetSessionPartnerParameters", { "sync": true }, arguments); };
    Adjust.prototype.sendFirstPackages = function () { return cordova(this, "sendFirstPackages", { "sync": true }, arguments); };
    Adjust.prototype.requestTrackingAuthorizationWithCompletionHandler = function () { return cordova(this, "requestTrackingAuthorizationWithCompletionHandler", {}, arguments); };
    Adjust.prototype.updateConversionValue = function (conversionValue) { return cordova(this, "updateConversionValue", { "sync": true }, arguments); };
    Adjust.prototype.getAppTrackingAuthorizationStatus = function () { return cordova(this, "getAppTrackingAuthorizationStatus", {}, arguments); };
    Adjust.pluginName = "Adjust";
    Adjust.plugin = "com.adjust.sdk";
    Adjust.pluginRef = "Adjust";
    Adjust.repo = "https://github.com/adjust/cordova_sdk";
    Adjust.platforms = ["Android", "iOS"];
    Adjust.decorators = [
        { type: Injectable }
    ];
    return Adjust;
}(IonicNativePlugin));
export { Adjust };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FkanVzdC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFXdEUscUJBQVksVUFBa0I7UUFIdEIsdUJBQWtCLEdBQWEsRUFBRSxDQUFDO1FBQ2xDLHNCQUFpQixHQUFhLEVBQUUsQ0FBQztRQUd2QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLE9BQWUsRUFBRSxRQUFnQjtRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsMENBQW9CLEdBQXBCLFVBQXFCLEdBQVcsRUFBRSxLQUFhO1FBQzdDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQseUNBQW1CLEdBQW5CLFVBQW9CLEdBQVcsRUFBRSxLQUFhO1FBQzVDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsc0NBQWdCLEdBQWhCLFVBQWlCLGFBQXFCO1FBQ3BDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQWMsVUFBa0I7UUFDOUIsSUFBSSxDQUFDLFVBQVUs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a0MsQ0FBQTtJQUNsQyw2REFBb0MsQ0FBQTtJQUNwQywyREFBa0MsQ0FBQTtJQUNsQyx5REFBZ0MsQ0FBQTtBQUNsQyxDQUFDLEVBcEJXLHFCQUFxQixLQUFyQixxQkFBcUIsUUFvQmhDOztJQWlEMkIsMEJBQWlCOzs7O0lBTTNDLHVCQUFNLGFBQUMsTUFBb0I7SUFPM0IsMkJBQVUsYUFBQyxLQUFrQjtJQU83QiwwQ0FBeUIsYUFBQyxZQUF3QztJQU9sRSwyQ0FBMEIsYUFBQyxZQUF5QztJQU9wRSx1Q0FBc0IsYUFBQyxpQkFBMEM7SUFRakUsK0JBQWMsYUFBQyxNQUE2QixFQUFFLE9BQWU7SUFPN0Qsd0NBQXVCLGFBQUMsa0JBQTJCO0lBT25ELCtCQUFjLGFBQUMsT0FBZ0I7SUFPL0IsK0JBQWMsYUFBQyxHQUFXO0lBTzFCLDJCQUFVLGFBQUMsT0FBZ0I7SUFRM0IsNkJBQVksYUFBQyxTQUFpQjtJQU85QiwwQkFBUztJQVNULDZCQUFZO0lBT1oseUNBQXdCO0lBT3hCLDhCQUFhO0lBU2IsOEJBQWE7SUFTYix3QkFBTztJQVVQLHdCQUFPO0lBU1AsK0JBQWM7SUFTZCw4QkFBYTtJQVViLDRDQUEyQixhQUFDLEdBQVcsRUFBRSxLQUFhO0lBT3RELCtDQUE4QixhQUFDLEdBQVc7SUFNMUMsK0NBQThCO0lBUTlCLDJDQUEwQixhQUFDLEdBQVcsRUFBRSxLQUFhO0lBT3JELDhDQUE2QixhQUFDLEdBQVc7SUFNekMsOENBQTZCO0lBTTdCLGtDQUFpQjtJQVFqQixrRUFBaUQ7SUFTakQsc0NBQXFCLGFBQUMsZUFBdUI7SUFPN0Msa0RBQWlDOzs7Ozs7O2dCQXJPbEMsVUFBVTs7aUJBL2JYO0VBZ2M0QixpQkFBaUI7U0FBaEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQWRqdXN0RXZlbnQge1xuICBwcml2YXRlIGV2ZW50VG9rZW46IHN0cmluZztcbiAgcHJpdmF0ZSByZXZlbnVlOiBudW1iZXI7XG4gIHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcbiAgcHJpdmF0ZSB0cmFuc2FjdGlvbklkOiBzdHJpbmc7XG4gIHByaXZhdGUgY2FsbGJhY2tJZDogc3RyaW5nO1xuICBwcml2YXRlIGNhbGxiYWNrUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBwYXJ0bmVyUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihldmVudFRva2VuOiBzdHJpbmcpIHtcbiAgICB0aGlzLmV2ZW50VG9rZW4gPSBldmVudFRva2VuO1xuICB9XG5cbiAgc2V0UmV2ZW51ZShyZXZlbnVlOiBudW1iZXIsIGN1cnJlbmN5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJldmVudWUgPSByZXZlbnVlO1xuICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcbiAgfVxuXG4gIGFkZENhbGxiYWNrUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jYWxsYmFja1BhcmFtZXRlcnMucHVzaChrZXkpO1xuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xuICB9XG5cbiAgYWRkUGFydG5lclBhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaChrZXkpO1xuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBzZXRUcmFuc2FjdGlvbklkKHRyYW5zYWN0aW9uSWQ6IHN0cmluZykge1xuICAgIHRoaXMudHJhbnNhY3Rpb25JZCA9IHRyYW5zYWN0aW9uSWQ7XG4gIH1cblxuICBzZXRDYWxsYmFja0lkKGNhbGxiYWNrSWQ6IHN0cmluZykge1xuICAgIHRoaXMuY2FsbGJhY2tJZCA9IGNhbGxiYWNrSWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkanVzdENvbmZpZyB7XG4gIHByaXZhdGUgYXBwVG9rZW46IHN0cmluZztcbiAgcHJpdmF0ZSBlbnZpcm9ubWVudDogQWRqdXN0RW52aXJvbm1lbnQ7XG4gIHByaXZhdGUgc2RrUHJlZml4OiBzdHJpbmc7XG4gIHByaXZhdGUgZGVsYXlTdGFydCA9IDAuMDtcbiAgcHJpdmF0ZSBsb2dMZXZlbDogQWRqdXN0TG9nTGV2ZWwgPSBudWxsO1xuICBwcml2YXRlIGRlZmF1bHRUcmFja2VyOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIHVybFN0cmF0ZWd5OiBBZGp1c3RVcmxTdHJhdGVneSA9IG51bGw7XG4gIHByaXZhdGUgZXh0ZXJuYWxEZXZpY2VJZDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBzZW5kSW5CYWNrZ3JvdW5kOiBib29sZWFuID0gbnVsbDtcbiAgcHJpdmF0ZSBzaG91bGRMYXVuY2hEZWVwbGluazogYm9vbGVhbiA9IG51bGw7XG4gIHByaXZhdGUgZXZlbnRCdWZmZXJpbmdFbmFibGVkOiBib29sZWFuID0gbnVsbDtcbiAgcHJpdmF0ZSB1c2VyQWdlbnQ6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgaXNEZXZpY2VLbm93bjogYm9vbGVhbiA9IG51bGw7XG4gIHByaXZhdGUgbmVlZHNDb3N0OiBib29sZWFuID0gbnVsbDtcbiAgcHJpdmF0ZSBzZWNyZXRJZDogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBpbmZvMTogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBpbmZvMjogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBpbmZvMzogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBpbmZvNDogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBwcm9jZXNzTmFtZTogc3RyaW5nID0gbnVsbDsgLy8gQW5kcm9pZCBvbmx5XG4gIHByaXZhdGUgcHJlaW5zdGFsbFRyYWNraW5nRW5hYmxlZDogYm9vbGVhbiA9IG51bGw7IC8vIEFuZHJvaWQgb25seVxuICBwcml2YXRlIGFsbG93aUFkSW5mb1JlYWRpbmc6IGJvb2xlYW4gPSBudWxsOyAvLyBpT1Mgb25seVxuICBwcml2YXRlIGFsbG93SWRmYVJlYWRpbmc6IGJvb2xlYW4gPSBudWxsOyAvLyBpT1Mgb25seVxuICBwcml2YXRlIGFsbG93QWRTZXJ2aWNlc0luZm9SZWFkaW5nOiBib29sZWFuID0gbnVsbDsgLy8gaU9TIG9ubHlcblxuICBwcml2YXRlIGF0dHJpYnV0aW9uQ2FsbGJhY2s6IChhdHRyaWJ1dGlvbjogQWRqdXN0QXR0cmlidXRpb24pID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIGV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjazogKGV2ZW50OiBBZGp1c3RFdmVudFN1Y2Nlc3MpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIGV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjazogKGV2ZW50OiBBZGp1c3RFdmVudEZhaWx1cmUpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIHNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrOiAoc2Vzc2lvbjogQWRqdXN0U2Vzc2lvblN1Y2Nlc3MpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIHNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrOiAoc2Vzc2lvbjogQWRqdXN0U2Vzc2lvbkZhaWx1cmUpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIGRlZmVycmVkRGVlcGxpbmtDYWxsYmFjazogKHVyaTogc3RyaW5nKSA9PiB2b2lkID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihhcHBUb2tlbjogc3RyaW5nLCBlbnZpcm9ubWVudDogQWRqdXN0RW52aXJvbm1lbnQpIHtcbiAgICB0aGlzLmFwcFRva2VuID0gYXBwVG9rZW47XG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICB9XG5cbiAgc2V0QXBwU2VjcmV0KHNlY3JldElkOiBudW1iZXIsIGluZm8xOiBudW1iZXIsIGluZm8yOiBudW1iZXIsIGluZm8zOiBudW1iZXIsIGluZm80OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlY3JldElkID0gc2VjcmV0SWQ7XG4gICAgdGhpcy5pbmZvMSA9IGluZm8xO1xuICAgIHRoaXMuaW5mbzIgPSBpbmZvMjtcbiAgICB0aGlzLmluZm8zID0gaW5mbzM7XG4gICAgdGhpcy5pbmZvNCA9IGluZm80O1xuICB9XG5cbiAgc2V0RGVsYXlTdGFydChkZWxheVN0YXJ0OiBudW1iZXIpIHtcbiAgICB0aGlzLmRlbGF5U3RhcnQgPSBkZWxheVN0YXJ0O1xuICB9XG5cbiAgc2V0TG9nTGV2ZWwobG9nTGV2ZWw6IEFkanVzdExvZ0xldmVsKSB7XG4gICAgdGhpcy5sb2dMZXZlbCA9IGxvZ0xldmVsO1xuICB9XG5cbiAgc2V0RGVmYXVsdFRyYWNrZXIoZGVmYXVsdFRyYWNrZXI6IHN0cmluZykge1xuICAgIHRoaXMuZGVmYXVsdFRyYWNrZXIgPSBkZWZhdWx0VHJhY2tlcjtcbiAgfVxuXG4gIHNldEV4dGVybmFsRGV2aWNlSWQoZXh0ZXJuYWxEZXZpY2VJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5leHRlcm5hbERldmljZUlkID0gZXh0ZXJuYWxEZXZpY2VJZDtcbiAgfVxuXG4gIHNldFVybFN0cmF0ZWd5KHVybFN0cmF0ZWd5OiBBZGp1c3RVcmxTdHJhdGVneSkge1xuICAgIHRoaXMudXJsU3RyYXRlZ3kgPSB1cmxTdHJhdGVneTtcbiAgfVxuXG4gIHNldFNlbmRJbkJhY2tncm91bmQoc2VuZEluQmFja2dyb3VuZDogYm9vbGVhbikge1xuICAgIHRoaXMuc2VuZEluQmFja2dyb3VuZCA9IHNlbmRJbkJhY2tncm91bmQ7XG4gIH1cblxuICBzZXRTaG91bGRMYXVuY2hEZWVwbGluayhzaG91bGRMYXVuY2hEZWVwbGluazogYm9vbGVhbikge1xuICAgIHRoaXMuc2hvdWxkTGF1bmNoRGVlcGxpbmsgPSBzaG91bGRMYXVuY2hEZWVwbGluaztcbiAgfVxuXG4gIHNldEV2ZW50QnVmZmVyaW5nRW5hYmxlZChldmVudEJ1ZmZlcmluZ0VuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmV2ZW50QnVmZmVyaW5nRW5hYmxlZCA9IGV2ZW50QnVmZmVyaW5nRW5hYmxlZDtcbiAgfVxuXG4gIHNldFVzZXJBZ2VudCh1c2VyQWdlbnQ6IHN0cmluZykge1xuICAgIHRoaXMudXNlckFnZW50ID0gdXNlckFnZW50O1xuICB9XG5cbiAgc2V0RGV2aWNlS25vd24oaXNEZXZpY2VLbm93bjogYm9vbGVhbikge1xuICAgIHRoaXMuaXNEZXZpY2VLbm93biA9IGlzRGV2aWNlS25vd247XG4gIH1cblxuICBzZXROZWVkc0Nvc3QobmVlZHNDb3N0OiBib29sZWFuKSB7XG4gICAgdGhpcy5uZWVkc0Nvc3QgPSBuZWVkc0Nvc3Q7XG4gIH1cblxuICBzZXRQcm9jZXNzTmFtZShwcm9jZXNzTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9jZXNzTmFtZSA9IHByb2Nlc3NOYW1lO1xuICB9XG5cbiAgc2V0UHJlaW5zdGFsbFRyYWNraW5nRW5hYmxlZChwcmVpbnN0YWxsVHJhY2tpbmdFbmFibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5wcmVpbnN0YWxsVHJhY2tpbmdFbmFibGVkID0gcHJlaW5zdGFsbFRyYWNraW5nRW5hYmxlZDtcbiAgfVxuXG4gIHNldEFsbG93aUFkSW5mb1JlYWRpbmcoYWxsb3dpQWRJbmZvUmVhZGluZzogYm9vbGVhbikge1xuICAgIHRoaXMuYWxsb3dpQWRJbmZvUmVhZGluZyA9IGFsbG93aUFkSW5mb1JlYWRpbmc7XG4gIH1cblxuICBzZXRBbGxvd0lkZmFSZWFkaW5nKGFsbG93SWRmYVJlYWRpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFsbG93SWRmYVJlYWRpbmcgPSBhbGxvd0lkZmFSZWFkaW5nO1xuICB9XG5cbiAgc2V0QWxsb3dBZFNlcnZpY2VzSW5mb1JlYWRpbmcoYWxsb3dBZFNlcnZpY2VzSW5mb1JlYWRpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFsbG93QWRTZXJ2aWNlc0luZm9SZWFkaW5nID0gYWxsb3dBZFNlcnZpY2VzSW5mb1JlYWRpbmc7XG4gIH1cblxuICBzZXRBdHRyaWJ1dGlvbkNhbGxiYWNrTGlzdGVuZXIoYXR0cmlidXRpb25DYWxsYmFjazogKGF0dHJpYnV0aW9uOiBBZGp1c3RBdHRyaWJ1dGlvbikgPT4gdm9pZCkge1xuICAgIHRoaXMuYXR0cmlidXRpb25DYWxsYmFjayA9IGF0dHJpYnV0aW9uQ2FsbGJhY2s7XG4gIH1cblxuICBzZXRFdmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2tMaXN0ZW5lcihldmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s6IChldmVudDogQWRqdXN0RXZlbnRTdWNjZXNzKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5ldmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2sgPSBldmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s7XG4gIH1cblxuICBzZXRFdmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2tMaXN0ZW5lcihldmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2s6IChldmVudDogQWRqdXN0RXZlbnRGYWlsdXJlKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5ldmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2sgPSBldmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2s7XG4gIH1cblxuICBzZXRTZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFja0xpc3RlbmVyKFxuICAgIHNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrOiAoc2Vzc2lvbjogQWRqdXN0U2Vzc2lvblN1Y2Nlc3MpID0+IHZvaWRcbiAgKSB7XG4gICAgdGhpcy5zZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjayA9IHNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrO1xuICB9XG5cbiAgc2V0U2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2tMaXN0ZW5lcihzZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjazogKHNlc3Npb246IEFkanVzdFNlc3Npb25GYWlsdXJlKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5zZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjayA9IHNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrO1xuICB9XG5cbiAgc2V0RGVmZXJyZWREZWVwbGlua0NhbGxiYWNrTGlzdGVuZXIoZGVmZXJyZWREZWVwbGlua0NhbGxiYWNrOiAodXJpOiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgICB0aGlzLmRlZmVycmVkRGVlcGxpbmtDYWxsYmFjayA9IGRlZmVycmVkRGVlcGxpbmtDYWxsYmFjaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QXR0cmlidXRpb25DYWxsYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGlvbkNhbGxiYWNrO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFdmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFdmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2s7XG4gIH1cblxuICBwcml2YXRlIGdldERlZmVycmVkRGVlcGxpbmtDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2s7XG4gIH1cblxuICBwcml2YXRlIGhhc0F0dHJpYnV0aW9uTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRpb25DYWxsYmFjayAhPT0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaGFzRXZlbnRUcmFja2luZ1N1Y2NlZWRlZExpc3RlbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjayAhPT0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaGFzRXZlbnRUcmFja2luZ0ZhaWxlZExpc3RlbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjayAhPT0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaGFzU2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2sgIT09IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGhhc1Nlc3Npb25UcmFja2luZ0ZhaWxlZExpc3RlbmVyKCkge1xuICAgIHJldHVybiB0aGlzLnNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrICE9PSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNEZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2tMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2sgIT09IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkanVzdEFwcFN0b3JlU3Vic2NyaXB0aW9uIHtcbiAgcHJpdmF0ZSBwcmljZTogc3RyaW5nO1xuICBwcml2YXRlIGN1cnJlbmN5OiBzdHJpbmc7XG4gIHByaXZhdGUgdHJhbnNhY3Rpb25JZDogc3RyaW5nO1xuICBwcml2YXRlIHJlY2VpcHQ6IHN0cmluZztcbiAgcHJpdmF0ZSB0cmFuc2FjdGlvbkRhdGU6IHN0cmluZztcbiAgcHJpdmF0ZSBzYWxlc1JlZ2lvbjogc3RyaW5nO1xuICBwcml2YXRlIGNhbGxiYWNrUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBwYXJ0bmVyUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihwcmljZTogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nLCB0cmFuc2FjdGlvbklkOiBzdHJpbmcsIHJlY2VpcHQ6IHN0cmluZykge1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XG4gICAgdGhpcy50cmFuc2FjdGlvbklkID0gdHJhbnNhY3Rpb25JZDtcbiAgICB0aGlzLnJlY2VpcHQgPSByZWNlaXB0O1xuICB9XG5cbiAgc2V0VHJhbnNhY3Rpb25EYXRlKHRyYW5zYWN0aW9uRGF0ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2FjdGlvbkRhdGUgPSB0cmFuc2FjdGlvbkRhdGU7XG4gIH1cblxuICBzZXRTYWxlc1JlZ2lvbihzYWxlc1JlZ2lvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zYWxlc1JlZ2lvbiA9IHNhbGVzUmVnaW9uO1xuICB9XG5cbiAgYWRkQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKGtleSk7XG4gICAgdGhpcy5jYWxsYmFja1BhcmFtZXRlcnMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBhZGRQYXJ0bmVyUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKGtleSk7XG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRqdXN0UGxheVN0b3JlU3Vic2NyaXB0aW9uIHtcbiAgcHJpdmF0ZSBwcmljZTogc3RyaW5nO1xuICBwcml2YXRlIGN1cnJlbmN5OiBzdHJpbmc7XG4gIHByaXZhdGUgc2t1OiBzdHJpbmc7XG4gIHByaXZhdGUgb3JkZXJJZDogc3RyaW5nO1xuICBwcml2YXRlIHNpZ25hdHVyZTogc3RyaW5nO1xuICBwcml2YXRlIHB1cmNoYXNlVG9rZW46IHN0cmluZztcbiAgcHJpdmF0ZSBwdXJjaGFzZVRpbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBjYWxsYmFja1BhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgcGFydG5lclBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpY2U6IHN0cmluZywgY3VycmVuY3k6IHN0cmluZywgc2t1OiBzdHJpbmcsIG9yZGVySWQ6IHN0cmluZywgc2lnbmF0dXJlOiBzdHJpbmcsIHB1cmNoYXNlVG9rZW46IHN0cmluZykge1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XG4gICAgdGhpcy5za3UgPSBza3U7XG4gICAgdGhpcy5vcmRlcklkID0gb3JkZXJJZDtcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICB0aGlzLnB1cmNoYXNlVG9rZW4gPSBwdXJjaGFzZVRva2VuO1xuICB9XG5cbiAgc2V0UHVyY2hhc2VUaW1lKHB1cmNoYXNlVGltZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wdXJjaGFzZVRpbWUgPSBwdXJjaGFzZVRpbWU7XG4gIH1cblxuICBhZGRDYWxsYmFja1BhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2goa2V5KTtcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIGFkZFBhcnRuZXJQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2goa2V5KTtcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGp1c3RUaGlyZFBhcnR5U2hhcmluZyB7XG4gIHByaXZhdGUgaXNFbmFibGVkOiBib29sZWFuO1xuICBwcml2YXRlIGdyYW51bGFyT3B0aW9uczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihpc0VuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgfVxuXG4gIGFkZEdyYW51bGFyT3B0aW9uKHBhcnRuZXJOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5ncmFudWxhck9wdGlvbnMucHVzaChwYXJ0bmVyTmFtZSk7XG4gICAgdGhpcy5ncmFudWxhck9wdGlvbnMucHVzaChrZXkpO1xuICAgIHRoaXMuZ3JhbnVsYXJPcHRpb25zLnB1c2godmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRqdXN0QXR0cmlidXRpb24ge1xuICB0cmFja2VyVG9rZW46IHN0cmluZztcbiAgdHJhY2tlck5hbWU6IHN0cmluZztcbiAgbmV0d29yazogc3RyaW5nO1xuICBjYW1wYWlnbjogc3RyaW5nO1xuICBhZGdyb3VwOiBzdHJpbmc7XG4gIGNyZWF0aXZlOiBzdHJpbmc7XG4gIGNsaWNrTGFiZWw6IHN0cmluZztcbiAgYWRpZDogc3RyaW5nO1xuICBjb3N0VHlwZTogc3RyaW5nO1xuICBjb3N0QW1vdW50OiBzdHJpbmc7XG4gIGNvc3RDdXJyZW5jeTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkanVzdFNlc3Npb25TdWNjZXNzIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICB0aW1lc3RhbXA6IHN0cmluZztcbiAgYWRpZDogc3RyaW5nO1xuICBqc29uUmVzcG9uc2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RTZXNzaW9uRmFpbHVyZSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdGltZXN0YW1wOiBzdHJpbmc7XG4gIGFkaWQ6IHN0cmluZztcbiAgd2lsbFJldHJ5OiBib29sZWFuO1xuICBqc29uUmVzcG9uc2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RFdmVudFN1Y2Nlc3Mge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICBhZGlkOiBzdHJpbmc7XG4gIGV2ZW50VG9rZW46IHN0cmluZztcbiAgY2FsbGJhY2tJZDogc3RyaW5nO1xuICBqc29uUmVzcG9uc2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RFdmVudEZhaWx1cmUge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICBhZGlkOiBzdHJpbmc7XG4gIGV2ZW50VG9rZW46IHN0cmluZztcbiAgd2lsbFJldHJ5OiBib29sZWFuO1xuICBjYWxsYmFja0lkOiBzdHJpbmc7XG4gIGpzb25SZXNwb25zZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBBZGp1c3RFbnZpcm9ubWVudCB7XG4gIFNhbmRib3ggPSAnc2FuZGJveCcsXG4gIFByb2R1Y3Rpb24gPSAncHJvZHVjdGlvbicsXG59XG5cbmV4cG9ydCBlbnVtIEFkanVzdExvZ0xldmVsIHtcbiAgVmVyYm9zZSA9ICdWRVJCT1NFJyxcbiAgRGVidWcgPSAnREVCVUcnLFxuICBJbmZvID0gJ0lORk8nLFxuICBXYXJuID0gJ1dBUk4nLFxuICBFcnJvciA9ICdFUlJPUicsXG4gIEFzc2VydCA9ICdBU1NFUlQnLFxuICBTdXBwcmVzcyA9ICdTVVBQUkVTUycsXG59XG5cbmV4cG9ydCBlbnVtIEFkanVzdFVybFN0cmF0ZWd5IHtcbiAgSW5kaWEgPSAnSW5kaWEnLFxuICBDaGluYSA9ICdDaGluYScsXG59XG5cbmV4cG9ydCBlbnVtIEFkanVzdEFkUmV2ZW51ZVNvdXJjZSB7XG4gIEFkUmV2ZW51ZVNvdXJjZU1vcHViID0gJ21vcHViJyxcbiAgQWRSZXZlbnVlU291cmNlQWRtb2IgPSAnYWRtb2InLFxuICBBZFJldmVudWVTb3VyY2VGYk5hdGl2ZUFkID0gJ2ZhY2Vib29rX25hdGl2ZV9hZCcsXG4gIEFkUmV2ZW51ZVNvdXJjZUZiQXVkaWVuY2VOZXR3b3JrID0gJ2ZhY2Vib29rX2F1ZGllbmNlX25ldHdvcmsnLFxuICBBZFJldmVudWVTb3VyY2VJcm9uc291cmNlID0gJ2lyb25zb3VyY2UnLFxuICBBZFJldmVudWVTb3VyY2VGeWJlciA9ICdmeWJlcicsXG4gIEFkUmV2ZW51ZVNvdXJjZUFlcnNlcnYgPSAnYWVyc2VydicsXG4gIEFkUmV2ZW51ZVNvdXJjZUFwcG9kZWFsID0gJ2FwcG9kZWFsJyxcbiAgQWRSZXZlbnVlU291cmNlQWRpbmN1YmUgPSAnYWRpbmN1YmUnLFxuICBBZFJldmVudWVTb3VyY2VGdXNlUG93ZXJlZCA9ICdmdXNlcG93ZXJlZCcsXG4gIEFkUmV2ZW51ZVNvdXJjZUFkZGFwcHRyID0gJ2FkZGFwcHRyJyxcbiAgQWRSZXZlbnVlU291cmNlTWlsbGVubmlhbE1lZGlhdGlvbiA9ICdtaWxsZW5uaWFsX21lZGlhdGlvbicsXG4gIEFkUmV2ZW51ZVNvdXJjZUZsdXJyeSA9ICdmbHVycnknLFxuICBBZFJldmVudWVTb3VyY2VBZG1vc3QgPSAnYWRtb3N0JyxcbiAgQWRSZXZlbnVlU291cmNlRGVsdGFkbmEgPSAnZGVsdGFkbmEnLFxuICBBZFJldmVudWVTb3VyY2VVcHNpZ2h0ID0gJ3Vwc2lnaHQnLFxuICBBZFJldmVudWVTb3VyY2VVbml0eUFkcyA9ICd1bml0eWFkcycsXG4gIEFkUmV2ZW51ZVNvdXJjZUFkdG9hcHAgPSAnYWR0b2FwcCcsXG4gIEFkUmV2ZW51ZVNvdXJjZVRhcGRhcSA9ICd0YXBkYXEnLFxufVxuXG4vKipcbiAqIEBuYW1lIEFkanVzdFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIGlzIHRoZSBJb25pYyBDb3Jkb3ZhIFNESyBvZiBBZGp1c3TihKIuIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IEFkanVzdOKEoiBhdCBhZGp1c3QuY29tLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29tLmFkanVzdC5zZGtgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQWRqdXN0IENvcmRvdmEgU0RLXShodHRwczovL2dpdGh1Yi5jb20vYWRqdXN0L2NvcmRvdmFfc2RrKVxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogIGltcG9ydCB7IEFkanVzdCwgQWRqdXN0Q29uZmlnLCBBZGp1c3RFbnZpcm9ubWVudCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYWRqdXN0JztcbiAqXG4gKiAgY29uc3RydWN0b3IocHJpdmF0ZSBhZGp1c3Q6IEFkanVzdCkgeyB9XG4gKlxuICogIC4uLlxuICpcbiAqICBjb25zdCBjb25maWcgPSBuZXcgQWRqdXN0Q29uZmlnKCdBUFAtVE9LRU4tSEVSRScsIEFkanVzdEVudmlyb25tZW50LlNhbmRib3gpO1xuICogIGNvbmZpZy5sb2dMZXZlbCA9IEFkanVzdExvZ0xldmVsLlZlcmJvc2U7XG4gKiAgLy8gU2V0IG90aGVyIGNvbmZpZyBwcm9wZXJ0aWVzLlxuICogIGFkanVzdC5jcmVhdGUoY29uZmlnKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBBZGp1c3RBdHRyaWJ1dGlvblxuICogQWRqdXN0U2Vzc2lvblN1Y2Nlc3NcbiAqIEFkanVzdFNlc3Npb25GYWlsdXJlXG4gKiBBZGp1c3RFdmVudFN1Y2Nlc3NcbiAqIEFkanVzdEV2ZW50RmFpbHVyZVxuICogQGNsYXNzZXNcbiAqIEFkanVzdEV2ZW50XG4gKiBBZGp1c3RDb25maWdcbiAqIEFkanVzdEFwcFN0b3JlU3Vic2NyaXB0aW9uXG4gKiBBZGp1c3RQbGF5U3RvcmVTdWJzY3JpcHRpb25cbiAqIEFkanVzdFRoaXJkUGFydHlTaGFyaW5nXG4gKiBAZW51bXNcbiAqIEFkanVzdEVudmlyb25tZW50XG4gKiBBZGp1c3RMb2dMZXZlbFxuICogQWRqdXN0VXJsU3RyYXRlZ3lcbiAqIEFkanVzdEFkUmV2ZW51ZVNvdXJjZVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FkanVzdCcsXG4gIHBsdWdpbjogJ2NvbS5hZGp1c3Quc2RrJyxcbiAgcGx1Z2luUmVmOiAnQWRqdXN0JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hZGp1c3QvY29yZG92YV9zZGsnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRqdXN0IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBtZXRob2QgaW5pdGlhbGl6ZXMgQWRqdXN0IFNES1xuICAgKiBAcGFyYW0ge0FkanVzdENvbmlnfSBjb25maWcgQWRqdXN0IGNvbmZpZyBvYmplY3QgdXNlZCBhcyBzdGFydGluZyBvcHRpb25zXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY3JlYXRlKGNvbmZpZzogQWRqdXN0Q29uZmlnKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgYW4gZXZlbnRcbiAgICogQHBhcmFtIHtBZGp1c3RFdmVudH0gZXZlbnQgQWRqdXN0IGV2ZW50IG9iamVjdCB0byBiZSB0cmFja2VkXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdHJhY2tFdmVudChldmVudDogQWRqdXN0RXZlbnQpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBBcHAgU3RvcmUgc3Vic2NyaXB0aW9uXG4gICAqIEBwYXJhbSB7QWRqdXN0QXBwU3RvcmVTdWJzY3JpcHRpb259IHN1YnNjcmlwdGlvbiBBZGp1c3QgQXBwIFN0b3JlIHN1YnNjcmlwdGlvbiBvYmplY3QgdG8gYmUgdHJhY2tlZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHRyYWNrQXBwU3RvcmVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uOiBBZGp1c3RBcHBTdG9yZVN1YnNjcmlwdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIFBsYXkgU3RvcmUgc3Vic2NyaXB0aW9uXG4gICAqIEBwYXJhbSB7QWRqdXN0UGxheVN0b3JlU3Vic2NyaXB0aW9ufSBzdWJzY3JpcHRpb24gQWRqdXN0IFBsYXkgU3RvcmUgc3Vic2NyaXB0aW9uIG9iamVjdCB0byBiZSB0cmFja2VkXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdHJhY2tQbGF5U3RvcmVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uOiBBZGp1c3RQbGF5U3RvcmVTdWJzY3JpcHRpb24pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyB0aGlyZCBwYXJ0eSBzaGFyaW5nIGNob2ljZVxuICAgKiBAcGFyYW0ge0FkanVzdFRoaXJkUGFydHlTaGFyaW5nfSB0aGlyZFBhcnR5U2hhcmluZyBBZGp1c3QgdGhpcmQgcGFydHkgc2hhcmluZyBvYmplY3QgdG8gYmUgdHJhY2tlZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHRyYWNrVGhpcmRQYXJ0eVNoYXJpbmcodGhpcmRQYXJ0eVNoYXJpbmc6IEFkanVzdFRoaXJkUGFydHlTaGFyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgYWQgcmV2ZW51ZSBkYXRhXG4gICAqIEBwYXJhbSB7QWRqdXN0QWRSZXZlbnVlU291cmNlfSBzb3VyY2UgQWQgcmV2ZW51ZSBzb3VyY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBheWxvYWQgQWQgcmV2ZW51ZSBKU09OIHN0cmluZyBwYXlsb2FkXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdHJhY2tBZFJldmVudWUoc291cmNlOiBBZGp1c3RBZFJldmVudWVTb3VyY2UsIHBheWxvYWQ6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIG1lYXN1cmVtZW50IGNvbnNlbnQgY2hvaWNlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWVhc3VyZW1lbnRDb25zZW50IHNldCBtZWFzdXJlbWVudCBjb25zZW50IHRvIHRydWUgb3IgZmFsc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0cmFja01lYXN1cmVtZW50Q29uc2VudChtZWFzdXJlbWVudENvbnNlbnQ6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHNldHMgb2ZmbGluZSBtb2RlIG9uIG9yIG9mZlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWQgc2V0IHRvIHRydWUgZm9yIG9mZmxpbmUgbW9kZSBvblxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldE9mZmxpbmVNb2RlKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEJ5IG1ha2luZyB0aGlzIGNhbGwsIHRoZSBBZGp1c3QgU0RLIHdpbGwgdHJ5IHRvIGZpbmQgaWYgdGhlcmUgaXMgYW55IG5ldyBhdHRyaWJ1dGlvbiBpbmZvIGluc2lkZSBvZiB0aGUgZGVlcCBsaW5rIGFuZCBpZiBhbnksIGl0IHdpbGwgYmUgc2VudCB0byB0aGUgQWRqdXN0IGJhY2tlbmQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVVJMIG9mIHRoZSBkZWVwbGlua1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGFwcFdpbGxPcGVuVXJsKHVybDogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGRpc2FibGUvZW5hYmxlIHRoZSBBZGp1c3QgU0RLIGZyb20gdHJhY2tpbmcgYnkgaW52b2tpbmcgdGhpcyBtZXRob2RcbiAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkIHNldCB0byBmYWxzZSB0byBkaXNhYmxlIFNES1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogVG8gc2VuZCB1cyB0aGUgcHVzaCBub3RpZmljYXRpb24gdG9rZW4sIGFkZCB0aGUgZm9sbG93aW5nIGNhbGwgdG8gQWRqdXN0IHdoZW5ldmVyIHlvdSBnZXQgeW91ciB0b2tlbiBpbiB0aGUgYXBwIG9yIHdoZW4gaXQgZ2V0cyB1cGRhdGVkLlxuICAgKiBQdXNoIHRva2VucyBhcmUgdXNlZCBmb3IgQXVkaWVuY2UgQnVpbGRlciBhbmQgY2xpZW50IGNhbGxiYWNrcywgYW5kIHRoZXkgYXJlIHJlcXVpcmVkIGZvciB0aGUgdXBjb21pbmcgdW5pbnN0YWxsIHRyYWNraW5nIGZlYXR1cmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwdXNoVG9rZW4gcHVzaCB0b2tlbiB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFB1c2hUb2tlbihwdXNoVG9rZW46IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIEFkanVzdCBTREsgaXMgY3VycmVudGx5IGVuYWJsZWQgYnkgY2FsbGluZyB0aGlzIGZ1bmN0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEluIGFjY29yZGFuY2Ugd2l0aCBhcnRpY2xlIDE3IG9mIHRoZSBFVSdzIEdlbmVyYWwgRGF0YSBQcm90ZWN0aW9uIFJlZ3VsYXRpb24gKEdEUFIpLCB5b3UgY2FuIG5vdGlmeSBBZGp1c3Qgd2hlbiBhIHVzZXIgaGFzIGV4ZXJjaXNlZCB0aGVpciByaWdodCB0byBiZSBmb3Jnb3R0ZW4uXG4gICAqIENhbGxpbmcgdGhlIGZvbGxvd2luZyBtZXRob2Qgd2lsbCBpbnN0cnVjdCB0aGUgQWRqdXN0IFNESyB0byBjb21tdW5pY2F0ZSB0aGUgdXNlcidzIGNob2ljZSB0byBiZSBmb3Jnb3R0ZW4gdG8gdGhlIEFkanVzdCBiYWNrZW5kXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2RwckZvcmdldE1lKCk6IHZvaWQge31cblxuICAvKipcbiAgICogWW91IGNhbiBub3cgbm90aWZ5IEFkanVzdCB3aGVuIGEgdXNlciBoYXMgZXhlcmNpc2VkIHRoZWlyIHJpZ2h0IHRvIHN0b3Agc2hhcmluZyB0aGVpciBkYXRhIHdpdGggcGFydG5lcnMgZm9yIG1hcmtldGluZyBwdXJwb3NlcywgYnV0IGhhcyBhbGxvd2VkIGl0IHRvIGJlIHNoYXJlZCBmb3Igc3RhdGlzdGljcyBwdXJwb3Nlcy5cbiAgICogQ2FsbGluZyB0aGUgZm9sbG93aW5nIG1ldGhvZCB3aWxsIGluc3RydWN0IHRoZSBBZGp1c3QgU0RLIHRvIGNvbW11bmljYXRlIHRoZSB1c2VyJ3MgY2hvaWNlIHRvIGRpc2FibGUgZGF0YSBzaGFyaW5nIHRvIHRoZSBBZGp1c3QgYmFja2VuZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGRpc2FibGVUaGlyZFBhcnR5U2hhcmluZygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHVzZWQgdG8gZ2V0IEdvb2dsZSBBZElkXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBnb29nbGUgQWRJZCB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRHb29nbGVBZElkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHlvdSBuZWVkIHRvIG9idGFpbiB0aGUgQW1hem9uIEFkdmVydGlzaW5nIElELCB5b3UgY2FuIG1ha2UgYSBjYWxsIHRvIHRoaXMgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBhbmF6aWIgYWR2LiBJRFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBbWF6b25BZElkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIG9idGFpbiB0aGUgSURGQSwgY2FsbCB0aGlzIGZ1bmN0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBJREZBIHN0cmluZyB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRJZGZhKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBldmVyeSBkZXZpY2Ugd2l0aCB5b3VyIGFwcCBpbnN0YWxsZWQgb24gaXQsIHRoZSBBZGp1c3QgYmFja2VuZCBnZW5lcmF0ZXMgYSB1bmlxdWUgQWRqdXN0IGRldmljZSBpZGVudGlmaWVyIChhZGlkKS5cbiAgICogSW4gb3JkZXIgdG8gb2J0YWluIHRoaXMgaWRlbnRpZmllciwgY2FsbCB0aGlzIGZ1bmN0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBhZGlkIHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEFkaWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSWYgeW91IHdhbnQgdG8gYWNjZXNzIGluZm9ybWF0aW9uIGFib3V0IGEgdXNlcidzIGN1cnJlbnQgYXR0cmlidXRpb24gd2hlbmV2ZXIgeW91IG5lZWQgaXQsIHlvdSBjYW4gbWFrZSBhIGNhbGwgdG8gdGhpcyBmdW5jdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEFkanVzdEF0dHJpYnV0aW9uPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBBZGp1c3RBdHRyaWJ1dGlvbiBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QXR0cmlidXRpb24oKTogUHJvbWlzZTxBZGp1c3RBdHRyaWJ1dGlvbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGluZm9ybWF0aW9uIGFib3V0IHZlcnNpb24gb2YgdGhlIFNESyB1c2VkXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBzZGsgdmVyc2lvbiBpbmZvcm1hdGlvblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRTZGtWZXJzaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB1c2VkIHRvIGFkZCBzZXNzaW9uIGNhbGxiYWNrIHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIGtleSBrZXlcbiAgICogQHBhcmFtIHZhbHVlIHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYWRkU2Vzc2lvbkNhbGxiYWNrUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBzcGVjaWZpYyBzZXNzaW9uIGNhbGxiYWNrIHBhcmFtZXRlciBieSBwYXNzaW5nIHRoZSBkZXNpcmluZyBrZXkgdG8gdGhpcyBtZXRob2RcbiAgICogQHBhcmFtIGtleSBrZXlcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZW1vdmVTZXNzaW9uQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIElmIGFsbCBrZXlzIGFuZCB2YWx1ZXMgZnJvbSB0aGUgc2Vzc2lvbiBjYWxsYmFjayBwYXJhbWV0ZXJzIGhhdmUgdG8gYmUgcmVtb3ZlZCwgY2FsbCB0aGlzIG1ldGhvZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlc2V0U2Vzc2lvbkNhbGxiYWNrUGFyYW1ldGVycygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB1c2VkIHRvIGFkZCBzZXNzaW9uIHBhcnRuZXIgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0ga2V5IGtleVxuICAgKiBAcGFyYW0gdmFsdWUgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBhZGRTZXNzaW9uUGFydG5lclBhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVtb3ZlIGEgc3BlY2lmaWMgc2Vzc2lvbiBwYXJ0bmVyIHBhcmFtZXRlciBieSBwYXNzaW5nIHRoZSBkZXNpcmluZyBrZXkgdG8gdGhpcyBtZXRob2RcbiAgICogQHBhcmFtIGtleSBrZXlcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZW1vdmVTZXNzaW9uUGFydG5lclBhcmFtZXRlcihrZXk6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogSWYgYWxsIGtleXMgYW5kIHZhbHVlcyBmcm9tIHRoZSBzZXNzaW9uIHBhcnRuZXIgcGFyYW1ldGVycyBoYXZlIHRvIGJlIHJlbW92ZWQsIGNhbGwgdGhpcyBtZXRob2RcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZXNldFNlc3Npb25QYXJ0bmVyUGFyYW1ldGVycygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGNhbGwgd2lsbCBtYWtlIHRoZSBBZGp1c3QgU0RLIHNlbmQgdGhlIGluaXRpYWwgaW5zdGFsbCBzZXNzaW9uIGFuZCBhbnkgZXZlbnRzIGNyZWF0ZWQsIGlmIHRoZXkgd2VyZSBub3Qgc2VudCBhZnRlciBkZWxheSBzdGFydCB3YXMgc2V0IGFuZCBpdCdzIGRlbGF5IGV4cGlyZWQuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2VuZEZpcnN0UGFja2FnZXMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IEFkanVzdCBTREsgdG8gc2hvdyBwb3AgdXAgZGlhbG9nIGZvciBhc2tpbmcgdXNlcidzIGNvbnNlbnQgdG8gYmUgdHJhY2tlZC5cbiAgICogSW4gb3JkZXIgdG8gZG8gdGhpcywgY2FsbCB0aGlzIGZ1bmN0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8bnVtYmVyPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCB1c2VyJ3MgY29uc2VudCB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXF1ZXN0VHJhY2tpbmdBdXRob3JpemF0aW9uV2l0aENvbXBsZXRpb25IYW5kbGVyKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gdXBkYXRlIFNLQWROZXR3b3JrIGNvbnZlcnNpb24gdmFsdWUgd2l0aCBjYWxsaW5nIHRoaXMgbWV0aG9kXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb252ZXJzaW9uVmFsdWUgY29udmVyc2lvbiB2YWx1ZSBmb3IgdGhlIHVzZXJcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB1cGRhdGVDb252ZXJzaW9uVmFsdWUoY29udmVyc2lvblZhbHVlOiBudW1iZXIpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRvIG9idGFpbiB0aGUgYXBwIHRyYWNraW5nIGF1dGhvcml6YXRpb24gc3RhdHVzIGluIGlPUywgY2FsbCB0aGlzIGZ1bmN0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8bnVtYmVyPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBhcHAgdHJhY2tpbmcgYXV0aG9yaXphdGlvbiBzdGF0dXNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QXBwVHJhY2tpbmdBdXRob3JpemF0aW9uU3RhdHVzKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=