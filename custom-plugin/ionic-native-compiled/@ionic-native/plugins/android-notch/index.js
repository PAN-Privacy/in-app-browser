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
var AndroidNotchOriginal = /** @class */ (function (_super) {
    __extends(AndroidNotchOriginal, _super);
    function AndroidNotchOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidNotchOriginal.prototype.hasCutout = function () { return cordova(this, "hasCutout", {}, arguments); };
    AndroidNotchOriginal.prototype.getInsetTop = function () { return cordova(this, "getInsetTop", {}, arguments); };
    AndroidNotchOriginal.prototype.getInsetRight = function () { return cordova(this, "getInsetRight", {}, arguments); };
    AndroidNotchOriginal.prototype.getInsetBottom = function () { return cordova(this, "getInsetBottom", {}, arguments); };
    AndroidNotchOriginal.prototype.getInsetLeft = function () { return cordova(this, "getInsetLeft", {}, arguments); };
    AndroidNotchOriginal.pluginName = "AndroidNotch";
    AndroidNotchOriginal.plugin = "cordova-plugin-android-notch";
    AndroidNotchOriginal.pluginRef = "AndroidNotch";
    AndroidNotchOriginal.repo = "https://github.com/tobspr/cordova-plugin-android-notch.git";
    AndroidNotchOriginal.platforms = ["Android"];
    return AndroidNotchOriginal;
}(IonicNativePlugin));
var AndroidNotch = new AndroidNotchOriginal();
export { AndroidNotch };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FuZHJvaWQtbm90Y2gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBaUR0QyxnQ0FBaUI7Ozs7SUFPakQsZ0NBQVM7SUFVVCxrQ0FBVztJQVVYLG9DQUFhO0lBU2IscUNBQWM7SUFTZCxtQ0FBWTs7Ozs7O3VCQS9GZDtFQWtEa0MsaUJBQWlCO1NBQXRDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBbmRyb2lkIE5vdGNoXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGVuYWJsZXMgZGV2ZWxvcGVycyB0byBnZXQgdGhlIGN1dG91dCBhbmQgYW5kcm9pZCBkZXZpY2VzIGluc2V0IHNpemVzXG4gKiBJdCBpcyBiYXNlZCBvbiB0aGUgY29yZG92YSBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEB0b2JzcHI6IGh0dHBzOi8vZ2l0aHViLmNvbS90b2JzcHIvY29yZG92YS1wbHVnaW4tYW5kcm9pZC1ub3RjaFxuICogVGhpcyBwbHVnaW4gd29ya3Mgb24gYWxsIGFuZHJvaWQgdmVyc2lvbnMsIGJ1dCB3ZSBjYW4gb25seSBkZXRlY3Qgbm90Y2hlcyBzdGFydGluZyBmcm9tIEFuZHJvaWQgOS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFuZHJvaWROb3RjaCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYW5kcm9pZC1ub3RjaC9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuZHJvaWROb3RjaDogQW5kcm9pZE5vdGNoKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5hbmRyb2lkTm90Y2guaGFzQ3V0b3V0KClcbiAqICAgIC50aGVuKChweDogbnVtYmVyKSA9PiBjb25zb2xlLmxvZygnSW5zZXQgc2l6ZTogJyksIHB4KVxuICogICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKSlcbiAqXG4gKiB0aGlzLmFuZHJvaWROb3RjaC5nZXRJbnNldFRvcCgpXG4gKiAgICAudGhlbigocHg6IG51bWJlcikgPT4gY29uc29sZS5sb2coJ0luc2V0IHNpemU6ICcpLCBweClcbiAqICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcikpXG4gKlxuICogdGhpcy5hbmRyb2lkTm90Y2guZ2V0SW5zZXRSaWdodCgpXG4gKiAgICAudGhlbigocHg6IG51bWJlcikgPT4gY29uc29sZS5sb2coJ0luc2V0IHNpemU6ICcpLCBweClcbiAqICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcikpXG4gKlxuICogdGhpcy5hbmRyb2lkTm90Y2guZ2V0SW5zZXRCb3R0b20oKVxuICogICAgLnRoZW4oKHB4OiBudW1iZXIpID0+IGNvbnNvbGUubG9nKCdJbnNldCBzaXplOiAnKSwgcHgpXG4gKiAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyb3IpKVxuICpcbiAqIHRoaXMuYW5kcm9pZE5vdGNoLmdldEluc2V0TGVmdCgpXG4gKiAgICAudGhlbigocHg6IG51bWJlcikgPT4gY29uc29sZS5sb2coJ0luc2V0IHNpemU6ICcpLCBweClcbiAqICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcikpXG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQW5kcm9pZE5vdGNoJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYW5kcm9pZC1ub3RjaCcsXG4gIHBsdWdpblJlZjogJ0FuZHJvaWROb3RjaCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdG9ic3ByL2NvcmRvdmEtcGx1Z2luLWFuZHJvaWQtbm90Y2guZ2l0JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW5kcm9pZE5vdGNoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBhbmRyb2lkIGRldmljZSBoYXMgY3V0b3V0XG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc0N1dG91dCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaGVpZ3RoIG9mIHRoZSB0b3AgaW5zZXRcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRJbnNldFRvcCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBoZWlndGggb2YgdGhlIHJpZ2h0IGluc2V0XG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SW5zZXRSaWdodCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBoZWlndGggb2YgdGhlIGJvdHRvbSBpbnNldFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEluc2V0Qm90dG9tKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGhlaWd0aCBvZiB0aGUgbGVmdCBpbnNldFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEluc2V0TGVmdCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19