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
import { Observable } from 'rxjs';
var DfuUpdateOriginal = /** @class */ (function (_super) {
    __extends(DfuUpdateOriginal, _super);
    function DfuUpdateOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DfuUpdateOriginal.prototype.updateFirmware = function (options) { return cordova(this, "updateFirmware", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    DfuUpdateOriginal.pluginName = "DfuUpdate";
    DfuUpdateOriginal.plugin = "cordova-plugin-dfu-update";
    DfuUpdateOriginal.pluginRef = "window.DfuUpdate";
    DfuUpdateOriginal.repo = "https://github.com/EinfachHans/cordova-plugin-dfu-update";
    DfuUpdateOriginal.install = "ionic cordova plugin add cordova-plugin-dfu-update --variable ANDROID_NORDIC_VERSION=\"1.11.0\"";
    DfuUpdateOriginal.installVariables = ["ANDROID_NORDIC_VERSION"];
    DfuUpdateOriginal.platforms = ["Android", "iOS"];
    return DfuUpdateOriginal;
}(IonicNativePlugin));
var DfuUpdate = new DfuUpdateOriginal();
export { DfuUpdate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RmdS11cGRhdGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFrREgsNkJBQWlCOzs7O0lBVTlDLGtDQUFjLGFBQUMsT0FBc0I7Ozs7Ozs7O29CQTlEdkM7RUFvRCtCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBBIHN0cmluZyB0aGF0IGNvbnRhaW5zIHRoZSBpZGVudGlmaWVyIGZvciB0aGUgQmx1ZXRvb3RoIExFIGRldmljZSB0byB1cGRhdGUuIEl0IHdpbGwgZWl0aGVyIGJlIGEgTUFDIGFkZHJlc3MgKG9uIEFuZHJvaWQpIG9yIGEgVVVJRCAob24gaU9TKS5cbiAgICovXG4gIGRldmljZUlkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc3RyaW5nIHRoYXQgaXMgdGhlIHBhdGggdG8gdGhlIGZpbGUgdG8gdXNlIGluIHRoZSB1cGRhdGUuIEl0IGNhbiBiZSBlaXRoZXIgaW4gZWl0aGVyIGBjZHZmaWxlOi8vYCBvciBgZmlsZTovL2AgZm9ybWF0LlxuICAgKi9cbiAgZmlsZVVybDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgUGFja2V0UmVjZWlwdE5vdGlmaWNhdGlvbnNWYWx1ZSAoRGVmYXVsdCB0byAxMClcbiAgICovXG4gIHBhY2tldFJlY2VpcHROb3RpZmljYXRpb25zVmFsdWU/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgRGZ1IFVwZGF0ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBpcyBhIFdyYXBwZXIgdG8gdXNlIE5vcmRpYyBTZW1pY29uZHVjdG9yJ3MgRGV2aWNlIEZpcm13YXJlIFVwZGF0ZSAoREZVKSBzZXJ2aWNlIHRvIHVwZGF0ZSBhIEJsdWV0b290aCBMRSBkZXZpY2UuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEZnVVcGRhdGUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RmdS11cGRhdGUvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkZnVVcGRhdGU6IERmdVVwZGF0ZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuZGZ1VXBkYXRlLnVwZGF0ZUZpcm13YXJlKCdmaWxlVVJMJywgJ2RldmljZUlkZW50aWZpZXInKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0RmdVVwZGF0ZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRmdS11cGRhdGUnLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuRGZ1VXBkYXRlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FaW5mYWNoSGFucy9jb3Jkb3ZhLXBsdWdpbi1kZnUtdXBkYXRlJyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1kZnUtdXBkYXRlIC0tdmFyaWFibGUgQU5EUk9JRF9OT1JESUNfVkVSU0lPTj1cIjEuMTEuMFwiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBTkRST0lEX05PUkRJQ19WRVJTSU9OJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZnVVcGRhdGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTdGFydCB0aGUgRmlybXdhcmUtVXBkYXRlLVByb2Nlc3NcbiAgICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zIGZvciB0aGUgcHJvY2Vzc1xuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYSBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICB1cGRhdGVGaXJtd2FyZShvcHRpb25zOiBVcGRhdGVPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==