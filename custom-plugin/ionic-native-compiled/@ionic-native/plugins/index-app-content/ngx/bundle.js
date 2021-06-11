'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
require('rxjs');

var IndexAppContent = /** @class */ (function (_super) {
    tslib.__extends(IndexAppContent, _super);
    function IndexAppContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndexAppContent.prototype.isIndexingAvailable = function () { return core.cordova(this, "isIndexingAvailable", {}, arguments); };
    IndexAppContent.prototype.setItems = function (items) { return core.cordova(this, "setItems", {}, arguments); };
    IndexAppContent.prototype.clearItemsForDomains = function (domains) { return core.cordova(this, "clearItemsForDomains", {}, arguments); };
    IndexAppContent.prototype.clearItemsForIdentifiers = function (identifiers) { return core.cordova(this, "clearItemsForIdentifiers", {}, arguments); };
    IndexAppContent.prototype.onItemPressed = function () { return core.cordovaFunctionOverride(this, "onItemPressed", {}, arguments); };
    IndexAppContent.prototype.setIndexingInterval = function (intervalMinutes) { return core.cordova(this, "setIndexingInterval", {}, arguments); };
    IndexAppContent.pluginName = "IndexAppContent";
    IndexAppContent.plugin = "cordova-plugin-indexappcontent";
    IndexAppContent.pluginRef = "window.plugins.indexAppContent";
    IndexAppContent.repo = "https://github.com/johanblomgren/cordova-plugin-indexappcontent";
    IndexAppContent.platforms = ["iOS"];
    IndexAppContent.decorators = [
        { type: core$1.Injectable }
    ];
    return IndexAppContent;
}(core.IonicNativePlugin));

exports.IndexAppContent = IndexAppContent;
