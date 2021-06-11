'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

exports.CCKContextType = void 0;
(function (CCKContextType) {
    CCKContextType[CCKContextType["none"] = 0] = "none";
    CCKContextType[CCKContextType["app"] = 1] = "app";
    CCKContextType[CCKContextType["chapter"] = 2] = "chapter";
    CCKContextType[CCKContextType["section"] = 3] = "section";
    CCKContextType[CCKContextType["level"] = 4] = "level";
    CCKContextType[CCKContextType["page"] = 5] = "page";
    CCKContextType[CCKContextType["task"] = 6] = "task";
    CCKContextType[CCKContextType["challenge"] = 7] = "challenge";
    CCKContextType[CCKContextType["quiz"] = 8] = "quiz";
    CCKContextType[CCKContextType["exercise"] = 9] = "exercise";
    CCKContextType[CCKContextType["lesson"] = 10] = "lesson";
    CCKContextType[CCKContextType["book"] = 11] = "book";
    CCKContextType[CCKContextType["game"] = 12] = "game";
    CCKContextType[CCKContextType["document"] = 13] = "document";
    CCKContextType[CCKContextType["audio"] = 14] = "audio";
    CCKContextType[CCKContextType["video"] = 15] = "video";
})(exports.CCKContextType || (exports.CCKContextType = {}));
exports.CCKContextTopic = void 0;
(function (CCKContextTopic) {
    CCKContextTopic["math"] = "math";
    CCKContextTopic["science"] = "science";
    CCKContextTopic["literacyAndWriting"] = "literacyAndWriting";
    CCKContextTopic["worldLanguage"] = "worldLanguage";
    CCKContextTopic["socialScience"] = "socialScience";
    CCKContextTopic["computerScienceAndEngineering"] = "computerScienceAndEngineering";
    CCKContextTopic["artsAndMusic"] = "artsAndMusic";
    CCKContextTopic["healthAndFitness"] = "healthAndFitness";
})(exports.CCKContextTopic || (exports.CCKContextTopic = {}));
exports.CCKBinaryType = void 0;
(function (CCKBinaryType) {
    CCKBinaryType[CCKBinaryType["trueFalse"] = 0] = "trueFalse";
    CCKBinaryType[CCKBinaryType["passFail"] = 1] = "passFail";
    CCKBinaryType[CCKBinaryType["yesNo"] = 2] = "yesNo";
})(exports.CCKBinaryType || (exports.CCKBinaryType = {}));
var ClassKit = /** @class */ (function (_super) {
    tslib.__extends(ClassKit, _super);
    function ClassKit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassKit.prototype.initContextsFromXml = function (urlPrefix) { return core.cordova(this, "initContextsFromXml", {}, arguments); };
    ClassKit.prototype.addContext = function (urlPrefix, context) { return core.cordova(this, "addContext", {}, arguments); };
    ClassKit.prototype.removeContexts = function () { return core.cordova(this, "removeContexts", {}, arguments); };
    ClassKit.prototype.removeContext = function (identifierPath) { return core.cordova(this, "removeContext", {}, arguments); };
    ClassKit.prototype.beginActivity = function (identifierPath, asNew) { return core.cordova(this, "beginActivity", {}, arguments); };
    ClassKit.prototype.endActivity = function () { return core.cordova(this, "endActivity", {}, arguments); };
    ClassKit.prototype.setProgressRange = function (fromStart, toEnd) { return core.cordova(this, "setProgressRange", {}, arguments); };
    ClassKit.prototype.setProgress = function (progress) { return core.cordova(this, "setProgress", {}, arguments); };
    ClassKit.prototype.setBinaryItem = function (binaryItem) { return core.cordova(this, "setBinaryItem", {}, arguments); };
    ClassKit.prototype.setScoreItem = function (scoreItem) { return core.cordova(this, "setScoreItem", {}, arguments); };
    ClassKit.prototype.setQuantityItem = function (quantityItem) { return core.cordova(this, "setQuantityItem", {}, arguments); };
    ClassKit.pluginName = "ClassKit";
    ClassKit.plugin = "cordova-plugin-classkit";
    ClassKit.pluginRef = "CordovaClassKit";
    ClassKit.repo = "https://github.com/sebastianbaar/cordova-plugin-classkit.git";
    ClassKit.platforms = ["iOS"];
    ClassKit.decorators = [
        { type: core$1.Injectable }
    ];
    return ClassKit;
}(core.IonicNativePlugin));

exports.ClassKit = ClassKit;
