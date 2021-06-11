import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HeaderColor = /** @class */ (function (_super) {
    __extends(HeaderColor, _super);
    function HeaderColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderColor.prototype.tint = function (color) { return cordova(this, "tint", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    HeaderColor.pluginName = "HeaderColor";
    HeaderColor.plugin = "cordova-plugin-headercolor";
    HeaderColor.pluginRef = "plugins.headerColor";
    HeaderColor.repo = "https://github.com/tomloprod/cordova-plugin-headercolor";
    HeaderColor.platforms = ["Android"];
    HeaderColor.decorators = [
        { type: Injectable }
    ];
    return HeaderColor;
}(IonicNativePlugin));
export { HeaderColor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2hlYWRlci1jb2xvci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUEwQnZDLCtCQUFpQjs7OztJQVdoRCwwQkFBSSxhQUFDLEtBQWE7Ozs7Ozs7Z0JBWm5CLFVBQVU7O3NCQTFCWDtFQTJCaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBIZWFkZXIgQ29sb3JcbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBwbHVnaW4gdG8gY2hhbmdlIGNvbG9yIG9mIGhlYWRlciBpbiBBbmRyb2lkIE11bHRpdGFzayBWaWV3XG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBIZWFkZXJDb2xvciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaGVhZGVyLWNvbG9yL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBoZWFkZXJDb2xvcjogSGVhZGVyQ29sb3IpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuaGVhZGVyQ29sb3IudGludCgnI2JlY2IyOScpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSGVhZGVyQ29sb3InLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1oZWFkZXJjb2xvcicsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuaGVhZGVyQ29sb3InLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RvbWxvcHJvZC9jb3Jkb3ZhLXBsdWdpbi1oZWFkZXJjb2xvcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbG9yIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2V0IGEgY29sb3IgdG8gdGhlIHRhc2sgaGVhZGVyXG4gICAqIEBwYXJhbSBjb2xvciB7c3RyaW5nfSBUaGUgaGV4IHZhbHVlIG9mIHRoZSBjb2xvclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2VzcycsXG4gICAgZXJyb3JOYW1lOiAnZmFpbHVyZScsXG4gIH0pXG4gIHRpbnQoY29sb3I6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=