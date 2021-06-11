'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var CouchbaseLite = /** @class */ (function (_super) {
    tslib.__extends(CouchbaseLite, _super);
    function CouchbaseLite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CouchbaseLite.prototype.getURL = function () { return core.cordova(this, "getURL", { "callbackStyle": "node" }, arguments); };
    CouchbaseLite.pluginName = "CouchbaseLite";
    CouchbaseLite.plugin = "couchbase-lite-phonegap-plugin";
    CouchbaseLite.pluginRef = "cblite";
    CouchbaseLite.repo = "https://github.com/couchbaselabs/Couchbase-Lite-PhoneGap-Plugin";
    CouchbaseLite.platforms = ["Android", "iOS"];
    CouchbaseLite.decorators = [
        { type: core$1.Injectable }
    ];
    return CouchbaseLite;
}(core.IonicNativePlugin));

exports.CouchbaseLite = CouchbaseLite;
