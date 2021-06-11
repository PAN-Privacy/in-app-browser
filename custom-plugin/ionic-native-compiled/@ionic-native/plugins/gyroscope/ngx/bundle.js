'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@ionic-native/core');
var rxjs = require('rxjs');
var core$1 = require('@angular/core');

var Gyroscope = /** @class */ (function (_super) {
    tslib.__extends(Gyroscope, _super);
    function Gyroscope() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Watching for gyroscope sensor changes
     * @param {GyroscopeOptions} [options]
     * @return {Observable<GyroscopeOrientation>} Returns an Observable that resolves GyroscopeOrientation
     */
    Gyroscope.prototype.watch = function (options) {
        return new rxjs.Observable(function (observer) {
            var watchId = navigator.gyroscope.watch(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.gyroscope.clearWatch(watchId); };
        });
    };
    Gyroscope.prototype.getCurrent = function (options) { return core.cordova(this, "getCurrent", { "callbackOrder": "reverse" }, arguments); };
    Gyroscope.pluginName = "Gyroscope";
    Gyroscope.plugin = "cordova-plugin-gyroscope";
    Gyroscope.pluginRef = "navigator.gyroscope";
    Gyroscope.repo = "https://github.com/NeoLSN/cordova-plugin-gyroscope";
    Gyroscope.platforms = ["Android", "iOS"];
    Gyroscope.decorators = [
        { type: core$1.Injectable }
    ];
    return Gyroscope;
}(core.IonicNativePlugin));

exports.Gyroscope = Gyroscope;
