import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var JAnalytics = /** @class */ (function (_super) {
    __extends(JAnalytics, _super);
    function JAnalytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JAnalytics.prototype.init = function () { return cordova(this, "init", {}, arguments); };
    JAnalytics.prototype.initCrashHandler = function () { return cordova(this, "initCrashHandler", {}, arguments); };
    JAnalytics.prototype.stopCrashHandler = function () { return cordova(this, "stopCrashHandler", {}, arguments); };
    JAnalytics.prototype.onPageStart = function (params) { return cordova(this, "onPageStart", {}, arguments); };
    JAnalytics.prototype.onPageEnd = function (params) { return cordova(this, "onPageEnd", {}, arguments); };
    JAnalytics.prototype.addCountEvent = function (params) { return cordova(this, "addCountEvent", {}, arguments); };
    JAnalytics.prototype.addCalculateEvent = function (params) { return cordova(this, "addCalculateEvent", {}, arguments); };
    JAnalytics.prototype.addLoginEvent = function (params) { return cordova(this, "addLoginEvent", {}, arguments); };
    JAnalytics.prototype.addRegisterEvent = function (params) { return cordova(this, "addRegisterEvent", {}, arguments); };
    JAnalytics.prototype.addBrowseEvent = function (params) { return cordova(this, "addBrowseEvent", {}, arguments); };
    JAnalytics.prototype.addPurchaseEvent = function (params) { return cordova(this, "addPurchaseEvent", {}, arguments); };
    JAnalytics.pluginName = "JAnalytics";
    JAnalytics.plugin = "cordova-plugin-janalytics";
    JAnalytics.pluginRef = "JAnalytics";
    JAnalytics.repo = "https://github.com/jpush/cordova-plugin-janalytics";
    JAnalytics.install = "ionic cordova plugin add cordova-plugin-janalytics --variable APP_KEY=YOUR_APP_KEY";
    JAnalytics.installVariables = ["APP_KEY"];
    JAnalytics.platforms = ["Android", "iOS"];
    JAnalytics.decorators = [
        { type: Injectable }
    ];
    return JAnalytics;
}(IonicNativePlugin));
export { JAnalytics };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2phbmFseXRpY3Mvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBaUN4Qyw4QkFBaUI7Ozs7SUFNL0MseUJBQUk7SUFLSixxQ0FBZ0I7SUFLaEIscUNBQWdCO0lBS2hCLGdDQUFXLGFBQUMsTUFBVztJQUt2Qiw4QkFBUyxhQUFDLE1BQVc7SUFLckIsa0NBQWEsYUFBQyxNQUFXO0lBS3pCLHNDQUFpQixhQUFDLE1BQVc7SUFLN0Isa0NBQWEsYUFBQyxNQUFXO0lBS3pCLHFDQUFnQixhQUFDLE1BQVc7SUFLNUIsbUNBQWMsYUFBQyxNQUFXO0lBSzFCLHFDQUFnQixhQUFDLE1BQVc7Ozs7Ozs7OztnQkF6RDdCLFVBQVU7O3FCQWpDWDtFQWtDZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBqQW5hbHl0aWNzXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBKQW5hbHl0aWNzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9KQW5hbHl0aWNzL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgakFuYWx5dGljczogSkFuYWx5dGljcykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuakFuYWx5dGljcy5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0pBbmFseXRpY3MnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1qYW5hbHl0aWNzJyxcbiAgcGx1Z2luUmVmOiAnSkFuYWx5dGljcycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vanB1c2gvY29yZG92YS1wbHVnaW4tamFuYWx5dGljcycsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tamFuYWx5dGljcyAtLXZhcmlhYmxlIEFQUF9LRVk9WU9VUl9BUFBfS0VZJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBUFBfS0VZJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKQW5hbHl0aWNzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBkb2VzIHNvbWV0aGluZ1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbml0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBpbml0Q3Jhc2hIYW5kbGVyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBzdG9wQ3Jhc2hIYW5kbGVyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBvblBhZ2VTdGFydChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBvblBhZ2VFbmQocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgYWRkQ291bnRFdmVudChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBhZGRDYWxjdWxhdGVFdmVudChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBhZGRMb2dpbkV2ZW50KHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGFkZFJlZ2lzdGVyRXZlbnQocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgYWRkQnJvd3NlRXZlbnQocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgYWRkUHVyY2hhc2VFdmVudChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=