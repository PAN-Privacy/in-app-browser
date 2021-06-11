'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var DeviceFeedback = /** @class */ (function (_super) {
    tslib.__extends(DeviceFeedback, _super);
    function DeviceFeedback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceFeedback.prototype.acoustic = function () { return core.cordova(this, "acoustic", { "sync": true }, arguments); };
    DeviceFeedback.prototype.haptic = function (type) { return core.cordova(this, "haptic", { "sync": true }, arguments); };
    DeviceFeedback.prototype.isFeedbackEnabled = function () { return core.cordova(this, "isFeedbackEnabled", {}, arguments); };
    DeviceFeedback.pluginName = "DeviceFeedback";
    DeviceFeedback.plugin = "cordova-plugin-velda-devicefeedback";
    DeviceFeedback.pluginRef = "plugins.deviceFeedback";
    DeviceFeedback.repo = "https://github.com/VVelda/device-feedback";
    DeviceFeedback.platforms = ["Android"];
    DeviceFeedback.decorators = [
        { type: core$1.Injectable }
    ];
    return DeviceFeedback;
}(core.IonicNativePlugin));

exports.DeviceFeedback = DeviceFeedback;
