import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Restart
 * @description
 * This plugin to restart android application
 *
 * @usage
 * ```typescript
 * import { Restart } from '@ionic-native/restart';
 *
 *
 * constructor(private restart: Restart) { }
 *
 * ...
 *
 *
 * this.restart.restart(true)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class RestartOriginal extends IonicNativePlugin {
    restart(cold: boolean): Promise<any>;
    enableDebug(): Promise<any>;
}

export declare const Restart: RestartOriginal;