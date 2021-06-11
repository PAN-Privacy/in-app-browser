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
var SpeechKitOriginal = /** @class */ (function (_super) {
    __extends(SpeechKitOriginal, _super);
    function SpeechKitOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpeechKitOriginal.prototype.tts = function (text, language, voice) { return cordova(this, "tts", {}, arguments); };
    SpeechKitOriginal.prototype.asr = function (language) { return cordova(this, "asr", { "platforms": ["Android"] }, arguments); };
    SpeechKitOriginal.pluginName = "SpeechKit";
    SpeechKitOriginal.plugin = "cordova-plugin-nuance-speechkit";
    SpeechKitOriginal.pluginRef = "plugins.speechkit";
    SpeechKitOriginal.repo = "https://github.com/Shmarkus/cordova-plugin-nuance-speechkit";
    SpeechKitOriginal.platforms = ["Android", "iOS"];
    return SpeechKitOriginal;
}(IonicNativePlugin));
var SpeechKit = new SpeechKitOriginal();
export { SpeechKit };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NwZWVjaGtpdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE2QnpDLDZCQUFpQjs7OztJQU05Qyx1QkFBRyxhQUFDLElBQVksRUFBRSxRQUFnQixFQUFFLEtBQWE7SUFXakQsdUJBQUcsYUFBQyxRQUFnQjs7Ozs7O29CQS9DdEI7RUE4QitCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU3BlZWNoS2l0XG4gKiBAZGVzY3JpcHRpb25cbiAqIEltcGxlbWVudGF0aW9uIG9mIE51YW5jZSBTcGVlY2hLaXQgU0RLIG9uIElvbmljXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTcGVlY2hLaXQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NwZWVjaGtpdC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3BlZWNoa2l0OiBTcGVlY2hLaXQpIHsgfVxuICpcbiAqXG4gKiAvLyBmaW5kIHZvaWNlIG5hbWVzIHRoYXQgbWF0Y2ggbGFuZ3VhZ2UgZnJvbTogaHR0cHM6Ly9kZXZlbG9wZXIubnVhbmNlLmNvbS9wdWJsaWMvaW5kZXgucGhwP3Rhc2s9c3VwcG9ydGVkTGFuZ3VhZ2VzXG4gKiB0aGlzLnNwZWVjaGtpdC50dHMoJ1RleHQgdG8gYmUgcmVhZCBvdXQgbG91ZCcsICdFTkctR0JSJywgJ1NlcmVuYScpLnRoZW4oXG4gKiAgIChtc2cpID0+IHsgY29uc29sZS5sb2cobXNnKTsgfSxcbiAqICAgKGVycikgPT4geyBjb25zb2xlLmxvZyhlcnIpOyB9XG4gKiApO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU3BlZWNoS2l0JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbnVhbmNlLXNwZWVjaGtpdCcsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuc3BlZWNoa2l0JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9TaG1hcmt1cy9jb3Jkb3ZhLXBsdWdpbi1udWFuY2Utc3BlZWNoa2l0JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNwZWVjaEtpdCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNwZWFrIHRleHQgb3V0IGxvdWQgaW4gZ2l2ZW4gbGFuZ3VhZ2VcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdHRzKHRleHQ6IHN0cmluZywgbGFuZ3VhZ2U6IHN0cmluZywgdm9pY2U6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyeSB0byByZWNvZ25pemUgd2hhdCB0aGUgdXNlciBzYWlkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgfSlcbiAgYXNyKGxhbmd1YWdlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19