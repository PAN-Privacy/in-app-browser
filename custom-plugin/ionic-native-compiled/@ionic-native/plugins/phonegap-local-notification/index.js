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
import { IonicNativePlugin, cordova, cordovaInstance, checkAvailability } from '@ionic-native/core';
var PLNObject = /** @class */ (function () {
    function PLNObject(title, options) {
        if (checkAvailability(PhonegapLocalNotificationOriginal.pluginRef, null, PhonegapLocalNotificationOriginal.pluginName) === true) {
            this._objectInstance = new Notification(title, options);
        }
    }
    PLNObject.prototype.close = function () { return cordovaInstance(this, "close", { "sync": true }, arguments); };
    return PLNObject;
}());
export { PLNObject };
var PhonegapLocalNotificationOriginal = /** @class */ (function (_super) {
    __extends(PhonegapLocalNotificationOriginal, _super);
    function PhonegapLocalNotificationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * A global object that lets you interact with the Notification API.
     * @param title {string} Title of the local notification.
     * @param Options {LocalNotificationOptions} An object containing optional property/value pairs.
     * @returns {PLNObject}
     */
    PhonegapLocalNotificationOriginal.prototype.create = function (title, options) {
        return new PLNObject(title, options);
    };
    PhonegapLocalNotificationOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    PhonegapLocalNotificationOriginal.pluginName = "Phonegap Local Notifications";
    PhonegapLocalNotificationOriginal.plugin = "phonegap-plugin-local-notification";
    PhonegapLocalNotificationOriginal.pluginRef = "Notification";
    PhonegapLocalNotificationOriginal.repo = "https://github.com/phonegap/phonegap-plugin-local-notification";
    PhonegapLocalNotificationOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return PhonegapLocalNotificationOriginal;
}(IonicNativePlugin));
var PhonegapLocalNotification = new PhonegapLocalNotificationOriginal();
export { PhonegapLocalNotification };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Bob25lZ2FwLWxvY2FsLW5vdGlmaWNhdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTywrQ0FBdUQsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFVMUcsbUJBQVksS0FBYSxFQUFFLE9BQWlDO1FBQzFELElBQUksaUJBQWlCLENBQUMseUJBQXlCLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDL0csSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFlBQVksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDekQ7SUFDSCxDQUFDO0lBR0QseUJBQUs7b0JBbEJQOzs7O0lBMkYrQyw2Q0FBaUI7Ozs7SUFDOUQ7Ozs7O09BS0c7SUFDSCwwQ0FBTSxHQUFOLFVBQU8sS0FBYSxFQUFFLE9BQWlDO1FBQ3JELE9BQU8sSUFBSSxTQUFTLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFPRCxxREFBaUI7Ozs7OztvQ0EzR25CO0VBMkYrQyxpQkFBaUI7U0FBbkQseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YUluc3RhbmNlLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luLCBjaGVja0F2YWlsYWJpbGl0eSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmRlY2xhcmUgY29uc3QgTm90aWZpY2F0aW9uOiBhbnk7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgUExOT2JqZWN0IHtcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBvcHRpb25zOiBMb2NhbE5vdGlmaWNhdGlvbk9wdGlvbnMpIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoUGhvbmVnYXBMb2NhbE5vdGlmaWNhdGlvbi5wbHVnaW5SZWYsIG51bGwsIFBob25lZ2FwTG9jYWxOb3RpZmljYXRpb24ucGx1Z2luTmFtZSkgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gbmV3IE5vdGlmaWNhdGlvbih0aXRsZSwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgY2xvc2UoKTogdm9pZCB7fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsTm90aWZpY2F0aW9uT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkaXJlY3Rpb24gb2YgdGhlIG5vdGlmaWNhdGlvbi4gT25lIG9mIFwiYXV0b1wiLCBcImx0clwiIG9yIFwicnRsXCJcbiAgICovXG4gIGRpcj86IHN0cmluZztcblxuICAvKipcbiAgICogIFNldHMgdGhlIGxhbmd1YWdlIG9mIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIGxhbmc/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGJvZHkgb2YgdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgYm9keT86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0cyB0aGUgaWRlbnRpZnlpbmcgdGFnIG9mIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIHRhZz86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0cyB0aGUgaWNvbiBvZiB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIFBob25lZ2FwIExvY2FsIE5vdGlmaWNhdGlvblxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgTG9jYWwgTm90aWZpY2F0aW9uIHBsdWdpbiBnaXZlcyBkZXZlbG9wZXJzIHRoZSBhYmlsaXR5IHRvIHBvc3Qgbm90aWZpY2F0aW9ucyBmcm9tIHRoZWlyIGFwcCB0aGF0IHNob3cgdXAgaW4gdGhlIGRldmljZeKAmXMgbm90aWZpY2F0aW9uIGFyZWEuXG4gKiBUaGUgQVBJIGZvciB0aGUgbG9jYWwgbm90aWZpY2F0aW9uIHBsdWdpbiBmb2xsb3dzIHRoZSBXM0MgV2ViIE5vdGlmaWNhdGlvbnMgc3BlY2lmaWNhdGlvbjogaHR0cHM6Ly93d3cudzMub3JnL1RSL25vdGlmaWNhdGlvbnMvXG4gKlxuICogQHVzYWdlXG4gKiBgYGBcbiAqIGltcG9ydCB7IFBob25lZ2FwTG9jYWxOb3RpZmljYXRpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3Bob25lZ2FwLWxvY2FsLW5vdGlmaWNhdGlvbi9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2FsTm90aWZpY2F0aW9uOiBQaG9uZWdhcExvY2FsTm90aWZpY2F0aW9uKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmxvY2FsTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbihcbiAqICAgKHBlcm1pc3Npb24pID0+IHtcbiAqICAgICBpZiAocGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKSB7XG4gKlxuICogICAgICAgLy8gQ3JlYXRlIHRoZSBub3RpZmljYXRpb25cbiAqICAgICAgIHRoaXMubG9jYWxOb3RpZmljYXRpb24uY3JlYXRlKCdNeSBUaXRsZScsIHtcbiAqICAgICAgICAgdGFnOiAnbWVzc2FnZTEnLFxuICogICAgICAgICBib2R5OiAnTXkgYm9keScsXG4gKiAgICAgICAgIGljb246ICdhc3NldHMvaWNvbi9mYXZpY29uLmljbydcbiAqICAgICAgIH0pO1xuICpcbiAqICAgICB9XG4gKiAgIH1cbiAqICk7XG4gKlxuICogYGBgXG4gKlxuICogQGludGVyZmFjZXNcbiAqIExvY2FsTm90aWZpY2F0aW9uT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1Bob25lZ2FwIExvY2FsIE5vdGlmaWNhdGlvbnMnLFxuICBwbHVnaW46ICdwaG9uZWdhcC1wbHVnaW4tbG9jYWwtbm90aWZpY2F0aW9uJyxcbiAgcGx1Z2luUmVmOiAnTm90aWZpY2F0aW9uJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9waG9uZWdhcC9waG9uZWdhcC1wbHVnaW4tbG9jYWwtbm90aWZpY2F0aW9uJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQaG9uZWdhcExvY2FsTm90aWZpY2F0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQSBnbG9iYWwgb2JqZWN0IHRoYXQgbGV0cyB5b3UgaW50ZXJhY3Qgd2l0aCB0aGUgTm90aWZpY2F0aW9uIEFQSS5cbiAgICogQHBhcmFtIHRpdGxlIHtzdHJpbmd9IFRpdGxlIG9mIHRoZSBsb2NhbCBub3RpZmljYXRpb24uXG4gICAqIEBwYXJhbSBPcHRpb25zIHtMb2NhbE5vdGlmaWNhdGlvbk9wdGlvbnN9IEFuIG9iamVjdCBjb250YWluaW5nIG9wdGlvbmFsIHByb3BlcnR5L3ZhbHVlIHBhaXJzLlxuICAgKiBAcmV0dXJucyB7UExOT2JqZWN0fVxuICAgKi9cbiAgY3JlYXRlKHRpdGxlOiBzdHJpbmcsIG9wdGlvbnM6IExvY2FsTm90aWZpY2F0aW9uT3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUExOT2JqZWN0KHRpdGxlLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXF1ZXN0cyBwZXJtaXNzaW9uIGZyb20gdGhlIHVzZXIgdG8gc2hvdyBhIGxvY2FsIG5vdGlmaWNhdGlvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFBlcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==