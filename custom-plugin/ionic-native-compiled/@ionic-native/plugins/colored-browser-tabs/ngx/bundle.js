'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
require('rxjs');

var ColoredBrowserTabs = /** @class */ (function (_super) {
    tslib.__extends(ColoredBrowserTabs, _super);
    function ColoredBrowserTabs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColoredBrowserTabs.prototype.openTab = function (url, color) { return core.cordova(this, "openTab", { "observable": true, "successIndex": 2, "errorIndex": 3 }, arguments); };
    ColoredBrowserTabs.prototype.openTabWithAnimation = function (url, anim, color) { return core.cordova(this, "openTabWithAnimation", { "observable": true, "successIndex": 3, "errorIndex": 4 }, arguments); };
    ColoredBrowserTabs.pluginName = "ColoredBrowserTabs";
    ColoredBrowserTabs.plugin = "cordova-plugin-colored-browser-tabs";
    ColoredBrowserTabs.pluginRef = "ColoredBrowserTabs";
    ColoredBrowserTabs.repo = "https://github.com/TobyEb/cordova-plugin-colored-browser-tabs";
    ColoredBrowserTabs.platforms = ["Android", "iOS"];
    ColoredBrowserTabs.decorators = [
        { type: core$1.Injectable }
    ];
    return ColoredBrowserTabs;
}(core.IonicNativePlugin));

exports.ColoredBrowserTabs = ColoredBrowserTabs;
