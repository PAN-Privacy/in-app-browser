import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Stepcounter = /** @class */ (function (_super) {
    __extends(Stepcounter, _super);
    function Stepcounter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stepcounter.prototype.start = function (startingOffset) { return cordova(this, "start", {}, arguments); };
    Stepcounter.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    Stepcounter.prototype.getTodayStepCount = function () { return cordova(this, "getTodayStepCount", {}, arguments); };
    Stepcounter.prototype.getStepCount = function () { return cordova(this, "getStepCount", {}, arguments); };
    Stepcounter.prototype.deviceCanCountSteps = function () { return cordova(this, "deviceCanCountSteps", {}, arguments); };
    Stepcounter.prototype.getHistory = function () { return cordova(this, "getHistory", {}, arguments); };
    Stepcounter.pluginName = "Stepcounter";
    Stepcounter.plugin = "cordova-plugin-stepcounter";
    Stepcounter.pluginRef = "stepcounter";
    Stepcounter.repo = "https://github.com/ihadeed/cordova-plugin-stepcounter";
    Stepcounter.platforms = ["Android"];
    Stepcounter.decorators = [
        { type: Injectable }
    ];
    return Stepcounter;
}(IonicNativePlugin));
export { Stepcounter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N0ZXBjb3VudGVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDdkMsK0JBQWlCOzs7O0lBUWhELDJCQUFLLGFBQUMsY0FBc0I7SUFTNUIsMEJBQUk7SUFTSix1Q0FBaUI7SUFTakIsa0NBQVk7SUFTWix5Q0FBbUI7SUFTbkIsZ0NBQVU7Ozs7Ozs7Z0JBdERYLFVBQVU7O3NCQWpDWDtFQWtDaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbi8qKlxuICogQG5hbWUgU3RlcGNvdW50ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBwbHVnaW4gZm9yIHVzaW5nIGRldmljZSdzIHN0ZXBjb3VudGVyIG9uIEFuZHJvaWQgKEFQSSA+IDE5KVxuICpcbiAqIFVzZSB0b1xuICogLSBzdGFydCBhbmQgc3RvcCBzdGVwY291bnRlciBzZXJ2aWNlXG4gKiAtIHJlYWQgZGV2aWNlJ3Mgc3RlcGNvdW50ZXIgZGF0YVxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU3RlcGNvdW50ZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0ZXBjb3VudGVyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzdGVwY291bnRlcjogU3RlcGNvdW50ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGxldCBzdGFydGluZ09mZnNldCA9IDA7XG4gKiB0aGlzLnN0ZXBjb3VudGVyLnN0YXJ0KHN0YXJ0aW5nT2Zmc2V0KS50aGVuKG9uU3VjY2VzcyA9PiBjb25zb2xlLmxvZygnc3RlcGNvdW50ZXItc3RhcnQgc3VjY2VzcycsIG9uU3VjY2VzcyksIG9uRmFpbHVyZSA9PiBjb25zb2xlLmxvZygnc3RlcGNvdW50ZXItc3RhcnQgZXJyb3InLCBvbkZhaWx1cmUpKTtcbiAqXG4gKiB0aGlzLnN0ZXBjb3VudGVyLmdldEhpc3RvcnkoKS50aGVuKGhpc3RvcnlPYmogPT4gY29uc29sZS5sb2coJ3N0ZXBjb3VudGVyLWhpc3Rvcnkgc3VjY2VzcycsIGhpc3RvcnlPYmopLCBvbkZhaWx1cmUgPT4gY29uc29sZS5sb2coJ3N0ZXBjb3VudGVyLWhpc3RvcnkgZXJyb3InLCBvbkZhaWx1cmUpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTdGVwY291bnRlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXN0ZXBjb3VudGVyJyxcbiAgcGx1Z2luUmVmOiAnc3RlcGNvdW50ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2loYWRlZWQvY29yZG92YS1wbHVnaW4tc3RlcGNvdW50ZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGVwY291bnRlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFN0YXJ0IHRoZSBzdGVwIGNvdW50ZXJcbiAgICpcbiAgICogQHBhcmFtIHN0YXJ0aW5nT2Zmc2V0IHtudW1iZXJ9IHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRvdGFsIHN0ZXBzIGNvdW50ZWQgaW4gdGhpcyBzZXNzaW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueSB8IG51bWJlcj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgb24gc3VjY2VzcyBvciByZWplY3RzIG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnQoc3RhcnRpbmdPZmZzZXQ6IG51bWJlcik6IFByb21pc2U8bnVtYmVyIHwgYW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgdGhlIHN0ZXAgY291bnRlclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnkgfCBudW1iZXI+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3Mgd2l0aCB0aGUgYW1vdW50IG9mIHN0ZXBzIHNpbmNlIHRoZSBzdGFydCBjb21tYW5kIGhhcyBiZWVuIGNhbGxlZCwgb3IgcmVqZWN0cyBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3AoKTogUHJvbWlzZTxudW1iZXIgfCBhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBhbW91bnQgb2Ygc3RlcHMgZm9yIHRvZGF5IChvciAtMSBpZiBpdCBubyBkYXRhIGdpdmVuKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnkgfCBudW1iZXI+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3Mgd2l0aCB0aGUgYW1vdW50IG9mIHN0ZXBzIHRvZGF5LCBvciByZWplY3RzIG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VG9kYXlTdGVwQ291bnQoKTogUHJvbWlzZTxudW1iZXIgfCBhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBhbW91bnQgb2Ygc3RlcHMgc2luY2UgdGhlIHN0YXJ0IGNvbW1hbmQgaGFzIGJlZW4gY2FsbGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueSB8IG51bWJlcj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgb24gc3VjY2VzcyB3aXRoIHRoZSBhbW91bnQgb2Ygc3RlcHMgc2luY2UgdGhlIHN0YXJ0IGNvbW1hbmQgaGFzIGJlZW4gY2FsbGVkLCBvciByZWplY3RzIG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U3RlcENvdW50KCk6IFByb21pc2U8bnVtYmVyIHwgYW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZS9mYWxzZSBpZiBBbmRyb2lkIGRldmljZSBpcyBydW5uaW5nID5BUEkgbGV2ZWwgMTkgJiYgaGFzIHRoZSBzdGVwIGNvdW50ZXIgQVBJIGF2YWlsYWJsZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnkgfCBib29sZWFuPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzLCBvciByZWplY3RzIG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGV2aWNlQ2FuQ291bnRTdGVwcygpOiBQcm9taXNlPGJvb2xlYW4gfCBhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzdGVwIGhpc3RvcnkgKEphdmFTY3JpcHQgb2JqZWN0KVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3MsIG9yIHJlamVjdHMgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRIaXN0b3J5KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=