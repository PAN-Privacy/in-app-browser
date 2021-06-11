'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var AppUpdate = /** @class */ (function (_super) {
    tslib.__extends(AppUpdate, _super);
    function AppUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppUpdate.prototype.checkAppUpdate = function (updateUrl, options) { return core.cordova(this, "checkAppUpdate", { "callbackOrder": "reverse" }, arguments); };
    AppUpdate.pluginName = "AppUpdate";
    AppUpdate.plugin = "cordova-plugin-app-update";
    AppUpdate.pluginRef = "AppUpdate";
    AppUpdate.repo = "https://github.com/vaenow/cordova-plugin-app-update";
    AppUpdate.platforms = ["Android"];
    AppUpdate.decorators = [
        { type: core$1.Injectable }
    ];
    return AppUpdate;
}(core.IonicNativePlugin));

exports.AppUpdate = AppUpdate;
