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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var TextToSpeechAdvancedOriginal = /** @class */ (function (_super) {
    __extends(TextToSpeechAdvancedOriginal, _super);
    function TextToSpeechAdvancedOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextToSpeechAdvancedOriginal.prototype.speak = function (textOrOptions) { return cordova(this, "speak", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    TextToSpeechAdvancedOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    TextToSpeechAdvancedOriginal.prototype.getVoices = function () { return cordova(this, "getVoices", {}, arguments); };
    TextToSpeechAdvancedOriginal.pluginName = "Text To Speech Advanced";
    TextToSpeechAdvancedOriginal.plugin = "cordova-plugin-tts-advanced";
    TextToSpeechAdvancedOriginal.pluginRef = "TTS";
    TextToSpeechAdvancedOriginal.repo = "https://github.com/spasma/cordova-plugin-tts-advanced";
    TextToSpeechAdvancedOriginal.platforms = ["Android", "iOS"];
    return TextToSpeechAdvancedOriginal;
}(IonicNativePlugin));
var TextToSpeechAdvanced = new TextToSpeechAdvancedOriginal();
export { TextToSpeechAdvanced };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RleHQtdG8tc3BlZWNoLWFkdmFuY2VkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXdEOUIsd0NBQWlCOzs7O0lBVXpELG9DQUFLLGFBQUMsYUFBa0M7SUFTeEMsbUNBQUk7SUFTSix3Q0FBUzs7Ozs7OytCQXJGWDtFQXlEMEMsaUJBQWlCO1NBQTlDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRUU09wdGlvbnMge1xuICAvKiogdGV4dCB0byBzcGVhayAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKiBjYW5jZWwsIGJvb2xlYW46IHRydWUvZmFsc2UgKi9cbiAgaWRlbnRpZmllcjogc3RyaW5nO1xuICAvKiogdm9pY2UgaWRlbnRpZmllciAoaU9TIC8gQW5kcm9pZCkgZnJvbSBnZXRWb2ljZXMgKi9cbiAgbG9jYWxlPzogc3RyaW5nO1xuICAvKiogc3BlZWQgcmF0ZSwgMCB+IDEgKi9cbiAgcmF0ZT86IG51bWJlcjtcbiAgLyoqIHBpdGNoLCAwIH4gMSAqL1xuICBwaXRjaD86IG51bWJlcjtcbiAgLyoqIGNhbmNlbCwgYm9vbGVhbjogdHJ1ZS9mYWxzZSAqL1xuICBjYW5jZWw/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRUU1ZvaWNlIHtcbiAgLyoqIFZvaWNlIG5hbWUgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKiogVm9pY2UgbGFuZ3VhZ2UgKi9cbiAgbGFuZ3VhZ2U6IHN0cmluZztcbiAgLyoqIFZvaWNlIGlkZW50aWZpZXIgc3RyaW5nICovXG4gIGlkZW50aWZpZXI6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBUZXh0IFRvIFNwZWVjaCBBZHZhbmNlZFxuICogQGRlc2NyaXB0aW9uXG4gKiBUZXh0IHRvIFNwZWVjaCBwbHVnaW5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFRleHRUb1NwZWVjaEFkdmFuY2VkIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS90ZXh0LXRvLXNwZWVjaC1hZHZhbmNlZC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdHRzOiBUZXh0VG9TcGVlY2hBZHZhbmNlZCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy50dHMuc3BlYWsoJ0hlbGxvIFdvcmxkJylcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ1N1Y2Nlc3MnKSlcbiAqICAgLmNhdGNoKChyZWFzb246IGFueSkgPT4gY29uc29sZS5sb2cocmVhc29uKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogVFRTT3B0aW9uc1xuICogVFRTVm9pY2VcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdUZXh0IFRvIFNwZWVjaCBBZHZhbmNlZCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXR0cy1hZHZhbmNlZCcsXG4gIHBsdWdpblJlZjogJ1RUUycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc3Bhc21hL2NvcmRvdmEtcGx1Z2luLXR0cy1hZHZhbmNlZCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZXh0VG9TcGVlY2hBZHZhbmNlZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc3BlYWtzXG4gICAqIEBwYXJhbSB0ZXh0T3JPcHRpb25zIHtzdHJpbmcgfCBUVFNPcHRpb25zfSBUZXh0IHRvIHNwZWFrIG9yIFRUU09wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHNwZWFraW5nIGZpbmlzaGVzXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHNwZWFrKHRleHRPck9wdGlvbnM6IHN0cmluZyB8IFRUU09wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGFueSBjdXJyZW50IFRUUyBwbGF5YmFja1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3AoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB2b2ljZXNcbiAgICogQHJldHVybiB7UHJvbWlzZTxUVFNWb2ljZVtdPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Vm9pY2VzKCk6IFByb21pc2U8VFRTVm9pY2VbXT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19