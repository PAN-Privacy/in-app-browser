import { __extends } from "tslib";
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
var AppPreferences = /** @class */ (function (_super) {
    __extends(AppPreferences, _super);
    function AppPreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppPreferences.prototype.fetch = function (dict, key) { return cordova(this, "fetch", { "callbackOrder": "reverse" }, arguments); };
    AppPreferences.prototype.store = function (dict, key, value) { return cordova(this, "store", { "callbackOrder": "reverse" }, arguments); };
    AppPreferences.prototype.remove = function (dict, key) { return cordova(this, "remove", { "callbackOrder": "reverse" }, arguments); };
    AppPreferences.prototype.clearAll = function () { return cordova(this, "clearAll", { "callbackOrder": "reverse" }, arguments); };
    AppPreferences.prototype.show = function () { return cordova(this, "show", { "callbackOrder": "reverse" }, arguments); };
    AppPreferences.prototype.watch = function (subscribe) { return cordova(this, "watch", { "observable": true }, arguments); };
    AppPreferences.prototype.suite = function (suiteName) { return cordova(this, "suite", { "platforms": ["Android"], "sync": true }, arguments); };
    AppPreferences.prototype.iosSuite = function (suiteName) { return cordova(this, "iosSuite", { "platforms": ["iOS"], "sync": true }, arguments); };
    AppPreferences.prototype.cloudSync = function () { return cordova(this, "cloudSync", { "platforms": ["iOS", "Windows", "Windows Phone 8"] }, arguments); };
    AppPreferences.prototype.defaults = function () { return cordova(this, "defaults", { "platforms": ["iOS", "Windows", "Windows Phone 8"] }, arguments); };
    AppPreferences.pluginName = "AppPreferences";
    AppPreferences.plugin = "cordova-plugin-app-preferences";
    AppPreferences.pluginRef = "plugins.appPreferences";
    AppPreferences.repo = "https://github.com/apla/me.apla.cordova.app-preferences";
    AppPreferences.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "macOS", "Windows 8", "Windows Phone"];
    AppPreferences.decorators = [
        { type: Injectable }
    ];
    return AppPreferences;
}(IonicNativePlugin));
export { AppPreferences };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1wcmVmZXJlbmNlcy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQTRCUCxrQ0FBaUI7Ozs7SUFXbkQsOEJBQUssYUFBQyxJQUFZLEVBQUUsR0FBWTtJQWVoQyw4QkFBSyxhQUFDLElBQVksRUFBRSxHQUFXLEVBQUUsS0FBVztJQWM1QywrQkFBTSxhQUFDLElBQVksRUFBRSxHQUFZO0lBWWpDLGlDQUFRO0lBWVIsNkJBQUk7SUFhSiw4QkFBSyxhQUFDLFNBQWtCO0lBZXhCLDhCQUFLLGFBQUMsU0FBaUI7SUFRdkIsaUNBQVEsYUFBQyxTQUFpQjtJQVkxQixrQ0FBUztJQVlULGlDQUFROzs7Ozs7O2dCQTdIVCxVQUFVOzt5QkE3Qlg7RUE4Qm9DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQXBwIFByZWZlcmVuY2VzXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gcmVhZCBhbmQgd3JpdGUgYXBwIHByZWZlcmVuY2VzXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBcHBQcmVmZXJlbmNlcyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYXBwLXByZWZlcmVuY2VzL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhcHBQcmVmZXJlbmNlczogQXBwUHJlZmVyZW5jZXMpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuYXBwUHJlZmVyZW5jZXMuZmV0Y2goJ2tleScpLnRoZW4oKHJlcykgPT4geyBjb25zb2xlLmxvZyhyZXMpOyB9KTtcbiAqXG4gKiBgYGBcbiAqXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQXBwUHJlZmVyZW5jZXMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHAtcHJlZmVyZW5jZXMnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmFwcFByZWZlcmVuY2VzJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGxhL21lLmFwbGEuY29yZG92YS5hcHAtcHJlZmVyZW5jZXMnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCbGFja0JlcnJ5IDEwJywgJ0Jyb3dzZXInLCAnaU9TJywgJ21hY09TJywgJ1dpbmRvd3MgOCcsICdXaW5kb3dzIFBob25lJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcFByZWZlcmVuY2VzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogR2V0IGEgcHJlZmVyZW5jZSB2YWx1ZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGljdCBEaWN0aW9uYXJ5IGZvciBrZXkgKE9QVElPTkFMKVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEtleVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBmZXRjaChkaWN0OiBzdHJpbmcsIGtleT86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIHByZWZlcmVuY2UgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpY3QgRGljdGlvbmFyeSBmb3Iga2V5IChPUFRJT05BTClcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXlcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlIFZhbHVlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIHN0b3JlKGRpY3Q6IHN0cmluZywga2V5OiBzdHJpbmcsIHZhbHVlPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHZhbHVlIGZyb20gcHJlZmVyZW5jZXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpY3QgRGljdGlvbmFyeSBmb3Iga2V5IChPUFRJT05BTClcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgcmVtb3ZlKGRpY3Q6IHN0cmluZywga2V5Pzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgcHJlZmVyZW5jZXNcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgY2xlYXJBbGwoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBuYXRpdmUgcHJlZmVyZW5jZXMgaW50ZXJmYWNlXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIHNob3coKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBuYXRpdmUgcHJlZmVyZW5jZXMgaW50ZXJmYWNlXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3Vic2NyaWJlIHRydWUgdmFsdWUgdG8gc3Vic2NyaWJlLCBmYWxzZSAtIHVuc3Vic2NyaWJlXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgfSlcbiAgd2F0Y2goc3Vic2NyaWJlOiBib29sZWFuKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIG5hbWVkIGNvbmZpZ3VyYXRpb24gY29udGV4dFxuICAgKiBJbiBpT1MgeW91J2xsIGdldCBhIHN1aXRlIGNvbmZpZ3VyYXRpb24sIG9uIEFuZHJvaWQg4oCUIG5hbWVkIGZpbGVcbiAgICogU3VwcG9ydHM6IEFuZHJvaWQsIGlPU1xuICAgKiBAcGFyYW0ge3N0cmluZ30gc3VpdGVOYW1lIHN1aXRlIG5hbWVcbiAgICogQHJldHVybnMge09iamVjdH0gQ3VzdG9tIG9iamVjdCwgYm91bmQgdG8gdGhhdCBzdWl0ZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc3VpdGUoc3VpdGVOYW1lOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgaW9zU3VpdGUoc3VpdGVOYW1lOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gY2xvdWQgc3luY2hyb25pemVkIGNvbmZpZ3VyYXRpb24gY29udGV4dFxuICAgKiBDdXJyZW50bHkgc3VwcG9ydHMgV2luZG93cyBhbmQgaU9TL21hY09TXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEN1c3RvbSBvYmplY3QsIGJvdW5kIHRvIHRoYXQgc3VpdGVcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSA4J10sXG4gIH0pXG4gIGNsb3VkU3luYygpOiBPYmplY3Qge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gZGVmYXVsdCBjb25maWd1cmF0aW9uIGNvbnRleHRcbiAgICogQ3VycmVudGx5IHN1cHBvcnRzIFdpbmRvd3MgYW5kIGlPUy9tYWNPU1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBDdXN0b20gT2JqZWN0LCBib3VuZCB0byB0aGF0IHN1aXRlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUgOCddLFxuICB9KVxuICBkZWZhdWx0cygpOiBPYmplY3Qge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19