import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var QuikklyPlugin = /** @class */ (function (_super) {
    __extends(QuikklyPlugin, _super);
    function QuikklyPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuikklyPlugin.prototype.openScanner = function () { return cordova(this, "openScanner", {}, arguments); };
    QuikklyPlugin.pluginName = "QuikklyPlugin";
    QuikklyPlugin.plugin = "cordova-plugin-quikkly";
    QuikklyPlugin.pluginRef = "cordova.plugins.quikkly";
    QuikklyPlugin.repo = "https://github.com/quikkly/cordova-plugin-quikkly.git";
    QuikklyPlugin.platforms = ["Android", "iOS"];
    QuikklyPlugin.decorators = [
        { type: Injectable }
    ];
    return QuikklyPlugin;
}(IonicNativePlugin));
export { QuikklyPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3F1aWtrbHkvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBZXJDLGlDQUFpQjs7OztJQUVsRCxtQ0FBVzs7Ozs7OztnQkFIWixVQUFVOzt3QkFmWDtFQWdCbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBRdWlra2x5UGx1Z2luXG4gKiBAZGVzY3JpcHRpb24gaW9uaWMgd3JhcHBlciBmb3IgY29yZG92YS1wbHVnaW4tcXVpa2tseVxuICogVXNlIHRoZSBxdWlra2x5IHNjYW5uZXIgaW4geW91ciBpb25pYyBhcHBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdRdWlra2x5UGx1Z2luJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcXVpa2tseScsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5xdWlra2x5JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9xdWlra2x5L2NvcmRvdmEtcGx1Z2luLXF1aWtrbHkuZ2l0JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFF1aWtrbHlQbHVnaW4gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKClcbiAgb3BlblNjYW5uZXIoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19