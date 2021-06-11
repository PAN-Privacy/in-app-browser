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
var AppUpdateOriginal = /** @class */ (function (_super) {
    __extends(AppUpdateOriginal, _super);
    function AppUpdateOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppUpdateOriginal.prototype.checkAppUpdate = function (updateUrl, options) { return cordova(this, "checkAppUpdate", { "callbackOrder": "reverse" }, arguments); };
    AppUpdateOriginal.pluginName = "AppUpdate";
    AppUpdateOriginal.plugin = "cordova-plugin-app-update";
    AppUpdateOriginal.pluginRef = "AppUpdate";
    AppUpdateOriginal.repo = "https://github.com/vaenow/cordova-plugin-app-update";
    AppUpdateOriginal.platforms = ["Android"];
    return AppUpdateOriginal;
}(IonicNativePlugin));
var AppUpdate = new AppUpdateOriginal();
export { AppUpdate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC11cGRhdGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBbUR6Qyw2QkFBaUI7Ozs7SUFVOUMsa0NBQWMsYUFBQyxTQUFpQixFQUFFLE9BQTBCOzs7Ozs7b0JBOUQ5RDtFQW9EK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBcHBVcGRhdGVPcHRpb25zIHtcbiAgYXV0aFR5cGU/OiBzdHJpbmc7XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xuICBwYXNzd29yZD86IHN0cmluZztcbiAgc2tpcFByb21wdERpYWxvZz86IGJvb2xlYW47XG4gIHNraXBQcm9ncmVzc0RpYWxvZz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgQXBwIFVwZGF0ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNlbGYtdXBkYXRlIGZvciBhbmRyb2lkXG4gKlxuICogQHVzYWdlXG4gKlxuICogWW91IHNob3VsZCBmaXJzdCBob3N0IGFuIFhNTCBmaWxlIG9uIHlvdXIgc2VydmVyIHdpdGggdGhlIGZvbGxvd2luZyBkYXRhIGluIGl0OlxuICogYGBgeG1sXG4gKiA8dXBkYXRlPlxuICogICAgIDx2ZXJzaW9uPjMwMjA0ODwvdmVyc2lvbj5cbiAqICAgICA8bmFtZT5BUEsgTmFtZTwvbmFtZT5cbiAqICAgICA8dXJsPmh0dHBzOi8veW91ci1yZW1vdGUtYXBpLmNvbS9Zb3VyQXBwLmFwazwvdXJsPlxuICogPC91cGRhdGU+XG4gKiBgYGBcbiAqXG4gKiBUaGVuIHVzZSB0aGUgZm9sbG93aW5nIGNvZGU6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQXBwVXBkYXRlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hcHAtdXBkYXRlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhcHBVcGRhdGU6IEFwcFVwZGF0ZSkge1xuICpcbiAqICAgIGNvbnN0IHVwZGF0ZVVybCA9ICdodHRwczovL3lvdXItcmVtb3RlLWFwaS5jb20vdXBkYXRlLnhtbCc7XG4gKiAgICB0aGlzLmFwcFVwZGF0ZS5jaGVja0FwcFVwZGF0ZSh1cGRhdGVVcmwpLnRoZW4oKCkgPT4geyBjb25zb2xlLmxvZygnVXBkYXRlIGF2YWlsYWJsZScpIH0pO1xuICpcbiAqIH1cbiAqIGBgYFxuICpcbiAqIFRoZSBwbHVnaW4gd2lsbCBjb21wYXJlIHRoZSBhcHAgdmVyc2lvbiBhbmQgdXBkYXRlIGl0IGF1dG9tYXRpY2FsbHkgaWYgdGhlIEFQSSBoYXMgYSBuZXdlciB2ZXJzaW9uIHRvIGluc3RhbGwuXG4gKiBAaW50ZXJmYWNlc1xuICogQXBwVXBkYXRlT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FwcFVwZGF0ZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcC11cGRhdGUnLFxuICBwbHVnaW5SZWY6ICdBcHBVcGRhdGUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZhZW5vdy9jb3Jkb3ZhLXBsdWdpbi1hcHAtdXBkYXRlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwVXBkYXRlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2hlY2sgYW5kIHVwZGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXBkYXRlVXJsIHVwZGF0ZSBhcGkgdXJsXG4gICAqIEBwYXJhbSB7QXBwVXBkYXRlT3B0aW9uc30gW29wdGlvbnNdIG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGNoZWNrQXBwVXBkYXRlKHVwZGF0ZVVybDogc3RyaW5nLCBvcHRpb25zPzogQXBwVXBkYXRlT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=