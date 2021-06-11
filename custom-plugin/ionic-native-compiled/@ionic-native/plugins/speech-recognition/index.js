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
import { Observable } from 'rxjs';
var SpeechRecognitionOriginal = /** @class */ (function (_super) {
    __extends(SpeechRecognitionOriginal, _super);
    function SpeechRecognitionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpeechRecognitionOriginal.prototype.isRecognitionAvailable = function () { return cordova(this, "isRecognitionAvailable", {}, arguments); };
    SpeechRecognitionOriginal.prototype.startListening = function (options) { return cordova(this, "startListening", { "callbackOrder": "reverse", "observable": true }, arguments); };
    SpeechRecognitionOriginal.prototype.stopListening = function () { return cordova(this, "stopListening", {}, arguments); };
    SpeechRecognitionOriginal.prototype.getSupportedLanguages = function () { return cordova(this, "getSupportedLanguages", {}, arguments); };
    SpeechRecognitionOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    SpeechRecognitionOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    SpeechRecognitionOriginal.pluginName = "SpeechRecognition";
    SpeechRecognitionOriginal.plugin = "cordova-plugin-speechrecognition";
    SpeechRecognitionOriginal.pluginRef = "plugins.speechRecognition";
    SpeechRecognitionOriginal.repo = "https://github.com/pbakondy/cordova-plugin-speechrecognition";
    SpeechRecognitionOriginal.platforms = ["Android", "iOS"];
    return SpeechRecognitionOriginal;
}(IonicNativePlugin));
var SpeechRecognition = new SpeechRecognitionOriginal();
export { SpeechRecognition };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NwZWVjaC1yZWNvZ25pdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTJHSyxxQ0FBaUI7Ozs7SUFNdEQsa0RBQXNCO0lBWXRCLDBDQUFjLGFBQUMsT0FBMkM7SUFRMUQseUNBQWE7SUFTYixpREFBcUI7SUFTckIseUNBQWE7SUFTYiw2Q0FBaUI7Ozs7Ozs0QkFsS25CO0VBNkd1QyxpQkFBaUI7U0FBM0MsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCB0eXBlIFNwZWVjaFJlY29nbml0aW9uTGlzdGVuaW5nT3B0aW9ucyA9XG4gIHwgU3BlZWNoUmVjb2duaXRpb25MaXN0ZW5pbmdPcHRpb25zSU9TXG4gIHwgU3BlZWNoUmVjb2duaXRpb25MaXN0ZW5pbmdPcHRpb25zQW5kcm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBTcGVlY2hSZWNvZ25pdGlvbkxpc3RlbmluZ09wdGlvbnNJT1Mge1xuICAvKipcbiAgICogdXNlZCBsYW5ndWFnZSBmb3IgcmVjb2duaXRpb24gKGRlZmF1bHQgYFwiZW4tVVNcImApXG4gICAqL1xuICBsYW5ndWFnZT86IHN0cmluZztcblxuICAvKipcbiAgICogdW1iZXIgb2YgcmV0dXJuIG1hdGNoZXMgKGRlZmF1bHQgYDVgKVxuICAgKi9cbiAgbWF0Y2hlcz86IG51bWJlcjtcblxuICAvKipcbiAgICogQWxsb3cgcGFydGlhbCByZXN1bHRzIHRvIGJlIHJldHVybmVkIChkZWZhdWx0IGBmYWxzZWApXG4gICAqL1xuICBzaG93UGFydGlhbD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3BlZWNoUmVjb2duaXRpb25MaXN0ZW5pbmdPcHRpb25zQW5kcm9pZCB7XG4gIC8qKlxuICAgKiB1c2VkIGxhbmd1YWdlIGZvciByZWNvZ25pdGlvbiAoZGVmYXVsdCBgXCJlbi1VU1wiYClcbiAgICovXG4gIGxhbmd1YWdlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBudW1iZXIgb2YgcmV0dXJuIG1hdGNoZXMgKG1heGltdW0gbnVtYmVyIG9mIG1hdGNoZXMpXG4gICAqL1xuICBtYXRjaGVzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBkaXNwbGF5ZWQgcHJvbXB0IG9mIGxpc3RlbmVyIHBvcHVwIHdpbmRvd1xuICAgKi9cbiAgcHJvbXB0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBkaXNwbGF5IGxpc3RlbmVyIHBvcHVwIHdpbmRvdyB3aXRoIHByb21wdCAoZGVmYXVsdCBgdHJ1ZWApXG4gICAqL1xuICBzaG93UG9wdXA/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBbGxvdyBwYXJ0aWFsIHJlc3VsdHMgdG8gYmUgcmV0dXJuZWQgKGRlZmF1bHQgYGZhbHNlYClcbiAgICovXG4gIHNob3dQYXJ0aWFsPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBTcGVlY2ggUmVjb2duaXRpb25cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzcGVlY2ggcmVjb2duaXRpb24gdXNpbmcgY2xvdWQgc2VydmljZXNcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNwZWVjaFJlY29nbml0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zcGVlY2gtcmVjb2duaXRpb24vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNwZWVjaFJlY29nbml0aW9uOiBTcGVlY2hSZWNvZ25pdGlvbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqXG4gKiAvLyBDaGVjayBmZWF0dXJlIGF2YWlsYWJsZVxuICogdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5pc1JlY29nbml0aW9uQXZhaWxhYmxlKClcbiAqICAgLnRoZW4oKGF2YWlsYWJsZTogYm9vbGVhbikgPT4gY29uc29sZS5sb2coYXZhaWxhYmxlKSlcbiAqXG4gKiAvLyBTdGFydCB0aGUgcmVjb2duaXRpb24gcHJvY2Vzc1xuICogdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5zdGFydExpc3RlbmluZyhvcHRpb25zKVxuICogICAuc3Vic2NyaWJlKFxuICogICAgIChtYXRjaGVzOiBzdHJpbmdbXSkgPT4gY29uc29sZS5sb2cobWF0Y2hlcyksXG4gKiAgICAgKG9uZXJyb3IpID0+IGNvbnNvbGUubG9nKCdlcnJvcjonLCBvbmVycm9yKVxuICogICApXG4gKlxuICogLy8gU3RvcCB0aGUgcmVjb2duaXRpb24gcHJvY2VzcyAoaU9TIG9ubHkpXG4gKiB0aGlzLnNwZWVjaFJlY29nbml0aW9uLnN0b3BMaXN0ZW5pbmcoKVxuICpcbiAqIC8vIEdldCB0aGUgbGlzdCBvZiBzdXBwb3J0ZWQgbGFuZ3VhZ2VzXG4gKiB0aGlzLnNwZWVjaFJlY29nbml0aW9uLmdldFN1cHBvcnRlZExhbmd1YWdlcygpXG4gKiAgIC50aGVuKFxuICogICAgIChsYW5ndWFnZXM6IHN0cmluZ1tdKSA9PiBjb25zb2xlLmxvZyhsYW5ndWFnZXMpLFxuICogICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gKiAgIClcbiAqXG4gKiAvLyBDaGVjayBwZXJtaXNzaW9uXG4gKiB0aGlzLnNwZWVjaFJlY29nbml0aW9uLmhhc1Blcm1pc3Npb24oKVxuICogICAudGhlbigoaGFzUGVybWlzc2lvbjogYm9vbGVhbikgPT4gY29uc29sZS5sb2coaGFzUGVybWlzc2lvbikpXG4gKlxuICogLy8gUmVxdWVzdCBwZXJtaXNzaW9uc1xuICogdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpXG4gKiAgIC50aGVuKFxuICogICAgICgpID0+IGNvbnNvbGUubG9nKCdHcmFudGVkJyksXG4gKiAgICAgKCkgPT4gY29uc29sZS5sb2coJ0RlbmllZCcpXG4gKiAgIClcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTcGVlY2hSZWNvZ25pdGlvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNwZWVjaHJlY29nbml0aW9uJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5zcGVlY2hSZWNvZ25pdGlvbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcGJha29uZHkvY29yZG92YS1wbHVnaW4tc3BlZWNocmVjb2duaXRpb24nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3BlZWNoUmVjb2duaXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDaGVjayBmZWF0dXJlIGF2YWlsYWJsZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc1JlY29nbml0aW9uQXZhaWxhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgcmVjb2duaXRpb24gcHJvY2Vzc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPCBzdHJpbmdbXSA+fSBsaXN0IG9mIHJlY29nbml6ZWQgdGVybXNcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgfSlcbiAgc3RhcnRMaXN0ZW5pbmcob3B0aW9ucz86IFNwZWVjaFJlY29nbml0aW9uTGlzdGVuaW5nT3B0aW9ucyk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcCB0aGUgcmVjb2duaXRpb24gcHJvY2Vzc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wTGlzdGVuaW5nKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxpc3Qgb2Ygc3VwcG9ydGVkIGxhbmd1YWdlc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPCBzdHJpbmdbXSA+fSBsaXN0IG9mIGxhbmd1YWdlc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRTdXBwb3J0ZWRMYW5ndWFnZXMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBwZXJtaXNzaW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IGhhcyBwZXJtaXNzaW9uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgcGVybWlzc2lvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFBlcm1pc3Npb24oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=