'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Brightness = /** @class */ (function (_super) {
    tslib.__extends(Brightness, _super);
    function Brightness() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Brightness.prototype.setBrightness = function (value) { return core.cordova(this, "setBrightness", {}, arguments); };
    Brightness.prototype.getBrightness = function () { return core.cordova(this, "getBrightness", {}, arguments); };
    Brightness.prototype.setKeepScreenOn = function (value) { return core.cordova(this, "setKeepScreenOn", {}, arguments); };
    Brightness.pluginName = "Brightness";
    Brightness.plugin = "cordova-plugin-brightness";
    Brightness.pluginRef = "cordova.plugins.brightness";
    Brightness.repo = "https://github.com/mgcrea/cordova-plugin-brightness";
    Brightness.platforms = ["Android", "iOS"];
    Brightness.decorators = [
        { type: core$1.Injectable }
    ];
    return Brightness;
}(core.IonicNativePlugin));

exports.Brightness = Brightness;
