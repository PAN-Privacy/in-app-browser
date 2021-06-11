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
var LowMemoryOriginal = /** @class */ (function (_super) {
    __extends(LowMemoryOriginal, _super);
    function LowMemoryOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowMemoryOriginal.prototype.generateLowMemory = function () { return cordova(this, "generateLowMemory", {}, arguments); };
    LowMemoryOriginal.pluginName = "LowMemory";
    LowMemoryOriginal.plugin = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory";
    LowMemoryOriginal.pluginRef = "LowMemory";
    LowMemoryOriginal.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory";
    LowMemoryOriginal.platforms = ["Android", "iOS"];
    return LowMemoryOriginal;
}(IonicNativePlugin));
var LowMemory = new LowMemoryOriginal();
export { LowMemory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1jZW50ZXItbG93LW1lbW9yeS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE2QnpDLDZCQUFpQjs7OztJQU85QyxxQ0FBaUI7Ozs7OztvQkFyQ25CO0VBOEIrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEFwcCBDZW50ZXIgTG93IE1lbW9yeVxuICogQGRlc2NyaXB0aW9uXG4gKiBHZW5lcmF0ZXMgYSBsb3cgbWVtb3J5IHdhcm5pbmcuXG4gKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L2FwcGNlbnRlci1zZGstY29yZG92YS90cmVlL21hc3Rlci9jb3Jkb3ZhLXBsdWdpbi1hcHBjZW50ZXItZ2VuZXJhdGUtbG93LW1lbW9yeVxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTG93TWVtb3J5IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hcHAtY2VudGVyLWxvdy1tZW1vcnkvbmd4JztcbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvd01lbW9yeTogTG93TWVtb3J5KSB7IH1cbiAqXG4gKiBhc3luYyB3YXJuaW5nKCkge1xuICogICBhd2FpdCB0aGlzLmxvd01lbW9yeS5nZW5lcmF0ZUxvd01lbW9yeSgpO1xuICogfVxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTG93TWVtb3J5JyxcbiAgcGx1Z2luOiAnaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9hcHBjZW50ZXItc2RrLWNvcmRvdmEvdHJlZS9tYXN0ZXIvY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLWdlbmVyYXRlLWxvdy1tZW1vcnknLFxuICBwbHVnaW5SZWY6ICdMb3dNZW1vcnknLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9hcHBjZW50ZXItc2RrLWNvcmRvdmEvdHJlZS9tYXN0ZXIvY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLWdlbmVyYXRlLWxvdy1tZW1vcnknLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG93TWVtb3J5IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogR2VuZXJhdGVzIGEgbG93IG1lbW9yeSB3YXJuaW5nLlxuICAgKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L2FwcGNlbnRlci1zZGstY29yZG92YS90cmVlL21hc3Rlci9jb3Jkb3ZhLXBsdWdpbi1hcHBjZW50ZXItZ2VuZXJhdGUtbG93LW1lbW9yeVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2VuZXJhdGVMb3dNZW1vcnkoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=