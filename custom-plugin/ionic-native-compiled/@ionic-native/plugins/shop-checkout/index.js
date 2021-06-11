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
var ShopCheckoutOriginal = /** @class */ (function (_super) {
    __extends(ShopCheckoutOriginal, _super);
    function ShopCheckoutOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShopCheckoutOriginal.prototype.registerAgent = function (options) { return cordova(this, "registerAgent", {}, arguments); };
    ShopCheckoutOriginal.prototype.openProducts = function (options) { return cordova(this, "openProducts", {}, arguments); };
    ShopCheckoutOriginal.prototype.openTransactions = function (options) { return cordova(this, "openTransactions", {}, arguments); };
    ShopCheckoutOriginal.prototype.logout = function (options) { return cordova(this, "logout", {}, arguments); };
    ShopCheckoutOriginal.prototype.isInitialized = function () { return cordova(this, "isInitialized", {}, arguments); };
    ShopCheckoutOriginal.pluginName = "ShopCheckout";
    ShopCheckoutOriginal.plugin = "cordova-plugin-shop-checkout";
    ShopCheckoutOriginal.pluginRef = "shopCheckout";
    ShopCheckoutOriginal.repo = "https://github.com/tradedepot/cordova-shop-checkout";
    ShopCheckoutOriginal.platforms = ["Android"];
    return ShopCheckoutOriginal;
}(IonicNativePlugin));
var ShopCheckout = new ShopCheckoutOriginal();
export { ShopCheckout };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Nob3AtY2hlY2tvdXQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBK0J0QyxnQ0FBaUI7Ozs7SUFPakQsb0NBQWEsYUFBQyxPQUFZO0lBVTFCLG1DQUFZLGFBQUMsT0FBWTtJQVV6Qix1Q0FBZ0IsYUFBQyxPQUFZO0lBUTdCLDZCQUFNLGFBQUMsT0FBWTtJQVFuQixvQ0FBYTs7Ozs7O3VCQTNFZjtFQWdDa0MsaUJBQWlCO1NBQXRDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBTaG9wQ2hlY2tvdXRcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBpcyBhIHBsdWdpbiB0aGF0IGFsbG93cyB5b3VyIElvbmljIGFwcCB0byB1c2UgU2hvcENoZWNvdXQgZm9yIEFuZHJvaWQuXG4gKiBGb2xsb3cgdGhlIG9mZmljYWwgZG9jdW1lbnRhdGlvbiB0byBzZXR1cCB0aGlzIHBsdWdpbiBjb3JyZWN0bHk6IGh0dHBzOi8vZGV2ZWxvcGVyLnNob3B0b3B1cC5jb20vZG9jcy9zaG9wdG9wdXAtZm9yLWNvcmRvdmFwaG9uZWdhcFxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU2hvcENoZWNrb3V0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zaG9wLWNoZWNrb3V0L25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2hvcENoZWNrb3V0OiBTaG9wQ2hlY2tvdXQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuc2hvcENoZWNrb3V0LnJlZ2lzdGVyQWdlbnQoKTtcbiAqIC4uLlxuICogdGhpcy5zaG9wQ2hlY2tvdXQub3BlblByb2R1Y3RzKCk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU2hvcENoZWNrb3V0JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc2hvcC1jaGVja291dCcsXG4gIHBsdWdpblJlZjogJ3Nob3BDaGVja291dCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdHJhZGVkZXBvdC9jb3Jkb3ZhLXNob3AtY2hlY2tvdXQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaG9wQ2hlY2tvdXQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBSZWdpc3RlciBhbiBhZ2VudFxuICAgKiBAcGFyYW0gb3B0aW9ucyB7YW55fSBPcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlZ2lzdGVyQWdlbnQob3B0aW9uczogYW55KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gcHJvZHVjdHMgdmlld1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7YW55fSBPcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9wZW5Qcm9kdWN0cyhvcHRpb25zOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT3BlbiB0cmFubnNhY3Rpb25zIHZpZXdcbiAgICogQHBhcmFtIG9wdGlvbnMge2FueX0gT3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcGVuVHJhbnNhY3Rpb25zKG9wdGlvbnM6IGFueSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dvdXQob3B0aW9uczogYW55KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzSW5pdGlhbGl6ZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=