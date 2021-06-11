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
var StepcounterOriginal = /** @class */ (function (_super) {
    __extends(StepcounterOriginal, _super);
    function StepcounterOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepcounterOriginal.prototype.start = function (startingOffset) { return cordova(this, "start", {}, arguments); };
    StepcounterOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    StepcounterOriginal.prototype.getTodayStepCount = function () { return cordova(this, "getTodayStepCount", {}, arguments); };
    StepcounterOriginal.prototype.getStepCount = function () { return cordova(this, "getStepCount", {}, arguments); };
    StepcounterOriginal.prototype.deviceCanCountSteps = function () { return cordova(this, "deviceCanCountSteps", {}, arguments); };
    StepcounterOriginal.prototype.getHistory = function () { return cordova(this, "getHistory", {}, arguments); };
    StepcounterOriginal.pluginName = "Stepcounter";
    StepcounterOriginal.plugin = "cordova-plugin-stepcounter";
    StepcounterOriginal.pluginRef = "stepcounter";
    StepcounterOriginal.repo = "https://github.com/ihadeed/cordova-plugin-stepcounter";
    StepcounterOriginal.platforms = ["Android"];
    return StepcounterOriginal;
}(IonicNativePlugin));
var Stepcounter = new StepcounterOriginal();
export { Stepcounter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N0ZXBjb3VudGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDdkMsK0JBQWlCOzs7O0lBUWhELDJCQUFLLGFBQUMsY0FBc0I7SUFTNUIsMEJBQUk7SUFTSix1Q0FBaUI7SUFTakIsa0NBQVk7SUFTWix5Q0FBbUI7SUFTbkIsZ0NBQVU7Ozs7OztzQkF2Rlo7RUFrQ2lDLGlCQUFpQjtTQUFyQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG4vKipcbiAqIEBuYW1lIFN0ZXBjb3VudGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgcGx1Z2luIGZvciB1c2luZyBkZXZpY2UncyBzdGVwY291bnRlciBvbiBBbmRyb2lkIChBUEkgPiAxOSlcbiAqXG4gKiBVc2UgdG9cbiAqIC0gc3RhcnQgYW5kIHN0b3Agc3RlcGNvdW50ZXIgc2VydmljZVxuICogLSByZWFkIGRldmljZSdzIHN0ZXBjb3VudGVyIGRhdGFcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFN0ZXBjb3VudGVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdGVwY291bnRlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RlcGNvdW50ZXI6IFN0ZXBjb3VudGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBsZXQgc3RhcnRpbmdPZmZzZXQgPSAwO1xuICogdGhpcy5zdGVwY291bnRlci5zdGFydChzdGFydGluZ09mZnNldCkudGhlbihvblN1Y2Nlc3MgPT4gY29uc29sZS5sb2coJ3N0ZXBjb3VudGVyLXN0YXJ0IHN1Y2Nlc3MnLCBvblN1Y2Nlc3MpLCBvbkZhaWx1cmUgPT4gY29uc29sZS5sb2coJ3N0ZXBjb3VudGVyLXN0YXJ0IGVycm9yJywgb25GYWlsdXJlKSk7XG4gKlxuICogdGhpcy5zdGVwY291bnRlci5nZXRIaXN0b3J5KCkudGhlbihoaXN0b3J5T2JqID0+IGNvbnNvbGUubG9nKCdzdGVwY291bnRlci1oaXN0b3J5IHN1Y2Nlc3MnLCBoaXN0b3J5T2JqKSwgb25GYWlsdXJlID0+IGNvbnNvbGUubG9nKCdzdGVwY291bnRlci1oaXN0b3J5IGVycm9yJywgb25GYWlsdXJlKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU3RlcGNvdW50ZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zdGVwY291bnRlcicsXG4gIHBsdWdpblJlZjogJ3N0ZXBjb3VudGVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9paGFkZWVkL2NvcmRvdmEtcGx1Z2luLXN0ZXBjb3VudGVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RlcGNvdW50ZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTdGFydCB0aGUgc3RlcCBjb3VudGVyXG4gICAqXG4gICAqIEBwYXJhbSBzdGFydGluZ09mZnNldCB7bnVtYmVyfSB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0b3RhbCBzdGVwcyBjb3VudGVkIGluIHRoaXMgc2Vzc2lvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnkgfCBudW1iZXI+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3Mgb3IgcmVqZWN0cyBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0KHN0YXJ0aW5nT2Zmc2V0OiBudW1iZXIpOiBQcm9taXNlPG51bWJlciB8IGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHRoZSBzdGVwIGNvdW50ZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55IHwgbnVtYmVyPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzIHdpdGggdGhlIGFtb3VudCBvZiBzdGVwcyBzaW5jZSB0aGUgc3RhcnQgY29tbWFuZCBoYXMgYmVlbiBjYWxsZWQsIG9yIHJlamVjdHMgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wKCk6IFByb21pc2U8bnVtYmVyIHwgYW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYW1vdW50IG9mIHN0ZXBzIGZvciB0b2RheSAob3IgLTEgaWYgaXQgbm8gZGF0YSBnaXZlbilcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55IHwgbnVtYmVyPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzIHdpdGggdGhlIGFtb3VudCBvZiBzdGVwcyB0b2RheSwgb3IgcmVqZWN0cyBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFRvZGF5U3RlcENvdW50KCk6IFByb21pc2U8bnVtYmVyIHwgYW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYW1vdW50IG9mIHN0ZXBzIHNpbmNlIHRoZSBzdGFydCBjb21tYW5kIGhhcyBiZWVuIGNhbGxlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnkgfCBudW1iZXI+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3Mgd2l0aCB0aGUgYW1vdW50IG9mIHN0ZXBzIHNpbmNlIHRoZSBzdGFydCBjb21tYW5kIGhhcyBiZWVuIGNhbGxlZCwgb3IgcmVqZWN0cyBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFN0ZXBDb3VudCgpOiBQcm9taXNlPG51bWJlciB8IGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUvZmFsc2UgaWYgQW5kcm9pZCBkZXZpY2UgaXMgcnVubmluZyA+QVBJIGxldmVsIDE5ICYmIGhhcyB0aGUgc3RlcCBjb3VudGVyIEFQSSBhdmFpbGFibGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55IHwgYm9vbGVhbj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgb24gc3VjY2Vzcywgb3IgcmVqZWN0cyBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRldmljZUNhbkNvdW50U3RlcHMoKTogUHJvbWlzZTxib29sZWFuIHwgYW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc3RlcCBoaXN0b3J5IChKYXZhU2NyaXB0IG9iamVjdClcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzLCBvciByZWplY3RzIG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SGlzdG9yeSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19