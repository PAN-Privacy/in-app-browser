'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@ionic-native/core');
var core$1 = require('@angular/core');

var Tealium = /** @class */ (function (_super) {
    tslib.__extends(Tealium, _super);
    function Tealium() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tealium.prototype.init = function (config) { return core.cordova(this, "init", {}, arguments); };
    Tealium.prototype.trackView = function (dataObject, instanceName) { return core.cordova(this, "trackView", {}, arguments); };
    Tealium.prototype.trackEvent = function (dataObject, instanceName) { return core.cordova(this, "trackEvent", {}, arguments); };
    Tealium.prototype.track = function (eventType, dataObject, instanceName) { return core.cordova(this, "track", {}, arguments); };
    Tealium.prototype.addPersistent = function (keyName, value, instanceName) { return core.cordova(this, "addPersistent", {}, arguments); };
    Tealium.prototype.addVolatile = function (keyName, value, instanceName) { return core.cordova(this, "addVolatile", {}, arguments); };
    Tealium.prototype.removeVolatile = function (keyName, instanceName) { return core.cordova(this, "removeVolatile", {}, arguments); };
    Tealium.prototype.removePersistent = function (keyName, instanceName) { return core.cordova(this, "removePersistent", {}, arguments); };
    Tealium.prototype.getPersistent = function (keyName, instanceName, callback) { return core.cordova(this, "getPersistent", {}, arguments); };
    Tealium.prototype.getVolatile = function (keyName, instanceName, callback) { return core.cordova(this, "getVolatile", {}, arguments); };
    Tealium.prototype.addRemoteCommand = function (commandName, instanceName, callback) { return core.cordova(this, "addRemoteCommand", {}, arguments); };
    Tealium.prototype.getVisitorId = function () { return core.cordova(this, "getVisitorId", {}, arguments); };
    Tealium.pluginName = "Tealium";
    Tealium.plugin = "tealium-cordova-plugin";
    Tealium.pluginRef = "window.tealium";
    Tealium.repo = "https://github.com/Tealium/cordova-plugin";
    Tealium.platforms = ["Android", "iOS"];
    Tealium.install = "";
    Tealium.decorators = [
        { type: core$1.Injectable }
    ];
    return Tealium;
}(core.IonicNativePlugin));

exports.Tealium = Tealium;
