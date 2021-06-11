'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var SiriShortcuts = /** @class */ (function (_super) {
    tslib.__extends(SiriShortcuts, _super);
    function SiriShortcuts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SiriShortcuts.prototype.donate = function (options) { return core.cordova(this, "donate", {}, arguments); };
    SiriShortcuts.prototype.present = function (options) { return core.cordova(this, "present", {}, arguments); };
    SiriShortcuts.prototype.remove = function (persistentIdentifiers) { return core.cordova(this, "remove", {}, arguments); };
    SiriShortcuts.prototype.removeAll = function () { return core.cordova(this, "removeAll", {}, arguments); };
    SiriShortcuts.prototype.getActivatedShortcut = function (options) { return core.cordova(this, "getActivatedShortcut", {}, arguments); };
    SiriShortcuts.pluginName = "SiriShortcuts";
    SiriShortcuts.plugin = "cordova-plugin-siri-shortcuts";
    SiriShortcuts.pluginRef = "cordova.plugins.SiriShortcuts";
    SiriShortcuts.repo = "https://github.com/bartwesselink/cordova-plugin-siri-shortcuts";
    SiriShortcuts.platforms = ["iOS"];
    SiriShortcuts.decorators = [
        { type: core$1.Injectable }
    ];
    return SiriShortcuts;
}(core.IonicNativePlugin));

exports.SiriShortcuts = SiriShortcuts;
