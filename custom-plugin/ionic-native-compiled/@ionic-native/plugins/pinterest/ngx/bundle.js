'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Pinterest = /** @class */ (function (_super) {
    tslib.__extends(Pinterest, _super);
    function Pinterest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pinterest.prototype.login = function (scopes) { return core.cordova(this, "login", {}, arguments); };
    Pinterest.prototype.getMe = function (fields) { return core.cordova(this, "getMe", { "callbackOrder": "reverse" }, arguments); };
    Pinterest.prototype.getMyPins = function (fields, limit) { return core.cordova(this, "getMyPins", { "callbackOrder": "reverse" }, arguments); };
    Pinterest.prototype.getMyBoards = function (fields, limit) { return core.cordova(this, "getMyBoards", { "callbackOrder": "reverse" }, arguments); };
    Pinterest.prototype.getMyLikes = function (fields, limit) { return core.cordova(this, "getMyLikes", { "callbackOrder": "reverse" }, arguments); };
    Pinterest.prototype.getMyFollowers = function (fields, limit) { return core.cordova(this, "getMyFollowers", { "callbackOrder": "reverse" }, arguments); };
    Pinterest.prototype.getMyFollowedBoards = function (fields, limit) { return core.cordova(this, "getMyFollowedBoards", { "callbackOrder": "reverse" }, arguments); };
    Pinterest.prototype.getMyFollowedInterests = function (fields, limit) { return core.cordova(this, "getMyFollowedInterests", { "callbackOrder": "reverse" }, arguments); };
    Pinterest.prototype.getUser = function (username, fields) { return core.cordova(this, "getUser", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Pinterest.prototype.getBoard = function (boardId, fields) { return core.cordova(this, "getBoard", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Pinterest.prototype.getBoardPins = function (boardId, fields, limit) { return core.cordova(this, "getBoardPins", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Pinterest.prototype.deleteBoard = function (boardId) { return core.cordova(this, "deleteBoard", {}, arguments); };
    Pinterest.prototype.createBoard = function (name, desc) { return core.cordova(this, "createBoard", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    Pinterest.prototype.getPin = function (pinId, fields) { return core.cordova(this, "getPin", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Pinterest.prototype.deletePin = function (pinId) { return core.cordova(this, "deletePin", {}, arguments); };
    Pinterest.prototype.createPin = function (note, boardId, imageUrl, link) { return core.cordova(this, "createPin", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    Object.defineProperty(Pinterest.prototype, "SCOPES", {
        get: function () { return core.cordovaPropertyGet(this, "SCOPES"); },
        set: function (value) { core.cordovaPropertySet(this, "SCOPES", value); },
        enumerable: false,
        configurable: true
    });
    Pinterest.pluginName = "Pinterest";
    Pinterest.plugin = "cordova-plugin-pinterest";
    Pinterest.pluginRef = "cordova.plugins.Pinterest";
    Pinterest.repo = "https://github.com/zyramedia/cordova-plugin-pinterest";
    Pinterest.install = "ionic cordova plugin add cordova-plugin-pinterest --variable APP_ID=YOUR_APP_ID";
    Pinterest.installVariables = ["APP_ID"];
    Pinterest.platforms = ["Android", "iOS"];
    Pinterest.decorators = [
        { type: core$1.Injectable }
    ];
    return Pinterest;
}(core.IonicNativePlugin));

exports.Pinterest = Pinterest;
