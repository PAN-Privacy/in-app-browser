import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var IsDebug = /** @class */ (function (_super) {
    __extends(IsDebug, _super);
    function IsDebug() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IsDebug.prototype.getIsDebug = function () { return cordova(this, "getIsDebug", {}, arguments); };
    IsDebug.pluginName = "IsDebug";
    IsDebug.plugin = "cordova-plugin-is-debug";
    IsDebug.pluginRef = "cordova.plugins.IsDebug";
    IsDebug.repo = "https://github.com/mattlewis92/cordova-plugin-is-debug";
    IsDebug.platforms = ["Android", "iOS"];
    IsDebug.decorators = [
        { type: Injectable }
    ];
    return IsDebug;
}(IonicNativePlugin));
export { IsDebug };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2lzLWRlYnVnL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQThCM0MsMkJBQWlCOzs7O0lBTTVDLDRCQUFVOzs7Ozs7O2dCQVBYLFVBQVU7O2tCQTlCWDtFQStCNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBJcyBEZWJ1Z1xuICogQGRlc2NyaXB0aW9uXG4gKiBEZXRlY3QgaWYgdGhlIGFwcCBpcyBydW5uaW5nIGluIGRlYnVnIG1vZGUgb3Igbm90LlxuICogRGVidWcgbW9kZSBpcyB3aGVuIHRoZSBhcHAgaXMgYnVpbHQgYW5kIGluc3RhbGxlZCBsb2NhbGx5IHZpYSB4Y29kZSAvIGVjbGlwc2UgLyB0aGUgY29yZG92YSBjbGkgZXRjLCBjb21wYXJlZCB0byByZWxlYXNlIG1vZGUgd2hlbiB0aGUgYXBwIHdhcyBkb3dubG9hZGVkIGZyb20gdGhlIGFwcCAvIHBsYXkgc3RvcmUgdmlhIGFuIGVuZCB1c2VyLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSXNEZWJ1ZyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaXMtZGVidWcvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGlzRGVidWc6IElzRGVidWcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuaXNEZWJ1Zy5nZXRJc0RlYnVnKClcbiAqICAgLnRoZW4oaXNEZWJ1ZyA9PiBjb25zb2xlLmxvZygnSXMgZGVidWc6JywgaXNEZWJ1ZykpXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJc0RlYnVnJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taXMtZGVidWcnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuSXNEZWJ1ZycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWF0dGxld2lzOTIvY29yZG92YS1wbHVnaW4taXMtZGVidWcnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXNEZWJ1ZyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhbiBhcHAgd2FzIGluc3RhbGxlZCB2aWEgeGNvZGUgLyBlY2xpcHNlIC8gdGhlIGlvbmljIENMSSBldGNcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0cnVlIGlmIHRoZSBhcHAgd2FzIGluc3RhbGxlZCB2aWEgeGNvZGUgLyBlY2xpcHNlIC8gdGhlIGlvbmljIENMSSBldGMuIEl0IHdpbGwgcmVzb2x2ZSB0byBmYWxzZSBpZiB0aGUgYXBwIHdhcyBkb3dubG9hZGVkIGZyb20gdGhlIGFwcCAvIHBsYXkgc3RvcmUgYnkgdGhlIGVuZCB1c2VyLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRJc0RlYnVnKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19