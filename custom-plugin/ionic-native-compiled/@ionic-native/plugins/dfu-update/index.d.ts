import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export interface UpdateOptions {
    /**
     * A string that contains the identifier for the Bluetooth LE device to update. It will either be a MAC address (on Android) or a UUID (on iOS).
     */
    deviceId: string;
    /**
     * A string that is the path to the file to use in the update. It can be either in either `cdvfile://` or `file://` format.
     */
    fileUrl: string;
    /**
     * The PacketReceiptNotificationsValue (Default to 10)
     */
    packetReceiptNotificationsValue?: number;
}
/**
 * @name Dfu Update
 * @description
 * This plugin is a Wrapper to use Nordic Semiconductor's Device Firmware Update (DFU) service to update a Bluetooth LE device.
 *
 * @usage
 * ```typescript
 * import { DfuUpdate } from '@ionic-native/dfu-update/ngx';
 *
 *
 * constructor(private dfuUpdate: DfuUpdate) { }
 *
 * ...
 *
 *
 * this.dfuUpdate.updateFirmware('fileURL', 'deviceIdentifier')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class DfuUpdateOriginal extends IonicNativePlugin {
    /**
     * Start the Firmware-Update-Process
     * @param options - Options for the process
     * @return {Observable<any>} Returns a Observable that emits when something happens
     */
    updateFirmware(options: UpdateOptions): Observable<any>;
}

export declare const DfuUpdate: DfuUpdateOriginal;