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
var HCEOriginal = /** @class */ (function (_super) {
    __extends(HCEOriginal, _super);
    function HCEOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HCEOriginal.prototype.registerCommandCallback = function (onCommand, fail) { return cordova(this, "registerCommandCallback", {}, arguments); };
    HCEOriginal.prototype.registerDeactivatedCallback = function (ok, fail) { return cordova(this, "registerDeactivatedCallback", {}, arguments); };
    HCEOriginal.prototype.sendResponse = function (response, success, failure) { return cordova(this, "sendResponse", {}, arguments); };
    HCEOriginal.pluginName = "hce";
    HCEOriginal.plugin = "cordova-plugin-hce";
    HCEOriginal.pluginRef = "hce";
    HCEOriginal.repo = "https://github.com/don/cordova-plugin-hce";
    HCEOriginal.install = "";
    HCEOriginal.installVariables = ["AID_FILTER"];
    HCEOriginal.platforms = ["Android"];
    return HCEOriginal;
}(IonicNativePlugin));
var HCE = new HCEOriginal();
export { HCE };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2hjZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUF1Qy9DLHVCQUFpQjs7OztJQVF4QyxxQ0FBdUIsYUFBQyxTQUEwQixFQUFFLElBQWU7SUFVbkUseUNBQTJCLGFBQUMsRUFBdUIsRUFBRSxJQUFlO0lBWXBFLDBCQUFZLGFBQUMsUUFBb0IsRUFBRSxPQUFrQixFQUFFLE9BQWtCOzs7Ozs7OztjQXRFM0U7RUF3Q3lCLGlCQUFpQjtTQUE3QixHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgaGNlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEhDRSBDb3Jkb3ZhIFdyYXBwZXJcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IGhjZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaGNlL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaGNlOiBoY2UpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGZ1bmN0aW9uIG9uQ29tbWFuZChjb21tYW5kKXtcbiAqICAgdmFyIGNvbW1hbmRBc0J5dGVzID0gbmV3IFVpbnQ4QXJyYXkoY29tbWFuZCk7XG4gKiAgIHZhciBjb21tYW5kQXNTdHJpbmcgPSBoY2UudXRpbC5ieXRlQXJyYXlUb0hleFN0cmluZyhjb21tYW5kQXNCeXRlcyk7XG4gKlxuICogICAvLyBkbyBzb21ldGhpbmcgd2l0aCB0aGUgY29tbWFuZFxuICpcbiAqICAgLy8gc2VuZCB0aGUgcmVzcG9uc2VcbiAqICAgaGNlLnNlbmRSZXBvbnNlKGNvbW1hbmRSZXNwb25zZSk7XG4gKiB9XG4gKiB0aGlzLmhjZS5yZWdpc3RlckNvbW1hbmRDYWxsYmFjaygpLnRoZW4ob25Db21tYW5kKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdoY2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1oY2UnLFxuICBwbHVnaW5SZWY6ICdoY2UnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Rvbi9jb3Jkb3ZhLXBsdWdpbi1oY2UnLFxuICBpbnN0YWxsOiAnJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBSURfRklMVEVSJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhDRSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBjb21tYW5kIHJlY2VpdmVyLlxuICAgKiBAcGFyYW0gb25Db21tYW5kIHtIQ0VDb21tYW5kRXZlbnR9IFRoZSBldmVudCBoYW5kbGVyLlxuICAgKiBAcGFyYW0gZmFpbCB7RnVuY3Rpb259IEVycm9yIGV2ZW50IGhhbmRsZXIuXG4gICAqXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlZ2lzdGVyQ29tbWFuZENhbGxiYWNrKG9uQ29tbWFuZDogSENFQ29tbWFuZEV2ZW50LCBmYWlsPzogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgRGVhY3RpdmF0ZWQgcmVjZWl2ZXIuXG4gICAqIEBwYXJhbSBvayB7SENFRGVhY3RpdmF0ZWRFdmVudH0gU3VjY2VzcyBldmVudCBoYW5kbGVyLlxuICAgKiBAcGFyYW0gZmFpbCB7RnVuY3Rpb259IEVycm9yIGV2ZW50IGhhbmRsZXIuXG4gICAqXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlZ2lzdGVyRGVhY3RpdmF0ZWRDYWxsYmFjayhvazogSENFRGVhY3RpdmF0ZWRFdmVudCwgZmFpbD86IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyByZXNwb25zZSBBUERVLlxuICAgKiBAcGFyYW0gcmVzcG9uc2Uge1VpbnQ4QXJyYXl9IFJlc3BvbnNlXG4gICAqIEBwYXJhbSBzdWNjZXNzIHtzdHJpbmd9IFN1Y2Nlc3MgQ2FsbGJhY2suXG4gICAqIEBwYXJhbSBzdWNjZXNzIHtzdHJpbmd9IEZhaWx1cmUgQ2FsbGJhY2suXG4gICAqXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlbmRSZXNwb25zZShyZXNwb25zZTogVWludDhBcnJheSwgc3VjY2Vzcz86IEZ1bmN0aW9uLCBmYWlsdXJlPzogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEhDRUNvbW1hbmRFdmVudCA9IChjb21tYW5kOiBVaW50OEFycmF5KSA9PiB2b2lkO1xuZXhwb3J0IHR5cGUgSENFRGVhY3RpdmF0ZWRFdmVudCA9IChjb21tYW5kOiBudW1iZXIpID0+IHZvaWQ7XG4iXX0=