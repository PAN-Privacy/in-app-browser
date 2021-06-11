'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
var rxjs = require('rxjs');

var ThemeableBrowserObject = /** @class */ (function () {
    function ThemeableBrowserObject(url, target, styleOptions) {
        try {
            this._objectInstance = cordova.ThemeableBrowser.open(url, target, styleOptions);
        }
        catch (e) {
            if (typeof window !== 'undefined') {
                window.open(url);
            }
            console.warn('Native: ThemeableBrowser is not installed or you are running on a browser. Falling back to window.open.');
        }
    }
    ThemeableBrowserObject.prototype.show = function () { return core.cordovaInstance(this, "show", { "sync": true }, arguments); };
    ThemeableBrowserObject.prototype.close = function () { return core.cordovaInstance(this, "close", { "sync": true }, arguments); };
    ThemeableBrowserObject.prototype.reload = function () { return core.cordovaInstance(this, "reload", { "sync": true }, arguments); };
    ThemeableBrowserObject.prototype.executeScript = function (script) { return core.cordovaInstance(this, "executeScript", {}, arguments); };
    ThemeableBrowserObject.prototype.insertCss = function (css) { return core.cordovaInstance(this, "insertCss", {}, arguments); };
    ThemeableBrowserObject.prototype.on = function (event) {
        var _this = this;
        return (function () {
            if (core.instanceAvailability(_this) === true) {
                return new rxjs.Observable(function (observer) {
                    _this._objectInstance.addEventListener(event, observer.next.bind(observer));
                    return function () { return _this._objectInstance.removeEventListener(event, observer.next.bind(observer)); };
                });
            }
        })();
    };
    return ThemeableBrowserObject;
}());
var ThemeableBrowser = /** @class */ (function (_super) {
    tslib.__extends(ThemeableBrowser, _super);
    function ThemeableBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a browser instance
     * @param url {string} URL to open
     * @param target {string} Target
     * @param styleOptions {ThemeableBrowserOptions} Themeable browser options
     * @returns {ThemeableBrowserObject}
     */
    ThemeableBrowser.prototype.create = function (url, target, styleOptions) {
        return new ThemeableBrowserObject(url, target, styleOptions);
    };
    ThemeableBrowser.pluginName = "ThemeableBrowser";
    ThemeableBrowser.plugin = "cordova-plugin-themeablebrowser";
    ThemeableBrowser.pluginRef = "cordova.ThemeableBrowser";
    ThemeableBrowser.repo = "https://github.com/initialxy/cordova-plugin-themeablebrowser";
    ThemeableBrowser.platforms = ["Amazon Fire OS", "Android", "Blackberry 10", "Browser", "FirefoxOS", "iOS", "Ubuntu", "Windows", "Windows Phone"];
    ThemeableBrowser.decorators = [
        { type: core$1.Injectable }
    ];
    return ThemeableBrowser;
}(core.IonicNativePlugin));

exports.ThemeableBrowser = ThemeableBrowser;
exports.ThemeableBrowserObject = ThemeableBrowserObject;
