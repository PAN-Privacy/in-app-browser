'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Stepcounter = /** @class */ (function (_super) {
    tslib.__extends(Stepcounter, _super);
    function Stepcounter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stepcounter.prototype.start = function (startingOffset) { return core.cordova(this, "start", {}, arguments); };
    Stepcounter.prototype.stop = function () { return core.cordova(this, "stop", {}, arguments); };
    Stepcounter.prototype.getTodayStepCount = function () { return core.cordova(this, "getTodayStepCount", {}, arguments); };
    Stepcounter.prototype.getStepCount = function () { return core.cordova(this, "getStepCount", {}, arguments); };
    Stepcounter.prototype.deviceCanCountSteps = function () { return core.cordova(this, "deviceCanCountSteps", {}, arguments); };
    Stepcounter.prototype.getHistory = function () { return core.cordova(this, "getHistory", {}, arguments); };
    Stepcounter.pluginName = "Stepcounter";
    Stepcounter.plugin = "cordova-plugin-stepcounter";
    Stepcounter.pluginRef = "stepcounter";
    Stepcounter.repo = "https://github.com/ihadeed/cordova-plugin-stepcounter";
    Stepcounter.platforms = ["Android"];
    Stepcounter.decorators = [
        { type: core$1.Injectable }
    ];
    return Stepcounter;
}(core.IonicNativePlugin));

exports.Stepcounter = Stepcounter;
