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
var RestartOriginal = /** @class */ (function (_super) {
    __extends(RestartOriginal, _super);
    function RestartOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RestartOriginal.prototype.restart = function (cold) { return cordova(this, "restart", { "errorIndex": 0, "successIndex": 2 }, arguments); };
    RestartOriginal.prototype.enableDebug = function () { return cordova(this, "enableDebug", { "errorIndex": 0 }, arguments); };
    RestartOriginal.pluginName = "Restart";
    RestartOriginal.plugin = "cordova-plugin-restart";
    RestartOriginal.pluginRef = "RestartPlugin";
    RestartOriginal.repo = "https://github.com/MaximBelov/cordova-plugin-restart";
    RestartOriginal.install = "ionic cordova plugin add cordova-plugin-restart";
    RestartOriginal.platforms = ["Android"];
    return RestartOriginal;
}(IonicNativePlugin));
var Restart = new RestartOriginal();
export { Restart };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Jlc3RhcnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBZ0MzQywyQkFBaUI7Ozs7SUFLNUMseUJBQU8sYUFBQyxJQUFhO0lBT3JCLDZCQUFXOzs7Ozs7O2tCQTdDYjtFQWlDNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBSZXN0YXJ0XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHRvIHJlc3RhcnQgYW5kcm9pZCBhcHBsaWNhdGlvblxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUmVzdGFydCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvcmVzdGFydCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdGFydDogUmVzdGFydCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMucmVzdGFydC5yZXN0YXJ0KHRydWUpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUmVzdGFydCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXJlc3RhcnQnLFxuICBwbHVnaW5SZWY6ICdSZXN0YXJ0UGx1Z2luJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NYXhpbUJlbG92L2NvcmRvdmEtcGx1Z2luLXJlc3RhcnQnLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXJlc3RhcnQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXN0YXJ0IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YSh7XG4gICAgZXJyb3JJbmRleDogMCxcbiAgICBzdWNjZXNzSW5kZXg6IDIsXG4gIH0pXG4gIHJlc3RhcnQoY29sZDogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIGVycm9ySW5kZXg6IDAsXG4gIH0pXG4gIGVuYWJsZURlYnVnKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=