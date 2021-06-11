'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var ShopCheckout = /** @class */ (function (_super) {
    tslib.__extends(ShopCheckout, _super);
    function ShopCheckout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShopCheckout.prototype.registerAgent = function (options) { return core.cordova(this, "registerAgent", {}, arguments); };
    ShopCheckout.prototype.openProducts = function (options) { return core.cordova(this, "openProducts", {}, arguments); };
    ShopCheckout.prototype.openTransactions = function (options) { return core.cordova(this, "openTransactions", {}, arguments); };
    ShopCheckout.prototype.logout = function (options) { return core.cordova(this, "logout", {}, arguments); };
    ShopCheckout.prototype.isInitialized = function () { return core.cordova(this, "isInitialized", {}, arguments); };
    ShopCheckout.pluginName = "ShopCheckout";
    ShopCheckout.plugin = "cordova-plugin-shop-checkout";
    ShopCheckout.pluginRef = "shopCheckout";
    ShopCheckout.repo = "https://github.com/tradedepot/cordova-shop-checkout";
    ShopCheckout.platforms = ["Android"];
    ShopCheckout.decorators = [
        { type: core$1.Injectable }
    ];
    return ShopCheckout;
}(core.IonicNativePlugin));

exports.ShopCheckout = ShopCheckout;
