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
var BacklightOriginal = /** @class */ (function (_super) {
    __extends(BacklightOriginal, _super);
    function BacklightOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BacklightOriginal.prototype.on = function () { return cordova(this, "on", {}, arguments); };
    BacklightOriginal.prototype.off = function () { return cordova(this, "off", {}, arguments); };
    BacklightOriginal.pluginName = "Backlight";
    BacklightOriginal.plugin = "cordova-plugin-backlight";
    BacklightOriginal.pluginRef = "cordova.plugins.Backlight";
    BacklightOriginal.repo = "https://github.com/mebibou/cordova-plugin-backlight";
    BacklightOriginal.platforms = ["Android"];
    return BacklightOriginal;
}(IonicNativePlugin));
var Backlight = new BacklightOriginal();
export { Backlight };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhY2tsaWdodC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnQ3pDLDZCQUFpQjs7OztJQU05QyxzQkFBRTtJQVNGLHVCQUFHOzs7Ozs7b0JBaERMO0VBaUMrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBiZXRhXG4gKiBAbmFtZSBCYWNrbGlnaHRcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWRkcyB0dXJuaW5nIG9uL29mZiB0aGUgZGV2aWNlIGJhY2tsaWdodC5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJhY2tsaWdodCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmFja2xpZ2h0L25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYWNrbGlnaHQ6IEJhY2tsaWdodCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gVHVybiBiYWNrbGlnaHQgb25cbiAqIHRoaXMuYmFja2xpZ2h0Lm9uKCkudGhlbigoKSA9PiBjb25zb2xlLmxvZygnYmFja2xpZ2h0IG9uJykpO1xuICpcbiAqIC8vIFR1cm4gYmFja2xpZ2h0IG9mZlxuICogdGhpcy5iYWNrbGlnaHQub2ZmKCkudGhlbigoKSA9PiBjb25zb2xlLmxvZygnYmFja2xpZ2h0IG9mZicpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCYWNrbGlnaHQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1iYWNrbGlnaHQnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuQmFja2xpZ2h0JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tZWJpYm91L2NvcmRvdmEtcGx1Z2luLWJhY2tsaWdodCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhY2tsaWdodCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gdHVybnMgYmFja2xpZ2h0IG9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBiYWNrbGlnaHQgaXMgb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiB0dXJucyBiYWNrbGlnaHQgb2ZmXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBiYWNrbGlnaHQgaXMgb2ZmXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9mZigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19