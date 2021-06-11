'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var FileEncryption = /** @class */ (function (_super) {
    tslib.__extends(FileEncryption, _super);
    function FileEncryption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileEncryption.prototype.encrypt = function (file, key) { return core.cordova(this, "encrypt", {}, arguments); };
    FileEncryption.prototype.decrypt = function (file, key) { return core.cordova(this, "decrypt", {}, arguments); };
    FileEncryption.pluginName = "FileEncryption";
    FileEncryption.plugin = "cordova-safe";
    FileEncryption.pluginRef = "cordova.plugins.disusered";
    FileEncryption.repo = "https://github.com/disusered/cordova-safe";
    FileEncryption.platforms = ["Android", "iOS"];
    FileEncryption.decorators = [
        { type: core$1.Injectable }
    ];
    return FileEncryption;
}(core.IonicNativePlugin));

exports.FileEncryption = FileEncryption;
