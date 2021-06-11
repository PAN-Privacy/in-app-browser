import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Flashlight = /** @class */ (function (_super) {
    __extends(Flashlight, _super);
    function Flashlight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Flashlight.prototype.available = function () { return cordova(this, "available", {}, arguments); };
    Flashlight.prototype.switchOn = function () { return cordova(this, "switchOn", {}, arguments); };
    Flashlight.prototype.switchOff = function () { return cordova(this, "switchOff", {}, arguments); };
    Flashlight.prototype.toggle = function () { return cordova(this, "toggle", {}, arguments); };
    Flashlight.prototype.isSwitchedOn = function () { return cordova(this, "isSwitchedOn", { "sync": true }, arguments); };
    Flashlight.pluginName = "Flashlight";
    Flashlight.plugin = "cordova-plugin-flashlight";
    Flashlight.pluginRef = "window.plugins.flashlight";
    Flashlight.repo = "https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin";
    Flashlight.platforms = ["Android", "iOS", "Windows Phone 8"];
    Flashlight.decorators = [
        { type: Injectable }
    ];
    return Flashlight;
}(IonicNativePlugin));
export { Flashlight };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZsYXNobGlnaHQvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNEJ4Qyw4QkFBaUI7Ozs7SUFNL0MsOEJBQVM7SUFTVCw2QkFBUTtJQVNSLDhCQUFTO0lBU1QsMkJBQU07SUFXTixpQ0FBWTs7Ozs7OztnQkE3Q2IsVUFBVTs7cUJBNUJYO0VBNkJnQyxpQkFBaUI7U0FBcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEZsYXNobGlnaHRcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHN3aXRjaCB0aGUgZmxhc2hsaWdodCAvIHRvcmNoIG9mIHRoZSBkZXZpY2Ugb24gYW5kIG9mZi5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWZsYXNobGlnaHRgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbRmxhc2hsaWdodCBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL0ZsYXNobGlnaHQtUGhvbmVHYXAtUGx1Z2luKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZsYXNobGlnaHQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZsYXNobGlnaHQvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZsYXNobGlnaHQ6IEZsYXNobGlnaHQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmxhc2hsaWdodC5zd2l0Y2hPbigpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZsYXNobGlnaHQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1mbGFzaGxpZ2h0JyxcbiAgcGx1Z2luUmVmOiAnd2luZG93LnBsdWdpbnMuZmxhc2hsaWdodCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vRmxhc2hsaWdodC1QaG9uZUdhcC1QbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSA4J10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZsYXNobGlnaHQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGZsYXNobGlnaHQgaXMgYXZhaWxhYmxlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHN0YXRpbmcgaWYgdGhlIGZsYXNobGlnaHQgaXMgYXZhaWxhYmxlLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhdmFpbGFibGUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN3aXRjaGVzIHRoZSBmbGFzaGxpZ2h0IG9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzd2l0Y2hPbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoZXMgdGhlIGZsYXNobGlnaHQgb2ZmXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzd2l0Y2hPZmYoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGZsYXNobGlnaHRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdG9nZ2xlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgZmxhc2hsaWdodCBpcyB0dXJuZWQgb24uXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGlzU3dpdGNoZWRPbigpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==