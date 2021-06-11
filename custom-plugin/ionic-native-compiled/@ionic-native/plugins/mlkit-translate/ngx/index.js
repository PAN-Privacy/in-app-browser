import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var MLKitTranslate = /** @class */ (function (_super) {
    __extends(MLKitTranslate, _super);
    function MLKitTranslate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MLKitTranslate.prototype.translate = function (text, targetLanguage, sourceLanguage) { return cordova(this, "translate", {}, arguments); };
    MLKitTranslate.prototype.identifyLanguage = function (text) { return cordova(this, "identifyLanguage", {}, arguments); };
    MLKitTranslate.prototype.getDownloadedModels = function () { return cordova(this, "getDownloadedModels", {}, arguments); };
    MLKitTranslate.prototype.getAvailableModels = function () { return cordova(this, "getAvailableModels", {}, arguments); };
    MLKitTranslate.prototype.downloadModel = function (code) { return cordova(this, "downloadModel", {}, arguments); };
    MLKitTranslate.prototype.deleteModel = function (code) { return cordova(this, "deleteModel", {}, arguments); };
    MLKitTranslate.pluginName = "MLKitTranslate";
    MLKitTranslate.plugin = "cordova-plugin-mlkit-translate";
    MLKitTranslate.pluginRef = "MLKitTranslate";
    MLKitTranslate.repo = "https://github.com/rigelglen/cordova-plugin-mlkit-translate";
    MLKitTranslate.platforms = ["Android", "iOS"];
    MLKitTranslate.decorators = [
        { type: Injectable }
    ];
    return MLKitTranslate;
}(IonicNativePlugin));
export { MLKitTranslate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21sa2l0LXRyYW5zbGF0ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnRHBDLGtDQUFpQjs7OztJQVVuRCxrQ0FBUyxhQUFDLElBQVksRUFBRSxjQUFzQixFQUFFLGNBQXVCO0lBVXZFLHlDQUFnQixhQUFDLElBQVk7SUFTN0IsNENBQW1CO0lBU25CLDJDQUFrQjtJQVVsQixzQ0FBYSxhQUFDLElBQVk7SUFVMUIsb0NBQVcsYUFBQyxJQUFZOzs7Ozs7O2dCQTNEekIsVUFBVTs7eUJBaERYO0VBaURvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIGxhbmd1YWdlIG9iamVjdCB3aGljaCB3aWxsIGJlIHJldHVybmVkIGJ5IGBkb3dubG9hZE1vZGVsYCwgYGRlbGV0ZU1vZGVsYCwgYGdldEF2YWlsYWJsZU1vZGVsc2AgYW5kIGBnZXREb3dubG9hZGVkTW9kZWxzYCBtZXRob2RzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlTW9kZWwge1xuICAvKipcbiAgICogQkNQLTQ3IGxhbmd1YWdlIGNvZGUgb2YgdGhlIGxhbmd1YWdlLiBGb3IgZXhhbXBsZTogZW5cbiAgICogRm9yIGZ1bGwgbGlzdCBvZiBsYW5ndWFnZXMgY29kZXMsIHNlZSBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9tbC1raXQvdHJhbnNsYXRpb24tbGFuZ3VhZ2Utc3VwcG9ydFxuICAgKi9cbiAgY29kZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5IG5hbWUgb2YgdGhlIGxhbmd1YWdlLiBGb3IgZXhhbXBsZTogRW5nbGlzaFxuICAgKi9cbiAgZGlzcGxheU5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBNTEtpdFRyYW5zbGF0ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBQbHVnaW4gdGhhdCBpbXBsZW1lbnRzIE1MS2l0IFRyYW5zbGF0aW9uIGFuZCBMYW5ndWFnZSBJZGVudGlmaWNhdGlvbiBmZWF0dXJlcy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE1MS2l0VHJhbnNsYXRlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9tbC1raXQtdHJhbnNsYXRlJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtbGtpdFRyYW5zbGF0ZTogTUxLaXRUcmFuc2xhdGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMubWxraXRUcmFuc2xhdGUudHJhbnNsYXRlKCdIZWxsbycsICdlbicsICdlcycpXG4gKiAgIC50aGVuKChyZXN1bHRUZXh0OiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IHN0cmluZykgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIEBpbnRlcmZhY2VzXG4gKiBMYW5ndWFnZU1vZGVsXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdNTEtpdFRyYW5zbGF0ZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW1sa2l0LXRyYW5zbGF0ZScsXG4gIHBsdWdpblJlZjogJ01MS2l0VHJhbnNsYXRlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9yaWdlbGdsZW4vY29yZG92YS1wbHVnaW4tbWxraXQtdHJhbnNsYXRlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1MS2l0VHJhbnNsYXRlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVHJhbnNsYXRlcyB0ZXh0IGZyb20gb25lIGxhbmd1YWdlIHRvIGFub3RoZXIuIFJlcXVpcmVzIHRoZSBzb3VyY2UgYW5kIHRhcmdldCBsYW5ndWFnZXMgbmVlZCB0byBiZSBkb3dubG9hZGVkLlxuICAgKiBJZiBub3QgdGhlIGxhbmd1YWdlcyBhcmUgZG93bmxvYWRlZCBpbiB0aGUgYmFja2dyb3VuZCBhdXRvbWF0aWNhbGx5LlxuICAgKiBAcGFyYW0gdGV4dCB7c3RyaW5nfSB0ZXh0IHRvIGJlIHRyYW5zbGF0ZWRcbiAgICogQHBhcmFtIHRhcmdldExhbmd1YWdlIHtzdHJpbmd9IEJDUC00NyBsYW5ndWFnZSBjb2RlIG9mIHRoZSBsYW5ndWFnZSB0byB0cmFuc2xhdGUgdG9cbiAgICogQHBhcmFtIHNvdXJjZUxhbmd1YWdlIHtzdHJpbmc9fSAob3B0aW9uYWwpIEJDUC00NyBsYW5ndWFnZSBjb2RlIG9mIHRoZSBsYW5ndWFnZSB0byB0cmFuc2xhdGUgdG8uIElmIG5vdCBwcm92aWRlZCwgc291cmNlIGxhbmd1YWdlIGlzIGluZmVycmVkIGZyb20gdGV4dFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgdHJhbnNsYXRlZCB0ZXh0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHRyYW5zbGF0ZSh0ZXh0OiBzdHJpbmcsIHRhcmdldExhbmd1YWdlOiBzdHJpbmcsIHNvdXJjZUxhbmd1YWdlPzogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgbGFuZ3VhZ2Ugb2YgYSBzdHJpbmcgb2YgdGV4dC5cbiAgICogQHBhcmFtIHRleHQge3N0cmluZ30gdGV4dCB0byBiZSB0cmFuc2xhdGVkXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TGFuZ3VhZ2VNb2RlbD59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgaWRlbnRpZmllZCBsYW5ndWFnZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpZGVudGlmeUxhbmd1YWdlKHRleHQ6IHN0cmluZyk6IFByb21pc2U8TGFuZ3VhZ2VNb2RlbD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGxhbmd1YWdlIG1vZGVscyB0aGF0IGhhdmUgYmVlbiBkb3dubG9hZGVkIHRvIHRoZSBkZXZpY2UuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TGFuZ3VhZ2VNb2RlbFtdPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGFuIGFycmF5IG9mIGxhbmd1YWdlcyB0aGF0IGhhdmUgYmVlbiBkb3dubG9hZGVkLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXREb3dubG9hZGVkTW9kZWxzKCk6IFByb21pc2U8TGFuZ3VhZ2VNb2RlbFtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgbGFuZ3VhZ2UgbW9kZWxzIHRoYXQgY2FuIGJlIGRvd25sb2FkZWQuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TGFuZ3VhZ2VNb2RlbFtdPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGFuIGFycmF5IG9mIHBvc3NpYmxlIGxhbmd1YWdlcyB0aGF0IGNhbiBiZSBkb3dubG9hZGVkLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBdmFpbGFibGVNb2RlbHMoKTogUHJvbWlzZTxMYW5ndWFnZU1vZGVsW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRG93bmxvYWRzIGEgc3BlY2lmaWVkIGxhbmd1YWdlIG1vZGVsLlxuICAgKiBAcGFyYW0gY29kZSB7c3RyaW5nfSBCQ1AtNDcgbGFuZ3VhZ2UgY29kZSBvZiB0aGUgbGFuZ3VhZ2UgdG8gZG93bmxvYWRcbiAgICogQHJldHVybiB7UHJvbWlzZTxMYW5ndWFnZU1vZGVsPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBkb3dubG9hZGVkIGxhbmd1YWdlLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkb3dubG9hZE1vZGVsKGNvZGU6IHN0cmluZyk6IFByb21pc2U8TGFuZ3VhZ2VNb2RlbD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgc3BlY2lmaWVkIGxhbmd1YWdlIG1vZGVsLlxuICAgKiBAcGFyYW0gY29kZSB7c3RyaW5nfSBCQ1AtNDcgbGFuZ3VhZ2UgY29kZSBvZiB0aGUgbGFuZ3VhZ2UgdG8gZGVsZXRlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TGFuZ3VhZ2VNb2RlbD59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZGVsZXRlZCBsYW5ndWFnZS5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlTW9kZWwoY29kZTogc3RyaW5nKTogUHJvbWlzZTxMYW5ndWFnZU1vZGVsPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=