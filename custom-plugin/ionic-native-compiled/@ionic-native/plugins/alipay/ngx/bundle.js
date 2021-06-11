'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Alipay = /** @class */ (function (_super) {
    tslib.__extends(Alipay, _super);
    function Alipay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Alipay.prototype.pay = function (order, success, error) { return core.cordova(this, "pay", {}, arguments); };
    Alipay.pluginName = "Alipay";
    Alipay.plugin = "cordova-plugin-gubnoi-alipay";
    Alipay.pluginRef = "cordova.plugins.alipay";
    Alipay.repo = "https://github.com/jing-zhou/cordova-plugin-alipay";
    Alipay.install = "ionic cordova plugin add cordova-plugin-gubnoi-alipay --variable APP_ID=your_app_id";
    Alipay.installVariables = ["APP_ID"];
    Alipay.platforms = ["Android", "iOS"];
    Alipay.decorators = [
        { type: core$1.Injectable }
    ];
    return Alipay;
}(core.IonicNativePlugin));

exports.Alipay = Alipay;
