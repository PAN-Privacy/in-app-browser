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
var PowerManagementOriginal = /** @class */ (function (_super) {
    __extends(PowerManagementOriginal, _super);
    function PowerManagementOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PowerManagementOriginal.prototype.acquire = function () { return cordova(this, "acquire", {}, arguments); };
    PowerManagementOriginal.prototype.dim = function () { return cordova(this, "dim", {}, arguments); };
    PowerManagementOriginal.prototype.release = function () { return cordova(this, "release", {}, arguments); };
    PowerManagementOriginal.prototype.setReleaseOnPause = function (set) { return cordova(this, "setReleaseOnPause", {}, arguments); };
    PowerManagementOriginal.pluginName = "PowerManagement";
    PowerManagementOriginal.plugin = "cordova-plugin-powermanagement-orig";
    PowerManagementOriginal.pluginRef = "powerManagement";
    PowerManagementOriginal.repo = "https://github.com/Viras-/cordova-plugin-powermanagement";
    PowerManagementOriginal.platforms = ["Android", "iOS", "Windows", "Windows Phone"];
    return PowerManagementOriginal;
}(IonicNativePlugin));
var PowerManagement = new PowerManagementOriginal();
export { PowerManagement };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Bvd2VyLW1hbmFnZW1lbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNkJuQyxtQ0FBaUI7Ozs7SUFNcEQsaUNBQU87SUFTUCw2QkFBRztJQVNILGlDQUFPO0lBV1AsMkNBQWlCLGFBQUMsR0FBWTs7Ozs7OzBCQWpFaEM7RUE4QnFDLGlCQUFpQjtTQUF6QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG4vKipcbiAqIEBuYW1lIFBvd2VyIE1hbmFnZW1lbnRcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIFBvd2VyTWFuYWdlbWVudCBwbHVnaW4gb2ZmZXJzIGFjY2VzcyB0byB0aGUgZGV2aWNlcyBwb3dlci1tYW5hZ2VtZW50IGZ1bmN0aW9uYWxpdHkuXG4gKiBJdCBzaG91bGQgYmUgdXNlZCBmb3IgYXBwbGljYXRpb25zIHdoaWNoIGtlZXAgcnVubmluZyBmb3IgYSBsb25nIHRpbWUgd2l0aG91dCBhbnkgdXNlciBpbnRlcmFjdGlvbi5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFBvd2VyTWFuYWdlbWVudCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvcG93ZXItbWFuYWdlbWVudC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcG93ZXJNYW5hZ2VtZW50OiBQb3dlck1hbmFnZW1lbnQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMucG93ZXJNYW5hZ2VtZW50LmFjcXVpcmUoKVxuICogICAudGhlbihvblN1Y2Nlc3MpXG4gKiAgIC5jYXRjaChvbkVycm9yKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdQb3dlck1hbmFnZW1lbnQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1wb3dlcm1hbmFnZW1lbnQtb3JpZycsXG4gIHBsdWdpblJlZjogJ3Bvd2VyTWFuYWdlbWVudCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVmlyYXMtL2NvcmRvdmEtcGx1Z2luLXBvd2VybWFuYWdlbWVudCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG93ZXJNYW5hZ2VtZW50IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQWNxdWlyZSBhIHdha2Vsb2NrIGJ5IGNhbGxpbmcgdGhpcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYWNxdWlyZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGFjcXVpcmVzIGEgcGFydGlhbCB3YWtlbG9jaywgYWxsb3dpbmcgdGhlIHNjcmVlbiB0byBiZSBkaW1tZWQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRpbSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxlYXNlIHRoZSB3YWtlbG9jay4gSXQncyBpbXBvcnRhbnQgdG8gZG8gdGhpcyB3aGVuIHlvdSdyZSBmaW5pc2hlZCB3aXRoIHRoZSB3YWtlbG9jaywgdG8gYXZvaWQgdW5uZWNlc3NhcnkgYmF0dGVyeSBkcmFpbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVsZWFzZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0LCB0aGUgcGx1Z2luIHdpbGwgYXV0b21hdGljYWxseSByZWxlYXNlIGEgd2FrZWxvY2sgd2hlbiB5b3VyIGFwcCBpcyBwYXVzZWQgKGUuZy4gd2hlbiB0aGUgc2NyZWVuIGlzIHR1cm5lZCBvZmYsIG9yIHRoZSB1c2VyIHN3aXRjaGVzIHRvIGFub3RoZXIgYXBwKS5cbiAgICogSXQgd2lsbCByZWFjcXVpcmUgdGhlIHdha2Vsb2NrIHVwb24gYXBwIHJlc3VtZS4gSWYgeW91IHdvdWxkIHByZWZlciB0byBkaXNhYmxlIHRoaXMgYmVoYXZpb3VyLCB5b3UgY2FuIHVzZSB0aGlzIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gc2V0IHtib29sZWFufVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRSZWxlYXNlT25QYXVzZShzZXQ6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19