import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Globalization = /** @class */ (function (_super) {
    __extends(Globalization, _super);
    function Globalization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Globalization.prototype.getPreferredLanguage = function () { return cordova(this, "getPreferredLanguage", {}, arguments); };
    Globalization.prototype.getLocaleName = function () { return cordova(this, "getLocaleName", {}, arguments); };
    Globalization.prototype.dateToString = function (date, options) { return cordova(this, "dateToString", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Globalization.prototype.stringToDate = function (dateString, options) { return cordova(this, "stringToDate", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Globalization.prototype.getDatePattern = function (options) { return cordova(this, "getDatePattern", { "callbackOrder": "reverse" }, arguments); };
    Globalization.prototype.getDateNames = function (options) { return cordova(this, "getDateNames", { "callbackOrder": "reverse" }, arguments); };
    Globalization.prototype.isDayLightSavingsTime = function (date) { return cordova(this, "isDayLightSavingsTime", {}, arguments); };
    Globalization.prototype.getFirstDayOfWeek = function () { return cordova(this, "getFirstDayOfWeek", {}, arguments); };
    Globalization.prototype.numberToString = function (numberToConvert, options) { return cordova(this, "numberToString", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Globalization.prototype.stringToNumber = function (stringToConvert, options) { return cordova(this, "stringToNumber", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Globalization.prototype.getNumberPattern = function (options) { return cordova(this, "getNumberPattern", { "callbackOrder": "reverse" }, arguments); };
    Globalization.prototype.getCurrencyPattern = function (currencyCode) { return cordova(this, "getCurrencyPattern", {}, arguments); };
    Globalization.pluginName = "Globalization";
    Globalization.plugin = "cordova-plugin-globalization";
    Globalization.pluginRef = "navigator.globalization";
    Globalization.repo = "https://github.com/apache/cordova-plugin-globalization";
    Globalization.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    Globalization.decorators = [
        { type: Injectable }
    ];
    return Globalization;
}(IonicNativePlugin));
export { Globalization };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dsb2JhbGl6YXRpb24vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNENyQyxpQ0FBaUI7Ozs7SUFNbEQsNENBQW9CO0lBU3BCLHFDQUFhO0lBY2Isb0NBQVksYUFBQyxJQUFVLEVBQUUsT0FBNkI7SUFjdEQsb0NBQVksYUFDVixVQUFrQixFQUNsQixPQUE2QjtJQXFCL0Isc0NBQWMsYUFBQyxPQUE2QjtJQWtCNUMsb0NBQVksYUFBQyxPQUF1QztJQVVwRCw2Q0FBcUIsYUFBQyxJQUFVO0lBU2hDLHlDQUFpQjtJQWFqQixzQ0FBYyxhQUFDLGVBQXVCLEVBQUUsT0FBeUI7SUFjakUsc0NBQWMsYUFBQyxlQUF1QixFQUFFLE9BQXlCO0lBWWpFLHdDQUFnQixhQUFDLE9BQXlCO0lBbUIxQywwQ0FBa0IsYUFBQyxZQUFvQjs7Ozs7OztnQkFsS3hDLFVBQVU7O3dCQTVDWDtFQTZDbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBHbG9iYWxpemF0aW9uT3B0aW9ucyB7XG4gIGZvcm1hdExlbmd0aDogc3RyaW5nO1xuICBzZWxlY3Rvcjogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEdsb2JhbGl6YXRpb25cbiAqIEBwcmVtaWVyIGdsb2JhbGl6YXRpb25cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gb2J0YWlucyBpbmZvcm1hdGlvbiBhbmQgcGVyZm9ybXMgb3BlcmF0aW9ucyBzcGVjaWZpYyB0byB0aGUgdXNlcidzIGxvY2FsZSwgbGFuZ3VhZ2UsIGFuZCB0aW1lem9uZS5cbiAqXG4gKiBAZGVwcmVjYXRlZFxuICogV2l0aCB0aGUgW0VDTUEgSW50ZXJuYXRpb25hbGl6YXRpb24gQVBJXShodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtNDAyLzEuMC8pIG5vdyBzdXBwb3J0ZWQgb24gaU9TLCBBbmRyb2lkIGFuZCBXaW5kb3dzIGRldmljZXMsIHRoaXMgcGx1Z2luIGlzIG5vdCByZXF1aXJlZCBhbnkgbW9yZS5cbiAqIE1pZ3JhdGluZyBmcm9tIHRoaXMgcGx1Z2luIHRvIHRoZSBbRUNNQSBJbnRlcm5hdGlvbmFsaXphdGlvbiBBUEldKGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS00MDIvMS4wLykgaXMgZXhwbGFpbmVkIGluIHRoaXMgW0NvcmRvdmEgYmxvZyBwb3N0XShodHRwczovL2NvcmRvdmEuYXBhY2hlLm9yZy9uZXdzLzIwMTcvMTEvMjAvbWlncmF0ZS1mcm9tLWNvcmRvdmEtZ2xvYmFsaXphdGlvbi1wbHVnaW4uaHRtbCkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBHbG9iYWxpemF0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9nbG9iYWxpemF0aW9uL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBnbG9iYWxpemF0aW9uOiBHbG9iYWxpemF0aW9uKSB7IH1cbiAqXG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuZ2xvYmFsaXphdGlvbi5nZXRQcmVmZXJyZWRMYW5ndWFnZSgpXG4gKiAgIC50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gKlxuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEdsb2JhbGl6YXRpb25PcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR2xvYmFsaXphdGlvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdsb2JhbGl6YXRpb24nLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3IuZ2xvYmFsaXphdGlvbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWdsb2JhbGl6YXRpb24nLFxuICBwbGF0Zm9ybXM6IFsnQW1hem9uIEZpcmUgT1MnLCAnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdsb2JhbGl6YXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBCQ1AtNDcgY29tcGxpYW50IGxhbmd1YWdlIGlkZW50aWZpZXIgdGFnIHRvIHRoZSBzdWNjZXNzQ2FsbGJhY2sgd2l0aCBhIHByb3BlcnRpZXMgb2JqZWN0IGFzIGEgcGFyYW1ldGVyLiBUaGF0IG9iamVjdCBzaG91bGQgaGF2ZSBhIHZhbHVlIHByb3BlcnR5IHdpdGggYSBTdHJpbmcgdmFsdWUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHt2YWx1ZTogc3RyaW5nfT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFByZWZlcnJlZExhbmd1YWdlKCk6IFByb21pc2U8eyB2YWx1ZTogc3RyaW5nIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgQkNQIDQ3IGNvbXBsaWFudCBsb2NhbGUgaWRlbnRpZmllciBzdHJpbmcgdG8gdGhlIHN1Y2Nlc3NDYWxsYmFjayB3aXRoIGEgcHJvcGVydGllcyBvYmplY3QgYXMgYSBwYXJhbWV0ZXIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHt2YWx1ZTogc3RyaW5nfT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldExvY2FsZU5hbWUoKTogUHJvbWlzZTx7IHZhbHVlOiBzdHJpbmcgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBkYXRlIHRvIHN0cmluZ1xuICAgKiBAcGFyYW0ge0RhdGV9IGRhdGUgRGF0ZSB5b3Ugd2lzaCB0byBjb252ZXJ0XG4gICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgZm9yIHRoZSBjb252ZXJ0ZWQgZGF0ZS4gTGVuZ3RoLCBzZWxlY3Rvci5cbiAgICogQHJldHVybnMge1Byb21pc2U8e3ZhbHVlOiBzdHJpbmd9Pn0gUmV0dXJucyBhIHByb21pc2Ugd2hlbiB0aGUgZGF0ZSBoYXMgYmVlbiBjb252ZXJ0ZWQuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIGRhdGVUb1N0cmluZyhkYXRlOiBEYXRlLCBvcHRpb25zOiBHbG9iYWxpemF0aW9uT3B0aW9ucyk6IFByb21pc2U8eyB2YWx1ZTogc3RyaW5nIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIGEgZGF0ZSBmb3JtYXR0ZWQgYXMgYSBzdHJpbmcsIGFjY29yZGluZyB0byB0aGUgY2xpZW50J3MgdXNlciBwcmVmZXJlbmNlcyBhbmQgY2FsZW5kYXIgdXNpbmcgdGhlIHRpbWUgem9uZSBvZiB0aGUgY2xpZW50LCBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBkYXRlIG9iamVjdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGVTdHJpbmcgRGF0ZSBhcyBhIHN0cmluZyB0byBiZSBjb252ZXJ0ZWRcbiAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyBmb3IgdGhlIGNvbnZlcnRlZCBkYXRlLiBMZW5ndGgsIHNlbGVjdG9yLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF5OiBudW1iZXIsIGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIsIHNlY29uZDogbnVtYmVyLCBtaWxsaXNlY29uZDogbnVtYmVyIH0+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aGVuIHRoZSBkYXRlIGhhcyBiZWVuIGNvbnZlcnRlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgc3RyaW5nVG9EYXRlKFxuICAgIGRhdGVTdHJpbmc6IHN0cmluZyxcbiAgICBvcHRpb25zOiBHbG9iYWxpemF0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPHtcbiAgICB5ZWFyOiBudW1iZXI7XG4gICAgbW9udGg6IG51bWJlcjtcbiAgICBkYXk6IG51bWJlcjtcbiAgICBob3VyOiBudW1iZXI7XG4gICAgbWludXRlOiBudW1iZXI7XG4gICAgc2Vjb25kOiBudW1iZXI7XG4gICAgbWlsbGlzZWNvbmQ6IG51bWJlcjtcbiAgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcGF0dGVybiBzdHJpbmcgdG8gZm9ybWF0IGFuZCBwYXJzZSBkYXRlcyBhY2NvcmRpbmcgdG8gdGhlIGNsaWVudCdzIHVzZXIgcHJlZmVyZW5jZXMuXG4gICAqIEBwYXJhbSBvcHRpb25zIE9iamVjdCB3aXRoIHRoZSBmb3JtYXQgbGVuZ3RoIGFuZCBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHBhdHRlcm46IHN0cmluZywgdGltZXpvbmU6IHN0cmluZywgdXRjX29mZnNldDogbnVtYmVyLCBkc3Rfb2Zmc2V0OiBudW1iZXIgfT59IFJldHVybnMgYSBwcm9taXNlLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgZ2V0RGF0ZVBhdHRlcm4ob3B0aW9uczogR2xvYmFsaXphdGlvbk9wdGlvbnMpOiBQcm9taXNlPHtcbiAgICBwYXR0ZXJuOiBzdHJpbmc7XG4gICAgdGltZXpvbmU6IHN0cmluZztcbiAgICBpYW5hX3RpbWV6b25lOiBzdHJpbmc7XG4gICAgdXRjX29mZnNldDogbnVtYmVyO1xuICAgIGRzdF9vZmZzZXQ6IG51bWJlcjtcbiAgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBuYW1lcyBvZiB0aGUgbW9udGhzIG9yIGRheXMgb2YgdGhlIHdlZWssIGRlcGVuZGluZyBvbiB0aGUgY2xpZW50J3MgdXNlciBwcmVmZXJlbmNlcyBhbmQgY2FsZW5kYXIuXG4gICAqIEBwYXJhbSBvcHRpb25zIE9iamVjdCB3aXRoIHR5cGUgKG5hcnJvdyBvciB3aWRlKSBhbmQgaXRlbSAobW9udGggb3IgZGF5cykuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHt2YWx1ZTogc3RyaW5nW119Pn0gUmV0dXJucyBhIHByb21pc2UuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBnZXREYXRlTmFtZXMob3B0aW9uczogeyB0eXBlOiBzdHJpbmc7IGl0ZW06IHN0cmluZyB9KTogUHJvbWlzZTx7IHZhbHVlOiBzdHJpbmdbXSB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIGRheWxpZ2h0IHNhdmluZ3MgdGltZSBpcyBpbiBlZmZlY3QgZm9yIGEgZ2l2ZW4gZGF0ZSB1c2luZyB0aGUgY2xpZW50J3MgdGltZSB6b25lIGFuZCBjYWxlbmRhci5cbiAgICogQHBhcmFtIHtkYXRhfSBkYXRlIERhdGUgdG8gcHJvY2Vzc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7ZHN0OiBzdHJpbmd9Pn0gcmV1dHJucyBhIHByb21pc2Ugd2l0aCB0aGUgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNEYXlMaWdodFNhdmluZ3NUaW1lKGRhdGU6IERhdGUpOiBQcm9taXNlPHsgZHN0OiBzdHJpbmcgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgYWNjb3JkaW5nIHRvIHRoZSBjbGllbnQncyB1c2VyIHByZWZlcmVuY2VzIGFuZCBjYWxlbmRhci5cbiAgICogQHJldHVybnMge1Byb21pc2U8e3ZhbHVlOiBzdHJpbmd9Pn0gcmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Rmlyc3REYXlPZldlZWsoKTogUHJvbWlzZTx7IHZhbHVlOiBzdHJpbmcgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbnVtYmVyIGZvcm1hdHRlZCBhcyBhIHN0cmluZyBhY2NvcmRpbmcgdG8gdGhlIGNsaWVudCdzIHVzZXIgcHJlZmVyZW5jZXMuXG4gICAqIEBwYXJhbSBudW1iZXJUb0NvbnZlcnQge051bWJlcn0gVGhlIG51bWJlciB0byBjb252ZXJ0XG4gICAqIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IE9iamVjdCB3aXRoIHByb3BlcnR5IGB0eXBlYCB0aGF0IGNhbiBiZSBzZXQgdG86IGRlY2ltYWwsIHBlcmNlbnQsIG9yIGN1cnJlbmN5LlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyLFxuICB9KVxuICBudW1iZXJUb1N0cmluZyhudW1iZXJUb0NvbnZlcnQ6IG51bWJlciwgb3B0aW9uczogeyB0eXBlOiBzdHJpbmcgfSk6IFByb21pc2U8eyB2YWx1ZTogc3RyaW5nIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1RvQ29udmVydCBTdHJpbmcgeW91IHdhbnQgdG8gY29udmVyIHRvIGEgbnVtYmVyXG4gICAqIEBwYXJhbSBvcHRpb25zICBUaGUgdHlwZSBvZiBudW1iZXIgeW91IHdhbnQgdG8gcmV0dXJuLiBDYW4gYmUgZGVjaW1hbCwgcGVyY2VudCwgb3IgY3VycmVuY3kuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgdmFsdWU6IG51bWJlciB8IHN0cmluZyB9Pn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgdmFsdWUuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHN0cmluZ1RvTnVtYmVyKHN0cmluZ1RvQ29udmVydDogc3RyaW5nLCBvcHRpb25zOiB7IHR5cGU6IHN0cmluZyB9KTogUHJvbWlzZTx7IHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcGF0dGVybiBzdHJpbmcgdG8gZm9ybWF0IGFuZCBwYXJzZSBudW1iZXJzIGFjY29yZGluZyB0byB0aGUgY2xpZW50J3MgdXNlciBwcmVmZXJlbmNlcy5cbiAgICogQHBhcmFtIG9wdGlvbnMgQ2FuIGJlIGRlY2ltYWwsIHBlcmNlbnQsIG9yIGN1cnJlbmN5LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHBhdHRlcm46IHN0cmluZywgc3ltYm9sOiBzdHJpbmcsIGZyYWN0aW9uOiBudW1iZXIsIHJvdW5kaW5nOiBudW1iZXIsIHBvc2l0aXZlOiBzdHJpbmcsIG5lZ2F0aXZlOiBzdHJpbmcsIGRlY2ltYWw6IHN0cmluZywgZ3JvdXBpbmc6IHN0cmluZyB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGdldE51bWJlclBhdHRlcm4ob3B0aW9uczogeyB0eXBlOiBzdHJpbmcgfSk6IFByb21pc2U8e1xuICAgIHBhdHRlcm46IHN0cmluZztcbiAgICBzeW1ib2w6IHN0cmluZztcbiAgICBmcmFjdGlvbjogbnVtYmVyO1xuICAgIHJvdW5kaW5nOiBudW1iZXI7XG4gICAgcG9zaXRpdmU6IHN0cmluZztcbiAgICBuZWdhdGl2ZTogc3RyaW5nO1xuICAgIGRlY2ltYWw6IHN0cmluZztcbiAgICBncm91cGluZzogc3RyaW5nO1xuICB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBwYXR0ZXJuIHN0cmluZyB0byBmb3JtYXQgYW5kIHBhcnNlIGN1cnJlbmN5IHZhbHVlcyBhY2NvcmRpbmcgdG8gdGhlIGNsaWVudCdzIHVzZXIgcHJlZmVyZW5jZXMgYW5kIElTTyA0MjE3IGN1cnJlbmN5IGNvZGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW5jeUNvZGUgQ3VycmVuY3kgQ29kZS5BXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgcGF0dGVybjogc3RyaW5nLCBjb2RlOiBzdHJpbmcsIGZyYWN0aW9uOiBudW1iZXIsIHJvdW5kaW5nOiBudW1iZXIsIGRlY2ltYWw6IG51bWJlciwgZ3JvdXBpbmc6IHN0cmluZyB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q3VycmVuY3lQYXR0ZXJuKGN1cnJlbmN5Q29kZTogc3RyaW5nKTogUHJvbWlzZTx7XG4gICAgcGF0dGVybjogc3RyaW5nO1xuICAgIGNvZGU6IHN0cmluZztcbiAgICBmcmFjdGlvbjogbnVtYmVyO1xuICAgIHJvdW5kaW5nOiBudW1iZXI7XG4gICAgZGVjaW1hbDogbnVtYmVyO1xuICAgIGdyb3VwaW5nOiBzdHJpbmc7XG4gIH0+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==