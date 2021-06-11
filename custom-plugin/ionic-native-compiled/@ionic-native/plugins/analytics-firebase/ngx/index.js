import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var AnalyticsFirebase = /** @class */ (function (_super) {
    __extends(AnalyticsFirebase, _super);
    function AnalyticsFirebase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnalyticsFirebase.prototype.logEvent = function (eventName, eventParams) { return cordova(this, "logEvent", {}, arguments); };
    AnalyticsFirebase.prototype.resetAnalyticsData = function () { return cordova(this, "resetAnalyticsData", {}, arguments); };
    AnalyticsFirebase.prototype.setAnalyticsCollectionEnabled = function (enabled) { return cordova(this, "setAnalyticsCollectionEnabled", {}, arguments); };
    AnalyticsFirebase.prototype.setCurrentScreen = function (screenName) { return cordova(this, "setCurrentScreen", {}, arguments); };
    AnalyticsFirebase.prototype.setMinimumSessionDuration = function (milliseconds) { return cordova(this, "setMinimumSessionDuration", {}, arguments); };
    AnalyticsFirebase.prototype.setSessionTimeoutDuration = function (milliseconds) { return cordova(this, "setSessionTimeoutDuration", {}, arguments); };
    AnalyticsFirebase.prototype.setUserId = function (userId) { return cordova(this, "setUserId", {}, arguments); };
    AnalyticsFirebase.prototype.setUserProperty = function (userPropertyName, userPropertyValue) { return cordova(this, "setUserProperty", {}, arguments); };
    Object.defineProperty(AnalyticsFirebase.prototype, "DEFAULT_EVENTS", {
        get: function () { return cordovaPropertyGet(this, "DEFAULT_EVENTS"); },
        set: function (value) { cordovaPropertySet(this, "DEFAULT_EVENTS", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnalyticsFirebase.prototype, "DEFAULT_PARAMS", {
        get: function () { return cordovaPropertyGet(this, "DEFAULT_PARAMS"); },
        set: function (value) { cordovaPropertySet(this, "DEFAULT_PARAMS", value); },
        enumerable: false,
        configurable: true
    });
    AnalyticsFirebase.pluginName = "AnalyticsFirebase";
    AnalyticsFirebase.plugin = "cordova-plugin-analytics";
    AnalyticsFirebase.pluginRef = "analytics";
    AnalyticsFirebase.repo = "https://github.com/appfeel/analytics-google";
    AnalyticsFirebase.platforms = ["Android", "iOS"];
    AnalyticsFirebase.decorators = [
        { type: Injectable }
    ];
    return AnalyticsFirebase;
}(IonicNativePlugin));
export { AnalyticsFirebase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FuYWx5dGljcy1maXJlYmFzZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQzs7SUE4RGxELHFDQUFpQjs7OztJQThHdEQsb0NBQVEsYUFBQyxTQUFpQixFQUFFLFdBQW9CO0lBU2hELDhDQUFrQjtJQVVsQix5REFBNkIsYUFBQyxPQUFnQjtJQVc5Qyw0Q0FBZ0IsYUFBQyxVQUFrQjtJQVVuQyxxREFBeUIsYUFBQyxZQUFvQjtJQVU5QyxxREFBeUIsYUFBQyxZQUFvQjtJQVU5QyxxQ0FBUyxhQUFDLE1BQWM7SUFXeEIsMkNBQWUsYUFBQyxnQkFBd0IsRUFBRSxpQkFBeUI7MEJBOUsxRCw2Q0FBYzs7Ozs7OzBCQXdDZCw2Q0FBYzs7Ozs7Ozs7Ozs7O2dCQWhEeEIsVUFBVTs7NEJBOURYO0VBK0R1QyxpQkFBaUI7U0FBM0MsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBbmFseXRpY3MgRmlyZWJhc2VcbiAqIEBkZXNjcmlwdGlvblxuICogR29vZ2xlIEFuYWx5dGljcyBGaXJlYmFzZSBwbHVnaW4gZm9yIElvbmljIE5hdGl2ZSBhcHBzLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQW5hbHl0aWNzRmlyZWJhc2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FuYWx5dGljcy1maXJlYmFzZSc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5hbHl0aWNzRmlyZWJhc2U6IEFuYWx5dGljc0ZpcmViYXNlKSB7IH1cbiAqXG4gKiAvLyBUcmFjayBhbiBldmVudCB3aXRoIGRlZmF1bHQgZXZlbnRzIGFuZCBwYXJhbXNcbiAqIGNvbnN0IGV2ZW50UGFyYW1zID0ge307XG4gKiBldmVudFBhcmFtc1t0aGlzLmFuYWx5dGljc0ZpcmViYXNlLkRFRkFVTFRfUEFSQU1TLkxFVkVMXSA9IDI5O1xuICogdGhpcy5hbmFseXRpY3NGaXJlYmFzZS5sb2dFdmVudCh0aGlzLmFuYWx5dGljc0ZpcmViYXNlLkRFRkFVTFRfRVZFTlRTLkxFVkVMX1VQLCBldmVudFBhcmFtcylcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0V2ZW50IHN1Y2Nlc3NmdWxseSB0cmFja2VkJykpXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yIHRyYWNraW5nIGV2ZW50OicsIGVycikpO1xuICpcbiAqIC8vIFRyYWNrIGFuIGV2ZW50IHdpdGggY3VzdG9tIGV2ZW50cyBhbmQgcGFyYW1zXG4gKiBjb25zdCBldmVudFBhcmFtcyA9IHt9O1xuICogZXZlbnRQYXJhbXNbJ215LXByb3AnXSA9IDI5O1xuICogdGhpcy5hbmFseXRpY3NGaXJlYmFzZS5sb2dFdmVudCgnbXktZXZlbnQnLCBldmVudFBhcmFtcylcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0V2ZW50IHN1Y2Nlc3NmdWxseSB0cmFja2VkJykpXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yIHRyYWNraW5nIGV2ZW50OicsIGVycikpO1xuICpcbiAqXG4gKiAvLyBSZXNldCBhbmFseXRpY3MgZGF0YVxuICogdGhpcy5hbmFseXRpY3NGaXJlYmFzZS5yZXNldEFuYWx5dGljc0RhdGEoKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnQW5hbHl0aWNzIGRhdGEgaGF2ZSBiZWVuIHJlc2V0JykpXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yIHJlc2V0dGluZyBhbmFseXRpY3MgZGF0YTonLCBlcnIpKTtcbiAqXG4gKlxuICogLy8gVHJhY2sgYSBzY3JlZW4gdmlld1xuICogdGhpcy5hbmFseXRpY3NGaXJlYmFzZS5zZXRDdXJyZW50U2NyZWVuKCdIb21lJylcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ1ZpZXcgc3VjY2Vzc2Z1bGx5IHRyYWNrZWQnKSlcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3IgdHJhY2tpbmcgdmlldzonLCBlcnIpKTtcbiAqXG4gKlxuICogLy8gU2V0IHVzZXIgaWRcbiAqIHRoaXMuYW5hbHl0aWNzRmlyZWJhc2Uuc2V0VXNlcklkKCdVU0VSLUlEJylcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ1VzZXIgaWQgc3VjY2Vzc2Z1bGx5IHNldCcpKVxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvciBzZXR0aW5nIHVzZXIgaWQ6JywgZXJyKSk7XG4gKlxuICpcbiAqIC8vIFNldCB1c2VyIHByb3BlcnR5IGZyb20gZGVmYXVsdCBwcm9wZXJ0aWVzXG4gKiB0aGlzLmFuYWx5dGljc0ZpcmViYXNlLnNldFVzZXJQcm9wZXJ0eSgnS0VZJywgJ1ZBTFVFJylcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ1VzZXIgcHJvcGVydHkgc3VjY2Vzc2Z1bGx5IHNldCcpKVxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvciBzZXR0aW5nIHVzZXIgcHJvcGVydHk6JywgZXJyKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQW5hbHl0aWNzRmlyZWJhc2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hbmFseXRpY3MnLFxuICBwbHVnaW5SZWY6ICdhbmFseXRpY3MnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwcGZlZWwvYW5hbHl0aWNzLWdvb2dsZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NGaXJlYmFzZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZW51bSByZXByZXNlbnRzIEFuYWx5dGljc0ZpcmViYXNlIGRlZmF1bHQgZXZlbnRzLlxuICAgKiBVc2Ugb25lIG9mIHRoZXNlIGRlZmF1bHQgZXZlbnRzIG9yIGEgY3VzdG9tIGV2ZW50XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHJlYWRvbmx5IERFRkFVTFRfRVZFTlRTOiB7XG4gICAgQUREX1BBWU1FTlRfSU5GTzogc3RyaW5nO1xuICAgIEFERF9UT19DQVJUOiBzdHJpbmc7XG4gICAgQUREX1RPX1dJU0hMSVNUOiBzdHJpbmc7XG4gICAgQVBQX09QRU46IHN0cmluZztcbiAgICBCRUdJTl9DSEVDS09VVDogc3RyaW5nO1xuICAgIENBTVBBSUdOX0RFVEFJTFM6IHN0cmluZztcbiAgICBDSEVDS09VVF9QUk9HUkVTUzogc3RyaW5nO1xuICAgIEVBUk5fVklSVFVBTF9DVVJSRU5DWTogc3RyaW5nO1xuICAgIEVDT01NRVJDRV9QVVJDSEFTRTogc3RyaW5nO1xuICAgIEdFTkVSQVRFX0xFQUQ6IHN0cmluZztcbiAgICBKT0lOX0dST1VQOiBzdHJpbmc7XG4gICAgTEVWRUxfRU5EOiBzdHJpbmc7XG4gICAgTEVWRUxfU1RBUlQ6IHN0cmluZztcbiAgICBMRVZFTF9VUDogc3RyaW5nO1xuICAgIExPR0lOOiBzdHJpbmc7XG4gICAgUE9TVF9TQ09SRTogc3RyaW5nO1xuICAgIFBSRVNFTlRfT0ZGRVI6IHN0cmluZztcbiAgICBQVVJDSEFTRV9SRUZVTkQ6IHN0cmluZztcbiAgICBSRU1PVkVfRlJPTV9DQVJUOiBzdHJpbmc7XG4gICAgU0VBUkNIOiBzdHJpbmc7XG4gICAgU0VMRUNUX0NPTlRFTlQ6IHN0cmluZztcbiAgICBTRVRfQ0hFQ0tPVVRfT1BUSU9OOiBzdHJpbmc7XG4gICAgU0hBUkU6IHN0cmluZztcbiAgICBTSUdOX1VQOiBzdHJpbmc7XG4gICAgU1BFTkRfVklSVFVBTF9DVVJSRU5DWTogc3RyaW5nO1xuICAgIFRVVE9SSUFMX0JFR0lOOiBzdHJpbmc7XG4gICAgVFVUT1JJQUxfQ09NUExFVEU6IHN0cmluZztcbiAgICBVTkxPQ0tfQUNISUVWRU1FTlQ6IHN0cmluZztcbiAgICBWSUVXX0lURU06IHN0cmluZztcbiAgICBWSUVXX0lURU1fTElTVDogc3RyaW5nO1xuICAgIFZJRVdfU0VBUkNIX1JFU1VMVFM6IHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBlbnVtIHJlcHJlc2VudHMgQW5hbHl0aWNzRmlyZWJhc2UgZGVmYXVsdCBwYXJhbXMuXG4gICAqIFVzZSBvbmUgb2YgdGhlc2UgZGVmYXVsdCBwYXJhbXMgb3IgYSBjdXN0b20gcGFyYW1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgcmVhZG9ubHkgREVGQVVMVF9QQVJBTVM6IHtcbiAgICBBQ0hJRVZFTUVOVF9JRDogc3RyaW5nO1xuICAgIEFDTElEOiBzdHJpbmc7XG4gICAgQUZGSUxJQVRJT046IHN0cmluZztcbiAgICBDQU1QQUlHTjogc3RyaW5nO1xuICAgIENIQVJBQ1RFUjogc3RyaW5nO1xuICAgIENIRUNLT1VUX09QVElPTjogc3RyaW5nO1xuICAgIENIRUNLT1VUX1NURVA6IHN0cmluZztcbiAgICBDT05URU5UOiBzdHJpbmc7XG4gICAgQ09OVEVOVF9UWVBFOiBzdHJpbmc7XG4gICAgQ09VUE9OOiBzdHJpbmc7XG4gICAgQ1AxOiBzdHJpbmc7XG4gICAgQ1JFQVRJVkVfTkFNRTogc3RyaW5nO1xuICAgIENSRUFUSVZFX1NMT1Q6IHN0cmluZztcbiAgICBDVVJSRU5DWTogc3RyaW5nO1xuICAgIERFU1RJTkFUSU9OOiBzdHJpbmc7XG4gICAgRU5EX0RBVEU6IHN0cmluZztcbiAgICBGTElHSFRfTlVNQkVSOiBzdHJpbmc7XG4gICAgR1JPVVBfSUQ6IHN0cmluZztcbiAgICBJTkRFWDogc3RyaW5nO1xuICAgIElURU1fQlJBTkQ6IHN0cmluZztcbiAgICBJVEVNX0NBVEVHT1JZOiBzdHJpbmc7XG4gICAgSVRFTV9JRDogc3RyaW5nO1xuICAgIElURU1fTElTVDogc3RyaW5nO1xuICAgIElURU1fTE9DQVRJT05fSUQ6IHN0cmluZztcbiAgICBJVEVNX05BTUU6IHN0cmluZztcbiAgICBJVEVNX1ZBUklBTlQ6IHN0cmluZztcbiAgICBMRVZFTDogc3RyaW5nO1xuICAgIExFVkVMX05BTUU6IHN0cmluZztcbiAgICBMT0NBVElPTjogc3RyaW5nO1xuICAgIE1FRElVTTogc3RyaW5nO1xuICAgIE1FVEhPRDogc3RyaW5nO1xuICAgIE5VTUJFUl9PRl9OSUdIVFM6IHN0cmluZztcbiAgICBOVU1CRVJfT0ZfUEFTU0VOR0VSUzogc3RyaW5nO1xuICAgIE5VTUJFUl9PRl9ST09NUzogc3RyaW5nO1xuICAgIE9SSUdJTjogc3RyaW5nO1xuICAgIFBSSUNFOiBzdHJpbmc7XG4gICAgUVVBTlRJVFk6IHN0cmluZztcbiAgICBTQ09SRTogc3RyaW5nO1xuICAgIFNFQVJDSF9URVJNOiBzdHJpbmc7XG4gICAgU0hJUFBJTkc6IHN0cmluZztcbiAgICBTT1VSQ0U6IHN0cmluZztcbiAgICBTVEFSVF9EQVRFOiBzdHJpbmc7XG4gICAgU1VDQ0VTUzogc3RyaW5nO1xuICAgIFRBWDogc3RyaW5nO1xuICAgIFRFUk06IHN0cmluZztcbiAgICBUUkFOU0FDVElPTl9JRDogc3RyaW5nO1xuICAgIFRSQVZFTF9DTEFTUzogc3RyaW5nO1xuICAgIFZBTFVFOiBzdHJpbmc7XG4gICAgVklSVFVBTF9DVVJSRU5DWV9OQU1FOiBzdHJpbmc7XG4gIH07XG5cbiAgLyoqXG4gICAqIExvZ3MgYW4gYXBwIGV2ZW50LiBUaGUgZXZlbnQgY2FuIGhhdmUgdXAgdG8gMjUgcGFyYW1ldGVycy5cbiAgICogRXZlbnRzIHdpdGggdGhlIHNhbWUgbmFtZSBtdXN0IGhhdmUgdGhlIHNhbWUgcGFyYW1ldGVycy5cbiAgICogVXAgdG8gNTAwIGV2ZW50IG5hbWVzIGFyZSBzdXBwb3J0ZWQuXG4gICAqIFVzaW5nIHByZWRlZmluZWQgW0ZpcmViYXNlQW5hbHl0aWNzLkV2ZW50XShodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9yZWZlcmVuY2UvYW5kcm9pZC9jb20vZ29vZ2xlL2ZpcmViYXNlL2FuYWx5dGljcy9GaXJlYmFzZUFuYWx5dGljcy5FdmVudC5odG1sKSBhbmQvb3IgW0ZpcmViYXNlQW5hbHl0aWNzLlBhcmFtXShodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9yZWZlcmVuY2UvYW5kcm9pZC9jb20vZ29vZ2xlL2ZpcmViYXNlL2FuYWx5dGljcy9GaXJlYmFzZUFuYWx5dGljcy5QYXJhbS5odG1sKSBpcyByZWNvbW1lbmRlZCBmb3Igb3B0aW1hbCByZXBvcnRpbmcuXG4gICAqXG4gICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gVGhlIGV2ZW50IG5hbWVcbiAgICogQHBhcmFtIGV2ZW50UGFyYW1zIHtvYmplY3R9IChPcHRpb25hbCkgVGhlIGV2ZW50IHBhcmFtc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgZXZlbnQgaXMgbG9nZ2VkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ0V2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBldmVudFBhcmFtcz86IG9iamVjdCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgYW5hbHl0aWNzIGRhdGEgZm9yIHRoaXMgYXBwIGZyb20gdGhlIGRldmljZSBhbmQgcmVzZXRzIHRoZSBhcHAgaW5zdGFuY2UgaWRcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGFuYWx5dGljcyBkYXRhIGlzIGNsZWFyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzZXRBbmFseXRpY3NEYXRhKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgd2hldGhlciBhbmFseXRpY3MgY29sbGVjdGlvbiBpcyBlbmFibGVkIGZvciB0aGlzIGFwcCBvbiB0aGlzIGRldmljZS4gVGhpcyBzZXR0aW5nIGlzIHBlcnNpc3RlZCBhY3Jvc3MgYXBwIHNlc3Npb25zLiBCeSBkZWZhdWx0IGl0IGlzIGVuYWJsZWRcbiAgICogQHBhcmFtIHNjcmVlbk5hbWUge2Jvb2xlYW59IFRoZSB2YWx1ZSBvZiB0aGUgY29sbGVjdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgY29sbGVjdGlvbiBpcyBlbmFibGVkL2Rpc2FibGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldEFuYWx5dGljc0NvbGxlY3Rpb25FbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJyZW50IHNjcmVlbiBuYW1lLCB3aGljaCBzcGVjaWZpZXMgdGhlIGN1cnJlbnQgdmlzdWFsIGNvbnRleHQgaW4geW91ciBhcHAuXG4gICAqIFRoaXMgaGVscHMgaWRlbnRpZnkgdGhlIGFyZWFzIGluIHlvdXIgYXBwIHdoZXJlIHVzZXJzIHNwZW5kIHRoZWlyIHRpbWUgYW5kIGhvdyB0aGV5IGludGVyYWN0IHdpdGggeW91ciBhcHBcbiAgICogQHBhcmFtIHNjcmVlbk5hbWUge3N0cmluZ30gVGhlIHNjcmVlbiBuYW1lXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBjdXJyZW50IHNjcmVlbiBpcyBzZXR0ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0Q3VycmVudFNjcmVlbihzY3JlZW5OYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBtaW5pbXVtIGVuZ2FnZW1lbnQgdGltZSByZXF1aXJlZCBiZWZvcmUgc3RhcnRpbmcgYSBzZXNzaW9uLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxMDAwMCAoMTAgc2Vjb25kcylcbiAgICogQHBhcmFtIHNjcmVlbk5hbWUge251bWJlcn0gVGhlIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgbWluaW11bSBzZXNzaW9uIGR1cmF0aW9uIGlzIHNldFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRNaW5pbXVtU2Vzc2lvbkR1cmF0aW9uKG1pbGxpc2Vjb25kczogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZHVyYXRpb24gb2YgaW5hY3Rpdml0eSB0aGF0IHRlcm1pbmF0ZXMgdGhlIGN1cnJlbnQgc2Vzc2lvbi4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMTgwMDAwMCAoMzAgbWludXRlcylcbiAgICogQHBhcmFtIHNjcmVlbk5hbWUge251bWJlcn0gVGhlIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgc2Vzc2lvbiB0aW1lb3V0IGR1cmF0aW9uIGlzIHNldFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRTZXNzaW9uVGltZW91dER1cmF0aW9uKG1pbGxpc2Vjb25kczogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdXNlciBJRCBwcm9wZXJ0eS4gVGhpcyBmZWF0dXJlIG11c3QgYmUgdXNlZCBpbiBhY2NvcmRhbmNlIHdpdGggR29vZ2xlJ3MgUHJpdmFjeSBQb2xpY3lcbiAgICogQHBhcmFtIHVzZXJJZCB7c3RyaW5nfSBUaGUgdXNlciBpZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgdXNlciBpZCBpcyBzZXR0ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0VXNlcklkKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIHVzZXIgcHJvcGVydHkgdG8gYSBnaXZlbiB2YWx1ZS4gVXAgdG8gMjUgdXNlciBwcm9wZXJ0eSBuYW1lcyBhcmUgc3VwcG9ydGVkLiBPbmNlIHNldCwgdXNlciBwcm9wZXJ0eSB2YWx1ZXMgcGVyc2lzdCB0aHJvdWdob3V0IHRoZSBhcHAgbGlmZWN5Y2xlIGFuZCBhY3Jvc3Mgc2Vzc2lvbnNcbiAgICogQHBhcmFtIHVzZXJQcm9wZXJ0eU5hbWUge3N0cmluZ30gVGhlIHVzZXIgcHJvcGVydHkgbmFtZVxuICAgKiBAcGFyYW0gdXNlclByb3BlcnR5VmFsdWUge3N0cmluZ30gVGhlIHVzZXIgcHJvcGVydHkgdmFsdWVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHVzZXIgcHJvcGVydHkgc2V0dGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFVzZXJQcm9wZXJ0eSh1c2VyUHJvcGVydHlOYW1lOiBzdHJpbmcsIHVzZXJQcm9wZXJ0eVZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19