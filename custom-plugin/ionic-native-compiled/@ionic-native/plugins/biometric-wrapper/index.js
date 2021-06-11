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
var BiometricWrapperOriginal = /** @class */ (function (_super) {
    __extends(BiometricWrapperOriginal, _super);
    function BiometricWrapperOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BiometricWrapperOriginal.prototype.activateIris = function (args) { return cordova(this, "activateIris", {}, arguments); };
    BiometricWrapperOriginal.prototype.activateFingerprint = function (args) { return cordova(this, "activateFingerprint", {}, arguments); };
    BiometricWrapperOriginal.pluginName = "BiometricWrapper";
    BiometricWrapperOriginal.plugin = "cordova-plugin-biometric";
    BiometricWrapperOriginal.pluginRef = "cordova.plugins.BiometricWrapper";
    BiometricWrapperOriginal.repo = "";
    BiometricWrapperOriginal.install = "";
    BiometricWrapperOriginal.installVariables = [];
    BiometricWrapperOriginal.platforms = ["Android"];
    return BiometricWrapperOriginal;
}(IonicNativePlugin));
var BiometricWrapper = new BiometricWrapperOriginal();
export { BiometricWrapper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jpb21ldHJpYy13cmFwcGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW1DbEMsb0NBQWlCOzs7O0lBTXJELHVDQUFZLGFBQUMsSUFBUztJQVN0Qiw4Q0FBbUIsYUFBQyxJQUFTOzs7Ozs7OzsyQkFuRC9CO0VBb0NzQyxpQkFBaUI7U0FBMUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQmlvbWV0cmljV3JhcHBlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBjYXB0dXJlIGJpb21ldHJpYyhJcmlzIGFuZCBGaW5nZXJwcmludCkgYW5kIHZhbGlkYXRlIHRoZSB1c2VyLlxuICogTWF5IGJlIHVzZWQgaW4gQmFua2luZyBkb21haW5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJpb21ldHJpY1dyYXBwZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2Jpb21ldHJpYy13cmFwcGVyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmlvbWV0cmljV3JhcHBlcjogQmlvbWV0cmljV3JhcHBlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYmlvbWV0cmljV3JhcHBlci5hY3RpdmF0ZUlyaXMoeydQSURfWE1MJzogJzxwaWQteG1sLz4nfSlcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiApXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gKTtcbiAqXG4gKiBgYGBcbiAqL1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Jpb21ldHJpY1dyYXBwZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1iaW9tZXRyaWMnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuQmlvbWV0cmljV3JhcHBlcicsXG4gIHJlcG86ICcnLFxuICBpbnN0YWxsOiAnJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJpb21ldHJpY1dyYXBwZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGFjdGl2YXRlIGlyaXMgYWN0aXZpdHlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gaXJpcyBkYXRhIGNhcHR1cmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFjdGl2YXRlSXJpcyhhcmdzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGFjdGl2YXRlIGZpbmdlcnByaW50IGFjdGl2aXR5XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIEZQIGRhdGEgY2FwdHVyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYWN0aXZhdGVGaW5nZXJwcmludChhcmdzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19