import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Uptime = /** @class */ (function (_super) {
    __extends(Uptime, _super);
    function Uptime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Uptime.prototype.getUptime = function (includeDeepSleep) { return cordova(this, "getUptime", {}, arguments); };
    Uptime.pluginName = "Uptime";
    Uptime.plugin = "cordova-plugin-uptime";
    Uptime.pluginRef = "Uptime";
    Uptime.repo = "https://github.com/s1lviu/cordova-plugin-uptime";
    Uptime.platforms = ["Android", "iOS"];
    Uptime.decorators = [
        { type: Injectable }
    ];
    return Uptime;
}(IonicNativePlugin));
export { Uptime };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3VwdGltZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE2QjVDLDBCQUFpQjs7OztJQU8zQywwQkFBUyxhQUFDLGdCQUF5Qjs7Ozs7OztnQkFScEMsVUFBVTs7aUJBN0JYO0VBOEI0QixpQkFBaUI7U0FBaEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFVwdGltZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBwcm92aWRlcyB0aGUgdGltZSBzcGVudCBpbiBtaWxsaXNlY29uZHMgc2luY2UgYm9vdCAodXB0aW1lKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFVwdGltZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdXB0aW1lL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB1cHRpbWU6IFVwdGltZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy51cHRpbWUuZ2V0VXB0aW1lKGluY2x1ZGVEZWVwU2xlZXApXG4gKiAgIC50aGVuKHVwdGltZSA9PiBjb25zb2xlLmxvZyh1cHRpbWUpKVxuICogICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdVcHRpbWUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi11cHRpbWUnLFxuICBwbHVnaW5SZWY6ICdVcHRpbWUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3MxbHZpdS9jb3Jkb3ZhLXBsdWdpbi11cHRpbWUnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXB0aW1lIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiByZXR1cm4gc3lzdGVtIHVwdGltZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVEZWVwU2xlZXAgU2V0IHRvIHRydWUgdG8gaW5jbHVkZSBzeXN0ZW0gZGVlcCBzbGVlcFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmV0dXJuIHRoZSB1cHRpbWUgaW4gbWlsbGlzZWNvbmRzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFVwdGltZShpbmNsdWRlRGVlcFNsZWVwOiBib29sZWFuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==