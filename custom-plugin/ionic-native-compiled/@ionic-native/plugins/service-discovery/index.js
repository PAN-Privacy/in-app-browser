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
var ServiceDiscoveryOriginal = /** @class */ (function (_super) {
    __extends(ServiceDiscoveryOriginal, _super);
    function ServiceDiscoveryOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServiceDiscoveryOriginal.prototype.getNetworkServices = function (service) { return cordova(this, "getNetworkServices", {}, arguments); };
    ServiceDiscoveryOriginal.pluginName = "ServiceDiscovery";
    ServiceDiscoveryOriginal.plugin = "cordova-plugin-discovery";
    ServiceDiscoveryOriginal.pluginRef = "serviceDiscovery";
    ServiceDiscoveryOriginal.repo = "https://github.com/scottdermott/cordova-plugin-discovery";
    ServiceDiscoveryOriginal.platforms = ["Android", "iOS"];
    return ServiceDiscoveryOriginal;
}(IonicNativePlugin));
var ServiceDiscovery = new ServiceDiscoveryOriginal();
export { ServiceDiscovery };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NlcnZpY2UtZGlzY292ZXJ5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQStCbEMsb0NBQWlCOzs7O0lBT3JELDZDQUFrQixhQUFDLE9BQWU7Ozs7OzsyQkF2Q3BDO0VBZ0NzQyxpQkFBaUI7U0FBMUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU2VydmljZURpc2NvdmVyeVxuICogQGRlc2NyaXB0aW9uXG4gKiBTaW1wbGUgcGx1Z2luIHRvIGdldCBhbnkgU1NEUCAvIFVQblAgLyBETE5BIHNlcnZpY2Ugb24gYSBsb2NhbCBuZXR3b3JrXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTZXJ2aWNlRGlzY292ZXJ5IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zZXJ2aWNlLWRpc2NvdmVyeSc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZURpc2NvdmVyeTogU2VydmljZURpc2NvdmVyeSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuc2VydmljZURpc2NvdmVyeS5nZXROZXR3b3JrU2VydmljZXMoJ3NzZHA6YWxsJylcbiAqICAgLnRoZW4oZGV2aWNlcyA9PiBjb25zb2xlLmxvZyhkZXZpY2VzKSlcbiAqICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTZXJ2aWNlRGlzY292ZXJ5JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZGlzY292ZXJ5JyxcbiAgcGx1Z2luUmVmOiAnc2VydmljZURpc2NvdmVyeScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc2NvdHRkZXJtb3R0L2NvcmRvdmEtcGx1Z2luLWRpc2NvdmVyeScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlRGlzY292ZXJ5IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogRmluZHMgYW5kIHJldHVybnMgbWV0YWRhdGEgYWJvdXQgZGV2aWNlcyBkaXNjb3ZlcmVkIG9uIHRoZSBuZXR3b3JrIHZpYSBTU0RQIC8gVVBuUCAvIERMTkFcbiAgICogQHBhcmFtIHNlcnZpY2Uge3N0cmluZ30gVGhlIHNlcnZpY2UgbmFtZSB0byBkaXNjb3ZlclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXROZXR3b3JrU2VydmljZXMoc2VydmljZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==