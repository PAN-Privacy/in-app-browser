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
var WebengageOriginal = /** @class */ (function (_super) {
    __extends(WebengageOriginal, _super);
    function WebengageOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageOriginal.prototype.engage = function (config) { return cordova(this, "engage", {}, arguments); };
    WebengageOriginal.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengageOriginal.prototype.track = function (eventName, attributes) { return cordova(this, "track", {}, arguments); };
    WebengageOriginal.prototype.screen = function (screenName, screenData) { return cordova(this, "screen", {}, arguments); };
    WebengageOriginal.pluginName = "Webengage";
    WebengageOriginal.plugin = "cordova-plugin-webengage";
    WebengageOriginal.pluginRef = "webengage";
    WebengageOriginal.repo = "https://github.com/WebEngage/cordova-plugin";
    WebengageOriginal.platforms = ["Android", "iOS"];
    return WebengageOriginal;
}(IonicNativePlugin));
var Webengage = new WebengageOriginal();
export { Webengage };
var WebengageUserOriginal = /** @class */ (function (_super) {
    __extends(WebengageUserOriginal, _super);
    function WebengageUserOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageUserOriginal.prototype.login = function (userId) { return cordova(this, "login", {}, arguments); };
    WebengageUserOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    WebengageUserOriginal.prototype.setAttribute = function (key, value) { return cordova(this, "setAttribute", {}, arguments); };
    WebengageUserOriginal.pluginName = "Webengage";
    WebengageUserOriginal.plugin = "cordova-plugin-webengage";
    WebengageUserOriginal.pluginRef = "webengage.user";
    return WebengageUserOriginal;
}(IonicNativePlugin));
var WebengageUser = new WebengageUserOriginal();
export { WebengageUser };
var WebengagePushOriginal = /** @class */ (function (_super) {
    __extends(WebengagePushOriginal, _super);
    function WebengagePushOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengagePushOriginal.prototype.onClick = function (callback) { return cordova(this, "onClick", {}, arguments); };
    WebengagePushOriginal.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengagePushOriginal.pluginName = "Webengage";
    WebengagePushOriginal.plugin = "cordova-plugin-webengage";
    WebengagePushOriginal.pluginRef = "webengage.push";
    return WebengagePushOriginal;
}(IonicNativePlugin));
var WebengagePush = new WebengagePushOriginal();
export { WebengagePush };
var WebengageNotificationOriginal = /** @class */ (function (_super) {
    __extends(WebengageNotificationOriginal, _super);
    function WebengageNotificationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageNotificationOriginal.prototype.onShown = function (callback) { return cordova(this, "onShown", {}, arguments); };
    WebengageNotificationOriginal.prototype.onClick = function (callback) { return cordova(this, "onClick", {}, arguments); };
    WebengageNotificationOriginal.prototype.onDismiss = function (callback) { return cordova(this, "onDismiss", {}, arguments); };
    WebengageNotificationOriginal.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengageNotificationOriginal.pluginName = "Webengage";
    WebengageNotificationOriginal.plugin = "cordova-plugin-webengage";
    WebengageNotificationOriginal.pluginRef = "webengage.notification";
    return WebengageNotificationOriginal;
}(IonicNativePlugin));
var WebengageNotification = new WebengageNotificationOriginal();
export { WebengageNotification };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3dlYmVuZ2FnZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUEyQnpDLDZCQUFpQjs7OztJQU85QywwQkFBTSxhQUFDLE1BQVk7SUFXbkIsMkJBQU8sYUFBQyxHQUFXLEVBQUUsS0FBVTtJQVcvQix5QkFBSyxhQUFDLFNBQWlCLEVBQUUsVUFBZ0I7SUFXekMsMEJBQU0sYUFBQyxVQUFrQixFQUFFLFVBQWdCOzs7Ozs7b0JBcEU3QztFQTRCK0IsaUJBQWlCO1NBQW5DLFNBQVM7O0lBc0RhLGlDQUFpQjs7OztJQU9sRCw2QkFBSyxhQUFDLE1BQWM7SUFTcEIsOEJBQU07SUFXTixvQ0FBWSxhQUFDLEdBQVcsRUFBRSxLQUFVOzs7O3dCQTdHdEM7RUFrRm1DLGlCQUFpQjtTQUF2QyxhQUFhOztJQXlDUyxpQ0FBaUI7Ozs7SUFPbEQsK0JBQU8sYUFBQyxRQUFhO0lBV3JCLCtCQUFPLGFBQUMsR0FBVyxFQUFFLEtBQVU7Ozs7d0JBN0lqQztFQTJIbUMsaUJBQWlCO1NBQXZDLGFBQWE7O0lBZ0NpQix5Q0FBaUI7Ozs7SUFPMUQsdUNBQU8sYUFBQyxRQUFhO0lBVXJCLHVDQUFPLGFBQUMsUUFBYTtJQVVyQix5Q0FBUyxhQUFDLFFBQWE7SUFXdkIsdUNBQU8sYUFBQyxHQUFXLEVBQUUsS0FBVTs7OztnQ0FqTWpDO0VBMkoyQyxpQkFBaUI7U0FBL0MscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgV2ViZW5nYWdlXG4gKiBAZGVzY3JpcHRpb25cbiAqIElvbmljLU5hdGl2ZSB3cmFwcGVyIHRoYXQgd3JhcHMgV2ViZW5nYWdlIENvcmRvdmEgcGx1Z2luIGZvciBBbmRyb2lkIGFuZCBpT1NcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFdlYmVuZ2FnZSwgV2ViZW5nYWdlVXNlciwgV2ViZW5nYWdlUHVzaCwgV2ViZW5nYWdlTm90aWZpY2F0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS93ZWJlbmdhZ2Uvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB3ZWJlbmdhZ2U6IFdlYmVuZ2FnZSwgcHJpdmF0ZSB3ZWJlbmdhZ2VVc2VyOiBXZWJlbmdhZ2VVc2VyLCBwcml2YXRlIHdlYmVuZ2FnZVB1c2g6IFdlYmVuZ2FnZVB1c2gsIHByaXZhdGUgd2ViZW5nYWdlTm90aWZpY2F0aW9uOiBXZWJlbmdhZ2VOb3RpZmljYXRpb24gKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLndlYmVuZ2FnZS5lbmdhZ2UoKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1dlYmVuZ2FnZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXdlYmVuZ2FnZScsXG4gIHBsdWdpblJlZjogJ3dlYmVuZ2FnZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vV2ViRW5nYWdlL2NvcmRvdmEtcGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYmVuZ2FnZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIFdlYkVuZ2FnZSBTREtcbiAgICogQHBhcmFtIHthbnl9IFtjb25maWddXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZW5nYWdlKGNvbmZpZz86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgV2ViRW5nYWdlIFNESyBjb25maWd1cmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb3B0aW9ucyhrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrcyBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSB7YW55fSBbYXR0cmlidXRlc11cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFjayhldmVudE5hbWU6IHN0cmluZywgYXR0cmlidXRlcz86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrcyBzY3JlZW5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgKiBAcGFyYW0ge2FueX0gW3NjcmVlbkRhdGFdXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2NyZWVuKHNjcmVlbk5hbWU6IHN0cmluZywgc2NyZWVuRGF0YT86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1dlYmVuZ2FnZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXdlYmVuZ2FnZScsXG4gIHBsdWdpblJlZjogJ3dlYmVuZ2FnZS51c2VyJyxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViZW5nYWdlVXNlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIExvZ3MgdXNlciBpblxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9naW4odXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dzIHVzZXIgb3V0XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdXNlciBhdHRyaWJ1dGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRBdHRyaWJ1dGUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXZWJlbmdhZ2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWJlbmdhZ2UnLFxuICBwbHVnaW5SZWY6ICd3ZWJlbmdhZ2UucHVzaCcsXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYmVuZ2FnZVB1c2ggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBpcyBpbnZva2VkIHdoZW4gYSBwdXNoIG5vdGlmaWNhdGlvbiBpcyBjbGlja2VkXG4gICAqIEBwYXJhbSB7YW55fSBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9uQ2xpY2soY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgcHVzaCBub3RpZmljYXRpb24gY29uZmlndXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9wdGlvbnMoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXZWJlbmdhZ2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWJlbmdhZ2UnLFxuICBwbHVnaW5SZWY6ICd3ZWJlbmdhZ2Uubm90aWZpY2F0aW9uJyxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViZW5nYWdlTm90aWZpY2F0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gaXMgaW52b2tlZCB3aGVuIGEgaW4tYXBwIG5vdGlmaWNhdGlvbiBpcyBzaG93blxuICAgKiBAcGFyYW0ge2FueX0gY2FsbGJhY2tcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvblNob3duKGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBpcyBpbnZva2VkIHdoZW4gYSBpbi1hcHAgbm90aWZpY2F0aW9uIGlzIGNsaWNrZWRcbiAgICogQHBhcmFtIHthbnl9IGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb25DbGljayhjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gaXMgaW52b2tlZCB3aGVuIGEgaW4tYXBwIG5vdGlmaWNhdGlvbiBpcyBkaXNtaXNzZWRcbiAgICogQHBhcmFtIHthbnl9IGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb25EaXNtaXNzKGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGluLWFwcCBub3RpZmljYXRpb24gY29uZmlndXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9wdGlvbnMoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19