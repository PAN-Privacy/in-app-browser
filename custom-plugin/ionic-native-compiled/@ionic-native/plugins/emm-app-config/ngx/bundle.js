'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
require('rxjs');

var EmmAppConfig = /** @class */ (function (_super) {
    tslib.__extends(EmmAppConfig, _super);
    function EmmAppConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmmAppConfig.prototype.getValue = function (configKey) { return core.cordova(this, "getValue", { "sync": true }, arguments); };
    EmmAppConfig.prototype.registerChangedListener = function () { return core.cordova(this, "registerChangedListener", { "observable": true }, arguments); };
    EmmAppConfig.platforms = ["Android", "iOS"];
    EmmAppConfig.plugin = "cordova-plugin-emm-app-config";
    EmmAppConfig.pluginName = "EmmAppConfig";
    EmmAppConfig.pluginRef = "cordova.plugins.EmmAppConfig";
    EmmAppConfig.repo = "https://github.com/oracle/cordova-plugin-emm-app-config";
    EmmAppConfig.decorators = [
        { type: core$1.Injectable }
    ];
    return EmmAppConfig;
}(core.IonicNativePlugin));

exports.EmmAppConfig = EmmAppConfig;
