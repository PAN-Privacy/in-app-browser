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
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var WebViewOriginal = /** @class */ (function (_super) {
    __extends(WebViewOriginal, _super);
    function WebViewOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(WebViewOriginal.prototype, "convertFileSrc", {
        get: function () { return cordovaPropertyGet(this, "convertFileSrc"); },
        set: function (value) { cordovaPropertySet(this, "convertFileSrc", value); },
        enumerable: false,
        configurable: true
    });
    WebViewOriginal.pluginName = "WebView";
    WebViewOriginal.plugin = "cordova-plugin-ionic-webview";
    WebViewOriginal.pluginRef = "window.Ionic.WebView";
    WebViewOriginal.repo = "https://github.com/ionic-team/cordova-plugin-ionic-webview";
    WebViewOriginal.platforms = ["Android", "iOS"];
    WebViewOriginal.install = "ionic cordova plugin add cordova-plugin-ionic-webview";
    return WebViewOriginal;
}(IonicNativePlugin));
var WebView = new WebViewOriginal();
export { WebView };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2lvbmljLXdlYnZpZXcvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sNkRBQThDLE1BQU0sb0JBQW9CLENBQUM7O0lBZ0NuRCwyQkFBaUI7Ozs7MEJBSzVDLG1DQUFjOzs7Ozs7Ozs7Ozs7a0JBdENoQjtFQWlDNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIElvbmljIFdlYnZpZXdcbiAqIEBjYXBhY2l0b3JpbmNvbXBhdGlibGUgdHJ1ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBBY2Nlc3MgV2ViIFZpZXcgdXRpbGl0aWVzLlxuICpcbiAqIFJlcXVpcmVzIHRoZSBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWlvbmljLXdlYnZpZXdgID4gMi4wLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbSW9uaWMgV2ViIFZpZXddKGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2NvcmRvdmEtcGx1Z2luLWlvbmljLXdlYnZpZXcpIHJlcG9zaXRvcnkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBXZWJWaWV3IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pb25pYy13ZWJ2aWV3L25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgd2VidmlldzogV2ViVmlldykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogaW1nID0gdGhpcy53ZWJ2aWV3LmNvbnZlcnRGaWxlU3JjKCdmaWxlOi8vL1VzZXJzL2Rhbi9jYW1lcmEtaW1hZ2UtMTIzNDUucG5nJylcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXZWJWaWV3JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW9uaWMtd2VidmlldycsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5Jb25pYy5XZWJWaWV3JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2NvcmRvdmEtcGx1Z2luLWlvbmljLXdlYnZpZXcnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1pb25pYy13ZWJ2aWV3Jyxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViVmlldyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnZlcnQgYSBgZmlsZTovL2AgVVJMIHRvIGEgVVJMIHRoYXQgaXMgY29tcGF0aWJsZSB3aXRoIHRoZSBsb2NhbCB3ZWIgc2VydmVyIGluIHRoZSBXZWIgVmlldyBwbHVnaW4uXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgY29udmVydEZpbGVTcmM6ICh1cmw6IHN0cmluZykgPT4gc3RyaW5nO1xufVxuIl19