import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var CallLog = /** @class */ (function (_super) {
    __extends(CallLog, _super);
    function CallLog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallLog.prototype.getCallLog = function (filters) { return cordova(this, "getCallLog", {}, arguments); };
    CallLog.prototype.hasReadPermission = function () { return cordova(this, "hasReadPermission", { "platforms": ["Android"] }, arguments); };
    CallLog.prototype.requestReadPermission = function () { return cordova(this, "requestReadPermission", { "platforms": ["Android"] }, arguments); };
    CallLog.pluginName = "CallLog";
    CallLog.plugin = "cordova-plugin-calllog";
    CallLog.pluginRef = "plugins.callLog";
    CallLog.repo = "https://github.com/creacore-team/cordova-plugin-calllog";
    CallLog.platforms = ["Android"];
    CallLog.decorators = [
        { type: Injectable }
    ];
    return CallLog;
}(IonicNativePlugin));
export { CallLog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbGwtbG9nL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDM0MsMkJBQWlCOzs7O0lBTzVDLDRCQUFVLGFBQUMsT0FBd0I7SUFXbkMsbUNBQWlCO0lBV2pCLHVDQUFxQjs7Ozs7OztnQkE5QnRCLFVBQVU7O2tCQWpDWDtFQWtDNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDYWxsTG9nT2JqZWN0IHtcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW107XG4gIG9wZXJhdG9yOiAnPT0nIHwgJyE9JyB8ICc+JyB8ICc+PScgfCAnPCcgfCAnPD0nIHwgJ2xpa2UnO1xufVxuXG4vKipcbiAqIEBuYW1lIENhbGwgTG9nXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFjY2VzcyB0aGUgY2FsbCBoaXN0b3J5IG9uIGEgZGV2aWNlIGFuZCB0aGF0IGNhbiBiZSBmaWx0ZXJlZFxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2FsbExvZyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2FsbC1sb2cvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjYWxsTG9nOiBDYWxsTG9nKSB7IH1cbiAqXG4gKiBgYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQ2FsbExvZ09iamVjdFxuICpcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDYWxsTG9nJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2FsbGxvZycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuY2FsbExvZycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY3JlYWNvcmUtdGVhbS9jb3Jkb3ZhLXBsdWdpbi1jYWxsbG9nJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsbExvZyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gcmV0dXJuIHRoZSBjYWxsIGxvZ3NcbiAgICogQHBhcmFtIHtDYWxsTG9nT2JqZWN0W119IGZpbHRlcnMgYXJyYXkgb2Ygb2JqZWN0IHRvIGZpbHRlciB0aGUgcXVlcnlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRDYWxsTG9nKGZpbHRlcnM6IENhbGxMb2dPYmplY3RbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHBlcm1pc3Npb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICB9KVxuICBoYXNSZWFkUGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICB9KVxuICByZXF1ZXN0UmVhZFBlcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==