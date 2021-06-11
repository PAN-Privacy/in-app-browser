import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Base64ToGallery = /** @class */ (function (_super) {
    __extends(Base64ToGallery, _super);
    function Base64ToGallery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Base64ToGallery.prototype.base64ToGallery = function (data, options) { return cordova(this, "base64ToGallery", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    Base64ToGallery.pluginName = "Base64ToGallery";
    Base64ToGallery.plugin = "cordova-base64-to-gallery";
    Base64ToGallery.pluginRef = "cordova";
    Base64ToGallery.repo = "https://github.com/Nexxa/cordova-base64-to-gallery";
    Base64ToGallery.platforms = ["Android", "iOS", "Windows Phone 8"];
    Base64ToGallery.decorators = [
        { type: Injectable }
    ];
    return Base64ToGallery;
}(IonicNativePlugin));
export { Base64ToGallery };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jhc2U2NC10by1nYWxsZXJ5L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXlDbkMsbUNBQWlCOzs7O0lBV3BELHlDQUFlLGFBQUMsSUFBWSxFQUFFLE9BQWdDOzs7Ozs7O2dCQVovRCxVQUFVOzswQkF6Q1g7RUEwQ3FDLGlCQUFpQjtTQUF6QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZTY0VG9HYWxsZXJ5T3B0aW9ucyB7XG4gIC8qKiBTYXZlZCBmaWxlIG5hbWUgcHJlZml4ICovXG4gIHByZWZpeDogc3RyaW5nO1xuICAvKipcbiAgICogT24gQW5kcm9pZCBydW5zIE1lZGlhIFNjYW5uZXIgYWZ0ZXIgZmlsZSBjcmVhdGlvbi5cbiAgICogT24gaU9TIGlmIHRydWUgdGhlIGZpbGUgd2lsbCBiZSBhZGRlZCB0byBjYW1lcmEgcm9sbCwgb3RoZXJ3aXNlIHdpbGwgYmUgc2F2ZWQgdG8gYSBsaWJyYXJ5IGZvbGRlci5cbiAgICovXG4gIG1lZGlhU2Nhbm5lcjogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBCYXNlNjQgVG8gR2FsbGVyeVxuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gc2F2ZSBiYXNlNjQgZGF0YSBhcyBhIHBuZyBpbWFnZSBpbnRvIHRoZSBkZXZpY2VcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmFzZTY0VG9HYWxsZXJ5IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYXNlNjQtdG8tZ2FsbGVyeS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFzZTY0VG9HYWxsZXJ5OiBCYXNlNjRUb0dhbGxlcnkpIHsgfVxuICpcbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5iYXNlNjRUb0dhbGxlcnkuYmFzZTY0VG9HYWxsZXJ5KGJhc2U2NERhdGEsIHsgcHJlZml4OiAnX2ltZycgfSkudGhlbihcbiAqICAgcmVzID0+IGNvbnNvbGUubG9nKCdTYXZlZCBpbWFnZSB0byBnYWxsZXJ5ICcsIHJlcyksXG4gKiAgIGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3Igc2F2aW5nIGltYWdlIHRvIGdhbGxlcnkgJywgZXJyKVxuICogKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEJhc2U2NFRvR2FsbGVyeU9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCYXNlNjRUb0dhbGxlcnknLFxuICBwbHVnaW46ICdjb3Jkb3ZhLWJhc2U2NC10by1nYWxsZXJ5JyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTmV4eGEvY29yZG92YS1iYXNlNjQtdG8tZ2FsbGVyeScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFzZTY0VG9HYWxsZXJ5IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29udmVydHMgYSBiYXNlNjQgc3RyaW5nIHRvIGFuIGltYWdlIGZpbGUgaW4gdGhlIGRldmljZSBnYWxsZXJ5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIFRoZSBhY3R1YWwgYmFzZTY0IHN0cmluZyB0aGF0IHlvdSB3YW50IHRvIHNhdmVcbiAgICogQHBhcmFtIHthbnl9IFtvcHRpb25zXSBBbiBvYmplY3Qgd2l0aCBwcm9wZXJ0aWVzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgaW1hZ2UgaXMgc2F2ZWQuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gIH0pXG4gIGJhc2U2NFRvR2FsbGVyeShkYXRhOiBzdHJpbmcsIG9wdGlvbnM/OiBCYXNlNjRUb0dhbGxlcnlPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==