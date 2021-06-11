import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var Shake = /** @class */ (function (_super) {
    __extends(Shake, _super);
    function Shake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shake.prototype.startWatch = function (sensitivity) { return cordova(this, "startWatch", { "observable": true, "clearFunction": "stopWatch", "successIndex": 0, "errorIndex": 2 }, arguments); };
    Shake.pluginName = "Shake";
    Shake.plugin = "cordova-plugin-shake";
    Shake.pluginRef = "shake";
    Shake.repo = "https://github.com/leecrossley/cordova-plugin-shake";
    Shake.platforms = ["iOS"];
    Shake.decorators = [
        { type: Injectable }
    ];
    return Shake;
}(IonicNativePlugin));
export { Shake };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NoYWtlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBMkJQLHlCQUFpQjs7OztJQVkxQywwQkFBVSxhQUFDLFdBQW9COzs7Ozs7O2dCQWJoQyxVQUFVOztnQkE1Qlg7RUE2QjJCLGlCQUFpQjtTQUEvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG4vKipcbiAqIEBuYW1lIFNoYWtlXG4gKiBAZGVzY3JpcHRpb24gSGFuZGxlcyBzaGFrZSBnZXN0dXJlXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNoYWtlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zaGFrZS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2hha2U6IFNoYWtlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zdCB3YXRjaCA9IHRoaXMuc2hha2Uuc3RhcnRXYXRjaCg2MCkuc3Vic2NyaWJlKCgpID0+IHtcbiAqICAgLy8gZG8gc29tZXRoaW5nXG4gKiAgIH0pO1xuICpcbiAqIHdhdGNoLnVuc3Vic2NyaWJlKCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTaGFrZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNoYWtlJyxcbiAgcGx1Z2luUmVmOiAnc2hha2UnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2xlZWNyb3NzbGV5L2NvcmRvdmEtcGx1Z2luLXNoYWtlJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaGFrZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFdhdGNoIGZvciBzaGFrZSBnZXN0dXJlXG4gICAqIEBwYXJhbSBzZW5zaXRpdml0eSB7bnVtYmVyfSBPcHRpb25hbCBzZW5zaXRpdml0eSBwYXJhbWV0ZXIuIERlZmF1bHRzIHRvIDQwXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnc3RvcFdhdGNoJyxcbiAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgc3RhcnRXYXRjaChzZW5zaXRpdml0eT86IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=