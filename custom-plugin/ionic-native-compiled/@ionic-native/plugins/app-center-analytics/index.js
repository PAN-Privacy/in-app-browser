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
var AppCenterAnalyticsOriginal = /** @class */ (function (_super) {
    __extends(AppCenterAnalyticsOriginal, _super);
    function AppCenterAnalyticsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterAnalyticsOriginal.prototype.trackEvent = function (eventName, properties) { return cordova(this, "trackEvent", {}, arguments); };
    AppCenterAnalyticsOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AppCenterAnalyticsOriginal.prototype.setEnabled = function (shouldEnable) { return cordova(this, "setEnabled", {}, arguments); };
    AppCenterAnalyticsOriginal.pluginName = "AppCenterAnalytics";
    AppCenterAnalyticsOriginal.plugin = "cordova-plugin-appcenter-analytics";
    AppCenterAnalyticsOriginal.pluginRef = "AppCenter.Analytics";
    AppCenterAnalyticsOriginal.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-analytics";
    AppCenterAnalyticsOriginal.platforms = ["Android", "iOS"];
    return AppCenterAnalyticsOriginal;
}(IonicNativePlugin));
var AppCenterAnalytics = new AppCenterAnalyticsOriginal();
export { AppCenterAnalytics };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1jZW50ZXItYW5hbHl0aWNzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTJDaEMsc0NBQWlCOzs7O0lBVXZELHVDQUFVLGFBQUMsU0FBaUIsRUFBRSxVQUFxQjtJQVNuRCxzQ0FBUztJQVVULHVDQUFVLGFBQUMsWUFBcUI7Ozs7Ozs2QkF6RWxDO0VBNEN3QyxpQkFBaUI7U0FBNUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyaW5nTWFwIHtcbiAgW3M6IHN0cmluZ106IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBBcHAgQ2VudGVyIEFuYWx5dGljc1xuICogQGRlc2NyaXB0aW9uXG4gKiBBcHAgQ2VudGVyIEFuYWx5dGljcyBoZWxwcyB5b3UgdW5kZXJzdGFuZCB1c2VyIGJlaGF2aW9yIGFuZCBjdXN0b21lciBlbmdhZ2VtZW50IHRvIGltcHJvdmUgeW91ciBhcHAuXG4gKiBUaGUgU0RLIGF1dG9tYXRpY2FsbHkgY2FwdHVyZXMgc2Vzc2lvbiBjb3VudCBhbmQgZGV2aWNlIHByb3BlcnRpZXMgbGlrZSBtb2RlbCwgT1MgdmVyc2lvbiwgZXRjLlxuICogWW91IGNhbiBkZWZpbmUgeW91ciBvd24gY3VzdG9tIGV2ZW50cyB0byBtZWFzdXJlIHRoaW5ncyB0aGF0IG1hdHRlciB0byB5b3UuXG4gKiBBbGwgdGhlIGluZm9ybWF0aW9uIGNhcHR1cmVkIGlzIGF2YWlsYWJsZSBpbiB0aGUgQXBwIENlbnRlciBwb3J0YWwgZm9yIHlvdSB0byBhbmFseXplIHRoZSBkYXRhLlxuICpcbiAqIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvYXBwY2VudGVyL3Nkay9hbmFseXRpY3MvY29yZG92YVxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQXBwQ2VudGVyQW5hbHl0aWNzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hcHAtY2VudGVyLWFuYWx5dGljcy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcENlbnRlckFuYWx5dGljczogQXBwQ2VudGVyQW5hbHl0aWNzKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmFwcENlbnRlckFuYWx5dGljcy5zZXRFbmFibGVkKHRydWUpLnRoZW4oKCkgPT4ge1xuICogICAgdGhpcy5hcHBDZW50ZXJBbmFseXRpY3MudHJhY2tFdmVudCgnTXkgRXZlbnQnLCB7IFRFU1Q6ICdIRUxMT19XT1JMRCcgfSkudGhlbigoKSA9PiB7XG4gKiAgICAgICAgY29uc29sZS5sb2coJ0N1c3RvbSBldmVudCB0cmFja2VkJyk7XG4gKiAgICB9KTtcbiAqIH0pO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIFN0cmluZ01hcFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FwcENlbnRlckFuYWx5dGljcycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcGNlbnRlci1hbmFseXRpY3MnLFxuICBwbHVnaW5SZWY6ICdBcHBDZW50ZXIuQW5hbHl0aWNzJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvYXBwY2VudGVyLXNkay1jb3Jkb3ZhL3RyZWUvbWFzdGVyL2NvcmRvdmEtcGx1Z2luLWFwcGNlbnRlci1hbmFseXRpY3MnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwQ2VudGVyQW5hbHl0aWNzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVHJhY2tzIGFuIGN1c3RvbSBldmVudC5cbiAgICogWW91IGNhbiBzZW5kIHVwIHRvIDIwMCBkaXN0aW5jdCBldmVudCBuYW1lcy4gQWxzbywgdGhlcmUgaXMgYSBtYXhpbXVtIGxpbWl0IG9mIDI1NiBjaGFyYWN0ZXJzIHBlciBldmVudCBuYW1lXG4gICAqIGFuZCA2NCBjaGFyYWN0ZXJzIHBlciBldmVudCBwcm9wZXJ0eSBuYW1lIGFuZCBldmVudCBwcm9wZXJ0eSB2YWx1ZS5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBldmVudE5hbWUgRXZlbnQgbmFtZVxuICAgKiBAcGFyYW0gIHtTdHJpbmdNYXB9IHByb3BlcnRpZXMgRXZlbnQgcHJvcGVydGllc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdHJhY2tFdmVudChldmVudE5hbWU6IHN0cmluZywgcHJvcGVydGllczogU3RyaW5nTWFwKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIEFwcCBDZW50ZXIgQW5hbHl0aWNzIGlzIGVuYWJsZWRcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgQXBwIENlbnRlciBBbmFseXRpY3MgYXQgcnVudGltZVxuICAgKiBAcGFyYW0gIHtib29sZWFufSBzaG91bGRFbmFibGUgU2V0IHZhbHVlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRFbmFibGVkKHNob3VsZEVuYWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19