'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var CardIO = /** @class */ (function (_super) {
    tslib.__extends(CardIO, _super);
    function CardIO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardIO.prototype.canScan = function () { return core.cordova(this, "canScan", {}, arguments); };
    CardIO.prototype.scan = function (options) { return core.cordova(this, "scan", {}, arguments); };
    CardIO.prototype.version = function () { return core.cordova(this, "version", {}, arguments); };
    CardIO.pluginName = "CardIO";
    CardIO.plugin = "card.io.cordova.mobilesdk";
    CardIO.pluginRef = "CardIO";
    CardIO.repo = "https://github.com/card-io/card.io-Cordova-Plugin";
    CardIO.platforms = ["Android", "iOS"];
    CardIO.decorators = [
        { type: core$1.Injectable }
    ];
    return CardIO;
}(core.IonicNativePlugin));

exports.CardIO = CardIO;
