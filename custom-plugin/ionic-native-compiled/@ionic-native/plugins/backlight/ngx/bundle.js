'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Backlight = /** @class */ (function (_super) {
    tslib.__extends(Backlight, _super);
    function Backlight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Backlight.prototype.on = function () { return core.cordova(this, "on", {}, arguments); };
    Backlight.prototype.off = function () { return core.cordova(this, "off", {}, arguments); };
    Backlight.pluginName = "Backlight";
    Backlight.plugin = "cordova-plugin-backlight";
    Backlight.pluginRef = "cordova.plugins.Backlight";
    Backlight.repo = "https://github.com/mebibou/cordova-plugin-backlight";
    Backlight.platforms = ["Android"];
    Backlight.decorators = [
        { type: core$1.Injectable }
    ];
    return Backlight;
}(core.IonicNativePlugin));

exports.Backlight = Backlight;
