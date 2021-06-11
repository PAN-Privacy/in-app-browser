import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Autostart = /** @class */ (function (_super) {
    __extends(Autostart, _super);
    function Autostart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Autostart.prototype.enable = function () { return cordova(this, "enable", { "sync": true }, arguments); };
    Autostart.prototype.disable = function () { return cordova(this, "disable", { "sync": true }, arguments); };
    Autostart.pluginName = "Autostart";
    Autostart.plugin = "cordova-plugin-autostart";
    Autostart.pluginRef = "cordova.plugins.autoStart";
    Autostart.repo = "https://github.com/ToniKorin/cordova-plugin-autostart";
    Autostart.platforms = ["Android"];
    Autostart.decorators = [
        { type: Injectable }
    ];
    return Autostart;
}(IonicNativePlugin));
export { Autostart };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2F1dG9zdGFydC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQnpDLDZCQUFpQjs7OztJQUs5QywwQkFBTTtJQU1OLDJCQUFPOzs7Ozs7O2dCQVpSLFVBQVU7O29CQS9CWDtFQWdDK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBdXRvc3RhcnRcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYXV0b21hdGljYWxseSBzdGFydHMgeW91ciBBbmRyb2lkIGFwcCBhZnRlciBldmVyeSBib290IG9yIGF1dG8tdXBkYXRlLlxuICogWW91IGNhbiBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYXV0b3N0YXJ0IGZ1bmN0aW9uIGluIHlvdXIgYXBwLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQXV0b3N0YXJ0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hdXRvc3RhcnQvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhdXRvc3RhcnQ6IEF1dG9zdGFydCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5hdXRvc3RhcnQuZW5hYmxlKCk7XG4gKlxuICogdGhpcy5hdXRvc3RhcnQuZGlzYWJsZSgpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0F1dG9zdGFydCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWF1dG9zdGFydCcsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5hdXRvU3RhcnQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1RvbmlLb3Jpbi9jb3Jkb3ZhLXBsdWdpbi1hdXRvc3RhcnQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRvc3RhcnQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBFbmFibGUgdGhlIGF1dG9tYXRpYyBzdGFydHVwIGFmdGVyIHRoZSBib290XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZW5hYmxlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUgYXV0b21hdGljIHN0YXJ0dXAgYWZ0ZXIgdGhlIGJvb3RcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBkaXNhYmxlKCk6IHZvaWQge31cbn1cbiJdfQ==