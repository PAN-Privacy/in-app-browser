'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Braintree = /** @class */ (function (_super) {
    tslib.__extends(Braintree, _super);
    function Braintree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Braintree.prototype.initialize = function (token) { return core.cordova(this, "initialize", { "platforms": ["Android", "iOS"] }, arguments); };
    Braintree.prototype.setupApplePay = function (options) { return core.cordova(this, "setupApplePay", { "platforms": ["iOS"] }, arguments); };
    Braintree.prototype.presentDropInPaymentUI = function (options) { return core.cordova(this, "presentDropInPaymentUI", { "platforms": ["Android", "iOS"] }, arguments); };
    Braintree.pluginName = "Braintree";
    Braintree.plugin = "cordova-plugin-braintree";
    Braintree.pluginRef = "BraintreePlugin";
    Braintree.repo = "https://github.com/taracque/cordova-plugin-braintree";
    Braintree.platforms = ["Android", "iOS"];
    Braintree.install = "ionic cordova plugin add https://github.com/taracque/cordova-plugin-braintree";
    Braintree.installVariables = [];
    Braintree.decorators = [
        { type: core$1.Injectable }
    ];
    return Braintree;
}(core.IonicNativePlugin));

exports.Braintree = Braintree;
