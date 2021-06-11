import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Sensors = /** @class */ (function (_super) {
    __extends(Sensors, _super);
    function Sensors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sensors.prototype.enableSensor = function (TYPE_SENSOR) { return cordova(this, "enableSensor", {}, arguments); };
    Sensors.prototype.disableSensor = function () { return cordova(this, "disableSensor", {}, arguments); };
    Sensors.prototype.getState = function () { return cordova(this, "getState", {}, arguments); };
    Sensors.pluginName = "Sensors";
    Sensors.plugin = "https://github.com/fabiorogeriosj/cordova-plugin-sensors.git";
    Sensors.pluginRef = "sensors";
    Sensors.repo = "https://github.com/fabiorogeriosj/cordova-plugin-sensors.git";
    Sensors.platforms = ["Android"];
    Sensors.decorators = [
        { type: Injectable }
    ];
    return Sensors;
}(IonicNativePlugin));
export { Sensors };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NlbnNvcnMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBa0QzQywyQkFBaUI7Ozs7SUFPNUMsOEJBQVksYUFBQyxXQUFtQjtJQVNoQywrQkFBYTtJQVNiLDBCQUFROzs7Ozs7O2dCQTFCVCxVQUFVOztrQkFsRFg7RUFtRDZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBlbnVtIFRZUEVfU0VOU09SIHtcbiAgUFJPWElNSVRZID0gJ1BST1hJTUlUWScsXG4gIEFDQ0VMRVJPTUVURVIgPSAnQUNDRUxFUk9NRVRFUicsXG4gIEdSQVZJVFkgPSAnR1JBVklUWScsXG4gIEdZUk9TQ09QRSA9ICdHWVJPU0NPUEUnLFxuICBHWVJPU0NPUEVfVU5DQUxJQlJBVEVEID0gJ0dZUk9TQ09QRV9VTkNBTElCUkFURUQnLFxuICBMSU5FQVJfQUNDRUxFUkFUSU9OID0gJ0xJTkVBUl9BQ0NFTEVSQVRJT04nLFxuICBST1RBVElPTl9WRUNUT1IgPSAnUk9UQVRJT05fVkVDVE9SJyxcbiAgU1RFUF9DT1VOVEVSID0gJ1NURVBfQ09VTlRFUicsXG4gIEdBTUVfUk9UQVRJT05fVkVDVE9SID0gJ0dBTUVfUk9UQVRJT05fVkVDVE9SJyxcbiAgR0VPTUFHTkVUSUNfUk9UQVRJT05fVkVDVE9SID0gJ0dFT01BR05FVElDX1JPVEFUSU9OX1ZFQ1RPUicsXG4gIE1BR05FVElDX0ZJRUxEID0gJ01BR05FVElDX0ZJRUxEJyxcbiAgTUFHTkVUSUNfRklFTERfVU5DQUxJQlJBVEVEID0gJ01BR05FVElDX0ZJRUxEX1VOQ0FMSUJSQVRFRCcsXG4gIE9SSUVOVEFUSU9OID0gJ09SSUVOVEFUSU9OJyxcbiAgQU1CSUVOVF9URU1QRVJBVFVSRSA9ICdBTUJJRU5UX1RFTVBFUkFUVVJFJyxcbiAgTElHSFQgPSAnTElHSFQnLFxuICBQUkVTU1VSRSA9ICdQUkVTU1VSRScsXG4gIFJFTEFUSVZFX0hVTUlESVRZID0gJ1JFTEFUSVZFX0hVTUlESVRZJyxcbiAgVEVNUEVSQVRVUkUgPSAnVEVNUEVSQVRVUkUnLFxufVxuXG4vKipcbiAqIEBuYW1lIFNlbnNvcnNcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZW5hYmxlcyBzZW5zb3JzIG9uIEFuZHJvaWQgZGV2aWNlc1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU2Vuc29ycywgVFlQRV9TRU5TT1IgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NlbnNvcnMvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzZW5zb3JzOiBTZW5zb3JzKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5zZW5zb3JzLmVuYWJsZVNlbnNvcihUWVBFX1NFTlNPUi5MSUdIVCk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU2Vuc29ycycsXG4gIHBsdWdpbjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWJpb3JvZ2VyaW9zai9jb3Jkb3ZhLXBsdWdpbi1zZW5zb3JzLmdpdCcsXG4gIHBsdWdpblJlZjogJ3NlbnNvcnMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2ZhYmlvcm9nZXJpb3NqL2NvcmRvdmEtcGx1Z2luLXNlbnNvcnMuZ2l0JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2Vuc29ycyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gZW5hYmxlcyB0aGUgc2Vuc29yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBUWVBFX1NFTlNPUiBTcGVjaWZ5IHRoZSBzZW5zb3IgdG8gZW5hYmxlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVuYWJsZVNlbnNvcihUWVBFX1NFTlNPUjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBkaXNhYmxlcyB0aGUgc2Vuc29yXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRpc2FibGVTZW5zb3IoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBjYWxscyB0aGUgc3VjY2VzcyBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgc2Vuc29yIHN0YXRlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFN0YXRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=