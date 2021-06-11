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
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
import { Observable } from 'rxjs';
var MediaCaptureOriginal = /** @class */ (function (_super) {
    __extends(MediaCaptureOriginal, _super);
    function MediaCaptureOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaCaptureOriginal.prototype.captureAudio = function (options) { return cordova(this, "captureAudio", { "callbackOrder": "reverse" }, arguments); };
    MediaCaptureOriginal.prototype.captureImage = function (options) { return cordova(this, "captureImage", { "callbackOrder": "reverse" }, arguments); };
    MediaCaptureOriginal.prototype.captureVideo = function (options) { return cordova(this, "captureVideo", { "callbackOrder": "reverse" }, arguments); };
    MediaCaptureOriginal.prototype.onPendingCaptureResult = function () { return cordova(this, "onPendingCaptureResult", { "eventObservable": true, "event": "pendingcaptureresult" }, arguments); };
    MediaCaptureOriginal.prototype.onPendingCaptureError = function () { return cordova(this, "onPendingCaptureError", { "eventObservable": true, "event": "pendingcaptureerror" }, arguments); };
    Object.defineProperty(MediaCaptureOriginal.prototype, "supportedImageModes", {
        get: function () { return cordovaPropertyGet(this, "supportedImageModes"); },
        set: function (value) { cordovaPropertySet(this, "supportedImageModes", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaCaptureOriginal.prototype, "supportedAudioModes", {
        get: function () { return cordovaPropertyGet(this, "supportedAudioModes"); },
        set: function (value) { cordovaPropertySet(this, "supportedAudioModes", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaCaptureOriginal.prototype, "supportedVideoModes", {
        get: function () { return cordovaPropertyGet(this, "supportedVideoModes"); },
        set: function (value) { cordovaPropertySet(this, "supportedVideoModes", value); },
        enumerable: false,
        configurable: true
    });
    MediaCaptureOriginal.pluginName = "MediaCapture";
    MediaCaptureOriginal.plugin = "cordova-plugin-media-capture";
    MediaCaptureOriginal.pluginRef = "navigator.device.capture";
    MediaCaptureOriginal.repo = "https://github.com/apache/cordova-plugin-media-capture";
    MediaCaptureOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return MediaCaptureOriginal;
}(IonicNativePlugin));
var MediaCapture = new MediaCaptureOriginal();
export { MediaCapture };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21lZGlhLWNhcHR1cmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sc0VBQXVELE1BQU0sb0JBQW9CLENBQUM7QUFDekYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUEySkEsZ0NBQWlCOzs7O0lBOEJqRCxtQ0FBWSxhQUFDLE9BQTZCO0lBWTFDLG1DQUFZLGFBQUMsT0FBNkI7SUFZMUMsbUNBQVksYUFBQyxPQUE2QjtJQVkxQyw2Q0FBc0I7SUFZdEIsNENBQXFCOzBCQXhFckIsNkNBQW1COzs7Ozs7MEJBT25CLDZDQUFtQjs7Ozs7OzBCQU9uQiw2Q0FBbUI7Ozs7Ozs7Ozs7O3VCQWpMckI7RUE2SmtDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSBjb25zdCBuYXZpZ2F0b3I6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYUZpbGUge1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGZpbGUsIHdpdGhvdXQgcGF0aCBpbmZvcm1hdGlvbi5cbiAgICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBmdWxsIHBhdGggb2YgdGhlIGZpbGUsIGluY2x1ZGluZyB0aGUgbmFtZS5cbiAgICovXG4gIGZ1bGxQYXRoOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZmlsZSdzIG1pbWUgdHlwZVxuICAgKi9cbiAgdHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0ZSBhbmQgdGltZSB3aGVuIHRoZSBmaWxlIHdhcyBsYXN0IG1vZGlmaWVkLlxuICAgKi9cbiAgbGFzdE1vZGlmaWVkRGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGZpbGUsIGluIGJ5dGVzLlxuICAgKi9cbiAgc2l6ZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGZvcm1hdCBpbmZvcm1hdGlvbiBvZiB0aGUgbWVkaWEgZmlsZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gc3VjY2Vzc0NhbGxiYWNrXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGVycm9yQ2FsbGJhY2tcbiAgICovXG4gIGdldEZvcm1hdERhdGEoc3VjY2Vzc0NhbGxiYWNrOiAoZGF0YTogTWVkaWFGaWxlRGF0YSkgPT4gYW55LCBlcnJvckNhbGxiYWNrPzogKGVycjogYW55KSA9PiBhbnkpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhRmlsZURhdGEge1xuICAvKipcbiAgICogVGhlIGFjdHVhbCBmb3JtYXQgb2YgdGhlIGF1ZGlvIGFuZCB2aWRlbyBjb250ZW50LlxuICAgKi9cbiAgY29kZWNzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgYXZlcmFnZSBiaXRyYXRlIG9mIHRoZSBjb250ZW50LiBUaGUgdmFsdWUgaXMgemVybyBmb3IgaW1hZ2VzLlxuICAgKi9cbiAgYml0cmF0ZTogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgaW1hZ2Ugb3IgdmlkZW8gaW4gcGl4ZWxzLiBUaGUgdmFsdWUgaXMgemVybyBmb3IgYXVkaW8gY2xpcHMuXG4gICAqL1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgaW1hZ2Ugb3IgdmlkZW8gaW4gcGl4ZWxzLiBUaGUgdmFsdWUgaXMgemVybyBmb3IgYXVkaW8gY2xpcHMuXG4gICAqL1xuICB3aWR0aDogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGxlbmd0aCBvZiB0aGUgdmlkZW8gb3Igc291bmQgY2xpcCBpbiBzZWNvbmRzLiBUaGUgdmFsdWUgaXMgemVybyBmb3IgaW1hZ2VzLlxuICAgKi9cbiAgZHVyYXRpb246IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXB0dXJlRXJyb3Ige1xuICBjb2RlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdHVyZUF1ZGlvT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiBhdWRpbyBjbGlwcy4gRGVmYXVsdHMgdG8gMS5cbiAgICogT24gaU9TIHlvdSBjYW4gb25seSByZWNvcmQgb25lIGZpbGUuXG4gICAqL1xuICBsaW1pdD86IG51bWJlcjtcbiAgLyoqXG4gICAqIE1heGltdW0gZHVyYXRpb24gb2YgYW4gYXVkaW8gc291bmQgY2xpcCwgaW4gc2Vjb25kcy4gVGhpcyBkb2VzIG5vdCB3b3JrIG9uIEFuZHJvaWQgZGV2aWNlcy5cbiAgICovXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcHR1cmVJbWFnZU9wdGlvbnMge1xuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2YgaW1hZ2VzIHRvIGNhcHR1cmUuIFRoaXMgbGltaXQgaXMgbm90IHN1cHBvcnRlZCBvbiBpT1MsIG9ubHkgb25lIGltYWdlIHdpbGwgYmUgdGFrZW4gcGVyIGludm9jYXRpb24uXG4gICAqL1xuICBsaW1pdD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXB0dXJlVmlkZW9PcHRpb25zIHtcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHZpZGVvIGNsaXBzIHRvIHJlY29yZC4gVGhpcyB2YWx1ZSBpcyBpZ25vcmVkIG9uIGlPUywgb25seSBvbmUgdmlkZW8gY2xpcCBjYW4gYmUgdGFrZW4gcGVyIGludm9jYXRpb24uXG4gICAqL1xuICBsaW1pdD86IG51bWJlcjtcbiAgLyoqXG4gICAqIE1heGltdW0gZHVyYXRpb24gcGVyIHZpZGVvIGNsaXAuIFRoaXMgd2lsbCBiZSBpZ25vcmVkIG9uIEJsYWNrQmVycnkuXG4gICAqL1xuICBkdXJhdGlvbj86IG51bWJlcjtcbiAgLyoqXG4gICAqIFF1YWxpdHkgb2YgdGhlIHZpZGVvLiBUaGlzIHBhcmFtZXRlciBjYW4gb25seSBiZSB1c2VkIHdpdGggQW5kcm9pZC5cbiAgICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlndXJhdGlvbkRhdGEge1xuICAvKipcbiAgICogVGhlIEFTQ0lJLWVuY29kZWQgbG93ZXJjYXNlIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIG1lZGlhIHR5cGUuXG4gICAqL1xuICB0eXBlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBpbWFnZSBvciB2aWRlbyBpbiBwaXhlbHMuIFRoZSB2YWx1ZSBpcyB6ZXJvIGZvciBzb3VuZCBjbGlwcy5cbiAgICovXG4gIGhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBpbWFnZSBvciB2aWRlbyBpbiBwaXhlbHMuIFRoZSB2YWx1ZSBpcyB6ZXJvIGZvciBzb3VuZCBjbGlwcy5cbiAgICovXG4gIHdpZHRoOiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgTWVkaWEgQ2FwdHVyZVxuICogQHByZW1pZXIgbWVkaWEtY2FwdHVyZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIGRldmljZSdzIGF1ZGlvLCBpbWFnZSwgYW5kIHZpZGVvIGNhcHR1cmUgY2FwYWJpbGl0aWVzLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tbWVkaWEtY2FwdHVyZWAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtNZWRpYSBDYXB0dXJlIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLW1lZGlhLWNhcHR1cmUpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTWVkaWFDYXB0dXJlLCBNZWRpYUZpbGUsIENhcHR1cmVFcnJvciwgQ2FwdHVyZUltYWdlT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbWVkaWEtY2FwdHVyZS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lZGlhQ2FwdHVyZTogTWVkaWFDYXB0dXJlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogbGV0IG9wdGlvbnM6IENhcHR1cmVJbWFnZU9wdGlvbnMgPSB7IGxpbWl0OiAzIH1cbiAqIHRoaXMubWVkaWFDYXB0dXJlLmNhcHR1cmVJbWFnZShvcHRpb25zKVxuICogICAudGhlbihcbiAqICAgICAoZGF0YTogTWVkaWFGaWxlW10pID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICogICAgIChlcnI6IENhcHR1cmVFcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnIpXG4gKiAgICk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogTWVkaWFGaWxlXG4gKiBNZWRpYUZpbGVEYXRhXG4gKiBDYXB0dXJlRXJyb3JcbiAqIENhcHR1cmVBdWRpb09wdGlvbnNcbiAqIENhcHR1cmVJbWFnZU9wdGlvbnNcbiAqIENhcHR1cmVWaWRlb09wdGlvbnNcbiAqIENvbmZpZ3VyYXRpb25EYXRhXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTWVkaWFDYXB0dXJlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWVkaWEtY2FwdHVyZScsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5kZXZpY2UuY2FwdHVyZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLW1lZGlhLWNhcHR1cmUnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lZGlhQ2FwdHVyZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoZSByZWNvcmRpbmcgaW1hZ2Ugc2l6ZXMgYW5kIGZvcm1hdHMgc3VwcG9ydGVkIGJ5IHRoZSBkZXZpY2UuXG4gICAqIEByZXR1cm5zIHtDb25maWd1cmF0aW9uRGF0YVtdfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHN1cHBvcnRlZEltYWdlTW9kZXM6IENvbmZpZ3VyYXRpb25EYXRhW107XG5cbiAgLyoqXG4gICAqIFRoZSBhdWRpbyByZWNvcmRpbmcgZm9ybWF0cyBzdXBwb3J0ZWQgYnkgdGhlIGRldmljZS5cbiAgICogQHJldHVybnMge0NvbmZpZ3VyYXRpb25EYXRhW119XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgc3VwcG9ydGVkQXVkaW9Nb2RlczogQ29uZmlndXJhdGlvbkRhdGFbXTtcblxuICAvKipcbiAgICogVGhlIHJlY29yZGluZyB2aWRlbyByZXNvbHV0aW9ucyBhbmQgZm9ybWF0cyBzdXBwb3J0ZWQgYnkgdGhlIGRldmljZS5cbiAgICogQHJldHVybnMge0NvbmZpZ3VyYXRpb25EYXRhW119XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgc3VwcG9ydGVkVmlkZW9Nb2RlczogQ29uZmlndXJhdGlvbkRhdGFbXTtcblxuICAvKipcbiAgICogU3RhcnQgdGhlIGF1ZGlvIHJlY29yZGVyIGFwcGxpY2F0aW9uIGFuZCByZXR1cm4gaW5mb3JtYXRpb24gYWJvdXQgY2FwdHVyZWQgYXVkaW8gY2xpcCBmaWxlcy5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8TWVkaWFGaWxlW10+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgY2FwdHVyZUF1ZGlvKG9wdGlvbnM/OiBDYXB0dXJlQXVkaW9PcHRpb25zKTogUHJvbWlzZTxNZWRpYUZpbGVbXSB8IENhcHR1cmVFcnJvcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgY2FtZXJhIGFwcGxpY2F0aW9uIGFuZCByZXR1cm4gaW5mb3JtYXRpb24gYWJvdXQgY2FwdHVyZWQgaW1hZ2UgZmlsZXMuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE1lZGlhRmlsZVtdPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGNhcHR1cmVJbWFnZShvcHRpb25zPzogQ2FwdHVyZUltYWdlT3B0aW9ucyk6IFByb21pc2U8TWVkaWFGaWxlW10gfCBDYXB0dXJlRXJyb3I+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdGhlIHZpZGVvIHJlY29yZGVyIGFwcGxpY2F0aW9uIGFuZCByZXR1cm4gaW5mb3JtYXRpb24gYWJvdXQgY2FwdHVyZWQgdmlkZW8gY2xpcCBmaWxlcy5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8TWVkaWFGaWxlW10+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgY2FwdHVyZVZpZGVvKG9wdGlvbnM/OiBDYXB0dXJlVmlkZW9PcHRpb25zKTogUHJvbWlzZTxNZWRpYUZpbGVbXSB8IENhcHR1cmVFcnJvcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBpcyBmaXJlZCBpZiB0aGUgY2FwdHVyZSBjYWxsIGlzIHN1Y2Nlc3NmdWxcbiAgICogQHJldHVybnMge09ic2VydmFibGU8TWVkaWFGaWxlW10+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ3BlbmRpbmdjYXB0dXJlcmVzdWx0JyxcbiAgfSlcbiAgb25QZW5kaW5nQ2FwdHVyZVJlc3VsdCgpOiBPYnNlcnZhYmxlPE1lZGlhRmlsZVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIGlzIGZpcmVkIGlmIHRoZSBjYXB0dXJlIGNhbGwgaXMgdW5zdWNjZXNzZnVsXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPENhcHR1cmVFcnJvcj59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAncGVuZGluZ2NhcHR1cmVlcnJvcicsXG4gIH0pXG4gIG9uUGVuZGluZ0NhcHR1cmVFcnJvcigpOiBPYnNlcnZhYmxlPENhcHR1cmVFcnJvcj4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19