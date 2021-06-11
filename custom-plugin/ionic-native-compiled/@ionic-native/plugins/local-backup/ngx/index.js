import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var LocalBackup = /** @class */ (function (_super) {
    __extends(LocalBackup, _super);
    function LocalBackup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalBackup.prototype.create = function (data) { return cordova(this, "create", {}, arguments); };
    LocalBackup.prototype.read = function () { return cordova(this, "read", {}, arguments); };
    LocalBackup.prototype.exists = function () { return cordova(this, "exists", {}, arguments); };
    LocalBackup.prototype.remove = function () { return cordova(this, "remove", {}, arguments); };
    LocalBackup.pluginName = "LocalBackup";
    LocalBackup.plugin = "cordova-plugin-local-backup";
    LocalBackup.pluginRef = "LocalBackup";
    LocalBackup.repo = "https://github.com/MaximBelov/cordova-plugin-local-backup";
    LocalBackup.install = "ionic cordova plugin add cordova-plugin-local-backup";
    LocalBackup.platforms = ["Android", "iOS"];
    LocalBackup.decorators = [
        { type: Injectable }
    ];
    return LocalBackup;
}(IonicNativePlugin));
export { LocalBackup };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xvY2FsLWJhY2t1cC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnQ3ZDLCtCQUFpQjs7OztJQUVoRCw0QkFBTSxhQUFDLElBQVM7SUFLaEIsMEJBQUk7SUFLSiw0QkFBTTtJQUtOLDRCQUFNOzs7Ozs7OztnQkFsQlAsVUFBVTs7c0JBaENYO0VBaUNpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIExvY2FsQmFja3VwXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHRvIGNyZWF0ZSBsb2NhbCBiYWNrdXBcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IExvY2FsQmFja3VwIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9sb2NhbC1iYWNrdXAvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhbEJhY2t1cDogTG9jYWxCYWNrdXApIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmxvY2FsQmFja3VwLmNyZWF0ZSh7ZGF0YToge2tleTogJ3ZhbHVlJ319KVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0xvY2FsQmFja3VwJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbG9jYWwtYmFja3VwJyxcbiAgcGx1Z2luUmVmOiAnTG9jYWxCYWNrdXAnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL01heGltQmVsb3YvY29yZG92YS1wbHVnaW4tbG9jYWwtYmFja3VwJyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1sb2NhbC1iYWNrdXAnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxCYWNrdXAgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKClcbiAgY3JlYXRlKGRhdGE6IGFueSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgcmVhZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZXhpc3RzKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgcmVtb3ZlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19