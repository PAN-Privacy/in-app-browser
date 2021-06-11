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
var BrightnessOriginal = /** @class */ (function (_super) {
    __extends(BrightnessOriginal, _super);
    function BrightnessOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrightnessOriginal.prototype.setBrightness = function (value) { return cordova(this, "setBrightness", {}, arguments); };
    BrightnessOriginal.prototype.getBrightness = function () { return cordova(this, "getBrightness", {}, arguments); };
    BrightnessOriginal.prototype.setKeepScreenOn = function (value) { return cordova(this, "setKeepScreenOn", {}, arguments); };
    BrightnessOriginal.pluginName = "Brightness";
    BrightnessOriginal.plugin = "cordova-plugin-brightness";
    BrightnessOriginal.pluginRef = "cordova.plugins.brightness";
    BrightnessOriginal.repo = "https://github.com/mgcrea/cordova-plugin-brightness";
    BrightnessOriginal.platforms = ["Android", "iOS"];
    return BrightnessOriginal;
}(IonicNativePlugin));
var Brightness = new BrightnessOriginal();
export { Brightness };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JyaWdodG5lc3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBOEJ4Qyw4QkFBaUI7Ozs7SUFRL0Msa0NBQWEsYUFBQyxLQUFhO0lBVzNCLGtDQUFhO0lBU2Isb0NBQWUsYUFBQyxLQUFjOzs7Ozs7cUJBM0RoQztFQStCZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBCcmlnaHRuZXNzXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBCcmlnaHRuZXNzIHBsdWdpbiBsZXQgeW91IGNvbnRyb2wgdGhlIGRpc3BsYXkgYnJpZ2h0bmVzcyBvZiB5b3VyIGRldmljZS5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWJyaWdodG5lc3NgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQnJpZ2h0bmVzcyBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL21nY3JlYS9jb3Jkb3ZhLXBsdWdpbi1icmlnaHRuZXNzKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJyaWdodG5lc3MgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JyaWdodG5lc3Mvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJyaWdodG5lc3M6IEJyaWdodG5lc3MpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGxldCBicmlnaHRuZXNzVmFsdWUgPSAwLjg7XG4gKiB0aGlzLmJyaWdodG5lc3Muc2V0QnJpZ2h0bmVzcyhicmlnaHRuZXNzVmFsdWUpO1xuICogYGBgXG4gKlxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0JyaWdodG5lc3MnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1icmlnaHRuZXNzJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmJyaWdodG5lc3MnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21nY3JlYS9jb3Jkb3ZhLXBsdWdpbi1icmlnaHRuZXNzJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJyaWdodG5lc3MgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBicmlnaHRuZXNzIG9mIHRoZSBkaXNwbGF5LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgRmxvYXRpbmcgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSBpbiB3aGljaCBjYXNlIDEgbWVhbnMgMTAwJSBicmlnaHRuZXNzIGFuZCAwIG1lYW5zIDAlIGJyaWdodG5lc3MuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgc2V0dGluZyBicmlnaHRuZXNzIHdhcyBzdWNjZXNzZnVsLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRCcmlnaHRuZXNzKHZhbHVlOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgY3VycmVudCBicmlnaHRuZXNzIG9mIHRoZSBkZXZpY2UgZGlzcGxheS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZVxuICAgKiBicmlnaHRuZXNzIHZhbHVlIG9mIHRoZSBkZXZpY2UgZGlzcGxheSAoZmxvYXRpbmcgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSkuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEJyaWdodG5lc3MoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogS2VlcHMgdGhlIHNjcmVlbiBvbi4gUHJldmVudHMgdGhlIGRldmljZSBmcm9tIHNldHRpbmcgdGhlIHNjcmVlbiB0byBzbGVlcC5cbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRLZWVwU2NyZWVuT24odmFsdWU6IGJvb2xlYW4pOiB2b2lkIHt9XG59XG4iXX0=