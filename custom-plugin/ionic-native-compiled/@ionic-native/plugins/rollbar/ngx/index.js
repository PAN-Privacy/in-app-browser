import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Rollbar = /** @class */ (function (_super) {
    __extends(Rollbar, _super);
    function Rollbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rollbar.prototype.init = function () { return cordova(this, "init", {}, arguments); };
    Rollbar.pluginName = "Rollbar";
    Rollbar.plugin = "resgrid-cordova-plugins-rollbar";
    Rollbar.pluginRef = "cordova.plugins.Rollbar";
    Rollbar.repo = "https://github.com/Resgrid/cordova-plugins-rollbar";
    Rollbar.install = "ionic cordova plugin add resgrid-cordova-plugins-rollbar --variable ROLLBAR_ACCESS_TOKEN=\"YOUR_ROLLBAR_ACCEESS_TOKEN\" --variable ROLLBAR_ENVIRONMENT=\"ROLLBAR_ENVIRONMENT\"";
    Rollbar.installVariables = ["ROLLBAR_ACCESS_TOKEN", "ROLLBAR_ENVIRONMENT"];
    Rollbar.platforms = ["Android", "iOS"];
    Rollbar.decorators = [
        { type: Injectable }
    ];
    return Rollbar;
}(IonicNativePlugin));
export { Rollbar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3JvbGxiYXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBK0IzQywyQkFBaUI7Ozs7SUFNNUMsc0JBQUk7Ozs7Ozs7OztnQkFQTCxVQUFVOztrQkEvQlg7RUFnQzZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQGJldGFcbiAqIEBuYW1lIFJvbGxiYXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWRkcyBbUm9sbGJhcl0oaHR0cHM6Ly9yb2xsYmFyLmNvbS8pIEFwcCBtb25pdG9yaW5nIHRvIHlvdXIgYXBwbGljYXRpb25cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFJvbGxiYXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3JvbGxiYXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvbGxiYXI6IFJvbGxiYXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMucm9sbGJhci5pbml0KCk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUm9sbGJhcicsXG4gIHBsdWdpbjogJ3Jlc2dyaWQtY29yZG92YS1wbHVnaW5zLXJvbGxiYXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuUm9sbGJhcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vUmVzZ3JpZC9jb3Jkb3ZhLXBsdWdpbnMtcm9sbGJhcicsXG4gIGluc3RhbGw6XG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCByZXNncmlkLWNvcmRvdmEtcGx1Z2lucy1yb2xsYmFyIC0tdmFyaWFibGUgUk9MTEJBUl9BQ0NFU1NfVE9LRU49XCJZT1VSX1JPTExCQVJfQUNDRUVTU19UT0tFTlwiIC0tdmFyaWFibGUgUk9MTEJBUl9FTlZJUk9OTUVOVD1cIlJPTExCQVJfRU5WSVJPTk1FTlRcIicsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnUk9MTEJBUl9BQ0NFU1NfVE9LRU4nLCAnUk9MTEJBUl9FTlZJUk9OTUVOVCddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm9sbGJhciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gaW5pdGlhbGl6ZXMgdGhlIG1vbml0b3Jpbmcgb2YgeW91ciBhcHBsaWNhdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgcGx1Z2luIHN1Y2Nlc3NmdWxseSBpbml0aWFsaXplc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbml0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=