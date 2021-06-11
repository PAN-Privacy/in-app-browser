'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
require('rxjs');

var LastCam = /** @class */ (function (_super) {
    tslib.__extends(LastCam, _super);
    function LastCam() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LastCam.prototype.startCamera = function (options) { return core.cordova(this, "startCamera", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    LastCam.prototype.stopCamera = function () { return core.cordova(this, "stopCamera", {}, arguments); };
    LastCam.prototype.switchCamera = function () { return core.cordova(this, "switchCamera", {}, arguments); };
    LastCam.prototype.switchFlash = function () { return core.cordova(this, "switchFlash", {}, arguments); };
    LastCam.prototype.takePicture = function () { return core.cordova(this, "takePicture", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    LastCam.prototype.startVideoCapture = function () { return core.cordova(this, "startVideoCapture", {}, arguments); };
    LastCam.prototype.stopVideoCapture = function () { return core.cordova(this, "stopVideoCapture", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    LastCam.prototype.recordingTimer = function () { return core.cordova(this, "recordingTimer", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    LastCam.prototype.watchRecordingTimer = function () { return core.cordova(this, "watchRecordingTimer", { "successIndex": 0, "errorIndex": 1, "observable": true }, arguments); };
    LastCam.pluginName = "LastCam";
    LastCam.plugin = "cordova-plugin-last-cam";
    LastCam.pluginRef = "LastCam";
    LastCam.repo = "https://github.com/bengejd/cordova-plugin-last-cam";
    LastCam.platforms = ["iOS"];
    LastCam.decorators = [
        { type: core$1.Injectable }
    ];
    return LastCam;
}(core.IonicNativePlugin));

exports.LastCam = LastCam;
