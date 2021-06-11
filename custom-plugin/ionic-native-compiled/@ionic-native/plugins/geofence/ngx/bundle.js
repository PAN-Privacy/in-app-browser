'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
var rxjs = require('rxjs');

var Geofence = /** @class */ (function (_super) {
    tslib.__extends(Geofence, _super);
    function Geofence() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TransitionType = {
            ENTER: 1,
            EXIT: 2,
            BOTH: 3,
        };
        return _this;
    }
    Geofence.prototype.onTransitionReceived = function () { return core.cordovaFunctionOverride(this, "onTransitionReceived", {}, arguments); };
    Geofence.prototype.initialize = function () { return core.cordova(this, "initialize", {}, arguments); };
    Geofence.prototype.addOrUpdate = function (geofences) { return core.cordova(this, "addOrUpdate", {}, arguments); };
    Geofence.prototype.remove = function (geofenceId) { return core.cordova(this, "remove", {}, arguments); };
    Geofence.prototype.removeAll = function () { return core.cordova(this, "removeAll", {}, arguments); };
    Geofence.prototype.getWatched = function () { return core.cordova(this, "getWatched", {}, arguments); };
    /**
     * Called when the user clicks a geofence notification. iOS and Android only.
     *
     * @returns {Observable<any>}
     */
    Geofence.prototype.onNotificationClicked = function () {
        return new rxjs.Observable(function (observer) {
            typeof window !== 'undefined' &&
                window.geofence &&
                (window.geofence.onNotificationClicked = observer.next.bind(observer));
            return function () { return (window.geofence.onNotificationClicked = function () { }); };
        });
    };
    Geofence.pluginName = "Geofence";
    Geofence.plugin = "cordova-plugin-geofence";
    Geofence.pluginRef = "geofence";
    Geofence.repo = "https://github.com/cowbell/cordova-plugin-geofence";
    Geofence.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    Geofence.decorators = [
        { type: core$1.Injectable }
    ];
    return Geofence;
}(core.IonicNativePlugin));

exports.Geofence = Geofence;
