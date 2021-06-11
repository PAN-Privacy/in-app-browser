'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
var rxjs = require('rxjs');

var JinsMeme = /** @class */ (function (_super) {
    tslib.__extends(JinsMeme, _super);
    function JinsMeme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JinsMeme.prototype.setAppClientID = function (appClientId, clientSecret) { return core.cordova(this, "setAppClientID", {}, arguments); };
    JinsMeme.prototype.startScan = function () { return core.cordova(this, "startScan", { "observable": true, "clearFunction": "stopScan", "clearWithArgs": true }, arguments); };
    JinsMeme.prototype.stopScan = function () { return core.cordova(this, "stopScan", {}, arguments); };
    JinsMeme.prototype.connect = function (target) {
        var _this = this;
        return (function () {
            if (core.checkAvailability(_this) === true) {
                return new rxjs.Observable(function (observer) {
                    var data = core.cordova.plugins.JinsMemePlugin.connect(target, observer.next.bind(observer), observer.complete.bind(observer), observer.error.bind(observer));
                    return data;
                });
            }
        })();
    };
    JinsMeme.prototype.setAutoConnect = function (flag) { return core.cordova(this, "setAutoConnect", {}, arguments); };
    JinsMeme.prototype.isConnected = function () { return core.cordova(this, "isConnected", {}, arguments); };
    JinsMeme.prototype.disconnect = function () { return core.cordova(this, "disconnect", {}, arguments); };
    JinsMeme.prototype.startDataReport = function () { return core.cordova(this, "startDataReport", { "observable": true, "clearFunction": "stopDataReport", "clearWithArgs": true }, arguments); };
    JinsMeme.prototype.stopDataReport = function () { return core.cordova(this, "stopDataReport", {}, arguments); };
    JinsMeme.prototype.getSDKVersion = function () { return core.cordova(this, "getSDKVersion", {}, arguments); };
    JinsMeme.prototype.getConnectedByOthers = function () { return core.cordova(this, "getConnectedByOthers", {}, arguments); };
    JinsMeme.prototype.isCalibrated = function () { return core.cordova(this, "isCalibrated", {}, arguments); };
    JinsMeme.prototype.getConnectedDeviceType = function () { return core.cordova(this, "getConnectedDeviceType", {}, arguments); };
    JinsMeme.prototype.getConnectedDeviceSubType = function () { return core.cordova(this, "getConnectedDeviceSubType", {}, arguments); };
    JinsMeme.prototype.getFWVersion = function () { return core.cordova(this, "getFWVersion", {}, arguments); };
    JinsMeme.prototype.getHWVersion = function () { return core.cordova(this, "getHWVersion", {}, arguments); };
    JinsMeme.prototype.isDataReceiving = function () { return core.cordova(this, "isDataReceiving", {}, arguments); };
    JinsMeme.pluginName = "JINS MEME";
    JinsMeme.plugin = "cordova-plugin-jins-meme";
    JinsMeme.pluginRef = "JinsMemePlugin";
    JinsMeme.repo = "https://github.com/BlyncSync/cordova-plugin-jins-meme";
    JinsMeme.platforms = ["Android", "iOS"];
    JinsMeme.decorators = [
        { type: core$1.Injectable }
    ];
    return JinsMeme;
}(core.IonicNativePlugin));

exports.JinsMeme = JinsMeme;
