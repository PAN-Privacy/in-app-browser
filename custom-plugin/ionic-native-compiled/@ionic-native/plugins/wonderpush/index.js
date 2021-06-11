var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { IonicNativePlugin, cordova, getPromise } from '@ionic-native/core';
var NestedObject = /** @class */ (function () {
    function NestedObject(pluginObj) {
        this.pluginObj = pluginObj;
    }
    NestedObject.prototype.wrap = function (functionName, args) {
        var plugin = WonderPushOriginal.getPlugin();
        var userPreferences = plugin ? plugin.UserPreferences : null;
        if (!plugin || !userPreferences || !userPreferences[functionName]) {
            return getPromise(function (res, rej) {
                rej(new Error('Could not find plugin'));
            });
        }
        return getPromise(function (res, rej) {
            userPreferences[functionName].apply(userPreferences, __spreadArrays(args, [res]));
        });
    };
    return NestedObject;
}());
export { NestedObject };
var UserPreferencesMethods = /** @class */ (function (_super) {
    __extends(UserPreferencesMethods, _super);
    function UserPreferencesMethods() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the default channel id
     * @returns {Promise<string>}
     */
    UserPreferencesMethods.prototype.getDefaultChannelId = function () {
        return this.wrap('getDefaultChannelId', []);
    };
    /**
     * Set the default channel id
     * @param {string} id
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.setDefaultChannelId = function (id) {
        return this.wrap('setDefaultChannelId', [id]);
    };
    /**
     * Get a channel group
     * @param {string} groupId
     * @returns {Promise<WonderPushChannelGroup | null>}
     */
    UserPreferencesMethods.prototype.getChannelGroup = function (groupId) {
        return this.wrap('getChannelGroup', [groupId]);
    };
    /**
     * Get a channel
     * @param {string} channelId
     * @returns {Promise<WonderPushChannel | null>}
     */
    UserPreferencesMethods.prototype.getChannel = function (channelId) {
        return this.wrap('getChannel', [channelId]);
    };
    /**
     * Create, update and remove channel existing groups to match the given channel groups
     * @param {WonderPushChannelGroup[]} channelGroups
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.setChannelGroups = function (channelGroups) {
        return this.wrap('setChannelGroups', [channelGroups]);
    };
    /**
     * Create, update and remove channels to match the given channels
     * @param {WonderPushChannel[]} channels
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.setChannels = function (channels) {
        return this.wrap('setChannels', [channels]);
    };
    /**
     * Create or update a channel group
     * @param {WonderPushChannelGroup} channelGroup
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.putChannelGroup = function (channelGroup) {
        return this.wrap('putChannelGroup', [channelGroup]);
    };
    /**
     * Create or update a channel
     * @param {WonderPushChannel} channel
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.putChannel = function (channel) {
        return this.wrap('putChannel', [channel]);
    };
    /**
     * Remove a channel group
     * @param {string} groupId
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.removeChannelGroup = function (groupId) {
        return this.wrap('removeChannelGroup', [groupId]);
    };
    /**
     * Remove a channel
     * @param {string} channelId
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.removeChannel = function (channelId) {
        return this.wrap('removeChannel', [channelId]);
    };
    return UserPreferencesMethods;
}(NestedObject));
export { UserPreferencesMethods };
var WonderPushOriginal = /** @class */ (function (_super) {
    __extends(WonderPushOriginal, _super);
    function WonderPushOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.UserPreferences = new UserPreferencesMethods(_this);
        return _this;
    }
    WonderPushOriginal.prototype.setUserId = function (userId) { return cordova(this, "setUserId", {}, arguments); };
    WonderPushOriginal.prototype.setLogging = function (enabled) { return cordova(this, "setLogging", {}, arguments); };
    WonderPushOriginal.prototype.setDelegate = function (delegate) { return cordova(this, "setDelegate", {}, arguments); };
    WonderPushOriginal.prototype.getDelegate = function () { return cordova(this, "getDelegate", {}, arguments); };
    WonderPushOriginal.prototype.getUserId = function () { return cordova(this, "getUserId", {}, arguments); };
    WonderPushOriginal.prototype.getInstallationId = function () { return cordova(this, "getInstallationId", {}, arguments); };
    WonderPushOriginal.prototype.getDeviceId = function () { return cordova(this, "getDeviceId", {}, arguments); };
    WonderPushOriginal.prototype.getPushToken = function () { return cordova(this, "getPushToken", {}, arguments); };
    WonderPushOriginal.prototype.getAccessToken = function () { return cordova(this, "getAccessToken", {}, arguments); };
    WonderPushOriginal.prototype.trackEvent = function (type, attributes) { return cordova(this, "trackEvent", {}, arguments); };
    WonderPushOriginal.prototype.addTag = function (tag) { return cordova(this, "addTag", {}, arguments); };
    WonderPushOriginal.prototype.removeTag = function (tag) { return cordova(this, "removeTag", {}, arguments); };
    WonderPushOriginal.prototype.removeAllTags = function () { return cordova(this, "removeAllTags", {}, arguments); };
    WonderPushOriginal.prototype.getTags = function () { return cordova(this, "getTags", {}, arguments); };
    WonderPushOriginal.prototype.hasTag = function (tag) { return cordova(this, "hasTag", {}, arguments); };
    WonderPushOriginal.prototype.setProperty = function (field, value) { return cordova(this, "setProperty", {}, arguments); };
    WonderPushOriginal.prototype.unsetProperty = function (field) { return cordova(this, "unsetProperty", {}, arguments); };
    WonderPushOriginal.prototype.addProperty = function (field, value) { return cordova(this, "addProperty", {}, arguments); };
    WonderPushOriginal.prototype.removeProperty = function (field, value) { return cordova(this, "removeProperty", {}, arguments); };
    WonderPushOriginal.prototype.getPropertyValue = function (field) { return cordova(this, "getPropertyValue", {}, arguments); };
    WonderPushOriginal.prototype.getPropertyValues = function (field) { return cordova(this, "getPropertyValues", {}, arguments); };
    WonderPushOriginal.prototype.getProperties = function () { return cordova(this, "getProperties", {}, arguments); };
    WonderPushOriginal.prototype.putProperties = function (properties) { return cordova(this, "putProperties", {}, arguments); };
    WonderPushOriginal.prototype.subscribeToNotifications = function () { return cordova(this, "subscribeToNotifications", {}, arguments); };
    WonderPushOriginal.prototype.isSubscribedToNotifications = function () { return cordova(this, "isSubscribedToNotifications", {}, arguments); };
    WonderPushOriginal.prototype.unsubscribeFromNotifications = function () { return cordova(this, "unsubscribeFromNotifications", {}, arguments); };
    WonderPushOriginal.prototype.getUserConsent = function () { return cordova(this, "getUserConsent", {}, arguments); };
    WonderPushOriginal.prototype.setUserConsent = function (consent) { return cordova(this, "setUserConsent", {}, arguments); };
    WonderPushOriginal.prototype.clearAllData = function () { return cordova(this, "clearAllData", {}, arguments); };
    WonderPushOriginal.prototype.clearEventsHistory = function () { return cordova(this, "clearEventsHistory", {}, arguments); };
    WonderPushOriginal.prototype.clearPreferences = function () { return cordova(this, "clearPreferences", {}, arguments); };
    WonderPushOriginal.prototype.downloadAllData = function () { return cordova(this, "downloadAllData", {}, arguments); };
    WonderPushOriginal.pluginName = "WonderPush";
    WonderPushOriginal.plugin = "wonderpush-cordova-sdk";
    WonderPushOriginal.pluginRef = "WonderPush";
    WonderPushOriginal.repo = "https://github.com/wonderpush/wonderpush-cordova-sdk";
    WonderPushOriginal.install = "ionic cordova plugin add wonderpush-cordova-sdk --variable CLIENT_ID=YOUR_CLIENT_ID --variable CLIENT_SECRET=YOUR_CLIENT_SECRET ";
    WonderPushOriginal.installVariables = ["CLIENT_ID", "CLIENT_SECRET"];
    WonderPushOriginal.platforms = ["Android", "iOS"];
    return WonderPushOriginal;
}(IonicNativePlugin));
var WonderPush = new WonderPushOriginal();
export { WonderPush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3dvbmRlcnB1c2gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnQ2xGLHNCQUFZLFNBQWM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUVELDJCQUFJLEdBQUosVUFBUSxZQUFvQixFQUFFLElBQVc7UUFDdkMsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3RDLElBQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQy9ELElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDakUsT0FBTyxVQUFVLENBQUksVUFBQyxHQUFHLEVBQUUsR0FBRztnQkFDNUIsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxVQUFVLENBQUksVUFBQyxHQUFHLEVBQUUsR0FBRztZQUM1QixlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsaUJBQU0sSUFBSSxHQUFFLEdBQUcsR0FBRSxDQUFDO1FBQ3ZFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzt1QkFoREg7Ozs7SUFtRDRDLDBDQUFZOzs7O0lBQ3REOzs7T0FHRztJQUNILG9EQUFtQixHQUFuQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBZ0IscUJBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FB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b250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIGdldFByb21pc2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdvbmRlclB1c2hEZWxlZ2F0ZSB7XG4gIHVybEZvckRlZXBMaW5rKHVybDogc3RyaW5nLCBjYWxsYmFjazogKHVybD86IHN0cmluZykgPT4gdm9pZCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV29uZGVyUHVzaENoYW5uZWwge1xuICBpZDogc3RyaW5nO1xuICBncm91cElkPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgYnlwYXNzRG5kPzogYm9vbGVhbjtcbiAgc2hvd0JhZGdlPzogYm9vbGVhbjtcbiAgaW1wb3J0YW5jZT86IG51bWJlcjtcbiAgbGlnaHRzPzogYm9vbGVhbjtcbiAgbGlnaHRDb2xvcj86IG51bWJlcjtcbiAgdmlicmF0ZT86IGJvb2xlYW47XG4gIHNvdW5kPzogYm9vbGVhbjtcbiAgc291bmRVcmk/OiBzdHJpbmc7XG4gIGxvY2tzY3JlZW5WaXNpYmlsaXR5PzogbnVtYmVyO1xuICB2aWJyYXRlSW5TaWxlbnRNb2RlPzogYm9vbGVhbjtcbiAgY29sb3I/OiBudW1iZXI7XG4gIGxvY2FsT25seT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV29uZGVyUHVzaENoYW5uZWxHcm91cCB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG59XG5cbmNsYXNzIE5lc3RlZE9iamVjdCB7XG4gIHBsdWdpbk9iajogYW55O1xuICBjb25zdHJ1Y3RvcihwbHVnaW5PYmo6IGFueSkge1xuICAgIHRoaXMucGx1Z2luT2JqID0gcGx1Z2luT2JqO1xuICB9XG5cbiAgd3JhcDxUPihmdW5jdGlvbk5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBQcm9taXNlPFQ+IHtcbiAgICBjb25zdCBwbHVnaW4gPSBXb25kZXJQdXNoLmdldFBsdWdpbigpO1xuICAgIGNvbnN0IHVzZXJQcmVmZXJlbmNlcyA9IHBsdWdpbiA/IHBsdWdpbi5Vc2VyUHJlZmVyZW5jZXMgOiBudWxsO1xuICAgIGlmICghcGx1Z2luIHx8ICF1c2VyUHJlZmVyZW5jZXMgfHwgIXVzZXJQcmVmZXJlbmNlc1tmdW5jdGlvbk5hbWVdKSB7XG4gICAgICByZXR1cm4gZ2V0UHJvbWlzZTxUPigocmVzLCByZWopID0+IHtcbiAgICAgICAgcmVqKG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgcGx1Z2luJykpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRQcm9taXNlPFQ+KChyZXMsIHJlaikgPT4ge1xuICAgICAgdXNlclByZWZlcmVuY2VzW2Z1bmN0aW9uTmFtZV0uYXBwbHkodXNlclByZWZlcmVuY2VzLCBbLi4uYXJncywgcmVzXSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVzZXJQcmVmZXJlbmNlc01ldGhvZHMgZXh0ZW5kcyBOZXN0ZWRPYmplY3Qge1xuICAvKipcbiAgICogR2V0IHRoZSBkZWZhdWx0IGNoYW5uZWwgaWRcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIGdldERlZmF1bHRDaGFubmVsSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy53cmFwPHN0cmluZyB8IG51bGw+KCdnZXREZWZhdWx0Q2hhbm5lbElkJywgW10pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGVmYXVsdCBjaGFubmVsIGlkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgc2V0RGVmYXVsdENoYW5uZWxJZChpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy53cmFwKCdzZXREZWZhdWx0Q2hhbm5lbElkJywgW2lkXSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgY2hhbm5lbCBncm91cFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXBJZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxXb25kZXJQdXNoQ2hhbm5lbEdyb3VwIHwgbnVsbD59XG4gICAqL1xuICBnZXRDaGFubmVsR3JvdXAoZ3JvdXBJZDogc3RyaW5nKTogUHJvbWlzZTxXb25kZXJQdXNoQ2hhbm5lbEdyb3VwIHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLndyYXA8V29uZGVyUHVzaENoYW5uZWxHcm91cCB8IG51bGw+KCdnZXRDaGFubmVsR3JvdXAnLCBbZ3JvdXBJZF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGNoYW5uZWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoYW5uZWxJZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxXb25kZXJQdXNoQ2hhbm5lbCB8IG51bGw+fVxuICAgKi9cbiAgZ2V0Q2hhbm5lbChjaGFubmVsSWQ6IHN0cmluZyk6IFByb21pc2U8V29uZGVyUHVzaENoYW5uZWwgfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMud3JhcDxXb25kZXJQdXNoQ2hhbm5lbCB8IG51bGw+KCdnZXRDaGFubmVsJywgW2NoYW5uZWxJZF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSwgdXBkYXRlIGFuZCByZW1vdmUgY2hhbm5lbCBleGlzdGluZyBncm91cHMgdG8gbWF0Y2ggdGhlIGdpdmVuIGNoYW5uZWwgZ3JvdXBzXG4gICAqIEBwYXJhbSB7V29uZGVyUHVzaENoYW5uZWxHcm91cFtdfSBjaGFubmVsR3JvdXBzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBzZXRDaGFubmVsR3JvdXBzKGNoYW5uZWxHcm91cHM6IFdvbmRlclB1c2hDaGFubmVsR3JvdXBbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMud3JhcCgnc2V0Q2hhbm5lbEdyb3VwcycsIFtjaGFubmVsR3JvdXBzXSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlLCB1cGRhdGUgYW5kIHJlbW92ZSBjaGFubmVscyB0byBtYXRjaCB0aGUgZ2l2ZW4gY2hhbm5lbHNcbiAgICogQHBhcmFtIHtXb25kZXJQdXNoQ2hhbm5lbFtdfSBjaGFubmVsc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgc2V0Q2hhbm5lbHMoY2hhbm5lbHM6IFdvbmRlclB1c2hDaGFubmVsW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLndyYXAoJ3NldENoYW5uZWxzJywgW2NoYW5uZWxzXSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG9yIHVwZGF0ZSBhIGNoYW5uZWwgZ3JvdXBcbiAgICogQHBhcmFtIHtXb25kZXJQdXNoQ2hhbm5lbEdyb3VwfSBjaGFubmVsR3JvdXBcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIHB1dENoYW5uZWxHcm91cChjaGFubmVsR3JvdXA6IFdvbmRlclB1c2hDaGFubmVsR3JvdXApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLndyYXAoJ3B1dENoYW5uZWxHcm91cCcsIFtjaGFubmVsR3JvdXBdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgb3IgdXBkYXRlIGEgY2hhbm5lbFxuICAgKiBAcGFyYW0ge1dvbmRlclB1c2hDaGFubmVsfSBjaGFubmVsXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBwdXRDaGFubmVsKGNoYW5uZWw6IFdvbmRlclB1c2hDaGFubmVsKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy53cmFwKCdwdXRDaGFubmVsJywgW2NoYW5uZWxdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBjaGFubmVsIGdyb3VwXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBncm91cElkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICByZW1vdmVDaGFubmVsR3JvdXAoZ3JvdXBJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy53cmFwKCdyZW1vdmVDaGFubmVsR3JvdXAnLCBbZ3JvdXBJZF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGNoYW5uZWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoYW5uZWxJZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgcmVtb3ZlQ2hhbm5lbChjaGFubmVsSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMud3JhcCgncmVtb3ZlQ2hhbm5lbCcsIFtjaGFubmVsSWRdKTtcbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIFB1c2ggTm90aWZpY2F0aW9ucyAtIFdvbmRlclB1c2hcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIFNlbmQgdW5saW1pdGVkIHB1c2ggbm90aWZpY2F0aW9ucyB0byBpT1MgYW5kIEFuZHJvaWQgZGV2aWNlcy5cbiAqXG4gKiBHZXQgc3RhcnRlZCBpbiBtaW51dGVzOiBbSW9uaWMgUXVpY2tzdGFydCBHdWlkZV0oaHR0cHM6Ly9kb2NzLndvbmRlcnB1c2guY29tL2RvY3MvaW9uaWMtcXVpY2tzdGFydCkuXG4gKlxuICogQWR2YW5jZWQgc2VnbWVudGF0aW9uLCBhdXRvbWF0aW9uIGFuZCBwZXJzb25hbGl6YXRpb24gb2YgcHVzaCBtZXNzYWdlcyBmb3Ig4oKsMSBwZXIgMTAwMCBzdWJzY3JpYmVycy5cbiAqXG4gKiBSZXF1aXJlcyB0aGUgQ29yZG92YSBwbHVnaW4gYHdvbmRlcnB1c2gtY29yZG92YS1zZGtgLlxuICpcbiAqIFtXb25kZXJQdXNoIHB1c2ggbm90aWZpY2F0aW9uc10oaHR0cHM6Ly93d3cud29uZGVycHVzaC5jb20pIGFyZSB0aGUgbW9zdCBlZmZlY3RpdmUgd2F5XG4gKiB0byByZXRhaW4geW91ciB1c2VycyBhbmQgZ3JvdyB5b3VyIGF1ZGllbmNlIHdoaWxlIHJlbWFpbmluZyBmdWxseSBHRFBSIGNvbXBsaWFudC5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFdvbmRlclB1c2ggfSBmcm9tICdAaW9uaWMtbmF0aXZlL3dvbmRlcnB1c2gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHdvbmRlclB1c2g6IFdvbmRlclB1c2gpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIFN1YnNjcmliZSB1c2VyXG4gKiB0aGlzLndvbmRlclB1c2guc3Vic2NyaWJlVG9Ob3RpZmljYXRpb25zKClcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJVc2VyIHN1YnNjcmliZWQgdG8gbm90aWZpY2F0aW9uc1wiKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICpcbiAqIC8vIFNlbmQgYW4gZXZlbnQgKGEgcHVyY2hhc2UgaW4gdGhpcyBleGFtcGxlKVxuICogdGhpcy53b25kZXJQdXNoLnNlbmRFdmVudCgncHVyY2hhc2UnLCB7XG4gKiAgIGZsb2F0X3ByaWNlOiAxMi45OSxcbiAqICAgc3RyaW5nX3NrdTogXCJYMTIzNDU2XCJcbiAqIH0pO1xuICpcbiAqIC8vIFRhZyB1c2VycyAoYXMgY3VzdG9tZXJzKVxuICogdGhpcy53b25kZXJQdXNoLmFkZFRhZygnY3VzdG9tZXInKTtcbiAqXG4gKiAvLyBQZXJzb25hbGl6ZVxuICogLy8gMS4gU3RvcmUgdXNlciBkZXRhaWxzLlxuICogLy8gMi4gVXNlIHRob3NlIGRldGFpbHMgdG8gY3JlYXRlIHNlZ21lbnRzLlxuICogLy8gMy4gSW5jbHVkZSB0aG9zZSBkZXRhaWxzIGluIHlvdXIgbm90aWZpY2F0aW9ucy5cbiAqIHRoaXMud29uZGVyUHVzaC5wdXRQcm9wZXJ0aWVzKHtcbiAqICAgc3RyaW5nX25hbWU6ICdKb2huIEQuJyxcbiAqICAgaW50X2FnZTogMjRcbiAqIH0pO1xuICpcbiAqIC8vIEdEUFJcbiAqIC8vIDEuIHNldCBSRVFVSVJFU19VU0VSX0NPTlNFTlQ9dHJ1ZSB0byBlbmFibGUgR0RQUiBjb21wbGlhbmNlLlxuICogLy8gMi4gV29uZGVyUHVzaCBkb2Vzbid0IHN0YXJ0IHVudGlsIHNldFVzZXJDb25zZW50KHRydWUpIGlzIGNhbGxlZC5cbiAqIGNvbnN0IG9uQ2xpY2sgPSAodXNlckNvbnNlbnQ6IGJvb2xlYW4pID0+IHRoaXMud29uZGVyUHVzaC5zZXRVc2VyQ29uc2VudCh1c2VyQ29uc2VudCk7XG4gKlxuICogLy8gTGlzdGVuIHRvIG5vdGlmaWNhdGlvbiBjbGlja3NcbiAqIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3dvbmRlcnB1c2gubm90aWZpY2F0aW9uT3BlbicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gKiAgIGNvbnNvbGUubG9nKCdOb3RpZmljYXRpb24gb3BlbmVkJywgZXZlbnQubm90aWZpY2F0aW9uKTtcbiAqICAgaWYgKGV2ZW50Lm5vdGlmaWNhdGlvblR5cGUgPT09ICdkYXRhJykge1xuICogICAgIGNvbnNvbGUubG9nKCdTaWxlbnQgbm90aWZpY2F0aW9uJywgZXZlbnQubm90aWZpY2F0aW9uKTtcbiAqICAgfVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogV29uZGVyUHVzaENoYW5uZWxcbiAqIFdvbmRlclB1c2hDaGFubmVsR3JvdXBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXb25kZXJQdXNoJyxcbiAgcGx1Z2luOiAnd29uZGVycHVzaC1jb3Jkb3ZhLXNkaycsXG4gIHBsdWdpblJlZjogJ1dvbmRlclB1c2gnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3dvbmRlcnB1c2gvd29uZGVycHVzaC1jb3Jkb3ZhLXNkaycsXG4gIGluc3RhbGw6XG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCB3b25kZXJwdXNoLWNvcmRvdmEtc2RrIC0tdmFyaWFibGUgQ0xJRU5UX0lEPVlPVVJfQ0xJRU5UX0lEIC0tdmFyaWFibGUgQ0xJRU5UX1NFQ1JFVD1ZT1VSX0NMSUVOVF9TRUNSRVQgJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydDTElFTlRfSUQnLCAnQ0xJRU5UX1NFQ1JFVCddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV29uZGVyUHVzaCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNldHMgdGhlIHVzZXIgaWQsIHVzZWQgdG8gaWRlbnRpZnkgYSBzaW5nbGUgaWRlbnRpdHkgYWNyb3NzIG11bHRpcGxlIGRldmljZXMsXG4gICAqIGFuZCB0byBjb3JyZWN0bHkgaWRlbnRpZnkgbXVsdGlwbGUgdXNlcnMgb24gYSBzaW5nbGUgZGV2aWNlLlxuICAgKlxuICAgKiBJZiBub3QgY2FsbGVkLCB0aGUgbGFzdCB1c2VkIHVzZXIgaWQgaXQgYXNzdW1lZC4gRGVmYXVsdGluZyB0byBgbnVsbGAgaWYgbm9uZSBpcyBrbm93bi5cbiAgICpcbiAgICogVXBvbiBjaGFuZ2luZyB1c2VySWQsIHRoZSBhY2Nlc3MgdG9rZW4gaXMgd2lwZWQsIHNvIGF2b2lkIHVubmVjZXNzYXJ5IGNhbGxzLCBsaWtlIGNhbGxpbmcgd2l0aCBgbnVsbGBcbiAgICoganVzdCBiZWZvcmUgY2FsbGluZyB3aXRoIGEgdXNlciBpZC5cbiAgICpcbiAgICogQHBhcmFtIHs/c3RyaW5nfSB1c2VySWQgLSBUaGUgdXNlciBpZCwgdW5pcXVlIHRvIHlvdXIgYXBwbGljYXRpb24uXG4gICAqICAgVXNlIGBudWxsYCBmb3IgYW5vbnltb3VzIHVzZXJzLlxuICAgKlxuICAgKiAgIFlvdSBhcmUgc3Ryb25nbHkgZW5jb3VyYWdlZCB0byB1c2UgeW91ciBvd24gdW5pcXVlIGludGVybmFsIGlkZW50aWZpZXIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuXG4gIEBDb3Jkb3ZhKClcbiAgc2V0VXNlcklkKHVzZXJJZDogc3RyaW5nIHwgbnVsbCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnRyb2xzIG5hdGl2ZSBTREsgbG9nZ2luZy5cbiAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkIC0gV2hldGhlciB0byBlbmFibGUgbG9ncy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0TG9nZ2luZyhlbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB1cCBhIGRlbGVnYXRlIGZvciB0aWdodGVyIGludGVncmF0aW9uLCBvciByZW1vdmVzIGl0LlxuICAgKiBAcGFyYW0gez9Xb25kZXJQdXNoRGVsZWdhdGV9IGRlbGVnYXRlIC0gVGhlIGRlbGVnYXRlIHRvIHNldCwgb3IgYG51bGxgIHRvIHJlbW92ZSBpdC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0RGVsZWdhdGUoZGVsZWdhdGU6IFdvbmRlclB1c2hEZWxlZ2F0ZSB8IG51bGwpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXJyZW50IGRlbGVnYXRlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxXb25kZXJQdXNoRGVsZWdhdGUgfCBudWxsPn0gQSBwcm9taXNlIHdpdGggdGhlIGRlbGVnYXRlIG9mIG51bGxcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RGVsZWdhdGUoKTogUHJvbWlzZTxXb25kZXJQdXNoRGVsZWdhdGUgfCBudWxsPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVzZXJJZCBjdXJyZW50bHkgaW4gdXNlLCBgbnVsbGAgYnkgZGVmYXVsdC5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nIHwgbnVsbD59IEEgcHJvbWlzZSB3aXRoIHRoZSB1c2VyIElEIG9yIG51bGxcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VXNlcklkKCk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbnN0YWxsYXRpb25JZCBpZGVudGlmeWluZyB5b3VyIGFwcGxpY2F0aW9uIG9uIGEgZGV2aWNlLCBib25kIHRvIGEgc3BlY2lmaWMgdXNlcklkLlxuICAgKiBJZiB5b3Ugd2FudCB0byBzdG9yZSB0aGlzIGluZm9ybWF0aW9uIG9uIHlvdXIgc2VydmVycywga2VlcCB0aGUgY29ycmVzcG9uZGluZyB1c2VySWQgd2l0aCBpdC5cbiAgICogV2lsbCByZXR1cm4gYG51bGxgIHVudGlsIHRoZSBTREsgaXMgcHJvcGVybHkgaW5pdGlhbGl6ZWQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZyB8IG51bGw+fSBBIHByb21pc2Ugd2l0aCB0aGUgaW5zdGFsbGF0aW9uIElEIG9yIG51bGxcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SW5zdGFsbGF0aW9uSWQoKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVuaXF1ZSBkZXZpY2UgaWRlbnRpZmllclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmcgfCBudWxsPn0gQSBwcm9taXNlIHdpdGggdGhlIGRldmljZSBJRCBvciBudWxsXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldERldmljZUlkKCk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwdXNoIHRva2VuLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmcgfCBudWxsPn0gQSBwcm9taXNlIHdpdGggdGhlIHB1c2ggdG9rZW4gb3IgYG51bGxgXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFB1c2hUb2tlbigpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudGx5IHVzZWQgYWNjZXNzIHRva2VuLlxuICAgKiBSZXR1cm5zIGBudWxsYCB1bnRpbCB0aGUgU0RLIGlzIHByb3Blcmx5IGluaXRpYWxpemVkLlxuICAgKiBUaGlzIHRvZ2V0aGVyIHdpdGggeW91ciBjbGllbnQgc2VjcmV0IGdpdmVzIGVudGlyZSBjb250cm9sIHRvIHRoZSBjdXJyZW50IGluc3RhbGxhdGlvbiBhbmQgYXNzb2NpYXRlZCB1c2VyLCB5b3Ugc2hvdWxkIG5vdCBkaXNjbG9zZSBpdCB1bm5lY2Vzc2FyaWx5LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmcgfCBudWxsPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWNjZXNzVG9rZW4oKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYW4gZXZlbnQgdG8gYmUgdHJhY2tlZCB0byBXb25kZXJQdXNoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSBldmVudCB0eXBlLCBvciBuYW1lLiBFdmVudCB0eXBlcyBzdGFydGluZyB3aXRoIGFuIGBAYCBjaGFyYWN0ZXIgYXJlIHJlc2VydmVkLlxuICAgKiBAcGFyYW0gez9vYmplY3R9IFthdHRyaWJ1dGVzXSAtIEFuIG9iamVjdCBjb250YWluaW5nIGN1c3RvbSBwcm9wZXJ0aWVzIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSBldmVudC5cbiAgICogICBUaGUga2V5cyBzaG91bGQgYmUgcHJlZml4ZWQgYWNjb3JkaW5nIHRvIHRoZSB0eXBlIG9mIHRoZWlyIHZhbHVlcy5cbiAgICogICBZb3UgY2FuIGZpbmQgdGhlIGRldGFpbHMgaW4gdGhlIFtDb25jZXB0cyA+IEN1c3RvbSBmaWVsZHNdKGh0dHBzOi8vd3d3LndvbmRlcnB1c2guY29tL2RvY3MvZ3VpZGUvY3VzdG9tLWZpZWxkcykgc2VjdGlvbiBvZiB0aGUgZG9jdW1lbnRhdGlvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdHJhY2tFdmVudCh0eXBlOiBzdHJpbmcsIGF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIG9uZSBvciBtb3JlIHRhZ3MgdG8gdGhlIGluc3RhbGxhdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHRhZyAtIFRoZSB0YWdzIHRvIGFkZCB0byB0aGUgaW5zdGFsbGF0aW9uLiBZb3UgY2FuIHVzZSBlaXRoZXIgYSBzaW5nbGUgc3RyaW5nIGFyZ3VtZW50IG9yIGFuIGFycmF5IG9mIHN0cmluZ3MuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFkZFRhZyh0YWc6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBvbmUgb3IgbW9yZSB0YWdzIGZyb20gdGhlIGluc3RhbGxhdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHRhZyAtIFRoZSB0YWdzIHRvIHJlbW92ZSBmcm9tIHRoZSBpbnN0YWxsYXRpb24uIFlvdSBjYW4gdXNlIGVpdGhlciBhIHNpbmdsZSBzdHJpbmcgYXJndW1lbnQgb3IgYW4gYXJyYXkgb2Ygc3RyaW5ncy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVtb3ZlVGFnKHRhZzogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCB0YWdzIGZyb20gdGhlIGluc3RhbGxhdGlvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVtb3ZlQWxsVGFncygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCB0aGUgdGFncyBvZiB0aGUgaW5zdGFsbGF0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmdbXT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFRhZ3MoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXN0cyB3aGV0aGVyIHRoZSBpbnN0YWxsYXRpb24gaGFzIHRoZSBnaXZlbiB0YWcgYXR0YWNoZWQgdG8gaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgLSBUaGUgdGFnIHRvIHRlc3QuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoYXNUYWcodGFnOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgdG8gYSBnaXZlbiBpbnN0YWxsYXRpb24gcHJvcGVydHkuXG4gICAqXG4gICAqIFRoZSBwcmV2aW91cyB2YWx1ZSBpcyByZXBsYWNlZCBlbnRpcmVseS5cbiAgICogU2V0dGluZyBgdW5kZWZpbmVkYCBvciBgbnVsbGAgaGFzIHRoZSBzYW1lIGVmZmVjdCBhcyB7QGxpbmsgY29yZG92YS5wbHVnaW5zLldvbmRlclB1c2gjdW5zZXRQcm9wZXJ0eX0uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCAtIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBzZXRcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFByb3BlcnR5KGZpZWxkOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSB2YWx1ZSBvZiBhIGdpdmVuIGluc3RhbGxhdGlvbiBwcm9wZXJ0eS5cbiAgICpcbiAgICogVGhlIHByZXZpb3VzIHZhbHVlIGlzIHJlcGxhY2VkIHdpdGggYG51bGxgLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgLSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdW5zZXRQcm9wZXJ0eShmaWVsZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgdmFsdWUgdG8gYSBnaXZlbiBpbnN0YWxsYXRpb24gcHJvcGVydHkuXG4gICAqXG4gICAqIFRoZSBzdG9yZWQgdmFsdWUgaXMgbWFkZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBvbmUuXG4gICAqIElmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBhcnJheSwgYWxsIGl0cyB2YWx1ZXMgYXJlIGFkZGVkLlxuICAgKiBJZiBhIHZhbHVlIGlzIGFscmVhZHkgcHJlc2VudCBpbiB0aGUgc3RvcmVkIHZhbHVlLCBpdCB3b24ndCBiZSBhZGRlZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIC0gVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYWRkUHJvcGVydHkoZmllbGQ6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSB2YWx1ZSBmcm9tIGEgZ2l2ZW4gaW5zdGFsbGF0aW9uIHByb3BlcnR5LlxuICAgKlxuICAgKiBUaGUgc3RvcmVkIHZhbHVlIGlzIG1hZGUgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgb25lLlxuICAgKiBJZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gYXJyYXksIGFsbCBpdHMgdmFsdWVzIGFyZSByZW1vdmVkLlxuICAgKiBJZiBhIHZhbHVlIGlzIHByZXNlbnQgbXVsdGlwbGUgdGltZXMgaW4gdGhlIHN0b3JlZCB2YWx1ZSwgdGhleSB3aWxsIGFsbCBiZSByZW1vdmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgLSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlbW92ZVByb3BlcnR5KGZpZWxkOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIGdpdmVuIGluc3RhbGxhdGlvbiBwcm9wZXJ0eS5cbiAgICpcbiAgICogSWYgdGhlIHByb3BlcnR5IHN0b3JlcyBhbiBhcnJheSwgb25seSB0aGUgZmlyc3QgdmFsdWUgaXMgcmV0dXJuZWQuXG4gICAqIFRoaXMgd2F5IHlvdSBkb24ndCBoYXZlIHRvIGRlYWwgd2l0aCBwb3RlbnRpYWwgYXJyYXlzIGlmIHRoYXQgcHJvcGVydHkgaXMgbm90IHN1cHBvc2VkIHRvIGhvbGQgb25lLlxuICAgKiBSZXR1cm5zIGBudWxsYCBpZiB0aGUgcHJvcGVydHkgaXMgYWJzZW50IG9yIGhhcyBhbiBlbXB0eSBhcnJheSB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIC0gVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIHJlYWQgdmFsdWVzIGZyb21cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0UHJvcGVydHlWYWx1ZShmaWVsZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgdmFsdWVzIG9mIGEgZ2l2ZW4gaW5zdGFsbGF0aW9uIHByb3BlcnR5LlxuICAgKlxuICAgKiBJZiB0aGUgcHJvcGVydHkgZG9lcyBub3Qgc3RvcmUgYW4gYXJyYXksIGFuIGFycmF5IGlzIHJldHVybmVkIG5ldmVydGhlbGVzcy5cbiAgICogVGhpcyB3YXkgeW91IGRvbid0IGhhdmUgdG8gZGVhbCB3aXRoIHBvdGVudGlhbCBzY2FsYXIgdmFsdWVzIGlmIHRoYXQgcHJvcGVydHkgaXMgc3VwcG9zZWQgdG8gaG9sZCBhbiBhcnJheS5cbiAgICogUmV0dXJucyBhbiBlbXB0eSBhcnJheSBpbnN0ZWFkIG9mIGBudWxsYCBpZiB0aGUgcHJvcGVydHkgaXMgYWJzZW50LlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IHdyYXBwaW5nIGFueSBzY2FsYXIgdmFsdWUgaGVsZCBieSB0aGUgcHJvcGVydHkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCAtIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byByZWFkIHZhbHVlcyBmcm9tXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueVtdPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0UHJvcGVydHlWYWx1ZXMoZmllbGQ6IHN0cmluZyk6IFByb21pc2U8YW55W10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGF0ZXN0IGtub3duIGN1c3RvbSBwcm9wZXJ0aWVzIGF0dGFjaGVkIHRvIHRoZSBjdXJyZW50IGluc3RhbGxhdGlvbiBvYmplY3Qgc3RvcmVkIGJ5IFdvbmRlclB1c2guXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHtbcDogc3RyaW5nXTogYW55fT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFByb3BlcnRpZXMoKTogUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IGFueSB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHByb3BlcnRpZXMgYXR0YWNoZWQgdG8gdGhlIGN1cnJlbnQgaW5zdGFsbGF0aW9uIG9iamVjdCBzdG9yZWQgYnkgV29uZGVyUHVzaC5cbiAgICpcbiAgICogSW4gb3JkZXIgdG8gcmVtb3ZlIGEgdmFsdWUsIHVzZSBgbnVsbGAuXG4gICAqXG4gICAqIEBwYXJhbSB7e1twOiBzdHJpbmddOiBhbnl9fSBwcm9wZXJ0aWVzLiBUaGUga2V5cyBzaG91bGQgYmUgcHJlZml4ZWQgYWNjb3JkaW5nIHRvIHRoZSB0eXBlIG9mIHRoZWlyIHZhbHVlcy4gWW91IGNhbiBmaW5kIHRoZSBkZXRhaWxzIGluIHRoZSBbU2VnbWVudGF0aW9uID4gUHJvcGVydGllc10oaHR0cHM6Ly9kb2NzLndvbmRlcnB1c2guY29tL2RvY3MvcHJvcGVydGllcyNzZWN0aW9uLWN1c3RvbS1wcm9wZXJ0aWVzKSBzZWN0aW9uIG9mIHRoZSBkb2N1bWVudGF0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwdXRQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmVzIHRvIHB1c2ggbm90aWZpY2F0aW9uIGFuZCByZWdpc3RlcnMgdGhlIGRldmljZSB0b2tlbiB3aXRoIFdvbmRlUHVzaC5cbiAgICpcbiAgICogT24gaU9TLCB5b3UgKiptdXN0KiogY2FsbCB0aGUgZm9sbG93aW5nIG1ldGhvZCBhdCBsZWFzdCBvbmNlIHRvIG1ha2UgdGhlIG5vdGlmaWNhdGlvbiB2aXNpYmxlIHRvIHRoZSB1c2VyLlxuICAgKlxuICAgKiAtIFlvdSBjYW4gY2FsbCB0aGlzIG1ldGhvZCBtdWx0aXBsZSB0aW1lcy4gVGhlIHVzZXIgaXMgb25seSBwcm9tcHRlZCBmb3IgcGVybWlzc2lvbiBieSBpT1Mgb25jZS5cbiAgICogLSBUaGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgdGhpcyBtZXRob2QgaWYgdGhlIHBlcm1pc3Npb24gaGFzIGFscmVhZHkgYmVlbiBncmFudGVkLCBidXQgaXQgZG9lcyBub3QgaGFybSBlaXRoZXIuXG4gICAqIC0gSWYgdGhlIHBlcm1pc3Npb24gaGFzIGJlZW4gZGVuaWVkIGluIHRoZSBPUywgdGhlIHVzZXIgd2lsbCBzdGF5IHNvZnQgb3B0LW91dC5cbiAgICpcbiAgICogQmVjYXVzZSBpbiBpT1MgeW91IG9ubHkgaGF2ZSAqb25lKiBjaGFuY2UgZm9yIHByb21wdGluZyB0aGUgdXNlciwgeW91IHNob3VsZCBmaW5kIGEgZ29vZCB0aW1pbmcgZm9yIHRoYXQuXG4gICAqIEZvciBhIHN0YXJ0LCB5b3UgY2FuIHN5c3RlbWF0aWNhbGx5IGNhbGwgaXQgd2hlbiB0aGUgYXBwbGljYXRpb24gc3RhcnRzLCBzbyB0aGF0IHRoZSB1c2VyIHdpbGwgYmUgcHJvbXB0ZWQgZGlyZWN0bHkgYXQgdGhlIGZpcnN0IGxhdW5jaC5cbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHVwb24gc3VjY2Vzc2Z1bCBzdWJzY3JpcHRpb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3Vic2NyaWJlVG9Ob3RpZmljYXRpb25zKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgbm90aWZpY2F0aW9ucyBhcmUgZW5hYmxlZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzU3Vic2NyaWJlZFRvTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmVzIGZyb20gcHVzaCBub3RpZmljYXRpb24uXG4gICAqIFRoaXMgbWV0aG9kIG1hcmtzIHRoZSB1c2VyIGFzIHNvZnQgb3B0LW91dC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdW5zdWJzY3JpYmVGcm9tTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyB1c2VyIGNvbnNlbnQgc3RhdGUuXG4gICAqIFJldHVybnMgdW5kZWZpbmVkIGlmIG5vIGV4cGxpY2l0IGNvbnNlbnQgd2FzIHNldC5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFVzZXJDb25zZW50KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm92aWRlcyBvciB3aXRoZHJhd3MgdXNlciBjb25zZW50LlxuICAgKiBJZiB0aGUgYHJlcXVpcmVzVXNlckNvbnNlbnRgIGluaXRpYWxpemF0aW9uIG9wdGlvbiBpcyB0cnVlLFxuICAgKiB0aGUgd2hvbGUgU0RLIGlzIHBhdXNlZCBhbmQgbm8gZGF0YSBpcyBzZW50IHRvIFdvbmRlclB1c2gsIHVudGlsIGNvbnNlbnQgaXMgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY29uc2VudCAtXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFVzZXJDb25zZW50KGNvbnNlbnQ6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW55IGxvY2FsIHN0b3JhZ2UgYW5kIGFzayB0aGUgV29uZGVyUHVzaCBzZXJ2ZXJzIHRvIGRlbGV0ZSBhbnkgZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIGFsbCBsb2NhbCBpbnN0YWxsYXRpb25zIGFuZCByZWxhdGVkIHVzZXJzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbGVhckFsbERhdGEoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQXNrIHRoZSBXb25kZXJQdXNoIHNlcnZlcnMgdG8gZGVsZXRlIGFueSBldmVudCBhc3NvY2lhdGVkIHdpdGggdGhlIGFsbCBsb2NhbCBpbnN0YWxsYXRpb25zLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbGVhckV2ZW50c0hpc3RvcnkoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQXNrIHRoZSBXb25kZXJQdXNoIHNlcnZlcnMgdG8gZGVsZXRlIGFueSBjdXN0b20gZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIGFsbCBsb2NhbCBpbnN0YWxsYXRpb25zIGFuZCByZWxhdGVkIHVzZXJzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbGVhclByZWZlcmVuY2VzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYXRlcyB0aGUgZG93bmxvYWQgb2YgYWxsIHVzZXIgcmVtb3RlIGFuZCBsb2NhbCBkYXRhLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkb3dubG9hZEFsbERhdGEoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBVc2VyUHJlZmVyZW5jZXMgPSBuZXcgVXNlclByZWZlcmVuY2VzTWV0aG9kcyh0aGlzKTtcbn1cbiJdfQ==