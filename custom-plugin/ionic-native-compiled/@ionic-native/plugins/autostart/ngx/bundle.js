'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Autostart = /** @class */ (function (_super) {
    tslib.__extends(Autostart, _super);
    function Autostart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Autostart.prototype.enable = function () { return core.cordova(this, "enable", { "sync": true }, arguments); };
    Autostart.prototype.disable = function () { return core.cordova(this, "disable", { "sync": true }, arguments); };
    Autostart.pluginName = "Autostart";
    Autostart.plugin = "cordova-plugin-autostart";
    Autostart.pluginRef = "cordova.plugins.autoStart";
    Autostart.repo = "https://github.com/ToniKorin/cordova-plugin-autostart";
    Autostart.platforms = ["Android"];
    Autostart.decorators = [
        { type: core$1.Injectable }
    ];
    return Autostart;
}(core.IonicNativePlugin));

exports.Autostart = Autostart;
