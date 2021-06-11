import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var ExtendedDeviceInformation = /** @class */ (function (_super) {
    __extends(ExtendedDeviceInformation, _super);
    function ExtendedDeviceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ExtendedDeviceInformation.prototype, "memory", {
        get: function () { return cordovaPropertyGet(this, "memory"); },
        set: function (value) { cordovaPropertySet(this, "memory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendedDeviceInformation.prototype, "cpumhz", {
        get: function () { return cordovaPropertyGet(this, "cpumhz"); },
        set: function (value) { cordovaPropertySet(this, "cpumhz", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendedDeviceInformation.prototype, "totalstorage", {
        get: function () { return cordovaPropertyGet(this, "totalstorage"); },
        set: function (value) { cordovaPropertySet(this, "totalstorage", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendedDeviceInformation.prototype, "freestorage", {
        get: function () { return cordovaPropertyGet(this, "freestorage"); },
        set: function (value) { cordovaPropertySet(this, "freestorage", value); },
        enumerable: false,
        configurable: true
    });
    ExtendedDeviceInformation.pluginName = "ExtendedDeviceInformation";
    ExtendedDeviceInformation.plugin = "cordova-plugin-extended-device-information";
    ExtendedDeviceInformation.pluginRef = "extended-device-information";
    ExtendedDeviceInformation.repo = "https://github.com/danielehrhardt/cordova-plugin-extended-device-information";
    ExtendedDeviceInformation.platforms = ["Android"];
    ExtendedDeviceInformation.decorators = [
        { type: Injectable }
    ];
    return ExtendedDeviceInformation;
}(IonicNativePlugin));
export { ExtendedDeviceInformation };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2V4dGVuZGVkLWRldmljZS1pbmZvcm1hdGlvbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw2REFBOEMsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQmpDLDZDQUFpQjs7OzswQkFLOUQsNkNBQU07Ozs7OzswQkFNTiw2Q0FBTTs7Ozs7OzBCQU1OLG1EQUFZOzs7Ozs7MEJBTVosa0RBQVc7Ozs7Ozs7Ozs7OztnQkF4QlosVUFBVTs7b0NBL0JYO0VBZ0MrQyxpQkFBaUI7U0FBbkQseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBFeHRlbmRlZCBEZXZpY2UgSW5mb3JtYXRpb25cbiAqIEBkZXNjcmlwdGlvblxuICogUmV0cmlldmVzIGFkZGl0aW9uYWwgZGV2aWNlIGluZm9ybWF0aW9uIGZyb20gdGhlIERldmljZSBIYXJkd2FyZVxuICogIC0gbWVtb3J5XG4gKiAgLSBjcHVtaHpcbiAqICAtIHRvdGFsc3RvcmFnZVxuICogIC0gZnJlZXN0b3JhZ2VcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEV4dGVuZGVkRGV2aWNlSW5mb3JtYXRpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2V4dGVuZGVkLWRldmljZS1pbmZvcm1hdGlvbi9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGV4dGVuZGVkRGV2aWNlSW5mb3JtYXRpb246IEV4dGVuZGVkRGV2aWNlSW5mb3JtYXRpb24pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGNvbnNvbGUubG9nKCdUaGUgTWVtb3J5IGlzOiAnICsgdGhpcy5leHRlbmRlZERldmljZUluZm9ybWF0aW9uLm1lbW9yeSk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdFeHRlbmRlZERldmljZUluZm9ybWF0aW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZXh0ZW5kZWQtZGV2aWNlLWluZm9ybWF0aW9uJyxcbiAgcGx1Z2luUmVmOiAnZXh0ZW5kZWQtZGV2aWNlLWluZm9ybWF0aW9uJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxlaHJoYXJkdC9jb3Jkb3ZhLXBsdWdpbi1leHRlbmRlZC1kZXZpY2UtaW5mb3JtYXRpb24nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFeHRlbmRlZERldmljZUluZm9ybWF0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogR2V0IHRoZSBkZXZpY2UncyBtZW1vcnkgc2l6ZVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIG1lbW9yeTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRldmljZSdzIENQVSBtaHpcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBjcHVtaHo6IHN0cmluZztcblxuICAvKipcbiAgICogR2V0IHRoZSB0b3RhbCBzdG9yYWdlXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgdG90YWxzdG9yYWdlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdG90YWwgc3RvcmFnZVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGZyZWVzdG9yYWdlOiBudW1iZXI7XG59XG4iXX0=