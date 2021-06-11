'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Sensors = /** @class */ (function (_super) {
    tslib.__extends(Sensors, _super);
    function Sensors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sensors.prototype.enableSensor = function (TYPE_SENSOR) { return core.cordova(this, "enableSensor", {}, arguments); };
    Sensors.prototype.disableSensor = function () { return core.cordova(this, "disableSensor", {}, arguments); };
    Sensors.prototype.getState = function () { return core.cordova(this, "getState", {}, arguments); };
    Sensors.pluginName = "Sensors";
    Sensors.plugin = "https://github.com/fabiorogeriosj/cordova-plugin-sensors.git";
    Sensors.pluginRef = "sensors";
    Sensors.repo = "https://github.com/fabiorogeriosj/cordova-plugin-sensors.git";
    Sensors.platforms = ["Android"];
    Sensors.decorators = [
        { type: core$1.Injectable }
    ];
    return Sensors;
}(core.IonicNativePlugin));

exports.Sensors = Sensors;
