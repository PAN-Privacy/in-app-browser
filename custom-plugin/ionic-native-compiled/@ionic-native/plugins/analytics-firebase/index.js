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
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var AnalyticsFirebaseOriginal = /** @class */ (function (_super) {
    __extends(AnalyticsFirebaseOriginal, _super);
    function AnalyticsFirebaseOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnalyticsFirebaseOriginal.prototype.logEvent = function (eventName, eventParams) { return cordova(this, "logEvent", {}, arguments); };
    AnalyticsFirebaseOriginal.prototype.resetAnalyticsData = function () { return cordova(this, "resetAnalyticsData", {}, arguments); };
    AnalyticsFirebaseOriginal.prototype.setAnalyticsCollectionEnabled = function (enabled) { return cordova(this, "setAnalyticsCollectionEnabled", {}, arguments); };
    AnalyticsFirebaseOriginal.prototype.setCurrentScreen = function (screenName) { return cordova(this, "setCurrentScreen", {}, arguments); };
    AnalyticsFirebaseOriginal.prototype.setMinimumSessionDuration = function (milliseconds) { return cordova(this, "setMinimumSessionDuration", {}, arguments); };
    AnalyticsFirebaseOriginal.prototype.setSessionTimeoutDuration = function (milliseconds) { return cordova(this, "setSessionTimeoutDuration", {}, arguments); };
    AnalyticsFirebaseOriginal.prototype.setUserId = function (userId) { return cordova(this, "setUserId", {}, arguments); };
    AnalyticsFirebaseOriginal.prototype.setUserProperty = function (userPropertyName, userPropertyValue) { return cordova(this, "setUserProperty", {}, arguments); };
    Object.defineProperty(AnalyticsFirebaseOriginal.prototype, "DEFAULT_EVENTS", {
        get: function () { return cordovaPropertyGet(this, "DEFAULT_EVENTS"); },
        set: function (value) { cordovaPropertySet(this, "DEFAULT_EVENTS", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnalyticsFirebaseOriginal.prototype, "DEFAULT_PARAMS", {
        get: function () { return cordovaPropertyGet(this, "DEFAULT_PARAMS"); },
        set: function (value) { cordovaPropertySet(this, "DEFAULT_PARAMS", value); },
        enumerable: false,
        configurable: true
    });
    AnalyticsFirebaseOriginal.pluginName = "AnalyticsFirebase";
    AnalyticsFirebaseOriginal.plugin = "cordova-plugin-analytics";
    AnalyticsFirebaseOriginal.pluginRef = "analytics";
    AnalyticsFirebaseOriginal.repo = "https://github.com/appfeel/analytics-google";
    AnalyticsFirebaseOriginal.platforms = ["Android", "iOS"];
    return AnalyticsFirebaseOriginal;
}(IonicNativePlugin));
var AnalyticsFirebase = new AnalyticsFirebaseOriginal();
export { AnalyticsFirebase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FuYWx5dGljcy1maXJlYmFzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQzs7SUE4RGxELHFDQUFpQjs7OztJQThHdEQsb0NBQVEsYUFBQyxTQUFpQixFQUFFLFdBQW9CO0lBU2hELDhDQUFrQjtJQVVsQix5REFBNkIsYUFBQyxPQUFnQjtJQVc5Qyw0Q0FBZ0IsYUFBQyxVQUFrQjtJQVVuQyxxREFBeUIsYUFBQyxZQUFvQjtJQVU5QyxxREFBeUIsYUFBQyxZQUFvQjtJQVU5QyxxQ0FBUyxhQUFDLE1BQWM7SUFXeEIsMkNBQWUsYUFBQyxnQkFBd0IsRUFBRSxpQkFBeUI7MEJBOUsxRCw2Q0FBYzs7Ozs7OzBCQXdDZCw2Q0FBYzs7Ozs7Ozs7Ozs7NEJBOUd6QjtFQStEdUMsaUJBQWlCO1NBQTNDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQW5hbHl0aWNzIEZpcmViYXNlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdvb2dsZSBBbmFseXRpY3MgRmlyZWJhc2UgcGx1Z2luIGZvciBJb25pYyBOYXRpdmUgYXBwcy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFuYWx5dGljc0ZpcmViYXNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hbmFseXRpY3MtZmlyZWJhc2UnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuYWx5dGljc0ZpcmViYXNlOiBBbmFseXRpY3NGaXJlYmFzZSkgeyB9XG4gKlxuICogLy8gVHJhY2sgYW4gZXZlbnQgd2l0aCBkZWZhdWx0IGV2ZW50cyBhbmQgcGFyYW1zXG4gKiBjb25zdCBldmVudFBhcmFtcyA9IHt9O1xuICogZXZlbnRQYXJhbXNbdGhpcy5hbmFseXRpY3NGaXJlYmFzZS5ERUZBVUxUX1BBUkFNUy5MRVZFTF0gPSAyOTtcbiAqIHRoaXMuYW5hbHl0aWNzRmlyZWJhc2UubG9nRXZlbnQodGhpcy5hbmFseXRpY3NGaXJlYmFzZS5ERUZBVUxUX0VWRU5UUy5MRVZFTF9VUCwgZXZlbnRQYXJhbXMpXG4gKiAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdFdmVudCBzdWNjZXNzZnVsbHkgdHJhY2tlZCcpKVxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvciB0cmFja2luZyBldmVudDonLCBlcnIpKTtcbiAqXG4gKiAvLyBUcmFjayBhbiBldmVudCB3aXRoIGN1c3RvbSBldmVudHMgYW5kIHBhcmFtc1xuICogY29uc3QgZXZlbnRQYXJhbXMgPSB7fTtcbiAqIGV2ZW50UGFyYW1zWydteS1wcm9wJ10gPSAyOTtcbiAqIHRoaXMuYW5hbHl0aWNzRmlyZWJhc2UubG9nRXZlbnQoJ215LWV2ZW50JywgZXZlbnRQYXJhbXMpXG4gKiAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdFdmVudCBzdWNjZXNzZnVsbHkgdHJhY2tlZCcpKVxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvciB0cmFja2luZyBldmVudDonLCBlcnIpKTtcbiAqXG4gKlxuICogLy8gUmVzZXQgYW5hbHl0aWNzIGRhdGFcbiAqIHRoaXMuYW5hbHl0aWNzRmlyZWJhc2UucmVzZXRBbmFseXRpY3NEYXRhKClcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0FuYWx5dGljcyBkYXRhIGhhdmUgYmVlbiByZXNldCcpKVxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvciByZXNldHRpbmcgYW5hbHl0aWNzIGRhdGE6JywgZXJyKSk7XG4gKlxuICpcbiAqIC8vIFRyYWNrIGEgc2NyZWVuIHZpZXdcbiAqIHRoaXMuYW5hbHl0aWNzRmlyZWJhc2Uuc2V0Q3VycmVudFNjcmVlbignSG9tZScpXG4gKiAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdWaWV3IHN1Y2Nlc3NmdWxseSB0cmFja2VkJykpXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yIHRyYWNraW5nIHZpZXc6JywgZXJyKSk7XG4gKlxuICpcbiAqIC8vIFNldCB1c2VyIGlkXG4gKiB0aGlzLmFuYWx5dGljc0ZpcmViYXNlLnNldFVzZXJJZCgnVVNFUi1JRCcpXG4gKiAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdVc2VyIGlkIHN1Y2Nlc3NmdWxseSBzZXQnKSlcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3Igc2V0dGluZyB1c2VyIGlkOicsIGVycikpO1xuICpcbiAqXG4gKiAvLyBTZXQgdXNlciBwcm9wZXJ0eSBmcm9tIGRlZmF1bHQgcHJvcGVydGllc1xuICogdGhpcy5hbmFseXRpY3NGaXJlYmFzZS5zZXRVc2VyUHJvcGVydHkoJ0tFWScsICdWQUxVRScpXG4gKiAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdVc2VyIHByb3BlcnR5IHN1Y2Nlc3NmdWxseSBzZXQnKSlcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3Igc2V0dGluZyB1c2VyIHByb3BlcnR5OicsIGVycikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FuYWx5dGljc0ZpcmViYXNlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYW5hbHl0aWNzJyxcbiAgcGx1Z2luUmVmOiAnYW5hbHl0aWNzJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcHBmZWVsL2FuYWx5dGljcy1nb29nbGUnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW5hbHl0aWNzRmlyZWJhc2UgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGVudW0gcmVwcmVzZW50cyBBbmFseXRpY3NGaXJlYmFzZSBkZWZhdWx0IGV2ZW50cy5cbiAgICogVXNlIG9uZSBvZiB0aGVzZSBkZWZhdWx0IGV2ZW50cyBvciBhIGN1c3RvbSBldmVudFxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICByZWFkb25seSBERUZBVUxUX0VWRU5UUzoge1xuICAgIEFERF9QQVlNRU5UX0lORk86IHN0cmluZztcbiAgICBBRERfVE9fQ0FSVDogc3RyaW5nO1xuICAgIEFERF9UT19XSVNITElTVDogc3RyaW5nO1xuICAgIEFQUF9PUEVOOiBzdHJpbmc7XG4gICAgQkVHSU5fQ0hFQ0tPVVQ6IHN0cmluZztcbiAgICBDQU1QQUlHTl9ERVRBSUxTOiBzdHJpbmc7XG4gICAgQ0hFQ0tPVVRfUFJPR1JFU1M6IHN0cmluZztcbiAgICBFQVJOX1ZJUlRVQUxfQ1VSUkVOQ1k6IHN0cmluZztcbiAgICBFQ09NTUVSQ0VfUFVSQ0hBU0U6IHN0cmluZztcbiAgICBHRU5FUkFURV9MRUFEOiBzdHJpbmc7XG4gICAgSk9JTl9HUk9VUDogc3RyaW5nO1xuICAgIExFVkVMX0VORDogc3RyaW5nO1xuICAgIExFVkVMX1NUQVJUOiBzdHJpbmc7XG4gICAgTEVWRUxfVVA6IHN0cmluZztcbiAgICBMT0dJTjogc3RyaW5nO1xuICAgIFBPU1RfU0NPUkU6IHN0cmluZztcbiAgICBQUkVTRU5UX09GRkVSOiBzdHJpbmc7XG4gICAgUFVSQ0hBU0VfUkVGVU5EOiBzdHJpbmc7XG4gICAgUkVNT1ZFX0ZST01fQ0FSVDogc3RyaW5nO1xuICAgIFNFQVJDSDogc3RyaW5nO1xuICAgIFNFTEVDVF9DT05URU5UOiBzdHJpbmc7XG4gICAgU0VUX0NIRUNLT1VUX09QVElPTjogc3RyaW5nO1xuICAgIFNIQVJFOiBzdHJpbmc7XG4gICAgU0lHTl9VUDogc3RyaW5nO1xuICAgIFNQRU5EX1ZJUlRVQUxfQ1VSUkVOQ1k6IHN0cmluZztcbiAgICBUVVRPUklBTF9CRUdJTjogc3RyaW5nO1xuICAgIFRVVE9SSUFMX0NPTVBMRVRFOiBzdHJpbmc7XG4gICAgVU5MT0NLX0FDSElFVkVNRU5UOiBzdHJpbmc7XG4gICAgVklFV19JVEVNOiBzdHJpbmc7XG4gICAgVklFV19JVEVNX0xJU1Q6IHN0cmluZztcbiAgICBWSUVXX1NFQVJDSF9SRVNVTFRTOiBzdHJpbmc7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgZW51bSByZXByZXNlbnRzIEFuYWx5dGljc0ZpcmViYXNlIGRlZmF1bHQgcGFyYW1zLlxuICAgKiBVc2Ugb25lIG9mIHRoZXNlIGRlZmF1bHQgcGFyYW1zIG9yIGEgY3VzdG9tIHBhcmFtXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHJlYWRvbmx5IERFRkFVTFRfUEFSQU1TOiB7XG4gICAgQUNISUVWRU1FTlRfSUQ6IHN0cmluZztcbiAgICBBQ0xJRDogc3RyaW5nO1xuICAgIEFGRklMSUFUSU9OOiBzdHJpbmc7XG4gICAgQ0FNUEFJR046IHN0cmluZztcbiAgICBDSEFSQUNURVI6IHN0cmluZztcbiAgICBDSEVDS09VVF9PUFRJT046IHN0cmluZztcbiAgICBDSEVDS09VVF9TVEVQOiBzdHJpbmc7XG4gICAgQ09OVEVOVDogc3RyaW5nO1xuICAgIENPTlRFTlRfVFlQRTogc3RyaW5nO1xuICAgIENPVVBPTjogc3RyaW5nO1xuICAgIENQMTogc3RyaW5nO1xuICAgIENSRUFUSVZFX05BTUU6IHN0cmluZztcbiAgICBDUkVBVElWRV9TTE9UOiBzdHJpbmc7XG4gICAgQ1VSUkVOQ1k6IHN0cmluZztcbiAgICBERVNUSU5BVElPTjogc3RyaW5nO1xuICAgIEVORF9EQVRFOiBzdHJpbmc7XG4gICAgRkxJR0hUX05VTUJFUjogc3RyaW5nO1xuICAgIEdST1VQX0lEOiBzdHJpbmc7XG4gICAgSU5ERVg6IHN0cmluZztcbiAgICBJVEVNX0JSQU5EOiBzdHJpbmc7XG4gICAgSVRFTV9DQVRFR09SWTogc3RyaW5nO1xuICAgIElURU1fSUQ6IHN0cmluZztcbiAgICBJVEVNX0xJU1Q6IHN0cmluZztcbiAgICBJVEVNX0xPQ0FUSU9OX0lEOiBzdHJpbmc7XG4gICAgSVRFTV9OQU1FOiBzdHJpbmc7XG4gICAgSVRFTV9WQVJJQU5UOiBzdHJpbmc7XG4gICAgTEVWRUw6IHN0cmluZztcbiAgICBMRVZFTF9OQU1FOiBzdHJpbmc7XG4gICAgTE9DQVRJT046IHN0cmluZztcbiAgICBNRURJVU06IHN0cmluZztcbiAgICBNRVRIT0Q6IHN0cmluZztcbiAgICBOVU1CRVJfT0ZfTklHSFRTOiBzdHJpbmc7XG4gICAgTlVNQkVSX09GX1BBU1NFTkdFUlM6IHN0cmluZztcbiAgICBOVU1CRVJfT0ZfUk9PTVM6IHN0cmluZztcbiAgICBPUklHSU46IHN0cmluZztcbiAgICBQUklDRTogc3RyaW5nO1xuICAgIFFVQU5USVRZOiBzdHJpbmc7XG4gICAgU0NPUkU6IHN0cmluZztcbiAgICBTRUFSQ0hfVEVSTTogc3RyaW5nO1xuICAgIFNISVBQSU5HOiBzdHJpbmc7XG4gICAgU09VUkNFOiBzdHJpbmc7XG4gICAgU1RBUlRfREFURTogc3RyaW5nO1xuICAgIFNVQ0NFU1M6IHN0cmluZztcbiAgICBUQVg6IHN0cmluZztcbiAgICBURVJNOiBzdHJpbmc7XG4gICAgVFJBTlNBQ1RJT05fSUQ6IHN0cmluZztcbiAgICBUUkFWRUxfQ0xBU1M6IHN0cmluZztcbiAgICBWQUxVRTogc3RyaW5nO1xuICAgIFZJUlRVQUxfQ1VSUkVOQ1lfTkFNRTogc3RyaW5nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMb2dzIGFuIGFwcCBldmVudC4gVGhlIGV2ZW50IGNhbiBoYXZlIHVwIHRvIDI1IHBhcmFtZXRlcnMuXG4gICAqIEV2ZW50cyB3aXRoIHRoZSBzYW1lIG5hbWUgbXVzdCBoYXZlIHRoZSBzYW1lIHBhcmFtZXRlcnMuXG4gICAqIFVwIHRvIDUwMCBldmVudCBuYW1lcyBhcmUgc3VwcG9ydGVkLlxuICAgKiBVc2luZyBwcmVkZWZpbmVkIFtGaXJlYmFzZUFuYWx5dGljcy5FdmVudF0oaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3MvcmVmZXJlbmNlL2FuZHJvaWQvY29tL2dvb2dsZS9maXJlYmFzZS9hbmFseXRpY3MvRmlyZWJhc2VBbmFseXRpY3MuRXZlbnQuaHRtbCkgYW5kL29yIFtGaXJlYmFzZUFuYWx5dGljcy5QYXJhbV0oaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3MvcmVmZXJlbmNlL2FuZHJvaWQvY29tL2dvb2dsZS9maXJlYmFzZS9hbmFseXRpY3MvRmlyZWJhc2VBbmFseXRpY3MuUGFyYW0uaHRtbCkgaXMgcmVjb21tZW5kZWQgZm9yIG9wdGltYWwgcmVwb3J0aW5nLlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IFRoZSBldmVudCBuYW1lXG4gICAqIEBwYXJhbSBldmVudFBhcmFtcyB7b2JqZWN0fSAoT3B0aW9uYWwpIFRoZSBldmVudCBwYXJhbXNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGV2ZW50IGlzIGxvZ2dlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dFdmVudChldmVudE5hbWU6IHN0cmluZywgZXZlbnRQYXJhbXM/OiBvYmplY3QpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgYWxsIGFuYWx5dGljcyBkYXRhIGZvciB0aGlzIGFwcCBmcm9tIHRoZSBkZXZpY2UgYW5kIHJlc2V0cyB0aGUgYXBwIGluc3RhbmNlIGlkXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBhbmFseXRpY3MgZGF0YSBpcyBjbGVhcmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlc2V0QW5hbHl0aWNzRGF0YSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHdoZXRoZXIgYW5hbHl0aWNzIGNvbGxlY3Rpb24gaXMgZW5hYmxlZCBmb3IgdGhpcyBhcHAgb24gdGhpcyBkZXZpY2UuIFRoaXMgc2V0dGluZyBpcyBwZXJzaXN0ZWQgYWNyb3NzIGFwcCBzZXNzaW9ucy4gQnkgZGVmYXVsdCBpdCBpcyBlbmFibGVkXG4gICAqIEBwYXJhbSBzY3JlZW5OYW1lIHtib29sZWFufSBUaGUgdmFsdWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGNvbGxlY3Rpb24gaXMgZW5hYmxlZC9kaXNhYmxlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRBbmFseXRpY3NDb2xsZWN0aW9uRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgY3VycmVudCBzY3JlZW4gbmFtZSwgd2hpY2ggc3BlY2lmaWVzIHRoZSBjdXJyZW50IHZpc3VhbCBjb250ZXh0IGluIHlvdXIgYXBwLlxuICAgKiBUaGlzIGhlbHBzIGlkZW50aWZ5IHRoZSBhcmVhcyBpbiB5b3VyIGFwcCB3aGVyZSB1c2VycyBzcGVuZCB0aGVpciB0aW1lIGFuZCBob3cgdGhleSBpbnRlcmFjdCB3aXRoIHlvdXIgYXBwXG4gICAqIEBwYXJhbSBzY3JlZW5OYW1lIHtzdHJpbmd9IFRoZSBzY3JlZW4gbmFtZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgY3VycmVudCBzY3JlZW4gaXMgc2V0dGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldEN1cnJlbnRTY3JlZW4oc2NyZWVuTmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgbWluaW11bSBlbmdhZ2VtZW50IHRpbWUgcmVxdWlyZWQgYmVmb3JlIHN0YXJ0aW5nIGEgc2Vzc2lvbi4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMTAwMDAgKDEwIHNlY29uZHMpXG4gICAqIEBwYXJhbSBzY3JlZW5OYW1lIHtudW1iZXJ9IFRoZSBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIG1pbmltdW0gc2Vzc2lvbiBkdXJhdGlvbiBpcyBzZXRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0TWluaW11bVNlc3Npb25EdXJhdGlvbihtaWxsaXNlY29uZHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGR1cmF0aW9uIG9mIGluYWN0aXZpdHkgdGhhdCB0ZXJtaW5hdGVzIHRoZSBjdXJyZW50IHNlc3Npb24uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDE4MDAwMDAgKDMwIG1pbnV0ZXMpXG4gICAqIEBwYXJhbSBzY3JlZW5OYW1lIHtudW1iZXJ9IFRoZSBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHNlc3Npb24gdGltZW91dCBkdXJhdGlvbiBpcyBzZXRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0U2Vzc2lvblRpbWVvdXREdXJhdGlvbihtaWxsaXNlY29uZHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHVzZXIgSUQgcHJvcGVydHkuIFRoaXMgZmVhdHVyZSBtdXN0IGJlIHVzZWQgaW4gYWNjb3JkYW5jZSB3aXRoIEdvb2dsZSdzIFByaXZhY3kgUG9saWN5XG4gICAqIEBwYXJhbSB1c2VySWQge3N0cmluZ30gVGhlIHVzZXIgaWRcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHVzZXIgaWQgaXMgc2V0dGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSB1c2VyIHByb3BlcnR5IHRvIGEgZ2l2ZW4gdmFsdWUuIFVwIHRvIDI1IHVzZXIgcHJvcGVydHkgbmFtZXMgYXJlIHN1cHBvcnRlZC4gT25jZSBzZXQsIHVzZXIgcHJvcGVydHkgdmFsdWVzIHBlcnNpc3QgdGhyb3VnaG91dCB0aGUgYXBwIGxpZmVjeWNsZSBhbmQgYWNyb3NzIHNlc3Npb25zXG4gICAqIEBwYXJhbSB1c2VyUHJvcGVydHlOYW1lIHtzdHJpbmd9IFRoZSB1c2VyIHByb3BlcnR5IG5hbWVcbiAgICogQHBhcmFtIHVzZXJQcm9wZXJ0eVZhbHVlIHtzdHJpbmd9IFRoZSB1c2VyIHByb3BlcnR5IHZhbHVlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSB1c2VyIHByb3BlcnR5IHNldHRlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRVc2VyUHJvcGVydHkodXNlclByb3BlcnR5TmFtZTogc3RyaW5nLCB1c2VyUHJvcGVydHlWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==