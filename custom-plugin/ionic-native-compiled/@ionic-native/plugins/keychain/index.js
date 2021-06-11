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
var KeychainOriginal = /** @class */ (function (_super) {
    __extends(KeychainOriginal, _super);
    function KeychainOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeychainOriginal.prototype.get = function (key, touchIDMessage) { return cordova(this, "get", { "callbackOrder": "reverse" }, arguments); };
    KeychainOriginal.prototype.set = function (key, value, useTouchID) { return cordova(this, "set", { "callbackOrder": "reverse" }, arguments); };
    KeychainOriginal.prototype.getJson = function (key, touchIDMessage) { return cordova(this, "getJson", { "callbackOrder": "reverse" }, arguments); };
    KeychainOriginal.prototype.setJson = function (key, obj, useTouchId) { return cordova(this, "setJson", { "callbackOrder": "reverse" }, arguments); };
    KeychainOriginal.prototype.remove = function (key) { return cordova(this, "remove", { "callbackOrder": "reverse" }, arguments); };
    KeychainOriginal.pluginName = "Keychain";
    KeychainOriginal.plugin = "cordova-plugin-ios-keychain";
    KeychainOriginal.pluginRef = "window.Keychain";
    KeychainOriginal.repo = "https://github.com/ionic-team/cordova-plugin-ios-keychain";
    KeychainOriginal.platforms = ["iOS"];
    return KeychainOriginal;
}(IonicNativePlugin));
var Keychain = new KeychainOriginal();
export { Keychain };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2tleWNoYWluL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW1DMUMsNEJBQWlCOzs7O0lBVTdDLHNCQUFHLGFBQUMsR0FBVyxFQUFFLGNBQXVCO0lBY3hDLHNCQUFHLGFBQUMsR0FBVyxFQUFFLEtBQWdDLEVBQUUsVUFBb0I7SUFhdkUsMEJBQU8sYUFBQyxHQUFXLEVBQUUsY0FBdUI7SUFjNUMsMEJBQU8sYUFBQyxHQUFXLEVBQUUsR0FBUSxFQUFFLFVBQW9CO0lBWW5ELHlCQUFNLGFBQUMsR0FBVzs7Ozs7O21CQW5HcEI7RUFvQzhCLGlCQUFpQjtTQUFsQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgS2V5Y2hhaW5cbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IGFuZCBzZXQgZGF0YSBpbiB0aGUgaU9TIEtleWNoYWluXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1pb3Mta2V5Y2hhaW5gLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbS2V5Y2hhaW4gcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2NvcmRvdmEtcGx1Z2luLWlvcy1rZXljaGFpbikuXG4gKlxuICogU2VlIGFsc28gW1NlY3VyZSBTdG9yYWdlXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL25hdGl2ZS9zZWN1cmUtc3RvcmFnZS8pIGZvciBtb3JlIHN1cHBvcnRlZCBwbGF0Zm9ybXMuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBLZXljaGFpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUva2V5Y2hhaW4vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGtleWNoYWluOiBLZXljaGFpbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5rZXljaGFpbi5zZXQoa2V5LCB2YWx1ZSkudGhlbigoKSA9PiB7XG4gKiAgIHRoaXMua2V5Y2hhaW4uZ2V0KGtleSlcbiAqICAgICAudGhlbih2YWx1ZSA9PiBjb25zb2xlLmxvZygnR290IHZhbHVlJywgdmFsdWUpKVxuICogICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3IgZ2V0dGluZycsIGVycikpO1xuICogfSlcbiAqIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3Igc2V0dGluZycsIGVycikpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnS2V5Y2hhaW4nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1pb3Mta2V5Y2hhaW4nLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuS2V5Y2hhaW4nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vY29yZG92YS1wbHVnaW4taW9zLWtleWNoYWluJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBLZXljaGFpbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhIHZhbHVlIGZvciBhIGtleVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSBrZXkgdG8gcmV0cmlldmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0b3VjaElETWVzc2FnZV0gdGhlIG1lc3NhZ2UgdG8gc2hvdyB1bmRlcm5lYXRoIHRoZSBUb3VjaElEIHByb21wdCAoaWYgYW55KVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgZ2V0KGtleTogc3RyaW5nLCB0b3VjaElETWVzc2FnZT86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSB2YWx1ZSBmb3IgYSBrZXlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSB0aGUga2V5IHRvIHNldFxuICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8Ym9vbGVhbn0gdmFsdWUgdGhlIHZhbHVlIHRvIHNldFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt1c2VUb3VjaElEXSB3aGV0aGVyIHRvIHN0b3JlIHRoZSB2YWx1ZSB3aXRoIHNlY3VyaXR5IHN1Y2ggdGhhdCBUb3VjaElEIHdpbGwgYmUgbmVlZGVkIHRvIGdyYWIgaXRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4sIHVzZVRvdWNoSUQ/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIEpTT04gdmFsdWUgZm9yIGEga2V5XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdGhlIGtleSB0byByZXRyaWV2ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG91Y2hJRE1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gc2hvdyB1bmRlcm5lYXRoIHRoZSBUb3VjaElEIHByb21wdCAoaWYgYW55KVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgZ2V0SnNvbihrZXk6IHN0cmluZywgdG91Y2hJRE1lc3NhZ2U/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgSlNPTiB2YWx1ZSBmb3IgYSBrZXlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSB0aGUga2V5IHRvIHNldFxuICAgKiBAcGFyYW0ge2FueX0gb2JqIHZhbHVlIHRoZSB2YWx1ZSB0byBzZXRcbiAgICogQHBhcmFtIHtib29sZWFufSBbdXNlVG91Y2hJZF0gV2V0aGVyIHRvIHN0b3JlIHRoZSB2YWx1ZSB3aXRoIHNlY3VyaXR5IHN1Y2ggdGhhdCBUb3VjaElEIHdpbGwgYmUgbmVlZGVkIHRvIGdyYWIgaXRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIHNldEpzb24oa2V5OiBzdHJpbmcsIG9iajogYW55LCB1c2VUb3VjaElkPzogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSB2YWx1ZSBmb3IgYSBrZXlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSB0aGUga2V5IHRvIHJlbW92ZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgcmVtb3ZlKGtleTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==