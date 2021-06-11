'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var TwitterConnect = /** @class */ (function (_super) {
    tslib.__extends(TwitterConnect, _super);
    function TwitterConnect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TwitterConnect.prototype.login = function () { return core.cordova(this, "login", {}, arguments); };
    TwitterConnect.prototype.logout = function () { return core.cordova(this, "logout", {}, arguments); };
    TwitterConnect.prototype.showUser = function () { return core.cordova(this, "showUser", {}, arguments); };
    TwitterConnect.pluginName = "TwitterConnect";
    TwitterConnect.plugin = "twitter-connect-plugin";
    TwitterConnect.pluginRef = "TwitterConnect";
    TwitterConnect.repo = "https://github.com/chroa/twitter-connect-plugin";
    TwitterConnect.install = "ionic cordova plugin add https://github.com/chroa/twitter-connect-plugin --variable FABRIC_KEY=<Fabric API Key> --variable TWITTER_KEY=<Twitter Consumer Key> --variable TWITTER_SECRET=<Twitter Consumer Secret>";
    TwitterConnect.installVariables = ["FABRIC_KEY", "TWITTER_KEY", "TWITTER_SECRET"];
    TwitterConnect.platforms = ["Android", "iOS"];
    TwitterConnect.decorators = [
        { type: core$1.Injectable }
    ];
    return TwitterConnect;
}(core.IonicNativePlugin));

exports.TwitterConnect = TwitterConnect;
