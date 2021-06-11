import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Android Notch
 * @description
 * This plugin enables developers to get the cutout and android devices inset sizes
 * It is based on the cordova plugin developed by @tobspr: https://github.com/tobspr/cordova-plugin-android-notch
 * This plugin works on all android versions, but we can only detect notches starting from Android 9.
 *
 * @usage
 * ```typescript
 * import { AndroidNotch } from '@ionic-native/android-notch/ngx';
 *
 *
 * constructor(private androidNotch: AndroidNotch) { }
 *
 * ...
 *
 *
 * this.androidNotch.hasCutout()
 *    .then((px: number) => console.log('Inset size: '), px)
 *    .catch((error: any) => console.log('Error: ', error))
 *
 * this.androidNotch.getInsetTop()
 *    .then((px: number) => console.log('Inset size: '), px)
 *    .catch((error: any) => console.log('Error: ', error))
 *
 * this.androidNotch.getInsetRight()
 *    .then((px: number) => console.log('Inset size: '), px)
 *    .catch((error: any) => console.log('Error: ', error))
 *
 * this.androidNotch.getInsetBottom()
 *    .then((px: number) => console.log('Inset size: '), px)
 *    .catch((error: any) => console.log('Error: ', error))
 *
 * this.androidNotch.getInsetLeft()
 *    .then((px: number) => console.log('Inset size: '), px)
 *    .catch((error: any) => console.log('Error: ', error))
 *
 * ```
 */
export declare class AndroidNotchOriginal extends IonicNativePlugin {
    /**
     * Returns true if the android device has cutout
     *
     * @return {Promise<boolean>}
     */
    hasCutout(): Promise<boolean>;
    /**
     * Returns the heigth of the top inset
     *
     * @return {Promise<number>}
     */
    getInsetTop(): Promise<number>;
    /**
     * Returns the heigth of the right inset
     *
     * @return {Promise<number>}
     */
    getInsetRight(): Promise<number>;
    /**
     * Returns the heigth of the bottom inset
     * @return {Promise<number>}
     */
    getInsetBottom(): Promise<number>;
    /**
     * Returns the heigth of the left inset
     * @return {Promise<number>}
     */
    getInsetLeft(): Promise<number>;
}

export declare const AndroidNotch: AndroidNotchOriginal;