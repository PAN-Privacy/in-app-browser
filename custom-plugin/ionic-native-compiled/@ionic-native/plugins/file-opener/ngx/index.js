import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var FileOpener = /** @class */ (function (_super) {
    __extends(FileOpener, _super);
    function FileOpener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileOpener.prototype.open = function (filePath, fileMIMEType) { return cordova(this, "open", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpener.prototype.uninstall = function (packageId) { return cordova(this, "uninstall", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpener.prototype.appIsInstalled = function (packageId) { return cordova(this, "appIsInstalled", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpener.prototype.showOpenWithDialog = function (filePath, fileMIMEType) { return cordova(this, "showOpenWithDialog", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpener.pluginName = "FileOpener";
    FileOpener.plugin = "cordova-plugin-file-opener2";
    FileOpener.pluginRef = "cordova.plugins.fileOpener2";
    FileOpener.repo = "https://github.com/pwlin/cordova-plugin-file-opener2";
    FileOpener.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    FileOpener.decorators = [
        { type: Injectable }
    ];
    return FileOpener;
}(IonicNativePlugin));
export { FileOpener };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtb3BlbmVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDeEMsOEJBQWlCOzs7O0lBWS9DLHlCQUFJLGFBQUMsUUFBZ0IsRUFBRSxZQUFvQjtJQWMzQyw4QkFBUyxhQUFDLFNBQWlCO0lBYzNCLG1DQUFjLGFBQUMsU0FBaUI7SUFlaEMsdUNBQWtCLGFBQUMsUUFBZ0IsRUFBRSxZQUFvQjs7Ozs7OztnQkF4RDFELFVBQVU7O3FCQWpDWDtFQWtDZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBGaWxlIE9wZW5lclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiB3aWxsIG9wZW4gYSBmaWxlIG9uIHlvdXIgZGV2aWNlIGZpbGUgc3lzdGVtIHdpdGggaXRzIGRlZmF1bHQgYXBwbGljYXRpb24uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGaWxlT3BlbmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlLW9wZW5lci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZU9wZW5lcjogRmlsZU9wZW5lcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5maWxlT3BlbmVyLm9wZW4oJ3BhdGgvdG8vZmlsZS5wZGYnLCAnYXBwbGljYXRpb24vcGRmJylcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0ZpbGUgaXMgb3BlbmVkJykpXG4gKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKCdFcnJvciBvcGVuaW5nIGZpbGUnLCBlKSk7XG4gKlxuICogdGhpcy5maWxlT3BlbmVyLnNob3dPcGVuV2l0aERpYWxvZygncGF0aC90by9maWxlLnBkZicsICdhcHBsaWNhdGlvbi9wZGYnKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnRmlsZSBpcyBvcGVuZWQnKSlcbiAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coJ0Vycm9yIG9wZW5pbmcgZmlsZScsIGUpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGaWxlT3BlbmVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZS1vcGVuZXIyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmZpbGVPcGVuZXIyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wd2xpbi9jb3Jkb3ZhLXBsdWdpbi1maWxlLW9wZW5lcjInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cycsICdXaW5kb3dzIFBob25lIDgnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZU9wZW5lciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIE9wZW4gYW4gZmlsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVBhdGggRmlsZSBQYXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTUlNRVR5cGUgRmlsZSBNSU1FIFR5cGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3MnLFxuICAgIGVycm9yTmFtZTogJ2Vycm9yJyxcbiAgfSlcbiAgb3BlbihmaWxlUGF0aDogc3RyaW5nLCBmaWxlTUlNRVR5cGU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuaW5zdGFsbHMgYSBwYWNrYWdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYWNrYWdlSWQgUGFja2FnZSBJRFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2VzcycsXG4gICAgZXJyb3JOYW1lOiAnZXJyb3InLFxuICB9KVxuICB1bmluc3RhbGwocGFja2FnZUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBhcHAgaXMgYWxyZWFkeSBpbnN0YWxsZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhY2thZ2VJZCBQYWNrYWdlIElEXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ29iamVjdCcsXG4gICAgc3VjY2Vzc05hbWU6ICdzdWNjZXNzJyxcbiAgICBlcnJvck5hbWU6ICdlcnJvcicsXG4gIH0pXG4gIGFwcElzSW5zdGFsbGVkKHBhY2thZ2VJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgd2l0aCBzeXN0ZW0gbW9kYWwgdG8gb3BlbiBmaWxlIHdpdGggYW4gYWxyZWFkeSBpbnN0YWxsZWQgYXBwLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVBhdGggRmlsZSBQYXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTUlNRVR5cGUgRmlsZSBNSU1FIFR5cGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3MnLFxuICAgIGVycm9yTmFtZTogJ2Vycm9yJyxcbiAgfSlcbiAgc2hvd09wZW5XaXRoRGlhbG9nKGZpbGVQYXRoOiBzdHJpbmcsIGZpbGVNSU1FVHlwZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==