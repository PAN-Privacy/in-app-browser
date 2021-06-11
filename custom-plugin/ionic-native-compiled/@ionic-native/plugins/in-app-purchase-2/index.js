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
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var IAPError = /** @class */ (function () {
    function IAPError() {
    }
    return IAPError;
}());
export { IAPError };
var InAppPurchase2Original = /** @class */ (function (_super) {
    __extends(InAppPurchase2Original, _super);
    function InAppPurchase2Original() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppPurchase2Original.prototype.getApplicationUsername = function () { return cordova(this, "getApplicationUsername", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.get = function (idOrAlias) { return cordova(this, "get", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.error = function (onError) { return cordova(this, "error", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.register = function (product) { return cordova(this, "register", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.when = function (query, event, callback) { return cordova(this, "when", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.once = function (query, event, callback) { return cordova(this, "once", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.off = function (callback) { return cordova(this, "off", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.order = function (product, additionalData) { return cordova(this, "order", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.ready = function (callback) { return cordova(this, "ready", {}, arguments); };
    InAppPurchase2Original.prototype.refresh = function () { return cordova(this, "refresh", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.update = function () { return cordova(this, "update", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.manageSubscriptions = function () { return cordova(this, "manageSubscriptions", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.redeem = function () { return cordova(this, "redeem", { "sync": true }, arguments); };
    Object.defineProperty(InAppPurchase2Original.prototype, "QUIET", {
        get: function () { return cordovaPropertyGet(this, "QUIET"); },
        set: function (value) { cordovaPropertySet(this, "QUIET", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERROR", {
        get: function () { return cordovaPropertyGet(this, "ERROR"); },
        set: function (value) { cordovaPropertySet(this, "ERROR", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "WARNING", {
        get: function () { return cordovaPropertyGet(this, "WARNING"); },
        set: function (value) { cordovaPropertySet(this, "WARNING", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "INFO", {
        get: function () { return cordovaPropertyGet(this, "INFO"); },
        set: function (value) { cordovaPropertySet(this, "INFO", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "DEBUG", {
        get: function () { return cordovaPropertyGet(this, "DEBUG"); },
        set: function (value) { cordovaPropertySet(this, "DEBUG", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "verbosity", {
        get: function () { return cordovaPropertyGet(this, "verbosity"); },
        set: function (value) { cordovaPropertySet(this, "verbosity", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "autoFinishTransactions", {
        get: function () { return cordovaPropertyGet(this, "autoFinishTransactions"); },
        set: function (value) { cordovaPropertySet(this, "autoFinishTransactions", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "sandbox", {
        get: function () { return cordovaPropertyGet(this, "sandbox"); },
        set: function (value) { cordovaPropertySet(this, "sandbox", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "disableHostedContent", {
        get: function () { return cordovaPropertyGet(this, "disableHostedContent"); },
        set: function (value) { cordovaPropertySet(this, "disableHostedContent", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "FREE_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "FREE_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "FREE_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "PAID_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "PAID_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "PAID_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "NON_RENEWING_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "NON_RENEWING_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "NON_RENEWING_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "CONSUMABLE", {
        get: function () { return cordovaPropertyGet(this, "CONSUMABLE"); },
        set: function (value) { cordovaPropertySet(this, "CONSUMABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "NON_CONSUMABLE", {
        get: function () { return cordovaPropertyGet(this, "NON_CONSUMABLE"); },
        set: function (value) { cordovaPropertySet(this, "NON_CONSUMABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_SETUP", {
        get: function () { return cordovaPropertyGet(this, "ERR_SETUP"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SETUP", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_LOAD", {
        get: function () { return cordovaPropertyGet(this, "ERR_LOAD"); },
        set: function (value) { cordovaPropertySet(this, "ERR_LOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_PURCHASE", {
        get: function () { return cordovaPropertyGet(this, "ERR_PURCHASE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PURCHASE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_LOAD_RECEIPTS", {
        get: function () { return cordovaPropertyGet(this, "ERR_LOAD_RECEIPTS"); },
        set: function (value) { cordovaPropertySet(this, "ERR_LOAD_RECEIPTS", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_CLIENT_INVALID", {
        get: function () { return cordovaPropertyGet(this, "ERR_CLIENT_INVALID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_CLIENT_INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_PAYMENT_CANCELLED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_CANCELLED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_CANCELLED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_PAYMENT_INVALID", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_INVALID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_PAYMENT_NOT_ALLOWED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_NOT_ALLOWED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_NOT_ALLOWED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_UNKNOWN", {
        get: function () { return cordovaPropertyGet(this, "ERR_UNKNOWN"); },
        set: function (value) { cordovaPropertySet(this, "ERR_UNKNOWN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_REFRESH_RECEIPTS", {
        get: function () { return cordovaPropertyGet(this, "ERR_REFRESH_RECEIPTS"); },
        set: function (value) { cordovaPropertySet(this, "ERR_REFRESH_RECEIPTS", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_INVALID_PRODUCT_ID", {
        get: function () { return cordovaPropertyGet(this, "ERR_INVALID_PRODUCT_ID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_INVALID_PRODUCT_ID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_FINISH", {
        get: function () { return cordovaPropertyGet(this, "ERR_FINISH"); },
        set: function (value) { cordovaPropertySet(this, "ERR_FINISH", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_COMMUNICATION", {
        get: function () { return cordovaPropertyGet(this, "ERR_COMMUNICATION"); },
        set: function (value) { cordovaPropertySet(this, "ERR_COMMUNICATION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", {
        get: function () { return cordovaPropertyGet(this, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_MISSING_TOKEN", {
        get: function () { return cordovaPropertyGet(this, "ERR_MISSING_TOKEN"); },
        set: function (value) { cordovaPropertySet(this, "ERR_MISSING_TOKEN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_VERIFICATION_FAILED", {
        get: function () { return cordovaPropertyGet(this, "ERR_VERIFICATION_FAILED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_VERIFICATION_FAILED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_BAD_RESPONSE", {
        get: function () { return cordovaPropertyGet(this, "ERR_BAD_RESPONSE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_BAD_RESPONSE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_REFRESH", {
        get: function () { return cordovaPropertyGet(this, "ERR_REFRESH"); },
        set: function (value) { cordovaPropertySet(this, "ERR_REFRESH", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_PAYMENT_EXPIRED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_EXPIRED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_EXPIRED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_DOWNLOAD", {
        get: function () { return cordovaPropertyGet(this, "ERR_DOWNLOAD"); },
        set: function (value) { cordovaPropertySet(this, "ERR_DOWNLOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", {
        get: function () { return cordovaPropertyGet(this, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "REGISTERED", {
        get: function () { return cordovaPropertyGet(this, "REGISTERED"); },
        set: function (value) { cordovaPropertySet(this, "REGISTERED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "INVALID", {
        get: function () { return cordovaPropertyGet(this, "INVALID"); },
        set: function (value) { cordovaPropertySet(this, "INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "VALID", {
        get: function () { return cordovaPropertyGet(this, "VALID"); },
        set: function (value) { cordovaPropertySet(this, "VALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "REQUESTED", {
        get: function () { return cordovaPropertyGet(this, "REQUESTED"); },
        set: function (value) { cordovaPropertySet(this, "REQUESTED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "INITIATED", {
        get: function () { return cordovaPropertyGet(this, "INITIATED"); },
        set: function (value) { cordovaPropertySet(this, "INITIATED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "APPROVED", {
        get: function () { return cordovaPropertyGet(this, "APPROVED"); },
        set: function (value) { cordovaPropertySet(this, "APPROVED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "FINISHED", {
        get: function () { return cordovaPropertyGet(this, "FINISHED"); },
        set: function (value) { cordovaPropertySet(this, "FINISHED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "OWNED", {
        get: function () { return cordovaPropertyGet(this, "OWNED"); },
        set: function (value) { cordovaPropertySet(this, "OWNED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "DOWNLOADING", {
        get: function () { return cordovaPropertyGet(this, "DOWNLOADING"); },
        set: function (value) { cordovaPropertySet(this, "DOWNLOADING", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "DOWNLOADED", {
        get: function () { return cordovaPropertyGet(this, "DOWNLOADED"); },
        set: function (value) { cordovaPropertySet(this, "DOWNLOADED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "INVALID_PAYLOAD", {
        get: function () { return cordovaPropertyGet(this, "INVALID_PAYLOAD"); },
        set: function (value) { cordovaPropertySet(this, "INVALID_PAYLOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "CONNECTION_FAILED", {
        get: function () { return cordovaPropertyGet(this, "CONNECTION_FAILED"); },
        set: function (value) { cordovaPropertySet(this, "CONNECTION_FAILED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "PURCHASE_EXPIRED", {
        get: function () { return cordovaPropertyGet(this, "PURCHASE_EXPIRED"); },
        set: function (value) { cordovaPropertySet(this, "PURCHASE_EXPIRED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "PURCHASE_CONSUMED", {
        get: function () { return cordovaPropertyGet(this, "PURCHASE_CONSUMED"); },
        set: function (value) { cordovaPropertySet(this, "PURCHASE_CONSUMED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "INTERNAL_ERROR", {
        get: function () { return cordovaPropertyGet(this, "INTERNAL_ERROR"); },
        set: function (value) { cordovaPropertySet(this, "INTERNAL_ERROR", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "NEED_MORE_DATA", {
        get: function () { return cordovaPropertyGet(this, "NEED_MORE_DATA"); },
        set: function (value) { cordovaPropertySet(this, "NEED_MORE_DATA", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "products", {
        get: function () { return cordovaPropertyGet(this, "products"); },
        set: function (value) { cordovaPropertySet(this, "products", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "validator", {
        get: function () { return cordovaPropertyGet(this, "validator"); },
        set: function (value) { cordovaPropertySet(this, "validator", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "applicationUsername", {
        get: function () { return cordovaPropertyGet(this, "applicationUsername"); },
        set: function (value) { cordovaPropertySet(this, "applicationUsername", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "log", {
        get: function () { return cordovaPropertyGet(this, "log"); },
        set: function (value) { cordovaPropertySet(this, "log", value); },
        enumerable: false,
        configurable: true
    });
    InAppPurchase2Original.pluginName = "InAppPurchase2";
    InAppPurchase2Original.plugin = "cordova-plugin-purchase";
    InAppPurchase2Original.pluginRef = "store";
    InAppPurchase2Original.repo = "https://github.com/j3k0/cordova-plugin-purchase";
    InAppPurchase2Original.platforms = ["iOS", "Android", "Windows"];
    InAppPurchase2Original.install = "ionic cordova plugin add cordova-plugin-purchase --variable BILLING_KEY=\"<ANDROID_BILLING_KEY>\"";
    return InAppPurchase2Original;
}(IonicNativePlugin));
var InAppPurchase2 = new InAppPurchase2Original();
export { InAppPurchase2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luLWFwcC1wdXJjaGFzZS0yL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLHNFQUF1RCxNQUFNLG9CQUFvQixDQUFDOzs7O21CQUF6Rjs7OztJQTZqQm9DLGtDQUFpQjs7OztJQW9MbkQsK0NBQXNCO0lBaUJ0Qiw0QkFBRyxhQUFDLFNBQWlCO0lBU3JCLDhCQUFLLGFBQUMsT0FBaUI7SUFPdkIsaUNBQVEsYUFBQyxPQUFnRDtJQVV6RCw2QkFBSSxhQUFDLEtBQTBCLEVBQUUsS0FBYyxFQUFFLFFBQTJCO0lBWTVFLDZCQUFJLGFBQUMsS0FBMEIsRUFBRSxLQUFjLEVBQUUsUUFBMkI7SUFTNUUsNEJBQUcsYUFBQyxRQUFrQjtJQTBCdEIsOEJBQUssYUFBQyxPQUE0QixFQUFFLGNBQW9CO0lBS3hELDhCQUFLLGFBQUMsUUFBa0I7SUEwQ3hCLGdDQUFPO0lBTVAsK0JBQU07SUFJTiw0Q0FBbUI7SUFJbkIsK0JBQU07MEJBelVOLGlDQUFLOzs7Ozs7MEJBR0wsaUNBQUs7Ozs7OzswQkFHTCxtQ0FBTzs7Ozs7OzBCQUdQLGdDQUFJOzs7Ozs7MEJBR0osaUNBQUs7Ozs7OzswQkFNTCxxQ0FBUzs7Ozs7OzBCQU9ULGtEQUFzQjs7Ozs7OzBCQU10QixtQ0FBTzs7Ozs7OzBCQU9QLGdEQUFvQjs7Ozs7OzBCQUdwQiw2Q0FBaUI7Ozs7OzswQkFHakIsNkNBQWlCOzs7Ozs7MEJBR2pCLHFEQUF5Qjs7Ozs7OzBCQUd6QixzQ0FBVTs7Ozs7OzBCQUdWLDBDQUFjOzs7Ozs7MEJBR2QscUNBQVM7Ozs7OzswQkFHVCxvQ0FBUTs7Ozs7OzBCQUdSLHdDQUFZOzs7Ozs7MEJBR1osNkNBQWlCOzs7Ozs7MEJBR2pCLDhDQUFrQjs7Ozs7OzBCQUdsQixpREFBcUI7Ozs7OzswQkFHckIsK0NBQW1COzs7Ozs7MEJBR25CLG1EQUF1Qjs7Ozs7OzBCQUd2Qix1Q0FBVzs7Ozs7OzBCQUdYLGdEQUFvQjs7Ozs7OzBCQUdwQixrREFBc0I7Ozs7OzswQkFHdEIsc0NBQVU7Ozs7OzswQkFHViw2Q0FBaUI7Ozs7OzswQkFHakIsMkRBQStCOzs7Ozs7MEJBRy9CLDZDQUFpQjs7Ozs7OzBCQUdqQixtREFBdUI7Ozs7OzswQkFHdkIsNENBQWdCOzs7Ozs7MEJBR2hCLHVDQUFXOzs7Ozs7MEJBR1gsK0NBQW1COzs7Ozs7MEJBR25CLHdDQUFZOzs7Ozs7MEJBR1osaUVBQXFDOzs7Ozs7MEJBR3JDLHNDQUFVOzs7Ozs7MEJBR1YsbUNBQU87Ozs7OzswQkFHUCxpQ0FBSzs7Ozs7OzBCQUdMLHFDQUFTOzs7Ozs7MEJBR1QscUNBQVM7Ozs7OzswQkFHVCxvQ0FBUTs7Ozs7OzBCQUdSLG9DQUFROzs7Ozs7MEJBR1IsaUNBQUs7Ozs7OzswQkFHTCx1Q0FBVzs7Ozs7OzBCQUdYLHNDQUFVOzs7Ozs7MEJBS1YsMkNBQWU7Ozs7OzswQkFHZiw2Q0FBaUI7Ozs7OzswQkFHakIsNENBQWdCOzs7Ozs7MEJBR2hCLDZDQUFpQjs7Ozs7OzBCQUdqQiwwQ0FBYzs7Ozs7OzBCQUdkLDBDQUFjOzs7Ozs7MEJBR2Qsb0NBQVE7Ozs7OzswQkFHUixxQ0FBUzs7Ozs7OzBCQUdULCtDQUFtQjs7Ozs7OzBCQVFuQiwrQkFBRzs7Ozs7Ozs7Ozs7O3lCQXR2Qkw7RUE2akJvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFQUHJvZHVjdE9wdGlvbnMge1xuICBpZDogc3RyaW5nO1xuICBhbGlhcz86IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSZWZlc2hSZXN1bHQge1xuICBjYW5jZWxsZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkO1xuICBmYWlsZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkO1xuICBjb21wbGV0ZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkO1xuICBmaW5pc2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XG59XG5cbmV4cG9ydCB0eXBlIElBUFByb2R1Y3RzID0gSUFQUHJvZHVjdFtdICYge1xuICAvKipcbiAgICogR2V0IHByb2R1Y3QgYnkgSURcbiAgICovXG4gIGJ5SWQ6IHsgW2lkOiBzdHJpbmddOiBJQVBQcm9kdWN0IH07XG4gIC8qKlxuICAgKiBHZXQgcHJvZHVjdCBieSBhbGlhc1xuICAgKi9cbiAgYnlBbGlhczogeyBbYWxpYXM6IHN0cmluZ106IElBUFByb2R1Y3QgfTtcbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgcHJvZHVjdHMgKGZvciB0ZXN0aW5nIG9ubHkpLlxuICAgKi9cbiAgcmVzZXQ6ICgpID0+IHt9O1xufTtcblxuZXhwb3J0IHR5cGUgSUFQUXVlcnlDYWxsYmFjayA9ICgocHJvZHVjdDogSUFQUHJvZHVjdCkgPT4gdm9pZCkgfCAoKGVycm9yOiBJQVBFcnJvcikgPT4gdm9pZCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFQUHJvZHVjdCB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgYWxpYXM/OiBzdHJpbmc7XG5cbiAgdHlwZTogc3RyaW5nO1xuXG4gIHN0YXRlOiBzdHJpbmc7XG5cbiAgdGl0bGU6IHN0cmluZztcblxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gIHByaWNlTWljcm9zOiBudW1iZXI7XG5cbiAgcHJpY2U6IHN0cmluZztcblxuICBjdXJyZW5jeTogc3RyaW5nO1xuXG4gIGxvYWRlZDogYm9vbGVhbjtcblxuICB2YWxpZDogYm9vbGVhbjtcblxuICBjYW5QdXJjaGFzZTogYm9vbGVhbjtcblxuICBvd25lZDogYm9vbGVhbjtcblxuICBkb3dubG9hZGluZz86IGJvb2xlYW47XG5cbiAgZG93bmxvYWRlZD86IGJvb2xlYW47XG5cbiAgbGFzdFJlbmV3YWxEYXRlPzogRGF0ZTtcblxuICBleHBpcnlEYXRlPzogRGF0ZTtcblxuICBpbnRyb1ByaWNlPzogc3RyaW5nO1xuXG4gIGludHJvUHJpY2VNaWNyb3M/OiBudW1iZXI7XG5cbiAgaW50cm9QcmljZU51bWJlck9mUGVyaW9kcz86IG51bWJlcjtcblxuICBpbnRyb1ByaWNlU3Vic2NyaXB0aW9uUGVyaW9kPzogc3RyaW5nO1xuXG4gIGludHJvUHJpY2VQYXltZW50TW9kZT86IHN0cmluZztcblxuICBpbmVsaWdpYmxlRm9ySW50cm9QcmljZT86IGJvb2xlYW47XG5cbiAgYmlsbGluZ1BlcmlvZD86IG51bWJlcjtcblxuICBiaWxsaW5nUGVyaW9kVW5pdD86IHN0cmluZztcblxuICB0cmlhbFBlcmlvZD86IG51bWJlcjtcblxuICB0cmlhbFBlcmlvZFVuaXQ/OiBzdHJpbmc7XG5cbiAgYWRkaXRpb25hbERhdGE/OiBhbnk7XG5cbiAgdHJhbnNhY3Rpb24/OiBQbGF5U3RvcmVSZWNlaXB0IHwgQXBwU3RvcmVSZWNlaXB0O1xuXG4gIC8qKlxuICAgKiBDYWxsIGBwcm9kdWN0LmZpbmlzaCgpYCB0byBjb25maXJtIHRvIHRoZSBzdG9yZSB0aGF0IGFuIGFwcHJvdmVkIG9yZGVyIGhhcyBiZWVuIGRlbGl2ZXJlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIGNoYW5nZSB0aGUgcHJvZHVjdCBzdGF0ZSBmcm9tIGBBUFBST1ZFRGAgdG8gYEZJTklTSEVEYCAoc2VlIHByb2R1Y3QgbGlmZS1jeWNsZSkuXG4gICAqXG4gICAqIEFzIGxvbmcgYXMgeW91IGtlZXAgdGhlIHByb2R1Y3QgaW4gc3RhdGUgYEFQUFJPVkVEYDpcbiAgICpcbiAgICogIC0gdGhlIG1vbmV5IG1heSBub3QgYmUgaW4geW91ciBhY2NvdW50IChpLmUuIHVzZXIgaXNuJ3QgY2hhcmdlZClcbiAgICogIC0geW91IHdpbGwgcmVjZWl2ZSB0aGUgYGFwcHJvdmVkYCBldmVudCBlYWNoIHRpbWUgdGhlIGFwcGxpY2F0aW9uIHN0YXJ0cyxcbiAgICogICAgd2hlcmUgeW91IHNob3VsZCB0cnkgYWdhaW4gdG8gZmluaXNoIHRoZSBwZW5kaW5nIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiAqKmV4YW1wbGUgdXNlKipcbiAgICpcbiAgICogYGBganNcbiAgICogc3RvcmUud2hlbihcInByb2R1Y3QuaWRcIikuYXBwcm92ZWQoZnVuY3Rpb24ocHJvZHVjdCl7XG4gICAqICAgICAvLyBzeW5jaHJvbm91c1xuICAgKiAgICAgYXBwLnVubG9ja0ZlYXR1cmUoKTtcbiAgICogICAgIHByb2R1Y3QuZmluaXNoKCk7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogYGBganNcbiAgICogc3RvcmUud2hlbihcInByb2R1Y3QuaWRcIikuYXBwcm92ZWQoZnVuY3Rpb24ocHJvZHVjdCl7XG4gICAqICAgICAvLyBhc3luY2hyb25vdXNcbiAgICogICAgIGFwcC5kb3dubG9hZEZlYXR1cmUoZnVuY3Rpb24oKSB7XG4gICAqICAgICAgICAgcHJvZHVjdC5maW5pc2goKTtcbiAgICogICAgIH0pO1xuICAgKiB9KTtcbiAgICogYGBgXG4gICAqL1xuICBmaW5pc2goKTogdm9pZDtcblxuICAvKipcbiAgICogSW5pdGlhdGUgcHVyY2hhc2UgdmFsaWRhdGlvbiBhcyBkZWZpbmVkIGJ5IHRoZSBgc3RvcmUudmFsaWRhdG9yYCBhdHRyaWJ1dGUuXG4gICAqXG4gICAqICoqcmV0dXJuIHZhbHVlKipcbiAgICpcbiAgICogQSBQcm9taXNlIHdpdGggdGhlIGZvbGxvd2luZyBtZXRob2RzOlxuICAgKlxuICAgKiAgLSBgZG9uZShmdW5jdGlvbihwcm9kdWN0KXt9KWBcbiAgICogICAgLSBjYWxsZWQgd2hldGhlciB2ZXJpZmljYXRpb24gZmFpbGVkIG9yIHN1Y2NlZWRlZC5cbiAgICogIC0gYGV4cGlyZWQoZnVuY3Rpb24ocHJvZHVjdCl7fSlgXG4gICAqICAgIC0gY2FsbGVkIGlmIHRoZSBwdXJjaGFzZSBleHBpcmVkLlxuICAgKiAgLSBgc3VjY2VzcyhmdW5jdGlvbihwcm9kdWN0LCBwdXJjaGFzZURhdGEpe30pYFxuICAgKiAgICAtIGNhbGxlZCBpZiB0aGUgcHVyY2hhc2UgaXMgdmFsaWQgYW5kIHZlcmlmaWVkLlxuICAgKiAgICAtIGBwdXJjaGFzZURhdGFgIGlzIHRoZSBkZXZpY2UgZGVwZW5kZW50IHRyYW5zYWN0aW9uIGRldGFpbHNcbiAgICogICAgICByZXR1cm5lZCBieSB0aGUgdmFsaWRhdG9yLCB3aGljaCB5b3UgY2FuIG1vc3QgcHJvYmFibHkgaWdub3JlLlxuICAgKiAgLSBgZXJyb3IoZnVuY3Rpb24oZXJyKXt9KWBcbiAgICogICAgLSB2YWxpZGF0aW9uIGZhaWxlZCwgZWl0aGVyIGJlY2F1c2Ugb2YgZXhwaXJ5IG9yIGNvbW11bmljYXRpb25cbiAgICogICAgICBmYWlsdXJlLlxuICAgKiAgICAtIGBlcnJgIGlzIGEgc3RvcmUuRXJyb3Igb2JqZWN0LCB3aXRoIGEgY29kZSBleHBlY3RlZCB0byBiZVxuICAgKiAgICAgIGBzdG9yZS5FUlJfUEFZTUVOVF9FWFBJUkVEYCBvciBgc3RvcmUuRVJSX1ZFUklGSUNBVElPTl9GQUlMRURgLlxuICAgKi9cbiAgdmVyaWZ5KCk6IGFueTtcblxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkO1xuXG4gIHN0YXRlQ2hhbmdlZCgpOiB2b2lkO1xuXG4gIG9uKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQ7XG5cbiAgb25jZShldmVudDogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkO1xuXG4gIG9mZihjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkO1xuXG4gIHRyaWdnZXIoYWN0aW9uOiBzdHJpbmcsIGFyZ3M6IGFueSk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFQUHJvZHVjdEV2ZW50cyB7XG4gIC8qKiBDYWxsZWQgd2hlbiBwcm9kdWN0IGRhdGEgaXMgbG9hZGVkIGZyb20gdGhlIHN0b3JlLiAqL1xuICBsb2FkZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIGFueSBjaGFuZ2Ugb2NjdXJlZCB0byBhIHByb2R1Y3QuICovXG4gIHVwZGF0ZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIGFuIG9yZGVyIGZhaWxlZC4gVGhlIGBlcnJgIHBhcmFtZXRlciBpcyBhbiBJQVBFcnJvciBvYmplY3QuICovXG4gIGVycm9yOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiBhIHByb2R1Y3Qgb3JkZXIgaXMgYXBwcm92ZWQuICovXG4gIGFwcHJvdmVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiBhIG5vbi1jb25zdW1hYmxlIHByb2R1Y3Qgb3Igc3Vic2NyaXB0aW9uIGlzIG93bmVkLiAqL1xuICBvd25lZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gYSBwcm9kdWN0IG9yZGVyIGlzIGNhbmNlbGxlZCBieSB0aGUgdXNlci4gKi9cbiAgY2FuY2VsbGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiBhbiBvcmRlciBpcyByZWZ1bmRlZCBieSB0aGUgdXNlci4gKi9cbiAgcmVmdW5kZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIHByb2R1Y3QgaGFzIGp1c3QgYmVlbiByZWdpc3RlcmVkLiAqL1xuICByZWdpc3RlcmVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiB0aGUgcHJvZHVjdCBkZXRhaWxzIGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgbG9hZGVkLiAqL1xuICB2YWxpZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gdGhlIHByb2R1Y3QgY2Fubm90IGJlIGxvYWRlZCBmcm9tIHRoZSBzdG9yZS4gKi9cbiAgaW52YWxpZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gYW4gb3JkZXIgaGFzIGp1c3QgYmVlbiByZXF1ZXN0ZWQuICovXG4gIHJlcXVlc3RlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gdGhlIHB1cmNoYXNlIHByb2Nlc3MgaGFzIGJlZW4gaW5pdGlhdGVkLiAqL1xuICBpbml0aWF0ZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIHRoZSBwdXJjaGFzZSBwcm9jZXNzIGhhcyBjb21wbGV0ZWQuICovXG4gIGZpbmlzaGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiByZWNlaXB0IHZhbGlkYXRpb24gc3VjY2Vzc2Z1bC4gKi9cbiAgdmVyaWZpZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIHJlY2VpcHQgdmVyaWZpY2F0aW9uIGZhaWxlZC4gKi9cbiAgdW52ZXJpZmllZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gdmFsaWRhdGlvbiBmaW5kIGEgc3Vic2NyaXB0aW9uIHRvIGJlIGV4cGlyZWQuICovXG4gIGV4cGlyZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIGNvbnRlbnQgZG93bmxvYWQgaXMgc3RhcnRlZC4gKi9cbiAgZG93bmxvYWRpbmc6IChwcm9kdWN0OiBJQVBQcm9kdWN0LCBwcm9ncmVzczogYW55LCB0aW1lX3JlbWFpbmluZzogYW55KSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gY29udGVudCBkb3dubG9hZCBoYXMgc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZC4gKi9cbiAgZG93bmxvYWRlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xufVxuXG5leHBvcnQgdHlwZSBQbGF5U3RvcmVSZWNlaXB0ID0ge1xuICBpZDogc3RyaW5nO1xuICBwdXJjaGFzZVN0YXRlOiBudW1iZXI7XG4gIHB1cmNoYXNlVG9rZW46IHN0cmluZztcbiAgcmVjZWlwdDogc3RyaW5nO1xuICBzaWduYXR1cmU6IHN0cmluZztcbiAgdHlwZTogJ2FuZHJvaWQtcGxheXN0b3JlJztcbn07XG5cbmV4cG9ydCB0eXBlIEFwcFN0b3JlUmVjZWlwdCA9IHtcbiAgaWQ6IHN0cmluZztcbiAgYXBwU3RvcmVSZWNlaXB0OiBzdHJpbmc7XG4gIG9yaWdpbmFsX3RyYW5zYWN0aW9uX2lkOiBzdHJpbmc7XG4gIHR5cGU6ICdpb3MtYXBwc3RvcmUnO1xufTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBJQVBFcnJvciB7XG4gIGNvZGU6IG51bWJlcjtcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEluIEFwcCBQdXJjaGFzZSAyXG4gKiBAZGVzY3JpcHRpb25cbiAqIEluLUFwcCBQdXJjaGFzZSBvbiBpT1MsIEFuZHJvaWQsIFdpbmRvd3MsIG1hY09TIGFuZCBYQm94LlxuICpcbiAqICMjIEZlYXR1cmVzXG4gKlxuICogfCAgfCBpb3MgfCBhbmRyb2lkIHwgd2luLTggfCB3aW4tMTAvdXdwIHwgbWFjIHxcbiAqIHwtLXwtLXwtLXwtLXwtLXwtLXxcbiAqIHwgY29uc3VtYWJsZXMgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfFxuICogfCBub24gY29uc3VtYWJsZXMgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfFxuICogfCBzdWJzY3JpcHRpb25zIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHxcbiAqIHwgcmVzdG9yZSBwdXJjaGFzZXMgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfFxuICogfCByZWNlaXB0IHZhbGlkYXRpb25zIHwg4pyFIHwg4pyFIHwgIHwg4pyFIHwg4pyFIHxcbiAqIHwgZG93bmxvYWRhYmxlIGNvbnRlbnQgfCDinIUgfCAgIHwgICB8ICAgfCDinIUgfFxuICogfCBpbnRyb2R1Y3RvcnkgcHJpY2VzIHwg4pyFIHwg4pyFIHwgICB8IOKchSB8IOKchSB8XG4gKlxuICogU3VwcG9ydHM6XG4gKlxuICogIC0gKippT1MqKiB2ZXJzaW9uIDcuMCBvciBoaWdoZXIuXG4gKiAgLSAqKkFuZHJvaWQqKiB2ZXJzaW9uIDIuMiAoQVBJIGxldmVsIDgpIG9yIGhpZ2hlclxuICogICAgLSB3aXRoIEdvb2dsZSBQbGF5IGNsaWVudCB2ZXJzaW9uIDMuOS4xNiBvciBoaWdoZXJcbiAqICAtICoqV2luZG93cyoqIFN0b3JlL1Bob25lIDguMSBvciBoaWdoZXJcbiAqICAtICoqV2luZG93cyAxMCBNb2JpbGUqKlxuICogIC0gKiptYWNPUyoqIHZlcnNpb24gMTBcbiAqICAtICoqWGJveCBPbmUqKlxuICogICAgLSAoYW5kIGFueSBwbGF0Zm9ybSBzdXBwb3J0aW5nIE1pY3Jvc29mdCdzIFVXUClcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEluQXBwUHVyY2hhc2UyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pbi1hcHAtcHVyY2hhc2UtMi9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0sIHByaXZhdGUgc3RvcmU6IEluQXBwUHVyY2hhc2UyKSB7XG4gKiAgIHBsYXRmb3JtLnJlYWR5KCkudGhlbigoKSA9PiB7XG4gKiAgICB0aGlzLnN0b3JlLnJlZ2lzdGVyKHtcbiAqICAgICAgaWQ6IFwibXlfcHJvZHVjdF9pZFwiLFxuICogICAgICB0eXBlOiB0aGlzLnN0b3JlLk5PTl9SRU5FV0lOR19TVUJTQ1JJUFRJT04sXG4gKiAgICB9KTtcbiAqICAgIHRoaXMuc3RvcmUud2hlbihcIm15X3Byb2R1Y3RfaWRcIilcbiAqICAgICAgLmFwcHJvdmVkKHAgPT4gcC52ZXJpZnkoKSlcbiAqICAgICAgLnZlcmlmaWVkKHAgPT4gcC5maW5pc2goKSk7XG4gKiAgICB0aGlzLnN0b3JlLnJlZnJlc2goKTtcbiAqICAgfSk7XG4gKiB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5zdG9yZS5vcmRlcihcIm15X3Byb2R1Y3RfaWRcIik7XG4gKlxuICogYGBgXG4gKlxuICogIyMgRnVsbCBleGFtcGxlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogIC8vIEFmdGVyIHBsYXRmb3JtIHJlYWR5XG4gKiAgdGhpcy5zdG9yZS52ZXJib3NpdHkgPSB0aGlzLnN0b3JlLkRFQlVHO1xuICogIHRoaXMuc3RvcmUucmVnaXN0ZXIoe1xuICogICAgaWQ6IFwibXlfcHJvZHVjdF9pZFwiLFxuICogICAgdHlwZTogdGhpcy5zdG9yZS5QQUlEX1NVQlNDUklQVElPTixcbiAqICB9KTtcbiAqXG4gKiAgLy8gUmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSBzcGVjaWZpYyBwcm9kdWN0XG4gKiAgdGhpcy5zdG9yZS53aGVuKFwibXlfcHJvZHVjdF9pZFwiKS5yZWdpc3RlcmVkKCAocHJvZHVjdDogSUFQUHJvZHVjdCkgPT4ge1xuICogICAgY29uc29sZS5sb2coJ1JlZ2lzdGVyZWQ6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9kdWN0KSk7XG4gKiAgfSk7XG4gKlxuICogIC8vIFVwZGF0ZWRcbiAqICB0aGlzLnN0b3JlLndoZW4oXCJteV9wcm9kdWN0X2lkXCIpLnVwZGF0ZWQoIChwcm9kdWN0OiBJQVBQcm9kdWN0KSA9PiB7XG4gKiAgICBjb25zb2xlLmxvZygnVXBkYXRlZCcgKyBKU09OLnN0cmluZ2lmeShwcm9kdWN0KSk7XG4gKiAgfSk7XG4gKlxuICogIC8vIFVzZXIgY2xvc2VkIHRoZSBuYXRpdmUgcHVyY2hhc2UgZGlhbG9nXG4gKiAgdGhpcy5zdG9yZS53aGVuKFwibXlfcHJvZHVjdF9pZFwiKS5jYW5jZWxsZWQoIChwcm9kdWN0KSA9PiB7XG4gKiAgICAgIGNvbnNvbGUuZXJyb3IoJ1B1cmNoYXNlIHdhcyBDYW5jZWxsZWQnKTtcbiAqICB9KTtcbiAqXG4gKiAgLy8gVHJhY2sgYWxsIHN0b3JlIGVycm9yc1xuICogIHRoaXMuc3RvcmUuZXJyb3IoIChlcnIpID0+IHtcbiAqICAgIGNvbnNvbGUuZXJyb3IoJ1N0b3JlIEVycm9yICcgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAqICB9KTtcbiAqXG4gKiAgLy8gUnVuIHNvbWUgY29kZSBvbmx5IHdoZW4gdGhlIHN0b3JlIGlzIHJlYWR5IHRvIGJlIHVzZWRcbiAqICB0aGlzLnN0b3JlLnJlYWR5KCgpID0+ICB7XG4gKiAgICBjb25zb2xlLmxvZygnU3RvcmUgaXMgcmVhZHknKTtcbiAqICAgIGNvbnNvbGUubG9nKCdQcm9kdWN0czogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RvcmUucHJvZHVjdHMpKTtcbiAqICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RvcmUuZ2V0KFwibXlfcHJvZHVjdF9pZFwiKSkpO1xuICogIH0pO1xuICpcbiAqICAvLyBSZWZyZXNoIHRoZSBzdGF0dXMgb2YgaW4tYXBwIHByb2R1Y3RzXG4gKiAgdGhpcy5zdG9yZS5yZWZyZXNoKCk7XG4gKlxuICogIC4uLlxuICpcbiAqICAvLyBUbyBtYWtlIGEgcHVyY2hhc2VcbiAqICB0aGlzLnN0b3JlLm9yZGVyKFwibXlfcHJvZHVjdF9pZFwiKTtcbiAqXG4gKiBgYGBcbiAqXG4gKiAjIyBQaGlsb3NvcGh5XG4gKlxuICogVGhlIEFQSSBpcyBtb3N0bHkgZXZlbnRzIGJhc2VkLiBBcyBhIHVzZXIgb2YgdGhpcyBwbHVnaW4sXG4gKiB5b3Ugd2lsbCBoYXZlIHRvIHJlZ2lzdGVyIGxpc3RlbmVycyB0byBjaGFuZ2VzIGhhcHBlbmluZyB0byB0aGUgcHJvZHVjdHNcbiAqIHlvdSByZWdpc3Rlci5cbiAqXG4gKiBUaGUgY29yZSBvZiB0aGUgbGlzdGVuaW5nIG1lY2hhbmlzbSBpcyB0aGUgYHdoZW4oKWAgbWV0aG9kLiBJdCBhbGxvd3MgeW91IHRvXG4gKiBiZSBub3RpZmllZCBvZiBjaGFuZ2VzIHRvIG9uZSBvciBhIHNldCBvZiBwcm9kdWN0cyB1c2luZyBhIHF1ZXJ5IG1lY2hhbmlzbTpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqICB0aGlzLnN0b3JlLndoZW4oXCJwcm9kdWN0XCIpLnVwZGF0ZWQocmVmcmVzaFNjcmVlbik7IC8vIG1hdGNoIGFueSBwcm9kdWN0XG4gKiAgdGhpcy5zdG9yZS53aGVuKFwiZnVsbF92ZXJzaW9uXCIpLm93bmVkKHVubG9ja0FwcCk7IC8vIG1hdGNoIGEgc3BlY2lmaWMgcHJvZHVjdFxuICogIHRoaXMuc3RvcmUud2hlbihcInN1YnNjcmlwdGlvblwiKS5hcHByb3ZlZChzZXJ2ZXJDaGVjayk7IC8vIG1hdGNoIGFsbCBzdWJzY3JpcHRpb25zXG4gKiAgdGhpcy5zdG9yZS53aGVuKFwiZG93bmxvYWRhYmxlIGNvbnRlbnRcIikuZG93bmxvYWRlZChzaG93Q29udGVudCk7XG4gKiBgYGBcbiAqXG4gKiBUaGUgYHVwZGF0ZWRgIGV2ZW50IGlzIGZpcmVkIHdoZW5ldmVyIG9uZSBvZiB0aGUgZmllbGRzIG9mIGEgcHJvZHVjdCBpc1xuICogY2hhbmdlZCAoaXRzIGBvd25lZGAgc3RhdHVzIGZvciBpbnN0YW5jZSkuXG4gKlxuICogVGhpcyBldmVudCBwcm92aWRlcyBhIGdlbmVyaWMgd2F5IHRvIHRyYWNrIHRoZSBzdGF0dXNlcyBvZiB5b3VyIHB1cmNoYXNlcyxcbiAqIHRvIHVubG9jayBmZWF0dXJlcyB3aGVuIG5lZWRlZCBhbmQgdG8gcmVmcmVzaCB5b3VyIHZpZXdzIGFjY29yZGluZ2x5LlxuICpcbiAqICMjIFJlZ2lzdGVyaW5nIHByb2R1Y3RzXG4gKlxuICogVGhlIHN0b3JlIG5lZWRzIHRvIGtub3cgdGhlIHR5cGUgYW5kIGlkZW50aWZpZXJzIG9mIHlvdXIgcHJvZHVjdHMgYmVmb3JlIHlvdVxuICogY2FuIHVzZSB0aGVtIGluIHlvdXIgY29kZS5cbiAqXG4gKiBVc2UgYHN0b3JlLnJlZ2lzdGVyKClgIHRvIGRlZmluZSB0aGVtIGJlZm9yZSB5b3VyIGZpcnN0IGNhbGwgdG8gYHN0b3JlLnJlZnJlc2goKWAuXG4gKlxuICogT25jZSByZWdpc3RlcmVkLCB5b3UgY2FuIHVzZSBgc3RvcmUuZ2V0KClgIHRvIHJldHJpZXZlIGFuIGBJQVBQcm9kdWN0YCBvYmplY3QuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogIHRoaXMuc3RvcmUucmVnaXN0ZXIoe1xuICogICAgaWQ6IFwibXlfY29uc3VtYWJsZTFcIixcbiAqICAgIHR5cGU6IHRoaXMuc3RvcmUuQ09OU1VNQUJMRVxuICogIH0pO1xuICogIC4uLlxuICogIGNvbnN0IHAgPSB0aGlzLnN0b3JlLmdldChcIm15X2NvbnN1bWFibGUxXCIpO1xuICogYGBgXG4gKlxuICogVGhlIHByb2R1Y3QgYGlkYCBhbmQgYHR5cGVgIGhhdmUgdG8gbWF0Y2ggcHJvZHVjdHMgZGVmaW5lZCBpbiB5b3VyXG4gKiBBcHBsZSwgR29vZ2xlIG9yIE1pY3Jvc29mdCBkZXZlbG9wZXIgY29uc29sZXMuXG4gKlxuICogTGVhcm4gbW9yZSBhYm91dCBpdCBbZnJvbSB0aGUgd2lraV0oaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2Uvd2lraSkuXG4gKlxuICogIyMgRGlzcGxheWluZyBwcm9kdWN0c1xuICpcbiAqIFJpZ2h0IGFmdGVyIHlvdSByZWdpc3RlcmVkIHlvdXIgcHJvZHVjdHMsIG5vdGhpbmcgbXVjaCBpcyBrbm93biBhYm91dCB0aGVtXG4gKiBleGNlcHQgdGhlaXIgYGlkYCwgYHR5cGVgIGFuZCBhbiBvcHRpb25hbCBgYWxpYXNgLlxuICpcbiAqIFdoZW4geW91IHBlcmZvcm0gdGhlIGluaXRpYWwgY2FsbCB0byBgc3RvcmUucmVmcmVzaCgpYCwgdGhlIHBsYXRmb3Jtcycgc2VydmVyIHdpbGxcbiAqIGJlIGNvbnRhY3RlZCB0byBsb2FkIGluZm9ybWF0aW9ucyBhYm91dCB0aGUgcmVnaXN0ZXJlZCBwcm9kdWN0czogaHVtYW5cbiAqIHJlYWRhYmxlIGB0aXRsZWAgYW5kIGBkZXNjcmlwdGlvbmAsIGBwcmljZWAsIGV0Yy5cbiAqXG4gKiBUaGlzIGlzbid0IGFuIG9wdGlvbmFsIHN0ZXAsIHN0b3JlIG93bmVycyByZXF1aXJlIHlvdVxuICogdG8gZGlzcGxheSBpbmZvcm1hdGlvbiBhYm91dCBhIHByb2R1Y3QgZXhhY3RseSBhcyByZXRyaWV2ZWQgZnJvbSB0aGVpciBzZXJ2ZXI6IG5vXG4gKiBoYXJkLWNvZGluZyBvZiBwcmljZSBhbmQgdGl0bGUgYWxsb3dlZCEgVGhpcyBpcyBhbHNvIGNvbnZlbmllbnQgZm9yIHlvdVxuICogYXMgeW91IGNhbiBjaGFuZ2UgdGhlIHByaWNlIG9mIHlvdXIgaXRlbXMga25vd2luZyB0aGF0IGl0J2xsIGJlIHJlZmxlY3RlZCBpbnN0YW50bHlcbiAqIG9uIHlvdXIgY2xpZW50cycgZGV2aWNlcy5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGluZm9ybWF0aW9uIG1heSBub3QgYmUgYXZhaWxhYmxlIHdoZW4gdGhlIGZpcnN0IHZpZXcgdGhhdCBuZWVkc1xuICogdGhlbSBhcHBlYXJzIG9uIHNjcmVlbi4gRm9yIHlvdSwgdGhlIGJlc3Qgb3B0aW9uIGlzIHRvIGhhdmUgeW91ciB2aWV3IG1vbml0b3JcbiAqIGNoYW5nZXMgbWFkZSB0byB0aGUgcHJvZHVjdC5cbiAqXG4gKiAjIyBQdXJjaGFzaW5nXG4gKlxuICogIyMjIyBpbml0aWF0ZSBhIHB1cmNoYXNlXG4gKlxuICogUHVyY2hhc2VzIGFyZSBpbml0aWF0ZWQgdXNpbmcgdGhlIGBzdG9yZS5vcmRlcihcInNvbWVfcHJvZHVjdF9pZFwiKWAgbWV0aG9kLlxuICpcbiAqIFRoZSBzdG9yZSB3aWxsIG1hbmFnZSB0aGUgaW50ZXJuYWwgcHVyY2hhc2UgZmxvdy4gSXQnbGwgZW5kOlxuICpcbiAqICAtIHdpdGggYW4gYGFwcHJvdmVkYCBldmVudC4gVGhlIHByb2R1Y3QgZW50ZXJzIHRoZSBgQVBQUk9WRURgIHN0YXRlLlxuICogIC0gd2l0aCBhIGBjYW5jZWxsZWRgIGV2ZW50LiBUaGUgcHJvZHVjdCBnZXRzIGJhY2sgdG8gdGhlIGBWQUxJRGAgc3RhdGUuXG4gKiAgLSB3aXRoIGFuIGBlcnJvcmAgZXZlbnQuIFRoZSBwcm9kdWN0IGdldHMgYmFjayB0byB0aGUgYFZBTElEYCBzdGF0ZS5cbiAqXG4gKiBTZWUgdGhlIHByb2R1Y3QgbGlmZS1jeWNsZSBzZWN0aW9uIGZvciBkZXRhaWxzIGFib3V0IHByb2R1Y3Qgc3RhdGVzLlxuICpcbiAqICMjIyMgZmluaXNoIGEgcHVyY2hhc2VcbiAqXG4gKiBPbmNlIHRoZSB0cmFuc2FjdGlvbiBpcyBhcHByb3ZlZCwgdGhlIHByb2R1Y3Qgc3RpbGwgaXNuJ3Qgb3duZWQ6IHRoZSBzdG9yZSBuZWVkc1xuICogY29uZmlybWF0aW9uIHRoYXQgdGhlIHB1cmNoYXNlIHdhcyBkZWxpdmVyZWQgYmVmb3JlIGNsb3NpbmcgdGhlIHRyYW5zYWN0aW9uLlxuICpcbiAqIFRvIGNvbmZpcm0gZGVsaXZlcnksIHlvdSdsbCB1c2UgdGhlIGBwcm9kdWN0LmZpbmlzaCgpYCBtZXRob2QuXG4gKlxuICogIyMjIyBleGFtcGxlIHVzYWdlXG4gKlxuICogRHVyaW5nIGluaXRpYWxpemF0aW9uOlxuICogYGBgdHlwZXNjcmlwdFxuICogdGhpcy5zdG9yZS53aGVuKFwiZXh0cmFfY2hhcHRlclwiKS5hcHByb3ZlZCgocHJvZHVjdDogSUFQUHJvZHVjdCkgPT4ge1xuICogICAvLyBkb3dubG9hZCB0aGUgZmVhdHVyZVxuICogICBhcHAuZG93bmxvYWRFeHRyYUNoYXB0ZXIoKVxuICogICAudGhlbigoKSA9PiBwcm9kdWN0LmZpbmlzaCgpKTtcbiAqIH0pO1xuICogYGBgXG4gKlxuICogV2hlbiB0aGUgcHVyY2hhc2UgYnV0dG9uIGlzIGNsaWNrZWQ6XG4gKiBgYGB0eXBlc2NyaXB0XG4gKiB0aGlzLnN0b3JlLm9yZGVyKFwiZXh0cmFfY2hhcHRlclwiKTtcbiAqIGBgYFxuICpcbiAqICMjIyMgdW4tZmluaXNoZWQgcHVyY2hhc2VzXG4gKlxuICogSWYgeW91ciBhcHAgd2Fzbid0IGFibGUgdG8gZGVsaXZlciB0aGUgY29udGVudCwgYHByb2R1Y3QuZmluaXNoKClgIHdvbid0IGJlIGNhbGxlZC5cbiAqXG4gKiBEb24ndCB3b3JyeTogdGhlIGBhcHByb3ZlZGAgZXZlbnQgd2lsbCBiZSByZS10cmlnZ2VyZWQgdGhlIG5leHQgdGltZSB5b3VcbiAqIGNhbGwgYHN0b3JlLnJlZnJlc2goKWAsIHdoaWNoIGNhbiB2ZXJ5IHdlbGwgYmUgdGhlIG5leHQgdGltZVxuICogdGhlIGFwcGxpY2F0aW9uIHN0YXJ0cy4gUGVuZGluZyB0cmFuc2FjdGlvbnMgYXJlIHBlcnNpc3RhbnQuXG4gKlxuICogIyMjIyBzaW1wbGUgY2FzZVxuICpcbiAqIEluIHRoZSBtb3N0IHNpbXBsZSBjYXNlLCB3aGVyZTpcbiAqXG4gKiAgLSBkZWxpdmVyeSBvZiBwdXJjaGFzZXMgaXMgb25seSBsb2NhbCA7XG4gKiAgLSB5b3UgZG9uJ3Qgd2FudCAob3IgbmVlZCkgdG8gaW1wbGVtZW50IHJlY2VpcHQgdmFsaWRhdGlvbiA7XG4gKlxuICogWW91IG1heSBqdXN0IHdhbnQgdG8gZmluaXNoIGFsbCBwdXJjaGFzZXMgYXV0b21hdGljYWxseS4gWW91IGNhbiBkbyBpdCB0aGlzIHdheTpcbiAqIGBgYGpzXG4gKiB0aGlzLnN0b3JlLndoZW4oXCJwcm9kdWN0XCIpLmFwcHJvdmVkKChwOiBJQVBQcm9kdWN0KSA9PiBwLmZpbmlzaCgpKTtcbiAqIGBgYFxuICpcbiAqIE5PVEU6IHRoZSBcInByb2R1Y3RcIiBxdWVyeSB3aWxsIG1hdGNoIGFueSBwdXJjaGFzZXMgKHNlZSBcInF1ZXJpZXNcIiB0byBsZWFybiBtb3JlIGRldGFpbHMgYWJvdXQgcXVlcmllcykuXG4gKlxuICogIyMgUmVjZWlwdCB2YWxpZGF0aW9uXG4gKlxuICogVG8gZ2V0IHRoZSBtb3N0IHVwLXRvLWRhdGUgaW5mb3JtYXRpb24gYWJvdXQgcHVyY2hhc2VzIChpbiBjYXNlIGEgcHVyY2hhc2UgaGF2ZSBiZWVuIGNhbmNlbGVkLCBvciBhIHN1YnNjcmlwdGlvbiByZW5ld2VkKSxcbiAqIHlvdSBzaG91bGQgaW1wbGVtZW50IHNlcnZlciBzaWRlIHJlY2VpcHQgdmFsaWRhdGlvbi5cbiAqXG4gKiBUaGlzIGFsc28gcHJvdGVjdHMgeW91IGFnYWluc3QgZmFrZSBcInB1cmNoYXNlc1wiLCBtYWRlIGJ5IHNvbWUgdXNlcnMgdXNpbmdcbiAqIFwiZnJlZSBpbi1hcHAgcHVyY2hhc2VcIiBhcHBzIG9uIHRoZWlyIGRldmljZXMuXG4gKlxuICogV2hlbiBhIHB1cmNoYXNlIGhhcyBiZWVuIGFwcHJvdmVkIGJ5IHRoZSBzdG9yZSwgaXQncyBlbnJpY2hlZCB3aXRoXG4gKiB0cmFuc2FjdGlvbiBpbmZvcm1hdGlvbiAoc2VlIGBwcm9kdWN0LnRyYW5zYWN0aW9uYCBhdHRyaWJ1dGUpLlxuICpcbiAqIFRvIHZlcmlmeSBhIHB1cmNoYXNlIHlvdSdsbCBoYXZlIHRvIGRvIHRocmVlIHRoaW5nczpcbiAqXG4gKiAgLSBjb25maWd1cmUgdGhlIHZhbGlkYXRvci5cbiAqICAtIGNhbGwgYHByb2R1Y3QudmVyaWZ5KClgIGZyb20gdGhlIGBhcHByb3ZlZGAgZXZlbnQsIGJlZm9yZSBmaW5pc2hpbmcgdGhlIHRyYW5zYWN0aW9uLlxuICogIC0gZmluaXNoIHRoZSB0cmFuc2FjdGlvbiB3aGVuIHRyYW5zYWN0aW9uIGlzIGB2ZXJpZmllZGAuXG4gKlxuICogKipTaGFtZWxlc3MgUGx1ZyoqOiB0aGlzIGlzIGEgZmVhdHVyZSBtYW55IHVzZXJzIHN0cnVnZ2xlIHdpdGgsIHNvIGFzIHRoZSBhdXRob3Igb2YgdGhpcyBwbHVnaW4sIHdlIGNhbiBwcm92aWRlIGl0IHRvIHlvdSBhcy1hLXNlcnZpY2U6IGh0dHBzOi8vYmlsbGluZy5mb3ZlYS5jYy9cbiAqICh3aGljaCBpcyBmcmVlIHVudGlsIHlvdSBzdGFydCBtYWtpbmcgc2VyaW91cyBtb25leSlcbiAqXG4gKiAjIyMjIGV4YW1wbGUgdXNpbmcgYSB2YWxpZGF0aW9uIFVSTFxuICpcbiAqIGBgYGpzXG4gKiB0aGlzLnN0b3JlLnZhbGlkYXRvciA9IFwiaHR0cHM6Ly9iaWxsaW5nLmZvdmVhLmNjL1wiO1xuICpcbiAqIHRoaXMuc3RvcmUud2hlbihcIm15IHN0dWZmXCIpXG4gKiAgIC5hcHByb3ZlZCgocDogSUFQUHJvZHVjdCkgPT4gcC52ZXJpZnkoKSlcbiAqICAgLnZlcmlmaWVkKChwOiBJQVBQcm9kdWN0KSA9PiBwLmZpbmlzaCgpKTtcbiAqIGBgYFxuICpcbiAqICMjIFN1YnNjcmlwdGlvbnNcbiAqXG4gKiBGb3Igc3Vic2NyaXB0aW9uLCB5b3UgTVVTVCBpbXBsZW1lbnQgcmVtb3RlIHJlY2VpcHQgdmFsaWRhdGlvbi5cbiAqXG4gKiBXaGVuIHRoZSByZWNlaXB0IHZhbGlkYXRvciByZXR1cm5zIGEgYHN0b3JlLlBVUkNIQVNFX0VYUElSRURgIGVycm9yIGNvZGUsIHRoZSBzdWJzY3JpcHRpb24gd2lsbFxuICogYXV0b21hdGljYWxseSBsb29zZSBpdHMgYG93bmVkYCBzdGF0dXMuXG4gKlxuICogVHlwaWNhbGx5LCB5b3UnbGwgZW5hYmxlIGFuZCBkaXNhYmxlIGFjY2VzcyB0byB5b3VyIGNvbnRlbnQgdGhpcyB3YXkuXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiB0aGlzLnN0b3JlLndoZW4oXCJteV9zdWJjcmlwdGlvblwiKS51cGRhdGVkKChwcm9kdWN0OiBJQVBQcm9kdWN0KSA9PiB7XG4gKiAgIGlmIChwcm9kdWN0Lm93bmVkKVxuICogICAgIGFwcC5zdWJzY3JpYmVyTW9kZSgpO1xuICogICBlbHNlXG4gKiAgICAgYXBwLmd1ZXN0TW9kZSgpO1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiAjIyBQcm9kdWN0IGxpZmUtY3ljbGVcbiAqXG4gKiBBIHByb2R1Y3Qgd2lsbCBjaGFuZ2Ugc3RhdGUgZHVyaW5nIHRoZSBhcHBsaWNhdGlvbiBleGVjdXRpb24uXG4gKlxuICogRmluZCBiZWxvdyBhIGRpYWdyYW0gb2YgdGhlIGRpZmZlcmVudCBzdGF0ZXMgYSBwcm9kdWN0IGNhbiBwYXNzIGJ5LlxuICpcbiAqIGBgYFxuICogUkVHSVNURVJFRCArLS0+IElOVkFMSURcbiAqICAgICAgICAgICAgfFxuICogICAgICAgICAgICArLS0+IFZBTElEICstLT4gUkVRVUVTVEVEICstLT4gSU5JVElBVEVEICstK1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogICAgICAgICAgICAgICAgIF4gICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICogICAgICAgICAgICAgICAgIHwgICAgICB8XG4gKiAgICAgICAgICAgICAgICAgfCAgICAgIHwgICAgICAgICAgICAgKy0tPiBET1dOTE9BRElORyArLS0+IERPV05MT0FERUQgK1xuICogICAgICAgICAgICAgICAgIHwgICAgICB8ICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICAgICAgICAgICAgICAgICB8ICAgICAgKy0tPiBBUFBST1ZFRCArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0+IEZJTklTSEVEICstLT4gT1dORURcbiAqICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICAgICAgICAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAqXG4gKiAjIyMjIE5vdGVzXG4gKlxuICogIC0gV2hlbiBmaW5pc2hlZCwgYSBjb25zdW1hYmxlIHByb2R1Y3Qgd2lsbCBnZXQgYmFjayB0byB0aGUgYFZBTElEYCBzdGF0ZSwgd2hpbGUgb3RoZXIgd2lsbCBlbnRlciB0aGUgYE9XTkVEYCBzdGF0ZS5cbiAqICAtIEFueSBlcnJvciBpbiB0aGUgcHVyY2hhc2UgcHJvY2VzcyB3aWxsIGJyaW5nIGEgcHJvZHVjdCBiYWNrIHRvIHRoZSBgVkFMSURgIHN0YXRlLlxuICogIC0gRHVyaW5nIGFwcGxpY2F0aW9uIHN0YXJ0dXAsIHByb2R1Y3RzIG1heSBnbyBpbnN0YW50bHkgZnJvbSBgUkVHSVNURVJFRGAgdG8gYEFQUFJPVkVEYCBvciBgT1dORURgLCBmb3IgZXhhbXBsZSBpZiB0aGV5IGFyZSBwdXJjaGFzZWQgbm9uLWNvbnN1bWFibGVzIG9yIG5vbi1leHBpcmVkIHN1YnNjcmlwdGlvbnMuXG4gKiAgLSBOb24tUmVuZXdpbmcgU3Vic2NyaXB0aW9ucyBhcmUgaU9TIHByb2R1Y3RzIG9ubHkuIFBsZWFzZSBzZWUgdGhlIFtpT1MgTm9uIFJlbmV3aW5nIFN1YnNjcmlwdGlvbnMgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UvYmxvYi9tYXN0ZXIvZG9jL2lvcy5tZCNub24tcmVuZXdpbmcpIGZvciBhIGRldGFpbGVkIGV4cGxhbmF0aW9uLlxuICpcbiAqICMjIGV2ZW50c1xuICpcbiAqICAtIGBsb2FkZWQoSUFQUHJvZHVjdClgXG4gKiAgICAtIENhbGxlZCB3aGVuIHByb2R1Y3QgZGF0YSBpcyBsb2FkZWQgZnJvbSB0aGUgc3RvcmUuXG4gKiAgLSBgdXBkYXRlZChJQVBQcm9kdWN0KWBcbiAqICAgIC0gQ2FsbGVkIHdoZW4gYW55IGNoYW5nZSBvY2N1cmVkIHRvIGEgcHJvZHVjdC5cbiAqICAtIGBlcnJvcihlcnIpYFxuICogICAgLSBDYWxsZWQgd2hlbiBhbiBvcmRlciBmYWlsZWQuXG4gKiAgICAtIFRoZSBgZXJyYCBwYXJhbWV0ZXIgaXMgYW4gZXJyb3Igb2JqZWN0XG4gKiAgLSBgYXBwcm92ZWQoSUFQUHJvZHVjdClgXG4gKiAgICAtIENhbGxlZCB3aGVuIGEgcHJvZHVjdCBvcmRlciBpcyBhcHByb3ZlZC5cbiAqICAtIGBvd25lZChJQVBQcm9kdWN0KWBcbiAqICAgIC0gQ2FsbGVkIHdoZW4gYSBub24tY29uc3VtYWJsZSBwcm9kdWN0IG9yIHN1YnNjcmlwdGlvbiBpcyBvd25lZC5cbiAqICAtIGBjYW5jZWxsZWQoSUFQUHJvZHVjdClgXG4gKiAgICAtIENhbGxlZCB3aGVuIGEgcHJvZHVjdCBvcmRlciBpcyBjYW5jZWxsZWQgYnkgdGhlIHVzZXIuXG4gKiAgLSBgcmVmdW5kZWQoSUFQUHJvZHVjdClgXG4gKiAgICAtIENhbGxlZCB3aGVuIGFuIG9yZGVyIGlzIHJlZnVuZGVkIGJ5IHRoZSB1c2VyLlxuICogIC0gQWN0dWFsbHksIGFsbCBvdGhlciBwcm9kdWN0IHN0YXRlcyBoYXZlIHRoZWlyIHByb21pc2VcbiAqICAgIC0gYHJlZ2lzdGVyZWRgLCBgdmFsaWRgLCBgaW52YWxpZGAsIGByZXF1ZXN0ZWRgLFxuICogICAgICBgaW5pdGlhdGVkYCBhbmQgYGZpbmlzaGVkYFxuICogIC0gYHZlcmlmaWVkKElBUFByb2R1Y3QpYFxuICogICAgLSBDYWxsZWQgd2hlbiByZWNlaXB0IHZhbGlkYXRpb24gc3VjY2Vzc2Z1bFxuICogIC0gYHVudmVyaWZpZWQoSUFQUHJvZHVjdClgXG4gKiAgICAtIENhbGxlZCB3aGVuIHJlY2VpcHQgdmVyaWZpY2F0aW9uIGZhaWxlZFxuICogIC0gYGV4cGlyZWQoSUFQUHJvZHVjdClgXG4gKiAgICAtIENhbGxlZCB3aGVuIHZhbGlkYXRpb24gZmluZCBhIHN1YnNjcmlwdGlvbiB0byBiZSBleHBpcmVkXG4gKiAgLSBgZG93bmxvYWRpbmcoSUFQUHJvZHVjdCwgcHJvZ3Jlc3MsIHRpbWVfcmVtYWluaW5nKWBcbiAqICAgIC0gQ2FsbGVkIHdoZW4gY29udGVudCBkb3dubG9hZCBpcyBzdGFydGVkXG4gKiAgLSBgZG93bmxvYWRlZChJQVBQcm9kdWN0KWBcbiAqICAgIC0gQ2FsbGVkIHdoZW4gY29udGVudCBkb3dubG9hZCBoYXMgc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZFxuICpcbiAqICMjIExlYXJuIE1vcmVcbiAqXG4gKiAgLSBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZSlcbiAqICAtIFtHaXRCb29rXShodHRwczovL3B1cmNoYXNlLmNvcmRvdmEuZm92ZWEuY2MvKVxuICogIC0gW1dpa2ldKGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlL3dpa2kpXG4gKiAgLSBbQVBJIHJlZmVyZW5jZV0oaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UvYmxvYi9tYXN0ZXIvZG9jL2FwaS5tZClcbiAqXG4gKiAjIyBUZWNobmljYWwgU3VwcG9ydCBvciBRdWVzdGlvbnNcbiAqXG4gKiBJZiB5b3UgaGF2ZSBxdWVzdGlvbnMgb3IgbmVlZCBoZWxwIGludGVncmF0aW5nIEluLUFwcCBQdXJjaGFzZSwgW09wZW4gYW4gSXNzdWUgb24gR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZS9pc3N1ZXMpIG9yIGVtYWlsIHVzIGF0IF9zdXBwb3J0QGZvdmVhLmNjXy5cbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogSUFQUHJvZHVjdFxuICogSUFQUHJvZHVjdE9wdGlvbnNcbiAqIElBUFByb2R1Y3RFdmVudHNcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0luQXBwUHVyY2hhc2UyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcHVyY2hhc2UnLFxuICBwbHVnaW5SZWY6ICdzdG9yZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZScsXG4gIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCcsICdXaW5kb3dzJ10sXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tcHVyY2hhc2UgLS12YXJpYWJsZSBCSUxMSU5HX0tFWT1cIjxBTkRST0lEX0JJTExJTkdfS0VZPlwiJyxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5BcHBQdXJjaGFzZTIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBRVUlFVDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJPUjogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBXQVJOSU5HOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIElORk86IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgREVCVUc6IG51bWJlcjtcblxuICAvKipcbiAgICogRGVidWcgbGV2ZWwuIFVzZSBRVUlFVCwgRVJST1IsIFdBUk5JTkcsIElORk8gb3IgREVCVUcgY29uc3RhbnRzXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgdmVyYm9zaXR5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIGNsZWFyIHRoZSB0cmFuc2FjdGlvbiBxdWV1ZS4gTm90IHJlY29tbWVuZGVkIGZvciBwcm9kdWN0aW9uLlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZS9ibG9iL21hc3Rlci9kb2MvYXBpLm1kI3JhbmRvbS10aXBzXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgYXV0b0ZpbmlzaFRyYW5zYWN0aW9uczogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gaW52b2tlIHRoZSBwbGF0Zm9ybSBwdXJjaGFzZSBzYW5kYm94LiAoV2luZG93cyBvbmx5KVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHNhbmRib3g6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgZG93bmxvYWRpbmcgb2YgaG9zdGVkIGNvbnRlbnQuIChBcHBsZSBvbmx5KS5cbiAgICogVXNlZnVsIGluIGRldmVsb3BtZW50IG9yIHdoZW4gbWlncmF0aW5nIHlvdXIgYXBwIGF3YXkgZnJvbSBBcHBsZSBIb3N0ZWQgQ29udGVudC5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBkaXNhYmxlSG9zdGVkQ29udGVudDogYm9vbGVhbjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRlJFRV9TVUJTQ1JJUFRJT046IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgUEFJRF9TVUJTQ1JJUFRJT046IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgTk9OX1JFTkVXSU5HX1NVQlNDUklQVElPTjogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBDT05TVU1BQkxFOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIE5PTl9DT05TVU1BQkxFOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9TRVRVUDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfTE9BRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfUFVSQ0hBU0U6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX0xPQURfUkVDRUlQVFM6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX0NMSUVOVF9JTlZBTElEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9QQVlNRU5UX0NBTkNFTExFRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfUEFZTUVOVF9JTlZBTElEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9QQVlNRU5UX05PVF9BTExPV0VEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9VTktOT1dOOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9SRUZSRVNIX1JFQ0VJUFRTOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9JTlZBTElEX1BST0RVQ1RfSUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX0ZJTklTSDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfQ09NTVVOSUNBVElPTjogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfU1VCU0NSSVBUSU9OU19OT1RfQVZBSUxBQkxFOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9NSVNTSU5HX1RPS0VOOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9WRVJJRklDQVRJT05fRkFJTEVEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9CQURfUkVTUE9OU0U6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX1JFRlJFU0g6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX1BBWU1FTlRfRVhQSVJFRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfRE9XTkxPQUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX1NVQlNDUklQVElPTl9VUERBVEVfTk9UX0FWQUlMQUJMRTogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBSRUdJU1RFUkVEOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIElOVkFMSUQ6IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgVkFMSUQ6IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgUkVRVUVTVEVEOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIElOSVRJQVRFRDogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBBUFBST1ZFRDogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBGSU5JU0hFRDogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBPV05FRDogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBET1dOTE9BRElORzogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBET1dOTE9BREVEOiBzdHJpbmc7XG5cbiAgLyogdmFsaWRhdGlvbiBlcnJvciBjb2RlcyAqL1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBJTlZBTElEX1BBWUxPQUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQ09OTkVDVElPTl9GQUlMRUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgUFVSQ0hBU0VfRVhQSVJFRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBQVVJDSEFTRV9DT05TVU1FRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBJTlRFUk5BTF9FUlJPUjogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBORUVEX01PUkVfREFUQTogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBwcm9kdWN0czogSUFQUHJvZHVjdHM7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHZhbGlkYXRvcjogc3RyaW5nIHwgKCh1cmw6IHN0cmluZyB8IElBUFByb2R1Y3QsIGNhbGxiYWNrOiBGdW5jdGlvbikgPT4gdm9pZCk7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGFwcGxpY2F0aW9uVXNlcm5hbWU6IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcpO1xuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRBcHBsaWNhdGlvblVzZXJuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGxvZzoge1xuICAgIGVycm9yOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xuICAgIHdhcm46IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgaW5mbzogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZDtcbiAgICBkZWJ1ZzogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHByb2R1Y3QgYnkgaWQgb3IgYWxpYXNcbiAgICogQHBhcmFtIGlkT3JBbGlhc1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldChpZE9yQWxpYXM6IHN0cmluZyk6IElBUFByb2R1Y3Qge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBlcnJvciBoYW5kbGVyXG4gICAqIEBwYXJhbSBvbkVycm9yIHtGdW5jdGlvbn0gZnVuY3Rpb24gdG8gY2FsbCBvbiBlcnJvclxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGVycm9yKG9uRXJyb3I6IEZ1bmN0aW9uKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBBZGQgb3IgcmVnaXN0ZXIgYSBwcm9kdWN0XG4gICAqIEBwYXJhbSBwcm9kdWN0IHtJQVBQcm9kdWN0T3B0aW9uc31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZWdpc3Rlcihwcm9kdWN0OiBJQVBQcm9kdWN0T3B0aW9ucyB8IElBUFByb2R1Y3RPcHRpb25zW10pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge0lBUFByb2R1Y3RFdmVudHN9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgd2hlbihxdWVyeTogc3RyaW5nIHwgSUFQUHJvZHVjdCwgZXZlbnQ/OiBzdHJpbmcsIGNhbGxiYWNrPzogSUFQUXVlcnlDYWxsYmFjayk6IElBUFByb2R1Y3RFdmVudHMge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZGVudGljYWwgdG8gYHdoZW5gLCBidXQgdGhlIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIG9ubHkgb25jZS4gQWZ0ZXIgYmVpbmcgY2FsbGVkLCB0aGUgY2FsbGJhY2sgd2lsbCBiZSB1bnJlZ2lzdGVyZWQuXG4gICAqIEBwYXJhbSBxdWVyeSB7c3RyaW5nIHwgSUFQUHJvZHVjdH1cbiAgICogQHBhcmFtIFtldmVudF0ge2V2ZW50fVxuICAgKiBAcGFyYW0gW2NhbGxiYWNrXSB7SUFQUXVlcnlDYWxsYmFja31cbiAgICogQHJldHVybiB7SUFQUHJvZHVjdEV2ZW50c31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBvbmNlKHF1ZXJ5OiBzdHJpbmcgfCBJQVBQcm9kdWN0LCBldmVudD86IHN0cmluZywgY2FsbGJhY2s/OiBJQVBRdWVyeUNhbGxiYWNrKTogSUFQUHJvZHVjdEV2ZW50cyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXIgYSBjYWxsYmFjay4gV29ya3MgZm9yIGNhbGxiYWNrcyByZWdpc3RlcmVkIHdpdGggcmVhZHksIHdoZW4sIG9uY2UgYW5kIGVycm9yLlxuICAgKiBAcGFyYW0gY2FsbGJhY2sge0Z1bmN0aW9ufVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIG9mZihjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEluaXRpYXRlIHRoZSBwdXJjaGFzZSBvZiBhIHByb2R1Y3QuXG4gICAqXG4gICAqIFRoZSBgcHJvZHVjdGAgYXJndW1lbnQgY2FuIGJlIGVpdGhlcjpcbiAgICpcbiAgICogIC0gdGhlIGBJQVBQcm9kdWN0YCBvYmplY3RcbiAgICogIC0gdGhlIHByb2R1Y3QgYGlkYFxuICAgKiAgLSB0aGUgcHJvZHVjdCBgYWxpYXNgXG4gICAqXG4gICAqIFRoZSBgYWRkaXRpb25hbERhdGFgIGFyZ3VtZW50IGlzIGFuIG9wdGlvbmFsIG9iamVjdCB3aXRoIGF0dHJpYnV0ZXM6XG4gICAqICAtIGBvbGRQdXJjaGFzZWRTa3VzYDogYSBzdHJpbmcgYXJyYXkgd2l0aCB0aGUgb2xkIHN1YnNjcmlwdGlvbiB0byB1cGdyYWRlL2Rvd25ncmFkZSBvbiBBbmRyb2lkLiBTZWU6IFthbmRyb2lkIGRldmVsb3Blcl0oaHR0cHM6Ly9kZXZlbG9wZXIuYW5kcm9pZC5jb20vZ29vZ2xlL3BsYXkvYmlsbGluZy9iaWxsaW5nX3JlZmVyZW5jZS5odG1sI3VwZ3JhZGUtZ2V0QnV5SW50ZW50VG9SZXBsYWNlU2t1cykgZm9yIG1vcmUgaW5mb1xuICAgKiAgLSBgZGV2ZWxvcGVyUGF5bG9hZGA6IHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGRldmVsb3BlciBwYXlsb2FkIGFzIGRlc2NyaWJlZCBpbiBbYmlsbGluZyBiZXN0IHByYWN0aWNlc10oaHR0cHM6Ly9kZXZlbG9wZXIuYW5kcm9pZC5jb20vZ29vZ2xlL3BsYXkvYmlsbGluZy9iaWxsaW5nX2Jlc3RfcHJhY3RpY2VzLmh0bWwpXG4gICAqICAtIGBhcHBsaWNhdGlvblVzZXJuYW1lYDogdGhlIGlkZW50aWZpZXIgb2YgdGhlIHVzZXIgaW4geW91ciBhcHBsaWNhdGlvbi5cbiAgICpcbiAgICogU2VlIHRoZSBcIlB1cmNoYXNpbmcgc2VjdGlvblwiIHRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIHB1cmNoYXNlIHByb2Nlc3MuXG4gICAqXG4gICAqICoqcmV0dXJuIHZhbHVlKipcbiAgICpcbiAgICogYHN0b3JlLm9yZGVyKClgIHJldHVybnMgYSBQcm9taXNlIHdpdGggdGhlIGZvbGxvd2luZyBtZXRob2RzOlxuICAgKlxuICAgKiAgLSBgdGhlbmAgLSBjYWxsZWQgd2hlbiB0aGUgb3JkZXIgd2FzIHN1Y2Nlc3NmdWxseSBpbml0aWF0ZWQuXG4gICAqICAtIGBlcnJvcmAgLSBjYWxsZWQgaWYgdGhlIG9yZGVyIGNvdWxkbid0IGJlIGluaXRpYXRlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBvcmRlcihwcm9kdWN0OiBzdHJpbmcgfCBJQVBQcm9kdWN0LCBhZGRpdGlvbmFsRGF0YT86IGFueSk6IHsgdGhlbjogRnVuY3Rpb247IGVycm9yOiBGdW5jdGlvbiB9IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHJlYWR5KGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogQWZ0ZXIgeW91J3JlIGRvbmUgcmVnaXN0ZXJpbmcgeW91ciBzdG9yZSdzIHByb2R1Y3QgYW5kIGV2ZW50cyBoYW5kbGVycyxcbiAgICogdGltZSB0byBjYWxsIGBzdG9yZS5yZWZyZXNoKClgLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgaW5pdGlhdGUgYWxsIHRoZSBjb21wbGV4IGJlaGluZC10aGUtc2NlbmUgd29yaywgdG8gbG9hZCBwcm9kdWN0XG4gICAqIGRhdGEgZnJvbSB0aGUgc2VydmVycyBhbmQgcmVzdG9yZSB3aGF0ZXZlciBhbHJlYWR5IGhhdmUgYmVlblxuICAgKiBwdXJjaGFzZWQgYnkgdGhlIHVzZXIuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB5b3UgY2FuIGNhbGwgdGhpcyBtZXRob2QgYWdhaW4gbGF0ZXIgZHVyaW5nIHRoZSBhcHBsaWNhdGlvblxuICAgKiBleGVjdXRpb24gdG8gcmUtdHJpZ2dlciBhbGwgdGhhdCBoYXJkLXdvcmsuIEl0J3Mga2luZCBvZiBleHBlbnNpdmUgaW4gdGVybSBvZlxuICAgKiBwcm9jZXNzaW5nLCBzbyB5b3UnZCBiZXR0ZXIgY29uc2lkZXIgaXQgdHdpY2UuXG4gICAqXG4gICAqIE9uZSBnb29kIHdheSBvZiBkb2luZyBpdCBpcyB0byBhZGQgYSBcIlJlZnJlc2ggUHVyY2hhc2VzXCIgYnV0dG9uIGluIHlvdXJcbiAgICogYXBwbGljYXRpb25zIHNldHRpbmdzLiBUaGlzIHdheSwgaWYgZGVsaXZlcnkgb2YgYSBwdXJjaGFzZSBmYWlsZWQgb3JcbiAgICogaWYgYSB1c2VyIHdhbnRzIHRvIHJlc3RvcmUgcHVyY2hhc2VzIGhlIG1hZGUgZnJvbSBhbm90aGVyIGRldmljZSwgaGUnbGxcbiAgICogaGF2ZSBhIHdheSB0byBkbyBqdXN0IHRoYXQuXG4gICAqXG4gICAqICoqZXhhbXBsZSB1c2FnZSoqXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogICAgLy8gLi4uXG4gICAqICAgIC8vIHJlZ2lzdGVyIHByb2R1Y3RzIGFuZCBldmVudHMgaGFuZGxlcnMgaGVyZVxuICAgKiAgICAvLyAuLi5cbiAgICogICAgLy9cbiAgICogICAgLy8gdGhlbiBhbmQgb25seSB0aGVuLCBjYWxsIHJlZnJlc2guXG4gICAqICAgIHRoaXMuc3RvcmUucmVmcmVzaCgpO1xuICAgKiBgYGBcbiAgICpcbiAgICogKipyZXN0b3JlIHB1cmNoYXNlcyoqXG4gICAqXG4gICAqIEFkZCBhIFwiUmVmcmVzaCBQdXJjaGFzZXNcIiBidXR0b24gdG8gY2FsbCB0aGUgYHN0b3JlLnJlZnJlc2goKWAgbWV0aG9kLCBsaWtlOlxuICAgKlxuICAgKiBgPGJ1dHRvbiBvbmNsaWNrPVwiPHBzZXVkb19jb2RlPnRoaXMuc3RvcmUucmVmcmVzaCgpPC9wc2V1ZG9fY29kZT5cIj5SZXN0b3JlIFB1cmNoYXNlczwvYnV0dG9uPmBcbiAgICpcbiAgICogVG8gbWFrZSB0aGUgcmVzdG9yZSBwdXJjaGFzZXMgd29yayBhcyBleHBlY3RlZCwgcGxlYXNlIG1ha2Ugc3VyZSB0aGF0XG4gICAqIHRoZSBcImFwcHJvdmVkXCIgZXZlbnQgbGlzdGVuZXIgaGFkIGJlIHJlZ2lzdGVyZWQgcHJvcGVybHksXG4gICAqIGFuZCBpbiB0aGUgY2FsbGJhY2sgYHByb2R1Y3QuZmluaXNoKClgIHNob3VsZCBiZSBjYWxsZWQuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVmcmVzaCgpOiBJUmVmZXNoUmVzdWx0IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKiogTGlnaHR3ZWlnaHQgbWV0aG9kIGxpa2UgcmVmcmVzaCBidXQgZG8gbm90IHJlbG9naW4gdXNlciAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdXBkYXRlKCk6IHZvaWQge31cblxuICAvKiogT3BlbnMgdGhlIE1hbmFnZSBTdWJzY3JpcHRpb24gcGFnZSAoQXBwU3RvcmUsIFBsYXksIE1pY3Jvc29mdCwgLi4uKS4gKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIG1hbmFnZVN1YnNjcmlwdGlvbnMoKTogdm9pZCB7fVxuXG4gIC8qKiBPcGVucyB0aGUgQ29kZSBSZWRlbXB0aW9uIFNoZWV0IG9uIGlPUy4gKEFwcFN0b3JlKS4gKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlZGVlbSgpOiB2b2lkIHt9XG59XG4iXX0=