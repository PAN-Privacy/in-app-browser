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
var IsDebugOriginal = /** @class */ (function (_super) {
    __extends(IsDebugOriginal, _super);
    function IsDebugOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IsDebugOriginal.prototype.getIsDebug = function () { return cordova(this, "getIsDebug", {}, arguments); };
    IsDebugOriginal.pluginName = "IsDebug";
    IsDebugOriginal.plugin = "cordova-plugin-is-debug";
    IsDebugOriginal.pluginRef = "cordova.plugins.IsDebug";
    IsDebugOriginal.repo = "https://github.com/mattlewis92/cordova-plugin-is-debug";
    IsDebugOriginal.platforms = ["Android", "iOS"];
    return IsDebugOriginal;
}(IonicNativePlugin));
var IsDebug = new IsDebugOriginal();
export { IsDebug };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2lzLWRlYnVnL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQThCM0MsMkJBQWlCOzs7O0lBTTVDLDRCQUFVOzs7Ozs7a0JBckNaO0VBK0I2QixpQkFBaUI7U0FBakMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIElzIERlYnVnXG4gKiBAZGVzY3JpcHRpb25cbiAqIERldGVjdCBpZiB0aGUgYXBwIGlzIHJ1bm5pbmcgaW4gZGVidWcgbW9kZSBvciBub3QuXG4gKiBEZWJ1ZyBtb2RlIGlzIHdoZW4gdGhlIGFwcCBpcyBidWlsdCBhbmQgaW5zdGFsbGVkIGxvY2FsbHkgdmlhIHhjb2RlIC8gZWNsaXBzZSAvIHRoZSBjb3Jkb3ZhIGNsaSBldGMsIGNvbXBhcmVkIHRvIHJlbGVhc2UgbW9kZSB3aGVuIHRoZSBhcHAgd2FzIGRvd25sb2FkZWQgZnJvbSB0aGUgYXBwIC8gcGxheSBzdG9yZSB2aWEgYW4gZW5kIHVzZXIuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJc0RlYnVnIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pcy1kZWJ1Zy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaXNEZWJ1ZzogSXNEZWJ1ZykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5pc0RlYnVnLmdldElzRGVidWcoKVxuICogICAudGhlbihpc0RlYnVnID0+IGNvbnNvbGUubG9nKCdJcyBkZWJ1ZzonLCBpc0RlYnVnKSlcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0lzRGVidWcnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1pcy1kZWJ1ZycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5Jc0RlYnVnJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXR0bGV3aXM5Mi9jb3Jkb3ZhLXBsdWdpbi1pcy1kZWJ1ZycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJc0RlYnVnIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIGFuIGFwcCB3YXMgaW5zdGFsbGVkIHZpYSB4Y29kZSAvIGVjbGlwc2UgLyB0aGUgaW9uaWMgQ0xJIGV0Y1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRydWUgaWYgdGhlIGFwcCB3YXMgaW5zdGFsbGVkIHZpYSB4Y29kZSAvIGVjbGlwc2UgLyB0aGUgaW9uaWMgQ0xJIGV0Yy4gSXQgd2lsbCByZXNvbHZlIHRvIGZhbHNlIGlmIHRoZSBhcHAgd2FzIGRvd25sb2FkZWQgZnJvbSB0aGUgYXBwIC8gcGxheSBzdG9yZSBieSB0aGUgZW5kIHVzZXIuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldElzRGVidWcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=