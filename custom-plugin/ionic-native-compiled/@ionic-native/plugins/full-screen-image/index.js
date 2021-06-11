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
var FullScreenImageOriginal = /** @class */ (function (_super) {
    __extends(FullScreenImageOriginal, _super);
    function FullScreenImageOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FullScreenImageOriginal.prototype.showImageURL = function (url) { return cordova(this, "showImageURL", { "sync": true }, arguments); };
    FullScreenImageOriginal.prototype.showImageBase64 = function (base64String, name, type) { return cordova(this, "showImageBase64", { "sync": true }, arguments); };
    FullScreenImageOriginal.pluginName = "FullScreenImage";
    FullScreenImageOriginal.plugin = "es.keensoft.fullscreenimage";
    FullScreenImageOriginal.pluginRef = "FullScreenImage";
    FullScreenImageOriginal.repo = "https://github.com/keensoft/FullScreenImage-Cordova-Plugin";
    FullScreenImageOriginal.platforms = ["Android", "iOS"];
    return FullScreenImageOriginal;
}(IonicNativePlugin));
var FullScreenImage = new FullScreenImageOriginal();
export { FullScreenImage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Z1bGwtc2NyZWVuLWltYWdlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW9DbkMsbUNBQWlCOzs7O0lBT3BELHNDQUFZLGFBQUMsR0FBVztJQVl4Qix5Q0FBZSxhQUFDLFlBQW9CLEVBQUUsSUFBYSxFQUFFLElBQWE7Ozs7OzswQkF4RHBFO0VBcUNxQyxpQkFBaUI7U0FBekMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEZ1bGwgU2NyZWVuIEltYWdlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGdWxsU2NyZWVuSW1hZ2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2Z1bGwtc2NyZWVuLWltYWdlJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmdWxsU2NyZWVuSW1hZ2U6IEZ1bGxTY3JlZW5JbWFnZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5mdWxsU2NyZWVuSW1hZ2Uuc2hvd0ltYWdlVVJMKCcvYXNzZXRzLy4uLicpXG4gKiAgIC50aGVuKChkYXRhOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZnVsbFNjcmVlbkltYWdlLnNob3dJbWFnZUJhc2U2NCgnaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQS4uLicpXG4gKiAgIC50aGVuKChkYXRhOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Z1bGxTY3JlZW5JbWFnZScsXG4gIHBsdWdpbjogJ2VzLmtlZW5zb2Z0LmZ1bGxzY3JlZW5pbWFnZScsXG4gIHBsdWdpblJlZjogJ0Z1bGxTY3JlZW5JbWFnZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20va2VlbnNvZnQvRnVsbFNjcmVlbkltYWdlLUNvcmRvdmEtUGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZ1bGxTY3JlZW5JbWFnZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIE9wZW5zIGFuIGltYWdlIGZyb20gYSBVUkwgb3IgcGF0aFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IHVybCBvciBpbWFnZSBwYXRoXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzaG93SW1hZ2VVUkwodXJsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhbiBpbWFnZSBmcm9tIGEgYmFzZTY0IHN0cmluZ1xuICAgKiBAcGFyYW0gYmFzZTY0U3RyaW5nIHtzdHJpbmd9IGJhc2U2NCBzdHJpbmdcbiAgICogQHBhcmFtIG5hbWU/IHtzdHJpbmd9IGltYWdlIG5hbWVcbiAgICogQHBhcmFtIHR5cGU/IHtzdHJpbmd9IGltYWdlIGV4dGVuc2lvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2hvd0ltYWdlQmFzZTY0KGJhc2U2NFN0cmluZzogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCB0eXBlPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==