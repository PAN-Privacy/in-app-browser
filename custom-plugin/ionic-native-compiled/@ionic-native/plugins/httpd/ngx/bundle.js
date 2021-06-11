'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
require('rxjs');

var Httpd = /** @class */ (function (_super) {
    tslib.__extends(Httpd, _super);
    function Httpd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Httpd.prototype.startServer = function (options) { return core.cordova(this, "startServer", { "observable": true, "clearFunction": "stopServer" }, arguments); };
    Httpd.prototype.getUrl = function () { return core.cordova(this, "getUrl", {}, arguments); };
    Httpd.prototype.getLocalPath = function () { return core.cordova(this, "getLocalPath", {}, arguments); };
    Httpd.pluginName = "Httpd";
    Httpd.plugin = "cordova-plugin-httpd";
    Httpd.pluginRef = "cordova.plugins.CorHttpd";
    Httpd.repo = "https://github.com/floatinghotpot/cordova-httpd";
    Httpd.platforms = ["Android", "iOS", "macOS"];
    Httpd.decorators = [
        { type: core$1.Injectable }
    ];
    return Httpd;
}(core.IonicNativePlugin));

exports.Httpd = Httpd;
