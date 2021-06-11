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
var AndroidPermissionsOriginal = /** @class */ (function (_super) {
    __extends(AndroidPermissionsOriginal, _super);
    function AndroidPermissionsOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PERMISSION = {
            ACCESS_CHECKIN_PROPERTIES: 'android.permission.ACCESS_CHECKIN_PROPERTIES',
            ACCESS_COARSE_LOCATION: 'android.permission.ACCESS_COARSE_LOCATION',
            ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION',
            ACCESS_LOCATION_EXTRA_COMMANDS: 'android.permission.ACCESS_LOCATION_EXTRA_COMMANDS',
            ACCESS_MOCK_LOCATION: 'android.permission.ACCESS_MOCK_LOCATION',
            ACCESS_NETWORK_STATE: 'android.permission.ACCESS_NETWORK_STATE',
            ACCESS_SURFACE_FLINGER: 'android.permission.ACCESS_SURFACE_FLINGER',
            ACCESS_WIFI_STATE: 'android.permission.ACCESS_WIFI_STATE',
            ACCOUNT_MANAGER: 'android.permission.ACCOUNT_MANAGER',
            ADD_VOICEMAIL: 'com.android.voicemail.permission.ADD_VOICEMAIL',
            AUTHENTICATE_ACCOUNTS: 'android.permission.AUTHENTICATE_ACCOUNTS',
            BATTERY_STATS: 'android.permission.BATTERY_STATS',
            BIND_ACCESSIBILITY_SERVICE: 'android.permission.BIND_ACCESSIBILITY_SERVICE',
            BIND_APPWIDGET: 'android.permission.BIND_APPWIDGET',
            BIND_CARRIER_MESSAGING_SERVICE: 'android.permission.BIND_CARRIER_MESSAGING_SERVICE',
            BIND_DEVICE_ADMIN: 'android.permission.BIND_DEVICE_ADMIN',
            BIND_DREAM_SERVICE: 'android.permission.BIND_DREAM_SERVICE',
            BIND_INPUT_METHOD: 'android.permission.BIND_INPUT_METHOD',
            BIND_NFC_SERVICE: 'android.permission.BIND_NFC_SERVICE',
            BIND_NOTIFICATION_LISTENER_SERVICE: 'android.permission.BIND_NOTIFICATION_LISTENER_SERVICE',
            BIND_PRINT_SERVICE: 'android.permission.BIND_PRINT_SERVICE',
            BIND_REMOTEVIEWS: 'android.permission.BIND_REMOTEVIEWS',
            BIND_TEXT_SERVICE: 'android.permission.BIND_TEXT_SERVICE',
            BIND_TV_INPUT: 'android.permission.BIND_TV_INPUT',
            BIND_VOICE_INTERACTION: 'android.permission.BIND_VOICE_INTERACTION',
            BIND_VPN_SERVICE: 'android.permission.BIND_VPN_SERVICE',
            BIND_WALLPAPER: 'android.permission.BIND_WALLPAPER',
            BLUETOOTH: 'android.permission.BLUETOOTH',
            BLUETOOTH_ADMIN: 'android.permission.BLUETOOTH_ADMIN',
            BLUETOOTH_PRIVILEGED: 'android.permission.BLUETOOTH_PRIVILEGED',
            BODY_SENSORS: 'android.permission.BODY_SENSORS',
            BRICK: 'android.permission.BRICK',
            BROADCAST_PACKAGE_REMOVED: 'android.permission.BROADCAST_PACKAGE_REMOVED',
            BROADCAST_SMS: 'android.permission.BROADCAST_SMS',
            BROADCAST_STICKY: 'android.permission.BROADCAST_STICKY',
            BROADCAST_WAP_PUSH: 'android.permission.BROADCAST_WAP_PUSH',
            CALL_PHONE: 'android.permission.CALL_PHONE',
            CALL_PRIVILEGED: 'android.permission.CALL_PRIVILEGED',
            CAMERA: 'android.permission.CAMERA',
            CAPTURE_AUDIO_OUTPUT: 'android.permission.CAPTURE_AUDIO_OUTPUT',
            CAPTURE_SECURE_VIDEO_OUTPUT: 'android.permission.CAPTURE_SECURE_VIDEO_OUTPUT',
            CAPTURE_VIDEO_OUTPUT: 'android.permission.CAPTURE_VIDEO_OUTPUT',
            CHANGE_COMPONENT_ENABLED_STATE: 'android.permission.CHANGE_COMPONENT_ENABLED_STATE',
            CHANGE_CONFIGURATION: 'android.permission.CHANGE_CONFIGURATION',
            CHANGE_NETWORK_STATE: 'android.permission.CHANGE_NETWORK_STATE',
            CHANGE_WIFI_MULTICAST_STATE: 'android.permission.CHANGE_WIFI_MULTICAST_STATE',
            CHANGE_WIFI_STATE: 'android.permission.CHANGE_WIFI_STATE',
            CLEAR_APP_CACHE: 'android.permission.CLEAR_APP_CACHE',
            CLEAR_APP_USER_DATA: 'android.permission.CLEAR_APP_USER_DATA',
            CONTROL_LOCATION_UPDATES: 'android.permission.CONTROL_LOCATION_UPDATES',
            DELETE_CACHE_FILES: 'android.permission.DELETE_CACHE_FILES',
            DELETE_PACKAGES: 'android.permission.DELETE_PACKAGES',
            DEVICE_POWER: 'android.permission.DEVICE_POWER',
            DIAGNOSTIC: 'android.permission.DIAGNOSTIC',
            DISABLE_KEYGUARD: 'android.permission.DISABLE_KEYGUARD',
            DUMP: 'android.permission.DUMP',
            EXPAND_STATUS_BAR: 'android.permission.EXPAND_STATUS_BAR',
            FACTORY_TEST: 'android.permission.FACTORY_TEST',
            FLASHLIGHT: 'android.permission.FLASHLIGHT',
            FORCE_BACK: 'android.permission.FORCE_BACK',
            GET_ACCOUNTS: 'android.permission.GET_ACCOUNTS',
            GET_PACKAGE_SIZE: 'android.permission.GET_PACKAGE_SIZE',
            GET_TASKS: 'android.permission.GET_TASKS',
            GET_TOP_ACTIVITY_INFO: 'android.permission.GET_TOP_ACTIVITY_INFO',
            GLOBAL_SEARCH: 'android.permission.GLOBAL_SEARCH',
            HARDWARE_TEST: 'android.permission.HARDWARE_TEST',
            INJECT_EVENTS: 'android.permission.INJECT_EVENTS',
            INSTALL_LOCATION_PROVIDER: 'android.permission.INSTALL_LOCATION_PROVIDER',
            INSTALL_PACKAGES: 'android.permission.INSTALL_PACKAGES',
            INSTALL_SHORTCUT: 'com.android.launcher.permission.INSTALL_SHORTCUT',
            INTERNAL_SYSTEM_WINDOW: 'android.permission.INTERNAL_SYSTEM_WINDOW',
            INTERNET: 'android.permission.INTERNET',
            KILL_BACKGROUND_PROCESSES: 'android.permission.KILL_BACKGROUND_PROCESSES',
            LOCATION_HARDWARE: 'android.permission.LOCATION_HARDWARE',
            MANAGE_ACCOUNTS: 'android.permission.MANAGE_ACCOUNTS',
            MANAGE_APP_TOKENS: 'android.permission.MANAGE_APP_TOKENS',
            MANAGE_DOCUMENTS: 'android.permission.MANAGE_DOCUMENTS',
            MASTER_CLEAR: 'android.permission.MASTER_CLEAR',
            MEDIA_CONTENT_CONTROL: 'android.permission.MEDIA_CONTENT_CONTROL',
            MODIFY_AUDIO_SETTINGS: 'android.permission.MODIFY_AUDIO_SETTINGS',
            MODIFY_PHONE_STATE: 'android.permission.MODIFY_PHONE_STATE',
            MOUNT_FORMAT_FILESYSTEMS: 'android.permission.MOUNT_FORMAT_FILESYSTEMS',
            MOUNT_UNMOUNT_FILESYSTEMS: 'android.permission.MOUNT_UNMOUNT_FILESYSTEMS',
            NFC: 'android.permission.NFC',
            PERSISTENT_ACTIVITY: 'android.permission.PERSISTENT_ACTIVITY',
            PROCESS_OUTGOING_CALLS: 'android.permission.PROCESS_OUTGOING_CALLS',
            READ_CALENDAR: 'android.permission.READ_CALENDAR',
            READ_CALL_LOG: 'android.permission.READ_CALL_LOG',
            READ_CONTACTS: 'android.permission.READ_CONTACTS',
            READ_EXTERNAL_STORAGE: 'android.permission.READ_EXTERNAL_STORAGE',
            READ_FRAME_BUFFER: 'android.permission.READ_FRAME_BUFFER',
            READ_HISTORY_BOOKMARKS: 'com.android.browser.permission.READ_HISTORY_BOOKMARKS',
            READ_INPUT_STATE: 'android.permission.READ_INPUT_STATE',
            READ_LOGS: 'android.permission.READ_LOGS',
            READ_PHONE_STATE: 'android.permission.READ_PHONE_STATE',
            READ_PROFILE: 'android.permission.READ_PROFILE',
            READ_SMS: 'android.permission.READ_SMS',
            READ_SOCIAL_STREAM: 'android.permission.READ_SOCIAL_STREAM',
            READ_SYNC_SETTINGS: 'android.permission.READ_SYNC_SETTINGS',
            READ_SYNC_STATS: 'android.permission.READ_SYNC_STATS',
            READ_USER_DICTIONARY: 'android.permission.READ_USER_DICTIONARY',
            READ_VOICEMAIL: 'com.android.voicemail.permission.READ_VOICEMAIL',
            REBOOT: 'android.permission.REBOOT',
            RECEIVE_BOOT_COMPLETED: 'android.permission.RECEIVE_BOOT_COMPLETED',
            RECEIVE_MMS: 'android.permission.RECEIVE_MMS',
            RECEIVE_SMS: 'android.permission.RECEIVE_SMS',
            RECEIVE_WAP_PUSH: 'android.permission.RECEIVE_WAP_PUSH',
            RECORD_AUDIO: 'android.permission.RECORD_AUDIO',
            REORDER_TASKS: 'android.permission.REORDER_TASKS',
            RESTART_PACKAGES: 'android.permission.RESTART_PACKAGES',
            SEND_RESPOND_VIA_MESSAGE: 'android.permission.SEND_RESPOND_VIA_MESSAGE',
            SEND_SMS: 'android.permission.SEND_SMS',
            SET_ACTIVITY_WATCHER: 'android.permission.SET_ACTIVITY_WATCHER',
            SET_ALARM: 'com.android.alarm.permission.SET_ALARM',
            SET_ALWAYS_FINISH: 'android.permission.SET_ALWAYS_FINISH',
            SET_ANIMATION_SCALE: 'android.permission.SET_ANIMATION_SCALE',
            SET_DEBUG_APP: 'android.permission.SET_DEBUG_APP',
            SET_ORIENTATION: 'android.permission.SET_ORIENTATION',
            SET_POINTER_SPEED: 'android.permission.SET_POINTER_SPEED',
            SET_PREFERRED_APPLICATIONS: 'android.permission.SET_PREFERRED_APPLICATIONS',
            SET_PROCESS_LIMIT: 'android.permission.SET_PROCESS_LIMIT',
            SET_TIME: 'android.permission.SET_TIME',
            SET_TIME_ZONE: 'android.permission.SET_TIME_ZONE',
            SET_WALLPAPER: 'android.permission.SET_WALLPAPER',
            SET_WALLPAPER_HINTS: 'android.permission.SET_WALLPAPER_HINTS',
            SIGNAL_PERSISTENT_PROCESSES: 'android.permission.SIGNAL_PERSISTENT_PROCESSES',
            STATUS_BAR: 'android.permission.STATUS_BAR',
            SUBSCRIBED_FEEDS_READ: 'android.permission.SUBSCRIBED_FEEDS_READ',
            SUBSCRIBED_FEEDS_WRITE: 'android.permission.SUBSCRIBED_FEEDS_WRITE',
            SYSTEM_ALERT_WINDOW: 'android.permission.SYSTEM_ALERT_WINDOW',
            TRANSMIT_IR: 'android.permission.TRANSMIT_IR',
            UNINSTALL_SHORTCUT: 'com.android.launcher.permission.UNINSTALL_SHORTCUT',
            UPDATE_DEVICE_STATS: 'android.permission.UPDATE_DEVICE_STATS',
            USE_CREDENTIALS: 'android.permission.USE_CREDENTIALS',
            USE_SIP: 'android.permission.USE_SIP',
            VIBRATE: 'android.permission.VIBRATE',
            WAKE_LOCK: 'android.permission.WAKE_LOCK',
            WRITE_APN_SETTINGS: 'android.permission.WRITE_APN_SETTINGS',
            WRITE_CALENDAR: 'android.permission.WRITE_CALENDAR',
            WRITE_CALL_LOG: 'android.permission.WRITE_CALL_LOG',
            WRITE_CONTACTS: 'android.permission.WRITE_CONTACTS',
            WRITE_EXTERNAL_STORAGE: 'android.permission.WRITE_EXTERNAL_STORAGE',
            WRITE_GSERVICES: 'android.permission.WRITE_GSERVICES',
            WRITE_HISTORY_BOOKMARKS: 'com.android.browser.permission.WRITE_HISTORY_BOOKMARKS',
            WRITE_PROFILE: 'android.permission.WRITE_PROFILE',
            WRITE_SECURE_SETTINGS: 'android.permission.WRITE_SECURE_SETTINGS',
            WRITE_SETTINGS: 'android.permission.WRITE_SETTINGS',
            WRITE_SMS: 'android.permission.WRITE_SMS',
            WRITE_SOCIAL_STREAM: 'android.permission.WRITE_SOCIAL_STREAM',
            WRITE_SYNC_SETTINGS: 'android.permission.WRITE_SYNC_SETTINGS',
            WRITE_USER_DICTIONARY: 'android.permission.WRITE_USER_DICTIONARY',
            WRITE_VOICEMAIL: 'com.android.voicemail.permission.WRITE_VOICEMAIL',
        };
        return _this;
    }
    AndroidPermissionsOriginal.prototype.checkPermission = function (permission) { return cordova(this, "checkPermission", {}, arguments); };
    AndroidPermissionsOriginal.prototype.requestPermission = function (permission) { return cordova(this, "requestPermission", {}, arguments); };
    AndroidPermissionsOriginal.prototype.requestPermissions = function (permissions) { return cordova(this, "requestPermissions", {}, arguments); };
    AndroidPermissionsOriginal.prototype.hasPermission = function (permission) { return cordova(this, "hasPermission", {}, arguments); };
    AndroidPermissionsOriginal.pluginName = "AndroidPermissions";
    AndroidPermissionsOriginal.plugin = "cordova-plugin-android-permissions";
    AndroidPermissionsOriginal.pluginRef = "cordova.plugins.permissions";
    AndroidPermissionsOriginal.repo = "https://github.com/NeoLSN/cordova-plugin-android-permissions";
    AndroidPermissionsOriginal.platforms = ["Android"];
    return AndroidPermissionsOriginal;
}(IonicNativePlugin));
var AndroidPermissions = new AndroidPermissionsOriginal();
export { AndroidPermissions };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FuZHJvaWQtcGVybWlzc2lvbnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBc0NoQyxzQ0FBaUI7OztRQUN2RCxnQkFBVSxHQUFRO1lBQ2hCLHlCQUF5QixFQUFFLDhDQUE4QztZQUN6RSxzQkFBc0IsRUFBRSwyQ0FBMkM7WUFDbkUsb0JBQW9CLEVBQUUseUNBQXlDO1lBQy9ELDhCQUE4QixFQUFFLG1EQUFtRDtZQUNuRixvQkFBb0IsRUFBRSx5Q0FBeUM7WUFDL0Qsb0JBQW9CLEVBQUUseUNBQXlDO1lBQy9ELHNCQUFzQixFQUFFLDJDQUEyQztZQUNuRSxpQkFBaUIsRUFBRSxzQ0FBc0M7WUFDekQsZUFBZSxFQUFFLG9DQUFvQztZQUNyRCxhQUFhLEVBQUUsZ0RBQWdEO1lBQy9ELHFCQUFxQixFQUFFLDBDQUEwQztZQUNqRSxhQUFhLEVBQUUsa0NBQWtDO1lBQ2pELDBCQUEwQixFQUFFLCtDQUErQztZQUMzRSxjQUFjLEVBQUUsbUNBQW1DO1lBQ25ELDhCQUE4QixFQUFFLG1EQUFtRDtZQUNuRixpQkFBaUIsRUFBRSxzQ0FBc0M7WUFDekQsa0JBQWtCLEVBQUUsdUNBQXVDO1lBQzNELGlCQUFpQixFQUFFLHNDQUFzQztZQUN6RCxnQkFBZ0IsRUFBRSxxQ0FBcUM7WUFDdkQsa0NBQWtDLEVBQUUsdURBQXVEO1lBQzNGLGtCQUFrQixFQUFFLHVDQUF1QztZQUMzRCxnQkFBZ0IsRUFBRSxxQ0FBcUM7WUFDdkQsaUJBQWlCLEVBQUUsc0NBQXNDO1lBQ3pELGFBQWEsRUFBRSxrQ0FBa0M7WUFDakQsc0JBQXNCLEVBQUUsMkNBQTJDO1lBQ25FLGdCQUFnQixFQUFFLHFDQUFxQztZQUN2RCxjQUFjLEVBQUUsbUNBQW1DO1lBQ25E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YyxFQUFFLG1DQUFtQztZQUNuRCxjQUFjLEVBQUUsbUNBQW1DO1lBQ25ELHNCQUFzQixFQUFFLDJDQUEyQztZQUNuRSxlQUFlLEVBQUUsb0NBQW9DO1lBQ3JELHVCQUF1QixFQUFFLHdEQUF3RDtZQUNqRixhQUFhLEVBQUUsa0NBQWtDO1lBQ2pELHFCQUFxQixFQUFFLDBDQUEwQztZQUNqRSxjQUFjLEVBQUUsbUNBQW1DO1lBQ25ELFNBQVMsRUFBRSw4QkFBOEI7WUFDekMsbUJBQW1CLEVBQUUsd0NBQXdDO1lBQzdELG1CQUFtQixFQUFFLHdDQUF3QztZQUM3RCxxQkFBcUIsRUFBRSwwQ0FBMEM7WUFDakUsZUFBZSxFQUFFLGtEQUFrRDtTQUNwRSxDQUFDOzs7SUFRRiw0Q0FBZSxhQUFDLFVBQWtCO0lBVWxDLDhDQUFpQixhQUFDLFVBQWtCO0lBVXBDLCtDQUFrQixhQUFDLFdBQXFCO0lBVXhDLDBDQUFhLGFBQUMsVUFBa0I7Ozs7Ozs2QkF2T2xDO0VBdUN3QyxpQkFBaUI7U0FBNUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQW5kcm9pZCBQZXJtaXNzaW9uc1xuICogQHByZW1pZXIgYW5kcm9pZC1wZXJtaXNzaW9uc1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBpcyBkZXNpZ25lZCB0byBzdXBwb3J0IEFuZHJvaWQgbmV3IHBlcm1pc3Npb25zIGNoZWNraW5nIG1lY2hhbmlzbS5cbiAqXG4gKiBZb3UgY2FuIGZpbmQgYWxsIHBlcm1pc3Npb25zIGhlcmU6IGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL3JlZmVyZW5jZS9hbmRyb2lkL01hbmlmZXN0LnBlcm1pc3Npb24uaHRtbFxuICpcbiAqIEB1c2FnZVxuICogYGBgXG4gKiBpbXBvcnQgeyBBbmRyb2lkUGVybWlzc2lvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FuZHJvaWQtcGVybWlzc2lvbnMvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhbmRyb2lkUGVybWlzc2lvbnM6IEFuZHJvaWRQZXJtaXNzaW9ucykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuY2hlY2tQZXJtaXNzaW9uKHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLlBFUk1JU1NJT04uQ0FNRVJBKS50aGVuKFxuICogICByZXN1bHQgPT4gY29uc29sZS5sb2coJ0hhcyBwZXJtaXNzaW9uPycscmVzdWx0Lmhhc1Blcm1pc3Npb24pLFxuICogICBlcnIgPT4gdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb24odGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5DQU1FUkEpXG4gKiApO1xuICpcbiAqIHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLnJlcXVlc3RQZXJtaXNzaW9ucyhbdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5DQU1FUkEsIHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLlBFUk1JU1NJT04uR0VUX0FDQ09VTlRTXSk7XG4gKlxuICogYGBgXG4gKlxuICogQW5kcm9pZCAyNiBhbmQgYWJvdmU6IGR1ZSB0byBBbmRyb2lkIDI2J3MgY2hhbmdlcyB0byBwZXJtaXNzaW9ucyBoYW5kbGluZyAocGVybWlzc2lvbnMgYXJlIHJlcXVlc3RlZCBhdCB0aW1lIG9mIHVzZSByYXRoZXIgdGhhbiBhdCBydW50aW1lLCkgaWYgeW91ciBhcHAgZG9lcyBub3QgaW5jbHVkZSBhbnkgZnVuY3Rpb25zIChlZy4gb3RoZXIgSW9uaWMgTmF0aXZlIHBsdWdpbnMpIHRoYXQgdXRpbGl6ZSBhIHBhcnRpY3VsYXIgcGVybWlzc2lvbiwgdGhlbiBgcmVxdWVzdFBlcm1pc3Npb24oKWAgYW5kIGByZXF1ZXN0UGVybWlzc2lvbnMoKWAgd2lsbCByZXNvbHZlIGltbWVkaWF0ZWx5IHdpdGggbm8gcHJvbXB0IHNob3duIHRvIHRoZSB1c2VyLiAgVGh1cywgeW91IG11c3QgaW5jbHVkZSBhIGZ1bmN0aW9uIHV0aWxpemluZyB0aGUgZmVhdHVyZSB5b3Ugd291bGQgbGlrZSB0byB1c2UgYmVmb3JlIHJlcXVlc3RpbmcgcGVybWlzc2lvbiBmb3IgaXQuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQW5kcm9pZFBlcm1pc3Npb25zJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYW5kcm9pZC1wZXJtaXNzaW9ucycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5wZXJtaXNzaW9ucycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTmVvTFNOL2NvcmRvdmEtcGx1Z2luLWFuZHJvaWQtcGVybWlzc2lvbnMnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmRyb2lkUGVybWlzc2lvbnMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIFBFUk1JU1NJT046IGFueSA9IHtcbiAgICBBQ0NFU1NfQ0hFQ0tJTl9QUk9QRVJUSUVTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19DSEVDS0lOX1BST1BFUlRJRVMnLFxuICAgIEFDQ0VTU19DT0FSU0VfTE9DQVRJT046ICdhbmRyb2lkLnBlcm1pc3Npb24uQUNDRVNTX0NPQVJTRV9MT0NBVElPTicsXG4gICAgQUNDRVNTX0ZJTkVfTE9DQVRJT046ICdhbmRyb2lkLnBlcm1pc3Npb24uQUNDRVNTX0ZJTkVfTE9DQVRJT04nLFxuICAgIEFDQ0VTU19MT0NBVElPTl9FWFRSQV9DT01NQU5EUzogJ2FuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfTE9DQVRJT05fRVhUUkFfQ09NTUFORFMnLFxuICAgIEFDQ0VTU19NT0NLX0xPQ0FUSU9OOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19NT0NLX0xPQ0FUSU9OJyxcbiAgICBBQ0NFU1NfTkVUV09SS19TVEFURTogJ2FuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfTkVUV09SS19TVEFURScsXG4gICAgQUNDRVNTX1NVUkZBQ0VfRkxJTkdFUjogJ2FuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfU1VSRkFDRV9GTElOR0VSJyxcbiAgICBBQ0NFU1NfV0lGSV9TVEFURTogJ2FuZHJvaWQucGVybWlzc2lvbi5BQ0NFU1NfV0lGSV9TVEFURScsXG4gICAgQUNDT1VOVF9NQU5BR0VSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ09VTlRfTUFOQUdFUicsXG4gICAgQUREX1ZPSUNFTUFJTDogJ2NvbS5hbmRyb2lkLnZvaWNlbWFpbC5wZXJtaXNzaW9uLkFERF9WT0lDRU1BSUwnLFxuICAgIEFVVEhFTlRJQ0FURV9BQ0NPVU5UUzogJ2FuZHJvaWQucGVybWlzc2lvbi5BVVRIRU5USUNBVEVfQUNDT1VOVFMnLFxuICAgIEJBVFRFUllfU1RBVFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uQkFUVEVSWV9TVEFUUycsXG4gICAgQklORF9BQ0NFU1NJQklMSVRZX1NFUlZJQ0U6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9BQ0NFU1NJQklMSVRZX1NFUlZJQ0UnLFxuICAgIEJJTkRfQVBQV0lER0VUOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfQVBQV0lER0VUJyxcbiAgICBCSU5EX0NBUlJJRVJfTUVTU0FHSU5HX1NFUlZJQ0U6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9DQVJSSUVSX01FU1NBR0lOR19TRVJWSUNFJyxcbiAgICBCSU5EX0RFVklDRV9BRE1JTjogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX0RFVklDRV9BRE1JTicsXG4gICAgQklORF9EUkVBTV9TRVJWSUNFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfRFJFQU1fU0VSVklDRScsXG4gICAgQklORF9JTlBVVF9NRVRIT0Q6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9JTlBVVF9NRVRIT0QnLFxuICAgIEJJTkRfTkZDX1NFUlZJQ0U6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9ORkNfU0VSVklDRScsXG4gICAgQklORF9OT1RJRklDQVRJT05fTElTVEVORVJfU0VSVklDRTogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX05PVElGSUNBVElPTl9MSVNURU5FUl9TRVJWSUNFJyxcbiAgICBCSU5EX1BSSU5UX1NFUlZJQ0U6ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9QUklOVF9TRVJWSUNFJyxcbiAgICBCSU5EX1JFTU9URVZJRVdTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfUkVNT1RFVklFV1MnLFxuICAgIEJJTkRfVEVYVF9TRVJWSUNFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfVEVYVF9TRVJWSUNFJyxcbiAgICBCSU5EX1RWX0lOUFVUOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJJTkRfVFZfSU5QVVQnLFxuICAgIEJJTkRfVk9JQ0VfSU5URVJBQ1RJT046ICdhbmRyb2lkLnBlcm1pc3Npb24uQklORF9WT0lDRV9JTlRFUkFDVElPTicsXG4gICAgQklORF9WUE5fU0VSVklDRTogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX1ZQTl9TRVJWSUNFJyxcbiAgICBCSU5EX1dBTExQQVBFUjogJ2FuZHJvaWQucGVybWlzc2lvbi5CSU5EX1dBTExQQVBFUicsXG4gICAgQkxVRVRPT1RIOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJMVUVUT09USCcsXG4gICAgQkxVRVRPT1RIX0FETUlOOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJMVUVUT09USF9BRE1JTicsXG4gICAgQkxVRVRPT1RIX1BSSVZJTEVHRUQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uQkxVRVRPT1RIX1BSSVZJTEVHRUQnLFxuICAgIEJPRFlfU0VOU09SUzogJ2FuZHJvaWQucGVybWlzc2lvbi5CT0RZX1NFTlNPUlMnLFxuICAgIEJSSUNLOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJSSUNLJyxcbiAgICBCUk9BRENBU1RfUEFDS0FHRV9SRU1PVkVEOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkJST0FEQ0FTVF9QQUNLQUdFX1JFTU9WRUQnLFxuICAgIEJST0FEQ0FTVF9TTVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uQlJPQURDQVNUX1NNUycsXG4gICAgQlJPQURDQVNUX1NUSUNLWTogJ2FuZHJvaWQucGVybWlzc2lvbi5CUk9BRENBU1RfU1RJQ0tZJyxcbiAgICBCUk9BRENBU1RfV0FQX1BVU0g6ICdhbmRyb2lkLnBlcm1pc3Npb24uQlJPQURDQVNUX1dBUF9QVVNIJyxcbiAgICBDQUxMX1BIT05FOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNBTExfUEhPTkUnLFxuICAgIENBTExfUFJJVklMRUdFRDogJ2FuZHJvaWQucGVybWlzc2lvbi5DQUxMX1BSSVZJTEVHRUQnLFxuICAgIENBTUVSQTogJ2FuZHJvaWQucGVybWlzc2lvbi5DQU1FUkEnLFxuICAgIENBUFRVUkVfQVVESU9fT1VUUFVUOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNBUFRVUkVfQVVESU9fT1VUUFVUJyxcbiAgICBDQVBUVVJFX1NFQ1VSRV9WSURFT19PVVRQVVQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0FQVFVSRV9TRUNVUkVfVklERU9fT1VUUFVUJyxcbiAgICBDQVBUVVJFX1ZJREVPX09VVFBVVDogJ2FuZHJvaWQucGVybWlzc2lvbi5DQVBUVVJFX1ZJREVPX09VVFBVVCcsXG4gICAgQ0hBTkdFX0NPTVBPTkVOVF9FTkFCTEVEX1NUQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNIQU5HRV9DT01QT05FTlRfRU5BQkxFRF9TVEFURScsXG4gICAgQ0hBTkdFX0NPTkZJR1VSQVRJT046ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0hBTkdFX0NPTkZJR1VSQVRJT04nLFxuICAgIENIQU5HRV9ORVRXT1JLX1NUQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNIQU5HRV9ORVRXT1JLX1NUQVRFJyxcbiAgICBDSEFOR0VfV0lGSV9NVUxUSUNBU1RfU1RBVEU6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ0hBTkdFX1dJRklfTVVMVElDQVNUX1NUQVRFJyxcbiAgICBDSEFOR0VfV0lGSV9TVEFURTogJ2FuZHJvaWQucGVybWlzc2lvbi5DSEFOR0VfV0lGSV9TVEFURScsXG4gICAgQ0xFQVJfQVBQX0NBQ0hFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNMRUFSX0FQUF9DQUNIRScsXG4gICAgQ0xFQVJfQVBQX1VTRVJfREFUQTogJ2FuZHJvaWQucGVybWlzc2lvbi5DTEVBUl9BUFBfVVNFUl9EQVRBJyxcbiAgICBDT05UUk9MX0xPQ0FUSU9OX1VQREFURVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uQ09OVFJPTF9MT0NBVElPTl9VUERBVEVTJyxcbiAgICBERUxFVEVfQ0FDSEVfRklMRVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uREVMRVRFX0NBQ0hFX0ZJTEVTJyxcbiAgICBERUxFVEVfUEFDS0FHRVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uREVMRVRFX1BBQ0tBR0VTJyxcbiAgICBERVZJQ0VfUE9XRVI6ICdhbmRyb2lkLnBlcm1pc3Npb24uREVWSUNFX1BPV0VSJyxcbiAgICBESUFHTk9TVElDOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkRJQUdOT1NUSUMnLFxuICAgIERJU0FCTEVfS0VZR1VBUkQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uRElTQUJMRV9LRVlHVUFSRCcsXG4gICAgRFVNUDogJ2FuZHJvaWQucGVybWlzc2lvbi5EVU1QJyxcbiAgICBFWFBBTkRfU1RBVFVTX0JBUjogJ2FuZHJvaWQucGVybWlzc2lvbi5FWFBBTkRfU1RBVFVTX0JBUicsXG4gICAgRkFDVE9SWV9URVNUOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkZBQ1RPUllfVEVTVCcsXG4gICAgRkxBU0hMSUdIVDogJ2FuZHJvaWQucGVybWlzc2lvbi5GTEFTSExJR0hUJyxcbiAgICBGT1JDRV9CQUNLOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkZPUkNFX0JBQ0snLFxuICAgIEdFVF9BQ0NPVU5UUzogJ2FuZHJvaWQucGVybWlzc2lvbi5HRVRfQUNDT1VOVFMnLFxuICAgIEdFVF9QQUNLQUdFX1NJWkU6ICdhbmRyb2lkLnBlcm1pc3Npb24uR0VUX1BBQ0tBR0VfU0laRScsXG4gICAgR0VUX1RBU0tTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkdFVF9UQVNLUycsXG4gICAgR0VUX1RPUF9BQ1RJVklUWV9JTkZPOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkdFVF9UT1BfQUNUSVZJVFlfSU5GTycsXG4gICAgR0xPQkFMX1NFQVJDSDogJ2FuZHJvaWQucGVybWlzc2lvbi5HTE9CQUxfU0VBUkNIJyxcbiAgICBIQVJEV0FSRV9URVNUOiAnYW5kcm9pZC5wZXJtaXNzaW9uLkhBUkRXQVJFX1RFU1QnLFxuICAgIElOSkVDVF9FVkVOVFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uSU5KRUNUX0VWRU5UUycsXG4gICAgSU5TVEFMTF9MT0NBVElPTl9QUk9WSURFUjogJ2FuZHJvaWQucGVybWlzc2lvbi5JTlNUQUxMX0xPQ0FUSU9OX1BST1ZJREVSJyxcbiAgICBJTlNUQUxMX1BBQ0tBR0VTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLklOU1RBTExfUEFDS0FHRVMnLFxuICAgIElOU1RBTExfU0hPUlRDVVQ6ICdjb20uYW5kcm9pZC5sYXVuY2hlci5wZXJtaXNzaW9uLklOU1RBTExfU0hPUlRDVVQnLFxuICAgIElOVEVSTkFMX1NZU1RFTV9XSU5ET1c6ICdhbmRyb2lkLnBlcm1pc3Npb24uSU5URVJOQUxfU1lTVEVNX1dJTkRPVycsXG4gICAgSU5URVJORVQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uSU5URVJORVQnLFxuICAgIEtJTExfQkFDS0dST1VORF9QUk9DRVNTRVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uS0lMTF9CQUNLR1JPVU5EX1BST0NFU1NFUycsXG4gICAgTE9DQVRJT05fSEFSRFdBUkU6ICdhbmRyb2lkLnBlcm1pc3Npb24uTE9DQVRJT05fSEFSRFdBUkUnLFxuICAgIE1BTkFHRV9BQ0NPVU5UUzogJ2FuZHJvaWQucGVybWlzc2lvbi5NQU5BR0VfQUNDT1VOVFMnLFxuICAgIE1BTkFHRV9BUFBfVE9LRU5TOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1BTkFHRV9BUFBfVE9LRU5TJyxcbiAgICBNQU5BR0VfRE9DVU1FTlRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk1BTkFHRV9ET0NVTUVOVFMnLFxuICAgIE1BU1RFUl9DTEVBUjogJ2FuZHJvaWQucGVybWlzc2lvbi5NQVNURVJfQ0xFQVInLFxuICAgIE1FRElBX0NPTlRFTlRfQ09OVFJPTDogJ2FuZHJvaWQucGVybWlzc2lvbi5NRURJQV9DT05URU5UX0NPTlRST0wnLFxuICAgIE1PRElGWV9BVURJT19TRVRUSU5HUzogJ2FuZHJvaWQucGVybWlzc2lvbi5NT0RJRllfQVVESU9fU0VUVElOR1MnLFxuICAgIE1PRElGWV9QSE9ORV9TVEFURTogJ2FuZHJvaWQucGVybWlzc2lvbi5NT0RJRllfUEhPTkVfU1RBVEUnLFxuICAgIE1PVU5UX0ZPUk1BVF9GSUxFU1lTVEVNUzogJ2FuZHJvaWQucGVybWlzc2lvbi5NT1VOVF9GT1JNQVRfRklMRVNZU1RFTVMnLFxuICAgIE1PVU5UX1VOTU9VTlRfRklMRVNZU1RFTVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uTU9VTlRfVU5NT1VOVF9GSUxFU1lTVEVNUycsXG4gICAgTkZDOiAnYW5kcm9pZC5wZXJtaXNzaW9uLk5GQycsXG4gICAgUEVSU0lTVEVOVF9BQ1RJVklUWTogJ2FuZHJvaWQucGVybWlzc2lvbi5QRVJTSVNURU5UX0FDVElWSVRZJyxcbiAgICBQUk9DRVNTX09VVEdPSU5HX0NBTExTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlBST0NFU1NfT1VUR09JTkdfQ0FMTFMnLFxuICAgIFJFQURfQ0FMRU5EQVI6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9DQUxFTkRBUicsXG4gICAgUkVBRF9DQUxMX0xPRzogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX0NBTExfTE9HJyxcbiAgICBSRUFEX0NPTlRBQ1RTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfQ09OVEFDVFMnLFxuICAgIFJFQURfRVhURVJOQUxfU1RPUkFHRTogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX0VYVEVSTkFMX1NUT1JBR0UnLFxuICAgIFJFQURfRlJBTUVfQlVGRkVSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfRlJBTUVfQlVGRkVSJyxcbiAgICBSRUFEX0hJU1RPUllfQk9PS01BUktTOiAnY29tLmFuZHJvaWQuYnJvd3Nlci5wZXJtaXNzaW9uLlJFQURfSElTVE9SWV9CT09LTUFSS1MnLFxuICAgIFJFQURfSU5QVVRfU1RBVEU6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9JTlBVVF9TVEFURScsXG4gICAgUkVBRF9MT0dTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfTE9HUycsXG4gICAgUkVBRF9QSE9ORV9TVEFURTogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX1BIT05FX1NUQVRFJyxcbiAgICBSRUFEX1BST0ZJTEU6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9QUk9GSUxFJyxcbiAgICBSRUFEX1NNUzogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX1NNUycsXG4gICAgUkVBRF9TT0NJQUxfU1RSRUFNOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfU09DSUFMX1NUUkVBTScsXG4gICAgUkVBRF9TWU5DX1NFVFRJTkdTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfU1lOQ19TRVRUSU5HUycsXG4gICAgUkVBRF9TWU5DX1NUQVRTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfU1lOQ19TVEFUUycsXG4gICAgUkVBRF9VU0VSX0RJQ1RJT05BUlk6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9VU0VSX0RJQ1RJT05BUlknLFxuICAgIFJFQURfVk9JQ0VNQUlMOiAnY29tLmFuZHJvaWQudm9pY2VtYWlsLnBlcm1pc3Npb24uUkVBRF9WT0lDRU1BSUwnLFxuICAgIFJFQk9PVDogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUJPT1QnLFxuICAgIFJFQ0VJVkVfQk9PVF9DT01QTEVURUQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVDRUlWRV9CT09UX0NPTVBMRVRFRCcsXG4gICAgUkVDRUlWRV9NTVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVDRUlWRV9NTVMnLFxuICAgIFJFQ0VJVkVfU01TOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQ0VJVkVfU01TJyxcbiAgICBSRUNFSVZFX1dBUF9QVVNIOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQ0VJVkVfV0FQX1BVU0gnLFxuICAgIFJFQ09SRF9BVURJTzogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUNPUkRfQVVESU8nLFxuICAgIFJFT1JERVJfVEFTS1M6ICdhbmRyb2lkLnBlcm1pc3Npb24uUkVPUkRFUl9UQVNLUycsXG4gICAgUkVTVEFSVF9QQUNLQUdFUzogJ2FuZHJvaWQucGVybWlzc2lvbi5SRVNUQVJUX1BBQ0tBR0VTJyxcbiAgICBTRU5EX1JFU1BPTkRfVklBX01FU1NBR0U6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VORF9SRVNQT05EX1ZJQV9NRVNTQUdFJyxcbiAgICBTRU5EX1NNUzogJ2FuZHJvaWQucGVybWlzc2lvbi5TRU5EX1NNUycsXG4gICAgU0VUX0FDVElWSVRZX1dBVENIRVI6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VUX0FDVElWSVRZX1dBVENIRVInLFxuICAgIFNFVF9BTEFSTTogJ2NvbS5hbmRyb2lkLmFsYXJtLnBlcm1pc3Npb24uU0VUX0FMQVJNJyxcbiAgICBTRVRfQUxXQVlTX0ZJTklTSDogJ2FuZHJvaWQucGVybWlzc2lvbi5TRVRfQUxXQVlTX0ZJTklTSCcsXG4gICAgU0VUX0FOSU1BVElPTl9TQ0FMRTogJ2FuZHJvaWQucGVybWlzc2lvbi5TRVRfQU5JTUFUSU9OX1NDQUxFJyxcbiAgICBTRVRfREVCVUdfQVBQOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9ERUJVR19BUFAnLFxuICAgIFNFVF9PUklFTlRBVElPTjogJ2FuZHJvaWQucGVybWlzc2lvbi5TRVRfT1JJRU5UQVRJT04nLFxuICAgIFNFVF9QT0lOVEVSX1NQRUVEOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9QT0lOVEVSX1NQRUVEJyxcbiAgICBTRVRfUFJFRkVSUkVEX0FQUExJQ0FUSU9OUzogJ2FuZHJvaWQucGVybWlzc2lvbi5TRVRfUFJFRkVSUkVEX0FQUExJQ0FUSU9OUycsXG4gICAgU0VUX1BST0NFU1NfTElNSVQ6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VUX1BST0NFU1NfTElNSVQnLFxuICAgIFNFVF9USU1FOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9USU1FJyxcbiAgICBTRVRfVElNRV9aT05FOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNFVF9USU1FX1pPTkUnLFxuICAgIFNFVF9XQUxMUEFQRVI6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0VUX1dBTExQQVBFUicsXG4gICAgU0VUX1dBTExQQVBFUl9ISU5UUzogJ2FuZHJvaWQucGVybWlzc2lvbi5TRVRfV0FMTFBBUEVSX0hJTlRTJyxcbiAgICBTSUdOQUxfUEVSU0lTVEVOVF9QUk9DRVNTRVM6ICdhbmRyb2lkLnBlcm1pc3Npb24uU0lHTkFMX1BFUlNJU1RFTlRfUFJPQ0VTU0VTJyxcbiAgICBTVEFUVVNfQkFSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlNUQVRVU19CQVInLFxuICAgIFNVQlNDUklCRURfRkVFRFNfUkVBRDogJ2FuZHJvaWQucGVybWlzc2lvbi5TVUJTQ1JJQkVEX0ZFRURTX1JFQUQnLFxuICAgIFNVQlNDUklCRURfRkVFRFNfV1JJVEU6ICdhbmRyb2lkLnBlcm1pc3Npb24uU1VCU0NSSUJFRF9GRUVEU19XUklURScsXG4gICAgU1lTVEVNX0FMRVJUX1dJTkRPVzogJ2FuZHJvaWQucGVybWlzc2lvbi5TWVNURU1fQUxFUlRfV0lORE9XJyxcbiAgICBUUkFOU01JVF9JUjogJ2FuZHJvaWQucGVybWlzc2lvbi5UUkFOU01JVF9JUicsXG4gICAgVU5JTlNUQUxMX1NIT1JUQ1VUOiAnY29tLmFuZHJvaWQubGF1bmNoZXIucGVybWlzc2lvbi5VTklOU1RBTExfU0hPUlRDVVQnLFxuICAgIFVQREFURV9ERVZJQ0VfU1RBVFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uVVBEQVRFX0RFVklDRV9TVEFUUycsXG4gICAgVVNFX0NSRURFTlRJQUxTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlVTRV9DUkVERU5USUFMUycsXG4gICAgVVNFX1NJUDogJ2FuZHJvaWQucGVybWlzc2lvbi5VU0VfU0lQJyxcbiAgICBWSUJSQVRFOiAnYW5kcm9pZC5wZXJtaXNzaW9uLlZJQlJBVEUnLFxuICAgIFdBS0VfTE9DSzogJ2FuZHJvaWQucGVybWlzc2lvbi5XQUtFX0xPQ0snLFxuICAgIFdSSVRFX0FQTl9TRVRUSU5HUzogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9BUE5fU0VUVElOR1MnLFxuICAgIFdSSVRFX0NBTEVOREFSOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX0NBTEVOREFSJyxcbiAgICBXUklURV9DQUxMX0xPRzogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9DQUxMX0xPRycsXG4gICAgV1JJVEVfQ09OVEFDVFM6ICdhbmRyb2lkLnBlcm1pc3Npb24uV1JJVEVfQ09OVEFDVFMnLFxuICAgIFdSSVRFX0VYVEVSTkFMX1NUT1JBR0U6ICdhbmRyb2lkLnBlcm1pc3Npb24uV1JJVEVfRVhURVJOQUxfU1RPUkFHRScsXG4gICAgV1JJVEVfR1NFUlZJQ0VTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX0dTRVJWSUNFUycsXG4gICAgV1JJVEVfSElTVE9SWV9CT09LTUFSS1M6ICdjb20uYW5kcm9pZC5icm93c2VyLnBlcm1pc3Npb24uV1JJVEVfSElTVE9SWV9CT09LTUFSS1MnLFxuICAgIFdSSVRFX1BST0ZJTEU6ICdhbmRyb2lkLnBlcm1pc3Npb24uV1JJVEVfUFJPRklMRScsXG4gICAgV1JJVEVfU0VDVVJFX1NFVFRJTkdTOiAnYW5kcm9pZC5wZXJtaXNzaW9uLldSSVRFX1NFQ1VSRV9TRVRUSU5HUycsXG4gICAgV1JJVEVfU0VUVElOR1M6ICdhbmRyb2lkLnBlcm1pc3Npb24uV1JJVEVfU0VUVElOR1MnLFxuICAgIFdSSVRFX1NNUzogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9TTVMnLFxuICAgIFdSSVRFX1NPQ0lBTF9TVFJFQU06ICdhbmRyb2lkLnBlcm1pc3Npb24uV1JJVEVfU09DSUFMX1NUUkVBTScsXG4gICAgV1JJVEVfU1lOQ19TRVRUSU5HUzogJ2FuZHJvaWQucGVybWlzc2lvbi5XUklURV9TWU5DX1NFVFRJTkdTJyxcbiAgICBXUklURV9VU0VSX0RJQ1RJT05BUlk6ICdhbmRyb2lkLnBlcm1pc3Npb24uV1JJVEVfVVNFUl9ESUNUSU9OQVJZJyxcbiAgICBXUklURV9WT0lDRU1BSUw6ICdjb20uYW5kcm9pZC52b2ljZW1haWwucGVybWlzc2lvbi5XUklURV9WT0lDRU1BSUwnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBwZXJtaXNzaW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJtaXNzaW9uIFRoZSBuYW1lIG9mIHRoZSBwZXJtaXNzaW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8QW5kcm9pZFBlcm1pc3Npb25SZXNwb25zZT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNoZWNrUGVybWlzc2lvbihwZXJtaXNzaW9uOiBzdHJpbmcpOiBQcm9taXNlPEFuZHJvaWRQZXJtaXNzaW9uUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCBwZXJtaXNzaW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJtaXNzaW9uIFRoZSBuYW1lIG9mIHRoZSBwZXJtaXNzaW9uIHRvIHJlcXVlc3RcbiAgICogQHJldHVybiB7UHJvbWlzZTxBbmRyb2lkUGVybWlzc2lvblJlc3BvbnNlPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFBlcm1pc3Npb24ocGVybWlzc2lvbjogc3RyaW5nKTogUHJvbWlzZTxBbmRyb2lkUGVybWlzc2lvblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgcGVybWlzc2lvbnNcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGVybWlzc2lvbnMgQW4gYXJyYXkgd2l0aCBwZXJtaXNzaW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RQZXJtaXNzaW9ucyhwZXJtaXNzaW9uczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHN0aWxsIHdvcmtzIG5vdywgd2lsbCBub3Qgc3VwcG9ydCBpbiB0aGUgZnV0dXJlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGVybWlzc2lvbiBUaGUgbmFtZSBvZiB0aGUgcGVybWlzc2lvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEFuZHJvaWRQZXJtaXNzaW9uUmVzcG9uc2U+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoYXNQZXJtaXNzaW9uKHBlcm1pc3Npb246IHN0cmluZyk6IFByb21pc2U8QW5kcm9pZFBlcm1pc3Npb25SZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuZHJvaWRQZXJtaXNzaW9uUmVzcG9uc2Uge1xuICBoYXNQZXJtaXNzaW9uOiBib29sZWFuO1xufVxuIl19