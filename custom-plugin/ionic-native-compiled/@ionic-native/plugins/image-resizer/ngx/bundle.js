'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var ImageResizer = /** @class */ (function (_super) {
    tslib.__extends(ImageResizer, _super);
    function ImageResizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageResizer.prototype.resize = function (options) { return core.cordova(this, "resize", {}, arguments); };
    ImageResizer.pluginName = "ImageResizer";
    ImageResizer.plugin = "info.protonet.imageresizer";
    ImageResizer.pluginRef = "ImageResizer";
    ImageResizer.repo = "https://github.com/JoschkaSchulz/cordova-plugin-image-resizer";
    ImageResizer.platforms = ["Android", "iOS", "Windows"];
    ImageResizer.decorators = [
        { type: core$1.Injectable }
    ];
    return ImageResizer;
}(core.IonicNativePlugin));

exports.ImageResizer = ImageResizer;
