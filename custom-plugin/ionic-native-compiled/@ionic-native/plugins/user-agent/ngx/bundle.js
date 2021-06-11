'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var UserAgent = /** @class */ (function (_super) {
    tslib.__extends(UserAgent, _super);
    function UserAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserAgent.prototype.set = function (userAgent) { return core.cordova(this, "set", {}, arguments); };
    UserAgent.prototype.get = function () { return core.cordova(this, "get", {}, arguments); };
    UserAgent.prototype.reset = function () { return core.cordova(this, "reset", {}, arguments); };
    UserAgent.pluginName = "UserAgent";
    UserAgent.plugin = "cordova-plugin-useragent";
    UserAgent.pluginRef = "UserAgent";
    UserAgent.repo = "https://github.com/danielsogl/cordova-plugin-useragent";
    UserAgent.platforms = ["Android", "iOS"];
    UserAgent.decorators = [
        { type: core$1.Injectable }
    ];
    return UserAgent;
}(core.IonicNativePlugin));

exports.UserAgent = UserAgent;
