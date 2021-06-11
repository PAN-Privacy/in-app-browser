import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export interface BLEScanOptions {
    /** true if duplicate devices should be reported, false (default) if devices should only be reported once.  */
    reportDuplicates?: boolean;
}
/**
 * @name BLE
 * @description
 * This plugin enables communication between a phone and Bluetooth Low Energy (BLE) peripherals.
 *
 * The plugin provides a simple JavaScript API for iOS and Android.
 *
 * - Scan for peripherals
 * - Connect to a peripheral
 * - Read the value of a characteristic
 * - Write new value to a characteristic
 * - Get notified when characteristic's value changes
 *
 * Advertising information is returned when scanning for peripherals. Service, characteristic, and property info is returned when connecting to a peripheral. All access is via service and characteristic UUIDs. The plugin manages handles internally.
 *
 * Simultaneous connections to multiple peripherals are supported.
 *
 * @usage
 *
 * ```typescript
 *
 * import { BLE } from '@ionic-native/ble/ngx';
 *
 * constructor(private ble: BLE) { }
 *
 * ```
 *
 * ## Peripheral Data
 *
 * Peripheral Data is passed to the success callback when scanning and connecting. Limited data is passed when scanning.
 *
 * ```typescript
 *   {
 *       'name': 'Battery Demo',
 *       'id': '20:FF:D0:FF:D1:C0',
 *       'advertising': [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
 *       'rssi': -55
 *   }
 * ```
 * After connecting, the peripheral object also includes service, characteristic and descriptor information.
 *
 * ```typescript
 *   {
 *       'name': 'Battery Demo',
 *       'id': '20:FF:D0:FF:D1:C0',
 *       'advertising': [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
 *       'rssi': -55,
 *       'services': [
 *           '1800',
 *           '1801',
 *           '180f'
 *       ],
 *       'characteristics': [
 *           {
 *               'service': '1800',
 *               'characteristic': '2a00',
 *               'properties': [
 *                   'Read'
 *               ]
 *           },
 *           {
 *               'service': '1800',
 *               'characteristic': '2a01',
 *               'properties': [
 *                   'Read'
 *               ]
 *           },
 *           {
 *               'service': '1801',
 *               'characteristic': '2a05',
 *               'properties': [
 *                   'Read'
 *               ]
 *           },
 *           {
 *               'service': '180f',
 *               'characteristic': '2a19',
 *               'properties': [
 *                   'Read'
 *               ],
 *               'descriptors': [
 *                   {
 *                       'uuid': '2901'
 *                   },
 *                   {
 *                       'uuid': '2904'
 *                   }
 *               ]
 *           }
 *       ]
 *   }
 * ```
 *
 * ## Advertising Data
 * Bluetooth advertising data is returned in when scanning for devices. The format varies depending on your platform. On Android advertising data will be the raw advertising bytes. iOS does not allow access to raw advertising data, so a dictionary of data is returned.
 *
 * The advertising information for both Android and iOS appears to be a combination of advertising data and scan response data.
 *
 * ### Android
 *
 * ```typescript
 *   {
 *       'name': 'demo',
 *       'id': '00:1A:7D:DA:71:13',
 *       'advertising': ArrayBuffer,
 *      'rssi': -37
 *  }
 * ```
 *
 * Convert the advertising info to a Uint8Array for processing. `var adData = new Uint8Array(peripheral.advertising)`
 *
 * ### iOS
 *
 * Note that iOS uses the string value of the constants for the [Advertisement Data Retrieval Keys](https://developer.apple.com/library/ios/documentation/CoreBluetooth/Reference/CBCentralManagerDelegate_Protocol/index.html#//apple_ref/doc/constant_group/Advertisement_Data_Retrieval_Keys). This will likely change in the future.
 *
 * ```typescript
 *   {
 *       'name': 'demo',
 *       'id': 'D8479A4F-7517-BCD3-91B5-3302B2F81802',
 *       'advertising': {
 *           'kCBAdvDataChannel': 37,
 *           'kCBAdvDataServiceData': {
 *               'FED8': {
 *                   'byteLength': 7 // data not shown
 *               }
 *           },
 *           'kCBAdvDataLocalName': 'demo',
 *           'kCBAdvDataServiceUUIDs': ['FED8'],
 *           'kCBAdvDataManufacturerData': {
 *               'byteLength': 7  // data not shown
 *           },
 *           'kCBAdvDataTxPowerLevel': 32,
 *           'kCBAdvDataIsConnectable': true
 *       },
 *       'rssi': -53
 *   }
 * ```
 *
 * ## Typed Arrays
 *
 * This plugin uses typed Arrays or ArrayBuffers for sending and receiving data.
 *
 * This means that you need convert your data to ArrayBuffers before sending and from ArrayBuffers when receiving.
 *
 * ```typescript
 *   // ASCII only
 *   function stringToBytes(string) {
 *      var array = new Uint8Array(string.length);
 *      for (var i = 0, l = string.length; i < l; i++) {
 *          array[i] = string.charCodeAt(i);
 *       }
 *       return array.buffer;
 *   }
 *
 *   // ASCII only
 *   function bytesToString(buffer) {
 *       return String.fromCharCode.apply(null, new Uint8Array(buffer));
 *   }
 * ```
 * You can read more about typed arrays in these articles on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) and [HTML5 Rocks](http://www.html5rocks.com/en/tutorials/webgl/typed_arrays/).
 *
 * ## UUIDs
 *
 * UUIDs are always strings and not numbers. Some 16-bit UUIDs, such as '2220' look like integers, but they're not. (The integer 2220 is 0x8AC in hex.) This isn't a problem with 128 bit UUIDs since they look like strings 82b9e6e1-593a-456f-be9b-9215160ebcac. All 16-bit UUIDs should also be passed to methods as strings.
 *
 * @interfaces
 * BLEScanOptions
 */
export declare class BLEOriginal extends IonicNativePlugin {
    /**
     * Scan and discover BLE peripherals for the specified amount of time.
     *
     * @usage
     * ```
     * BLE.scan([], 5).subscribe(device => {
     *   console.log(JSON.stringify(device));
     * });
     * ```
     * @param {string[]} services  List of service UUIDs to discover, or `[]` to find all devices
     * @param {number} seconds  Number of seconds to run discovery
     * @returns {Observable<any>} Returns an Observable that notifies of each peripheral that is discovered during the specified time.
     */
    scan(services: string[], seconds: number): Observable<any>;
    /**
     * Scan and discover BLE peripherals until `stopScan` is called.
     *
     * @usage
     * ```
     * BLE.startScan([]).subscribe(device => {
     *   console.log(JSON.stringify(device));
     * });
     *
     * setTimeout(() => {
     *   BLE.stopScan();
     * }, 5000);
     * ```
     * @param {string[]} services  List of service UUIDs to discover, or `[]` to find all devices
     * @returns {Observable<any>} Returns an Observable that notifies of each peripheral discovered.
     */
    startScan(services: string[]): Observable<any>;
    /**
     * Scans for BLE devices. This function operates similarly to the `startScan` function, but allows you to specify extra options (like allowing duplicate device reports).
     * @param {string[]} services  List of service UUIDs to discover, or `[]` to find all devices
     * @param {BLEScanOptions} options Options
     * @returns {Observable<any>} Returns an Observable that notifies of each peripheral discovered.
     */
    startScanWithOptions(services: string[], options: BLEScanOptions): Observable<any>;
    /**
     * Stop a scan started by `startScan`.
     *
     * @usage
     * ```
     * BLE.startScan([]).subscribe(device => {
     *   console.log(JSON.stringify(device));
     * });
     * setTimeout(() => {
     *   BLE.stopScan().then(() => { console.log('scan stopped'); });
     * }, 5000);
     * ```
     * @returns {Promise<any>}
     */
    stopScan(): Promise<any>;
    /**
     * Set device pin.
     * @usage
     * ```
     *   BLE.setPin(pin).subscribe(success => {
     *     console.log(success);
     *   },
     *   failure => {
     *     console.log('failure');
     *   });
     * ```
     * @param {string} pin Pin of the device as a string
     * @return {Observable<any>} Returns an Observable that notifies of success/failure.
     */
    setPin(pin: string): Observable<any>;
    /**
     * Connect to a peripheral.
     * @usage
     * ```
     *   BLE.connect('12:34:56:78:9A:BC').subscribe(peripheralData => {
     *     console.log(peripheralData);
     *   },
     *   peripheralData => {
     *     console.log('disconnected');
     *   });
     * ```
     * @param {string} deviceId UUID or MAC address of the peripheral
     * @return {Observable<any>} Returns an Observable that notifies of connect/disconnect.
     */
    connect(deviceId: string): Observable<any>;
    /**
     * Establish an automatic connection to a peripheral. The phone will automatically connect to the Bluetooth peripheral
     * whenever it is in range. The autoConnect function uses callbacks instead of observables because connect and
     * disconnect can each be called many times as a devices connects and disconnects.
     *
     * On Android you can pass a MAC address directly to autoConnect. With iOS, you need to get a device id by scanning,
     * calling ble.peripheralsWithIdentifiers, or calling ble.connectedPeripheralsWithServices.
     *
     * @usage
     * ```
     *  someFunction() {
     *    this.ble.autoConnect(deviceId, onConnected.bind(this), onDisconnected.bind(this));
     *  }
     *
     *  onConnected(peripheral) {
     *    console.log(`Connected to ${peripheral.id}`)l
     *  }
     *
     *  onDisconnected(peripheral) {
     *    console.log(`Disconnected from ${peripheral.id}`)l
     *  }
     *
     * ```
     * @param {string} deviceId UUID or MAC address of the peripheral
     * @param {function} connectCallback function that is called with peripheral data when the devices connects
     * @param {function} disconnectCallback  function that is called with peripheral data when the devices disconnects
     */
    autoConnect(deviceId: string, connectCallback: any, disconnectCallback: any): void;
    /**
     * Request MTU size.
     * May be used to fix the Error 14 "Unlikely" on write requests with more than 20 bytes.
     * @usage
     * ```
     *   BLE.requestMtu('12:34:56:78:9A:BC', 512).then(() => {
     *     console.log('MTU Size Accepted');
     *   }, error => {
     *     console.log('MTU Size Failed');
     *   });
     * ```
     * @param {string} deviceId UUID or MAC address of the peripheral
     * @param {number} mtuSize The new MTU size. (23 - 517, default is usually 23. Max recommended: 512)
     * @return {Promise<any>} Returns a Promise.
     */
    requestMtu(deviceId: string, mtuSize: number): Promise<any>;
    /**
     * Refresh Device Cache
     * This method may fix a issue of old cached services and characteristics.
     * NOTE Since this uses an undocumented API it's not guaranteed to work.
     * If you choose a too low delay time (timeoutMillis) the method could fail.
     * @usage
     * ```
     *   BLE.refreshDeviceCache('12:34:56:78:9A:BC', 10000).then(discoveredServices => {
     *     console.log('The new discovered services after the clean: ', discoveredServices);
     *   }, error => {
     *     console.log('Refresh device cache failed.');
     *   });
     * ```
     * @param {string} deviceId UUID or MAC address of the peripheral
     * @param {number} timeoutMillis Delay in milliseconds after refresh before discovering services.
     * @return {Promise<any>} Returns a Promise.
     */
    refreshDeviceCache(deviceId: string, timeoutMillis: number): Promise<any>;
    /**
     * Disconnect from a peripheral.
     * @usage
     * ```
     *   BLE.disconnect('12:34:56:78:9A:BC').then(() => {
     *     console.log('Disconnected');
     *   });
     * ```
     * @param {string} deviceId  UUID or MAC address of the peripheral
     * @return {Promise<any>} Returns a Promise
     */
    disconnect(deviceId: string): Promise<any>;
    /**
     * Read the value of a characteristic.
     *
     * @param {string} deviceId  UUID or MAC address of the peripheral
     * @param {string} serviceUUID  UUID of the BLE service
     * @param {string} characteristicUUID  UUID of the BLE characteristic
     * @return {Promise<any>} Returns a Promise
     */
    read(deviceId: string, serviceUUID: string, characteristicUUID: string): Promise<any>;
    /**
     * Write the value of a characteristic.
     * @usage
     * ```
     * // send 1 byte to switch a light on
     * var data = new Uint8Array(1);
     * data[0] = 1;
     * BLE.write(device_id, 'FF10', 'FF11', data.buffer);
     *
     * // send a 3 byte value with RGB color
     * var data = new Uint8Array(3);
     * data[0] = 0xFF;  // red
     * data[0] = 0x00; // green
     * data[0] = 0xFF; // blue
     * BLE.write(device_id, 'ccc0', 'ccc1', data.buffer);
     *
     * // send a 32 bit integer
     * var data = new Uint32Array(1);
     * data[0] = counterInput.value;
     * BLE.write(device_id, SERVICE, CHARACTERISTIC, data.buffer);
     *
     * ```
     * @param {string} deviceId  UUID or MAC address of the peripheral
     * @param {string} serviceUUID  UUID of the BLE service
     * @param {string} characteristicUUID  UUID of the BLE characteristic
     * @param {ArrayBuffer} value  Data to write to the characteristic, as an ArrayBuffer.
     * @return {Promise<any>} Returns a Promise
     */
    write(deviceId: string, serviceUUID: string, characteristicUUID: string, value: ArrayBuffer): Promise<any>;
    /**
     * Write the value of a characteristic without waiting for confirmation from the peripheral.
     *
     * @param {string} deviceId  UUID or MAC address of the peripheral
     * @param {string} serviceUUID  UUID of the BLE service
     * @param {string} characteristicUUID  UUID of the BLE characteristic
     * @param {ArrayBuffer} value  Data to write to the characteristic, as an ArrayBuffer.
     * @return {Promise<any>} Returns a Promise
     */
    writeWithoutResponse(deviceId: string, serviceUUID: string, characteristicUUID: string, value: ArrayBuffer): Promise<any>;
    /**
     * Register to be notified when the value of a characteristic changes.
     *
     * @usage
     * ```
     * BLE.startNotification(device_id, 'FF10', 'FF11').subscribe(buffer => {
     *   console.log(String.fromCharCode.apply(null, new Uint8Array(buffer));
     * });
     * ```
     *
     * @param {string} deviceId  UUID or MAC address of the peripheral
     * @param {string} serviceUUID  UUID of the BLE service
     * @param {string} characteristicUUID  UUID of the BLE characteristic
     * @return {Observable<any>} Returns an Observable that notifies of characteristic changes.
     * The observer emit an array with data at index 0 and sequence order at index 1.
     * The sequence order is always undefined on iOS. On android it leave the client to check the sequence order and reorder if needed
     */
    startNotification(deviceId: string, serviceUUID: string, characteristicUUID: string): Observable<any>;
    /**
     * Stop being notified when the value of a characteristic changes.
     *
     * @param {string} deviceId  UUID or MAC address of the peripheral
     * @param {string} serviceUUID  UUID of the BLE service
     * @param {string} characteristicUUID  UUID of the BLE characteristic
     * @returns {Promise<any>}
     */
    stopNotification(deviceId: string, serviceUUID: string, characteristicUUID: string): Promise<any>;
    /**
     * Report the connection status.
     *
     * @usage
     * ```
     * BLE.isConnected('FFCA0B09-CB1D-4DC0-A1EF-31AFD3EDFB53').then(
     *   () => { console.log('connected'); },
     *   () => { console.log('not connected'); }
     * );
     * ```
     * @param {string} deviceId  UUID or MAC address of the peripheral
     * @returns {Promise<any>}
     */
    isConnected(deviceId: string): Promise<any>;
    /**
     * Report if bluetooth is enabled.
     *
     * @returns {Promise<void>} Returns a Promise that resolves if Bluetooth is enabled, and rejects if disabled.
     */
    isEnabled(): Promise<void>;
    /**
     * Register to be notified when Bluetooth state changes on the device.
     *
     * @usage
     * ```
     * BLE.startStateNotifications().subscribe(state => {
     *   console.log("Bluetooth is " + state);
     * });
     * ```
     *
     * @return {Observable<any>} Returns an Observable that notifies when the Bluetooth is enabled or disabled on the device.
     */
    startStateNotifications(): Observable<any>;
    /**
     * Stop state notifications.
     *
     * @returns {Promise<any>}
     */
    stopStateNotifications(): Promise<any>;
    /**
     * Open System Bluetooth settings (Android only).
     *
     * @returns {Promise<any>}
     */
    showBluetoothSettings(): Promise<any>;
    /**
     * Enable Bluetooth on the device (Android only).
     *
     * @returns {Promise<any>}
     */
    enable(): Promise<any>;
    /**
     * Read the RSSI value on the device connection.
     *
     * @param {string} deviceId  UUID or MAC address of the peripheral
     *
     * @returns {Promise<any>}
     */
    readRSSI(deviceId: string): Promise<any>;
    /**
     * Retrieves a list of the peripherals (containing any of the specified services)
     * currently connected to the system. The peripheral list is sent to the success callback.
     * iOS only
     *
     * @param {string[]} services List of services to discover
     * @returns {Promise<any>} Returns a promise with a list of peripheral objects
     */
    connectedPeripheralsWithServices(services: string[]): Promise<any[]>;
    /**
     * Find the connected peripherals offering the listed service UUIDs.
     * iOS only
     *
     * @param {string[]} uuids List of peripheral UUIDs
     * @returns {Promise<any>} Returns a promise with a list of peripheral objects
     */
    peripheralsWithIdentifiers(uuids: string[]): Promise<any[]>;
    /**
     * Find the bonded devices
     * Android only
     *
     * @returns {Promise<any>} Returns a promise with a list of peripheral objects
     */
    bondedDevices(): Promise<any[]>;
    /**
     * Reports if location services are enabled.
     * Android only
     *
     * @returns {Promise<void>}
     */
    isLocationEnabled(): Promise<void>;
}

export declare const BLE: BLEOriginal;