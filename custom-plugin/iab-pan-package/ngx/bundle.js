'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
var rxjs = require('rxjs');

var InAppBrowserObject = /** @class */ (function () {
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param {string} url     The URL to load.
     * @param {string} [target="self"]  The target in which to load the URL, an optional parameter that defaults to _self.
     *                 _self: Opens in the WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
     *                 _blank: Opens in the InAppBrowser.
     *                 _system: Opens in the system's web browser.
     * @param {string | InAppBrowserOptions} [options] Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    function InAppBrowserObject(url, target, options) {
        try {
            if (options && typeof options !== 'string') {
                options = Object.keys(options)
                    .map(function (key) { return key + "=" + options[key]; })
                    .join(',');
            }
            this._objectInstance = cordova.InAppBrowser.open(url, target, options);
        }
        catch (e) {
            if (typeof window !== 'undefined') {
                window.open(url, target);
            }
            console.warn('Native: InAppBrowser is not installed or you are running on a browser. Falling back to window.open.');
        }
    }
    InAppBrowserObject.prototype._loadAfterBeforeload = function (strUrl) { return core.cordovaInstance(this, "_loadAfterBeforeload", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.show = function () { return core.cordovaInstance(this, "show", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.close = function () { return core.cordovaInstance(this, "close", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.hide = function () { return core.cordovaInstance(this, "hide", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.executeScript = function (script) { return core.cordovaInstance(this, "executeScript", {}, arguments); };
    InAppBrowserObject.prototype.insertCSS = function (css) { return core.cordovaInstance(this, "insertCSS", {}, arguments); };
    InAppBrowserObject.prototype.on = function (event) {
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
    return InAppBrowserObject;
}());
var InAppBrowser = /** @class */ (function (_super) {
    tslib.__extends(InAppBrowser, _super);
    function InAppBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param  url {string}     The URL to load.
     * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     * @returns {InAppBrowserObject}
     */
    InAppBrowser.prototype.create = function (url, target, options) {
        return new InAppBrowserObject(url, target, options);
    };
    InAppBrowser.pluginName = "InAppBrowser Pan";
    InAppBrowser.plugin = "cordova-plugin-inappbrowser-pan";
    InAppBrowser.pluginRef = "cordova.InAppBrowser";
    InAppBrowser.platforms = ["Android", "Browser", "iOS"];
    InAppBrowser.decorators = [
        { type: core$1.Injectable }
    ];
    return InAppBrowser;
}(core.IonicNativePlugin));

exports.InAppBrowser = InAppBrowser;
exports.InAppBrowserObject = InAppBrowserObject;
