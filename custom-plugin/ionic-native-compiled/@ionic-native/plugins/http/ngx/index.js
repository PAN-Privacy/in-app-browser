import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var HTTP = /** @class */ (function (_super) {
    __extends(HTTP, _super);
    function HTTP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTTP.prototype.getBasicAuthHeader = function (username, password) { return cordova(this, "getBasicAuthHeader", { "sync": true }, arguments); };
    HTTP.prototype.useBasicAuth = function (username, password) { return cordova(this, "useBasicAuth", { "sync": true }, arguments); };
    HTTP.prototype.getHeaders = function (host) { return cordova(this, "getHeaders", { "sync": true }, arguments); };
    HTTP.prototype.setHeader = function (host, header, value) { return cordova(this, "setHeader", { "sync": true }, arguments); };
    HTTP.prototype.getDataSerializer = function () { return cordova(this, "getDataSerializer", { "sync": true }, arguments); };
    HTTP.prototype.setDataSerializer = function (serializer) { return cordova(this, "setDataSerializer", { "sync": true }, arguments); };
    HTTP.prototype.setCookie = function (url, cookie) { return cordova(this, "setCookie", { "sync": true }, arguments); };
    HTTP.prototype.clearCookies = function () { return cordova(this, "clearCookies", { "sync": true }, arguments); };
    HTTP.prototype.removeCookies = function (url, cb) { return cordova(this, "removeCookies", { "sync": true }, arguments); };
    HTTP.prototype.getCookieString = function (url) { return cordova(this, "getCookieString", { "sync": true }, arguments); };
    HTTP.prototype.getRequestTimeout = function () { return cordova(this, "getRequestTimeout", { "sync": true }, arguments); };
    HTTP.prototype.setRequestTimeout = function (timeout) { return cordova(this, "setRequestTimeout", { "sync": true }, arguments); };
    HTTP.prototype.getFollowRedirect = function () { return cordova(this, "getFollowRedirect", { "sync": true }, arguments); };
    HTTP.prototype.setFollowRedirect = function (follow) { return cordova(this, "setFollowRedirect", { "sync": true }, arguments); };
    HTTP.prototype.setServerTrustMode = function (mode) { return cordova(this, "setServerTrustMode", {}, arguments); };
    HTTP.prototype.post = function (url, body, headers) { return cordova(this, "post", {}, arguments); };
    HTTP.prototype.postSync = function (url, body, headers, success, failure) { return cordova(this, "post", { "methodName": "post", "sync": true }, arguments); };
    HTTP.prototype.get = function (url, parameters, headers) { return cordova(this, "get", {}, arguments); };
    HTTP.prototype.getSync = function (url, parameters, headers, success, failure) { return cordova(this, "get", { "methodName": "get", "sync": true }, arguments); };
    HTTP.prototype.put = function (url, body, headers) { return cordova(this, "put", {}, arguments); };
    HTTP.prototype.putSync = function (url, body, headers, success, failure) { return cordova(this, "put", { "methodName": "put", "sync": true }, arguments); };
    HTTP.prototype.patch = function (url, body, headers) { return cordova(this, "patch", {}, arguments); };
    HTTP.prototype.patchSync = function (url, body, headers, success, failure) { return cordova(this, "patch", { "methodName": "patch", "sync": true }, arguments); };
    HTTP.prototype.delete = function (url, parameters, headers) { return cordova(this, "delete", {}, arguments); };
    HTTP.prototype.deleteSync = function (url, parameters, headers, success, failure) { return cordova(this, "delete", { "methodName": "delete", "sync": true }, arguments); };
    HTTP.prototype.head = function (url, parameters, headers) { return cordova(this, "head", {}, arguments); };
    HTTP.prototype.headSync = function (url, parameters, headers, success, failure) { return cordova(this, "head", { "methodName": "head", "sync": true }, arguments); };
    HTTP.prototype.options = function (url, parameters, headers) { return cordova(this, "options", {}, arguments); };
    HTTP.prototype.optionsSync = function (url, parameters, headers, success, failure) { return cordova(this, "options", { "methodName": "options", "sync": true }, arguments); };
    HTTP.prototype.uploadFile = function (url, body, headers, filePath, name) { return cordova(this, "uploadFile", {}, arguments); };
    HTTP.prototype.uploadFileSync = function (url, body, headers, filePath, name, success, failure) { return cordova(this, "uploadFile", { "methodName": "uploadFile", "sync": true }, arguments); };
    HTTP.prototype.downloadFile = function (url, body, headers, filePath) { return cordova(this, "downloadFile", {}, arguments); };
    HTTP.prototype.downloadFileSync = function (url, body, headers, filePath, success, failure) { return cordova(this, "downloadFile", { "methodName": "downloadFile", "sync": true }, arguments); };
    HTTP.prototype.sendRequest = function (url, options) { return cordova(this, "sendRequest", {}, arguments); };
    HTTP.prototype.sendRequestSync = function (url, options, success, failure) { return cordova(this, "sendRequest", { "methodName": "sendRequest", "sync": true }, arguments); };
    HTTP.prototype.abort = function (requestId) { return cordova(this, "abort", {}, arguments); };
    Object.defineProperty(HTTP.prototype, "ErrorCode", {
        get: function () { return cordovaPropertyGet(this, "ErrorCode"); },
        set: function (value) { cordovaPropertySet(this, "ErrorCode", value); },
        enumerable: false,
        configurable: true
    });
    HTTP.pluginName = "HTTP";
    HTTP.plugin = "cordova-plugin-advanced-http";
    HTTP.pluginRef = "cordova.plugin.http";
    HTTP.repo = "https://github.com/silkimen/cordova-plugin-advanced-http";
    HTTP.platforms = ["Android", "iOS"];
    HTTP.decorators = [
        { type: Injectable }
    ];
    return HTTP;
}(IonicNativePlugin));
export { HTTP };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2h0dHAvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sc0VBQXVELE1BQU0sb0JBQW9CLENBQUM7O0lBMkUvRCx3QkFBaUI7Ozs7SUF3QnpDLGlDQUFrQixhQUFDLFFBQWdCLEVBQUUsUUFBZ0I7SUFVckQsMkJBQVksYUFBQyxRQUFnQixFQUFFLFFBQWdCO0lBUS9DLHlCQUFVLGFBQUMsSUFBWTtJQVd2Qix3QkFBUyxhQUFDLElBQVksRUFBRSxNQUFjLEVBQUUsS0FBYTtJQU9yRCxnQ0FBaUI7SUFVakIsZ0NBQWlCLGFBQUMsVUFBZ0U7SUFRbEYsd0JBQVMsYUFBQyxHQUFXLEVBQUUsTUFBYztJQU1yQywyQkFBWTtJQVFaLDRCQUFhLGFBQUMsR0FBVyxFQUFFLEVBQWM7SUFPekMsOEJBQWUsYUFBQyxHQUFXO0lBUzNCLGdDQUFpQjtJQVNqQixnQ0FBaUIsYUFBQyxPQUFlO0lBT2pDLGdDQUFpQjtJQVNqQixnQ0FBaUIsYUFBQyxNQUFlO0lBWWpDLGlDQUFrQixhQUFDLElBQWlEO0lBWXBFLG1CQUFJLGFBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxPQUFZO0lBaUJ6Qyx1QkFBUSxhQUNOLEdBQVcsRUFDWCxJQUFTLEVBQ1QsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0lBYS9CLGtCQUFHLGFBQUMsR0FBVyxFQUFFLFVBQWUsRUFBRSxPQUFZO0lBaUI5QyxzQkFBTyxhQUNMLEdBQVcsRUFDWCxVQUFlLEVBQ2YsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0lBYS9CLGtCQUFHLGFBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxPQUFZO0lBaUJ4QyxzQkFBTyxhQUNMLEdBQVcsRUFDWCxJQUFTLEVBQ1QsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0lBYS9CLG9CQUFLLGFBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxPQUFZO0lBaUIxQyx3QkFBUyxhQUNQLEdBQVcsRUFDWCxJQUFTLEVBQ1QsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0lBYS9CLHFCQUFNLGFBQUMsR0FBVyxFQUFFLFVBQWUsRUFBRSxPQUFZO0lBaUJqRCx5QkFBVSxhQUNSLEdBQVcsRUFDWCxVQUFlLEVBQ2YsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0lBYS9CLG1CQUFJLGFBQUMsR0FBVyxFQUFFLFVBQWUsRUFBRSxPQUFZO0lBaUIvQyx1QkFBUSxhQUNOLEdBQVcsRUFDWCxVQUFlLEVBQ2YsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0lBYS9CLHNCQUFPLGFBQUMsR0FBVyxFQUFFLFVBQWUsRUFBRSxPQUFZO0lBaUJsRCwwQkFBVyxhQUNULEdBQVcsRUFDWCxVQUFlLEVBQ2YsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0lBZS9CLHlCQUFVLGFBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxPQUFZLEVBQUUsUUFBMkIsRUFBRSxJQUF1QjtJQW1CckcsNkJBQWMsYUFDWixHQUFXLEVBQ1gsSUFBUyxFQUNULE9BQVksRUFDWixRQUEyQixFQUMzQixJQUF1QixFQUN2QixPQUE4QixFQUM5QixPQUE2QjtJQWMvQiwyQkFBWSxhQUFDLEdBQVcsRUFBRSxJQUFTLEVBQUUsT0FBWSxFQUFFLFFBQWdCO0lBa0JuRSwrQkFBZ0IsYUFDZCxHQUFXLEVBQ1gsSUFBUyxFQUNULE9BQVksRUFDWixRQUFnQixFQUNoQixPQUE4QixFQUM5QixPQUE2QjtJQXNCL0IsMEJBQVcsYUFDVCxHQUFXLEVBQ1gsT0FVQztJQTJCSCw4QkFBZSxhQUNiLEdBQVcsRUFDWCxPQVVDLEVBQ0QsT0FBdUMsRUFDdkMsT0FBNkI7SUFTL0Isb0JBQUssYUFBQyxTQUFpQjswQkFsaUJkLDJCQUFTOzs7Ozs7Ozs7Ozs7Z0JBUG5CLFVBQVU7O2VBM0VYO0VBNEUwQixpQkFBaUI7U0FBOUIsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSFRUUFJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFRoZSBIVFRQIHN0YXR1cyBudW1iZXIgb2YgdGhlIHJlc3BvbnNlIG9yIGEgbmVnYXRpdmUgaW50ZXJuYWwgZXJyb3IgY29kZS5cbiAgICovXG4gIHN0YXR1czogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGhlYWRlcnMgb2YgdGhlIHJlc3BvbnNlLlxuICAgKi9cbiAgaGVhZGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICAqIFRoZSBVUkwgb2YgdGhlIHJlc3BvbnNlLiBUaGlzIHByb3BlcnR5IHdpbGwgYmUgdGhlIGZpbmFsIFVSTCBvYnRhaW5lZCBhZnRlciBhbnkgcmVkaXJlY3RzLlxuICAgKi9cbiAgdXJsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSB0aGF0IGlzIGluIHRoZSByZXNwb25zZS4gVGhpcyBwcm9wZXJ0eSB1c3VhbGx5IGV4aXN0cyB3aGVuIGEgcHJvbWlzZSByZXR1cm5lZCBieSBhIHJlcXVlc3QgbWV0aG9kIHJlc29sdmVzLlxuICAgKi9cbiAgZGF0YT86IGFueTtcbiAgLyoqXG4gICAqIEVycm9yIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlci4gVGhpcyBwcm9wZXJ0eSB1c3VhbGx5IGV4aXN0cyB3aGVuIGEgcHJvbWlzZSByZXR1cm5lZCBieSBhIHJlcXVlc3QgbWV0aG9kIHJlamVjdHMuXG4gICAqL1xuICBlcnJvcj86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEFib3J0ZWRSZXNwb25zZSB7XG4gIGFib3J0ZWQ6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgSFRUUFxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIC8gUGhvbmVnYXAgcGx1Z2luIGZvciBjb21tdW5pY2F0aW5nIHdpdGggSFRUUCBzZXJ2ZXJzLiBTdXBwb3J0cyBpT1MgYW5kIEFuZHJvaWQuXG4gKlxuICogQWR2YW50YWdlcyBvdmVyIEphdmFzY3JpcHQgcmVxdWVzdHM6XG4gKiAtIFNTTCAvIFRMUyBQaW5uaW5nXG4gKiAtIENPUlMgcmVzdHJpY3Rpb25zIGRvIG5vdCBhcHBseVxuICogLSBIYW5kbGluZyBvZiBIVFRQIGNvZGUgNDAxIC0gcmVhZCBtb3JlIGF0IFtJc3N1ZSBDQi0yNDE1XShodHRwczovL2lzc3Vlcy5hcGFjaGUub3JnL2ppcmEvYnJvd3NlL0NCLTI0MTUpXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9odHRwL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIVFRQKSB7fVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9pb25pYy5pbycsIHt9LCB7fSlcbiAqICAgLnRoZW4oZGF0YSA9PiB7XG4gKlxuICogICAgIGNvbnNvbGUubG9nKGRhdGEuc3RhdHVzKTtcbiAqICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpOyAvLyBkYXRhIHJlY2VpdmVkIGJ5IHNlcnZlclxuICogICAgIGNvbnNvbGUubG9nKGRhdGEuaGVhZGVycyk7XG4gKlxuICogICB9KVxuICogICAuY2F0Y2goZXJyb3IgPT4ge1xuICpcbiAqICAgICBjb25zb2xlLmxvZyhlcnJvci5zdGF0dXMpO1xuICogICAgIGNvbnNvbGUubG9nKGVycm9yLmVycm9yKTsgLy8gZXJyb3IgbWVzc2FnZSBhcyBzdHJpbmdcbiAqICAgICBjb25zb2xlLmxvZyhlcnJvci5oZWFkZXJzKTtcbiAqXG4gKiAgIH0pO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEhUVFBSZXNwb25zZVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0hUVFAnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hZHZhbmNlZC1odHRwJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW4uaHR0cCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc2lsa2ltZW4vY29yZG92YS1wbHVnaW4tYWR2YW5jZWQtaHR0cCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIVFRQIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBlbnVtIHJlcHJlc2VudHMgdGhlIGludGVybmFsIGVycm9yIGNvZGVzIHdoaWNoIGNhbiBiZSByZXR1cm5lZCBpbiBhIEhUVFBSZXNwb25zZSBvYmplY3QuXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHJlYWRvbmx5IEVycm9yQ29kZToge1xuICAgIEdFTkVSSUM6IG51bWJlcjtcbiAgICBTU0xfRVhDRVBUSU9OOiBudW1iZXI7XG4gICAgU0VSVkVSX05PVF9GT1VORDogbnVtYmVyO1xuICAgIFRJTUVPVVQ6IG51bWJlcjtcbiAgICBVTlNVUFBPUlRFRF9VUkw6IG51bWJlcjtcbiAgICBOT1RfQ09OTkVDVEVEOiBudW1iZXI7XG4gICAgUE9TVF9QUk9DRVNTSU5HX0ZBSUxFRDogbnVtYmVyO1xuICAgIEFCT1JURUQ6IG51bWJlcjtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyByZXR1cm5zIGFuIG9iamVjdCByZXByZXNlbnRpbmcgYSBiYXNpYyBIVFRQIEF1dGhvcml6YXRpb24gaGVhZGVyIG9mIHRoZSBmb3JtLlxuICAgKiBAcGFyYW0gdXNlcm5hbWUge3N0cmluZ30gVXNlcm5hbWVcbiAgICogQHBhcmFtIHBhc3N3b3JkIHtzdHJpbmd9IFBhc3N3b3JkXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGFuIG9iamVjdCByZXByZXNlbnRpbmcgYSBiYXNpYyBIVFRQIEF1dGhvcml6YXRpb24gaGVhZGVyIG9mIHRoZSBmb3JtIHsnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBiYXNlNjRFbmNvZGVkVXNlcm5hbWVBbmRQYXNzd29yZCd9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0QmFzaWNBdXRoSGVhZGVyKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiB7IEF1dGhvcml6YXRpb246IHN0cmluZyB9IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBzZXRzIHVwIGFsbCBmdXR1cmUgcmVxdWVzdHMgdG8gdXNlIEJhc2ljIEhUVFAgYXV0aGVudGljYXRpb24gd2l0aCB0aGUgZ2l2ZW4gdXNlcm5hbWUgYW5kIHBhc3N3b3JkLlxuICAgKiBAcGFyYW0gdXNlcm5hbWUge3N0cmluZ30gVXNlcm5hbWVcbiAgICogQHBhcmFtIHBhc3N3b3JkIHtzdHJpbmd9IFBhc3N3b3JkXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdXNlQmFzaWNBdXRoKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgaGVhZGVycyBkZWZpbmVkIGZvciBhIGdpdmVuIGhvc3RuYW1lLlxuICAgKiBAcGFyYW0gaG9zdCB7c3RyaW5nfSBUaGUgaG9zdG5hbWVcbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJuIGFsbCBoZWFkZXJzIGRlZmluZWQgZm9yIHRoZSBob3N0bmFtZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEhlYWRlcnMoaG9zdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgaGVhZGVyIGZvciBhbGwgZnV0dXJlIHJlcXVlc3RzLiBUYWtlcyBhIGhvc3RuYW1lLCBhIGhlYWRlciBhbmQgYSB2YWx1ZS5cbiAgICogQHBhcmFtIGhvc3Qge3N0cmluZ30gVGhlIGhvc3RuYW1lIHRvIGJlIHVzZWQgZm9yIHNjb3BpbmcgdGhpcyBoZWFkZXJcbiAgICogQHBhcmFtIGhlYWRlciB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgaGVhZGVyXG4gICAqIEBwYXJhbSB2YWx1ZSB7c3RyaW5nfSBUaGUgdmFsdWUgb2YgdGhlIGhlYWRlclxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEhlYWRlcihob3N0OiBzdHJpbmcsIGhlYWRlcjogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5hbWUgb2YgdGhlIGRhdGEgc2VyaWFsaXplciB3aGljaCB3aWxsIGJlIHVzZWQgZm9yIGFsbCBmdXR1cmUgUE9TVCBhbmQgUFVUIHJlcXVlc3RzLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBjb25maWd1cmVkIGRhdGEgc2VyaWFsaXplclxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldERhdGFTZXJpYWxpemVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGF0YSBzZXJpYWxpemVyIHdoaWNoIHdpbGwgYmUgdXNlZCBmb3IgYWxsIGZ1dHVyZSBQT1NULCBQVVQgYW5kIFBBVENIIHJlcXVlc3RzLiBUYWtlcyBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIG5hbWUgb2YgdGhlIHNlcmlhbGl6ZXIuXG4gICAqIEBwYXJhbSBzZXJpYWxpemVyIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBzZXJpYWxpemVyLlxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zaWxraW1lbi9jb3Jkb3ZhLXBsdWdpbi1hZHZhbmNlZC1odHRwI3NldGRhdGFzZXJpYWxpemVyXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RGF0YVNlcmlhbGl6ZXIoc2VyaWFsaXplcjogJ3VybGVuY29kZWQnIHwgJ2pzb24nIHwgJ3V0ZjgnIHwgJ211bHRpcGFydCcgfCAncmF3Jyk6IHZvaWQge31cblxuICAvKipcbiAgICogQWRkIGEgY3VzdG9tIGNvb2tpZS5cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBTY29wZSBvZiB0aGUgY29va2llXG4gICAqIEBwYXJhbSBjb29raWUge3N0cmluZ30gUkZDIGNvbXBsaWFudCBjb29raWUgc3RyaW5nXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q29va2llKHVybDogc3RyaW5nLCBjb29raWU6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGNvb2tpZXMuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY2xlYXJDb29raWVzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVtb3ZlIGNvb2tpZXMgZm9yIGdpdmVuIFVSTC5cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gY2JcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZW1vdmVDb29raWVzKHVybDogc3RyaW5nLCBjYjogKCkgPT4gdm9pZCk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVzb2x2ZSBjb29raWUgc3RyaW5nIGZvciBnaXZlbiBVUkwuXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDb29raWVTdHJpbmcodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZ2xvYmFsIHJlcXVlc3QgdGltZW91dCB2YWx1ZSBpbiBzZWNvbmRzLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSByZXR1cm5zIHRoZSBnbG9iYWwgcmVxdWVzdCB0aW1lb3V0IHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0UmVxdWVzdFRpbWVvdXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGdsb2JhbCByZXF1ZXN0IHRpbWVvdXQgdmFsdWUgaW4gc2Vjb25kcy5cbiAgICogQHBhcmFtIHRpbWVvdXQge251bWJlcn0gVGhlIHRpbWVvdXQgaW4gc2Vjb25kcy4gRGVmYXVsdCA2MFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFJlcXVlc3RUaW1lb3V0KHRpbWVvdXQ6IG51bWJlcik6IHZvaWQge31cblxuICAvKipcbiAgICogUmVzb2x2ZSBpZiBpdCBzaG91bGQgZm9sbG93IHJlZGlyZWN0cyBhdXRvbWF0aWNhbGx5LlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gcmV0dXJucyB0cnVlIGlmIGl0IGlzIGNvbmZpZ3VyZWQgdG8gZm9sbG93IHJlZGlyZWN0cyBhdXRvbWF0aWNhbGx5XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Rm9sbG93UmVkaXJlY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZSBpZiBpdCBzaG91bGQgZm9sbG93IHJlZGlyZWN0cyBhdXRvbWF0aWNhbGx5LlxuICAgKiBAcGFyYW0gZm9sbG93IHtib29sZWFufSBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBmb2xsb3dpbmcgcmVkaXJlY3RzIGF1dG9tYXRpY2FsbHlcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRGb2xsb3dSZWRpcmVjdChmb2xsb3c6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFNldCBzZXJ2ZXIgdHJ1c3QgbW9kZSwgYmVpbmcgb25lIG9mIHRoZSBmb2xsb3dpbmcgdmFsdWVzOlxuICAgKiBkZWZhdWx0OiBkZWZhdWx0IFNTTCB0cnVzdHNoaXAgYW5kIGhvc3RuYW1lIHZlcmlmaWNhdGlvbiBoYW5kbGluZyB1c2luZyBzeXN0ZW0ncyBDQSBjZXJ0cztcbiAgICogbGVnYWN5OiB1c2UgbGVnYWN5IGRlZmF1bHQgYmVoYXZpb3IgKDwgMi4wLjMpLCBleGNsdWRpbmcgdXNlciBpbnN0YWxsZWQgQ0EgY2VydHMgKG9ubHkgZm9yIEFuZHJvaWQpO1xuICAgKiBub2NoZWNrOiBkaXNhYmxlIFNTTCBjZXJ0aWZpY2F0ZSBjaGVja2luZyBhbmQgaG9zdG5hbWUgdmVyaWZpY2F0aW9uLCB0cnVzdGluZyBhbGwgY2VydHMgKG1lYW50IHRvIGJlIHVzZWQgb25seSBmb3IgdGVzdGluZyBwdXJwb3Nlcyk7XG4gICAqIHBpbm5lZDogdHJ1c3Qgb25seSBwcm92aWRlZCBjZXJ0aWZpY2F0ZXM7XG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3NpbGtpbWVuL2NvcmRvdmEtcGx1Z2luLWFkdmFuY2VkLWh0dHAjc2V0c2VydmVydHJ1c3Rtb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIHNlcnZlciB0cnVzdCBtb2RlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFNlcnZlclRydXN0TW9kZShtb2RlOiAnZGVmYXVsdCcgfCAnbGVnYWN5JyB8ICdub2NoZWNrJyB8ICdwaW5uZWQnKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBQT1NUIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIGJvZHkge09iamVjdH0gVGhlIGJvZHkgb2YgdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHN5bmMgUE9TVCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBzdWNjZXNzIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRcbiAgICogQHBhcmFtIGZhaWx1cmUge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3QgZmFpbGVkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSByZXF1ZXN0SWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBtZXRob2ROYW1lOiAncG9zdCcsXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgcG9zdFN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIGhlYWRlcnM6IGFueSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIEdFVCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHtPYmplY3R9IFBhcmFtZXRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXQodXJsOiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHN5bmMgR0VUIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHBhcmFtZXRlcnMge09iamVjdH0gUGFyYW1ldGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHBhcmFtIHN1Y2Nlc3Mge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3Qgc3VjY2VlZFxuICAgKiBAcGFyYW0gZmFpbHVyZSB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBmYWlsZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHJlcXVlc3RJZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG1ldGhvZE5hbWU6ICdnZXQnLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGdldFN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1ldGVyczogYW55LFxuICAgIGhlYWRlcnM6IGFueSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIFBVVCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwdXQodXJsOiBzdHJpbmcsIGJvZHk6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHN5bmMgUFVUIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIGJvZHkge09iamVjdH0gVGhlIGJvZHkgb2YgdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHBhcmFtIHN1Y2Nlc3Mge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3Qgc3VjY2VlZFxuICAgKiBAcGFyYW0gZmFpbHVyZSB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBmYWlsZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHJlcXVlc3RJZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG1ldGhvZE5hbWU6ICdwdXQnLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHB1dFN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIGhlYWRlcnM6IGFueSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIFBBVENIIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIGJvZHkge09iamVjdH0gVGhlIGJvZHkgb2YgdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBhdGNoKHVybDogc3RyaW5nLCBib2R5OiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBzeW5jIFBBVENIIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIGJvZHkge09iamVjdH0gVGhlIGJvZHkgb2YgdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHBhcmFtIHN1Y2Nlc3Mge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3Qgc3VjY2VlZFxuICAgKiBAcGFyYW0gZmFpbHVyZSB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBmYWlsZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHJlcXVlc3RJZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG1ldGhvZE5hbWU6ICdwYXRjaCcsXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgcGF0Y2hTeW5jKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBoZWFkZXJzOiBhbnksXG4gICAgc3VjY2VzczogKHJlc3VsdDogSFRUUFJlc3BvbnNlKSA9PiB2b2lkLFxuICAgIGZhaWx1cmU6IChlcnJvcjogYW55KSA9PiB2b2lkXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBERUxFVEUgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gcGFyYW1ldGVycyB7T2JqZWN0fSBQYXJhbWV0ZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlKHVybDogc3RyaW5nLCBwYXJhbWV0ZXJzOiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBzeW5jIERFTEVURSByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHtPYmplY3R9IFBhcmFtZXRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBzdWNjZXNzIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRcbiAgICogQHBhcmFtIGZhaWx1cmUge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3QgZmFpbGVkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSByZXF1ZXN0SWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBtZXRob2ROYW1lOiAnZGVsZXRlJyxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBkZWxldGVTeW5jKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtZXRlcnM6IGFueSxcbiAgICBoZWFkZXJzOiBhbnksXG4gICAgc3VjY2VzczogKHJlc3VsdDogSFRUUFJlc3BvbnNlKSA9PiB2b2lkLFxuICAgIGZhaWx1cmU6IChlcnJvcjogYW55KSA9PiB2b2lkXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBIRUFEIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHBhcmFtZXRlcnMge09iamVjdH0gUGFyYW1ldGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhlYWQodXJsOiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHN5bmMgSEVBRCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHtPYmplY3R9IFBhcmFtZXRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBzdWNjZXNzIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRcbiAgICogQHBhcmFtIGZhaWx1cmUge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3QgZmFpbGVkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSByZXF1ZXN0SWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBtZXRob2ROYW1lOiAnaGVhZCcsXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgaGVhZFN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1ldGVyczogYW55LFxuICAgIGhlYWRlcnM6IGFueSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhbiBPUFRJT05TIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHBhcmFtZXRlcnMge09iamVjdH0gUGFyYW1ldGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9wdGlvbnModXJsOiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhbiBzeW5jIE9QVElPTlMgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gcGFyYW1ldGVycyB7T2JqZWN0fSBQYXJhbWV0ZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gc3VjY2VzcyB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkXG4gICAqIEBwYXJhbSBmYWlsdXJlIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IGZhaWxlZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVxdWVzdElkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgbWV0aG9kTmFtZTogJ29wdGlvbnMnLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIG9wdGlvbnNTeW5jKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtZXRlcnM6IGFueSxcbiAgICBoZWFkZXJzOiBhbnksXG4gICAgc3VjY2VzczogKHJlc3VsdDogSFRUUFJlc3BvbnNlKSA9PiB2b2lkLFxuICAgIGZhaWx1cmU6IChlcnJvcjogYW55KSA9PiB2b2lkXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBmaWxlUGF0aCB7c3RyaW5nfSBUaGUgbG9jYWwgcGF0aChzKSBvZiB0aGUgZmlsZShzKSB0byB1cGxvYWRcbiAgICogQHBhcmFtIG5hbWUge3N0cmluZ30gVGhlIG5hbWUocykgb2YgdGhlIHBhcmFtZXRlciB0byBwYXNzIHRoZSBmaWxlKHMpIGFsb25nIGFzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBGaWxlRW50cnkgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdXBsb2FkRmlsZSh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzOiBhbnksIGZpbGVQYXRoOiBzdHJpbmcgfCBzdHJpbmdbXSwgbmFtZTogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gZmlsZVBhdGgge3N0cmluZ30gVGhlIGxvY2FsIHBhdGgocykgb2YgdGhlIGZpbGUocykgdG8gdXBsb2FkXG4gICAqIEBwYXJhbSBuYW1lIHtzdHJpbmd9IFRoZSBuYW1lKHMpIG9mIHRoZSBwYXJhbWV0ZXIgdG8gcGFzcyB0aGUgZmlsZShzKSBhbG9uZyBhc1xuICAgKiBAcGFyYW0gc3VjY2VzcyB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkXG4gICAqIEBwYXJhbSBmYWlsdXJlIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IGZhaWxlZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVxdWVzdElkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgbWV0aG9kTmFtZTogJ3VwbG9hZEZpbGUnLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHVwbG9hZEZpbGVTeW5jKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBoZWFkZXJzOiBhbnksXG4gICAgZmlsZVBhdGg6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIG5hbWU6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIHN1Y2Nlc3M6IChyZXN1bHQ6IGFueSkgPT4gdm9pZCxcbiAgICBmYWlsdXJlOiAoZXJyb3I6IGFueSkgPT4gdm9pZFxuICApOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gZmlsZVBhdGgge3N0cmluZ30gVGhlIHBhdGggdG8gZG93bmxvYWQgdGhlIGZpbGUgdG8sIGluY2x1ZGluZyB0aGUgZmlsZSBuYW1lLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgRmlsZUVudHJ5IHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRvd25sb2FkRmlsZSh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzOiBhbnksIGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gZmlsZVBhdGgge3N0cmluZ30gVGhlIHBhdGggdG8gZG93bmxvYWQgdGhlIGZpbGUgdG8sIGluY2x1ZGluZyB0aGUgZmlsZSBuYW1lLlxuICAgKiBAcGFyYW0gc3VjY2VzcyB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkXG4gICAqIEBwYXJhbSBmYWlsdXJlIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IGZhaWxlZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVxdWVzdElkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgbWV0aG9kTmFtZTogJ2Rvd25sb2FkRmlsZScsXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgZG93bmxvYWRGaWxlU3luYyhcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgaGVhZGVyczogYW55LFxuICAgIGZpbGVQYXRoOiBzdHJpbmcsXG4gICAgc3VjY2VzczogKHJlc3VsdDogYW55KSA9PiB2b2lkLFxuICAgIGZhaWx1cmU6IChlcnJvcjogYW55KSA9PiB2b2lkXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IG9wdGlvbnMgZm9yIGluZGl2aWR1YWwgcmVxdWVzdFxuICAgKiBAcGFyYW0gb3B0aW9ucy5tZXRob2Qge3N0cmluZ30gcmVxdWVzdCBtZXRob2RcbiAgICogQHBhcmFtIG9wdGlvbnMuZGF0YSB7T2JqZWN0fSBwYXlsb2FkIHRvIGJlIHNlbmQgdG8gdGhlIHNlcnZlciAob25seSBhcHBsaWNhYmxlIG9uIHBvc3QsIHB1dCBvciBwYXRjaCBtZXRob2RzKVxuICAgKiBAcGFyYW0gb3B0aW9ucy5wYXJhbXMge09iamVjdH0gcXVlcnkgcGFyYW1zIHRvIGJlIGFwcGVuZGVkIHRvIHRoZSBVUkwgKG9ubHkgYXBwbGljYWJsZSBvbiBnZXQsIGhlYWQsIGRlbGV0ZSwgdXBsb2FkIG9yIGRvd25sb2FkIG1ldGhvZHMpXG4gICAqIEBwYXJhbSBvcHRpb25zLnNlcmlhbGl6ZXIge3N0cmluZ30gZGF0YSBzZXJpYWxpemVyIHRvIGJlIHVzZWQgKG9ubHkgYXBwbGljYWJsZSBvbiBwb3N0LCBwdXQgb3IgcGF0Y2ggbWV0aG9kcyksIGRlZmF1bHRzIHRvIGdsb2JhbCBzZXJpYWxpemVyIHZhbHVlLCBzZWUgc2V0RGF0YVNlcmlhbGl6ZXIgZm9yIHN1cHBvcnRlZCB2YWx1ZXNcbiAgICogQHBhcmFtIG9wdGlvbnMudGltZW91dCB7bnVtYmVyfSB0aW1lb3V0IHZhbHVlIGZvciB0aGUgcmVxdWVzdCBpbiBzZWNvbmRzLCBkZWZhdWx0cyB0byBnbG9iYWwgdGltZW91dCB2YWx1ZVxuICAgKiBAcGFyYW0gb3B0aW9ucy5oZWFkZXJzIHtPYmplY3R9IGhlYWRlcnMgb2JqZWN0IChrZXkgdmFsdWUgcGFpciksIHdpbGwgYmUgbWVyZ2VkIHdpdGggZ2xvYmFsIHZhbHVlc1xuICAgKiBAcGFyYW0gb3B0aW9ucy5maWxlUGF0aCB7c3RyaW5nfSBmaWxlIHBhdGgocykgdG8gYmUgdXNlZCBkdXJpbmcgdXBsb2FkIGFuZCBkb3dubG9hZCBzZWUgdXBsb2FkRmlsZSBhbmQgZG93bmxvYWRGaWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvblxuICAgKiBAcGFyYW0gb3B0aW9ucy5uYW1lIHtzdHJpbmd9IG5hbWUocykgdG8gYmUgdXNlZCBkdXJpbmcgdXBsb2FkIHNlZSB1cGxvYWRGaWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvblxuICAgKiBAcGFyYW0gb3B0aW9ucy5yZXNwb25zZVR5cGUge3N0cmluZ30gcmVzcG9uc2UgdHlwZSwgZGVmYXVsdHMgdG8gdGV4dFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2VuZFJlcXVlc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgbWV0aG9kOiAnZ2V0JyB8ICdwb3N0JyB8ICdwdXQnIHwgJ3BhdGNoJyB8ICdoZWFkJyB8ICdkZWxldGUnIHwgJ29wdGlvbnMnIHwgJ3VwbG9hZCcgfCAnZG93bmxvYWQnO1xuICAgICAgZGF0YT86IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcbiAgICAgIHBhcmFtcz86IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfTtcbiAgICAgIHNlcmlhbGl6ZXI/OiAnanNvbicgfCAndXJsZW5jb2RlZCcgfCAndXRmOCcgfCAnbXVsdGlwYXJ0JyB8ICdyYXcnO1xuICAgICAgdGltZW91dD86IG51bWJlcjtcbiAgICAgIGhlYWRlcnM/OiB7IFtpbmRleDogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICBmaWxlUGF0aD86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgbmFtZT86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ3RleHQnIHwgJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJztcbiAgICB9XG4gICk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IG9wdGlvbnMgZm9yIGluZGl2aWR1YWwgcmVxdWVzdFxuICAgKiBAcGFyYW0gb3B0aW9ucy5tZXRob2Qge3N0cmluZ30gcmVxdWVzdCBtZXRob2RcbiAgICogQHBhcmFtIG9wdGlvbnMuZGF0YSB7T2JqZWN0fSBwYXlsb2FkIHRvIGJlIHNlbmQgdG8gdGhlIHNlcnZlciAob25seSBhcHBsaWNhYmxlIG9uIHBvc3QsIHB1dCBvciBwYXRjaCBtZXRob2RzKVxuICAgKiBAcGFyYW0gb3B0aW9ucy5wYXJhbXMge09iamVjdH0gcXVlcnkgcGFyYW1zIHRvIGJlIGFwcGVuZGVkIHRvIHRoZSBVUkwgKG9ubHkgYXBwbGljYWJsZSBvbiBnZXQsIGhlYWQsIGRlbGV0ZSwgdXBsb2FkIG9yIGRvd25sb2FkIG1ldGhvZHMpXG4gICAqIEBwYXJhbSBvcHRpb25zLnNlcmlhbGl6ZXIge3N0cmluZ30gZGF0YSBzZXJpYWxpemVyIHRvIGJlIHVzZWQgKG9ubHkgYXBwbGljYWJsZSBvbiBwb3N0LCBwdXQgb3IgcGF0Y2ggbWV0aG9kcyksIGRlZmF1bHRzIHRvIGdsb2JhbCBzZXJpYWxpemVyIHZhbHVlLCBzZWUgc2V0RGF0YVNlcmlhbGl6ZXIgZm9yIHN1cHBvcnRlZCB2YWx1ZXNcbiAgICogQHBhcmFtIG9wdGlvbnMudGltZW91dCB7bnVtYmVyfSB0aW1lb3V0IHZhbHVlIGZvciB0aGUgcmVxdWVzdCBpbiBzZWNvbmRzLCBkZWZhdWx0cyB0byBnbG9iYWwgdGltZW91dCB2YWx1ZVxuICAgKiBAcGFyYW0gb3B0aW9ucy5oZWFkZXJzIHtPYmplY3R9IGhlYWRlcnMgb2JqZWN0IChrZXkgdmFsdWUgcGFpciksIHdpbGwgYmUgbWVyZ2VkIHdpdGggZ2xvYmFsIHZhbHVlc1xuICAgKiBAcGFyYW0gb3B0aW9ucy5maWxlUGF0aCB7c3RyaW5nfSBmaWxlIHBhdGgocykgdG8gYmUgdXNlZCBkdXJpbmcgdXBsb2FkIGFuZCBkb3dubG9hZCBzZWUgdXBsb2FkRmlsZSBhbmQgZG93bmxvYWRGaWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvblxuICAgKiBAcGFyYW0gb3B0aW9ucy5uYW1lIHtzdHJpbmd9IG5hbWUocykgdG8gYmUgdXNlZCBkdXJpbmcgdXBsb2FkIHNlZSB1cGxvYWRGaWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvblxuICAgKiBAcGFyYW0gb3B0aW9ucy5yZXNwb25zZVR5cGUge3N0cmluZ30gcmVzcG9uc2UgdHlwZSwgZGVmYXVsdHMgdG8gdGV4dFxuICAgKiBAcGFyYW0gc3VjY2VzcyB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkXG4gICAqIEBwYXJhbSBmYWlsdXJlIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IGZhaWxlZFxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVxdWVzdElkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgbWV0aG9kTmFtZTogJ3NlbmRSZXF1ZXN0JyxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzZW5kUmVxdWVzdFN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgbWV0aG9kOiAnZ2V0JyB8ICdwb3N0JyB8ICdwdXQnIHwgJ3BhdGNoJyB8ICdoZWFkJyB8ICdkZWxldGUnIHwgJ29wdGlvbnMnIHwgJ3VwbG9hZCcgfCAnZG93bmxvYWQnO1xuICAgICAgZGF0YT86IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcbiAgICAgIHBhcmFtcz86IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfTtcbiAgICAgIHNlcmlhbGl6ZXI/OiAnanNvbicgfCAndXJsZW5jb2RlZCcgfCAndXRmOCcgfCAnbXVsdGlwYXJ0JztcbiAgICAgIHRpbWVvdXQ/OiBudW1iZXI7XG4gICAgICBoZWFkZXJzPzogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgZmlsZVBhdGg/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIG5hbWU/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICd0ZXh0JyB8ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbic7XG4gICAgfSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHJlcXVlc3RJZCB7c3RyaW5nfSBUaGUgUmVxdWVzdElkIG9mIHRoZSByZXF1ZXN0IHRvIGFib3J0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFib3J0KHJlcXVlc3RJZDogc3RyaW5nKTogUHJvbWlzZTxBYm9ydGVkUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==