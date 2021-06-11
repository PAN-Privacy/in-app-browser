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
import { IonicNativePlugin, cordovaInstance } from '@ionic-native/core';
export var UploadState;
(function (UploadState) {
    UploadState["UPLOADED"] = "UPLOADED";
    UploadState["FAILED"] = "FAILED";
    UploadState["UPLOADING"] = "UPLOADING";
    UploadState["INITIALIZED"] = "INITIALIZED";
})(UploadState || (UploadState = {}));
var FileTransferManager = /** @class */ (function () {
    function FileTransferManager(options) {
        this._objectInstance = window.FileTransferManager.init(options.config, options.callBack);
    }
    FileTransferManager.prototype.startUpload = function (payload) { return cordovaInstance(this, "startUpload", {}, arguments); };
    FileTransferManager.prototype.removeUpload = function (id) { return cordovaInstance(this, "removeUpload", {}, arguments); };
    FileTransferManager.prototype.acknowledgeEvent = function (id) { return cordovaInstance(this, "acknowledgeEvent", {}, arguments); };
    FileTransferManager.prototype.destroy = function () { return cordovaInstance(this, "destroy", {}, arguments); };
    return FileTransferManager;
}());
export { FileTransferManager };
var BackgroundUploadOriginal = /** @class */ (function (_super) {
    __extends(BackgroundUploadOriginal, _super);
    function BackgroundUploadOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FileTransferManager = FileTransferManager;
        return _this;
    }
    BackgroundUploadOriginal.prototype.init = function (options) {
        return new FileTransferManager(options);
    };
    BackgroundUploadOriginal.pluginName = "BackgroundUpload";
    BackgroundUploadOriginal.plugin = "cordova-plugin-background-upload";
    BackgroundUploadOriginal.pluginRef = "FileTransferManager";
    BackgroundUploadOriginal.repo = "https://github.com/spoonconsulting/cordova-plugin-background-upload";
    BackgroundUploadOriginal.install = "ionic cordova plugin add cordova-plugin-background-upload";
    BackgroundUploadOriginal.platforms = ["Android", "iOS"];
    return BackgroundUploadOriginal;
}(IonicNativePlugin));
var BackgroundUpload = new BackgroundUploadOriginal();
export { BackgroundUpload };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhY2tncm91bmQtdXBsb2FkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHNDQUE4QyxNQUFNLG9CQUFvQixDQUFDO0FBSWhGLE1BQU0sQ0FBTixJQUFZLFdBS1g7QUFMRCxXQUFZLFdBQVc7SUFDckIsb0NBQXFCLENBQUE7SUFDckIsZ0NBQWlCLENBQUE7SUFDakIsc0NBQXVCLENBQUE7SUFDdkIsMENBQTJCLENBQUE7QUFDN0IsQ0FBQyxFQUxXLFdBQVcsS0FBWCxXQUFXLFFBS3RCOztJQXdDQyw2QkFBWSxPQUFtQjtRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUdELHlDQUFXLGFBQUMsT0FBMEI7SUFLdEMsMENBQVksYUFBQyxFQUFPO0lBS3BCLDhDQUFnQixhQUFDLEVBQVU7SUFLM0IscUNBQU87OEJBdEVUOzs7O0lBeUdzQyxvQ0FBaUI7OztRQUNyRCx5QkFBbUIsR0FBRyxtQkFBbUIsQ0FBQzs7O0lBRTFDLCtCQUFJLEdBQUosVUFBSyxPQUFtQjtRQUN0QixPQUFPLElBQUksbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7OzsyQkE5R0g7RUF5R3NDLGlCQUFpQjtTQUExQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmFJbnN0YW5jZSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xuXG5leHBvcnQgZW51bSBVcGxvYWRTdGF0ZSB7XG4gIFVQTE9BREVEID0gJ1VQTE9BREVEJyxcbiAgRkFJTEVEID0gJ0ZBSUxFRCcsXG4gIFVQTE9BRElORyA9ICdVUExPQURJTkcnLFxuICBJTklUSUFMSVpFRCA9ICdJTklUSUFMSVpFRCcsXG59XG5cbmV4cG9ydCB0eXBlIFVwbG9hZFN0YXRlVHlwZSA9IGtleW9mIHR5cGVvZiBVcGxvYWRTdGF0ZTtcblxuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRFdmVudCB7XG4gIGlkPzogc3RyaW5nOyAvLyBpZCBvZiB0aGUgdXBsb2FkXG4gIHN0YXRlPzogVXBsb2FkU3RhdGVUeXBlOyAvLyBzdGF0ZSBvZiB0aGUgdXBsb2FkIChlaXRoZXIgVVBMT0FESU5HLCBVUExPQURFRCBvciBGQUlMRUQpXG4gIHN0YXR1c0NvZGU/OiBudW1iZXI7IC8vIHJlc3BvbnNlIGNvZGUgcmV0dXJuZWQgYnkgc2VydmVyIGFmdGVyIHVwbG9hZCBpcyBjb21wbGV0ZWRcbiAgc2VydmVyUmVzcG9uc2U/OiBhbnk7IC8vIHNlcnZlciByZXNwb25zZSByZWNlaXZlZCBhZnRlciB1cGxvYWQgaXMgY29tcGxldGVkXG4gIGVycm9yPzogYW55OyAvLyBlcnJvciBtZXNzYWdlIGluIGNhc2Ugb2YgZmFpbHVyZVxuICBlcnJvckNvZGU/OiBudW1iZXI7IC8vIGVycm9yIGNvZGUgZm9yIGFueSBleGNlcHRpb24gZW5jb3VudGVyZWRcbiAgcHJvZ3Jlc3M/OiBhbnk7IC8vIHByb2dyZXNzIGZvciBvbmdvaW5nIHVwbG9hZFxuICBldmVudElkPzogc3RyaW5nOyAvLyBpZCBvZiB0aGUgZXZlbnRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGVE1QYXlsb2FkT3B0aW9ucyB7XG4gIGlkOiBzdHJpbmc7XG4gIGZpbGVQYXRoOiBzdHJpbmc7XG4gIGZpbGVLZXk/OiBzdHJpbmc7XG4gIHNlcnZlclVybDogc3RyaW5nO1xuICBub3RpZmljYXRpb25UaXRsZT86IHN0cmluZztcbiAgaGVhZGVycz86IHtcbiAgICBbbmFtZTogc3RyaW5nXTogc3RyaW5nO1xuICB9O1xuICBwYXJhbWV0ZXJzPzoge1xuICAgIFtuYW1lOiBzdHJpbmddOiBzdHJpbmc7XG4gIH07XG4gIFtwcm9wOiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRlRNT3B0aW9ucyB7XG4gIGNhbGxCYWNrOiAoZXZlbnQ6IFVwbG9hZEV2ZW50KSA9PiBhbnk7XG4gIGNvbmZpZz86IHtcbiAgICBwYXJhbGxlbFVwbG9hZHNMaW1pdD86IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVUcmFuc2Zlck1hbmFnZXIge1xuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEZUTU9wdGlvbnMpIHtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IHdpbmRvdy5GaWxlVHJhbnNmZXJNYW5hZ2VyLmluaXQob3B0aW9ucy5jb25maWcsIG9wdGlvbnMuY2FsbEJhY2spO1xuICB9XG5cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHN0YXJ0VXBsb2FkKHBheWxvYWQ6IEZUTVBheWxvYWRPcHRpb25zKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZVVwbG9hZChpZDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YUluc3RhbmNlKClcbiAgYWNrbm93bGVkZ2VFdmVudChpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZGVzdHJveSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIEJhY2tncm91bmRVcGxvYWRcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJhY2tncm91bmRVcGxvYWQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JhY2tncm91bmQtdXBsb2FkL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFja2dyb3VuZFVwbG9hZDogQmFja2dyb3VuZFVwbG9hZCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYmFja2dyb3VuZFVwbG9hZC5pbml0KHt9KVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0JhY2tncm91bmRVcGxvYWQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1iYWNrZ3JvdW5kLXVwbG9hZCcsXG4gIHBsdWdpblJlZjogJ0ZpbGVUcmFuc2Zlck1hbmFnZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3Nwb29uY29uc3VsdGluZy9jb3Jkb3ZhLXBsdWdpbi1iYWNrZ3JvdW5kLXVwbG9hZCcsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tYmFja2dyb3VuZC11cGxvYWQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZFVwbG9hZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgRmlsZVRyYW5zZmVyTWFuYWdlciA9IEZpbGVUcmFuc2Zlck1hbmFnZXI7XG5cbiAgaW5pdChvcHRpb25zOiBGVE1PcHRpb25zKTogRmlsZVRyYW5zZmVyTWFuYWdlciB7XG4gICAgcmV0dXJuIG5ldyBGaWxlVHJhbnNmZXJNYW5hZ2VyKG9wdGlvbnMpO1xuICB9XG59XG4iXX0=