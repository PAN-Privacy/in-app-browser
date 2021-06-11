'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var HCE = /** @class */ (function (_super) {
    tslib.__extends(HCE, _super);
    function HCE() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HCE.prototype.registerCommandCallback = function (onCommand, fail) { return core.cordova(this, "registerCommandCallback", {}, arguments); };
    HCE.prototype.registerDeactivatedCallback = function (ok, fail) { return core.cordova(this, "registerDeactivatedCallback", {}, arguments); };
    HCE.prototype.sendResponse = function (response, success, failure) { return core.cordova(this, "sendResponse", {}, arguments); };
    HCE.pluginName = "hce";
    HCE.plugin = "cordova-plugin-hce";
    HCE.pluginRef = "hce";
    HCE.repo = "https://github.com/don/cordova-plugin-hce";
    HCE.install = "";
    HCE.installVariables = ["AID_FILTER"];
    HCE.platforms = ["Android"];
    HCE.decorators = [
        { type: core$1.Injectable }
    ];
    return HCE;
}(core.IonicNativePlugin));

exports.HCE = HCE;
