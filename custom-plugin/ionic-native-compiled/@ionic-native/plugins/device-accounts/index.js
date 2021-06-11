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
var DeviceAccountsOriginal = /** @class */ (function (_super) {
    __extends(DeviceAccountsOriginal, _super);
    function DeviceAccountsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceAccountsOriginal.prototype.get = function () { return cordova(this, "get", {}, arguments); };
    DeviceAccountsOriginal.prototype.getByType = function (type) { return cordova(this, "getByType", {}, arguments); };
    DeviceAccountsOriginal.prototype.getEmails = function () { return cordova(this, "getEmails", {}, arguments); };
    DeviceAccountsOriginal.prototype.getEmail = function () { return cordova(this, "getEmail", {}, arguments); };
    DeviceAccountsOriginal.prototype.getPermissions = function () { return cordova(this, "getPermissions", {}, arguments); };
    DeviceAccountsOriginal.prototype.getPermissionsByType = function (type) { return cordova(this, "getPermissionsByType", {}, arguments); };
    DeviceAccountsOriginal.pluginName = "DeviceAccounts";
    DeviceAccountsOriginal.plugin = "cordova-device-accounts-v2";
    DeviceAccountsOriginal.pluginRef = "DeviceAccounts";
    DeviceAccountsOriginal.repo = "https://github.com/xUnholy/cordova-device-accounts-v2";
    DeviceAccountsOriginal.platforms = ["Android"];
    return DeviceAccountsOriginal;
}(IonicNativePlugin));
var DeviceAccounts = new DeviceAccountsOriginal();
export { DeviceAccounts };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RldmljZS1hY2NvdW50cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUEwQ3BDLGtDQUFpQjs7OztJQU1uRCw0QkFBRztJQVVILGtDQUFTLGFBQUMsSUFBWTtJQVN0QixrQ0FBUztJQVNULGlDQUFRO0lBU1IsdUNBQWM7SUFVZCw2Q0FBb0IsYUFBQyxJQUFZOzs7Ozs7eUJBaEduQztFQTJDb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBbmRyb2lkQWNjb3VudCB7XG4gIC8qKiBBY2NvdW50IGNyZWF0b3IgKi9cbiAgQ1JFQVRPUjogQW5kcm9pZEFjY291bnQ7XG5cbiAgLyoqIEFjY291bnQgbmFtZSAqL1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqIEFjY291bnQgdHlwZSAqL1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgRGV2aWNlIEFjY291bnRzXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldHMgdGhlIEdvb2dsZSBhY2NvdW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIEFuZHJvaWQgZGV2aWNlXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEZXZpY2VBY2NvdW50cyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGV2aWNlLWFjY291bnRzL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkZXZpY2VBY2NvdW50czogRGV2aWNlQWNjb3VudHMpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZGV2aWNlQWNjb3VudHMuZ2V0KClcbiAqICAgLnRoZW4oYWNjb3VudHMgPT4gY29uc29sZS5sb2coYWNjb3VudHMpKVxuICogICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEFuZHJvaWRBY2NvdW50XG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRGV2aWNlQWNjb3VudHMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLWRldmljZS1hY2NvdW50cy12MicsXG4gIHBsdWdpblJlZjogJ0RldmljZUFjY291bnRzJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS94VW5ob2x5L2NvcmRvdmEtZGV2aWNlLWFjY291bnRzLXYyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGV2aWNlQWNjb3VudHMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiAgR2V0cyBhbGwgYWNjb3VudHMgcmVnaXN0ZXJlZCBvbiB0aGUgQW5kcm9pZCBEZXZpY2VcbiAgICogQHJldHVybnMge1Byb21pc2U8QW5kcm9pZEFjY291bnRbXT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldCgpOiBQcm9taXNlPEFuZHJvaWRBY2NvdW50W10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogIEdldCBhbGwgYWNjb3VudHMgcmVnaXN0ZXJlZCBvbiBBbmRyb2lkIGRldmljZSBmb3IgcmVxdWVzdGVkIHR5cGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHJldHVybnMge1Byb21pc2U8QW5kcm9pZEFjY291bnRbXT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEJ5VHlwZSh0eXBlOiBzdHJpbmcpOiBQcm9taXNlPEFuZHJvaWRBY2NvdW50W10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogIEdldCBhbGwgZW1haWxzIHJlZ2lzdGVyZWQgb24gQW5kcm9pZCBkZXZpY2UgKGFjY291bnRzIHdpdGggJ2NvbS5nb29nbGUnIHR5cGUpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZ1tdPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RW1haWxzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogIEdldCB0aGUgZmlyc3QgZW1haWwgcmVnaXN0ZXJlZCBvbiBBbmRyb2lkIGRldmljZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRFbWFpbCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiAgR2V0IHBlcm1pc3Npb25zIGZvciBhY2Nlc3MgdG8gZW1haWwgcmVnaXN0ZXJlZCBvbiBBbmRyb2lkIGRldmljZSA4LjArXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFBlcm1pc3Npb25zKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqICBHZXQgcGVybWlzc2lvbnMgZm9yIGFjY2VzcyB0byBlbWFpbCByZWdpc3RlcmVkIG9uIEFuZHJvaWQgZGV2aWNlIDguMCsgZm9yIHJlcXVlc3RlZCB0eXBlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFBlcm1pc3Npb25zQnlUeXBlKHR5cGU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=