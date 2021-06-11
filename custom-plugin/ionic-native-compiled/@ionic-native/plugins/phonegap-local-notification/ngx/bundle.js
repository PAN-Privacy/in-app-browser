'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var PLNObject = /** @class */ (function () {
    function PLNObject(title, options) {
        if (core.checkAvailability(PhonegapLocalNotification.pluginRef, null, PhonegapLocalNotification.pluginName) === true) {
            this._objectInstance = new Notification(title, options);
        }
    }
    PLNObject.prototype.close = function () { return core.cordovaInstance(this, "close", { "sync": true }, arguments); };
    return PLNObject;
}());
var PhonegapLocalNotification = /** @class */ (function (_super) {
    tslib.__extends(PhonegapLocalNotification, _super);
    function PhonegapLocalNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * A global object that lets you interact with the Notification API.
     * @param title {string} Title of the local notification.
     * @param Options {LocalNotificationOptions} An object containing optional property/value pairs.
     * @returns {PLNObject}
     */
    PhonegapLocalNotification.prototype.create = function (title, options) {
        return new PLNObject(title, options);
    };
    PhonegapLocalNotification.prototype.requestPermission = function () { return core.cordova(this, "requestPermission", {}, arguments); };
    PhonegapLocalNotification.pluginName = "Phonegap Local Notifications";
    PhonegapLocalNotification.plugin = "phonegap-plugin-local-notification";
    PhonegapLocalNotification.pluginRef = "Notification";
    PhonegapLocalNotification.repo = "https://github.com/phonegap/phonegap-plugin-local-notification";
    PhonegapLocalNotification.platforms = ["Android", "Browser", "iOS", "Windows"];
    PhonegapLocalNotification.decorators = [
        { type: core$1.Injectable }
    ];
    return PhonegapLocalNotification;
}(core.IonicNativePlugin));

exports.PLNObject = PLNObject;
exports.PhonegapLocalNotification = PhonegapLocalNotification;
