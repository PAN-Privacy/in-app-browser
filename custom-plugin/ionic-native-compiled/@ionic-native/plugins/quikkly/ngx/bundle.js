'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var QuikklyPlugin = /** @class */ (function (_super) {
    tslib.__extends(QuikklyPlugin, _super);
    function QuikklyPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuikklyPlugin.prototype.openScanner = function () { return core.cordova(this, "openScanner", {}, arguments); };
    QuikklyPlugin.pluginName = "QuikklyPlugin";
    QuikklyPlugin.plugin = "cordova-plugin-quikkly";
    QuikklyPlugin.pluginRef = "cordova.plugins.quikkly";
    QuikklyPlugin.repo = "https://github.com/quikkly/cordova-plugin-quikkly.git";
    QuikklyPlugin.platforms = ["Android", "iOS"];
    QuikklyPlugin.decorators = [
        { type: core$1.Injectable }
    ];
    return QuikklyPlugin;
}(core.IonicNativePlugin));

exports.QuikklyPlugin = QuikklyPlugin;
