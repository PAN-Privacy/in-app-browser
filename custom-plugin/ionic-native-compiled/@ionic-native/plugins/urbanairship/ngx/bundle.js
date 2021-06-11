'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

/**
 * Enum for notification types.
 * @readonly
 * @enum {number}
 */
exports.NotificationType = void 0;
(function (NotificationType) {
    NotificationType[NotificationType["none"] = 0] = "none";
    NotificationType[NotificationType["badge"] = 1] = "badge";
    NotificationType[NotificationType["sound"] = 2] = "sound";
    NotificationType[NotificationType["alert"] = 4] = "alert";
})(exports.NotificationType || (exports.NotificationType = {}));
/**
 * Enum for presentation options.
 * @readonly
 * @enum {number}
 */
exports.PresentationOptions = void 0;
(function (PresentationOptions) {
    PresentationOptions[PresentationOptions["none"] = 0] = "none";
    PresentationOptions[PresentationOptions["badge"] = 1] = "badge";
    PresentationOptions[PresentationOptions["sound"] = 2] = "sound";
    PresentationOptions[PresentationOptions["alert"] = 4] = "alert";
})(exports.PresentationOptions || (exports.PresentationOptions = {}));
var UrbanAirShip = /** @class */ (function (_super) {
    tslib.__extends(UrbanAirShip, _super);
    function UrbanAirShip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UrbanAirShip.prototype.reattach = function () { return core.cordova(this, "reattach", {}, arguments); };
    UrbanAirShip.prototype.takeOff = function (config) { return core.cordova(this, "takeOff", {}, arguments); };
    UrbanAirShip.prototype.setAndroidNotificationConfig = function (config) { return core.cordova(this, "setAndroidNotificationConfig", {}, arguments); };
    UrbanAirShip.prototype.setAutoLaunchDefaultMessageCenter = function (enabled) { return core.cordova(this, "setAutoLaunchDefaultMessageCenter", {}, arguments); };
    UrbanAirShip.prototype.setUserNotificationsEnabled = function (enabled) { return core.cordova(this, "setUserNotificationsEnabled", {}, arguments); };
    UrbanAirShip.prototype.isUserNotificationsEnabled = function () { return core.cordova(this, "isUserNotificationsEnabled", {}, arguments); };
    UrbanAirShip.prototype.isAppNotificationsEnabled = function () { return core.cordova(this, "isAppNotificationsEnabled", {}, arguments); };
    UrbanAirShip.prototype.getChannelID = function () { return core.cordova(this, "getChannelID", {}, arguments); };
    UrbanAirShip.prototype.getLaunchNotification = function (clear) { return core.cordova(this, "getLaunchNotification", {}, arguments); };
    UrbanAirShip.prototype.getDeepLink = function (clear) { return core.cordova(this, "getDeepLink", {}, arguments); };
    UrbanAirShip.prototype.getTags = function () { return core.cordova(this, "getTags", {}, arguments); };
    UrbanAirShip.prototype.setTags = function (tags) { return core.cordova(this, "setTags", {}, arguments); };
    UrbanAirShip.prototype.getAlias = function () { return core.cordova(this, "getAlias", {}, arguments); };
    UrbanAirShip.prototype.setAlias = function (alias) { return core.cordova(this, "setAlias", {}, arguments); };
    UrbanAirShip.prototype.isQuietTimeEnabled = function () { return core.cordova(this, "isQuietTimeEnabled", {}, arguments); };
    UrbanAirShip.prototype.setQuietTimeEnabled = function (enabled) { return core.cordova(this, "setQuietTimeEnabled", {}, arguments); };
    UrbanAirShip.prototype.isInQuietTime = function () { return core.cordova(this, "isInQuietTime", {}, arguments); };
    UrbanAirShip.prototype.getQuietTime = function () { return core.cordova(this, "getQuietTime", {}, arguments); };
    UrbanAirShip.prototype.setQuietTime = function (startHour, startMinute, endHour, endMinute) { return core.cordova(this, "setQuietTime", {}, arguments); };
    UrbanAirShip.prototype.setAnalyticsEnabled = function (enabled) { return core.cordova(this, "setAnalyticsEnabled", {}, arguments); };
    UrbanAirShip.prototype.isAnalyticsEnabled = function () { return core.cordova(this, "isAnalyticsEnabled", {}, arguments); };
    UrbanAirShip.prototype.getNamedUser = function () { return core.cordova(this, "getNamedUser", {}, arguments); };
    UrbanAirShip.prototype.setNamedUser = function (namedUser) { return core.cordova(this, "setNamedUser", {}, arguments); };
    UrbanAirShip.prototype.runAction = function (actionName, actionValue) { return core.cordova(this, "runAction", {}, arguments); };
    UrbanAirShip.prototype.editNamedUserTagGroups = function () { return core.cordova(this, "editNamedUserTagGroups", {}, arguments); };
    UrbanAirShip.prototype.editChannelTagGroups = function () { return core.cordova(this, "editChannelTagGroups", {}, arguments); };
    UrbanAirShip.prototype.setAssociatedIdentifier = function (key, identifier) { return core.cordova(this, "setAssociatedIdentifier", {}, arguments); };
    UrbanAirShip.prototype.setLocationEnabled = function (enabled) { return core.cordova(this, "setLocationEnabled", {}, arguments); };
    UrbanAirShip.prototype.isLocationEnabled = function () { return core.cordova(this, "isLocationEnabled", {}, arguments); };
    UrbanAirShip.prototype.setBackgroundLocationEnabled = function (enabled) { return core.cordova(this, "setBackgroundLocationEnabled", {}, arguments); };
    UrbanAirShip.prototype.isBackgroundLocationEnabled = function () { return core.cordova(this, "isBackgroundLocationEnabled", {}, arguments); };
    UrbanAirShip.prototype.displayMessageCenter = function () { return core.cordova(this, "displayMessageCenter", {}, arguments); };
    UrbanAirShip.prototype.dismissMessageCenter = function () { return core.cordova(this, "dismissMessageCenter", {}, arguments); };
    UrbanAirShip.prototype.dismissInboxMessage = function () { return core.cordova(this, "dismissInboxMessage", {}, arguments); };
    UrbanAirShip.prototype.dismissOverlayInboxMessage = function () { return core.cordova(this, "dismissOverlayInboxMessage", {}, arguments); };
    UrbanAirShip.prototype.getInboxMessages = function () { return core.cordova(this, "getInboxMessages", {}, arguments); };
    UrbanAirShip.prototype.markInboxMessageRead = function (messageId) { return core.cordova(this, "markInboxMessageRead", {}, arguments); };
    UrbanAirShip.prototype.deleteInboxMessage = function (messageId) { return core.cordova(this, "deleteInboxMessage", {}, arguments); };
    UrbanAirShip.prototype.displayInboxMessage = function (messageId) { return core.cordova(this, "displayInboxMessage", {}, arguments); };
    UrbanAirShip.prototype.refreshInbox = function () { return core.cordova(this, "refreshInbox", {}, arguments); };
    UrbanAirShip.prototype.overlayInboxMessage = function (messageId) { return core.cordova(this, "overlayInboxMessage", {}, arguments); };
    UrbanAirShip.prototype.clearNotification = function (identifier) { return core.cordova(this, "clearNotification", {}, arguments); };
    UrbanAirShip.prototype.clearNotifications = function () { return core.cordova(this, "clearNotifications", {}, arguments); };
    UrbanAirShip.prototype.getActiveNotifications = function () { return core.cordova(this, "getActiveNotifications", {}, arguments); };
    UrbanAirShip.prototype.setAutobadgeEnabled = function (enabled) { return core.cordova(this, "setAutobadgeEnabled", {}, arguments); };
    UrbanAirShip.prototype.setBadgeNumber = function (count) { return core.cordova(this, "setBadgeNumber", {}, arguments); };
    UrbanAirShip.prototype.getBadgeNumber = function () { return core.cordova(this, "getBadgeNumber", {}, arguments); };
    UrbanAirShip.prototype.resetBadge = function () { return core.cordova(this, "resetBadge", {}, arguments); };
    UrbanAirShip.prototype.setNotificationTypes = function (types) { return core.cordova(this, "setNotificationTypes", {}, arguments); };
    UrbanAirShip.prototype.setPresentationOptions = function (options) { return core.cordova(this, "setPresentationOptions", {}, arguments); };
    UrbanAirShip.prototype.isSoundEnabled = function () { return core.cordova(this, "isSoundEnabled", {}, arguments); };
    UrbanAirShip.prototype.setSoundEnabled = function (enabled) { return core.cordova(this, "setSoundEnabled", {}, arguments); };
    UrbanAirShip.prototype.isVibrateEnabled = function () { return core.cordova(this, "isVibrateEnabled", {}, arguments); };
    UrbanAirShip.prototype.setVibrateEnabled = function (enabled) { return core.cordova(this, "setVibrateEnabled", {}, arguments); };
    UrbanAirShip.prototype.addCustomEvent = function (event) { return core.cordova(this, "addCustomEvent", {}, arguments); };
    UrbanAirShip.pluginName = "UrbanAirShip";
    UrbanAirShip.plugin = "urbanairship-cordova";
    UrbanAirShip.pluginRef = "window.UAirship";
    UrbanAirShip.repo = "https://www.npmjs.com/package/urbanairship-cordova";
    UrbanAirShip.install = "ionic cordova plugin add urbanairship-cordova";
    UrbanAirShip.platforms = ["Android", "iOS"];
    UrbanAirShip.decorators = [
        { type: core$1.Injectable }
    ];
    return UrbanAirShip;
}(core.IonicNativePlugin));

exports.UrbanAirShip = UrbanAirShip;
