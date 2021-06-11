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
import { Observable } from 'rxjs';
var DBMeterOriginal = /** @class */ (function (_super) {
    __extends(DBMeterOriginal, _super);
    function DBMeterOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DBMeterOriginal.prototype.start = function () { return cordova(this, "start", { "observable": true, "clearFunction": "stop" }, arguments); };
    DBMeterOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    DBMeterOriginal.prototype.isListening = function () { return cordova(this, "isListening", {}, arguments); };
    DBMeterOriginal.prototype.delete = function () { return cordova(this, "delete", {}, arguments); };
    DBMeterOriginal.pluginName = "DBMeter";
    DBMeterOriginal.plugin = "cordova-plugin-dbmeter";
    DBMeterOriginal.pluginRef = "DBMeter";
    DBMeterOriginal.repo = "https://github.com/akofman/cordova-plugin-dbmeter";
    DBMeterOriginal.platforms = ["Android", "iOS"];
    return DBMeterOriginal;
}(IonicNativePlugin));
var DBMeter = new DBMeterOriginal();
export { DBMeter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RiLW1ldGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBMENMLDJCQUFpQjs7OztJQVM1Qyx1QkFBSztJQVNMLHNCQUFJO0lBU0osNkJBQVc7SUFTWCx3QkFBTTs7Ozs7O2tCQWhGUjtFQTRDNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBEQiBNZXRlclxuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGRlZmluZXMgYSBnbG9iYWwgREJNZXRlciBvYmplY3QsIHdoaWNoIHBlcm1pdHMgdG8gZ2V0IHRoZSBkZWNpYmVsIHZhbHVlcyBmcm9tIHRoZSBtaWNyb3Bob25lLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEQk1ldGVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kYi1tZXRlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZGJNZXRlcjogREJNZXRlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIC8vIFN0YXJ0IGxpc3RlbmluZ1xuICogbGV0IHN1YnNjcmlwdGlvbiA9IHRoaXMuZGJNZXRlci5zdGFydCgpLnN1YnNjcmliZShcbiAqICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKVxuICogKTtcbiAqXG4gKiAvLyBDaGVjayBpZiB3ZSBhcmUgbGlzdGVuaW5nXG4gKiB0aGlzLmRiTWV0ZXIuaXNMaXN0ZW5pbmcoKS50aGVuKFxuICogICBpc0xpc3RlbmluZyA9PiBjb25zb2xlLmxvZyhpc0xpc3RlbmluZylcbiAqICk7XG4gKlxuICogLy8gU3RvcCBsaXN0ZW5pbmdcbiAqIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICpcbiAqIC8vIERlbGV0ZSBEQk1ldGVyIGluc3RhbmNlIGZyb20gbWVtb3J5XG4gKiB0aGlzLmRiTWV0ZXIuZGVsZXRlKCkudGhlbihcbiAqICAgKCkgPT4gY29uc29sZS5sb2coJ0RlbGV0ZWQgREIgTWV0ZXIgaW5zdGFuY2UnKSxcbiAqICAgZXJyb3IgPT4gY29uc29sZS5sb2coJ0Vycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIERCIE1ldGVyIGluc3RhbmNlJylcbiAqICk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdEQk1ldGVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZGJtZXRlcicsXG4gIHBsdWdpblJlZjogJ0RCTWV0ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Frb2ZtYW4vY29yZG92YS1wbHVnaW4tZGJtZXRlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEQk1ldGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU3RhcnRzIGxpc3RlbmluZ1xuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUuIFN1YnNjcmliZSB0byBzdGFydCBsaXN0ZW5pbmcuIFVuc3Vic2NyaWJlIHRvIHN0b3AgbGlzdGVuaW5nLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3N0b3AnLFxuICB9KVxuICBzdGFydCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBsaXN0ZW5pbmdcbiAgICogQGhpZGRlblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBEQiBNZXRlciBpcyBsaXN0ZW5pbmdcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCB0ZWxscyB1cyB3aGV0aGVyIHRoZSBEQiBtZXRlciBpcyBsaXN0ZW5pbmdcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNMaXN0ZW5pbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgREIgTWV0ZXIgaW5zdGFuY2VcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgaWYgdGhlIGluc3RhbmNlIGhhcyBiZWVuIGRlbGV0ZWQsIGFuZCByZWplY3RzIGlmIGVycm9ycyBvY2N1ci5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=