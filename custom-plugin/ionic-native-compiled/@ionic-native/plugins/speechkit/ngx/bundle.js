'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var SpeechKit = /** @class */ (function (_super) {
    tslib.__extends(SpeechKit, _super);
    function SpeechKit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpeechKit.prototype.tts = function (text, language, voice) { return core.cordova(this, "tts", {}, arguments); };
    SpeechKit.prototype.asr = function (language) { return core.cordova(this, "asr", { "platforms": ["Android"] }, arguments); };
    SpeechKit.pluginName = "SpeechKit";
    SpeechKit.plugin = "cordova-plugin-nuance-speechkit";
    SpeechKit.pluginRef = "plugins.speechkit";
    SpeechKit.repo = "https://github.com/Shmarkus/cordova-plugin-nuance-speechkit";
    SpeechKit.platforms = ["Android", "iOS"];
    SpeechKit.decorators = [
        { type: core$1.Injectable }
    ];
    return SpeechKit;
}(core.IonicNativePlugin));

exports.SpeechKit = SpeechKit;
