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
import { Observable } from 'rxjs';
var AppPreferencesOriginal = /** @class */ (function (_super) {
    __extends(AppPreferencesOriginal, _super);
    function AppPreferencesOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppPreferencesOriginal.prototype.fetch = function (dict, key) { return cordova(this, "fetch", { "callbackOrder": "reverse" }, arguments); };
    AppPreferencesOriginal.prototype.store = function (dict, key, value) { return cordova(this, "store", { "callbackOrder": "reverse" }, arguments); };
    AppPreferencesOriginal.prototype.remove = function (dict, key) { return cordova(this, "remove", { "callbackOrder": "reverse" }, arguments); };
    AppPreferencesOriginal.prototype.clearAll = function () { return cordova(this, "clearAll", { "callbackOrder": "reverse" }, arguments); };
    AppPreferencesOriginal.prototype.show = function () { return cordova(this, "show", { "callbackOrder": "reverse" }, arguments); };
    AppPreferencesOriginal.prototype.watch = function (subscribe) { return cordova(this, "watch", { "observable": true }, arguments); };
    AppPreferencesOriginal.prototype.suite = function (suiteName) { return cordova(this, "suite", { "platforms": ["Android"], "sync": true }, arguments); };
    AppPreferencesOriginal.prototype.iosSuite = function (suiteName) { return cordova(this, "iosSuite", { "platforms": ["iOS"], "sync": true }, arguments); };
    AppPreferencesOriginal.prototype.cloudSync = function () { return cordova(this, "cloudSync", { "platforms": ["iOS", "Windows", "Windows Phone 8"] }, arguments); };
    AppPreferencesOriginal.prototype.defaults = function () { return cordova(this, "defaults", { "platforms": ["iOS", "Windows", "Windows Phone 8"] }, arguments); };
    AppPreferencesOriginal.pluginName = "AppPreferences";
    AppPreferencesOriginal.plugin = "cordova-plugin-app-preferences";
    AppPreferencesOriginal.pluginRef = "plugins.appPreferences";
    AppPreferencesOriginal.repo = "https://github.com/apla/me.apla.cordova.app-preferences";
    AppPreferencesOriginal.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "macOS", "Windows 8", "Windows Phone"];
    return AppPreferencesOriginal;
}(IonicNativePlugin));
var AppPreferences = new AppPreferencesOriginal();
export { AppPreferences };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1wcmVmZXJlbmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTZCRSxrQ0FBaUI7Ozs7SUFXbkQsOEJBQUssYUFBQyxJQUFZLEVBQUUsR0FBWTtJQWVoQyw4QkFBSyxhQUFDLElBQVksRUFBRSxHQUFXLEVBQUUsS0FBVztJQWM1QywrQkFBTSxhQUFDLElBQVksRUFBRSxHQUFZO0lBWWpDLGlDQUFRO0lBWVIsNkJBQUk7SUFhSiw4QkFBSyxhQUFDLFNBQWtCO0lBZXhCLDhCQUFLLGFBQUMsU0FBaUI7SUFRdkIsaUNBQVEsYUFBQyxTQUFpQjtJQVkxQixrQ0FBUztJQVlULGlDQUFROzs7Ozs7eUJBMUpWO0VBOEJvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEFwcCBQcmVmZXJlbmNlc1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHJlYWQgYW5kIHdyaXRlIGFwcCBwcmVmZXJlbmNlc1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQXBwUHJlZmVyZW5jZXMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FwcC1wcmVmZXJlbmNlcy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwUHJlZmVyZW5jZXM6IEFwcFByZWZlcmVuY2VzKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmFwcFByZWZlcmVuY2VzLmZldGNoKCdrZXknKS50aGVuKChyZXMpID0+IHsgY29uc29sZS5sb2cocmVzKTsgfSk7XG4gKlxuICogYGBgXG4gKlxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FwcFByZWZlcmVuY2VzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXBwLXByZWZlcmVuY2VzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5hcHBQcmVmZXJlbmNlcycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBsYS9tZS5hcGxhLmNvcmRvdmEuYXBwLXByZWZlcmVuY2VzJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQmxhY2tCZXJyeSAxMCcsICdCcm93c2VyJywgJ2lPUycsICdtYWNPUycsICdXaW5kb3dzIDgnLCAnV2luZG93cyBQaG9uZSddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBQcmVmZXJlbmNlcyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEdldCBhIHByZWZlcmVuY2UgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpY3QgRGljdGlvbmFyeSBmb3Iga2V5IChPUFRJT05BTClcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgZmV0Y2goZGljdDogc3RyaW5nLCBrZXk/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBwcmVmZXJlbmNlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaWN0IERpY3Rpb25hcnkgZm9yIGtleSAoT1BUSU9OQUwpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5XG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZSBWYWx1ZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBzdG9yZShkaWN0OiBzdHJpbmcsIGtleTogc3RyaW5nLCB2YWx1ZT86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB2YWx1ZSBmcm9tIHByZWZlcmVuY2VzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaWN0IERpY3Rpb25hcnkgZm9yIGtleSAoT1BUSU9OQUwpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIHJlbW92ZShkaWN0OiBzdHJpbmcsIGtleT86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHByZWZlcmVuY2VzXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGNsZWFyQWxsKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgbmF0aXZlIHByZWZlcmVuY2VzIGludGVyZmFjZVxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBzaG93KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgbmF0aXZlIHByZWZlcmVuY2VzIGludGVyZmFjZVxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHN1YnNjcmliZSB0cnVlIHZhbHVlIHRvIHN1YnNjcmliZSwgZmFsc2UgLSB1bnN1YnNjcmliZVxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIHdhdGNoKHN1YnNjcmliZTogYm9vbGVhbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBuYW1lZCBjb25maWd1cmF0aW9uIGNvbnRleHRcbiAgICogSW4gaU9TIHlvdSdsbCBnZXQgYSBzdWl0ZSBjb25maWd1cmF0aW9uLCBvbiBBbmRyb2lkIOKAlCBuYW1lZCBmaWxlXG4gICAqIFN1cHBvcnRzOiBBbmRyb2lkLCBpT1NcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN1aXRlTmFtZSBzdWl0ZSBuYW1lXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEN1c3RvbSBvYmplY3QsIGJvdW5kIHRvIHRoYXQgc3VpdGVcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHN1aXRlKHN1aXRlTmFtZTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGlvc1N1aXRlKHN1aXRlTmFtZTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGNsb3VkIHN5bmNocm9uaXplZCBjb25maWd1cmF0aW9uIGNvbnRleHRcbiAgICogQ3VycmVudGx5IHN1cHBvcnRzIFdpbmRvd3MgYW5kIGlPUy9tYWNPU1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBDdXN0b20gb2JqZWN0LCBib3VuZCB0byB0aGF0IHN1aXRlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUgOCddLFxuICB9KVxuICBjbG91ZFN5bmMoKTogT2JqZWN0IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGRlZmF1bHQgY29uZmlndXJhdGlvbiBjb250ZXh0XG4gICAqIEN1cnJlbnRseSBzdXBwb3J0cyBXaW5kb3dzIGFuZCBpT1MvbWFjT1NcbiAgICogQHJldHVybnMge09iamVjdH0gQ3VzdG9tIE9iamVjdCwgYm91bmQgdG8gdGhhdCBzdWl0ZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnLCAnV2luZG93cycsICdXaW5kb3dzIFBob25lIDgnXSxcbiAgfSlcbiAgZGVmYXVsdHMoKTogT2JqZWN0IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==