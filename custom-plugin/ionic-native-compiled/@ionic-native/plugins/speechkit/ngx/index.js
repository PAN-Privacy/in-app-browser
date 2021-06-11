import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var SpeechKit = /** @class */ (function (_super) {
    __extends(SpeechKit, _super);
    function SpeechKit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpeechKit.prototype.tts = function (text, language, voice) { return cordova(this, "tts", {}, arguments); };
    SpeechKit.prototype.asr = function (language) { return cordova(this, "asr", { "platforms": ["Android"] }, arguments); };
    SpeechKit.pluginName = "SpeechKit";
    SpeechKit.plugin = "cordova-plugin-nuance-speechkit";
    SpeechKit.pluginRef = "plugins.speechkit";
    SpeechKit.repo = "https://github.com/Shmarkus/cordova-plugin-nuance-speechkit";
    SpeechKit.platforms = ["Android", "iOS"];
    SpeechKit.decorators = [
        { type: Injectable }
    ];
    return SpeechKit;
}(IonicNativePlugin));
export { SpeechKit };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NwZWVjaGtpdC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE2QnpDLDZCQUFpQjs7OztJQU05Qyx1QkFBRyxhQUFDLElBQVksRUFBRSxRQUFnQixFQUFFLEtBQWE7SUFXakQsdUJBQUcsYUFBQyxRQUFnQjs7Ozs7OztnQkFsQnJCLFVBQVU7O29CQTdCWDtFQThCK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBTcGVlY2hLaXRcbiAqIEBkZXNjcmlwdGlvblxuICogSW1wbGVtZW50YXRpb24gb2YgTnVhbmNlIFNwZWVjaEtpdCBTREsgb24gSW9uaWNcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNwZWVjaEtpdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3BlZWNoa2l0L25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzcGVlY2hraXQ6IFNwZWVjaEtpdCkgeyB9XG4gKlxuICpcbiAqIC8vIGZpbmQgdm9pY2UgbmFtZXMgdGhhdCBtYXRjaCBsYW5ndWFnZSBmcm9tOiBodHRwczovL2RldmVsb3Blci5udWFuY2UuY29tL3B1YmxpYy9pbmRleC5waHA/dGFzaz1zdXBwb3J0ZWRMYW5ndWFnZXNcbiAqIHRoaXMuc3BlZWNoa2l0LnR0cygnVGV4dCB0byBiZSByZWFkIG91dCBsb3VkJywgJ0VORy1HQlInLCAnU2VyZW5hJykudGhlbihcbiAqICAgKG1zZykgPT4geyBjb25zb2xlLmxvZyhtc2cpOyB9LFxuICogICAoZXJyKSA9PiB7IGNvbnNvbGUubG9nKGVycik7IH1cbiAqICk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTcGVlY2hLaXQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1udWFuY2Utc3BlZWNoa2l0JyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5zcGVlY2hraXQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1NobWFya3VzL2NvcmRvdmEtcGx1Z2luLW51YW5jZS1zcGVlY2hraXQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3BlZWNoS2l0IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU3BlYWsgdGV4dCBvdXQgbG91ZCBpbiBnaXZlbiBsYW5ndWFnZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0dHModGV4dDogc3RyaW5nLCBsYW5ndWFnZTogc3RyaW5nLCB2b2ljZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJ5IHRvIHJlY29nbml6ZSB3aGF0IHRoZSB1c2VyIHNhaWRcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICB9KVxuICBhc3IobGFuZ3VhZ2U6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=