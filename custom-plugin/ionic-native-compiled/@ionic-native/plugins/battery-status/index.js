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
var BatteryStatusOriginal = /** @class */ (function (_super) {
    __extends(BatteryStatusOriginal, _super);
    function BatteryStatusOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BatteryStatusOriginal.prototype.onChange = function () { return cordova(this, "onChange", { "eventObservable": true, "event": "batterystatus" }, arguments); };
    BatteryStatusOriginal.prototype.onLow = function () { return cordova(this, "onLow", { "eventObservable": true, "event": "batterylow" }, arguments); };
    BatteryStatusOriginal.prototype.onCritical = function () { return cordova(this, "onCritical", { "eventObservable": true, "event": "batterycritical" }, arguments); };
    BatteryStatusOriginal.pluginName = "BatteryStatus";
    BatteryStatusOriginal.plugin = "cordova-plugin-battery-status";
    BatteryStatusOriginal.pluginRef = "navigator.battery";
    BatteryStatusOriginal.repo = "https://github.com/apache/cordova-plugin-battery-status";
    BatteryStatusOriginal.platforms = ["iOS", "Android", "Windows", "Browser"];
    return BatteryStatusOriginal;
}(IonicNativePlugin));
var BatteryStatus = new BatteryStatusOriginal();
export { BatteryStatus };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhdHRlcnktc3RhdHVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBZ0RDLGlDQUFpQjs7OztJQVNsRCxnQ0FBUTtJQVlSLDZCQUFLO0lBWUwsa0NBQVU7Ozs7Ozt3QkFuRlo7RUFrRG1DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmF0dGVyeVN0YXR1c1Jlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFRoZSBiYXR0ZXJ5IGNoYXJnZSBwZXJjZW50YWdlXG4gICAqL1xuICBsZXZlbDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgZGV2aWNlIGlzIHBsdWdnZWQgaW5cbiAgICovXG4gIGlzUGx1Z2dlZDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBCYXR0ZXJ5IFN0YXR1c1xuICogQGRlc2NyaXB0aW9uXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tYmF0dGVyeXN0YXR1cy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0JhdHRlcnlTdGF0dXMgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tYmF0dGVyeS1zdGF0dXMpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmF0dGVyeVN0YXR1cyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmF0dGVyeS1zdGF0dXMvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhdHRlcnlTdGF0dXM6IEJhdHRlcnlTdGF0dXMpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiAvLyB3YXRjaCBjaGFuZ2UgaW4gYmF0dGVyeSBzdGF0dXNcbiAqIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMuYmF0dGVyeVN0YXR1cy5vbkNoYW5nZSgpLnN1YnNjcmliZShzdGF0dXMgPT4ge1xuICogICAgY29uc29sZS5sb2coc3RhdHVzLmxldmVsLCBzdGF0dXMuaXNQbHVnZ2VkKTtcbiAqIH0pO1xuICpcbiAqIC8vIHN0b3Agd2F0Y2hcbiAqIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEJhdHRlcnlTdGF0dXNSZXNwb25zZVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0JhdHRlcnlTdGF0dXMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1iYXR0ZXJ5LXN0YXR1cycsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5iYXR0ZXJ5JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tYmF0dGVyeS1zdGF0dXMnLFxuICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnLCAnV2luZG93cycsICdCcm93c2VyJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhdHRlcnlTdGF0dXMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBXYXRjaCB0aGUgY2hhbmdlIGluIGJhdHRlcnkgbGV2ZWxcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QmF0dGVyeVN0YXR1c1Jlc3BvbnNlPn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgcHVzaGVzIGEgc3RhdHVzIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ2JhdHRlcnlzdGF0dXMnLFxuICB9KVxuICBvbkNoYW5nZSgpOiBPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaCB3aGVuIHRoZSBiYXR0ZXJ5IGxldmVsIGdvZXMgbG93XG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IHB1c2hlcyBhIHN0YXR1cyBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdiYXR0ZXJ5bG93JyxcbiAgfSlcbiAgb25Mb3coKTogT2JzZXJ2YWJsZTxCYXR0ZXJ5U3RhdHVzUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV2F0Y2ggd2hlbiB0aGUgYmF0dGVyeSBsZXZlbCBnb2VzIHRvIGNyaXRpY2FsXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IHB1c2hlcyBhIHN0YXR1cyBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdiYXR0ZXJ5Y3JpdGljYWwnLFxuICB9KVxuICBvbkNyaXRpY2FsKCk6IE9ic2VydmFibGU8QmF0dGVyeVN0YXR1c1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=