'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var RegulaDocumentReader = /** @class */ (function (_super) {
    tslib.__extends(RegulaDocumentReader, _super);
    function RegulaDocumentReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegulaDocumentReader.prototype.initReader = function (license) { return core.cordova(this, "initReader", {}, arguments); };
    RegulaDocumentReader.prototype.scanDocument = function () { return core.cordova(this, "scanDocument", {}, arguments); };
    RegulaDocumentReader.pluginName = "Regula Document Reader";
    RegulaDocumentReader.plugin = "cordova-plugin-documentreader";
    RegulaDocumentReader.pluginRef = "DocumentReader";
    RegulaDocumentReader.repo = "https://github.com/regulaforensics/cordova-plugin-documentreader.git";
    RegulaDocumentReader.platforms = ["iOS", "Android"];
    RegulaDocumentReader.install = "ionic plugin add cordova-plugin-documentreader --variable CAMERA_USAGE_DESCRIPTION=\"To take photo\"";
    RegulaDocumentReader.decorators = [
        { type: core$1.Injectable }
    ];
    return RegulaDocumentReader;
}(core.IonicNativePlugin));

exports.RegulaDocumentReader = RegulaDocumentReader;
