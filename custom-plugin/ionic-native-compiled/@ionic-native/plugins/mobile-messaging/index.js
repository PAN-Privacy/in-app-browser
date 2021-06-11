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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var DefaultMessageStorage = /** @class */ (function () {
    function DefaultMessageStorage() {
    }
    DefaultMessageStorage.prototype.find = function (messageId, callback) { return cordova(this, "find", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.findAll = function (callback) { return cordova(this, "findAll", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.delete = function (messageId, callback) { return cordova(this, "delete", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.deleteAll = function (callback) { return cordova(this, "deleteAll", { "sync": true }, arguments); };
    return DefaultMessageStorage;
}());
export { DefaultMessageStorage };
var MobileMessagingOriginal = /** @class */ (function (_super) {
    __extends(MobileMessagingOriginal, _super);
    function MobileMessagingOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileMessagingOriginal.prototype.init = function (config, onInitError) { return cordova(this, "init", { "sync": true }, arguments); };
    MobileMessagingOriginal.prototype.register = function (event) { return cordova(this, "register", { "observable": true }, arguments); };
    MobileMessagingOriginal.prototype.on = function (event) { return cordova(this, "on", { "observable": true }, arguments); };
    MobileMessagingOriginal.prototype.unregister = function (event) { return cordova(this, "unregister", { "observable": true }, arguments); };
    MobileMessagingOriginal.prototype.off = function (event) { return cordova(this, "off", { "observable": true }, arguments); };
    MobileMessagingOriginal.prototype.submitEvent = function (event) { return cordova(this, "submitEvent", { "sync": true }, arguments); };
    MobileMessagingOriginal.prototype.submitEventImmediately = function (event) { return cordova(this, "submitEventImmediately", { "observable": true }, arguments); };
    MobileMessagingOriginal.prototype.saveUser = function (userData) { return cordova(this, "saveUser", {}, arguments); };
    MobileMessagingOriginal.prototype.fetchUser = function () { return cordova(this, "fetchUser", {}, arguments); };
    MobileMessagingOriginal.prototype.getUser = function () { return cordova(this, "getUser", {}, arguments); };
    MobileMessagingOriginal.prototype.saveInstallation = function (installation) { return cordova(this, "saveInstallation", {}, arguments); };
    MobileMessagingOriginal.prototype.fetchInstallation = function () { return cordova(this, "fetchInstallation", {}, arguments); };
    MobileMessagingOriginal.prototype.getInstallation = function () { return cordova(this, "getInstallation", {}, arguments); };
    MobileMessagingOriginal.prototype.setInstallationAsPrimary = function (pushRegistrationId, primary) { return cordova(this, "setInstallationAsPrimary", {}, arguments); };
    MobileMessagingOriginal.prototype.personalize = function (context) { return cordova(this, "personalize", {}, arguments); };
    MobileMessagingOriginal.prototype.depersonalize = function () { return cordova(this, "depersonalize", {}, arguments); };
    MobileMessagingOriginal.prototype.depersonalizeInstallation = function (pushRegistrationId) { return cordova(this, "depersonalizeInstallation", {}, arguments); };
    MobileMessagingOriginal.prototype.markMessagesSeen = function (messageIds) { return cordova(this, "markMessagesSeen", {}, arguments); };
    MobileMessagingOriginal.prototype.showDialogForError = function (errorCode) { return cordova(this, "showDialogForError", {}, arguments); };
    MobileMessagingOriginal.prototype.defaultMessageStorage = function () { return cordova(this, "defaultMessageStorage", { "sync": true }, arguments); };
    MobileMessagingOriginal.prototype.showChat = function (config) { return cordova(this, "showChat", {}, arguments); };
    MobileMessagingOriginal.pluginName = "MobileMessaging";
    MobileMessagingOriginal.plugin = "com-infobip-plugins-mobilemessaging";
    MobileMessagingOriginal.pluginRef = "MobileMessaging";
    MobileMessagingOriginal.repo = "https://github.com/infobip/mobile-messaging-cordova-plugin";
    MobileMessagingOriginal.platforms = ["Android", "iOS"];
    return MobileMessagingOriginal;
}(IonicNativePlugin));
var MobileMessaging = new MobileMessagingOriginal();
export { MobileMessaging };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21vYmlsZS1tZXNzYWdpbmcvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztJQXVKaEMsb0NBQUksYUFBQyxTQUFpQixFQUFFLFFBQW9DO0lBSzVELHVDQUFPLGFBQUMsUUFBdUM7SUFLL0Msc0NBQU0sYUFBQyxTQUFpQixFQUFFLFFBQW9CO0lBSzlDLHlDQUFTLGFBQUMsUUFBb0I7Z0NBeEtoQzs7OztJQTZOcUMsbUNBQWlCOzs7O0lBU3BELDhCQUFJLGFBQUMsTUFBcUIsRUFBRSxXQUFtRDtJQWEvRSxrQ0FBUSxhQUFDLEtBQVk7SUFPckIsNEJBQUUsYUFBQyxLQUFZO0lBY2Ysb0NBQVUsYUFBQyxLQUFZO0lBT3ZCLDZCQUFHLGFBQUMsS0FBWTtJQXNCaEIscUNBQVcsYUFBQyxLQUFrQjtJQXdCOUIsZ0RBQXNCLGFBQUMsS0FBa0I7SUFXekMsa0NBQVEsYUFBQyxRQUFrQjtJQVUzQixtQ0FBUztJQVVULGlDQUFPO0lBV1AsMENBQWdCLGFBQUMsWUFBMEI7SUFVM0MsMkNBQWlCO0lBVWpCLHlDQUFlO0lBWWYsa0RBQXdCLGFBQUMsa0JBQTBCLEVBQUUsT0FBZ0I7SUFXckUscUNBQVcsYUFBQyxPQUEyQjtJQVV2Qyx1Q0FBYTtJQVViLG1EQUF5QixhQUFDLGtCQUEwQjtJQVdwRCwwQ0FBZ0IsYUFBQyxVQUFvQjtJQVdyQyw0Q0FBa0IsYUFBQyxTQUFpQjtJQUtwQywrQ0FBcUI7SUFXckIsa0NBQVEsYUFBQyxNQUFtQjs7Ozs7OzBCQTVjOUI7RUE2TnFDLGlCQUFpQjtTQUF6QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCB0eXBlIE9TID0gJ0FuZHJvaWQnIHwgJ2lPUyc7XG5leHBvcnQgdHlwZSBHZW5kZXIgPSAnTWFsZScgfCAnRmVtYWxlJztcbmV4cG9ydCB0eXBlIEV2ZW50ID1cbiAgfCAnbWVzc2FnZVJlY2VpdmVkJ1xuICB8ICdub3RpZmljYXRpb25UYXBwZWQnXG4gIHwgJ3Rva2VuUmVjZWl2ZWQnXG4gIHwgJ3JlZ2lzdHJhdGlvblVwZGF0ZWQnXG4gIHwgJ2dlb2ZlbmNlRW50ZXJlZCdcbiAgfCAnYWN0aW9uVGFwcGVkJ1xuICB8ICdpbnN0YWxsYXRpb25VcGRhdGVkJ1xuICB8ICd1c2VyVXBkYXRlZCdcbiAgfCAncGVyc29uYWxpemVkJ1xuICB8ICdkZXBlcnNvbmFsaXplZCdcbiAgfCAnZGVlcGxpbmsnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbUV2ZW50IHtcbiAgZGVmaW5pdGlvbklkOiBzdHJpbmc7XG4gIHByb3BlcnRpZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgICogVGhlIGFwcGxpY2F0aW9uIGNvZGUgb2YgeW91ciBBcHBsaWNhdGlvbiBmcm9tIFB1c2ggUG9ydGFsIHdlYnNpdGVcbiAgICovXG4gIGFwcGxpY2F0aW9uQ29kZTogc3RyaW5nO1xuICBnZW9mZW5jaW5nRW5hYmxlZD86IGJvb2xlYW47XG4gIGluQXBwQ2hhdEVuYWJsZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogTWVzc2FnZSBzdG9yYWdlIHNhdmUgY2FsbGJhY2tcbiAgICovXG4gIG1lc3NhZ2VTdG9yYWdlPzogc3RyaW5nO1xuICBkZWZhdWx0TWVzc2FnZVN0b3JhZ2U/OiBib29sZWFuO1xuICBpb3M/OiB7XG4gICAgbm90aWZpY2F0aW9uVHlwZXM/OiBzdHJpbmdbXTtcbiAgICBmb3JjZUNsZWFudXA/OiBib29sZWFuO1xuICAgIGxvZ2dpbmc/OiBib29sZWFuO1xuICB9O1xuICBhbmRyb2lkPzoge1xuICAgIG5vdGlmaWNhdGlvbkljb246IHN0cmluZzsgLy8gYSByZXNvdXJjZSBuYW1lIGZvciBhIHN0YXR1cyBiYXIgaWNvbiAod2l0aG91dCBleHRlbnNpb24pLCBsb2NhdGVkIGluICcvcGxhdGZvcm1zL2FuZHJvaWQvYXBwL3NyYy9tYWluL3Jlcy9taXBtYXAnXG4gICAgbXVsdGlwbGVOb3RpZmljYXRpb25zOiBib29sZWFuO1xuICAgIG5vdGlmaWNhdGlvbkFjY2VudENvbG9yOiBzdHJpbmc7XG4gIH07XG4gIHByaXZhY3lTZXR0aW5ncz86IHtcbiAgICBhcHBsaWNhdGlvbkNvZGVQZXJzaXN0aW5nRGlzYWJsZWQ/OiBib29sZWFuO1xuICAgIHVzZXJEYXRhUGVyc2lzdGluZ0Rpc2FibGVkPzogYm9vbGVhbjtcbiAgICBjYXJyaWVySW5mb1NlbmRpbmdEaXNhYmxlZD86IGJvb2xlYW47XG4gICAgc3lzdGVtSW5mb1NlbmRpbmdEaXNhYmxlZD86IGJvb2xlYW47XG4gIH07XG4gIG5vdGlmaWNhdGlvbkNhdGVnb3JpZXM/OiBbXG4gICAge1xuICAgICAgaWRlbnRpZmllcj86IHN0cmluZztcbiAgICAgIGFjdGlvbnM/OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZGVudGlmaWVyPzogc3RyaW5nO1xuICAgICAgICAgIHRpdGxlPzogc3RyaW5nO1xuICAgICAgICAgIGZvcmVncm91bmQ/OiBib29sZWFuO1xuICAgICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ/OiBib29sZWFuO1xuICAgICAgICAgIG1vUmVxdWlyZWQ/OiBib29sZWFuO1xuICAgICAgICAgIGRlc3RydWN0aXZlPzogYm9vbGVhbjtcbiAgICAgICAgICBpY29uPzogc3RyaW5nO1xuICAgICAgICAgIHRleHRJbnB1dEFjdGlvbkJ1dHRvblRpdGxlPzogc3RyaW5nO1xuICAgICAgICAgIHRleHRJbnB1dFBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAgICAgICB9XG4gICAgICBdO1xuICAgIH1cbiAgXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyRGF0YSB7XG4gIGV4dGVybmFsVXNlcklkOiBzdHJpbmc7XG4gIGZpcnN0TmFtZT86IHN0cmluZztcbiAgbGFzdE5hbWU/OiBzdHJpbmc7XG4gIG1pZGRsZU5hbWU/OiBzdHJpbmc7XG4gIGdlbmRlcj86IEdlbmRlcjtcbiAgYmlydGhkYXk/OiBzdHJpbmc7XG4gIHBob25lcz86IHN0cmluZ1tdO1xuICBlbWFpbHM/OiBzdHJpbmdbXTtcbiAgdGFncz86IHN0cmluZ1tdO1xuICBjdXN0b21BdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IGFueVtdPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnN0YWxsYXRpb24ge1xuICBpc1ByaW1hcnlEZXZpY2U/OiBib29sZWFuO1xuICBpc1B1c2hSZWdpc3RyYXRpb25FbmFibGVkPzogYm9vbGVhbjtcbiAgbm90aWZpY2F0aW9uc0VuYWJsZWQ/OiBib29sZWFuO1xuICBnZW9FbmFibGVkPzogYm9vbGVhbjtcbiAgc2RrVmVyc2lvbj86IHN0cmluZztcbiAgYXBwVmVyc2lvbj86IHN0cmluZztcbiAgb3M/OiBPUztcbiAgb3NWZXJzaW9uOiBzdHJpbmc7XG4gIGRldmljZU1hbnVmYWN0dXJlcj86IHN0cmluZztcbiAgZGV2aWNlTW9kZWw/OiBzdHJpbmc7XG4gIGRldmljZVNlY3VyZT86IGJvb2xlYW47XG4gIGxhbmd1YWdlPzogc3RyaW5nO1xuICBkZXZpY2VUaW1lem9uZUlkPzogc3RyaW5nO1xuICBhcHBsaWNhdGlvblVzZXJJZD86IHN0cmluZztcbiAgZGV2aWNlTmFtZT86IHN0cmluZztcbiAgY3VzdG9tQXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJJZGVudGl0eSB7XG4gIHBob25lcz86IHN0cmluZ1tdO1xuICBlbWFpbHM/OiBzdHJpbmdbXTtcbiAgZXh0ZXJuYWxVc2VySWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQZXJzb25hbGl6ZUNvbnRleHQge1xuICB1c2VySWRlbnRpdHk6IFVzZXJJZGVudGl0eTtcbiAgdXNlckF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgYW55W10+O1xuICBmb3JjZURlcGVyc29uYWxpemU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICBtZXNzYWdlSWQ6IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGJvZHk/OiBzdHJpbmc7XG4gIHNvdW5kPzogc3RyaW5nO1xuICBzaWxlbnQ/OiBib29sZWFuO1xuICBjdXN0b21QYXlsb2FkPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgaW50ZXJuYWxEYXRhPzogc3RyaW5nO1xuICByZWNlaXZlZFRpbWVzdGFtcD86IG51bWJlcjtcbiAgc2VlbkRhdGU/OiBudW1iZXI7XG4gIGNvbnRlbnRVcmw/OiBzdHJpbmc7XG4gIHNlZW4/OiBib29sZWFuO1xuICBnZW8/OiBib29sZWFuO1xuICBvcmlnaW5hbFBheWxvYWQ/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+OyAvLyBpT1Mgb25seVxuICB2aWJyYXRlPzogYm9vbGVhbjsgLy8gQW5kcm9pZCBvbmx5XG4gIGljb24/OiBzdHJpbmc7IC8vIEFuZHJvaWQgb25seVxuICBjYXRlZ29yeT86IHN0cmluZzsgLy8gQW5kcm9pZCBvbmx5XG4gIGNoYXQ/OiBzdHJpbmc7XG4gIGJyb3dzZXJVcmw/OiBzdHJpbmc7XG4gIGRlZXBsaW5rPzogc3RyaW5nO1xuICB3ZWJWaWV3VXJsPzogc3RyaW5nO1xuICBpbkFwcERpc21pc3NUaXRsZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNb2JpbGVNZXNzYWdpbmdFcnJvciB7XG4gIGNvZGU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXRDb25maWcge1xuICBpb3M/OiB7XG4gICAgc2hvd01vZGFsbHk6IGJvb2xlYW47XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBEZWZhdWx0TWVzc2FnZVN0b3JhZ2Uge1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZmluZChtZXNzYWdlSWQ6IHN0cmluZywgY2FsbGJhY2s6IChtZXNzYWdlOiBNZXNzYWdlKSA9PiB2b2lkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGZpbmRBbGwoY2FsbGJhY2s6IChtZXNzYWdlczogTWVzc2FnZVtdKSA9PiB2b2lkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGRlbGV0ZShtZXNzYWdlSWQ6IHN0cmluZywgY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZGVsZXRlQWxsKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8qKlxuICogQG5hbWUgTW9iaWxlIE1lc3NhZ2luZ1xuICogQGRlc2NyaXB0aW9uXG4gKiBNb2JpbGUgTWVzc2FnaW5nIFNESyBpcyBkZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIHRvIGVhc2lseSBlbmFibGUgcHVzaCBub3RpZmljYXRpb24gY2hhbm5lbCBpbiB5b3VyIG1vYmlsZSBhcHBsaWNhdGlvbi5cbiAqIEluIGFsbW9zdCBubyB0aW1lIG9mIGltcGxlbWVudGF0aW9uIHlvdSBnZXQgcHVzaCBub3RpZmljYXRpb24gaW4geW91ciBhcHBsaWNhdGlvbiBhbmQgYWNjZXNzIHRvIHRoZSBmZWF0dXJlcyBvZiBbSW5mb2JpcCBJUCBNZXNzYWdpbmcgUGxhdGZvcm1dKGh0dHBzOi8vcG9ydGFsLmluZm9iaXAuY29tL3B1c2gvKS5cbiAqIFRoaXMgZG9jdW1lbnQgZGVzY3JpYmVzIGxpYnJhcnkgaW50ZWdyYXRpb24gc3RlcHMgZm9yIHlvdXIgQ29yZG92YSBwcm9qZWN0LlxuICpcbiAqIEZvciBtb3JlIGluZm8gc2VlIFtDb3Jkb3ZhIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vaW5mb2JpcC9tb2JpbGUtbWVzc2FnaW5nLWNvcmRvdmEtcGx1Z2luKVxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTW9iaWxlTWVzc2FnaW5nIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9tb2JpbGUtbWVzc2FnaW5nL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9iaWxlTWVzc2FnaW5nOiBNb2JpbGVNZXNzYWdpbmcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiAgdGhpcy5tb2JpbGVNZXNzYWdpbmcuaW5pdCh7XG4gKiAgICBhcHBsaWNhdGlvbkNvZGU6ICc8eW91cl9hcHBsaWNhdGlvbl9jb2RlPicsXG4gKiAgICBnZW9mZW5jaW5nRW5hYmxlZDogJzx0cnVlL2ZhbHNlPicsXG4gKiAgICBkZWZhdWx0TWVzc2FnZVN0b3JhZ2U6ICc8dHJ1ZS9mYWxzZT4nLFxuICogICAgaW9zOiB7XG4gKiAgICAgIG5vdGlmaWNhdGlvblR5cGVzOiBbJ2FsZXJ0JywgJ2JhZGdlJywgJ3NvdW5kJ11cbiAqICAgIH0sXG4gKiAgICBhbmRyb2lkOiB7XG4gKiAgICAgIG5vdGlmaWNhdGlvbkljb246IDxTdHJpbmc7IGEgcmVzb3VyY2UgbmFtZSBmb3IgYSBzdGF0dXMgYmFyIGljb24gKHdpdGhvdXQgZXh0ZW5zaW9uKSwgbG9jYXRlZCBpbiAnL3BsYXRmb3Jtcy9hbmRyb2lkL2FwcC9zcmMvbWFpbi9yZXMvbWlwbWFwJz4sXG4gKiAgICAgIG11bHRpcGxlTm90aWZpY2F0aW9uczogPEJvb2xlYW47IHNldCB0byAndHJ1ZScgdG8gZW5hYmxlIG11bHRpcGxlIG5vdGlmaWNhdGlvbnM+LFxuICogICAgICBub3RpZmljYXRpb25BY2NlbnRDb2xvcjogPFN0cmluZzsgc2V0IHRvIGhleCBjb2xvciB2YWx1ZSBpbiBmb3JtYXQgJyNSUkdHQkInIG9yICcjQUFSUkdHQkInPlxuICogICAgIH19LCAoZXJyKSA9PiB7XG4gKiAgICAgIC4uLlxuICogICAgfSk7XG4gKlxuICogIHRoaXMubW9iaWxlTWVzc2FnaW5nLnJlZ2lzdGVyKCdtZXNzYWdlUmVjZWl2ZWQnKS5zdWJzY3JpYmUoKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHtcbiAqICAgIC4uLlxuICogIH0pO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ01vYmlsZU1lc3NhZ2luZycsXG4gIHBsdWdpbjogJ2NvbS1pbmZvYmlwLXBsdWdpbnMtbW9iaWxlbWVzc2FnaW5nJyxcbiAgcGx1Z2luUmVmOiAnTW9iaWxlTWVzc2FnaW5nJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9pbmZvYmlwL21vYmlsZS1tZXNzYWdpbmctY29yZG92YS1wbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9iaWxlTWVzc2FnaW5nIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU3RhcnRzIGEgbmV3IE1vYmlsZSBNZXNzYWdpbmcgc2Vzc2lvbi5cbiAgICpcbiAgICogQG5hbWUgaW5pdFxuICAgKiBAcGFyYW0gY29uZmlnLiBDb25maWd1cmF0aW9uIGZvciBNb2JpbGUgTWVzc2FnaW5nXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uSW5pdEVycm9yLiBFcnJvciBjYWxsYmFja1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGluaXQoY29uZmlnOiBDb25maWd1cmF0aW9uLCBvbkluaXRFcnJvcj86IChlcnJvcjogTW9iaWxlTWVzc2FnaW5nRXJyb3IpID0+IHZvaWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgdG8gZXZlbnQgY29taW5nIGZyb20gTW9iaWxlTWVzc2FnaW5nIGxpYnJhcnkuXG4gICAqXG4gICAqIEBuYW1lIHJlZ2lzdGVyXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIHJlZ2lzdGVyKGV2ZW50OiBFdmVudCk6IE9ic2VydmFibGU8TWVzc2FnZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICB9KVxuICBvbihldmVudDogRXZlbnQpOiBPYnNlcnZhYmxlPE1lc3NhZ2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVW4gcmVnaXN0ZXIgZnJvbSBNb2JpbGVNZXNzYWdpbmcgbGlicmFyeSBldmVudC5cbiAgICpcbiAgICogQG5hbWUgdW5yZWdpc3RlclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgd2lsbCBiZSB1bnJlZ2lzdGVyZWQgZnJvbSBldmVudFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIHVucmVnaXN0ZXIoZXZlbnQ6IEV2ZW50KTogT2JzZXJ2YWJsZTxNZXNzYWdlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIG9mZihldmVudDogRXZlbnQpOiBPYnNlcnZhYmxlPE1lc3NhZ2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYW4gZXZlbnQgdG8gdGhlIHNlcnZlciBldmVudHVhbGx5LCBoYW5kbGVzIHBvc3NpYmxlIGVycm9ycyBhbmQgZG8gcmV0cmllcyBmb3IgeW91LlxuICAgKlxuICAgKiBAbmFtZSBzdWJtaXRFdmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnREYXRhLiBBbiBvYmplY3QgY29udGFpbmluZyBldmVudCBkYXRhXG4gICAqIHtcbiAgICogICBkZWZpbml0aW9uSWQ6IFwiZXZlbnREZWZpbml0aW9uSWRcIlxuICAgKiAgIHByb3BlcnRpZXM6IHtcbiAgICogICAgIFwic3RyaW5nQXR0cmlidXRlXCI6IFwic3RyaW5nXCIsXG4gICAqICAgICBcIm51bWJlckF0dHJpYnV0ZVwiOiAxLFxuICAgKiAgICAgXCJkYXRlQXR0cmlidXRlXCI6IFwiMjAyMC0wMi0yNlQwOTo0MTo1N1pcIixcbiAgICogICAgIFwiYm9vbGVhbkF0dHJpYnV0ZVwiOiB0cnVlXG4gICAqICAgfVxuICAgKiB9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc3VibWl0RXZlbnQoZXZlbnQ6IEN1c3RvbUV2ZW50KTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGFuIGV2ZW50IHRvIHRoZSBzZXJ2ZXIgaW1tZWRpYXRlbHkuXG4gICAqIFlvdSBoYXZlIHRvIGhhbmRsZSBwb3NzaWJsZSBjb25uZWN0aW9uIG9yIHNlcnZlciBlcnJvcnMsIGRvIHJldHJpZXMgeW91cnNlbGYuXG4gICAqXG4gICAqIEBuYW1lIHN1Ym1pdEV2ZW50SW1tZWRpYXRlbHlcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50RGF0YS4gQW4gb2JqZWN0IGNvbnRhaW5pbmcgZXZlbnQgZGF0YVxuICAgKiB7XG4gICAqICAgZGVmaW5pdGlvbklkOiBcImV2ZW50RGVmaW5pdGlvbklkXCJcbiAgICogICBwcm9wZXJ0aWVzOiB7XG4gICAqICAgICBcInN0cmluZ0F0dHJpYnV0ZVwiOiBcInN0cmluZ1wiLFxuICAgKiAgICAgXCJudW1iZXJBdHRyaWJ1dGVcIjogMSxcbiAgICogICAgIFwiZGF0ZUF0dHJpYnV0ZVwiOiBcIjIwMjAtMDItMjZUMDk6NDE6NTdaXCIsXG4gICAqICAgICBcImJvb2xlYW5BdHRyaWJ1dGVcIjogdHJ1ZVxuICAgKiAgIH1cbiAgICogfVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBvbiByZXN1bHQsIHlvdSBoYXZlIHRvIGhhbmRsZSBlcnJvciBhbmQgZG8gcmV0cmllcyB5b3Vyc2VsZlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIHN1Ym1pdEV2ZW50SW1tZWRpYXRlbHkoZXZlbnQ6IEN1c3RvbUV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIHVzZXIgZGF0YSB0byB0aGUgc2VydmVyLlxuICAgKlxuICAgKiBAbmFtZSBzYXZlVXNlclxuICAgKiBAcGFyYW0ge09iamVjdH0gdXNlckRhdGEuIEFuIG9iamVjdCBjb250YWluaW5nIHVzZXIgZGF0YVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzYXZlVXNlcih1c2VyRGF0YTogVXNlckRhdGEpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaCB1c2VyIGRhdGEgZnJvbSB0aGUgc2VydmVyLlxuICAgKlxuICAgKiBAbmFtZSBmZXRjaFVzZXJcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZmV0Y2hVc2VyKCk6IFByb21pc2U8VXNlckRhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB1c2VyIGRhdGEgZnJvbSB0aGUgbG9jYWxseSBzdG9yZWQgY2FjaGUuXG4gICAqXG4gICAqIEBuYW1lIGdldFVzZXJcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VXNlcigpOiBQcm9taXNlPFVzZXJEYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIGluc3RhbGxhdGlvbiB0byB0aGUgc2VydmVyLlxuICAgKlxuICAgKiBAbmFtZSBzYXZlSW5zdGFsbGF0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YWxsYXRpb24uIEFuIG9iamVjdCBjb250YWluaW5nIGluc3RhbGxhdGlvbiBkYXRhXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNhdmVJbnN0YWxsYXRpb24oaW5zdGFsbGF0aW9uOiBJbnN0YWxsYXRpb24pOiBQcm9taXNlPEluc3RhbGxhdGlvbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGluc3RhbGxhdGlvbiBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqXG4gICAqIEBuYW1lIGZldGNoSW5zdGFsbGF0aW9uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGZldGNoSW5zdGFsbGF0aW9uKCk6IFByb21pc2U8SW5zdGFsbGF0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgbG9jYWxseSBjYWNoZWQgaW5zdGFsbGF0aW9uLlxuICAgKlxuICAgKiBAbmFtZSBnZXRJbnN0YWxsYXRpb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SW5zdGFsbGF0aW9uKCk6IFByb21pc2U8SW5zdGFsbGF0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYW55IGluc3RhbGxhdGlvbiBhcyBwcmltYXJ5IGZvciB0aGlzIHVzZXIuXG4gICAqXG4gICAqIEBuYW1lIHNldEluc3RhbGxhdGlvbkFzUHJpbWFyeVxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHVzaFJlZ2lzdHJhdGlvbklkIG9mIGFuIGluc3RhbGxhdGlvblxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHByaW1hcnkgb3Igbm90XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldEluc3RhbGxhdGlvbkFzUHJpbWFyeShwdXNoUmVnaXN0cmF0aW9uSWQ6IHN0cmluZywgcHJpbWFyeTogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIHBlcnNvbmFsaXphdGlvbiBvZiB0aGUgY3VycmVudCBpbnN0YWxsYXRpb24gb24gdGhlIHBsYXRmb3JtLlxuICAgKlxuICAgKiBAbmFtZSBwZXJzb25hbGl6ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dC4gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdXNlciBpZGVudGl0eSBpbmZvcm1hdGlvbiBhcyB3ZWxsIGFzIGFkZGl0aW9uYWwgdXNlciBhdHRyaWJ1dGVzLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwZXJzb25hbGl6ZShjb250ZXh0OiBQZXJzb25hbGl6ZUNvbnRleHQpOiBQcm9taXNlPFBlcnNvbmFsaXplQ29udGV4dD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBkZXBlcnNvbmFsaXphdGlvbiBvZiB0aGUgY3VycmVudCBpbnN0YWxsYXRpb24gb24gdGhlIHBsYXRmb3JtLlxuICAgKlxuICAgKiBAbmFtZSBkZXBlcnNvbmFsaXplXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRlcGVyc29uYWxpemUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgZGVwZXJzb25hbGl6YXRpb24gb2YgdGhlIGluc3RhbGxhdGlvbiByZWZlcmVuY2VkIGJ5IHB1c2hSZWdpc3RyYXRpb25JZC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHB1c2hSZWdpc3RyYXRpb25JZCBvZiB0aGUgcmVtb3RlIGluc3RhbGxhdGlvbiB0byBkZXBlcnNvbmFsaXplXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRlcGVyc29uYWxpemVJbnN0YWxsYXRpb24ocHVzaFJlZ2lzdHJhdGlvbklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrIG1lc3NhZ2VzIGFzIHNlZW5cbiAgICpcbiAgICogQG5hbWUgbWFya01lc3NhZ2VzU2VlblxuICAgKiBAcGFyYW0ge0FycmF5fSBtZXNzYWdlSWRzIG9mIGlkZW50aWZpZXJzIG9mIG1lc3NhZ2UgdG8gbWFyayBhcyBzZWVuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG1hcmtNZXNzYWdlc1NlZW4obWVzc2FnZUlkczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyBidWlsdC1pbiBlcnJvciBkaWFsb2cgc28gdGhhdCB1c2VyIGNhbiByZXNvbHZlIGVycm9ycyBkdXJpbmcgc2RrIGluaXRpYWxpemF0aW9uLlxuICAgKlxuICAgKiBAbmFtZSBzaG93RGlhbG9nRm9yRXJyb3JcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGVycm9yQ29kZSB0byBkaXNwbGF5IGRpYWxvZyBmb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvd0RpYWxvZ0ZvckVycm9yKGVycm9yQ29kZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZGVmYXVsdE1lc3NhZ2VTdG9yYWdlKCk6IERlZmF1bHRNZXNzYWdlU3RvcmFnZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIGNoYXQgdmlldy5cbiAgICpcbiAgICogQG5hbWUgc2hvd0NoYXRcbiAgICogQHBhcmFtIHtDaGF0Q29uZmlnfSBjaGF0IGNvbmZpZ1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93Q2hhdChjb25maWc/OiBDaGF0Q29uZmlnKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==