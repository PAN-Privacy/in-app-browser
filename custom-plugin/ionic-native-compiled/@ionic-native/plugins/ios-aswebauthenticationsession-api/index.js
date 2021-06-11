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
var IosASWebauthenticationSessionOriginal = /** @class */ (function (_super) {
    __extends(IosASWebauthenticationSessionOriginal, _super);
    function IosASWebauthenticationSessionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IosASWebauthenticationSessionOriginal.prototype.start = function (callbackUrl, authorizeURL) { return cordova(this, "start", {}, arguments); };
    IosASWebauthenticationSessionOriginal.pluginName = "IosASWebauthenticationSession";
    IosASWebauthenticationSessionOriginal.plugin = "cordova-plugin-ios-aswebauthenticationsession-api";
    IosASWebauthenticationSessionOriginal.pluginRef = "plugins.ASWebAuthSession";
    IosASWebauthenticationSessionOriginal.repo = "https://github.com/jwelker110/cordova-plugin-ios-aswebauthenticationsession-api";
    IosASWebauthenticationSessionOriginal.platforms = ["iOS"];
    return IosASWebauthenticationSessionOriginal;
}(IonicNativePlugin));
var IosASWebauthenticationSession = new IosASWebauthenticationSessionOriginal();
export { IosASWebauthenticationSession };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2lvcy1hc3dlYmF1dGhlbnRpY2F0aW9uc2Vzc2lvbi1hcGkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBZ0NyQixpREFBaUI7Ozs7SUFRbEUsNkNBQUssYUFBQyxXQUFtQixFQUFFLFlBQW9COzs7Ozs7d0NBekNqRDtFQWlDbUQsaUJBQWlCO1NBQXZELDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIGlvcy1hc3dlYmF1dGhlbnRpY2F0aW9uc2Vzc2lvbi1hcGlcbiAqIEBkZXNjcmlwdGlvblxuICogUGx1Z2luIGZvciBpT1MgMTIgQVNXZWJBdXRoZW50aWNhdGlvblNlc3Npb24gQVBJXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJb3NBU1dlYmF1dGhlbnRpY2F0aW9uU2Vzc2lvbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW9zLWFzd2ViYXV0aGVudGljYXRpb25zZXNzaW9uLWFwaS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIElvc0FTV2ViYXV0aGVudGljYXRpb25TZXNzaW9uOiBpb3MtYXN3ZWJhdXRoZW50aWNhdGlvbnNlc3Npb24tYXBpKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5Jb3NBU1dlYmF1dGhlbnRpY2F0aW9uU2Vzc2lvbi5zdGFydChjYWxsYmFja1VybCwgYXV0aG9yaXplVVJMKVxuICogICAudGhlbigocmVkaXJlY3RVcmw6IHN0cmluZykgPT4gY29uc29sZS5sb2cocmVkaXJlY3RVcmwpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0lvc0FTV2ViYXV0aGVudGljYXRpb25TZXNzaW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW9zLWFzd2ViYXV0aGVudGljYXRpb25zZXNzaW9uLWFwaScsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuQVNXZWJBdXRoU2Vzc2lvbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vandlbGtlcjExMC9jb3Jkb3ZhLXBsdWdpbi1pb3MtYXN3ZWJhdXRoZW50aWNhdGlvbnNlc3Npb24tYXBpJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJb3NBU1dlYmF1dGhlbnRpY2F0aW9uU2Vzc2lvbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RhcnQgYW4gYXV0aGVudGljYXRpb24gZmxvdyBpbiBBU1dlYmF1dGhlbnRpY2F0aW9uU2Vzc2lvblxuICAgKiBAcGFyYW0gY2FsbGJhY2tVcmwge3N0cmluZ30gQ2FsbGJhY2sgVVJMIG9mIHlvdXIgQXBwXG4gICAqIEBwYXJhbSBhdXRob3JpemVVUkwge251bWJlcn0gQXV0aG9yaXphdGlvbiBVUkxcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIHJlZGlyZWN0IFVSTCBhZnRlciBmaW5pc2hpbmcgQVNXZWJhdXRoZW50aWNhdGlvblNlc3Npb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnQoY2FsbGJhY2tVcmw6IHN0cmluZywgYXV0aG9yaXplVVJMOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19