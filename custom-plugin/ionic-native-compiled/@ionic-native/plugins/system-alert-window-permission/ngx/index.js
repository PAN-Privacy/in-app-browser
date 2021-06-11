import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var SystemAlertWindowPermission = /** @class */ (function (_super) {
    __extends(SystemAlertWindowPermission, _super);
    function SystemAlertWindowPermission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SystemAlertWindowPermission.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    SystemAlertWindowPermission.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    SystemAlertWindowPermission.prototype.openNotificationSettings = function () { return cordova(this, "openNotificationSettings", {}, arguments); };
    SystemAlertWindowPermission.pluginName = "SystemAlertWindowPermission";
    SystemAlertWindowPermission.plugin = "cordova-plugin-system-alert-window-permission";
    SystemAlertWindowPermission.pluginRef = "window.systemAlertWindowPermission";
    SystemAlertWindowPermission.repo = "https://github.com/MaximBelov/cordova-plugin-system-alert-window-permission.git";
    SystemAlertWindowPermission.install = "ionic cordova plugin add cordova-plugin-system-alert-window-permission";
    SystemAlertWindowPermission.platforms = ["Android"];
    SystemAlertWindowPermission.decorators = [
        { type: Injectable }
    ];
    return SystemAlertWindowPermission;
}(IonicNativePlugin));
export { SystemAlertWindowPermission };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N5c3RlbS1hbGVydC13aW5kb3ctcGVybWlzc2lvbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFxQ3ZCLCtDQUFpQjs7OztJQU1oRSxtREFBYTtJQVNiLHVEQUFpQjtJQVNqQiw4REFBd0I7Ozs7Ozs7O2dCQXpCekIsVUFBVTs7c0NBckNYO0VBc0NpRCxpQkFBaUI7U0FBckQsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU3lzdGVtIEFsZXJ0IFdpbmRvdyBQZXJtaXNzaW9uXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTeXN0ZW1BbGVydFdpbmRvd1Blcm1pc3Npb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N5c3RlbS1hbGVydC13aW5kb3ctcGVybWlzc2lvbi9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHN5c3RlbUFsZXJ0V2luZG93UGVybWlzc2lvbjogU3lzdGVtQWxlcnRXaW5kb3dQZXJtaXNzaW9uKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5zeXN0ZW1BbGVydFdpbmRvd1Blcm1pc3Npb24uaGFzUGVybWlzc2lvbigpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogdGhpcy5zeXN0ZW1BbGVydFdpbmRvd1Blcm1pc3Npb24ucmVxdWVzdFBlcm1pc3Npb24oKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU3lzdGVtQWxlcnRXaW5kb3dQZXJtaXNzaW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc3lzdGVtLWFsZXJ0LXdpbmRvdy1wZXJtaXNzaW9uJyxcbiAgcGx1Z2luUmVmOiAnd2luZG93LnN5c3RlbUFsZXJ0V2luZG93UGVybWlzc2lvbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTWF4aW1CZWxvdi9jb3Jkb3ZhLXBsdWdpbi1zeXN0ZW0tYWxlcnQtd2luZG93LXBlcm1pc3Npb24uZ2l0JyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1zeXN0ZW0tYWxlcnQtd2luZG93LXBlcm1pc3Npb24nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTeXN0ZW1BbGVydFdpbmRvd1Blcm1pc3Npb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDaGVjayBwZXJtaXNzaW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gcmV0dXJuIDAgd2hlbiBkb250IGhhdmUgU1lTVEVNX0FMRVJUX1dJTkRPVyBwZXJtaXNzaW9uLCAxIHdoZW4gaGF2ZSBTWVNURU1fQUxFUlRfV0lORE9XIHBlcm1pc3Npb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFBlcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT3BlbiBub3RpZmljYXRpb24gU2V0dGluZ3NcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb3Blbk5vdGlmaWNhdGlvblNldHRpbmdzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=