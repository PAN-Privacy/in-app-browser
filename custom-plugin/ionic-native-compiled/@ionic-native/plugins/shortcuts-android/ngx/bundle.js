'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
require('rxjs');

var Shortcuts = /** @class */ (function (_super) {
    tslib.__extends(Shortcuts, _super);
    function Shortcuts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shortcuts.prototype.supportsDynamic = function () { return core.cordova(this, "supportsDynamic", {}, arguments); };
    Shortcuts.prototype.supportsPinned = function () { return core.cordova(this, "supportsPinned", {}, arguments); };
    Shortcuts.prototype.setDynamic = function (shortcuts) { return core.cordova(this, "setDynamic", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Shortcuts.prototype.addPinned = function (shortcut) { return core.cordova(this, "addPinned", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Shortcuts.prototype.getIntent = function () { return core.cordova(this, "getIntent", {}, arguments); };
    Shortcuts.prototype.onNewIntent = function () { return core.cordova(this, "onNewIntent", { "observable": true }, arguments); };
    Shortcuts.pluginName = "Shortcuts";
    Shortcuts.plugin = "cordova-plugin-shortcuts-android";
    Shortcuts.pluginRef = "plugins.Shortcuts";
    Shortcuts.repo = "https://github.com/avargaskun/cordova-plugin-shortcuts-android";
    Shortcuts.platforms = ["Android"];
    Shortcuts.decorators = [
        { type: core$1.Injectable }
    ];
    return Shortcuts;
}(core.IonicNativePlugin));

exports.Shortcuts = Shortcuts;
