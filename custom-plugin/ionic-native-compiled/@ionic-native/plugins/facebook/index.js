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
var FacebookOriginal = /** @class */ (function (_super) {
    __extends(FacebookOriginal, _super);
    function FacebookOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EVENTS = {
            EVENT_NAME_ACTIVATED_APP: 'fb_mobile_activate_app',
            EVENT_NAME_DEACTIVATED_APP: 'fb_mobile_deactivate_app',
            EVENT_NAME_SESSION_INTERRUPTIONS: 'fb_mobile_app_interruptions',
            EVENT_NAME_TIME_BETWEEN_SESSIONS: 'fb_mobile_time_between_sessions',
            EVENT_NAME_COMPLETED_REGISTRATION: 'fb_mobile_complete_registration',
            EVENT_NAME_VIEWED_CONTENT: 'fb_mobile_content_view',
            EVENT_NAME_SEARCHED: 'fb_mobile_search',
            EVENT_NAME_RATED: 'fb_mobile_rate',
            EVENT_NAME_COMPLETED_TUTORIAL: 'fb_mobile_tutorial_completion',
            EVENT_NAME_PUSH_TOKEN_OBTAINED: 'fb_mobile_obtain_push_token',
            EVENT_NAME_ADDED_TO_CART: 'fb_mobile_add_to_cart',
            EVENT_NAME_ADDED_TO_WISHLIST: 'fb_mobile_add_to_wishlist',
            EVENT_NAME_INITIATED_CHECKOUT: 'fb_mobile_initiated_checkout',
            EVENT_NAME_ADDED_PAYMENT_INFO: 'fb_mobile_add_payment_info',
            EVENT_NAME_PURCHASED: 'fb_mobile_purchase',
            EVENT_NAME_ACHIEVED_LEVEL: 'fb_mobile_level_achieved',
            EVENT_NAME_UNLOCKED_ACHIEVEMENT: 'fb_mobile_achievement_unlocked',
            EVENT_NAME_SPENT_CREDITS: 'fb_mobile_spent_credits',
            EVENT_PARAM_CURRENCY: 'fb_currency',
            EVENT_PARAM_REGISTRATION_METHOD: 'fb_registration_method',
            EVENT_PARAM_CONTENT_TYPE: 'fb_content_type',
            EVENT_PARAM_CONTENT_ID: 'fb_content_id',
            EVENT_PARAM_SEARCH_STRING: 'fb_search_string',
            EVENT_PARAM_SUCCESS: 'fb_success',
            EVENT_PARAM_MAX_RATING_VALUE: 'fb_max_rating_value',
            EVENT_PARAM_PAYMENT_INFO_AVAILABLE: 'fb_payment_info_available',
            EVENT_PARAM_NUM_ITEMS: 'fb_num_items',
            EVENT_PARAM_LEVEL: 'fb_level',
            EVENT_PARAM_DESCRIPTION: 'fb_description',
            EVENT_PARAM_SOURCE_APPLICATION: 'fb_mobile_launch_source',
            EVENT_PARAM_VALUE_YES: '1',
            EVENT_PARAM_VALUE_NO: '0',
        };
        return _this;
    }
    FacebookOriginal.prototype.login = function (permissions) { return cordova(this, "login", {}, arguments); };
    FacebookOriginal.prototype.loginWithLimitedTracking = function (permissions) { return cordova(this, "loginWithLimitedTracking", {}, arguments); };
    FacebookOriginal.prototype.checkHasCorrectPermissions = function (permissions) { return cordova(this, "checkHasCorrectPermissions", {}, arguments); };
    FacebookOriginal.prototype.isDataAccessExpired = function () { return cordova(this, "isDataAccessExpired", {}, arguments); };
    FacebookOriginal.prototype.reauthorizeDataAccess = function () { return cordova(this, "reauthorizeDataAccess", {}, arguments); };
    FacebookOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    FacebookOriginal.prototype.getLoginStatus = function () { return cordova(this, "getLoginStatus", {}, arguments); };
    FacebookOriginal.prototype.getAccessToken = function () { return cordova(this, "getAccessToken", {}, arguments); };
    FacebookOriginal.prototype.getCurrentProfile = function () { return cordova(this, "getCurrentProfile", {}, arguments); };
    FacebookOriginal.prototype.showDialog = function (options) { return cordova(this, "showDialog", {}, arguments); };
    FacebookOriginal.prototype.api = function (requestPath, permissions, httpMethod) { return cordova(this, "api", {}, arguments); };
    FacebookOriginal.prototype.logEvent = function (name, params, valueToSum) { return cordova(this, "logEvent", { "successIndex": 3, "errorIndex": 4 }, arguments); };
    FacebookOriginal.prototype.setAutoLogAppEventsEnabled = function (enabled) { return cordova(this, "setAutoLogAppEventsEnabled", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    FacebookOriginal.prototype.setAdvertiserIDCollectionEnabled = function (enabled) { return cordova(this, "setAdvertiserIDCollectionEnabled", {}, arguments); };
    FacebookOriginal.prototype.setAdvertiserTrackingEnabled = function (enabled) { return cordova(this, "setAdvertiserTrackingEnabled", {}, arguments); };
    FacebookOriginal.prototype.logPurchase = function (value, currency, params) { return cordova(this, "logPurchase", {}, arguments); };
    FacebookOriginal.prototype.getDeferredApplink = function () { return cordova(this, "getDeferredApplink", {}, arguments); };
    FacebookOriginal.prototype.activateApp = function () { return cordova(this, "activateApp", {}, arguments); };
    FacebookOriginal.pluginName = "Facebook";
    FacebookOriginal.plugin = "cordova-plugin-facebook-connect";
    FacebookOriginal.pluginRef = "facebookConnectPlugin";
    FacebookOriginal.repo = "https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect";
    FacebookOriginal.install = "ionic cordova plugin add cordova-plugin-facebook-connect --variable APP_ID=\"123456789\" --variable APP_NAME=\"myApplication\"";
    FacebookOriginal.installVariables = ["APP_ID", "APP_NAME"];
    FacebookOriginal.platforms = ["Android", "iOS", "Browser"];
    return FacebookOriginal;
}(IonicNativePlugin));
var Facebook = new FacebookOriginal();
export { Facebook };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZhY2Vib29rL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXFIMUMsNEJBQWlCOzs7UUFDN0MsWUFBTSxHQUFHO1lBQ1Asd0JBQXdCLEVBQUUsd0JBQXdCO1lBQ2xELDBCQUEwQixFQUFFLDBCQUEwQjtZQUN0RCxnQ0FBZ0MsRUFBRSw2QkFBNkI7WUFDL0QsZ0NBQWdDLEVBQUUsaUNBQWlDO1lBQ25FLGlDQUFpQyxFQUFFLGlDQUFpQztZQUNwRSx5QkFBeUIsRUFBRSx3QkFBd0I7WUFDbkQsbUJBQW1CLEVBQUUsa0JBQWtCO1lBQ3ZDLGdCQUFnQixFQUFFLGdCQUFnQjtZQUNsQyw2QkFBNkIsRUFBRSwrQkFBK0I7WUFDOUQsOEJBQThCLEVBQUUsNkJBQTZCO1lBQzdELHdCQUF3QixFQUFFLHVCQUF1QjtZQUNqRCw0QkFBNEIsRUFBRSwyQkFBMkI7WUFDekQsNkJBQTZCLEVBQUUsOEJBQThCO1lBQzdELDZCQUE2QixFQUFFLDRCQUE0QjtZQUMzRCxvQkFBb0IsRUFBRSxvQkFBb0I7WUFDMUMseUJBQXlCLEVBQUUsMEJBQTBCO1lBQ3JELCtCQUErQixFQUFFLGdDQUFnQztZQUNqRSx3QkFBd0IsRUFBRSx5QkFBeUI7WUFDbkQsb0JBQW9CLEVBQUUsYUFBYTtZQUNuQywrQkFBK0IsRUFBRSx3QkFBd0I7WUFDekQsd0JBQXdCLEVBQUUsaUJBQWlCO1lBQzNDLHNCQUFzQixFQUFFLGVBQWU7WUFDdkMseUJBQXlCLEVBQUUsa0JBQWtCO1lBQzdDLG1CQUFtQixFQUFFLFlBQVk7WUFDakMsNEJBQTRCLEVBQUUscUJBQXFCO1lBQ25ELGtDQUFrQyxFQUFFLDJCQUEyQjtZQUMvRCxxQkFBcUIsRUFBRSxjQUFjO1lBQ3JDLGlCQUFpQixFQUFFLFVBQVU7WUFDN0IsdUJBQXVCLEVBQUUsZ0JBQWdCO1lBQ3pDLDhCQUE4QixFQUFFLHlCQUF5QjtZQUN6RCxxQkFBcUIsRUFBRSxHQUFHO1lBQzFCLG9CQUFvQixFQUFFLEdBQUc7U0FDMUIsQ0FBQzs7O0lBd0JGLHdCQUFLLGFBQUMsV0FBcUI7SUF1QjNCLDJDQUF3QixhQUFDLFdBQXFCO0lBVzlDLDZDQUEwQixhQUFDLFdBQXFCO0lBVWhELHNDQUFtQjtJQVVuQix3Q0FBcUI7SUFXckIseUJBQU07SUErQk4saUNBQWM7SUFVZCxpQ0FBYztJQVVkLG9DQUFpQjtJQXNCakIsNkJBQVUsYUFBQyxPQUFZO0lBbUJ2QixzQkFBRyxhQUFDLFdBQW1CLEVBQUUsV0FBcUIsRUFBRSxVQUFtQjtJQWdCbkUsMkJBQVEsYUFBQyxJQUFZLEVBQUUsTUFBZSxFQUFFLFVBQW1CO0lBYTNELDZDQUEwQixhQUFDLE9BQWdCO0lBVTNDLG1EQUFnQyxhQUFDLE9BQWdCO0lBVWpELCtDQUE0QixhQUFDLE9BQWdCO0lBYTdDLDhCQUFXLGFBQUMsS0FBYSxFQUFFLFFBQWdCLEVBQUUsTUFBZTtJQVM1RCxxQ0FBa0I7SUFTbEIsOEJBQVc7Ozs7Ozs7O21CQTdaYjtFQXNIOEIsaUJBQWlCO1NBQWxDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBGYWNlYm9va0xvZ2luUmVzcG9uc2Uge1xuICBzdGF0dXM6IHN0cmluZztcblxuICBhdXRoUmVzcG9uc2U6IHtcbiAgICBzZXNzaW9uX2tleTogYm9vbGVhbjtcblxuICAgIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG5cbiAgICBleHBpcmVzSW46IG51bWJlcjtcblxuICAgIHNpZzogc3RyaW5nO1xuXG4gICAgc2VjcmV0OiBzdHJpbmc7XG5cbiAgICB1c2VySUQ6IHN0cmluZztcbiAgfTtcbn1cblxuLyoqXG4gKiBAbmFtZSBGYWNlYm9va1xuICogQGRlc2NyaXB0aW9uXG4gKiBVc2UgdGhlIEZhY2Vib29rIENvbm5lY3QgcGx1Z2luIHRvIG9idGFpbiBhY2Nlc3MgdG8gdGhlIG5hdGl2ZSBGQiBhcHBsaWNhdGlvbiBvbiBpT1MgYW5kIEFuZHJvaWQuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vay1jb25uZWN0YC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0ZhY2Vib29rIENvbm5lY3RdKGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vay1jb25uZWN0L2NvcmRvdmEtcGx1Z2luLWZhY2Vib29rLWNvbm5lY3QpLlxuICpcbiAqICMjIyMgSW5zdGFsbGF0aW9uXG4gKlxuICogIFRvIHVzZSB0aGUgRkIgcGx1Z2luLCB5b3UgZmlyc3QgaGF2ZSB0byBjcmVhdGUgYSBuZXcgRmFjZWJvb2sgQXBwIGluc2lkZSBvZiB0aGUgRmFjZWJvb2sgZGV2ZWxvcGVyIHBvcnRhbCBhdCBbaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9hcHBzXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHMpLlxuICpcbiAqIFshW2ZiLWdldHN0YXJ0ZWQtMV0oL2ltZy9kb2NzL25hdGl2ZS9GYWNlYm9vay8xLnBuZyldKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwcy8pXG4gKlxuICogUmV0cmlldmUgdGhlIGBBcHAgSURgIGFuZCBgQXBwIE5hbWVgLlxuICpcbiAqIFshW2ZiLWdldHN0YXJ0ZWQtMl0oL2ltZy9kb2NzL25hdGl2ZS9GYWNlYm9vay8yLnBuZyldKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwcy8pXG4gKlxuICogVGhlbiB0eXBlIGluIHRoZSBmb2xsb3dpbmcgY29tbWFuZCBpbiB5b3VyIFRlcm1pbmFsLCB3aGVyZSBBUFBfSUQgYW5kIEFQUF9OQU1FIGFyZSB0aGUgdmFsdWVzIGZyb20gdGhlIEZhY2Vib29rIERldmVsb3BlciBwb3J0YWwuXG4gKlxuICogYGBgYmFzaFxuICogIGlvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vay1jb25uZWN0IC0tdmFyaWFibGUgQVBQX0lEPVwiMTIzNDU2Nzg5XCIgLS12YXJpYWJsZSBBUFBfTkFNRT1cIm15QXBwbGljYXRpb25cIlxuICogYGBgXG4gKlxuICogQWZ0ZXIsIHlvdSdsbCBuZWVkIHRvIGFkZCB0aGUgbmF0aXZlIHBsYXRmb3JtcyB5b3UnbGwgYmUgdXNpbmcgdG8geW91ciBhcHAgaW4gdGhlIEZhY2Vib29rIERldmVsb3BlciBwb3J0YWwgdW5kZXIgeW91ciBhcHAncyBTZXR0aW5nczpcbiAqXG4gKiBbIVtmYi1nZXRzdGFydGVkLTNdKC9pbWcvZG9jcy9uYXRpdmUvRmFjZWJvb2svMy5wbmcpXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHMvKVxuICpcbiAqIENsaWNrIGAnQWRkIFBsYXRmb3JtJ2AuXG4gKlxuICogWyFbZmItZ2V0c3RhcnRlZC00XSgvaW1nL2RvY3MvbmF0aXZlL0ZhY2Vib29rLzQucG5nKV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9hcHBzLylcbiAqXG4gKiBBdCB0aGlzIHBvaW50IHlvdSdsbCBuZWVkIHRvIG9wZW4geW91ciBwcm9qZWN0J3MgW2Bjb25maWcueG1sYF0oaHR0cHM6Ly9jb3Jkb3ZhLmFwYWNoZS5vcmcvZG9jcy9lbi9sYXRlc3QvY29uZmlnX3JlZi9pbmRleC5odG1sKSBmaWxlLCBmb3VuZCBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgeW91ciBwcm9qZWN0LlxuICpcbiAqIFRha2Ugbm90ZSBvZiB0aGUgYGlkYCBmb3IgdGhlIG5leHQgc3RlcDpcbiAqIGBgYFxuICogPHdpZGdldCBpZD1cImNvbS5teWNvbXBhbnkudGVzdGFwcFwiIHZlcnNpb249XCIwLjAuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvbnMvd2lkZ2V0c1wiIHhtbG5zOmNkdj1cImh0dHA6Ly9jb3Jkb3ZhLmFwYWNoZS5vcmcvbnMvMS4wXCI+XG4gKiBgYGBcbiAqXG4gKiBZb3UgY2FuIGFsc28gZWRpdCB0aGUgYGlkYCB0byB3aGF0ZXZlciB5b3UnZCBsaWtlIGl0IHRvIGJlLlxuICpcbiAqICMjIyMgaU9TIEluc3RhbGxcbiAqIFVuZGVyICdCdW5kbGUgSUQnLCBhZGQgdGhlIGBpZGAgZnJvbSB5b3VyIGBjb25maWcueG1sYCBmaWxlOlxuICpcbiAqIFshW2ZiLWdldHN0YXJ0ZWQtNV0oL2ltZy9kb2NzL25hdGl2ZS9GYWNlYm9vay81LnBuZyldKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwcy8pXG4gKlxuICpcbiAqICMjIyMgQW5kcm9pZCBJbnN0YWxsXG4gKiBVbmRlciAnR29vZ2xlIFBsYXkgUGFja2FnZSBOYW1lJywgYWRkIHRoZSBgaWRgIGZyb20geW91ciBgY29uZmlnLnhtbGAgZmlsZTpcbiAqXG4gKiBbIVtmYi1nZXRzdGFydGVkLTZdKC9pbWcvZG9jcy9uYXRpdmUvRmFjZWJvb2svNi5wbmcpXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHMvKVxuICpcbiAqXG4gKiBBbmQgdGhhdCdzIGl0ISBZb3UgY2FuIG5vdyBtYWtlIGNhbGxzIHRvIEZhY2Vib29rIHVzaW5nIHRoZSBwbHVnaW4uXG4gKlxuICogIyMgRXZlbnRzXG4gKlxuICogQXBwIGV2ZW50cyBhbGxvdyB5b3UgdG8gdW5kZXJzdGFuZCB0aGUgbWFrZXVwIG9mIHVzZXJzIGVuZ2FnaW5nIHdpdGggeW91ciBhcHAsIG1lYXN1cmUgdGhlIHBlcmZvcm1hbmNlIG9mIHlvdXIgRmFjZWJvb2sgbW9iaWxlIGFwcCBhZHMsIGFuZCByZWFjaCBzcGVjaWZpYyBzZXRzIG9mIHlvdXIgdXNlcnMgd2l0aCBGYWNlYm9vayBtb2JpbGUgYXBwIGFkcy5cbiAqXG4gKiAtIFtpT1NdIFtodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvaW9zL2FwcC1ldmVudHNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9pb3MvYXBwLWV2ZW50cylcbiAqIC0gW0FuZHJvaWRdIFtodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvYW5kcm9pZC9hcHAtZXZlbnRzXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvYW5kcm9pZC9hcHAtZXZlbnRzKVxuICogLSBbSlNdIERvZXMgbm90IGhhdmUgYW4gRXZlbnRzIEFQSSwgc28gdGhlIHBsdWdpbiBmdW5jdGlvbnMgYXJlIGVtcHR5IGFuZCB3aWxsIHJldHVybiBhbiBhdXRvbWF0aWMgc3VjY2Vzc1xuICpcbiAqIEFjdGl2YXRpb24gZXZlbnRzIGFyZSBhdXRvbWF0aWNhbGx5IHRyYWNrZWQgZm9yIHlvdSBpbiB0aGUgcGx1Z2luLlxuICpcbiAqIEV2ZW50cyBhcmUgbGlzdGVkIG9uIHRoZSBbaW5zaWdodHMgcGFnZV0oaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2luc2lnaHRzLykuXG4gKlxuICogRm9yIHRyYWNraW5nIGV2ZW50cywgc2VlIGBsb2dFdmVudGAgYW5kIGBsb2dQdXJjaGFzZWAuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGYWNlYm9vaywgRmFjZWJvb2tMb2dpblJlc3BvbnNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9mYWNlYm9vay9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZhY2Vib29rKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZiLmxvZ2luKFsncHVibGljX3Byb2ZpbGUnLCAndXNlcl9mcmllbmRzJywgJ2VtYWlsJ10pXG4gKiAgIC50aGVuKChyZXM6IEZhY2Vib29rTG9naW5SZXNwb25zZSkgPT4gY29uc29sZS5sb2coJ0xvZ2dlZCBpbnRvIEZhY2Vib29rIScsIHJlcykpXG4gKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKCdFcnJvciBsb2dnaW5nIGludG8gRmFjZWJvb2snLCBlKSk7XG4gKlxuICpcbiAqIHRoaXMuZmIubG9nRXZlbnQodGhpcy5mYi5FVkVOVFMuRVZFTlRfTkFNRV9BRERFRF9UT19DQVJUKTtcbiAqXG4gKiBgYGBcbiAqXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmFjZWJvb2snLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vay1jb25uZWN0JyxcbiAgcGx1Z2luUmVmOiAnZmFjZWJvb2tDb25uZWN0UGx1Z2luJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vay1jb25uZWN0L2NvcmRvdmEtcGx1Z2luLWZhY2Vib29rLWNvbm5lY3QnLFxuICBpbnN0YWxsOlxuICAgICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZmFjZWJvb2stY29ubmVjdCAtLXZhcmlhYmxlIEFQUF9JRD1cIjEyMzQ1Njc4OVwiIC0tdmFyaWFibGUgQVBQX05BTUU9XCJteUFwcGxpY2F0aW9uXCInLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0FQUF9JRCcsICdBUFBfTkFNRSddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnQnJvd3NlciddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWNlYm9vayBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgRVZFTlRTID0ge1xuICAgIEVWRU5UX05BTUVfQUNUSVZBVEVEX0FQUDogJ2ZiX21vYmlsZV9hY3RpdmF0ZV9hcHAnLFxuICAgIEVWRU5UX05BTUVfREVBQ1RJVkFURURfQVBQOiAnZmJfbW9iaWxlX2RlYWN0aXZhdGVfYXBwJyxcbiAgICBFVkVOVF9OQU1FX1NFU1NJT05fSU5URVJSVVBUSU9OUzogJ2ZiX21vYmlsZV9hcHBfaW50ZXJydXB0aW9ucycsXG4gICAgRVZFTlRfTkFNRV9USU1FX0JFVFdFRU5fU0VTU0lPTlM6ICdmYl9tb2JpbGVfdGltZV9iZXR3ZWVuX3Nlc3Npb25zJyxcbiAgICBFVkVOVF9OQU1FX0NPTVBMRVRFRF9SRUdJU1RSQVRJT046ICdmYl9tb2JpbGVfY29tcGxldGVfcmVnaXN0cmF0aW9uJyxcbiAgICBFVkVOVF9OQU1FX1ZJRVdFRF9DT05URU5UOiAnZmJfbW9iaWxlX2NvbnRlbnRfdmlldycsXG4gICAgRVZFTlRfTkFNRV9TRUFSQ0hFRDogJ2ZiX21vYmlsZV9zZWFyY2gnLFxuICAgIEVWRU5UX05BTUVfUkFURUQ6ICdmYl9tb2JpbGVfcmF0ZScsXG4gICAgRVZFTlRfTkFNRV9DT01QTEVURURfVFVUT1JJQUw6ICdmYl9tb2JpbGVfdHV0b3JpYWxfY29tcGxldGlvbicsXG4gICAgRVZFTlRfTkFNRV9QVVNIX1RPS0VOX09CVEFJTkVEOiAnZmJfbW9iaWxlX29idGFpbl9wdXNoX3Rva2VuJyxcbiAgICBFVkVOVF9OQU1FX0FEREVEX1RPX0NBUlQ6ICdmYl9tb2JpbGVfYWRkX3RvX2NhcnQnLFxuICAgIEVWRU5UX05BTUVfQURERURfVE9fV0lTSExJU1Q6ICdmYl9tb2JpbGVfYWRkX3RvX3dpc2hsaXN0JyxcbiAgICBFVkVOVF9OQU1FX0lOSVRJQVRFRF9DSEVDS09VVDogJ2ZiX21vYmlsZV9pbml0aWF0ZWRfY2hlY2tvdXQnLFxuICAgIEVWRU5UX05BTUVfQURERURfUEFZTUVOVF9JTkZPOiAnZmJfbW9iaWxlX2FkZF9wYXltZW50X2luZm8nLFxuICAgIEVWRU5UX05BTUVfUFVSQ0hBU0VEOiAnZmJfbW9iaWxlX3B1cmNoYXNlJyxcbiAgICBFVkVOVF9OQU1FX0FDSElFVkVEX0xFVkVMOiAnZmJfbW9iaWxlX2xldmVsX2FjaGlldmVkJyxcbiAgICBFVkVOVF9OQU1FX1VOTE9DS0VEX0FDSElFVkVNRU5UOiAnZmJfbW9iaWxlX2FjaGlldmVtZW50X3VubG9ja2VkJyxcbiAgICBFVkVOVF9OQU1FX1NQRU5UX0NSRURJVFM6ICdmYl9tb2JpbGVfc3BlbnRfY3JlZGl0cycsXG4gICAgRVZFTlRfUEFSQU1fQ1VSUkVOQ1k6ICdmYl9jdXJyZW5jeScsXG4gICAgRVZFTlRfUEFSQU1fUkVHSVNUUkFUSU9OX01FVEhPRDogJ2ZiX3JlZ2lzdHJhdGlvbl9tZXRob2QnLFxuICAgIEVWRU5UX1BBUkFNX0NPTlRFTlRfVFlQRTogJ2ZiX2NvbnRlbnRfdHlwZScsXG4gICAgRVZFTlRfUEFSQU1fQ09OVEVOVF9JRDogJ2ZiX2NvbnRlbnRfaWQnLFxuICAgIEVWRU5UX1BBUkFNX1NFQVJDSF9TVFJJTkc6ICdmYl9zZWFyY2hfc3RyaW5nJyxcbiAgICBFVkVOVF9QQVJBTV9TVUNDRVNTOiAnZmJfc3VjY2VzcycsXG4gICAgRVZFTlRfUEFSQU1fTUFYX1JBVElOR19WQUxVRTogJ2ZiX21heF9yYXRpbmdfdmFsdWUnLFxuICAgIEVWRU5UX1BBUkFNX1BBWU1FTlRfSU5GT19BVkFJTEFCTEU6ICdmYl9wYXltZW50X2luZm9fYXZhaWxhYmxlJyxcbiAgICBFVkVOVF9QQVJBTV9OVU1fSVRFTVM6ICdmYl9udW1faXRlbXMnLFxuICAgIEVWRU5UX1BBUkFNX0xFVkVMOiAnZmJfbGV2ZWwnLFxuICAgIEVWRU5UX1BBUkFNX0RFU0NSSVBUSU9OOiAnZmJfZGVzY3JpcHRpb24nLFxuICAgIEVWRU5UX1BBUkFNX1NPVVJDRV9BUFBMSUNBVElPTjogJ2ZiX21vYmlsZV9sYXVuY2hfc291cmNlJyxcbiAgICBFVkVOVF9QQVJBTV9WQUxVRV9ZRVM6ICcxJyxcbiAgICBFVkVOVF9QQVJBTV9WQUxVRV9OTzogJzAnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBMb2dpbiB0byBGYWNlYm9vayB0byBhdXRoZW50aWNhdGUgdGhpcyBhcHAuXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICoge1xuICAgKiAgIHN0YXR1czogJ2Nvbm5lY3RlZCcsXG4gICAqICAgYXV0aFJlc3BvbnNlOiB7XG4gICAqICAgICBzZXNzaW9uX2tleTogdHJ1ZSxcbiAgICogICAgIGFjY2Vzc1Rva2VuOiAna2draDNnNDJraDRnMjNraDRnMmtoMzRnMmtnNGsyaDRna2gzZzRrMmg0Z2syM2g0Z2syaDM0Z2syMzRnazJoMzRBbmRTb09uJyxcbiAgICogICAgIGV4cGlyZXNJbjogNTE4Mzk3OSxcbiAgICogICAgIHNpZzogJy4uLicsXG4gICAqICAgICBzZWNyZXQ6ICcuLi4nLFxuICAgKiAgICAgdXNlcklEOiAnNjM0NTY1NDM1J1xuICAgKiAgIH1cbiAgICogfVxuICAgKlxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gIHBlcm1pc3Npb25zIExpc3Qgb2YgW3Blcm1pc3Npb25zXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvZmFjZWJvb2stbG9naW4vcGVybWlzc2lvbnMpIHRoaXMgYXBwIGhhcyB1cG9uIGxvZ2dpbmcgaW4uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZhY2Vib29rTG9naW5SZXNwb25zZT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIHN0YXR1cyBvYmplY3QgaWYgbG9naW4gc3VjY2VlZHMsIGFuZCByZWplY3RzIGlmIGxvZ2luIGZhaWxzLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dpbihwZXJtaXNzaW9uczogc3RyaW5nW10pOiBQcm9taXNlPEZhY2Vib29rTG9naW5SZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dpbiB0byBGYWNlYm9vayB1c2luZyBMaW1pdGVkIExvZ2luIChpT1MgT25seSlcbiAgICpcbiAgICogYGBgdHlwZXNjcmlwdFxuICAgKiB7XG4gICAqICAgc3RhdHVzOiAnY29ubmVjdGVkJyxcbiAgICogICBhdXRoUmVzcG9uc2U6IHtcbiAgICogICAgIGF1dGhlbnRpY2F0aW9uVG9rZW46ICdrZ2toM2c0MmtoNGcyM2toNGcya2gzNGcya2c0azJoNGdraDNnNGsyaDRnazIzaDRnazJoMzRnazIzNGdrMmgzNEFuZFNvT24nLFxuICAgKiAgICAgbm9uY2U6ICdmb28nLFxuICAgKiAgICAgdXNlcklEOiAnNjM0NTY1NDM1J1xuICAgKiAgIH1cbiAgICogfVxuICAgKlxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gIHBlcm1pc3Npb25zIExpc3Qgb2YgW3Blcm1pc3Npb25zXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvZmFjZWJvb2stbG9naW4vbGltaXRlZC1sb2dpbi9wZXJtaXNzaW9ucykgdGhpcyBhcHAgaGFzIHVwb24gbG9nZ2luZyBpbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8RmFjZWJvb2tMb2dpblJlc3BvbnNlPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgc3RhdHVzIG9iamVjdCBpZiBsb2dpbiBzdWNjZWVkcywgYW5kIHJlamVjdHMgaWYgbG9naW4gZmFpbHMuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ2luV2l0aExpbWl0ZWRUcmFja2luZyhwZXJtaXNzaW9uczogc3RyaW5nW10pOiBQcm9taXNlPEZhY2Vib29rTG9naW5SZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgdXNlciBoYXMgYXBwcm92ZWQgYWxsIG5lY2Vzc2FyeSBwZXJtaXNzaW9uc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSAgcGVybWlzc2lvbnMgTGlzdCBvZiBbcGVybWlzc2lvbnNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9mYWNlYm9vay1sb2dpbi9wZXJtaXNzaW9ucykgdG8gY2hlY2sgZm9yXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIHN1Y2Nlc3Mgc3RyaW5nIGlmIGFsbCBwYXNzZWQgcGVybWlzc2lvbnMgYXJlIGdyYW50ZWQsIG9yIGFuIGVycm9yIHN0cmluZyBpZiBhbnkgcGVybWlzc2lvbnMgYXJlIG5vdCBncmFudGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNoZWNrSGFzQ29ycmVjdFBlcm1pc3Npb25zKHBlcm1pc3Npb25zOiBzdHJpbmdbXSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGRhdGEgYWNjZXNzIGhhcyBleHBpcmVkIGZvciB0aGUgdXNlclxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBzdWNjZXNzIHN0cmluZyBpZiBkYXRhIGFjY2VzcyBpcyBleHBpcmVkLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNEYXRhQWNjZXNzRXhwaXJlZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWF1dGhvcml6ZSBkYXRhIGFjY2VzcyBhZnRlciBpdCBoYXMgZXhwaXJlZFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGYWNlYm9va0xvZ2luUmVzcG9uc2U+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBzdGF0dXMgb2JqZWN0IGlmIGxvZ2luIHN1Y2NlZWRzLCBhbmQgcmVqZWN0cyBpZiBsb2dpbiBmYWlscy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVhdXRob3JpemVEYXRhQWNjZXNzKCk6IFByb21pc2U8RmFjZWJvb2tMb2dpblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ291dCBvZiBGYWNlYm9vay5cbiAgICpcbiAgICogRm9yIG1vcmUgaW5mbyBzZWUgdGhlIFtGYWNlYm9vayBkb2NzXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvcmVmZXJlbmNlL2phdmFzY3JpcHQvRkIubG9nb3V0KVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIGEgc3VjY2Vzc2Z1bCBsb2dvdXQsIGFuZCByZWplY3RzIGlmIGxvZ291dCBmYWlscy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhIHVzZXIgaXMgbG9nZ2VkIGluIHRvIEZhY2Vib29rIGFuZCBoYXMgYXV0aGVudGljYXRlZCB5b3VyIGFwcC4gIFRoZXJlIGFyZSB0aHJlZSBwb3NzaWJsZSBzdGF0ZXMgZm9yIGEgdXNlcjpcbiAgICpcbiAgICogMSkgdGhlIHVzZXIgaXMgbG9nZ2VkIGludG8gRmFjZWJvb2sgYW5kIGhhcyBhdXRoZW50aWNhdGVkIHlvdXIgYXBwbGljYXRpb24gKGNvbm5lY3RlZClcbiAgICogMikgdGhlIHVzZXIgaXMgbG9nZ2VkIGludG8gRmFjZWJvb2sgYnV0IGhhcyBub3QgYXV0aGVudGljYXRlZCB5b3VyIGFwcGxpY2F0aW9uIChub3RfYXV0aG9yaXplZClcbiAgICogMykgdGhlIHVzZXIgaXMgZWl0aGVyIG5vdCBsb2dnZWQgaW50byBGYWNlYm9vayBvciBleHBsaWNpdGx5IGxvZ2dlZCBvdXQgb2YgeW91ciBhcHBsaWNhdGlvbiBzbyBpdCBkb2Vzbid0IGF0dGVtcHQgdG8gY29ubmVjdCB0byBGYWNlYm9vayBhbmQgdGh1cywgd2UgZG9uJ3Qga25vdyBpZiB0aGV5J3ZlIGF1dGhlbnRpY2F0ZWQgeW91ciBhcHBsaWNhdGlvbiBvciBub3QgKHVua25vd24pXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggYSByZXNwb25zZSBsaWtlOlxuICAgKlxuICAgKiBgYGBcbiAgICoge1xuICAgKiAgIGF1dGhSZXNwb25zZToge1xuICAgKiAgICAgdXNlcklEOiAnMTIzNDU2Nzg5MTIzNDUnLFxuICAgKiAgICAgYWNjZXNzVG9rZW46ICdrZ2toM2c0MmtoNGcyM2toNGcya2gzNGcya2c0azJoNGdraDNnNGsyaDRnazIzaDRnazJoMzRnazIzNGdrMmgzNEFuZFNvT24nLFxuICAgKiAgICAgc2Vzc2lvbl9LZXk6IHRydWUsXG4gICAqICAgICBleHBpcmVzSW46ICc1MTgzNzM4JyxcbiAgICogICAgIHNpZzogJy4uLidcbiAgICogICB9LFxuICAgKiAgIHN0YXR1czogJ2Nvbm5lY3RlZCdcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24gc2VlIHRoZSBbRmFjZWJvb2sgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3JlZmVyZW5jZS9qYXZhc2NyaXB0L0ZCLmdldExvZ2luU3RhdHVzKVxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBzdGF0dXMsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRMb2dpblN0YXR1cygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBGYWNlYm9vayBhY2Nlc3MgdG9rZW4gZm9yIHVzaW5nIEZhY2Vib29rIHNlcnZpY2VzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYW4gYWNjZXNzIHRva2VuLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWNjZXNzVG9rZW4oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHByb2ZpbGUgaW5mb3JtYXRpb24gZm9yIHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXJcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHN1Y2Nlc3MgZGF0YSwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEN1cnJlbnRQcm9maWxlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgb25lIG9mIHZhcmlvdXMgRmFjZWJvb2sgZGlhbG9ncy4gRXhhbXBsZSBvZiBvcHRpb25zIGZvciBhIFNoYXJlIGRpYWxvZzpcbiAgICpcbiAgICogYGBgXG4gICAqIHtcbiAgICogICBtZXRob2Q6ICdzaGFyZScsXG4gICAqICAgaHJlZjogJ2h0dHA6Ly9leGFtcGxlLmNvbScsXG4gICAqICAgY2FwdGlvbjogJ1N1Y2ggY2FwdGlvbiwgdmVyeSBmZWVkLicsXG4gICAqICAgZGVzY3JpcHRpb246ICdNdWNoIGRlc2NyaXB0aW9uJyxcbiAgICogICBwaWN0dXJlOiAnaHR0cDovL2V4YW1wbGUuY29tL2ltYWdlLnBuZydcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogRm9yIG1vcmUgb3B0aW9ucyBzZWUgdGhlIFtDb3Jkb3ZhIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vY29yZG92YS1wbHVnaW4tZmFjZWJvb2stY29ubmVjdC9jb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vay1jb25uZWN0I3Nob3ctYS1kaWFsb2cpIGFuZCB0aGUgW0ZhY2Vib29rIGRvY3NdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9qYXZhc2NyaXB0L3JlZmVyZW5jZS9GQi51aSlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIGRpYWxvZyBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBzdWNjZXNzIGRhdGEsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93RGlhbG9nKG9wdGlvbnM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBjYWxsIHRvIEZhY2Vib29rIEdyYXBoIEFQSS4gQ2FuIHRha2UgYWRkaXRpb25hbCBwZXJtaXNzaW9ucyBiZXlvbmQgdGhvc2UgZ3JhbnRlZCBvbiBsb2dpbi5cbiAgICpcbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24gc2VlOlxuICAgKlxuICAgKiAgQ2FsbGluZyB0aGUgR3JhcGggQVBJIC0gaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2phdmFzY3JpcHQvcmVmZXJlbmNlL0ZCLmFwaVxuICAgKiAgR3JhcGggRXhwbG9yZXIgLSBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL3Rvb2xzL2V4cGxvcmVyXG4gICAqICBHcmFwaCBBUEkgLSBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvZ3JhcGgtYXBpXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgcmVxdWVzdFBhdGggR3JhcGggQVBJIGVuZHBvaW50IHlvdSB3YW50IHRvIGNhbGxcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gIHBlcm1pc3Npb25zIExpc3Qgb2YgW3Blcm1pc3Npb25zXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvZmFjZWJvb2stbG9naW4vcGVybWlzc2lvbnMpIGZvciB0aGlzIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgaHR0cE1ldGhvZCBIVFRQIG1ldGhvZCBmb3IgdGhlIHJlcXVlc3QsIG9uZSBvZiBcIkdFVFwiLCBcIlBPU1RcIiwgb3IgXCJERUxFVEVcIiAoZGVmYXVsdCBpcyBcIkdFVFwiKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlc3VsdCBvZiB0aGUgcmVxdWVzdCwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFwaShyZXF1ZXN0UGF0aDogc3RyaW5nLCBwZXJtaXNzaW9uczogc3RyaW5nW10sIGh0dHBNZXRob2Q/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2cgYW4gZXZlbnQuICBGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgdGhlIEV2ZW50cyBzZWN0aW9uIGFib3ZlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gIG5hbWUgTmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtPYmplY3R9ICBbcGFyYW1zXSBBbiBvYmplY3QgY29udGFpbmluZyBleHRyYSBkYXRhIHRvIGxvZyB3aXRoIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge251bWJlcn0gIFt2YWx1ZVRvU3VtXSBhbnkgdmFsdWUgdG8gYmUgYWRkZWQgdG8gYWRkZWQgdG8gYSBzdW0gb24gZWFjaCBldmVudFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMyxcbiAgICBlcnJvckluZGV4OiA0LFxuICB9KVxuICBsb2dFdmVudChuYW1lOiBzdHJpbmcsIHBhcmFtcz86IE9iamVjdCwgdmFsdWVUb1N1bT86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIHRoZSBhdXRvIGxvZyBhcHAgZXZlbnQgZmVhdHVyZSAtIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9hcHAtZXZlbnRzL2dkcHItY29tcGxpYW5jZS9cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSAgZW5hYmxlZCB2YWx1ZSB0byBiZSBzZXRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgc2V0QXV0b0xvZ0FwcEV2ZW50c0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBjb2xsZWN0aW9uIG9mIGFkdmVydGlzZXItaWRcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSAgZW5hYmxlZCB2YWx1ZSB0byBiZSBzZXRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0QWR2ZXJ0aXNlcklEQ29sbGVjdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBhZHZlcnRpc2VyIHRyYWNraW5nIChpT1MgT25seSlcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSAgZW5hYmxlZCB2YWx1ZSB0byBiZSBzZXRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0QWR2ZXJ0aXNlclRyYWNraW5nRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZyBhIHB1cmNoYXNlLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgdGhlIEV2ZW50cyBzZWN0aW9uIGFib3ZlLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gIHZhbHVlIFZhbHVlIG9mIHRoZSBwdXJjaGFzZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9ICBjdXJyZW5jeSBUaGUgY3VycmVuY3ksIGFzIGFuIFtJU08gNDIxNyBjdXJyZW5jeSBjb2RlXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT180MjE3KVxuICAgKiBAcGFyYW0ge09iamVjdH0gIHBhcmFtcyBBbiBvYmplY3QgY29udGFpbmluZyBleHRyYSBkYXRhIHRvIGxvZyB3aXRoIHRoZSBldmVudFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dQdXJjaGFzZSh2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeTogc3RyaW5nLCBwYXJhbXM/OiBPYmplY3QpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkZWZlcnJlZCBhcHAgbGlua1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXREZWZlcnJlZEFwcGxpbmsoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFudWFsbHkgbG9nIGFjdGl2YXRpb24gZXZlbnRzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFjdGl2YXRlQXBwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=