'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var CallLog = /** @class */ (function (_super) {
    tslib.__extends(CallLog, _super);
    function CallLog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallLog.prototype.getCallLog = function (filters) { return core.cordova(this, "getCallLog", {}, arguments); };
    CallLog.prototype.hasReadPermission = function () { return core.cordova(this, "hasReadPermission", { "platforms": ["Android"] }, arguments); };
    CallLog.prototype.requestReadPermission = function () { return core.cordova(this, "requestReadPermission", { "platforms": ["Android"] }, arguments); };
    CallLog.pluginName = "CallLog";
    CallLog.plugin = "cordova-plugin-calllog";
    CallLog.pluginRef = "plugins.callLog";
    CallLog.repo = "https://github.com/creacore-team/cordova-plugin-calllog";
    CallLog.platforms = ["Android"];
    CallLog.decorators = [
        { type: core$1.Injectable }
    ];
    return CallLog;
}(core.IonicNativePlugin));

exports.CallLog = CallLog;
