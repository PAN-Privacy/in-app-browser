'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
require('rxjs');

var Serial = /** @class */ (function (_super) {
    tslib.__extends(Serial, _super);
    function Serial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Serial.prototype.requestPermission = function (options) { return core.cordova(this, "requestPermission", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Serial.prototype.open = function (options) { return core.cordova(this, "open", {}, arguments); };
    Serial.prototype.write = function (data) { return core.cordova(this, "write", {}, arguments); };
    Serial.prototype.writeHex = function (data) { return core.cordova(this, "writeHex", {}, arguments); };
    Serial.prototype.read = function () { return core.cordova(this, "read", {}, arguments); };
    Serial.prototype.registerReadCallback = function () { return core.cordova(this, "registerReadCallback", { "observable": true }, arguments); };
    Serial.prototype.close = function () { return core.cordova(this, "close", {}, arguments); };
    Serial.pluginName = "Serial";
    Serial.plugin = "cordovarduino";
    Serial.pluginRef = "serial";
    Serial.repo = "https://github.com/xseignard/cordovarduino";
    Serial.platforms = ["Android", "Ubuntu"];
    Serial.decorators = [
        { type: core$1.Injectable }
    ];
    return Serial;
}(core.IonicNativePlugin));

exports.Serial = Serial;
