import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name System Alert Window Permission
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { SystemAlertWindowPermission } from '@ionic-native/system-alert-window-permission/ngx';
 *
 *
 * constructor(private systemAlertWindowPermission: SystemAlertWindowPermission) { }
 *
 * ...
 *
 *
 * this.systemAlertWindowPermission.hasPermission()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * this.systemAlertWindowPermission.requestPermission()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class SystemAlertWindowPermission extends IonicNativePlugin {
    /**
     * Check permission
     * @return {Promise<any>} return 0 when dont have SYSTEM_ALERT_WINDOW permission, 1 when have SYSTEM_ALERT_WINDOW permission
     */
    hasPermission(): Promise<any>;
    /**
     * Request permission
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    requestPermission(): Promise<any>;
    /**
     * Open notification Settings
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    openNotificationSettings(): Promise<any>;
}
