'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Restart = /** @class */ (function (_super) {
    tslib.__extends(Restart, _super);
    function Restart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Restart.prototype.restart = function (cold) { return core.cordova(this, "restart", { "errorIndex": 0, "successIndex": 2 }, arguments); };
    Restart.prototype.enableDebug = function () { return core.cordova(this, "enableDebug", { "errorIndex": 0 }, arguments); };
    Restart.pluginName = "Restart";
    Restart.plugin = "cordova-plugin-restart";
    Restart.pluginRef = "RestartPlugin";
    Restart.repo = "https://github.com/MaximBelov/cordova-plugin-restart";
    Restart.install = "ionic cordova plugin add cordova-plugin-restart";
    Restart.platforms = ["Android"];
    Restart.decorators = [
        { type: core$1.Injectable }
    ];
    return Restart;
}(core.IonicNativePlugin));

exports.Restart = Restart;
