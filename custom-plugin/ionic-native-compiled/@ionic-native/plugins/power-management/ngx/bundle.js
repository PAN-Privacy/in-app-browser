'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var PowerManagement = /** @class */ (function (_super) {
    tslib.__extends(PowerManagement, _super);
    function PowerManagement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PowerManagement.prototype.acquire = function () { return core.cordova(this, "acquire", {}, arguments); };
    PowerManagement.prototype.dim = function () { return core.cordova(this, "dim", {}, arguments); };
    PowerManagement.prototype.release = function () { return core.cordova(this, "release", {}, arguments); };
    PowerManagement.prototype.setReleaseOnPause = function (set) { return core.cordova(this, "setReleaseOnPause", {}, arguments); };
    PowerManagement.pluginName = "PowerManagement";
    PowerManagement.plugin = "cordova-plugin-powermanagement-orig";
    PowerManagement.pluginRef = "powerManagement";
    PowerManagement.repo = "https://github.com/Viras-/cordova-plugin-powermanagement";
    PowerManagement.platforms = ["Android", "iOS", "Windows", "Windows Phone"];
    PowerManagement.decorators = [
        { type: core$1.Injectable }
    ];
    return PowerManagement;
}(core.IonicNativePlugin));

exports.PowerManagement = PowerManagement;
