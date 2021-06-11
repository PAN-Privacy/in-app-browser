import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Base64 = /** @class */ (function (_super) {
    __extends(Base64, _super);
    function Base64() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Base64.prototype.encodeFile = function (filePath) { return cordova(this, "encodeFile", {}, arguments); };
    Base64.pluginName = "Base64";
    Base64.plugin = "com-badrit-base64";
    Base64.pluginRef = "plugins.Base64";
    Base64.repo = "https://github.com/hazemhagrass/phonegap-base64";
    Base64.platforms = ["Android", "iOS"];
    Base64.decorators = [
        { type: Injectable }
    ];
    return Base64;
}(IonicNativePlugin));
export { Base64 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jhc2U2NC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpQzVDLDBCQUFpQjs7OztJQU8zQywyQkFBVSxhQUFDLFFBQWdCOzs7Ozs7O2dCQVI1QixVQUFVOztpQkFqQ1g7RUFrQzRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQGJldGFcbiAqIEBuYW1lIEJhc2U2NFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIFBsdWdpbiBpcyB1c2VkIHRvIGVuY29kZSBiYXNlNjQgb2YgYW55IGZpbGUsIGl0IHVzZXMganMgY29kZSBmb3IgaU9TLCBidXQgaW4gY2FzZSBvZiBhbmRyb2lkIGl0IHVzZXMgbmF0aXZlIGNvZGUgdG8gaGFuZGxlIGFuZHJvaWQgdmVyc2lvbnMgbG93ZXIgdGhhbiB2LjNcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJhc2U2NCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmFzZTY0L25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYXNlNjQ6IEJhc2U2NCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogbGV0IGZpbGVQYXRoOiBzdHJpbmcgPSAnZmlsZTovLy8uLi4nO1xuICogdGhpcy5iYXNlNjQuZW5jb2RlRmlsZShmaWxlUGF0aCkudGhlbigoYmFzZTY0RmlsZTogc3RyaW5nKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGJhc2U2NEZpbGUpO1xuICogfSwgKGVycikgPT4ge1xuICogICBjb25zb2xlLmxvZyhlcnIpO1xuICogfSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmFzZTY0JyxcbiAgcGx1Z2luOiAnY29tLWJhZHJpdC1iYXNlNjQnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLkJhc2U2NCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaGF6ZW1oYWdyYXNzL3Bob25lZ2FwLWJhc2U2NCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYXNlNjQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGVuY29kZXMgYmFzZTY0IG9mIGFueSBmaWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlUGF0aCBBYnNvbHV0ZSBmaWxlIHBhdGhcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGZpbGUgaXMgc3VjY2Vzc2Z1bGx5IGVuY29kZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZW5jb2RlRmlsZShmaWxlUGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==