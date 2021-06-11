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
import { IonicNativePlugin, cordovaInstance, cordova, checkAvailability } from '@ionic-native/core';
import { Observable } from 'rxjs';
var PushapePushOriginal = /** @class */ (function (_super) {
    __extends(PushapePushOriginal, _super);
    function PushapePushOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Init push notifications
     * @param options {PushapeOptions}
     * @return {PushObject}
     */
    PushapePushOriginal.prototype.init = function (options) {
        return new PushObject(options);
    };
    PushapePushOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    PushapePushOriginal.prototype.createChannel = function (channel) { return cordova(this, "createChannel", { "callbackOrder": "reverse" }, arguments); };
    PushapePushOriginal.prototype.deleteChannel = function (id) { return cordova(this, "deleteChannel", { "callbackOrder": "reverse" }, arguments); };
    PushapePushOriginal.prototype.listChannels = function () { return cordova(this, "listChannels", {}, arguments); };
    PushapePushOriginal.pluginName = "PushapePush";
    PushapePushOriginal.plugin = "pushape-cordova-push";
    PushapePushOriginal.pluginRef = "PushNotification";
    PushapePushOriginal.repo = "https://github.com/gluelabs/pushape-cordova-push";
    PushapePushOriginal.install = "ionic cordova plugin add pushape-cordova-push";
    PushapePushOriginal.platforms = ["Android", "Browser", "iOS"];
    return PushapePushOriginal;
}(IonicNativePlugin));
var PushapePush = new PushapePushOriginal();
export { PushapePush };
var PushObject = /** @class */ (function () {
    function PushObject(options) {
        if (checkAvailability('PushNotification', 'init', 'PushNotification') === true) {
            if (typeof window !== 'undefined') {
                this._objectInstance = window.PushNotification.init(options);
            }
        }
    }
    PushObject.prototype.on = function (event) { return cordovaInstance(this, "on", { "observable": true, "clearFunction": "off", "clearWithArgs": true }, arguments); };
    PushObject.prototype.unregister = function () { return cordovaInstance(this, "unregister", {}, arguments); };
    PushObject.prototype.setApplicationIconBadgeNumber = function (count) { return cordovaInstance(this, "setApplicationIconBadgeNumber", { "callbackOrder": "reverse" }, arguments); };
    PushObject.prototype.getApplicationIconBadgeNumber = function () { return cordovaInstance(this, "getApplicationIconBadgeNumber", {}, arguments); };
    PushObject.prototype.finish = function (id) { return cordovaInstance(this, "finish", { "callbackOrder": "reverse" }, arguments); };
    PushObject.prototype.clearAllNotifications = function () { return cordovaInstance(this, "clearAllNotifications", {}, arguments); };
    PushObject.prototype.subscribe = function (topic) { return cordovaInstance(this, "subscribe", {}, arguments); };
    PushObject.prototype.unsubscribe = function (topic) { return cordovaInstance(this, "unsubscribe", {}, arguments); };
    PushObject.pluginName = "PushapePush";
    PushObject.plugin = "pushape-cordova-push";
    PushObject.pluginRef = "PushNotification";
    return PushObject;
}());
export { PushObject };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3B1c2hhcGUtcHVzaC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTywrQ0FBdUQsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTRTRCwrQkFBaUI7Ozs7SUFDaEQ7Ozs7T0FJRztJQUNILDBCQUFJLEdBQUosVUFBSyxPQUF1QjtRQUMxQixPQUFPLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFPRCxtQ0FBYTtJQVdiLG1DQUFhLGFBQUMsT0FBaUI7SUFXL0IsbUNBQWEsYUFBQyxFQUFXO0lBU3pCLGtDQUFZOzs7Ozs7O3NCQTVWZDtFQThTaUMsaUJBQWlCO1NBQXJDLFdBQVc7O0lBOER0QixvQkFBWSxPQUF1QjtRQUNqQyxJQUFJLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUM5RSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzlEO1NBQ0Y7SUFDSCxDQUFDO0lBWUQsdUJBQUUsYUFBQyxLQUFnQjtJQVVuQiwrQkFBVTtJQWVWLGtEQUE2QixhQUFDLEtBQWM7SUFRNUMsa0RBQTZCO0lBYTdCLDJCQUFNLGFBQUMsRUFBVztJQVFsQiwwQ0FBcUI7SUFVckIsOEJBQVMsYUFBQyxLQUFhO0lBVXZCLGdDQUFXLGFBQUMsS0FBYTs7OztxQkF4YzNCOztTQXlXYSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhSW5zdGFuY2UsIElvbmljTmF0aXZlUGx1Z2luLCBjaGVja0F2YWlsYWJpbGl0eSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbmV4cG9ydCB0eXBlIEV2ZW50UmVzcG9uc2UgPSBQdXNoYXBlUmVnaXN0cmF0aW9uRXZlbnRSZXNwb25zZSAmXG4gIFJlZ2lzdHJhdGlvbkV2ZW50UmVzcG9uc2UgJlxuICBOb3RpZmljYXRpb25FdmVudFJlc3BvbnNlICZcbiAgRXJyb3I7XG5cbmludGVyZmFjZSBSZWdpc3RyYXRpb25FdmVudFJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFRoZSByZWdpc3RyYXRpb24gSUQgcHJvdmlkZWQgYnkgdGhlIDNyZCBwYXJ0eSByZW1vdGUgcHVzaCBzZXJ2aWNlLlxuICAgKi9cbiAgcmVnaXN0cmF0aW9uSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25FdmVudFJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFRoZSB0ZXh0IG9mIHRoZSBwdXNoIG1lc3NhZ2Ugc2VudCBmcm9tIHRoZSAzcmQgcGFydHkgc2VydmljZS5cbiAgICovXG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBvcHRpb25hbCB0aXRsZSBvZiB0aGUgcHVzaCBtZXNzYWdlIHNlbnQgZnJvbSB0aGUgM3JkIHBhcnR5IHNlcnZpY2UuXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgbWVzc2FnZXMgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBiYWRnZSBpT1Mgb3IgbWVzc2FnZSBjb3VudCBpbiB0aGUgbm90aWZpY2F0aW9uIHNoYWRlIGluIEFuZHJvaWQuXG4gICAqIEZvciB3aW5kb3dzLCBpdCByZXByZXNlbnRzIHRoZSB2YWx1ZSBpbiB0aGUgYmFkZ2Ugbm90aWZpY2F0aW9uIHdoaWNoIGNvdWxkIGJlIGEgbnVtYmVyIG9yIGEgc3RhdHVzIGdseXBoLlxuICAgKi9cbiAgY291bnQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBzb3VuZCBmaWxlIHRvIGJlIHBsYXllZCB1cG9uIHJlY2VpcHQgb2YgdGhlIG5vdGlmaWNhdGlvbi5cbiAgICovXG4gIHNvdW5kOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgcGF0aCBvZiB0aGUgaW1hZ2UgZmlsZSB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIG5vdGlmaWNhdGlvbi5cbiAgICovXG4gIGltYWdlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBjb2xsZWN0aW9uIG9mIGRhdGEgc2VudCBieSB0aGUgM3JkIHBhcnR5IHB1c2ggc2VydmljZSB0aGF0IGRvZXMgbm90IGZpdCBpbiB0aGUgYWJvdmUgcHJvcGVydGllcy5cbiAgICovXG4gIGFkZGl0aW9uYWxEYXRhOiBOb3RpZmljYXRpb25FdmVudEFkZGl0aW9uYWxEYXRhICYgYW55O1xufVxuXG4vKipcbiAqIExvb3NlbmVkIHVwIHdpdGggYSBkaWN0aW9uYXJ5IG5vdGF0aW9uLCBidXQgYWxsIG5vbi1kZWZpbmVkIHByb3BlcnRpZXMgbmVlZCB0byB1c2UgKG1hcFsncHJvcCddKSBub3RhdGlvblxuICpcbiAqIElkZWFsbHkgdGhlIGRldmVsb3BlciB3b3VsZCBvdmVybG9hZCAobWVyZ2VkIGRlY2xhcmF0aW9uKSB0aGlzIG9yIGNyZWF0ZSBhIG5ldyBpbnRlcmZhY2UgdGhhdCB3b3VsZCBleHRlbmQgdGhpcyBvbmVcbiAqIHNvIHRoYXQgaGUgY291bGQgc3BlY2lmeSBhbnkgY3VzdG9tIGNvZGUgd2l0aG91dCBoYXZpbmcgdG8gdXNlIGFycmF5IG5vdGF0aW9uIChtYXBbJ3Byb3AnXSkgZm9yIGFsbCBvZiB0aGVtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkV2ZW50QWRkaXRpb25hbERhdGEge1xuICAvKipcbiAgICogV2hldGhlciB0aGUgbm90aWZpY2F0aW9uIHdhcyByZWNlaXZlZCB3aGlsZSB0aGUgYXBwIHdhcyBpbiB0aGUgZm9yZWdyb3VuZFxuICAgKi9cbiAgZm9yZWdyb3VuZD86IGJvb2xlYW47XG4gIGNvbGxhcHNlX2tleT86IHN0cmluZztcbiAgY29sZHN0YXJ0PzogYm9vbGVhbjtcbiAgZnJvbT86IHN0cmluZztcbiAgbm90SWQ/OiBzdHJpbmc7XG5cbiAgW25hbWU6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT1NQdXNoT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHVzZSBwcm9kIG9yIHNhbmRib3ggR0NNIHNldHRpbmcuXG4gICAqL1xuICBmY21TYW5kYm94PzogYm9vbGVhbiB8IHN0cmluZztcblxuICAvKipcbiAgICogSWYgdHJ1ZSB0aGUgZGV2aWNlIHNob3dzIGFuIGFsZXJ0IG9uIHJlY2VpcHQgb2Ygbm90aWZpY2F0aW9uLlxuICAgKiAqKk5vdGUqKjogdGhlIHZhbHVlIHlvdSBzZXQgdGhpcyBvcHRpb24gdG8gdGhlIGZpcnN0IHRpbWUgeW91IGNhbGwgdGhlIGluaXRcbiAgICogbWV0aG9kIHdpbGwgYmUgaG93IHRoZSBhcHBsaWNhdGlvbiBhbHdheXMgYWN0cy4gT25jZSB0aGlzIGlzIHNldFxuICAgKiBwcm9ncmFtbWF0aWNhbGx5IGluIHRoZSBpbml0IG1ldGhvZCBpdCBjYW4gb25seSBiZSBjaGFuZ2VkIG1hbnVhbGx5IGJ5IHRoZVxuICAgKiB1c2VyIGluIFNldHRpbmdzPk5vdGlmaWNhdGlvbnM+QXBwIE5hbWUuIFRoaXMgaXMgbm9ybWFsIGlPUyBiZWhhdmlvdXIuXG4gICAqL1xuICBhbGVydD86IGJvb2xlYW4gfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIElmIHRydWUgdGhlIGRldmljZSBzZXRzIHRoZSBiYWRnZSBudW1iZXIgb24gcmVjZWlwdCBvZiBub3RpZmljYXRpb24uXG4gICAqICoqTm90ZSoqOiB0aGUgdmFsdWUgeW91IHNldCB0aGlzIG9wdGlvbiB0byB0aGUgZmlyc3QgdGltZSB5b3UgY2FsbCB0aGUgaW5pdFxuICAgKiBtZXRob2Qgd2lsbCBiZSBob3cgdGhlIGFwcGxpY2F0aW9uIGFsd2F5cyBhY3RzLiBPbmNlIHRoaXMgaXMgc2V0XG4gICAqIHByb2dyYW1tYXRpY2FsbHkgaW4gdGhlIGluaXQgbWV0aG9kIGl0IGNhbiBvbmx5IGJlIGNoYW5nZWQgbWFudWFsbHkgYnkgdGhlXG4gICAqIHVzZXIgaW4gU2V0dGluZ3M+Tm90aWZpY2F0aW9ucz5BcHAgTmFtZS4gVGhpcyBpcyBub3JtYWwgaU9TIGJlaGF2aW91ci5cbiAgICovXG4gIGJhZGdlPzogYm9vbGVhbiB8IHN0cmluZztcblxuICAvKipcbiAgICogSWYgdHJ1ZSB0aGUgZGV2aWNlIHBsYXlzIGEgc291bmQgb24gcmVjZWlwdCBvZiBub3RpZmljYXRpb24uXG4gICAqICoqTm90ZSoqOiB0aGUgdmFsdWUgeW91IHNldCB0aGlzIG9wdGlvbiB0byB0aGUgZmlyc3QgdGltZSB5b3UgY2FsbCB0aGUgaW5pdFxuICAgKiBtZXRob2Qgd2lsbCBiZSBob3cgdGhlIGFwcGxpY2F0aW9uIGFsd2F5cyBhY3RzLiBPbmNlIHRoaXMgaXMgc2V0XG4gICAqIHByb2dyYW1tYXRpY2FsbHkgaW4gdGhlIGluaXQgbWV0aG9kIGl0IGNhbiBvbmx5IGJlIGNoYW5nZWQgbWFudWFsbHkgYnkgdGhlXG4gICAqIHVzZXIgaW4gU2V0dGluZ3M+Tm90aWZpY2F0aW9ucz5BcHAgTmFtZS4gVGhpcyBpcyBub3JtYWwgaU9TIGJlaGF2aW91ci5cbiAgICovXG4gIHNvdW5kPzogYm9vbGVhbiB8IHN0cmluZztcblxuICAvKipcbiAgICogSWYgdHJ1ZSB0aGUgYmFkZ2Ugd2lsbCBiZSBjbGVhcmVkIG9uIGFwcCBzdGFydHVwLlxuICAgKi9cbiAgY2xlYXJCYWRnZT86IGJvb2xlYW4gfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIElmIHRoZSBhcnJheSBjb250YWlucyBvbmUgb3IgbW9yZSBzdHJpbmdzIGVhY2ggc3RyaW5nIHdpbGwgYmUgdXNlZCB0b1xuICAgKiBzdWJzY3JpYmUgdG8gYSBHY21QdWJTdWIgdG9waWMuXG4gICAqICoqTm90ZSoqOiBvbmx5IHVzYWJsZSBpbiBjb25qdW5jdGlvbiB3aXRoIGBzZW5kZXJJRGAuXG4gICAqL1xuICB0b3BpY3M/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogVGhlIGRhdGEgcmVxdWlyZWQgaW4gb3JkZXIgdG8gZW5hYmxlIEFjdGlvbiBCdXR0b25zIGZvciBpT1MuXG4gICAqIEFjdGlvbiBCdXR0b25zIG9uIGlPUyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9waG9uZWdhcC9waG9uZWdhcC1wbHVnaW4tcHVzaC9ibG9iL21hc3Rlci9kb2NzL1BBWUxPQUQubWQjYWN0aW9uLWJ1dHRvbnMtMVxuICAgKi9cbiAgY2F0ZWdvcmllcz86IENhdGVnb3J5QXJyYXk7XG5cbiAgLyoqXG4gICAqIElmIHRydWUgdGhlIGRldmljZSB3aWxsIGJlIHNldCB1cCB0byByZWNlaXZlIFZvSVAgUHVzaCBub3RpZmljYXRpb25zIGFuZCB0aGVcbiAgICogb3RoZXIgb3B0aW9ucyB3aWxsIGJlIGlnbm9yZWQgc2luY2UgVm9JUCBub3RpZmljYXRpb25zIGFyZSBzaWxlbnRcbiAgICogbm90aWZpY2F0aW9ucyB0aGF0IHNob3VsZCBiZSBoYW5kbGVkIGluIHRoZSBcIm5vdGlmaWNhdGlvblwiIGV2ZW50LlxuICAgKi9cbiAgdm9pcD86IGJvb2xlYW4gfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2F0ZWdvcnlBcnJheSB7XG4gIFtuYW1lOiBzdHJpbmddOiBDYXRlZ29yeUFjdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeUFjdGlvbiB7XG4gIHllcz86IENhdGVnb3J5QWN0aW9uRGF0YTtcbiAgbm8/OiBDYXRlZ29yeUFjdGlvbkRhdGE7XG4gIG1heWJlPzogQ2F0ZWdvcnlBY3Rpb25EYXRhO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhdGVnb3J5QWN0aW9uRGF0YSB7XG4gIGNhbGxiYWNrOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGZvcmVncm91bmQ6IGJvb2xlYW47XG4gIGRlc3RydWN0aXZlOiBib29sZWFuO1xuICBpbmxpbmU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuZHJvaWRQdXNoT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBNYXBzIHRvIHRoZSBwcm9qZWN0IG51bWJlciBpbiB0aGUgR29vZ2xlIERldmVsb3BlciBDb25zb2xlLlxuICAgKi9cbiAgc2VuZGVySUQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIGEgZHJhd2FibGUgcmVzb3VyY2UgdG8gdXNlIGFzIHRoZSBzbWFsbC1pY29uLiBUaGUgbmFtZSBzaG91bGRcbiAgICogbm90IGluY2x1ZGUgdGhlIGV4dGVuc2lvbi5cbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHNtYWxsIGljb24gb24gQW5kcm9pZCA1LjAgYW5kIGdyZWF0ZXIuXG4gICAqIFtTdXBwb3J0ZWQgRm9ybWF0c10oaHR0cDovL2RldmVsb3Blci5hbmRyb2lkLmNvbS9pbnRsL3J1L3JlZmVyZW5jZS9hbmRyb2lkL2dyYXBoaWNzL0NvbG9yLmh0bWwjcGFyc2VDb2xvcihqYXZhLmxhbmcuU3RyaW5nKSlcbiAgICovXG4gIGljb25Db2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogSWYgdHJ1ZSBpdCBwbGF5cyB0aGUgc291bmQgc3BlY2lmaWVkIGluIHRoZSBwdXNoIGRhdGEgb3IgdGhlIGRlZmF1bHQgc3lzdGVtXG4gICAqIHNvdW5kLlxuICAgKi9cbiAgc291bmQ/OiBib29sZWFuIHwgc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJZiB0cnVlIHRoZSBkZXZpY2UgdmlicmF0ZXMgb24gcmVjZWlwdCBvZiBub3RpZmljYXRpb24uXG4gICAqL1xuICB2aWJyYXRlPzogYm9vbGVhbiB8IHN0cmluZztcblxuICAvKipcbiAgICogSWYgdHJ1ZSB0aGUgaWNvbiBiYWRnZSB3aWxsIGJlIGNsZWFyZWQgb24gaW5pdCBhbmQgYmVmb3JlIHB1c2ggbWVzc2FnZXMgYXJlIHByb2Nlc3NlZC5cbiAgICovXG4gIGNsZWFyQmFkZ2U/OiBib29sZWFuIHwgc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJZiB0cnVlIHRoZSBhcHAgY2xlYXJzIGFsbCBwZW5kaW5nIG5vdGlmaWNhdGlvbnMgd2hlbiBpdCBpcyBjbG9zZWQuXG4gICAqL1xuICBjbGVhck5vdGlmaWNhdGlvbnM/OiBib29sZWFuIHwgc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJZiB0cnVlIHdpbGwgYWx3YXlzIHNob3cgYSBub3RpZmljYXRpb24sIGV2ZW4gd2hlbiB0aGUgYXBwIGlzIG9uIHRoZVxuICAgKiBmb3JlZ3JvdW5kLlxuICAgKi9cbiAgZm9yY2VTaG93PzogYm9vbGVhbiB8IHN0cmluZztcblxuICAvKipcbiAgICogSWYgdGhlIGFycmF5IGNvbnRhaW5zIG9uZSBvciBtb3JlIHN0cmluZ3MgZWFjaCBzdHJpbmcgd2lsbCBiZSB1c2VkIHRvXG4gICAqIHN1YnNjcmliZSB0byBhIEdjbVB1YlN1YiB0b3BpYy5cbiAgICovXG4gIHRvcGljcz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBUaGUga2V5IHRvIHNlYXJjaCBmb3IgdGV4dCBvZiBub3RpZmljYXRpb24uXG4gICAqL1xuICBtZXNzYWdlS2V5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUga2V5IHRvIHNlYXJjaCBmb3IgdGl0bGUgb2Ygbm90aWZpY2F0aW9uLlxuICAgKi9cbiAgdGl0bGVLZXk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJvd3NlclB1c2hPcHRpb25zIHtcbiAgLyoqXG4gICAqIE9wdGlvbmFsLiBZb3VyIEdDTSBBUEkga2V5IGlmIHlvdSBhcmUgdXNpbmcgVkFQSUQga2V5cy5cbiAgICovXG4gIGFwcGxpY2F0aW9uU2VydmVyS2V5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBVUkwgZm9yIHRoZSBwdXNoIHNlcnZlciB5b3Ugd2FudCB0byB1c2UuXG4gICAqIERlZmF1bHQ6IGh0dHA6Ly9wdXNoLmFwaS5waG9uZWdhcC5jb20vdjEvcHVzaCAgT3B0aW9uYWwuXG4gICAqL1xuICBwdXNoU2VydmljZVVSTD86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFB1c2hPcHRpb25zIHtcbiAgaW9zPzogSU9TUHVzaE9wdGlvbnM7XG4gIGFuZHJvaWQ/OiBBbmRyb2lkUHVzaE9wdGlvbnM7XG4gIHdpbmRvd3M/OiBhbnk7XG4gIGJyb3dzZXI/OiBCcm93c2VyUHVzaE9wdGlvbnM7XG59XG5cbmV4cG9ydCB0eXBlIFByaW9yaXR5ID0gMSB8IDIgfCAzIHwgNCB8IDU7XG5leHBvcnQgdHlwZSBWaXNpYmlsaXR5ID0gMCB8IDEgfCAtMTtcblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsIHtcbiAgaWQ6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaW1wb3J0YW5jZTogUHJpb3JpdHk7XG4gIHNvdW5kPzogc3RyaW5nO1xuICB2aWJyYXRpb24/OiBib29sZWFuIHwgbnVtYmVyW107XG4gIHZpc2liaWxpdHk/OiBWaXNpYmlsaXR5O1xuICBiYWRnZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIFB1c2hFdmVudCA9ICdyZWdpc3RyYXRpb24nIHwgJ25vdGlmaWNhdGlvbicgfCAnZXJyb3InO1xuXG4vKiogRXh0ZW5kZWQgUHVzaGFwZSB0eXBlcyAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIFB1c2hhcGVQdXNoT3B0aW9ucyB7XG4gIGlkX2FwcDogc3RyaW5nO1xuICBwbGF0Zm9ybTogc3RyaW5nO1xuICB1dWlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHVzaGFwZU9wdGlvbnMgZXh0ZW5kcyBQdXNoT3B0aW9ucyB7XG4gIGVuYWJsZWQ/OiBib29sZWFuO1xuICBwdXNoYXBlOiBQdXNoYXBlUHVzaE9wdGlvbnM7XG4gIGlkX3VzZXI6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQdXNoYXBlUmVnaXN0cmF0aW9uRXZlbnRSZXNwb25zZSBleHRlbmRzIFJlZ2lzdHJhdGlvbkV2ZW50UmVzcG9uc2Uge1xuICBwdXNoX2lkOiBzdHJpbmc7XG4gIHN0YXR1czogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBuYW1lIFB1c2hhcGVQdXNoXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJlZ2lzdGVyIGFuZCByZWNlaXZlIHB1c2ggbm90aWZpY2F0aW9ucy5cbiAqIFRoaXMgcGx1Z2luIGV4dGVuZHMgZnVuY3Rpb25hbGl0aWVzIG9mIFB1c2ggbmF0aXZlIHBsdWdpbiBpbiBvcmRlciB0byB1c2UgaXQgd2l0aCBQdXNoYXBlIHNlcnZpY2UuXG4gKlxuICogUHVzaGFwZSBzZXJ2aWNlOiBAbGluayBodHRwczovL2dsdWUtbGFicy5jb20vcHVzaGFwZS1pbnZpby1ub3RpZmljaGUtcHVzaC1pb3MtYW5kcm9pZC1hcGktc2RrXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBwdXNoYXBlLWNvcmRvdmEtcHVzaGAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtQdXNoYXBlIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vZ2x1ZWxhYnMvcHVzaGFwZS1jb3Jkb3ZhLXB1c2gpLlxuICpcbiAqIEZvciBUeXBlU2NyaXB0IHVzZXJzLCBzZWUgdGhlIFtQdXNoYXBlIHBsdWdpbiBkb2NzIGFib3V0IHVzaW5nIFR5cGVTY3JpcHQgZm9yIGN1c3RvbSBub3RpZmljYXRpb25zXShodHRwczovL2dpdGh1Yi5jb20vZ2x1ZWxhYnMvcHVzaGFwZS1jb3Jkb3ZhLXB1c2gvYmxvYi9tYXN0ZXIvZG9jcy9QVVNIQVBFX1RZUEVTQ1JJUFQubWQpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUHVzaGFwZVB1c2ggfSBmcm9tICdAaW9uaWMtbmF0aXZlL3B1c2hhcGUtcHVzaC9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHB1c2hhcGVQdXNoOiBQdXNoYXBlUHVzaCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqXG4gKiBgYGBcbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogUHVzaGFwZVJlZ2lzdHJhdGlvbkV2ZW50UmVzcG9uc2VcbiAqIE5vdGlmaWNhdGlvbkV2ZW50UmVzcG9uc2VcbiAqIE5vdGlmaWNhdGlvbkV2ZW50QWRkaXRpb25hbERhdGFcbiAqIElPU1B1c2hPcHRpb25zXG4gKiBBbmRyb2lkUHVzaE9wdGlvbnNcbiAqIEJyb3dzZXJQdXNoT3B0aW9uc1xuICogUHVzaGFwZVB1c2hPcHRpb25zXG4gKiBQdXNoYXBlT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1B1c2hhcGVQdXNoJyxcbiAgcGx1Z2luOiAncHVzaGFwZS1jb3Jkb3ZhLXB1c2gnLFxuICBwbHVnaW5SZWY6ICdQdXNoTm90aWZpY2F0aW9uJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2dsdWVsYWJzL3B1c2hhcGUtY29yZG92YS1wdXNoJyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBwdXNoYXBlLWNvcmRvdmEtcHVzaCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFB1c2hhcGVQdXNoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogSW5pdCBwdXNoIG5vdGlmaWNhdGlvbnNcbiAgICogQHBhcmFtIG9wdGlvbnMge1B1c2hhcGVPcHRpb25zfVxuICAgKiBAcmV0dXJuIHtQdXNoT2JqZWN0fVxuICAgKi9cbiAgaW5pdChvcHRpb25zOiBQdXNoYXBlT3B0aW9ucyk6IFB1c2hPYmplY3Qge1xuICAgIHJldHVybiBuZXcgUHVzaE9iamVjdChvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIHRoZSBwdXNoIG5vdGlmaWNhdGlvbiBwZXJtaXNzaW9uIGhhcyBiZWVuIGdyYW50ZWQuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8e2lzRW5hYmxlZDogYm9vbGVhbn0+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYW4gb2JqZWN0IHdpdGggb25lIHByb3BlcnR5OiBpc0VuYWJsZWQsIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiBwZXJtaXNzaW9uIGhhcyBiZWVuIGdyYW50ZWQuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTx7IGlzRW5hYmxlZDogYm9vbGVhbiB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBub3RpZmljYXRpb24gY2hhbm5lbCBmb3IgQW5kcm9pZCBPIGFuZCBhYm92ZS5cbiAgICogQHBhcmFtIGNoYW5uZWwge0NoYW5uZWx9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBjcmVhdGVDaGFubmVsKGNoYW5uZWw/OiBDaGFubmVsKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGEgbm90aWZpY2F0aW9uIGNoYW5uZWwgZm9yIEFuZHJvaWQgTyBhbmQgYWJvdmUuXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgZGVsZXRlQ2hhbm5lbChpZD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIGN1cnJlbnRseSBjb25maWd1cmVkIGNoYW5uZWxzLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPENoYW5uZWxbXT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxpc3RDaGFubmVscygpOiBQcm9taXNlPENoYW5uZWxbXT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdQdXNoYXBlUHVzaCcsXG4gIHBsdWdpbjogJ3B1c2hhcGUtY29yZG92YS1wdXNoJyxcbiAgcGx1Z2luUmVmOiAnUHVzaE5vdGlmaWNhdGlvbicsXG59KVxuZXhwb3J0IGNsYXNzIFB1c2hPYmplY3Qge1xuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFB1c2hhcGVPcHRpb25zKSB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KCdQdXNoTm90aWZpY2F0aW9uJywgJ2luaXQnLCAnUHVzaE5vdGlmaWNhdGlvbicpID09PSB0cnVlKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UgPSB3aW5kb3cuUHVzaE5vdGlmaWNhdGlvbi5pbml0KG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwYXJhbSBldmVudCB7c3RyaW5nfVxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPEV2ZW50UmVzcG9uc2U+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnb2ZmJyxcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlLFxuICB9KVxuICBvbihldmVudDogUHVzaEV2ZW50KTogT2JzZXJ2YWJsZTxFdmVudFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB1bnJlZ2lzdGVyIG1ldGhvZCBpcyB1c2VkIHdoZW4gdGhlIGFwcGxpY2F0aW9uIG5vIGxvbmdlciB3YW50cyB0byByZWNlaXZlIHB1c2ggbm90aWZpY2F0aW9ucy5cbiAgICogQmV3YXJlIHRoYXQgdGhpcyBjbGVhbnMgdXAgYWxsIGV2ZW50IGhhbmRsZXJzIHByZXZpb3VzbHkgcmVnaXN0ZXJlZCxcbiAgICogc28geW91IHdpbGwgbmVlZCB0byByZS1yZWdpc3RlciB0aGVtIGlmIHlvdSB3YW50IHRoZW0gdG8gZnVuY3Rpb24gYWdhaW4gd2l0aG91dCBhbiBhcHBsaWNhdGlvbiByZWxvYWQuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgdW5yZWdpc3RlcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGJhZGdlIGNvdW50IHZpc2libGUgd2hlbiB0aGUgYXBwIGlzIG5vdCBydW5uaW5nXG4gICAqXG4gICAqIFRoZSBjb3VudCBpcyBhbiBpbnRlZ2VyIGluZGljYXRpbmcgd2hhdCBudW1iZXIgc2hvdWxkIHNob3cgdXAgaW4gdGhlIGJhZGdlLlxuICAgKiBQYXNzaW5nIDAgd2lsbCBjbGVhciB0aGUgYmFkZ2UuXG4gICAqIEVhY2ggbm90aWZpY2F0aW9uIGV2ZW50IGNvbnRhaW5zIGEgZGF0YS5jb3VudCB2YWx1ZSB3aGljaCBjYW4gYmUgdXNlZCB0byBzZXQgdGhlIGJhZGdlIHRvIGNvcnJlY3QgbnVtYmVyLlxuICAgKiBAcGFyYW0gY291bnRcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgc2V0QXBwbGljYXRpb25JY29uQmFkZ2VOdW1iZXIoY291bnQ/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGJhZGdlIGNvdW50IHZpc2libGUgd2hlbiB0aGUgYXBwIGlzIG5vdCBydW5uaW5nXG4gICAqIHN1Y2Nlc3NIYW5kbGVyIGdldHMgY2FsbGVkIHdpdGggYW4gaW50ZWdlciB3aGljaCBpcyB0aGUgY3VycmVudCBiYWRnZSBjb3VudFxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGdldEFwcGxpY2F0aW9uSWNvbkJhZGdlTnVtYmVyKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIGlPUyBvbmx5XG4gICAqIFRlbGxzIHRoZSBPUyB0aGF0IHlvdSBhcmUgZG9uZSBwcm9jZXNzaW5nIGEgYmFja2dyb3VuZCBwdXNoIG5vdGlmaWNhdGlvbi5cbiAgICogc3VjY2Vzc0hhbmRsZXIgZ2V0cyBjYWxsZWQgd2hlbiBiYWNrZ3JvdW5kIHB1c2ggcHJvY2Vzc2luZyBpcyBzdWNjZXNzZnVsbHkgY29tcGxldGVkLlxuICAgKiBAcGFyYW0gW2lkXVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBmaW5pc2goaWQ/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxscyB0aGUgT1MgdG8gY2xlYXIgYWxsIG5vdGlmaWNhdGlvbnMgZnJvbSB0aGUgTm90aWZpY2F0aW9uIENlbnRlclxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGNsZWFyQWxsTm90aWZpY2F0aW9ucygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgc3Vic2NyaWJlIG1ldGhvZCBpcyB1c2VkIHdoZW4gdGhlIGFwcGxpY2F0aW9uIHdhbnRzIHRvIHN1YnNjcmliZSBhIG5ldyB0b3BpYyB0byByZWNlaXZlIHB1c2ggbm90aWZpY2F0aW9ucy5cbiAgICogQHBhcmFtIHRvcGljIHtzdHJpbmd9IFRvcGljIHRvIHN1YnNjcmliZSB0by5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHN1YnNjcmliZSh0b3BpYzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhlIHVuc3Vic2NyaWJlIG1ldGhvZCBpcyB1c2VkIHdoZW4gdGhlIGFwcGxpY2F0aW9uIG5vIGxvbmdlciB3YW50cyB0byByZWNlaXZlIHB1c2ggbm90aWZpY2F0aW9ucyBmcm9tIGEgc3BlY2lmaWMgdG9waWMgYnV0IGNvbnRpbnVlIHRvIHJlY2VpdmUgb3RoZXIgcHVzaCBtZXNzYWdlcy5cbiAgICogQHBhcmFtIHRvcGljIHtzdHJpbmd9IFRvcGljIHRvIHVuc3Vic2NyaWJlIGZyb20uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICB1bnN1YnNjcmliZSh0b3BpYzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==