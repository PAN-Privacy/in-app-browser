'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var FullScreenImage = /** @class */ (function (_super) {
    tslib.__extends(FullScreenImage, _super);
    function FullScreenImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FullScreenImage.prototype.showImageURL = function (url) { return core.cordova(this, "showImageURL", { "sync": true }, arguments); };
    FullScreenImage.prototype.showImageBase64 = function (base64String, name, type) { return core.cordova(this, "showImageBase64", { "sync": true }, arguments); };
    FullScreenImage.pluginName = "FullScreenImage";
    FullScreenImage.plugin = "es.keensoft.fullscreenimage";
    FullScreenImage.pluginRef = "FullScreenImage";
    FullScreenImage.repo = "https://github.com/keensoft/FullScreenImage-Cordova-Plugin";
    FullScreenImage.platforms = ["Android", "iOS"];
    FullScreenImage.decorators = [
        { type: core$1.Injectable }
    ];
    return FullScreenImage;
}(core.IonicNativePlugin));

exports.FullScreenImage = FullScreenImage;
