'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var NavigationBar = /** @class */ (function (_super) {
    tslib.__extends(NavigationBar, _super);
    function NavigationBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationBar.prototype.setUp = function (autohide) { return core.cordova(this, "setUp", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    NavigationBar.prototype.hideNavigationBar = function () { return core.cordova(this, "hideNavigationBar", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    NavigationBar.pluginName = "NavigationBar";
    NavigationBar.plugin = "cordova-plugin-navigationbar";
    NavigationBar.pluginRef = "navigationbar";
    NavigationBar.repo = "https://github.com/cranberrygame/cordova-plugin-navigationbar";
    NavigationBar.platforms = ["Android"];
    NavigationBar.decorators = [
        { type: core$1.Injectable }
    ];
    return NavigationBar;
}(core.IonicNativePlugin));

exports.NavigationBar = NavigationBar;
