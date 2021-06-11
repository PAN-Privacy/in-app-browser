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
var SystemAlertWindowPermissionOriginal = /** @class */ (function (_super) {
    __extends(SystemAlertWindowPermissionOriginal, _super);
    function SystemAlertWindowPermissionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SystemAlertWindowPermissionOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    SystemAlertWindowPermissionOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    SystemAlertWindowPermissionOriginal.prototype.openNotificationSettings = function () { return cordova(this, "openNotificationSettings", {}, arguments); };
    SystemAlertWindowPermissionOriginal.pluginName = "SystemAlertWindowPermission";
    SystemAlertWindowPermissionOriginal.plugin = "cordova-plugin-system-alert-window-permission";
    SystemAlertWindowPermissionOriginal.pluginRef = "window.systemAlertWindowPermission";
    SystemAlertWindowPermissionOriginal.repo = "https://github.com/MaximBelov/cordova-plugin-system-alert-window-permission.git";
    SystemAlertWindowPermissionOriginal.install = "ionic cordova plugin add cordova-plugin-system-alert-window-permission";
    SystemAlertWindowPermissionOriginal.platforms = ["Android"];
    return SystemAlertWindowPermissionOriginal;
}(IonicNativePlugin));
var SystemAlertWindowPermission = new SystemAlertWindowPermissionOriginal();
export { SystemAlertWindowPermission };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N5c3RlbS1hbGVydC13aW5kb3ctcGVybWlzc2lvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFxQ3ZCLCtDQUFpQjs7OztJQU1oRSxtREFBYTtJQVNiLHVEQUFpQjtJQVNqQiw4REFBd0I7Ozs7Ozs7c0NBOUQxQjtFQXNDaUQsaUJBQWlCO1NBQXJELDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFN5c3RlbSBBbGVydCBXaW5kb3cgUGVybWlzc2lvblxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU3lzdGVtQWxlcnRXaW5kb3dQZXJtaXNzaW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zeXN0ZW0tYWxlcnQtd2luZG93LXBlcm1pc3Npb24vbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzeXN0ZW1BbGVydFdpbmRvd1Blcm1pc3Npb246IFN5c3RlbUFsZXJ0V2luZG93UGVybWlzc2lvbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuc3lzdGVtQWxlcnRXaW5kb3dQZXJtaXNzaW9uLmhhc1Blcm1pc3Npb24oKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIHRoaXMuc3lzdGVtQWxlcnRXaW5kb3dQZXJtaXNzaW9uLnJlcXVlc3RQZXJtaXNzaW9uKClcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1N5c3RlbUFsZXJ0V2luZG93UGVybWlzc2lvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXN5c3RlbS1hbGVydC13aW5kb3ctcGVybWlzc2lvbicsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5zeXN0ZW1BbGVydFdpbmRvd1Blcm1pc3Npb24nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL01heGltQmVsb3YvY29yZG92YS1wbHVnaW4tc3lzdGVtLWFsZXJ0LXdpbmRvdy1wZXJtaXNzaW9uLmdpdCcsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tc3lzdGVtLWFsZXJ0LXdpbmRvdy1wZXJtaXNzaW9uJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3lzdGVtQWxlcnRXaW5kb3dQZXJtaXNzaW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2hlY2sgcGVybWlzc2lvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IHJldHVybiAwIHdoZW4gZG9udCBoYXZlIFNZU1RFTV9BTEVSVF9XSU5ET1cgcGVybWlzc2lvbiwgMSB3aGVuIGhhdmUgU1lTVEVNX0FMRVJUX1dJTkRPVyBwZXJtaXNzaW9uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCBwZXJtaXNzaW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gbm90aWZpY2F0aW9uIFNldHRpbmdzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9wZW5Ob3RpZmljYXRpb25TZXR0aW5ncygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19