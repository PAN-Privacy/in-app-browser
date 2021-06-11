'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
require('rxjs');

var DBMeter = /** @class */ (function (_super) {
    tslib.__extends(DBMeter, _super);
    function DBMeter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DBMeter.prototype.start = function () { return core.cordova(this, "start", { "observable": true, "clearFunction": "stop" }, arguments); };
    DBMeter.prototype.stop = function () { return core.cordova(this, "stop", {}, arguments); };
    DBMeter.prototype.isListening = function () { return core.cordova(this, "isListening", {}, arguments); };
    DBMeter.prototype.delete = function () { return core.cordova(this, "delete", {}, arguments); };
    DBMeter.pluginName = "DBMeter";
    DBMeter.plugin = "cordova-plugin-dbmeter";
    DBMeter.pluginRef = "DBMeter";
    DBMeter.repo = "https://github.com/akofman/cordova-plugin-dbmeter";
    DBMeter.platforms = ["Android", "iOS"];
    DBMeter.decorators = [
        { type: core$1.Injectable }
    ];
    return DBMeter;
}(core.IonicNativePlugin));

exports.DBMeter = DBMeter;
