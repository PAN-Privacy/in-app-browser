'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@ionic-native/core');
var core$1 = require('@angular/core');

var NativeRingtones = /** @class */ (function (_super) {
    tslib.__extends(NativeRingtones, _super);
    function NativeRingtones() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeRingtones.prototype.getRingtone = function () { return core.cordova(this, "getRingtone", {}, arguments); };
    NativeRingtones.prototype.playRingtone = function (ringtoneUri) { return core.cordova(this, "playRingtone", {}, arguments); };
    NativeRingtones.prototype.stopRingtone = function (ringtoneUri) { return core.cordova(this, "stopRingtone", {}, arguments); };
    NativeRingtones.pluginName = "native-ringtones";
    NativeRingtones.plugin = "cordova-plugin-native-ringtones";
    NativeRingtones.pluginRef = "cordova.plugins.NativeRingtones";
    NativeRingtones.repo = "https://github.com/TongZhangzt/cordova-plugin-native-ringtones";
    NativeRingtones.platforms = ["Android", "iOS"];
    NativeRingtones.decorators = [
        { type: core$1.Injectable }
    ];
    return NativeRingtones;
}(core.IonicNativePlugin));

exports.NativeRingtones = NativeRingtones;
