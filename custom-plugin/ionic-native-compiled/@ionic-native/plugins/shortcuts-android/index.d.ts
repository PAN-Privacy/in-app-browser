import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export interface Intent {
    activityClass?: string;
    activityPackage?: string;
    action?: string;
    flags?: number;
    categories?: string[];
    data?: string;
    extras?: {
        [key: string]: any;
    };
}
export interface Shortcut {
    id: string;
    shortLabel?: string;
    longLabel?: string;
    iconFromResource?: string;
    iconBitmap?: string;
    intent?: Intent;
}
/**
 * @name ShortcutsAndroid
 * @description
 * Use this plugin to create shortcuts in Android. Use this plugin to handle Intents on your application.
 * For more information on Android App Shortcuts: https://developer.android.com/guide/topics/ui/shortcuts.html
 * For more information on Android Intents: https://developer.android.com/guide/components/intents-filters.html
 *
 * The work that went into creating this plug-in was inspired by the existing plugins: cordova-plugin-shortcut and cordova-plugin-webintent2.
 *
 * @usage
 * Please do refer to the original plugin's repo for detailed usage. The usage example here might not be sufficient.
 *
 * ```typescript
 * import { ShortcutsAndroid } from '@ionic-native/shortcuts-android/ngx';
 *
 *
 * constructor(private shortcutsAndroid: ShortcutsAndroid) { }
 *
 * ...
 *
 * this.shortcutsAndroid.supportsDynamic()
 *   .then((supported: boolean) => console.log(`Dynamic shortcuts are ${supported ? '' : 'not'} supported`))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class ShortcutsOriginal extends IonicNativePlugin {
    /**
     * Checking if Dynamic Shortcuts are supported
     *
     * Dynamic shortcuts require SDK 25 or later. Use supportsDynamic to check whether the current device meets those requirements.
     * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates if dynamic shortcuts are supported
     */
    supportsDynamic(): Promise<boolean>;
    /**
     * Checking if Pinned Shortcuts are supported
     *
     * Pinned shortcuts require SDK 26 or later. Use supportsPinned to check whether the current device meets those requirements.
     * @return {Promise<boolean>}  returns a promise that resolves with a boolean that indicates if pinned shortcuts are supported
     */
    supportsPinned(): Promise<boolean>;
    /**
     * Setting the application Dynamic Shortcuts
     *
     * Use `setDynamic` to set the Dynamic Shortcuts for the application, all at once. The shortcuts provided as a parameter will override any existing shortcut. Use an empty array to clear out existing shortcuts.
     * @param {Shortcut[]} [shortcut] Array of shortcuts to add.
     * @return {Promise<void>}
     */
    setDynamic(shortcuts: Shortcut[]): Promise<void>;
    /**
     * Adding a Pinned Shortcut to the launcher
     *
     * Use `addPinned` to add a new Pinned Shortcut to the launcher.
     * @param {Shortcut[]} [shortcut] Array of shortcuts to add.
     * @return {Promise<void>}
     */
    addPinned(shortcut: Shortcut): Promise<void>;
    /**
     * Querying current Intent
     *
     * Use `getIntent` to get the Intent that was used to launch the current instance of the Cordova activity.
     * @return {Promise<Intent>} returns the Intent that was used to launch the current instance of the Cordova activity
     */
    getIntent(): Promise<Intent>;
    /**
     * Subscribe to new Intents
     *
     * Use onNewIntent to trigger your code every time a new Intent is sent to your Cordova activity. Note that in some conditions this subscription may not be executed.
     * @return {Observable<Intent>} emits the new Intent each time a shortcut is activated
     */
    onNewIntent(): Observable<Intent>;
}

export declare const Shortcuts: ShortcutsOriginal;