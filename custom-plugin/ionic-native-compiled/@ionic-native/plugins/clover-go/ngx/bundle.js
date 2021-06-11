'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var CloverGo = /** @class */ (function (_super) {
    tslib.__extends(CloverGo, _super);
    function CloverGo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloverGo.prototype.init = function (configuration) { return core.cordova(this, "init", {}, arguments); };
    CloverGo.prototype.connect = function () { return core.cordova(this, "connect", {}, arguments); };
    CloverGo.prototype.disconnect = function () { return core.cordova(this, "disconnect", {}, arguments); };
    CloverGo.prototype.sale = function (saleInfo) { return core.cordova(this, "sale", {}, arguments); };
    CloverGo.prototype.sign = function (signInfo) { return core.cordova(this, "sign", {}, arguments); };
    CloverGo.prototype.voidPayment = function (paymentInfo) { return core.cordova(this, "voidPayment", {}, arguments); };
    CloverGo.pluginName = "CloverGo";
    CloverGo.plugin = "cordova-plugin-clovergo";
    CloverGo.pluginRef = "clovergo";
    CloverGo.repo = "https://github.com/hotwax/cordova-plugin-clovergo";
    CloverGo.install = "ionic plugin add cordova-plugin-clovergo";
    CloverGo.platforms = ["Android"];
    CloverGo.decorators = [
        { type: core$1.Injectable }
    ];
    return CloverGo;
}(core.IonicNativePlugin));

exports.CloverGo = CloverGo;
