'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var GooglePlayGamesServices = /** @class */ (function (_super) {
    tslib.__extends(GooglePlayGamesServices, _super);
    function GooglePlayGamesServices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GooglePlayGamesServices.prototype.auth = function () { return core.cordova(this, "auth", {}, arguments); };
    GooglePlayGamesServices.prototype.signOut = function () { return core.cordova(this, "signOut", {}, arguments); };
    GooglePlayGamesServices.prototype.isSignedIn = function () { return core.cordova(this, "isSignedIn", {}, arguments); };
    GooglePlayGamesServices.prototype.showPlayer = function () { return core.cordova(this, "showPlayer", {}, arguments); };
    GooglePlayGamesServices.prototype.submitScore = function (data) { return core.cordova(this, "submitScore", {}, arguments); };
    GooglePlayGamesServices.prototype.submitScoreNow = function (data) { return core.cordova(this, "submitScoreNow", {}, arguments); };
    GooglePlayGamesServices.prototype.getPlayerScore = function (data) { return core.cordova(this, "getPlayerScore", {}, arguments); };
    GooglePlayGamesServices.prototype.showAllLeaderboards = function () { return core.cordova(this, "showAllLeaderboards", {}, arguments); };
    GooglePlayGamesServices.prototype.showLeaderboard = function (data) { return core.cordova(this, "showLeaderboard", {}, arguments); };
    GooglePlayGamesServices.prototype.unlockAchievement = function (data) { return core.cordova(this, "unlockAchievement", {}, arguments); };
    GooglePlayGamesServices.prototype.unlockAchievementNow = function (data) { return core.cordova(this, "unlockAchievementNow", {}, arguments); };
    GooglePlayGamesServices.prototype.incrementAchievement = function (data) { return core.cordova(this, "incrementAchievement", {}, arguments); };
    GooglePlayGamesServices.prototype.incrementAchievementNow = function (data) { return core.cordova(this, "incrementAchievementNow", {}, arguments); };
    GooglePlayGamesServices.prototype.showAchievements = function () { return core.cordova(this, "showAchievements", {}, arguments); };
    GooglePlayGamesServices.pluginName = "GooglePlayGamesServices";
    GooglePlayGamesServices.plugin = "cordova-plugin-play-games-services";
    GooglePlayGamesServices.pluginRef = "plugins.playGamesServices";
    GooglePlayGamesServices.repo = "https://github.com/artberri/cordova-plugin-play-games-services";
    GooglePlayGamesServices.platforms = ["Android"];
    GooglePlayGamesServices.install = "ionic cordova plugin add cordova-plugin-play-games-services --variable APP_ID=\"YOUR_APP_ID";
    GooglePlayGamesServices.decorators = [
        { type: core$1.Injectable }
    ];
    return GooglePlayGamesServices;
}(core.IonicNativePlugin));

exports.GooglePlayGamesServices = GooglePlayGamesServices;
