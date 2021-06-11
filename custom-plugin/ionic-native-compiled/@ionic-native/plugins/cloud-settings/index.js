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
var CloudSettingsOriginal = /** @class */ (function (_super) {
    __extends(CloudSettingsOriginal, _super);
    function CloudSettingsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloudSettingsOriginal.prototype.exists = function () { return cordova(this, "exists", {}, arguments); };
    CloudSettingsOriginal.prototype.save = function (settings, overwrite) { return cordova(this, "save", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CloudSettingsOriginal.prototype.load = function () { return cordova(this, "load", {}, arguments); };
    CloudSettingsOriginal.prototype.onRestore = function (handler) { return cordova(this, "onRestore", { "sync": true }, arguments); };
    CloudSettingsOriginal.prototype.enableDebug = function () { return cordova(this, "enableDebug", {}, arguments); };
    CloudSettingsOriginal.pluginName = "CloudSettings";
    CloudSettingsOriginal.plugin = "cordova-plugin-cloud-settings";
    CloudSettingsOriginal.pluginRef = "cordova.plugin.cloudsettings";
    CloudSettingsOriginal.repo = "https://github.com/dpa99c/cordova-plugin-cloud-settings";
    CloudSettingsOriginal.install = "ionic cordova plugin add cordova-plugin-cloud-settings --variable ANDROID_BACKUP_SERVICE_KEY=myapikey";
    CloudSettingsOriginal.installVariables = ["ANDROID_BACKUP_SERVICE_KEY"];
    CloudSettingsOriginal.platforms = ["Android", "iOS"];
    return CloudSettingsOriginal;
}(IonicNativePlugin));
var CloudSettings = new CloudSettingsOriginal();
export { CloudSettings };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Nsb3VkLXNldHRpbmdzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXVDckMsaUNBQWlCOzs7O0lBTWxELDhCQUFNO0lBZU4sNEJBQUksYUFBQyxRQUFhLEVBQUUsU0FBbUI7SUFTdkMsNEJBQUk7SUFTSixpQ0FBUyxhQUFDLE9BQWlCO0lBTzNCLG1DQUFXOzs7Ozs7Ozt3QkF0RmI7RUF3Q21DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQ2xvdWQgU2V0dGluZ3NcbiAqIEBkZXNjcmlwdGlvblxuICogU3RvcmVzIGFwcCBzZXR0aW5ncyBpbiBjbG91ZCBzdG9yYWdlIHNvIGlmIHRoZSB1c2VyIHJlLWluc3RhbGxzIHRoZSBhcHAgb3IgaW5zdGFsbHMgaXQgb24gYSBkaWZmZXJlbnQgZGV2aWNlLCB0aGUgc2V0dGluZ3Mgd2lsbCBiZSByZXN0b3JlZCBhbmQgYXZhaWxhYmxlIGluIHRoZSBuZXcgaW5zdGFsbGF0aW9uLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2xvdWRTZXR0aW5ncyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2xvdWQtc2V0dGluZ3Mvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjbG91ZFNldHRpbmdzOiBDbG91ZFNldHRpbmdzKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmNsb3VkU2V0dGluZ3MuZXhpc3RzKClcbiAqICAgLnRoZW4oKGV4aXN0czogYm9vbGVhbikgPT4gY29uc29sZS5sb2coXCJTYXZlZCBzZXR0aW5ncyBleGlzdDogXCIgKyBleGlzdHMpIClcbiAqXG4gKiB0aGlzLmNsb3VkU2V0dGluZ3MubG9hZCgpXG4gKiAgIC50aGVuKChzZXR0aW5nczogYW55KSA9PiB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3MpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIHRoaXMuY2xvdWRTZXR0aW5ncy5zYXZlKHRoaXMuc2V0dGluZ3MpXG4gKiAgIC50aGVuKChzYXZlZFNldHRpbmdzOiBhbnkpID0+IGNvbnNvbGUubG9nKFwiU2F2ZWQgc2V0dGluZ3M6IFwiICsgSlNPTi5zdHJpbmdpZnkoc2F2ZWRTZXR0aW5ncykpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDbG91ZFNldHRpbmdzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2xvdWQtc2V0dGluZ3MnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbi5jbG91ZHNldHRpbmdzJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kcGE5OWMvY29yZG92YS1wbHVnaW4tY2xvdWQtc2V0dGluZ3MnLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWNsb3VkLXNldHRpbmdzIC0tdmFyaWFibGUgQU5EUk9JRF9CQUNLVVBfU0VSVklDRV9LRVk9bXlhcGlrZXknLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0FORFJPSURfQkFDS1VQX1NFUlZJQ0VfS0VZJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbG91ZFNldHRpbmdzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIGFueSBzdG9yZWQgY2xvdWQgc2V0dGluZ3MgY3VycmVudGx5IGV4aXN0IGZvciB0aGUgY3VycmVudCB1c2VyLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBXaWxsIGJlIHBhc3NlZCBhIGJvb2xlYW4gZmxhZyB3aGljaCBpbmRpY2F0ZXMgd2hldGhlciBhbiBzdG9yZSBzZXR0aW5ncyBleGlzdCBmb3IgdGhlIHVzZXIuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGV4aXN0cygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgdGhlIHNldHRpbmdzIHRvIGNsb3VkIGJhY2t1cC5cbiAgICogQHBhcmFtIHtvYmplY3R9IHNldHRpbmdzIC0gYSBKU09OIHN0cnVjdHVyZSByZXByZXNlbnRpbmcgdGhlIHVzZXIgc2V0dGluZ3MgdG8gc2F2ZSB0byBjbG91ZCBiYWNrdXAuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW292ZXJ3cml0ZV0gLSAob3B0aW9uYWwpIGlmIHRydWUsIGV4aXN0aW5nIHNldHRpbmdzIHdpbGwgYmUgcmVwbGFjZWQgcmF0aGVyIHRoYW4gdXBkYXRlZC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqIElmIGZhbHNlLCBleGlzdGluZyBzZXR0aW5ncyB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZSBuZXcgc2V0dGluZ3MgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gV2lsbCBiZSBwYXNzZWQgYSBzaW5nbGUgb2JqZWN0IGFyZ3VtZW50IHdoaWNoIGNvbnRhaW5zIHRoZSBzYXZlZCBzZXR0aW5ncyBhcyBhIEpTT04gb2JqZWN0LlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyLFxuICB9KVxuICBzYXZlKHNldHRpbmdzOiBhbnksIG92ZXJ3cml0ZT86IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyB0aGUgY3VycmVudCBzZXR0aW5ncy5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBXaWxsIGJlIHBhc3NlZCBhIHNpbmdsZSBvYmplY3QgYXJndW1lbnQgd2hpY2ggY29udGFpbnMgdGhlIHNhdmVkIHNldHRpbmdzIGFzIGEgSlNPTiBvYmplY3QuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvYWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaWYvd2hlbiBzZXR0aW5ncyBvbiB0aGUgZGV2aWNlIGhhdmUgYmVlbiB1cGRhdGVkIGZyb20gdGhlIGNsb3VkLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIC0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gaW52b2tlIHdoZW4gZGV2aWNlIHNldHRpbmdzIGhhdmUgYmVlbiB1cGRhdGVkIGZyb20gdGhlIGNsb3VkLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIG9uUmVzdG9yZShoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogT3V0cHV0cyB2ZXJib3NlIGxvZyBtZXNzYWdlcyBmcm9tIHRoZSBuYXRpdmUgcGx1Z2luIGNvbXBvbmVudHMgdG8gdGhlIEpTIGNvbnNvbGUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVuYWJsZURlYnVnKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19