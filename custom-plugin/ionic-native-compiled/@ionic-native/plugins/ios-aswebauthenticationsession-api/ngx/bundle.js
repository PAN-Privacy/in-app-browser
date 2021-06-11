'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var IosASWebauthenticationSession = /** @class */ (function (_super) {
    tslib.__extends(IosASWebauthenticationSession, _super);
    function IosASWebauthenticationSession() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IosASWebauthenticationSession.prototype.start = function (callbackUrl, authorizeURL) { return core.cordova(this, "start", {}, arguments); };
    IosASWebauthenticationSession.pluginName = "IosASWebauthenticationSession";
    IosASWebauthenticationSession.plugin = "cordova-plugin-ios-aswebauthenticationsession-api";
    IosASWebauthenticationSession.pluginRef = "plugins.ASWebAuthSession";
    IosASWebauthenticationSession.repo = "https://github.com/jwelker110/cordova-plugin-ios-aswebauthenticationsession-api";
    IosASWebauthenticationSession.platforms = ["iOS"];
    IosASWebauthenticationSession.decorators = [
        { type: core$1.Injectable }
    ];
    return IosASWebauthenticationSession;
}(core.IonicNativePlugin));

exports.IosASWebauthenticationSession = IosASWebauthenticationSession;
