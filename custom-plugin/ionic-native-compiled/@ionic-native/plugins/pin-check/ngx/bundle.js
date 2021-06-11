'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@ionic-native/core');
var core$1 = require('@angular/core');

var PinCheck = /** @class */ (function (_super) {
    tslib.__extends(PinCheck, _super);
    function PinCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PinCheck.prototype.isPinSetup = function () { return core.cordova(this, "isPinSetup", {}, arguments); };
    PinCheck.pluginName = "PinCheck";
    PinCheck.plugin = "cordova-plugin-pincheck";
    PinCheck.pluginRef = "cordova.plugins.PinCheck";
    PinCheck.repo = "https://github.com/shangyilim/cordova-plugin-pincheck";
    PinCheck.platforms = ["Android", "iOS"];
    PinCheck.decorators = [
        { type: core$1.Injectable }
    ];
    return PinCheck;
}(core.IonicNativePlugin));

exports.PinCheck = PinCheck;
