import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Restart = /** @class */ (function (_super) {
    __extends(Restart, _super);
    function Restart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Restart.prototype.restart = function (cold) { return cordova(this, "restart", { "errorIndex": 0, "successIndex": 2 }, arguments); };
    Restart.prototype.enableDebug = function () { return cordova(this, "enableDebug", { "errorIndex": 0 }, arguments); };
    Restart.pluginName = "Restart";
    Restart.plugin = "cordova-plugin-restart";
    Restart.pluginRef = "RestartPlugin";
    Restart.repo = "https://github.com/MaximBelov/cordova-plugin-restart";
    Restart.install = "ionic cordova plugin add cordova-plugin-restart";
    Restart.platforms = ["Android"];
    Restart.decorators = [
        { type: Injectable }
    ];
    return Restart;
}(IonicNativePlugin));
export { Restart };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Jlc3RhcnQvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBZ0MzQywyQkFBaUI7Ozs7SUFLNUMseUJBQU8sYUFBQyxJQUFhO0lBT3JCLDZCQUFXOzs7Ozs7OztnQkFiWixVQUFVOztrQkFoQ1g7RUFpQzZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgUmVzdGFydFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiB0byByZXN0YXJ0IGFuZHJvaWQgYXBwbGljYXRpb25cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFJlc3RhcnQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3Jlc3RhcnQnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc3RhcnQ6IFJlc3RhcnQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLnJlc3RhcnQucmVzdGFydCh0cnVlKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1Jlc3RhcnQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1yZXN0YXJ0JyxcbiAgcGx1Z2luUmVmOiAnUmVzdGFydFBsdWdpbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTWF4aW1CZWxvdi9jb3Jkb3ZhLXBsdWdpbi1yZXN0YXJ0JyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1yZXN0YXJ0JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzdGFydCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoe1xuICAgIGVycm9ySW5kZXg6IDAsXG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICB9KVxuICByZXN0YXJ0KGNvbGQ6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBlcnJvckluZGV4OiAwLFxuICB9KVxuICBlbmFibGVEZWJ1ZygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19