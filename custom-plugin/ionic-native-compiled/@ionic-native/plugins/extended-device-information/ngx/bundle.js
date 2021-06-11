'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var ExtendedDeviceInformation = /** @class */ (function (_super) {
    tslib.__extends(ExtendedDeviceInformation, _super);
    function ExtendedDeviceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ExtendedDeviceInformation.prototype, "memory", {
        get: function () { return core.cordovaPropertyGet(this, "memory"); },
        set: function (value) { core.cordovaPropertySet(this, "memory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendedDeviceInformation.prototype, "cpumhz", {
        get: function () { return core.cordovaPropertyGet(this, "cpumhz"); },
        set: function (value) { core.cordovaPropertySet(this, "cpumhz", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendedDeviceInformation.prototype, "totalstorage", {
        get: function () { return core.cordovaPropertyGet(this, "totalstorage"); },
        set: function (value) { core.cordovaPropertySet(this, "totalstorage", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendedDeviceInformation.prototype, "freestorage", {
        get: function () { return core.cordovaPropertyGet(this, "freestorage"); },
        set: function (value) { core.cordovaPropertySet(this, "freestorage", value); },
        enumerable: false,
        configurable: true
    });
    ExtendedDeviceInformation.pluginName = "ExtendedDeviceInformation";
    ExtendedDeviceInformation.plugin = "cordova-plugin-extended-device-information";
    ExtendedDeviceInformation.pluginRef = "extended-device-information";
    ExtendedDeviceInformation.repo = "https://github.com/danielehrhardt/cordova-plugin-extended-device-information";
    ExtendedDeviceInformation.platforms = ["Android"];
    ExtendedDeviceInformation.decorators = [
        { type: core$1.Injectable }
    ];
    return ExtendedDeviceInformation;
}(core.IonicNativePlugin));

exports.ExtendedDeviceInformation = ExtendedDeviceInformation;
