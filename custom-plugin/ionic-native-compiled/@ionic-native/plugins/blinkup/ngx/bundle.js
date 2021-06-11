'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@ionic-native/core');
require('rxjs');
var core$1 = require('@angular/core');

var BlinkUp = /** @class */ (function (_super) {
    tslib.__extends(BlinkUp, _super);
    function BlinkUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlinkUp.prototype.startBlinkUp = function (options) { return core.cordova(this, "startBlinkUp", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BlinkUp.prototype.flashWifiBlinkUp = function (options) { return core.cordova(this, "flashWifiBlinkUp", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BlinkUp.prototype.flashWPSBlinkUp = function (options) { return core.cordova(this, "flashWPSBlinkUp", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BlinkUp.prototype.abortBlinkUp = function () { return core.cordova(this, "abortBlinkUp", { "observable": true }, arguments); };
    BlinkUp.prototype.clearBlinkUpData = function () { return core.cordova(this, "clearBlinkUpData", { "observable": true }, arguments); };
    BlinkUp.pluginName = "BlinkUp";
    BlinkUp.plugin = "cordova-plugin-blinkup";
    BlinkUp.pluginRef = "blinkup";
    BlinkUp.repo = "https://github.com/SensorShare/cordova-plugin-blinkup";
    BlinkUp.platforms = ["Android", "iOS"];
    BlinkUp.decorators = [
        { type: core$1.Injectable }
    ];
    return BlinkUp;
}(core.IonicNativePlugin));

exports.BlinkUp = BlinkUp;
