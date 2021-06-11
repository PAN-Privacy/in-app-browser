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
var AppCenterCrashesOriginal = /** @class */ (function (_super) {
    __extends(AppCenterCrashesOriginal, _super);
    function AppCenterCrashesOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterCrashesOriginal.prototype.generateTestCrash = function () { return cordova(this, "generateTestCrash", {}, arguments); };
    AppCenterCrashesOriginal.prototype.hasCrashedInLastSession = function () { return cordova(this, "hasCrashedInLastSession", {}, arguments); };
    AppCenterCrashesOriginal.prototype.lastSessionCrashReport = function () { return cordova(this, "lastSessionCrashReport", {}, arguments); };
    AppCenterCrashesOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AppCenterCrashesOriginal.prototype.setEnabled = function (shouldEnable) { return cordova(this, "setEnabled", {}, arguments); };
    AppCenterCrashesOriginal.pluginName = "AppCenterCrashes";
    AppCenterCrashesOriginal.plugin = "cordova-plugin-appcenter-crashes";
    AppCenterCrashesOriginal.pluginRef = "AppCenter.Crashes";
    AppCenterCrashesOriginal.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-crashes";
    AppCenterCrashesOriginal.platforms = ["Android", "iOS"];
    return AppCenterCrashesOriginal;
}(IonicNativePlugin));
var AppCenterCrashes = new AppCenterCrashesOriginal();
export { AppCenterCrashes };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1jZW50ZXItY3Jhc2hlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFtRWxDLG9DQUFpQjs7OztJQU9yRCw0Q0FBaUI7SUFPakIsa0RBQXVCO0lBU3ZCLGlEQUFzQjtJQVN0QixvQ0FBUztJQVVULHFDQUFVLGFBQUMsWUFBcUI7Ozs7OzsyQkE5R2xDO0VBb0VzQyxpQkFBaUI7U0FBMUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwQ2VudGVyQ3Jhc2hSZXBvcnQge1xuICBpZDogc3RyaW5nO1xuICBkZXZpY2U6IEFwcENlbnRlckNyYXNoUmVwb3J0RGV2aWNlO1xuICBhcHBTdGFydFRpbWU6IG51bWJlcjtcbiAgYXBwRXJyb3JUaW1lOiBudW1iZXI7XG4gIHNpZ25hbDogc3RyaW5nO1xuICBhcHBQcm9jZXNzSWRlbnRpZmllcjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcENlbnRlckNyYXNoUmVwb3J0RGV2aWNlIHtcbiAgb2VtX25hbWU6IHN0cmluZztcbiAgb3NfbmFtZTogc3RyaW5nO1xuICBhcHBfdmVyc2lvbjogc3RyaW5nO1xuICB0aW1lX3pvbmVfb2Zmc2V0OiBudW1iZXI7XG4gIGNhcnJpZXJfbmFtZTogc3RyaW5nO1xuICBzY3JlZW5fc2l6ZTogc3RyaW5nO1xuICBsb2NhbGU6IHN0cmluZztcbiAgc2RrX3ZlcnNpb246IHN0cmluZztcbiAgY2Fycmllcl9jb3VudHJ5OiBzdHJpbmc7XG4gIG9zX2J1aWxkOiBzdHJpbmc7XG4gIGFwcF9uYW1lc3BhY2U6IHN0cmluZztcbiAgb3NfdmVyc2lvbjogc3RyaW5nO1xuICBzZGtfbmFtZTogc3RyaW5nO1xuICBtb2RlbDogc3RyaW5nO1xuICBhcHBfYnVpbGQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBBcHAgQ2VudGVyIENyYXNoZXNcbiAqIEBkZXNjcmlwdGlvblxuICogQXBwIENlbnRlciBBbmFseXRpY3MgaGVscHMgeW91IHVuZGVyc3RhbmQgdXNlciBiZWhhdmlvciBhbmQgY3VzdG9tZXIgZW5nYWdlbWVudCB0byBpbXByb3ZlIHlvdXIgYXBwLlxuICogVGhlIFNESyBhdXRvbWF0aWNhbGx5IGNhcHR1cmVzIHNlc3Npb24gY291bnQgYW5kIGRldmljZSBwcm9wZXJ0aWVzIGxpa2UgbW9kZWwsIE9TIHZlcnNpb24sIGV0Yy5cbiAqIFlvdSBjYW4gZGVmaW5lIHlvdXIgb3duIGN1c3RvbSBldmVudHMgdG8gbWVhc3VyZSB0aGluZ3MgdGhhdCBtYXR0ZXIgdG8geW91LlxuICogQWxsIHRoZSBpbmZvcm1hdGlvbiBjYXB0dXJlZCBpcyBhdmFpbGFibGUgaW4gdGhlIEFwcCBDZW50ZXIgcG9ydGFsIGZvciB5b3UgdG8gYW5hbHl6ZSB0aGUgZGF0YS5cbiAqXG4gKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2FwcGNlbnRlci9zZGsvY3Jhc2hlcy9jb3Jkb3ZhXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBcHBDZW50ZXJDcmFzaGVzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hcHAtY2VudGVyLWNyYXNoZXMvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBBcHBDZW50ZXJDcmFzaGVzOiBBcHBDZW50ZXJDcmFzaGVzKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLkFwcENlbnRlckNyYXNoZXMuc2V0RW5hYmxlZCh0cnVlKS50aGVuKCgpID0+IHtcbiAqICAgIHRoaXMuQXBwQ2VudGVyQ3Jhc2hlcy5sYXN0U2Vzc2lvbkNyYXNoUmVwb3J0KCkudGhlbihyZXBvcnQgPT4ge1xuICogICAgICAgIGNvbnNvbGUubG9nKCdDcmFzaCByZXBvcnQnLCByZXBvcnQpO1xuICogICAgfSk7XG4gKiB9KTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBBcHBDZW50ZXJDcmFzaFJlcG9ydFxuICogQXBwQ2VudGVyQ3Jhc2hSZXBvcnREZXZpY2VcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBcHBDZW50ZXJDcmFzaGVzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLWNyYXNoZXMnLFxuICBwbHVnaW5SZWY6ICdBcHBDZW50ZXIuQ3Jhc2hlcycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L2FwcGNlbnRlci1zZGstY29yZG92YS90cmVlL21hc3Rlci9jb3Jkb3ZhLXBsdWdpbi1hcHBjZW50ZXItY3Jhc2hlcycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBDZW50ZXJDcmFzaGVzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQXBwIENlbnRlciBDcmFzaGVzIHByb3ZpZGVzIHlvdSB3aXRoIGFuIEFQSSB0byBnZW5lcmF0ZSBhIHRlc3QgY3Jhc2ggZm9yIGVhc3kgdGVzdGluZyBvZiB0aGUgU0RLLlxuICAgKiBUaGlzIEFQSSBjYW4gb25seSBiZSB1c2VkIGluIHRlc3QvYmV0YSBhcHBzIGFuZCB3b24ndCBkbyBhbnl0aGluZyBpbiBwcm9kdWN0aW9uIGFwcHMuXG4gICAqIEByZXR1cm5zIHZvaWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2VuZXJhdGVUZXN0Q3Jhc2goKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBBdCBhbnkgdGltZSBhZnRlciBzdGFydGluZyB0aGUgU0RLLCB5b3UgY2FuIGNoZWNrIGlmIHRoZSBhcHAgY3Jhc2hlZCBpbiB0aGUgcHJldmlvdXMgbGF1bmNoXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoYXNDcmFzaGVkSW5MYXN0U2Vzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGV0YWlscyBhYm91dCB0aGUgbGFzdCBjcmFzaFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcHBDZW50ZXJDcmFzaFJlcG9ydD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxhc3RTZXNzaW9uQ3Jhc2hSZXBvcnQoKTogUHJvbWlzZTxBcHBDZW50ZXJDcmFzaFJlcG9ydD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBBcHAgQ2VudGVyIENyYXNoZXMgaXMgZW5hYmxlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBBcHAgQ2VudGVyIENyYXNoZXMgYXQgcnVudGltZVxuICAgKiBAcGFyYW0gIHtib29sZWFufSBzaG91bGRFbmFibGUgU2V0IHZhbHVlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRFbmFibGVkKHNob3VsZEVuYWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19