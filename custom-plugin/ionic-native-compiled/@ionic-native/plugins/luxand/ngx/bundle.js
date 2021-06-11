'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Luxand = /** @class */ (function (_super) {
    tslib.__extends(Luxand, _super);
    function Luxand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Luxand.prototype.init = function (config) { return core.cordova(this, "init", {}, arguments); };
    Luxand.prototype.register = function (params) { return core.cordova(this, "register", {}, arguments); };
    Luxand.prototype.login = function (params) { return core.cordova(this, "login", {}, arguments); };
    Luxand.prototype.clear = function (id) { return core.cordova(this, "clear", {}, arguments); };
    Luxand.prototype.clearMemory = function () { return core.cordova(this, "clearMemory", {}, arguments); };
    Luxand.pluginName = "Luxand";
    Luxand.plugin = "codova-plugin-luxand";
    Luxand.pluginRef = "window.Luxand";
    Luxand.repo = "https://github.com/molobala/cordova-plugin-luxand";
    Luxand.platforms = ["Android", "iOS"];
    Luxand.decorators = [
        { type: core$1.Injectable }
    ];
    return Luxand;
}(core.IonicNativePlugin));

exports.Luxand = Luxand;
