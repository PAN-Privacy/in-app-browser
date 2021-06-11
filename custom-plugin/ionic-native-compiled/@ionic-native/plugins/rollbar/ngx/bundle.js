'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Rollbar = /** @class */ (function (_super) {
    tslib.__extends(Rollbar, _super);
    function Rollbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rollbar.prototype.init = function () { return core.cordova(this, "init", {}, arguments); };
    Rollbar.pluginName = "Rollbar";
    Rollbar.plugin = "resgrid-cordova-plugins-rollbar";
    Rollbar.pluginRef = "cordova.plugins.Rollbar";
    Rollbar.repo = "https://github.com/Resgrid/cordova-plugins-rollbar";
    Rollbar.install = "ionic cordova plugin add resgrid-cordova-plugins-rollbar --variable ROLLBAR_ACCESS_TOKEN=\"YOUR_ROLLBAR_ACCEESS_TOKEN\" --variable ROLLBAR_ENVIRONMENT=\"ROLLBAR_ENVIRONMENT\"";
    Rollbar.installVariables = ["ROLLBAR_ACCESS_TOKEN", "ROLLBAR_ENVIRONMENT"];
    Rollbar.platforms = ["Android", "iOS"];
    Rollbar.decorators = [
        { type: core$1.Injectable }
    ];
    return Rollbar;
}(core.IonicNativePlugin));

exports.Rollbar = Rollbar;
