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
var GoogleNearbyOriginal = /** @class */ (function (_super) {
    __extends(GoogleNearbyOriginal, _super);
    function GoogleNearbyOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleNearbyOriginal.prototype.publish = function (message) { return cordova(this, "publish", {}, arguments); };
    GoogleNearbyOriginal.prototype.subscribe = function () { return cordova(this, "subscribe", { "observable": true, "clearFunction": "unsubscribe" }, arguments); };
    GoogleNearbyOriginal.pluginName = "GoogleNearby";
    GoogleNearbyOriginal.plugin = "cordova-plugin-google-nearby";
    GoogleNearbyOriginal.pluginRef = "window.nearby";
    GoogleNearbyOriginal.repo = "https://github.com/hahahannes/cordova-plugin-google-nearby";
    GoogleNearbyOriginal.install = "ionic cordova plugin add cordova-plugin-google-nearby --variable API_KEY=\"123456789\"";
    GoogleNearbyOriginal.installVariables = ["API_KEY"];
    GoogleNearbyOriginal.platforms = ["Android"];
    return GoogleNearbyOriginal;
}(IonicNativePlugin));
var GoogleNearby = new GoogleNearbyOriginal();
export { GoogleNearby };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dvb2dsZS1uZWFyYnkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFpQ0EsZ0NBQWlCOzs7O0lBT2pELDhCQUFPLGFBQUMsT0FBZTtJQVl2QixnQ0FBUzs7Ozs7Ozs7dUJBdERYO0VBbUNrQyxpQkFBaUI7U0FBdEMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBuYW1lIEdvb2dsZSBOZWFyYnlcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWRkcyBzdXBwb3J0IGZvciB0aGUgR29vZ2xlIE5lYXJieSBNZXNzYWdlcyBBUEkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBHb29nbGVOZWFyYnkgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2dvb2dsZS1uZWFyYnkvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBnb29nbGVOZWFyYnk6IEdvb2dsZU5lYXJieSkgeyB9XG4gKlxuICogdGhpcy5nb29nbGVOZWFyYnkucHVibGlzaCgnSGVsbG8nKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIHRoaXMuZ29vZ2xlTmVhcmJ5LnN1YnNjcmliZSgpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHb29nbGVOZWFyYnknLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGUtbmVhcmJ5JyxcbiAgcGx1Z2luUmVmOiAnd2luZG93Lm5lYXJieScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaGFoYWhhbm5lcy9jb3Jkb3ZhLXBsdWdpbi1nb29nbGUtbmVhcmJ5JyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1nb29nbGUtbmVhcmJ5IC0tdmFyaWFibGUgQVBJX0tFWT1cIjEyMzQ1Njc4OVwiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBUElfS0VZJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdvb2dsZU5lYXJieSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFB1Ymxpc2ggYSBtZXNzYWdlXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IE1lc3NhZ2UgdG8gcHVibGlzaFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgbWVzc2FnZSBnb3QgcHVibGlzaGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHB1Ymxpc2gobWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIHJlY2VpdmUgbWVzc2FnZXNcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCBlbWl0cyByZWNlaXZlZCBtZXNzYWdlc1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3Vuc3Vic2NyaWJlJyxcbiAgfSlcbiAgc3Vic2NyaWJlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=