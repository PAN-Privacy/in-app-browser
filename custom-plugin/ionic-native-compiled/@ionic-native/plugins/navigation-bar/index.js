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
var NavigationBarOriginal = /** @class */ (function (_super) {
    __extends(NavigationBarOriginal, _super);
    function NavigationBarOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationBarOriginal.prototype.setUp = function (autohide) { return cordova(this, "setUp", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    NavigationBarOriginal.prototype.hideNavigationBar = function () { return cordova(this, "hideNavigationBar", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    NavigationBarOriginal.pluginName = "NavigationBar";
    NavigationBarOriginal.plugin = "cordova-plugin-navigationbar";
    NavigationBarOriginal.pluginRef = "navigationbar";
    NavigationBarOriginal.repo = "https://github.com/cranberrygame/cordova-plugin-navigationbar";
    NavigationBarOriginal.platforms = ["Android"];
    return NavigationBarOriginal;
}(IonicNativePlugin));
var NavigationBar = new NavigationBarOriginal();
export { NavigationBar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdmlnYXRpb24tYmFyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTRCckMsaUNBQWlCOzs7O0lBV2xELDZCQUFLLGFBQUMsUUFBa0I7SUFheEIseUNBQWlCOzs7Ozs7d0JBckRuQjtFQTZCbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAYmV0YVxuICogQG5hbWUgTmF2aWdhdGlvbiBCYXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIE5hdmlnYXRpb25CYXIgcGx1Z2luIGFsbG93cyB5b3UgdG8gaGlkZSBhbmQgYXV0byBoaWRlIHRoZSBhbmRyb2lkIG5hdmlnYXRpb24gYmFyLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTmF2aWdhdGlvbkJhciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmF2aWdhdGlvbi1iYXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdmlnYXRpb25CYXI6IE5hdmlnYXRpb25CYXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGxldCBhdXRvSGlkZTogYm9vbGVhbiA9IHRydWU7XG4gKiB0aGlzLm5hdmlnYXRpb25CYXIuc2V0VXAoYXV0b0hpZGUpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTmF2aWdhdGlvbkJhcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW5hdmlnYXRpb25iYXInLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0aW9uYmFyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jcmFuYmVycnlnYW1lL2NvcmRvdmEtcGx1Z2luLW5hdmlnYXRpb25iYXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQmFyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogaGlkZSBhdXRvbWF0aWNhbGx5IChvciBub3QpIHRoZSBuYXZpZ2F0aW9uIGJhci5cbiAgICogQHBhcmFtIGF1dG9oaWRlIHtib29sZWFufVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ29iamVjdCcsXG4gICAgc3VjY2Vzc05hbWU6ICdzdWNjZXNzJyxcbiAgICBlcnJvck5hbWU6ICdmYWlsdXJlJyxcbiAgfSlcbiAgc2V0VXAoYXV0b2hpZGU/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSGlkZSB0aGUgbmF2aWdhdGlvbiBiYXIuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3MnLFxuICAgIGVycm9yTmFtZTogJ2ZhaWx1cmUnLFxuICB9KVxuICBoaWRlTmF2aWdhdGlvbkJhcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19