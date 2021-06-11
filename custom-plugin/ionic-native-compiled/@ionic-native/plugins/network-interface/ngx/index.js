import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var NetworkInterface = /** @class */ (function (_super) {
    __extends(NetworkInterface, _super);
    function NetworkInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetworkInterface.prototype.getWiFiIPAddress = function () { return cordova(this, "getWiFiIPAddress", {}, arguments); };
    NetworkInterface.prototype.getCarrierIPAddress = function () { return cordova(this, "getCarrierIPAddress", {}, arguments); };
    NetworkInterface.prototype.getHttpProxyInformation = function (url) { return cordova(this, "getHttpProxyInformation", {}, arguments); };
    NetworkInterface.pluginName = "NetworkInterface";
    NetworkInterface.plugin = "cordova-plugin-networkinterface";
    NetworkInterface.pluginRef = "networkinterface";
    NetworkInterface.repo = "https://github.com/salbahra/cordova-plugin-networkinterface";
    NetworkInterface.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "Windows", "Windows Phone"];
    NetworkInterface.decorators = [
        { type: Injectable }
    ];
    return NetworkInterface;
}(IonicNativePlugin));
export { NetworkInterface };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25ldHdvcmstaW50ZXJmYWNlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW9DbEMsb0NBQWlCOzs7O0lBTXJELDJDQUFnQjtJQVNoQiw4Q0FBbUI7SUFVbkIsa0RBQXVCLGFBQUMsR0FBVzs7Ozs7OztnQkExQnBDLFVBQVU7OzJCQXBDWDtFQXFDc0MsaUJBQWlCO1NBQTFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIE5ldHdvcmsgSW50ZXJmYWNlXG4gKiBAZGVzY3JpcHRpb25cbiAqIE5ldHdvcmsgaW50ZXJmYWNlIGluZm9ybWF0aW9uIHBsdWdpbiBmb3IgQ29yZG92YS9QaG9uZUdhcCB0aGF0IHN1cHBvcnRzIEFuZHJvaWQsIEJsYWNrYmVycnkgMTAsIEJyb3dzZXIsIGlPUywgYW5kIFdpbmRvd3MgUGhvbmUgOC5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE5ldHdvcmtJbnRlcmZhY2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmstaW50ZXJmYWNlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IoIHByaXZhdGUgbmV0d29ya0ludGVyZmFjZTogTmV0d29ya0ludGVyZmFjZSApIHtcbiAqXG4gKiAgIHRoaXMubmV0d29ya0ludGVyZmFjZS5nZXRXaUZpSVBBZGRyZXNzKClcbiAqICAgICAudGhlbihhZGRyZXNzID0+IGNvbnNvbGUuaW5mbyhgSVA6ICR7YWRkcmVzcy5pcH0sIFN1Ym5ldDogJHthZGRyZXNzLnN1Ym5ldH1gKSlcbiAqICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGdldCBJUDogJHtlcnJvcn1gKSk7XG4gKlxuICogICB0aGlzLm5ldHdvcmtJbnRlcmZhY2UuZ2V0Q2FycmllcklQQWRkcmVzcygpXG4gKiAgICAgLnRoZW4oYWRkcmVzcyA9PiBjb25zb2xlLmluZm8oYElQOiAke2FkZHJlc3MuaXB9LCBTdWJuZXQ6ICR7YWRkcmVzcy5zdWJuZXR9YCkpXG4gKiAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoYFVuYWJsZSB0byBnZXQgSVA6ICR7ZXJyb3J9YCkpO1xuICpcbiAqICAgY29uc3QgdXJsID0gJ3d3dy5naXRodWIuY29tJztcbiAqICAgdGhpcy5uZXR3b3JrSW50ZXJmYWNlLmdldEh0dHBQcm94eUluZm9ybWF0aW9uKHVybClcbiAqICAgICAudGhlbihwcm94eSA9PiBjb25zb2xlLmluZm8oYFR5cGU6ICR7cHJveHkudHlwZX0sIEhvc3Q6ICR7cHJveHkuaG9zdH0sIFBvcnQ6ICR7cHJveHkucG9ydH1gKSlcbiAqICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGdldCBwcm94eSBpbmZvOiAke2Vycm9yfWApKTtcbiAqIH1cbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ05ldHdvcmtJbnRlcmZhY2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uZXR3b3JraW50ZXJmYWNlJyxcbiAgcGx1Z2luUmVmOiAnbmV0d29ya2ludGVyZmFjZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc2FsYmFocmEvY29yZG92YS1wbHVnaW4tbmV0d29ya2ludGVyZmFjZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0JsYWNrQmVycnkgMTAnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cycsICdXaW5kb3dzIFBob25lJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5ldHdvcmtJbnRlcmZhY2UgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBHZXRzIHRoZSBXaUZpIElQIGFkZHJlc3NcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIElQIGFkZHJlc3MgaW5mb3JtYXRpb24uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFdpRmlJUEFkZHJlc3MoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgd2lyZWxlc3MgY2FycmllciBJUCBhZGRyZXNzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBJUCBhZGRyZXNzIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRDYXJyaWVySVBBZGRyZXNzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHJlbGV2YW50IHByb3hpZXMgZm9yIHRoZSBwYXNzZWQgVVJMIGluIG9yZGVyIG9mIGFwcGxpY2F0aW9uXG4gICAqIEBwYXJhbSB7dXJsfSBtZXNzYWdlICBUaGUgbWVzc2FnZSB0byBkaXNwbGF5LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcHJveHkgaW5mb3JtYXRpb24uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEh0dHBQcm94eUluZm9ybWF0aW9uKHVybDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==