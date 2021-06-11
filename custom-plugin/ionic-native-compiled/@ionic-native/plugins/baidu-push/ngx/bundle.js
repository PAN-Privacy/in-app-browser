'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
require('rxjs');

var BaiduPush = /** @class */ (function (_super) {
    tslib.__extends(BaiduPush, _super);
    function BaiduPush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaiduPush.prototype.startWork = function (apiKey) { return core.cordova(this, "startWork", {}, arguments); };
    BaiduPush.prototype.stopWork = function () { return core.cordova(this, "stopWork", {}, arguments); };
    BaiduPush.prototype.resumeWork = function () { return core.cordova(this, "resumeWork", {}, arguments); };
    BaiduPush.prototype.setTags = function (tags) { return core.cordova(this, "setTags", {}, arguments); };
    BaiduPush.prototype.delTags = function (tags) { return core.cordova(this, "delTags", {}, arguments); };
    BaiduPush.prototype.onMessage = function () { return core.cordova(this, "onMessage", { "observable": true }, arguments); };
    BaiduPush.prototype.onNotificationClicked = function () { return core.cordova(this, "onNotificationClicked", { "observable": true }, arguments); };
    BaiduPush.prototype.onNotificationArrived = function () { return core.cordova(this, "onNotificationArrived", { "observable": true }, arguments); };
    BaiduPush.pluginName = "BaiduPush";
    BaiduPush.plugin = "cordova-plugin-push-baidu";
    BaiduPush.pluginRef = "baiduPush";
    BaiduPush.repo = "https://github.com/Ti-webdev/cordova-plugin-push-baidu.git";
    BaiduPush.platforms = ["Android", "iOS"];
    BaiduPush.decorators = [
        { type: core$1.Injectable }
    ];
    return BaiduPush;
}(core.IonicNativePlugin));

exports.BaiduPush = BaiduPush;
