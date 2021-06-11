import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var BrowserTab = /** @class */ (function (_super) {
    __extends(BrowserTab, _super);
    function BrowserTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserTab.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    BrowserTab.prototype.openUrl = function (url) { return cordova(this, "openUrl", {}, arguments); };
    BrowserTab.prototype.close = function () { return cordova(this, "close", {}, arguments); };
    BrowserTab.pluginName = "BrowserTab";
    BrowserTab.plugin = "cordova-plugin-browsertab";
    BrowserTab.pluginRef = "cordova.plugins.browsertab";
    BrowserTab.repo = "https://github.com/google/cordova-plugin-browsertab";
    BrowserTab.platforms = ["Android", "iOS"];
    BrowserTab.decorators = [
        { type: Injectable }
    ];
    return BrowserTab;
}(IonicNativePlugin));
export { BrowserTab };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jyb3dzZXItdGFiL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDeEMsOEJBQWlCOzs7O0lBTS9DLGdDQUFXO0lBVVgsNEJBQU8sYUFBQyxHQUFXO0lBU25CLDBCQUFLOzs7Ozs7O2dCQTFCTixVQUFVOztxQkFqQ1g7RUFrQ2dDLGlCQUFpQjtTQUFwQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQnJvd3NlciBUYWJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gcHJvdmlkZXMgYW4gaW50ZXJmYWNlIHRvIGluLWFwcCBicm93c2VyIHRhYnMgdGhhdCBleGlzdCBvbiBzb21lIG1vYmlsZSBwbGF0Zm9ybXMsIHNwZWNpZmljYWxseSBbQ3VzdG9tIFRhYnNdKGh0dHA6Ly9kZXZlbG9wZXIuYW5kcm9pZC5jb20vdG9vbHMvc3VwcG9ydC1saWJyYXJ5L2ZlYXR1cmVzLmh0bWwjY3VzdG9tLXRhYnMpIG9uIEFuZHJvaWQgKGluY2x1ZGluZyB0aGUgW0Nocm9tZSBDdXN0b20gVGFic10oaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9tdWx0aWRldmljZS9hbmRyb2lkL2N1c3RvbXRhYnMpIGltcGxlbWVudGF0aW9uKSwgYW5kIFtTRlNhZmFyaVZpZXdDb250cm9sbGVyXShodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vbGlicmFyeS9pb3MvZG9jdW1lbnRhdGlvbi9TYWZhcmlTZXJ2aWNlcy9SZWZlcmVuY2UvU0ZTYWZhcmlWaWV3Q29udHJvbGxlcl9SZWYvKSBvbiBpT1MuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBCcm93c2VyVGFiIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9icm93c2VyLXRhYi9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYnJvd3NlclRhYjogQnJvd3NlclRhYikge1xuICpcbiAqICAgYnJvd3NlclRhYi5pc0F2YWlsYWJsZSgpXG4gKiAgICAgLnRoZW4oaXNBdmFpbGFibGUgPT4ge1xuICogICAgICAgaWYgKGlzQXZhaWxhYmxlKSB7XG4gKiAgICAgICAgIGJyb3dzZXJUYWIub3BlblVybCgnaHR0cHM6Ly9pb25pYy5pbycpO1xuICogICAgICAgfSBlbHNlIHtcbiAqICAgICAgICAgLy8gb3BlbiBVUkwgd2l0aCBJbkFwcEJyb3dzZXIgaW5zdGVhZCBvciBTYWZhcmlWaWV3Q29udHJvbGxlclxuICogICAgICAgfVxuICogICAgIH0pO1xuICogfVxuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Jyb3dzZXJUYWInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1icm93c2VydGFiJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmJyb3dzZXJ0YWInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9jb3Jkb3ZhLXBsdWdpbi1icm93c2VydGFiJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJyb3dzZXJUYWIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDaGVjayBpZiBCcm93c2VyVGFiIG9wdGlvbiBpcyBhdmFpbGFibGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gY2hlY2sgaXMgc3VjY2Vzc2Z1bCBhbmQgcmV0dXJucyB0cnVlIG9yIGZhbHNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBwcm92aWRlZCBVUkwgdXNpbmcgYSBicm93c2VyIHRhYlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsICBUaGUgVVJMIHlvdSB3YW50IHRvIG9wZW5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gY2hlY2sgb3BlbiB3YXMgc3VjY2Vzc2Z1bFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcGVuVXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGJyb3dzZXIgdGFiXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGNsb3NlIHdhcyBmaW5pc2hlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbG9zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19