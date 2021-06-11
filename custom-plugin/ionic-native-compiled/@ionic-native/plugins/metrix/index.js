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
var MetrixConfig = /** @class */ (function () {
    function MetrixConfig(appId) {
        this.secretId = null;
        this.info1 = null;
        this.info2 = null;
        this.info3 = null;
        this.info4 = null;
        this.defaultTrackerToken = null;
        this.shouldLaunchDeeplink = false;
        this.firebaseAppId = null;
        this.firebaseProjectId = null;
        this.firebaseApiKey = null;
        this.isLocationListeningEnable = false;
        this.eventUploadThreshold = null;
        this.eventUploadMaxBatchSize = null;
        this.eventMaxCount = null;
        this.eventUploadPeriodMillis = null;
        this.sessionTimeoutMillis = null;
        this.store = null;
        this.userIdListener = null;
        this.sessionIdListener = null;
        this.attributionChangeListener = null;
        this.deeplinkResponseListener = null;
        this.appId = appId;
    }
    MetrixConfig.prototype.setDefaultTracker = function (defaultTrackerToken) {
        this.defaultTrackerToken = defaultTrackerToken;
    };
    MetrixConfig.prototype.setFirebaseId = function (firebaseAppId, firebaseProjectId, firebaseApiKey) {
        this.firebaseAppId = firebaseAppId;
        this.firebaseProjectId = firebaseProjectId;
        this.firebaseApiKey = firebaseApiKey;
    };
    MetrixConfig.prototype.setAppSecret = function (secretId, info1, info2, info3, info4) {
        this.secretId = secretId;
        this.info1 = info1;
        this.info2 = info2;
        this.info3 = info3;
        this.info4 = info4;
    };
    MetrixConfig.prototype.setShouldLaunchDeeplink = function (shouldLaunchDeeplink) {
        this.shouldLaunchDeeplink = shouldLaunchDeeplink;
    };
    MetrixConfig.prototype.setOnAttributionChangeListener = function (attributionChangeListener) {
        this.attributionChangeListener = attributionChangeListener;
    };
    MetrixConfig.prototype.setOnDeeplinkResponseListener = function (deeplinkResponseListener) {
        this.deeplinkResponseListener = deeplinkResponseListener;
    };
    MetrixConfig.prototype.setOnReceiveUserIdListener = function (userIdListener) {
        this.userIdListener = userIdListener;
    };
    MetrixConfig.prototype.setOnSessionIdListener = function (sessionIdListener) {
        this.sessionIdListener = sessionIdListener;
    };
    MetrixConfig.prototype.setLocationListening = function (isLocationListeningEnable) {
        this.isLocationListeningEnable = isLocationListeningEnable;
    };
    MetrixConfig.prototype.setEventUploadThreshold = function (threshold) {
        this.eventUploadThreshold = threshold;
    };
    MetrixConfig.prototype.setEventUploadMaxBatchSize = function (size) {
        this.eventUploadMaxBatchSize = size;
    };
    MetrixConfig.prototype.setEventMaxCount = function (count) {
        this.eventMaxCount = count;
    };
    MetrixConfig.prototype.setEventUploadPeriodMillis = function (period) {
        this.eventUploadPeriodMillis = period;
    };
    MetrixConfig.prototype.setSessionTimeoutMillis = function (timeout) {
        this.sessionTimeoutMillis = timeout;
    };
    MetrixConfig.prototype.setStore = function (store) {
        this.store = store;
    };
    MetrixConfig.prototype.getAttributionChangeListener = function () {
        return this.attributionChangeListener;
    };
    MetrixConfig.prototype.getDeeplinkResponseListener = function () {
        return this.deeplinkResponseListener;
    };
    MetrixConfig.prototype.getOnReceiveUserIdListener = function () {
        return this.userIdListener;
    };
    MetrixConfig.prototype.getOnSessionIdListener = function () {
        return this.sessionIdListener;
    };
    MetrixConfig.prototype.hasAttributionChangeListener = function () {
        return this.attributionChangeListener !== null;
    };
    MetrixConfig.prototype.hasDeeplinkResponseListener = function () {
        return this.deeplinkResponseListener !== null;
    };
    MetrixConfig.prototype.hasUserIdListener = function () {
        return this.userIdListener !== null;
    };
    MetrixConfig.prototype.hasSessionIdListener = function () {
        return this.sessionIdListener !== null;
    };
    return MetrixConfig;
}());
export { MetrixConfig };
export var MetrixAttributionStatus;
(function (MetrixAttributionStatus) {
    MetrixAttributionStatus["Attributed"] = "ATTRIBUTED";
    MetrixAttributionStatus["NotAttributedYet"] = "NOT_ATTRIBUTED_YET";
    MetrixAttributionStatus["AttributionNotNeeded"] = "ATTRIBUTION_NOT_NEEDED";
    MetrixAttributionStatus["Unknown"] = "UNKNOWN";
})(MetrixAttributionStatus || (MetrixAttributionStatus = {}));
var MetrixOriginal = /** @class */ (function (_super) {
    __extends(MetrixOriginal, _super);
    function MetrixOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MetrixOriginal.prototype.create = function (config) { return cordova(this, "create", { "sync": true }, arguments); };
    MetrixOriginal.prototype.getSessionNum = function () { return cordova(this, "getSessionNum", {}, arguments); };
    MetrixOriginal.prototype.newEvent = function (slug, attributes) { return cordova(this, "newEvent", { "sync": true }, arguments); };
    MetrixOriginal.prototype.addUserAttributes = function (attributes) { return cordova(this, "addUserAttributes", { "sync": true }, arguments); };
    MetrixOriginal.prototype.newRevenue = function (slug, amount, currency, orderId) { return cordova(this, "newRevenue", { "sync": true }, arguments); };
    MetrixOriginal.prototype.appWillOpenUrl = function (url) { return cordova(this, "appWillOpenUrl", { "sync": true }, arguments); };
    MetrixOriginal.pluginName = "Metrix";
    MetrixOriginal.plugin = "ir.metrix.sdk";
    MetrixOriginal.pluginRef = "Metrix";
    MetrixOriginal.repo = "https://github.com/metrixorg/MetrixSDK-CordovaPlugin";
    MetrixOriginal.platforms = ["Android"];
    return MetrixOriginal;
}(IonicNativePlugin));
var Metrix = new MetrixOriginal();
export { Metrix };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21ldHJpeC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUEyQnRFLHNCQUFZLEtBQWE7UUF2QmpCLGFBQVEsR0FBVyxJQUFJLENBQUM7UUFDeEIsVUFBSyxHQUFXLElBQUksQ0FBQztRQUNyQixVQUFLLEdBQVcsSUFBSSxDQUFDO1FBQ3JCLFVBQUssR0FBVyxJQUFJLENBQUM7UUFDckIsVUFBSyxHQUFXLElBQUksQ0FBQztRQUNyQix3QkFBbUIsR0FBVyxJQUFJLENBQUM7UUFDbkMseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBQzdCLHNCQUFpQixHQUFXLElBQUksQ0FBQztRQUNqQyxtQkFBYyxHQUFXLElBQUksQ0FBQztRQUM5Qiw4QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFDbEMseUJBQW9CLEdBQVcsSUFBSSxDQUFDO1FBQ3BDLDRCQUF1QixHQUFXLElBQUksQ0FBQztRQUN2QyxrQkFBYSxHQUFXLElBQUksQ0FBQztRQUM3Qiw0QkFBdUIsR0FBVyxJQUFJLENBQUM7UUFDdkMseUJBQW9CLEdBQVcsSUFBSSxDQUFDO1FBQ3BDLFVBQUssR0FBVyxJQUFJLENBQUM7UUFFckIsbUJBQWMsR0FBNkIsSUFBSSxDQUFDO1FBQ2hELHNCQUFpQixHQUFnQyxJQUFJLENBQUM7UUFDdEQsOEJBQXlCLEdBQTZDLElBQUksQ0FBQztRQUMzRSw2QkFBd0IsR0FBMEIsSUFBSSxDQUFDO1FBRzdELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx3Q0FBaUIsR0FBakIsVUFBa0IsbUJBQTJCO1FBQzNDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztJQUNqRCxDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLGFBQXFCLEVBQUUsaUJBQXlCLEVBQUUsY0FBc0I7UUFDcEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsUUFBZ0IsRUFBRSxLQUFhLEVBQUUsS0FBYSxFQUFFLEtBQWEsRUFBRSxLQUFhO1FBQ3ZGLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCw4Q0FBdUIsR0FBdkIsVUFBd0Isb0JBQTZCO1FBQ25ELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztJQUNuRCxDQUFDO0lBRUQscURBQThCLEdBQTlCLFVBQStCLHlCQUFtRTtRQUNoRyxJQUFJLENBQUMseUJBQXlCLEdBQUcseUJBQXlCLENBQUM7SUFDN0QsQ0FBQztJQUVELG9EQUE2QixHQUE3QixVQUE4Qix3QkFBK0M7UUFDM0UsSUFBSSxDQUFDLHdCQUF3QixHQUFHLHdCQUF3QixDQUFDO0lBQzNELENBQUM7SUFFRCxpREFBMEIsR0FBMUIsVUFBMkIsY0FBd0M7UUFDakUsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDdkMsQ0FBQztJQUVELDZDQUFzQixHQUF0QixVQUF1QixpQkFBOEM7UUFDbkUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0lBQzdDLENBQUM7SUFFRCwyQ0FBb0IsR0FBcEIsVUFBcUIseUJBQWtDO1FBQ3JELElBQUksQ0FBQyx5QkFBeUIsR0FBRyx5QkFBeUIsQ0FBQztJQUM3RCxDQUFDO0lBRUQsOENBQXVCLEdBQXZCLFVBQXdCLFNBQWlCO1FBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUVELGlEQUEwQixHQUExQixVQUEyQixJQUFZO1FBQ3JDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixLQUFhO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxpREFBMEIsR0FBMUIsVUFBMkIsTUFBYztRQUN2QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDO0lBQ3hDLENBQUM7SUFFRCw4Q0FBdUIsR0FBdkIsVUFBd0IsT0FBZTtRQUNyQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsT0FBTyxDQUFDO0lBQ3RDLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRU8sbURBQTRCLEdBQXBDO1FBQ0UsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDeEMsQ0FBQztJQUVPLGtEQUEyQixHQUFuQztRQUNFLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3ZDLENBQUM7SUFFTyxpREFBMEIsR0FBbEM7UUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVPLDZDQUFzQixHQUE5QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFFTyxtREFBNEIsR0FBcEM7UUFDRSxPQUFPLElBQUksQ0FBQyx5QkFBeUIsS0FBSyxJQUFJLENBQUM7SUFDakQsQ0FBQztJQUVPLGtEQUEyQixHQUFuQztRQUNFLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixLQUFLLElBQUksQ0FBQztJQUNoRCxDQUFDO0lBRU8sd0NBQWlCLEdBQXpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBRU8sMkNBQW9CLEdBQTVCO1FBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEtBQUssSUFBSSxDQUFDO0lBQ3pDLENBQUM7dUJBaElIOzs7QUEySUEsTUFBTSxDQUFOLElBQVksdUJBS1g7QUFMRCxXQUFZLHVCQUF1QjtJQUNqQyxvREFBeUIsQ0FBQTtJQUN6QixrRUFBdUMsQ0FBQTtJQUN2QywwRUFBK0MsQ0FBQTtJQUMvQyw4Q0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBTFcsdUJBQXVCLEtBQXZCLHVCQUF1QixRQUtsQzs7SUFxQzJCLDBCQUFpQjs7OztJQU0zQyx1QkFBTSxhQUFDLE1BQW9CO0lBTzNCLDhCQUFhO0lBVWIseUJBQVEsYUFBQyxJQUFZLEVBQUUsVUFBeUM7SUFPaEUsa0NBQWlCLGFBQUMsVUFBd0M7SUFVMUQsMkJBQVUsYUFBQyxJQUFZLEVBQUUsTUFBYyxFQUFFLFFBQWlCLEVBQUUsT0FBZ0I7SUFPNUUsK0JBQWMsYUFBQyxHQUFXOzs7Ozs7aUJBcE81QjtFQXFMNEIsaUJBQWlCO1NBQWhDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1ldHJpeENvbmZpZyB7XG4gIHByaXZhdGUgYXBwSWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBzZWNyZXRJZDogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBpbmZvMTogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBpbmZvMjogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBpbmZvMzogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBpbmZvNDogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBkZWZhdWx0VHJhY2tlclRva2VuOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIHNob3VsZExhdW5jaERlZXBsaW5rID0gZmFsc2U7XG4gIHByaXZhdGUgZmlyZWJhc2VBcHBJZDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBmaXJlYmFzZVByb2plY3RJZDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBmaXJlYmFzZUFwaUtleTogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBpc0xvY2F0aW9uTGlzdGVuaW5nRW5hYmxlID0gZmFsc2U7XG4gIHByaXZhdGUgZXZlbnRVcGxvYWRUaHJlc2hvbGQ6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgZXZlbnRVcGxvYWRNYXhCYXRjaFNpemU6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgZXZlbnRNYXhDb3VudDogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBldmVudFVwbG9hZFBlcmlvZE1pbGxpczogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBzZXNzaW9uVGltZW91dE1pbGxpczogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBzdG9yZTogc3RyaW5nID0gbnVsbDtcblxuICBwcml2YXRlIHVzZXJJZExpc3RlbmVyOiAodXNlcklkOiBzdHJpbmcpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIHNlc3Npb25JZExpc3RlbmVyOiAoc2Vzc2lvbklkOiBzdHJpbmcpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIGF0dHJpYnV0aW9uQ2hhbmdlTGlzdGVuZXI6IChhdHRyaWJ1dGlvbjogTWV0cml4QXR0cmlidXRpb24pID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIGRlZXBsaW5rUmVzcG9uc2VMaXN0ZW5lcjogKHVyaTogc3RyaW5nKSA9PiB2b2lkID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihhcHBJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5hcHBJZCA9IGFwcElkO1xuICB9XG5cbiAgc2V0RGVmYXVsdFRyYWNrZXIoZGVmYXVsdFRyYWNrZXJUb2tlbjogc3RyaW5nKSB7XG4gICAgdGhpcy5kZWZhdWx0VHJhY2tlclRva2VuID0gZGVmYXVsdFRyYWNrZXJUb2tlbjtcbiAgfVxuXG4gIHNldEZpcmViYXNlSWQoZmlyZWJhc2VBcHBJZDogc3RyaW5nLCBmaXJlYmFzZVByb2plY3RJZDogc3RyaW5nLCBmaXJlYmFzZUFwaUtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5maXJlYmFzZUFwcElkID0gZmlyZWJhc2VBcHBJZDtcbiAgICB0aGlzLmZpcmViYXNlUHJvamVjdElkID0gZmlyZWJhc2VQcm9qZWN0SWQ7XG4gICAgdGhpcy5maXJlYmFzZUFwaUtleSA9IGZpcmViYXNlQXBpS2V5O1xuICB9XG5cbiAgc2V0QXBwU2VjcmV0KHNlY3JldElkOiBudW1iZXIsIGluZm8xOiBudW1iZXIsIGluZm8yOiBudW1iZXIsIGluZm8zOiBudW1iZXIsIGluZm80OiBudW1iZXIpIHtcbiAgICB0aGlzLnNlY3JldElkID0gc2VjcmV0SWQ7XG4gICAgdGhpcy5pbmZvMSA9IGluZm8xO1xuICAgIHRoaXMuaW5mbzIgPSBpbmZvMjtcbiAgICB0aGlzLmluZm8zID0gaW5mbzM7XG4gICAgdGhpcy5pbmZvNCA9IGluZm80O1xuICB9XG5cbiAgc2V0U2hvdWxkTGF1bmNoRGVlcGxpbmsoc2hvdWxkTGF1bmNoRGVlcGxpbms6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNob3VsZExhdW5jaERlZXBsaW5rID0gc2hvdWxkTGF1bmNoRGVlcGxpbms7XG4gIH1cblxuICBzZXRPbkF0dHJpYnV0aW9uQ2hhbmdlTGlzdGVuZXIoYXR0cmlidXRpb25DaGFuZ2VMaXN0ZW5lcjogKGF0dHJpYnV0aW9uOiBNZXRyaXhBdHRyaWJ1dGlvbikgPT4gdm9pZCkge1xuICAgIHRoaXMuYXR0cmlidXRpb25DaGFuZ2VMaXN0ZW5lciA9IGF0dHJpYnV0aW9uQ2hhbmdlTGlzdGVuZXI7XG4gIH1cblxuICBzZXRPbkRlZXBsaW5rUmVzcG9uc2VMaXN0ZW5lcihkZWVwbGlua1Jlc3BvbnNlTGlzdGVuZXI6ICh1cmk6IHN0cmluZykgPT4gdm9pZCkge1xuICAgIHRoaXMuZGVlcGxpbmtSZXNwb25zZUxpc3RlbmVyID0gZGVlcGxpbmtSZXNwb25zZUxpc3RlbmVyO1xuICB9XG5cbiAgc2V0T25SZWNlaXZlVXNlcklkTGlzdGVuZXIodXNlcklkTGlzdGVuZXI6ICh1c2VySWQ6IHN0cmluZykgPT4gdm9pZCkge1xuICAgIHRoaXMudXNlcklkTGlzdGVuZXIgPSB1c2VySWRMaXN0ZW5lcjtcbiAgfVxuXG4gIHNldE9uU2Vzc2lvbklkTGlzdGVuZXIoc2Vzc2lvbklkTGlzdGVuZXI6IChzZXNzaW9uSWQ6IHN0cmluZykgPT4gdm9pZCkge1xuICAgIHRoaXMuc2Vzc2lvbklkTGlzdGVuZXIgPSBzZXNzaW9uSWRMaXN0ZW5lcjtcbiAgfVxuXG4gIHNldExvY2F0aW9uTGlzdGVuaW5nKGlzTG9jYXRpb25MaXN0ZW5pbmdFbmFibGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzTG9jYXRpb25MaXN0ZW5pbmdFbmFibGUgPSBpc0xvY2F0aW9uTGlzdGVuaW5nRW5hYmxlO1xuICB9XG5cbiAgc2V0RXZlbnRVcGxvYWRUaHJlc2hvbGQodGhyZXNob2xkOiBudW1iZXIpIHtcbiAgICB0aGlzLmV2ZW50VXBsb2FkVGhyZXNob2xkID0gdGhyZXNob2xkO1xuICB9XG5cbiAgc2V0RXZlbnRVcGxvYWRNYXhCYXRjaFNpemUoc2l6ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5ldmVudFVwbG9hZE1heEJhdGNoU2l6ZSA9IHNpemU7XG4gIH1cblxuICBzZXRFdmVudE1heENvdW50KGNvdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLmV2ZW50TWF4Q291bnQgPSBjb3VudDtcbiAgfVxuXG4gIHNldEV2ZW50VXBsb2FkUGVyaW9kTWlsbGlzKHBlcmlvZDogbnVtYmVyKSB7XG4gICAgdGhpcy5ldmVudFVwbG9hZFBlcmlvZE1pbGxpcyA9IHBlcmlvZDtcbiAgfVxuXG4gIHNldFNlc3Npb25UaW1lb3V0TWlsbGlzKHRpbWVvdXQ6IG51bWJlcikge1xuICAgIHRoaXMuc2Vzc2lvblRpbWVvdXRNaWxsaXMgPSB0aW1lb3V0O1xuICB9XG5cbiAgc2V0U3RvcmUoc3RvcmU6IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QXR0cmlidXRpb25DaGFuZ2VMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGlvbkNoYW5nZUxpc3RlbmVyO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWVwbGlua1Jlc3BvbnNlTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVlcGxpbmtSZXNwb25zZUxpc3RlbmVyO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPblJlY2VpdmVVc2VySWRMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy51c2VySWRMaXN0ZW5lcjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T25TZXNzaW9uSWRMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9uSWRMaXN0ZW5lcjtcbiAgfVxuXG4gIHByaXZhdGUgaGFzQXR0cmlidXRpb25DaGFuZ2VMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGlvbkNoYW5nZUxpc3RlbmVyICE9PSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNEZWVwbGlua1Jlc3BvbnNlTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVlcGxpbmtSZXNwb25zZUxpc3RlbmVyICE9PSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNVc2VySWRMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy51c2VySWRMaXN0ZW5lciAhPT0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaGFzU2Vzc2lvbklkTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvbklkTGlzdGVuZXIgIT09IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXRyaXhBdHRyaWJ1dGlvbiB7XG4gIGFjcXVpc2l0aW9uQWQ6IHN0cmluZztcbiAgYWNxdWlzaXRpb25BZFNldDogc3RyaW5nO1xuICBhY3F1aXNpdGlvbkNhbXBhaWduOiBzdHJpbmc7XG4gIGFjcXVpc2l0aW9uU291cmNlOiBzdHJpbmc7XG4gIGF0dHJpYnV0aW9uU3RhdHVzOiBNZXRyaXhBdHRyaWJ1dGlvblN0YXR1cztcbn1cblxuZXhwb3J0IGVudW0gTWV0cml4QXR0cmlidXRpb25TdGF0dXMge1xuICBBdHRyaWJ1dGVkID0gJ0FUVFJJQlVURUQnLFxuICBOb3RBdHRyaWJ1dGVkWWV0ID0gJ05PVF9BVFRSSUJVVEVEX1lFVCcsXG4gIEF0dHJpYnV0aW9uTm90TmVlZGVkID0gJ0FUVFJJQlVUSU9OX05PVF9ORUVERUQnLFxuICBVbmtub3duID0gJ1VOS05PV04nLFxufVxuXG4vKipcbiAqIEBuYW1lIE1ldHJpeFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIGlzIHRoZSBJb25pYyBDb3Jkb3ZhIFNESyBvZiBNZXRyaXjihKIuIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IE1ldHJpeOKEoiBhdCBtZXRyaXguaXIuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBpci5tZXRyaXguc2RrYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW01ldHJpeCBDb3Jkb3ZhIFNES10oaHR0cHM6Ly9naXRodWIuY29tL21ldHJpeG9yZy9NZXRyaXhTREstQ29yZG92YVBsdWdpbilcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqICBpbXBvcnQgeyBNZXRyaXgsIE1ldHJpeENvbmZpZyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbWV0cml4JztcbiAqXG4gKiAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXRyaXg6IE1ldHJpeCkgeyB9XG4gKlxuICogIC4uLlxuICpcbiAqICBjb25zdCBjb25maWcgPSBuZXcgTWV0cml4Q29uZmlnKCdBUFAtSUQtSEVSRScpO1xuICogIC8vIFNldCBvdGhlciBjb25maWcgcHJvcGVydGllcy5cbiAqICBtZXRyaXguY3JlYXRlKGNvbmZpZyk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogTWV0cml4QXR0cmlidXRpb25cbiAqIEBjbGFzc2VzXG4gKiBNZXRyaXhDb25maWdcbiAqIEBlbnVtc1xuICogTWV0cml4QXR0cmlidXRpb25TdGF0dXNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdNZXRyaXgnLFxuICBwbHVnaW46ICdpci5tZXRyaXguc2RrJyxcbiAgcGx1Z2luUmVmOiAnTWV0cml4JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tZXRyaXhvcmcvTWV0cml4U0RLLUNvcmRvdmFQbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXRyaXggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpbml0aWFsaXplcyBNZXRyaXggU0RLXG4gICAqIEBwYXJhbSB7TWV0cml4Q29uZmlnfSBjb25maWcgTWV0cml4Q29uZmlnIG9iamVjdCB1c2VkIGFzIHN0YXJ0aW5nIG9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBjcmVhdGUoY29uZmlnOiBNZXRyaXhDb25maWcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHVzZWQgdG8gZ2V0IFNlc3Npb24gTnVtYmVyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8bnVtYmVyPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBzZXNzaW9uIG51bWJlciB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRTZXNzaW9uTnVtKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBhbiBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2x1ZyB0aGUgc2x1ZyBvZiB0aGUgZXZlbnQgdG8gYmUgdHJhY2tlZFxuICAgKiBAcGFyYW0ge01hcDxTdHJpbmcsIFN0cmluZz4gfCBvYmplY3R9IGF0dHJpYnV0ZXMgb3B0aW9uYWwgYXR0cmlidXRlcyBvZiB0aGUgZXZlbnQgdG8gYmUgdHJhY2tlZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIG5ld0V2ZW50KHNsdWc6IHN0cmluZywgYXR0cmlidXRlcz86IE1hcDxTdHJpbmcsIFN0cmluZz4gfCBvYmplY3QpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGFkZHMgdGhlIHByb3ZpZGVkIGF0dHJpYnV0ZXMgdG8gYWxsIG1ldHJpeCBldmVudHNcbiAgICogQHBhcmFtIHtNYXA8U3RyaW5nLCBTdHJpbmc+IHwgb2JqZWN0fSBhdHRyaWJ1dGVzIHRoZSBhdHRyaWJ1dGVzIHRvIGJlIGFkZGVkIHRvIGFsbCBmdXR1cmUgZXZlbnRzXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYWRkVXNlckF0dHJpYnV0ZXMoYXR0cmlidXRlczogTWFwPFN0cmluZywgU3RyaW5nPiB8IG9iamVjdCk6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIGEgcmV2ZW51ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2x1ZyB0aGUgc2x1ZyBvZiB0aGUgZXZlbnQgdG8gYmUgdHJhY2tlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gYW1vdW50IHRoZSBhbW91bnQgb2YgbW9uZXkgZ2FpbmVkIGJ5IHRoZSByZXZlbnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJyZW5jeSAoT1BUSU9OQUwpIGN1cnJlbmN5IG9mIHRoZSBhbW91bnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9yZGVySWQgKE9QVElPTkFMKSBpZCBvZiB0aGUgcmV2ZW51ZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIG5ld1JldmVudWUoc2x1Zzogc3RyaW5nLCBhbW91bnQ6IG51bWJlciwgY3VycmVuY3k/OiBudW1iZXIsIG9yZGVySWQ/OiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEJ5IG1ha2luZyB0aGlzIGNhbGwsIHRoZSBNZXRyaXggU0RLIHdpbGwgdHJ5IHRvIGZpbmQgaWYgdGhlcmUgaXMgYW55IG5ldyBhdHRyaWJ1dGlvbiBpbmZvIGluc2lkZSBvZiB0aGUgZGVlcCBsaW5rIGFuZCBpZiBhbnksIGl0IHdpbGwgYmUgc2VudCB0byB0aGUgTWV0cml4IGJhY2tlbmQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVVJMIG9mIHRoZSBkZWVwbGlua1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGFwcFdpbGxPcGVuVXJsKHVybDogc3RyaW5nKTogdm9pZCB7fVxufVxuIl19