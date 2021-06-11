import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HCE = /** @class */ (function (_super) {
    __extends(HCE, _super);
    function HCE() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HCE.prototype.registerCommandCallback = function (onCommand, fail) { return cordova(this, "registerCommandCallback", {}, arguments); };
    HCE.prototype.registerDeactivatedCallback = function (ok, fail) { return cordova(this, "registerDeactivatedCallback", {}, arguments); };
    HCE.prototype.sendResponse = function (response, success, failure) { return cordova(this, "sendResponse", {}, arguments); };
    HCE.pluginName = "hce";
    HCE.plugin = "cordova-plugin-hce";
    HCE.pluginRef = "hce";
    HCE.repo = "https://github.com/don/cordova-plugin-hce";
    HCE.install = "";
    HCE.installVariables = ["AID_FILTER"];
    HCE.platforms = ["Android"];
    HCE.decorators = [
        { type: Injectable }
    ];
    return HCE;
}(IonicNativePlugin));
export { HCE };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2hjZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUF1Qy9DLHVCQUFpQjs7OztJQVF4QyxxQ0FBdUIsYUFBQyxTQUEwQixFQUFFLElBQWU7SUFVbkUseUNBQTJCLGFBQUMsRUFBdUIsRUFBRSxJQUFlO0lBWXBFLDBCQUFZLGFBQUMsUUFBb0IsRUFBRSxPQUFrQixFQUFFLE9BQWtCOzs7Ozs7Ozs7Z0JBL0IxRSxVQUFVOztjQXZDWDtFQXdDeUIsaUJBQWlCO1NBQTdCLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBoY2VcbiAqIEBkZXNjcmlwdGlvblxuICogSENFIENvcmRvdmEgV3JhcHBlclxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgaGNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9oY2Uvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBoY2U6IGhjZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogZnVuY3Rpb24gb25Db21tYW5kKGNvbW1hbmQpe1xuICogICB2YXIgY29tbWFuZEFzQnl0ZXMgPSBuZXcgVWludDhBcnJheShjb21tYW5kKTtcbiAqICAgdmFyIGNvbW1hbmRBc1N0cmluZyA9IGhjZS51dGlsLmJ5dGVBcnJheVRvSGV4U3RyaW5nKGNvbW1hbmRBc0J5dGVzKTtcbiAqXG4gKiAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIHRoZSBjb21tYW5kXG4gKlxuICogICAvLyBzZW5kIHRoZSByZXNwb25zZVxuICogICBoY2Uuc2VuZFJlcG9uc2UoY29tbWFuZFJlc3BvbnNlKTtcbiAqIH1cbiAqIHRoaXMuaGNlLnJlZ2lzdGVyQ29tbWFuZENhbGxiYWNrKCkudGhlbihvbkNvbW1hbmQpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ2hjZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhjZScsXG4gIHBsdWdpblJlZjogJ2hjZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZG9uL2NvcmRvdmEtcGx1Z2luLWhjZScsXG4gIGluc3RhbGw6ICcnLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0FJRF9GSUxURVInXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSENFIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUmVnaXN0ZXJzIGNvbW1hbmQgcmVjZWl2ZXIuXG4gICAqIEBwYXJhbSBvbkNvbW1hbmQge0hDRUNvbW1hbmRFdmVudH0gVGhlIGV2ZW50IGhhbmRsZXIuXG4gICAqIEBwYXJhbSBmYWlsIHtGdW5jdGlvbn0gRXJyb3IgZXZlbnQgaGFuZGxlci5cbiAgICpcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVnaXN0ZXJDb21tYW5kQ2FsbGJhY2sob25Db21tYW5kOiBIQ0VDb21tYW5kRXZlbnQsIGZhaWw/OiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBEZWFjdGl2YXRlZCByZWNlaXZlci5cbiAgICogQHBhcmFtIG9rIHtIQ0VEZWFjdGl2YXRlZEV2ZW50fSBTdWNjZXNzIGV2ZW50IGhhbmRsZXIuXG4gICAqIEBwYXJhbSBmYWlsIHtGdW5jdGlvbn0gRXJyb3IgZXZlbnQgaGFuZGxlci5cbiAgICpcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVnaXN0ZXJEZWFjdGl2YXRlZENhbGxiYWNrKG9rOiBIQ0VEZWFjdGl2YXRlZEV2ZW50LCBmYWlsPzogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIHJlc3BvbnNlIEFQRFUuXG4gICAqIEBwYXJhbSByZXNwb25zZSB7VWludDhBcnJheX0gUmVzcG9uc2VcbiAgICogQHBhcmFtIHN1Y2Nlc3Mge3N0cmluZ30gU3VjY2VzcyBDYWxsYmFjay5cbiAgICogQHBhcmFtIHN1Y2Nlc3Mge3N0cmluZ30gRmFpbHVyZSBDYWxsYmFjay5cbiAgICpcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2VuZFJlc3BvbnNlKHJlc3BvbnNlOiBVaW50OEFycmF5LCBzdWNjZXNzPzogRnVuY3Rpb24sIGZhaWx1cmU/OiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgSENFQ29tbWFuZEV2ZW50ID0gKGNvbW1hbmQ6IFVpbnQ4QXJyYXkpID0+IHZvaWQ7XG5leHBvcnQgdHlwZSBIQ0VEZWFjdGl2YXRlZEV2ZW50ID0gKGNvbW1hbmQ6IG51bWJlcikgPT4gdm9pZDtcbiJdfQ==