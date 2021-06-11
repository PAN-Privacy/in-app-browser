import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Backlight = /** @class */ (function (_super) {
    __extends(Backlight, _super);
    function Backlight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Backlight.prototype.on = function () { return cordova(this, "on", {}, arguments); };
    Backlight.prototype.off = function () { return cordova(this, "off", {}, arguments); };
    Backlight.pluginName = "Backlight";
    Backlight.plugin = "cordova-plugin-backlight";
    Backlight.pluginRef = "cordova.plugins.Backlight";
    Backlight.repo = "https://github.com/mebibou/cordova-plugin-backlight";
    Backlight.platforms = ["Android"];
    Backlight.decorators = [
        { type: Injectable }
    ];
    return Backlight;
}(IonicNativePlugin));
export { Backlight };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhY2tsaWdodC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnQ3pDLDZCQUFpQjs7OztJQU05QyxzQkFBRTtJQVNGLHVCQUFHOzs7Ozs7O2dCQWhCSixVQUFVOztvQkFoQ1g7RUFpQytCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQGJldGFcbiAqIEBuYW1lIEJhY2tsaWdodFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhZGRzIHR1cm5pbmcgb24vb2ZmIHRoZSBkZXZpY2UgYmFja2xpZ2h0LlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmFja2xpZ2h0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYWNrbGlnaHQvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tsaWdodDogQmFja2xpZ2h0KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBUdXJuIGJhY2tsaWdodCBvblxuICogdGhpcy5iYWNrbGlnaHQub24oKS50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdiYWNrbGlnaHQgb24nKSk7XG4gKlxuICogLy8gVHVybiBiYWNrbGlnaHQgb2ZmXG4gKiB0aGlzLmJhY2tsaWdodC5vZmYoKS50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdiYWNrbGlnaHQgb2ZmJykpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0JhY2tsaWdodCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJhY2tsaWdodCcsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5CYWNrbGlnaHQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21lYmlib3UvY29yZG92YS1wbHVnaW4tYmFja2xpZ2h0JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFja2xpZ2h0IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiB0dXJucyBiYWNrbGlnaHQgb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGJhY2tsaWdodCBpcyBvblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHR1cm5zIGJhY2tsaWdodCBvZmZcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGJhY2tsaWdodCBpcyBvZmZcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb2ZmKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=