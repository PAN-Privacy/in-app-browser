var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var AdjustOriginal = /** @class */ (function (_super) {
    __extends(AdjustOriginal, _super);
    function AdjustOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdjustOriginal.prototype.create = function (config) { return cordova(this, "create", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackEvent = function (event) { return cordova(this, "trackEvent", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackAppStoreSubscription = function (subscription) { return cordova(this, "trackAppStoreSubscription", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackPlayStoreSubscription = function (subscription) { return cordova(this, "trackPlayStoreSubscription", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackThirdPartySharing = function (thirdPartySharing) { return cordova(this, "trackThirdPartySharing", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackAdRevenue = function (source, payload) { return cordova(this, "trackAdRevenue", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackMeasurementConsent = function (measurementConsent) { return cordova(this, "trackMeasurementConsent", { "sync": true }, arguments); };
    AdjustOriginal.prototype.setOfflineMode = function (enabled) { return cordova(this, "setOfflineMode", { "sync": true }, arguments); };
    AdjustOriginal.prototype.appWillOpenUrl = function (url) { return cordova(this, "appWillOpenUrl", { "sync": true }, arguments); };
    AdjustOriginal.prototype.setEnabled = function (enabled) { return cordova(this, "setEnabled", { "sync": true }, arguments); };
    AdjustOriginal.prototype.setPushToken = function (pushToken) { return cordova(this, "setPushToken", { "sync": true }, arguments); };
    AdjustOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AdjustOriginal.prototype.gdprForgetMe = function () { return cordova(this, "gdprForgetMe", { "sync": true }, arguments); };
    AdjustOriginal.prototype.disableThirdPartySharing = function () { return cordova(this, "disableThirdPartySharing", { "sync": true }, arguments); };
    AdjustOriginal.prototype.getGoogleAdId = function () { return cordova(this, "getGoogleAdId", {}, arguments); };
    AdjustOriginal.prototype.getAmazonAdId = function () { return cordova(this, "getAmazonAdId", {}, arguments); };
    AdjustOriginal.prototype.getIdfa = function () { return cordova(this, "getIdfa", {}, arguments); };
    AdjustOriginal.prototype.getAdid = function () { return cordova(this, "getAdid", {}, arguments); };
    AdjustOriginal.prototype.getAttribution = function () { return cordova(this, "getAttribution", {}, arguments); };
    AdjustOriginal.prototype.getSdkVersion = function () { return cordova(this, "getSdkVersion", {}, arguments); };
    AdjustOriginal.prototype.addSessionCallbackParameter = function (key, value) { return cordova(this, "addSessionCallbackParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.removeSessionCallbackParameter = function (key) { return cordova(this, "removeSessionCallbackParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.resetSessionCallbackParameters = function () { return cordova(this, "resetSessionCallbackParameters", { "sync": true }, arguments); };
    AdjustOriginal.prototype.addSessionPartnerParameter = function (key, value) { return cordova(this, "addSessionPartnerParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.removeSessionPartnerParameter = function (key) { return cordova(this, "removeSessionPartnerParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.resetSessionPartnerParameters = function () { return cordova(this, "resetSessionPartnerParameters", { "sync": true }, arguments); };
    AdjustOriginal.prototype.sendFirstPackages = function () { return cordova(this, "sendFirstPackages", { "sync": true }, arguments); };
    AdjustOriginal.prototype.requestTrackingAuthorizationWithCompletionHandler = function () { return cordova(this, "requestTrackingAuthorizationWithCompletionHandler", {}, arguments); };
    AdjustOriginal.prototype.updateConversionValue = function (conversionValue) { return cordova(this, "updateConversionValue", { "sync": true }, arguments); };
    AdjustOriginal.prototype.getAppTrackingAuthorizationStatus = function () { return cordova(this, "getAppTrackingAuthorizationStatus", {}, arguments); };
    AdjustOriginal.pluginName = "Adjust";
    AdjustOriginal.plugin = "com.adjust.sdk";
    AdjustOriginal.pluginRef = "Adjust";
    AdjustOriginal.repo = "https://github.com/adjust/cordova_sdk";
    AdjustOriginal.platforms = ["Android", "iOS"];
    return AdjustOriginal;
}(IonicNativePlugin));
var Adjust = new AdjustOriginal();
export { Adjust };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FkanVzdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFXdEUscUJBQVksVUFBa0I7UUFIdEIsdUJBQWtCLEdBQWEsRUFBRSxDQUFDO1FBQ2xDLHNCQUFpQixHQUFhLEVBQUUsQ0FBQztRQUd2QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLE9BQWUsRUFBRSxRQUFnQjtRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsMENBQW9CLEdBQXBCLFVBQXFCLEdBQVcsRUFBRSxLQUFhO1FBQzdDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQseUNBQW1CLEdBQW5CLFVBQW9CLEdBQVcsRUFBRSxLQUFhO1FBQzVDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsc0NBQWdCLEdBQWhCLFVBQWlCLGFBQXFCO1FBQ3BDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQWMsVUFBa0I7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztzQkFyQ0g7Ozs7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a0MsQ0FBQTtJQUNsQyx5REFBZ0MsQ0FBQTtBQUNsQyxDQUFDLEVBcEJXLHFCQUFxQixLQUFyQixxQkFBcUIsUUFvQmhDOztJQWlEMkIsMEJBQWlCOzs7O0lBTTNDLHVCQUFNLGFBQUMsTUFBb0I7SUFPM0IsMkJBQVUsYUFBQyxLQUFrQjtJQU83QiwwQ0FBeUIsYUFBQyxZQUF3QztJQU9sRSwyQ0FBMEIsYUFBQyxZQUF5QztJQU9wRSx1Q0FBc0IsYUFBQyxpQkFBMEM7SUFRakUsK0JBQWMsYUFBQyxNQUE2QixFQUFFLE9BQWU7SUFPN0Qsd0NBQXVCLGFBQUMsa0JBQTJCO0lBT25ELCtCQUFjLGFBQUMsT0FBZ0I7SUFPL0IsK0JBQWMsYUFBQyxHQUFXO0lBTzFCLDJCQUFVLGFBQUMsT0FBZ0I7SUFRM0IsNkJBQVksYUFBQyxTQUFpQjtJQU85QiwwQkFBUztJQVNULDZCQUFZO0lBT1oseUNBQXdCO0lBT3hCLDhCQUFhO0lBU2IsOEJBQWE7SUFTYix3QkFBTztJQVVQLHdCQUFPO0lBU1AsK0JBQWM7SUFTZCw4QkFBYTtJQVViLDRDQUEyQixhQUFDLEdBQVcsRUFBRSxLQUFhO0lBT3RELCtDQUE4QixhQUFDLEdBQVc7SUFNMUMsK0NBQThCO0lBUTlCLDJDQUEwQixhQUFDLEdBQVcsRUFBRSxLQUFhO0lBT3JELDhDQUE2QixhQUFDLEdBQVc7SUFNekMsOENBQTZCO0lBTTdCLGtDQUFpQjtJQVFqQixrRUFBaUQ7SUFTakQsc0NBQXFCLGFBQUMsZUFBdUI7SUFPN0Msa0RBQWlDOzs7Ozs7aUJBcHFCbkM7RUFnYzRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBZGp1c3RFdmVudCB7XG4gIHByaXZhdGUgZXZlbnRUb2tlbjogc3RyaW5nO1xuICBwcml2YXRlIHJldmVudWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBjdXJyZW5jeTogc3RyaW5nO1xuICBwcml2YXRlIHRyYW5zYWN0aW9uSWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBjYWxsYmFja0lkOiBzdHJpbmc7XG4gIHByaXZhdGUgY2FsbGJhY2tQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIHBhcnRuZXJQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGV2ZW50VG9rZW46IHN0cmluZykge1xuICAgIHRoaXMuZXZlbnRUb2tlbiA9IGV2ZW50VG9rZW47XG4gIH1cblxuICBzZXRSZXZlbnVlKHJldmVudWU6IG51bWJlciwgY3VycmVuY3k6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmV2ZW51ZSA9IHJldmVudWU7XG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICB9XG5cbiAgYWRkQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKGtleSk7XG4gICAgdGhpcy5jYWxsYmFja1BhcmFtZXRlcnMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBhZGRQYXJ0bmVyUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKGtleSk7XG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHNldFRyYW5zYWN0aW9uSWQodHJhbnNhY3Rpb25JZDogc3RyaW5nKSB7XG4gICAgdGhpcy50cmFuc2FjdGlvbklkID0gdHJhbnNhY3Rpb25JZDtcbiAgfVxuXG4gIHNldENhbGxiYWNrSWQoY2FsbGJhY2tJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5jYWxsYmFja0lkID0gY2FsbGJhY2tJZDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRqdXN0Q29uZmlnIHtcbiAgcHJpdmF0ZSBhcHBUb2tlbjogc3RyaW5nO1xuICBwcml2YXRlIGVudmlyb25tZW50OiBBZGp1c3RFbnZpcm9ubWVudDtcbiAgcHJpdmF0ZSBzZGtQcmVmaXg6IHN0cmluZztcbiAgcHJpdmF0ZSBkZWxheVN0YXJ0ID0gMC4wO1xuICBwcml2YXRlIGxvZ0xldmVsOiBBZGp1c3RMb2dMZXZlbCA9IG51bGw7XG4gIHByaXZhdGUgZGVmYXVsdFRyYWNrZXI6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgdXJsU3RyYXRlZ3k6IEFkanVzdFVybFN0cmF0ZWd5ID0gbnVsbDtcbiAgcHJpdmF0ZSBleHRlcm5hbERldmljZUlkOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIHNlbmRJbkJhY2tncm91bmQ6IGJvb2xlYW4gPSBudWxsO1xuICBwcml2YXRlIHNob3VsZExhdW5jaERlZXBsaW5rOiBib29sZWFuID0gbnVsbDtcbiAgcHJpdmF0ZSBldmVudEJ1ZmZlcmluZ0VuYWJsZWQ6IGJvb2xlYW4gPSBudWxsO1xuICBwcml2YXRlIHVzZXJBZ2VudDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBpc0RldmljZUtub3duOiBib29sZWFuID0gbnVsbDtcbiAgcHJpdmF0ZSBuZWVkc0Nvc3Q6IGJvb2xlYW4gPSBudWxsO1xuICBwcml2YXRlIHNlY3JldElkOiBudW1iZXIgPSBudWxsO1xuICBwcml2YXRlIGluZm8xOiBudW1iZXIgPSBudWxsO1xuICBwcml2YXRlIGluZm8yOiBudW1iZXIgPSBudWxsO1xuICBwcml2YXRlIGluZm8zOiBudW1iZXIgPSBudWxsO1xuICBwcml2YXRlIGluZm80OiBudW1iZXIgPSBudWxsO1xuICBwcml2YXRlIHByb2Nlc3NOYW1lOiBzdHJpbmcgPSBudWxsOyAvLyBBbmRyb2lkIG9ubHlcbiAgcHJpdmF0ZSBwcmVpbnN0YWxsVHJhY2tpbmdFbmFibGVkOiBib29sZWFuID0gbnVsbDsgLy8gQW5kcm9pZCBvbmx5XG4gIHByaXZhdGUgYWxsb3dpQWRJbmZvUmVhZGluZzogYm9vbGVhbiA9IG51bGw7IC8vIGlPUyBvbmx5XG4gIHByaXZhdGUgYWxsb3dJZGZhUmVhZGluZzogYm9vbGVhbiA9IG51bGw7IC8vIGlPUyBvbmx5XG4gIHByaXZhdGUgYWxsb3dBZFNlcnZpY2VzSW5mb1JlYWRpbmc6IGJvb2xlYW4gPSBudWxsOyAvLyBpT1Mgb25seVxuXG4gIHByaXZhdGUgYXR0cmlidXRpb25DYWxsYmFjazogKGF0dHJpYnV0aW9uOiBBZGp1c3RBdHRyaWJ1dGlvbikgPT4gdm9pZCA9IG51bGw7XG4gIHByaXZhdGUgZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrOiAoZXZlbnQ6IEFkanVzdEV2ZW50U3VjY2VzcykgPT4gdm9pZCA9IG51bGw7XG4gIHByaXZhdGUgZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrOiAoZXZlbnQ6IEFkanVzdEV2ZW50RmFpbHVyZSkgPT4gdm9pZCA9IG51bGw7XG4gIHByaXZhdGUgc2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s6IChzZXNzaW9uOiBBZGp1c3RTZXNzaW9uU3VjY2VzcykgPT4gdm9pZCA9IG51bGw7XG4gIHByaXZhdGUgc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2s6IChzZXNzaW9uOiBBZGp1c3RTZXNzaW9uRmFpbHVyZSkgPT4gdm9pZCA9IG51bGw7XG4gIHByaXZhdGUgZGVmZXJyZWREZWVwbGlua0NhbGxiYWNrOiAodXJpOiBzdHJpbmcpID0+IHZvaWQgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGFwcFRva2VuOiBzdHJpbmcsIGVudmlyb25tZW50OiBBZGp1c3RFbnZpcm9ubWVudCkge1xuICAgIHRoaXMuYXBwVG9rZW4gPSBhcHBUb2tlbjtcbiAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gIH1cblxuICBzZXRBcHBTZWNyZXQoc2VjcmV0SWQ6IG51bWJlciwgaW5mbzE6IG51bWJlciwgaW5mbzI6IG51bWJlciwgaW5mbzM6IG51bWJlciwgaW5mbzQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2VjcmV0SWQgPSBzZWNyZXRJZDtcbiAgICB0aGlzLmluZm8xID0gaW5mbzE7XG4gICAgdGhpcy5pbmZvMiA9IGluZm8yO1xuICAgIHRoaXMuaW5mbzMgPSBpbmZvMztcbiAgICB0aGlzLmluZm80ID0gaW5mbzQ7XG4gIH1cblxuICBzZXREZWxheVN0YXJ0KGRlbGF5U3RhcnQ6IG51bWJlcikge1xuICAgIHRoaXMuZGVsYXlTdGFydCA9IGRlbGF5U3RhcnQ7XG4gIH1cblxuICBzZXRMb2dMZXZlbChsb2dMZXZlbDogQWRqdXN0TG9nTGV2ZWwpIHtcbiAgICB0aGlzLmxvZ0xldmVsID0gbG9nTGV2ZWw7XG4gIH1cblxuICBzZXREZWZhdWx0VHJhY2tlcihkZWZhdWx0VHJhY2tlcjogc3RyaW5nKSB7XG4gICAgdGhpcy5kZWZhdWx0VHJhY2tlciA9IGRlZmF1bHRUcmFja2VyO1xuICB9XG5cbiAgc2V0RXh0ZXJuYWxEZXZpY2VJZChleHRlcm5hbERldmljZUlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmV4dGVybmFsRGV2aWNlSWQgPSBleHRlcm5hbERldmljZUlkO1xuICB9XG5cbiAgc2V0VXJsU3RyYXRlZ3kodXJsU3RyYXRlZ3k6IEFkanVzdFVybFN0cmF0ZWd5KSB7XG4gICAgdGhpcy51cmxTdHJhdGVneSA9IHVybFN0cmF0ZWd5O1xuICB9XG5cbiAgc2V0U2VuZEluQmFja2dyb3VuZChzZW5kSW5CYWNrZ3JvdW5kOiBib29sZWFuKSB7XG4gICAgdGhpcy5zZW5kSW5CYWNrZ3JvdW5kID0gc2VuZEluQmFja2dyb3VuZDtcbiAgfVxuXG4gIHNldFNob3VsZExhdW5jaERlZXBsaW5rKHNob3VsZExhdW5jaERlZXBsaW5rOiBib29sZWFuKSB7XG4gICAgdGhpcy5zaG91bGRMYXVuY2hEZWVwbGluayA9IHNob3VsZExhdW5jaERlZXBsaW5rO1xuICB9XG5cbiAgc2V0RXZlbnRCdWZmZXJpbmdFbmFibGVkKGV2ZW50QnVmZmVyaW5nRW5hYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZXZlbnRCdWZmZXJpbmdFbmFibGVkID0gZXZlbnRCdWZmZXJpbmdFbmFibGVkO1xuICB9XG5cbiAgc2V0VXNlckFnZW50KHVzZXJBZ2VudDogc3RyaW5nKSB7XG4gICAgdGhpcy51c2VyQWdlbnQgPSB1c2VyQWdlbnQ7XG4gIH1cblxuICBzZXREZXZpY2VLbm93bihpc0RldmljZUtub3duOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc0RldmljZUtub3duID0gaXNEZXZpY2VLbm93bjtcbiAgfVxuXG4gIHNldE5lZWRzQ29zdChuZWVkc0Nvc3Q6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm5lZWRzQ29zdCA9IG5lZWRzQ29zdDtcbiAgfVxuXG4gIHNldFByb2Nlc3NOYW1lKHByb2Nlc3NOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByb2Nlc3NOYW1lID0gcHJvY2Vzc05hbWU7XG4gIH1cblxuICBzZXRQcmVpbnN0YWxsVHJhY2tpbmdFbmFibGVkKHByZWluc3RhbGxUcmFja2luZ0VuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnByZWluc3RhbGxUcmFja2luZ0VuYWJsZWQgPSBwcmVpbnN0YWxsVHJhY2tpbmdFbmFibGVkO1xuICB9XG5cbiAgc2V0QWxsb3dpQWRJbmZvUmVhZGluZyhhbGxvd2lBZEluZm9SZWFkaW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy5hbGxvd2lBZEluZm9SZWFkaW5nID0gYWxsb3dpQWRJbmZvUmVhZGluZztcbiAgfVxuXG4gIHNldEFsbG93SWRmYVJlYWRpbmcoYWxsb3dJZGZhUmVhZGluZzogYm9vbGVhbikge1xuICAgIHRoaXMuYWxsb3dJZGZhUmVhZGluZyA9IGFsbG93SWRmYVJlYWRpbmc7XG4gIH1cblxuICBzZXRBbGxvd0FkU2VydmljZXNJbmZvUmVhZGluZyhhbGxvd0FkU2VydmljZXNJbmZvUmVhZGluZzogYm9vbGVhbikge1xuICAgIHRoaXMuYWxsb3dBZFNlcnZpY2VzSW5mb1JlYWRpbmcgPSBhbGxvd0FkU2VydmljZXNJbmZvUmVhZGluZztcbiAgfVxuXG4gIHNldEF0dHJpYnV0aW9uQ2FsbGJhY2tMaXN0ZW5lcihhdHRyaWJ1dGlvbkNhbGxiYWNrOiAoYXR0cmlidXRpb246IEFkanVzdEF0dHJpYnV0aW9uKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5hdHRyaWJ1dGlvbkNhbGxiYWNrID0gYXR0cmlidXRpb25DYWxsYmFjaztcbiAgfVxuXG4gIHNldEV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFja0xpc3RlbmVyKGV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjazogKGV2ZW50OiBBZGp1c3RFdmVudFN1Y2Nlc3MpID0+IHZvaWQpIHtcbiAgICB0aGlzLmV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjayA9IGV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaztcbiAgfVxuXG4gIHNldEV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFja0xpc3RlbmVyKGV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjazogKGV2ZW50OiBBZGp1c3RFdmVudEZhaWx1cmUpID0+IHZvaWQpIHtcbiAgICB0aGlzLmV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjayA9IGV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjaztcbiAgfVxuXG4gIHNldFNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrTGlzdGVuZXIoXG4gICAgc2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s6IChzZXNzaW9uOiBBZGp1c3RTZXNzaW9uU3VjY2VzcykgPT4gdm9pZFxuICApIHtcbiAgICB0aGlzLnNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrID0gc2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s7XG4gIH1cblxuICBzZXRTZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFja0xpc3RlbmVyKHNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrOiAoc2Vzc2lvbjogQWRqdXN0U2Vzc2lvbkZhaWx1cmUpID0+IHZvaWQpIHtcbiAgICB0aGlzLnNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrID0gc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2s7XG4gIH1cblxuICBzZXREZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2tMaXN0ZW5lcihkZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2s6ICh1cmk6IHN0cmluZykgPT4gdm9pZCkge1xuICAgIHRoaXMuZGVmZXJyZWREZWVwbGlua0NhbGxiYWNrID0gZGVmZXJyZWREZWVwbGlua0NhbGxiYWNrO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBdHRyaWJ1dGlvbkNhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0aW9uQ2FsbGJhY2s7XG4gIH1cblxuICBwcml2YXRlIGdldEV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s7XG4gIH1cblxuICBwcml2YXRlIGdldEV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2s7XG4gIH1cblxuICBwcml2YXRlIGdldFNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLnNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmZXJyZWREZWVwbGlua0NhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmVycmVkRGVlcGxpbmtDYWxsYmFjaztcbiAgfVxuXG4gIHByaXZhdGUgaGFzQXR0cmlidXRpb25MaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGlvbkNhbGxiYWNrICE9PSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNFdmVudFRyYWNraW5nU3VjY2VlZGVkTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrICE9PSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNFdmVudFRyYWNraW5nRmFpbGVkTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrICE9PSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNTZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjayAhPT0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaGFzU2Vzc2lvblRyYWNraW5nRmFpbGVkTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2sgIT09IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGhhc0RlZmVycmVkRGVlcGxpbmtDYWxsYmFja0xpc3RlbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmVycmVkRGVlcGxpbmtDYWxsYmFjayAhPT0gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRqdXN0QXBwU3RvcmVTdWJzY3JpcHRpb24ge1xuICBwcml2YXRlIHByaWNlOiBzdHJpbmc7XG4gIHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcbiAgcHJpdmF0ZSB0cmFuc2FjdGlvbklkOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVjZWlwdDogc3RyaW5nO1xuICBwcml2YXRlIHRyYW5zYWN0aW9uRGF0ZTogc3RyaW5nO1xuICBwcml2YXRlIHNhbGVzUmVnaW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgY2FsbGJhY2tQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIHBhcnRuZXJQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaWNlOiBzdHJpbmcsIGN1cnJlbmN5OiBzdHJpbmcsIHRyYW5zYWN0aW9uSWQ6IHN0cmluZywgcmVjZWlwdDogc3RyaW5nKSB7XG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcbiAgICB0aGlzLnRyYW5zYWN0aW9uSWQgPSB0cmFuc2FjdGlvbklkO1xuICAgIHRoaXMucmVjZWlwdCA9IHJlY2VpcHQ7XG4gIH1cblxuICBzZXRUcmFuc2FjdGlvbkRhdGUodHJhbnNhY3Rpb25EYXRlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnRyYW5zYWN0aW9uRGF0ZSA9IHRyYW5zYWN0aW9uRGF0ZTtcbiAgfVxuXG4gIHNldFNhbGVzUmVnaW9uKHNhbGVzUmVnaW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNhbGVzUmVnaW9uID0gc2FsZXNSZWdpb247XG4gIH1cblxuICBhZGRDYWxsYmFja1BhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2goa2V5KTtcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIGFkZFBhcnRuZXJQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2goa2V5KTtcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGp1c3RQbGF5U3RvcmVTdWJzY3JpcHRpb24ge1xuICBwcml2YXRlIHByaWNlOiBzdHJpbmc7XG4gIHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcbiAgcHJpdmF0ZSBza3U6IHN0cmluZztcbiAgcHJpdmF0ZSBvcmRlcklkOiBzdHJpbmc7XG4gIHByaXZhdGUgc2lnbmF0dXJlOiBzdHJpbmc7XG4gIHByaXZhdGUgcHVyY2hhc2VUb2tlbjogc3RyaW5nO1xuICBwcml2YXRlIHB1cmNoYXNlVGltZTogc3RyaW5nO1xuICBwcml2YXRlIGNhbGxiYWNrUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBwYXJ0bmVyUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihwcmljZTogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nLCBza3U6IHN0cmluZywgb3JkZXJJZDogc3RyaW5nLCBzaWduYXR1cmU6IHN0cmluZywgcHVyY2hhc2VUb2tlbjogc3RyaW5nKSB7XG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcbiAgICB0aGlzLnNrdSA9IHNrdTtcbiAgICB0aGlzLm9yZGVySWQgPSBvcmRlcklkO1xuICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICAgIHRoaXMucHVyY2hhc2VUb2tlbiA9IHB1cmNoYXNlVG9rZW47XG4gIH1cblxuICBzZXRQdXJjaGFzZVRpbWUocHVyY2hhc2VUaW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnB1cmNoYXNlVGltZSA9IHB1cmNoYXNlVGltZTtcbiAgfVxuXG4gIGFkZENhbGxiYWNrUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jYWxsYmFja1BhcmFtZXRlcnMucHVzaChrZXkpO1xuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xuICB9XG5cbiAgYWRkUGFydG5lclBhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaChrZXkpO1xuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaCh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkanVzdFRoaXJkUGFydHlTaGFyaW5nIHtcbiAgcHJpdmF0ZSBpc0VuYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgZ3JhbnVsYXJPcHRpb25zOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGlzRW5hYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuaXNFbmFibGVkID0gaXNFbmFibGVkO1xuICB9XG5cbiAgYWRkR3JhbnVsYXJPcHRpb24ocGFydG5lck5hbWU6IHN0cmluZywga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmdyYW51bGFyT3B0aW9ucy5wdXNoKHBhcnRuZXJOYW1lKTtcbiAgICB0aGlzLmdyYW51bGFyT3B0aW9ucy5wdXNoKGtleSk7XG4gICAgdGhpcy5ncmFudWxhck9wdGlvbnMucHVzaCh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RBdHRyaWJ1dGlvbiB7XG4gIHRyYWNrZXJUb2tlbjogc3RyaW5nO1xuICB0cmFja2VyTmFtZTogc3RyaW5nO1xuICBuZXR3b3JrOiBzdHJpbmc7XG4gIGNhbXBhaWduOiBzdHJpbmc7XG4gIGFkZ3JvdXA6IHN0cmluZztcbiAgY3JlYXRpdmU6IHN0cmluZztcbiAgY2xpY2tMYWJlbDogc3RyaW5nO1xuICBhZGlkOiBzdHJpbmc7XG4gIGNvc3RUeXBlOiBzdHJpbmc7XG4gIGNvc3RBbW91bnQ6IHN0cmluZztcbiAgY29zdEN1cnJlbmN5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRqdXN0U2Vzc2lvblN1Y2Nlc3Mge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICBhZGlkOiBzdHJpbmc7XG4gIGpzb25SZXNwb25zZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkanVzdFNlc3Npb25GYWlsdXJlIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICB0aW1lc3RhbXA6IHN0cmluZztcbiAgYWRpZDogc3RyaW5nO1xuICB3aWxsUmV0cnk6IGJvb2xlYW47XG4gIGpzb25SZXNwb25zZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkanVzdEV2ZW50U3VjY2VzcyB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdGltZXN0YW1wOiBzdHJpbmc7XG4gIGFkaWQ6IHN0cmluZztcbiAgZXZlbnRUb2tlbjogc3RyaW5nO1xuICBjYWxsYmFja0lkOiBzdHJpbmc7XG4gIGpzb25SZXNwb25zZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkanVzdEV2ZW50RmFpbHVyZSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdGltZXN0YW1wOiBzdHJpbmc7XG4gIGFkaWQ6IHN0cmluZztcbiAgZXZlbnRUb2tlbjogc3RyaW5nO1xuICB3aWxsUmV0cnk6IGJvb2xlYW47XG4gIGNhbGxiYWNrSWQ6IHN0cmluZztcbiAganNvblJlc3BvbnNlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIEFkanVzdEVudmlyb25tZW50IHtcbiAgU2FuZGJveCA9ICdzYW5kYm94JyxcbiAgUHJvZHVjdGlvbiA9ICdwcm9kdWN0aW9uJyxcbn1cblxuZXhwb3J0IGVudW0gQWRqdXN0TG9nTGV2ZWwge1xuICBWZXJib3NlID0gJ1ZFUkJPU0UnLFxuICBEZWJ1ZyA9ICdERUJVRycsXG4gIEluZm8gPSAnSU5GTycsXG4gIFdhcm4gPSAnV0FSTicsXG4gIEVycm9yID0gJ0VSUk9SJyxcbiAgQXNzZXJ0ID0gJ0FTU0VSVCcsXG4gIFN1cHByZXNzID0gJ1NVUFBSRVNTJyxcbn1cblxuZXhwb3J0IGVudW0gQWRqdXN0VXJsU3RyYXRlZ3kge1xuICBJbmRpYSA9ICdJbmRpYScsXG4gIENoaW5hID0gJ0NoaW5hJyxcbn1cblxuZXhwb3J0IGVudW0gQWRqdXN0QWRSZXZlbnVlU291cmNlIHtcbiAgQWRSZXZlbnVlU291cmNlTW9wdWIgPSAnbW9wdWInLFxuICBBZFJldmVudWVTb3VyY2VBZG1vYiA9ICdhZG1vYicsXG4gIEFkUmV2ZW51ZVNvdXJjZUZiTmF0aXZlQWQgPSAnZmFjZWJvb2tfbmF0aXZlX2FkJyxcbiAgQWRSZXZlbnVlU291cmNlRmJBdWRpZW5jZU5ldHdvcmsgPSAnZmFjZWJvb2tfYXVkaWVuY2VfbmV0d29yaycsXG4gIEFkUmV2ZW51ZVNvdXJjZUlyb25zb3VyY2UgPSAnaXJvbnNvdXJjZScsXG4gIEFkUmV2ZW51ZVNvdXJjZUZ5YmVyID0gJ2Z5YmVyJyxcbiAgQWRSZXZlbnVlU291cmNlQWVyc2VydiA9ICdhZXJzZXJ2JyxcbiAgQWRSZXZlbnVlU291cmNlQXBwb2RlYWwgPSAnYXBwb2RlYWwnLFxuICBBZFJldmVudWVTb3VyY2VBZGluY3ViZSA9ICdhZGluY3ViZScsXG4gIEFkUmV2ZW51ZVNvdXJjZUZ1c2VQb3dlcmVkID0gJ2Z1c2Vwb3dlcmVkJyxcbiAgQWRSZXZlbnVlU291cmNlQWRkYXBwdHIgPSAnYWRkYXBwdHInLFxuICBBZFJldmVudWVTb3VyY2VNaWxsZW5uaWFsTWVkaWF0aW9uID0gJ21pbGxlbm5pYWxfbWVkaWF0aW9uJyxcbiAgQWRSZXZlbnVlU291cmNlRmx1cnJ5ID0gJ2ZsdXJyeScsXG4gIEFkUmV2ZW51ZVNvdXJjZUFkbW9zdCA9ICdhZG1vc3QnLFxuICBBZFJldmVudWVTb3VyY2VEZWx0YWRuYSA9ICdkZWx0YWRuYScsXG4gIEFkUmV2ZW51ZVNvdXJjZVVwc2lnaHQgPSAndXBzaWdodCcsXG4gIEFkUmV2ZW51ZVNvdXJjZVVuaXR5QWRzID0gJ3VuaXR5YWRzJyxcbiAgQWRSZXZlbnVlU291cmNlQWR0b2FwcCA9ICdhZHRvYXBwJyxcbiAgQWRSZXZlbnVlU291cmNlVGFwZGFxID0gJ3RhcGRhcScsXG59XG5cbi8qKlxuICogQG5hbWUgQWRqdXN0XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgaXMgdGhlIElvbmljIENvcmRvdmEgU0RLIG9mIEFkanVzdOKEoi4gWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgQWRqdXN04oSiIGF0IGFkanVzdC5jb20uXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb20uYWRqdXN0LnNka2AuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtBZGp1c3QgQ29yZG92YSBTREtdKGh0dHBzOi8vZ2l0aHViLmNvbS9hZGp1c3QvY29yZG92YV9zZGspXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAgaW1wb3J0IHsgQWRqdXN0LCBBZGp1c3RDb25maWcsIEFkanVzdEVudmlyb25tZW50IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hZGp1c3QnO1xuICpcbiAqICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFkanVzdDogQWRqdXN0KSB7IH1cbiAqXG4gKiAgLi4uXG4gKlxuICogIGNvbnN0IGNvbmZpZyA9IG5ldyBBZGp1c3RDb25maWcoJ0FQUC1UT0tFTi1IRVJFJywgQWRqdXN0RW52aXJvbm1lbnQuU2FuZGJveCk7XG4gKiAgY29uZmlnLmxvZ0xldmVsID0gQWRqdXN0TG9nTGV2ZWwuVmVyYm9zZTtcbiAqICAvLyBTZXQgb3RoZXIgY29uZmlnIHByb3BlcnRpZXMuXG4gKiAgYWRqdXN0LmNyZWF0ZShjb25maWcpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEFkanVzdEF0dHJpYnV0aW9uXG4gKiBBZGp1c3RTZXNzaW9uU3VjY2Vzc1xuICogQWRqdXN0U2Vzc2lvbkZhaWx1cmVcbiAqIEFkanVzdEV2ZW50U3VjY2Vzc1xuICogQWRqdXN0RXZlbnRGYWlsdXJlXG4gKiBAY2xhc3Nlc1xuICogQWRqdXN0RXZlbnRcbiAqIEFkanVzdENvbmZpZ1xuICogQWRqdXN0QXBwU3RvcmVTdWJzY3JpcHRpb25cbiAqIEFkanVzdFBsYXlTdG9yZVN1YnNjcmlwdGlvblxuICogQWRqdXN0VGhpcmRQYXJ0eVNoYXJpbmdcbiAqIEBlbnVtc1xuICogQWRqdXN0RW52aXJvbm1lbnRcbiAqIEFkanVzdExvZ0xldmVsXG4gKiBBZGp1c3RVcmxTdHJhdGVneVxuICogQWRqdXN0QWRSZXZlbnVlU291cmNlXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQWRqdXN0JyxcbiAgcGx1Z2luOiAnY29tLmFkanVzdC5zZGsnLFxuICBwbHVnaW5SZWY6ICdBZGp1c3QnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FkanVzdC9jb3Jkb3ZhX3NkaycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZGp1c3QgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpbml0aWFsaXplcyBBZGp1c3QgU0RLXG4gICAqIEBwYXJhbSB7QWRqdXN0Q29uaWd9IGNvbmZpZyBBZGp1c3QgY29uZmlnIG9iamVjdCB1c2VkIGFzIHN0YXJ0aW5nIG9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBjcmVhdGUoY29uZmlnOiBBZGp1c3RDb25maWcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBhbiBldmVudFxuICAgKiBAcGFyYW0ge0FkanVzdEV2ZW50fSBldmVudCBBZGp1c3QgZXZlbnQgb2JqZWN0IHRvIGJlIHRyYWNrZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0cmFja0V2ZW50KGV2ZW50OiBBZGp1c3RFdmVudCk6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIEFwcCBTdG9yZSBzdWJzY3JpcHRpb25cbiAgICogQHBhcmFtIHtBZGp1c3RBcHBTdG9yZVN1YnNjcmlwdGlvbn0gc3Vic2NyaXB0aW9uIEFkanVzdCBBcHAgU3RvcmUgc3Vic2NyaXB0aW9uIG9iamVjdCB0byBiZSB0cmFja2VkXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdHJhY2tBcHBTdG9yZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb246IEFkanVzdEFwcFN0b3JlU3Vic2NyaXB0aW9uKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgUGxheSBTdG9yZSBzdWJzY3JpcHRpb25cbiAgICogQHBhcmFtIHtBZGp1c3RQbGF5U3RvcmVTdWJzY3JpcHRpb259IHN1YnNjcmlwdGlvbiBBZGp1c3QgUGxheSBTdG9yZSBzdWJzY3JpcHRpb24gb2JqZWN0IHRvIGJlIHRyYWNrZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0cmFja1BsYXlTdG9yZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb246IEFkanVzdFBsYXlTdG9yZVN1YnNjcmlwdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIHRoaXJkIHBhcnR5IHNoYXJpbmcgY2hvaWNlXG4gICAqIEBwYXJhbSB7QWRqdXN0VGhpcmRQYXJ0eVNoYXJpbmd9IHRoaXJkUGFydHlTaGFyaW5nIEFkanVzdCB0aGlyZCBwYXJ0eSBzaGFyaW5nIG9iamVjdCB0byBiZSB0cmFja2VkXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdHJhY2tUaGlyZFBhcnR5U2hhcmluZyh0aGlyZFBhcnR5U2hhcmluZzogQWRqdXN0VGhpcmRQYXJ0eVNoYXJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBhZCByZXZlbnVlIGRhdGFcbiAgICogQHBhcmFtIHtBZGp1c3RBZFJldmVudWVTb3VyY2V9IHNvdXJjZSBBZCByZXZlbnVlIHNvdXJjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF5bG9hZCBBZCByZXZlbnVlIEpTT04gc3RyaW5nIHBheWxvYWRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0cmFja0FkUmV2ZW51ZShzb3VyY2U6IEFkanVzdEFkUmV2ZW51ZVNvdXJjZSwgcGF5bG9hZDogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgbWVhc3VyZW1lbnQgY29uc2VudCBjaG9pY2VcbiAgICogQHBhcmFtIHtib29sZWFufSBtZWFzdXJlbWVudENvbnNlbnQgc2V0IG1lYXN1cmVtZW50IGNvbnNlbnQgdG8gdHJ1ZSBvciBmYWxzZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHRyYWNrTWVhc3VyZW1lbnRDb25zZW50KG1lYXN1cmVtZW50Q29uc2VudDogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgc2V0cyBvZmZsaW5lIG1vZGUgb24gb3Igb2ZmXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZCBzZXQgdG8gdHJ1ZSBmb3Igb2ZmbGluZSBtb2RlIG9uXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0T2ZmbGluZU1vZGUoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogQnkgbWFraW5nIHRoaXMgY2FsbCwgdGhlIEFkanVzdCBTREsgd2lsbCB0cnkgdG8gZmluZCBpZiB0aGVyZSBpcyBhbnkgbmV3IGF0dHJpYnV0aW9uIGluZm8gaW5zaWRlIG9mIHRoZSBkZWVwIGxpbmsgYW5kIGlmIGFueSwgaXQgd2lsbCBiZSBzZW50IHRvIHRoZSBBZGp1c3QgYmFja2VuZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBVUkwgb2YgdGhlIGRlZXBsaW5rXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYXBwV2lsbE9wZW5VcmwodXJsOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gZGlzYWJsZS9lbmFibGUgdGhlIEFkanVzdCBTREsgZnJvbSB0cmFja2luZyBieSBpbnZva2luZyB0aGlzIG1ldGhvZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWQgc2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgU0RLXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUbyBzZW5kIHVzIHRoZSBwdXNoIG5vdGlmaWNhdGlvbiB0b2tlbiwgYWRkIHRoZSBmb2xsb3dpbmcgY2FsbCB0byBBZGp1c3Qgd2hlbmV2ZXIgeW91IGdldCB5b3VyIHRva2VuIGluIHRoZSBhcHAgb3Igd2hlbiBpdCBnZXRzIHVwZGF0ZWQuXG4gICAqIFB1c2ggdG9rZW5zIGFyZSB1c2VkIGZvciBBdWRpZW5jZSBCdWlsZGVyIGFuZCBjbGllbnQgY2FsbGJhY2tzLCBhbmQgdGhleSBhcmUgcmVxdWlyZWQgZm9yIHRoZSB1cGNvbWluZyB1bmluc3RhbGwgdHJhY2tpbmcgZmVhdHVyZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHB1c2hUb2tlbiBwdXNoIHRva2VuIHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UHVzaFRva2VuKHB1c2hUb2tlbjogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgQWRqdXN0IFNESyBpcyBjdXJyZW50bHkgZW5hYmxlZCBieSBjYWxsaW5nIHRoaXMgZnVuY3Rpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW4gYWNjb3JkYW5jZSB3aXRoIGFydGljbGUgMTcgb2YgdGhlIEVVJ3MgR2VuZXJhbCBEYXRhIFByb3RlY3Rpb24gUmVndWxhdGlvbiAoR0RQUiksIHlvdSBjYW4gbm90aWZ5IEFkanVzdCB3aGVuIGEgdXNlciBoYXMgZXhlcmNpc2VkIHRoZWlyIHJpZ2h0IHRvIGJlIGZvcmdvdHRlbi5cbiAgICogQ2FsbGluZyB0aGUgZm9sbG93aW5nIG1ldGhvZCB3aWxsIGluc3RydWN0IHRoZSBBZGp1c3QgU0RLIHRvIGNvbW11bmljYXRlIHRoZSB1c2VyJ3MgY2hvaWNlIHRvIGJlIGZvcmdvdHRlbiB0byB0aGUgQWRqdXN0IGJhY2tlbmRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZHByRm9yZ2V0TWUoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIG5vdyBub3RpZnkgQWRqdXN0IHdoZW4gYSB1c2VyIGhhcyBleGVyY2lzZWQgdGhlaXIgcmlnaHQgdG8gc3RvcCBzaGFyaW5nIHRoZWlyIGRhdGEgd2l0aCBwYXJ0bmVycyBmb3IgbWFya2V0aW5nIHB1cnBvc2VzLCBidXQgaGFzIGFsbG93ZWQgaXQgdG8gYmUgc2hhcmVkIGZvciBzdGF0aXN0aWNzIHB1cnBvc2VzLlxuICAgKiBDYWxsaW5nIHRoZSBmb2xsb3dpbmcgbWV0aG9kIHdpbGwgaW5zdHJ1Y3QgdGhlIEFkanVzdCBTREsgdG8gY29tbXVuaWNhdGUgdGhlIHVzZXIncyBjaG9pY2UgdG8gZGlzYWJsZSBkYXRhIHNoYXJpbmcgdG8gdGhlIEFkanVzdCBiYWNrZW5kXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZGlzYWJsZVRoaXJkUGFydHlTaGFyaW5nKCk6IHZvaWQge31cblxuICAvKipcbiAgICogRnVuY3Rpb24gdXNlZCB0byBnZXQgR29vZ2xlIEFkSWRcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGdvb2dsZSBBZElkIHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEdvb2dsZUFkSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSWYgeW91IG5lZWQgdG8gb2J0YWluIHRoZSBBbWF6b24gQWR2ZXJ0aXNpbmcgSUQsIHlvdSBjYW4gbWFrZSBhIGNhbGwgdG8gdGhpcyBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGFuYXppYiBhZHYuIElEXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEFtYXpvbkFkSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVG8gb2J0YWluIHRoZSBJREZBLCBjYWxsIHRoaXMgZnVuY3Rpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIElERkEgc3RyaW5nIHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldElkZmEoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRm9yIGV2ZXJ5IGRldmljZSB3aXRoIHlvdXIgYXBwIGluc3RhbGxlZCBvbiBpdCwgdGhlIEFkanVzdCBiYWNrZW5kIGdlbmVyYXRlcyBhIHVuaXF1ZSBBZGp1c3QgZGV2aWNlIGlkZW50aWZpZXIgKGFkaWQpLlxuICAgKiBJbiBvcmRlciB0byBvYnRhaW4gdGhpcyBpZGVudGlmaWVyLCBjYWxsIHRoaXMgZnVuY3Rpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGFkaWQgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWRpZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB5b3Ugd2FudCB0byBhY2Nlc3MgaW5mb3JtYXRpb24gYWJvdXQgYSB1c2VyJ3MgY3VycmVudCBhdHRyaWJ1dGlvbiB3aGVuZXZlciB5b3UgbmVlZCBpdCwgeW91IGNhbiBtYWtlIGEgY2FsbCB0byB0aGlzIGZ1bmN0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8QWRqdXN0QXR0cmlidXRpb24+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIEFkanVzdEF0dHJpYnV0aW9uIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBdHRyaWJ1dGlvbigpOiBQcm9taXNlPEFkanVzdEF0dHJpYnV0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdmVyc2lvbiBvZiB0aGUgU0RLIHVzZWRcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHNkayB2ZXJzaW9uIGluZm9ybWF0aW9uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFNka1ZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHVzZWQgdG8gYWRkIHNlc3Npb24gY2FsbGJhY2sgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0ga2V5IGtleVxuICAgKiBAcGFyYW0gdmFsdWUgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBhZGRTZXNzaW9uQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHNwZWNpZmljIHNlc3Npb24gY2FsbGJhY2sgcGFyYW1ldGVyIGJ5IHBhc3NpbmcgdGhlIGRlc2lyaW5nIGtleSB0byB0aGlzIG1ldGhvZFxuICAgKiBAcGFyYW0ga2V5IGtleVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlbW92ZVNlc3Npb25DYWxsYmFja1BhcmFtZXRlcihrZXk6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogSWYgYWxsIGtleXMgYW5kIHZhbHVlcyBmcm9tIHRoZSBzZXNzaW9uIGNhbGxiYWNrIHBhcmFtZXRlcnMgaGF2ZSB0byBiZSByZW1vdmVkLCBjYWxsIHRoaXMgbWV0aG9kXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVzZXRTZXNzaW9uQ2FsbGJhY2tQYXJhbWV0ZXJzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogTWV0aG9kIHVzZWQgdG8gYWRkIHNlc3Npb24gcGFydG5lciBwYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSBrZXkga2V5XG4gICAqIEBwYXJhbSB2YWx1ZSB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGFkZFNlc3Npb25QYXJ0bmVyUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBzcGVjaWZpYyBzZXNzaW9uIHBhcnRuZXIgcGFyYW1ldGVyIGJ5IHBhc3NpbmcgdGhlIGRlc2lyaW5nIGtleSB0byB0aGlzIG1ldGhvZFxuICAgKiBAcGFyYW0ga2V5IGtleVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlbW92ZVNlc3Npb25QYXJ0bmVyUGFyYW1ldGVyKGtleTogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBJZiBhbGwga2V5cyBhbmQgdmFsdWVzIGZyb20gdGhlIHNlc3Npb24gcGFydG5lciBwYXJhbWV0ZXJzIGhhdmUgdG8gYmUgcmVtb3ZlZCwgY2FsbCB0aGlzIG1ldGhvZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlc2V0U2Vzc2lvblBhcnRuZXJQYXJhbWV0ZXJzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgY2FsbCB3aWxsIG1ha2UgdGhlIEFkanVzdCBTREsgc2VuZCB0aGUgaW5pdGlhbCBpbnN0YWxsIHNlc3Npb24gYW5kIGFueSBldmVudHMgY3JlYXRlZCwgaWYgdGhleSB3ZXJlIG5vdCBzZW50IGFmdGVyIGRlbGF5IHN0YXJ0IHdhcyBzZXQgYW5kIGl0J3MgZGVsYXkgZXhwaXJlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZW5kRmlyc3RQYWNrYWdlcygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgQWRqdXN0IFNESyB0byBzaG93IHBvcCB1cCBkaWFsb2cgZm9yIGFza2luZyB1c2VyJ3MgY29uc2VudCB0byBiZSB0cmFja2VkLlxuICAgKiBJbiBvcmRlciB0byBkbyB0aGlzLCBjYWxsIHRoaXMgZnVuY3Rpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxudW1iZXI+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHVzZXIncyBjb25zZW50IHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RUcmFja2luZ0F1dGhvcml6YXRpb25XaXRoQ29tcGxldGlvbkhhbmRsZXIoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogWW91IGNhbiB1cGRhdGUgU0tBZE5ldHdvcmsgY29udmVyc2lvbiB2YWx1ZSB3aXRoIGNhbGxpbmcgdGhpcyBtZXRob2RcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnZlcnNpb25WYWx1ZSBjb252ZXJzaW9uIHZhbHVlIGZvciB0aGUgdXNlclxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHVwZGF0ZUNvbnZlcnNpb25WYWx1ZShjb252ZXJzaW9uVmFsdWU6IG51bWJlcik6IHZvaWQge31cblxuICAvKipcbiAgICogVG8gb2J0YWluIHRoZSBhcHAgdHJhY2tpbmcgYXV0aG9yaXphdGlvbiBzdGF0dXMgaW4gaU9TLCBjYWxsIHRoaXMgZnVuY3Rpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxudW1iZXI+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGFwcCB0cmFja2luZyBhdXRob3JpemF0aW9uIHN0YXR1c1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBcHBUcmFja2luZ0F1dGhvcml6YXRpb25TdGF0dXMoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==