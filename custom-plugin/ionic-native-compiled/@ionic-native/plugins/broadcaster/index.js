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
var BroadcasterOriginal = /** @class */ (function (_super) {
    __extends(BroadcasterOriginal, _super);
    function BroadcasterOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BroadcasterOriginal.prototype.addEventListener = function (eventName, isGlobal) {
        if (isGlobal === void 0) { isGlobal = false; }
        return cordova(this, "addEventListener", { "observable": true, "clearFunction": "removeEventListener", "clearWithArgs": true }, arguments);
    };
    BroadcasterOriginal.prototype.fireNativeEvent = function (eventName, isGlobalOrEventData, data) { return cordova(this, "fireNativeEvent", {}, arguments); };
    BroadcasterOriginal.pluginName = "Broadcaster";
    BroadcasterOriginal.plugin = "cordova-plugin-broadcaster";
    BroadcasterOriginal.pluginRef = "broadcaster";
    BroadcasterOriginal.repo = "https://github.com/bsorrentino/cordova-broadcaster";
    BroadcasterOriginal.platforms = ["Android", "iOS", "Browser"];
    return BroadcasterOriginal;
}(IonicNativePlugin));
var Broadcaster = new BroadcasterOriginal();
export { Broadcaster };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jyb2FkY2FzdGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBNkNELCtCQUFpQjs7OztJQVloRCxzQ0FBZ0IsYUFBQyxTQUFpQixFQUFFLFFBQWdCO1FBQWhCLHlCQUFBLEVBQUEsZ0JBQWdCOzs7SUFlcEQscUNBQWUsYUFBQyxTQUFpQixFQUFFLG1CQUF3QyxFQUFFLElBQWdCOzs7Ozs7c0JBMUUvRjtFQStDaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBTcGVjaWZpYyBkYXRhIGZvciBBbmRyb2lkIGltcGxlbWVudGF0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQW5kcm9pZERhdGEge1xuICBleHRyYXM6IG9iamVjdDtcbiAgZmxhZ3M6IG51bWJlcjtcbiAgY2F0ZWdvcnk6IHN0cmluZztcbn1cblxuLyoqXG4gKiBQb3NzaWJseSBFdmVudCBEYXRhIHR5cGVzXG4gKi9cbmV4cG9ydCB0eXBlIEV2ZW50RGF0YSA9IG9iamVjdCB8IEFuZHJvaWREYXRhIHwgbnVsbDtcblxuLyoqXG4gKiBAbmFtZSBCcm9hZGNhc3RlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhZGRzIGV4Y2hhbmdpbmcgZXZlbnRzIGJldHdlZW4gbmF0aXZlIGNvZGUgYW5kIHlvdXIgYXBwLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQnJvYWRjYXN0ZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2Jyb2FkY2FzdGVyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBicm9hZGNhc3RlcjogQnJvYWRjYXN0ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIExpc3RlbiB0byBldmVudHMgZnJvbSBOYXRpdmVcbiAqIHRoaXMuYnJvYWRjYXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcignZXZlbnROYW1lJykuc3Vic2NyaWJlKChldmVudCkgPT4gY29uc29sZS5sb2coZXZlbnQpKTtcbiAqXG4gKiAvLyBTZW5kIGV2ZW50IHRvIE5hdGl2ZVxuICogdGhpcy5icm9hZGNhc3Rlci5maXJlTmF0aXZlRXZlbnQoJ2V2ZW50TmFtZScsIHt9KS50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdzdWNjZXNzJykpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Jyb2FkY2FzdGVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYnJvYWRjYXN0ZXInLFxuICBwbHVnaW5SZWY6ICdicm9hZGNhc3RlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYnNvcnJlbnRpbm8vY29yZG92YS1icm9hZGNhc3RlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdCcm93c2VyJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJyb2FkY2FzdGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBsaXN0ZW4gdG8gYW4gZXZlbnQgc2VudCBmcm9tIHRoZSBuYXRpdmUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNHbG9iYWwgVmFsaWQgb25seSBmb3IgQW5kcm9pZC4gSXQgYWxsb3dzIHRvIGxpc3RlbiBmb3IgZ2xvYmFsIG1lc3NhZ2VzKGkuZS4gaW50ZW50cylcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgdG8gd2F0Y2ggd2hlbiBhbiBldmVudCBpcyByZWNlaXZlZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3JlbW92ZUV2ZW50TGlzdGVuZXInLFxuICAgIGNsZWFyV2l0aEFyZ3M6IHRydWUsXG4gIH0pXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcsIGlzR2xvYmFsID0gZmFsc2UpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHNlbmRzIGRhdGEgdG8gdGhlIG5hdGl2ZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0dsb2JhbE9yRXZlbnREYXRhIG1lYW5zIHRoYXQgbWVzc2FnZSBpcyBnbG9iYWwgKHZhbGlkIG9ubHkgb24gQW5kcm9pZClcbiAgICogQHBhcmFtIHtBbmRyb2lkRGF0YX0gaXNHbG9iYWxPckV2ZW50RGF0YSBhbGxvd3MgdG8gc3BlY2lmeSAnZmxhZ3NgIGFuZCAnY2F0ZWdvcnknICh2YWxpZCBvbmx5IG9uIEFuZHJvaWQpXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBpc0dsb2JhbE9yRXZlbnREYXRhIGFsbG93cyB0byBzcGVjaWZ5IGEgZ2VuZXJpYyBvYmplY3QgY29udGFpbmluZyBjdXN0b20gZXZlbnQgZGF0YSAoYWxsIHBsYXRmb3JtKVxuICAgKiBAcGFyYW0ge0FuZHJvaWREYXRhfSBbZGF0YV0gaWYgaXNHbG9iYWwgaXMgc2V0LCBhbGxvd3MgdG8gc3BlY2lmeSAnZmxhZ3NgIGFuZCAnY2F0ZWdvcnknIGlmIGlzR2xvYmFsIGlzIHNldCAodmFsaWQgb25seSBvbiBBbmRyb2lkKVxuICAgKiBAcGFyYW0ge29iamVjdH0gW2RhdGFdIGlmIGlzR2xvYmFsIGlzIHNldCwgYWxsb3dzIHRvIHNwZWNpZnkgYSBnZW5lcmljIG9iamVjdCBjb250YWluaW5nIGN1c3RvbSBldmVudCBkYXRhIChhbGwgcGxhdGZvcm0pXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGFuIGV2ZW50IGlzIHN1Y2Nlc3NmdWxseSBmaXJlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBmaXJlTmF0aXZlRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIGlzR2xvYmFsT3JFdmVudERhdGE6IGJvb2xlYW4gfCBFdmVudERhdGEsIGRhdGE/OiBFdmVudERhdGEpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19