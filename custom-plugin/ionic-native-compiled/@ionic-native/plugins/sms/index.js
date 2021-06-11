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
var SMSOriginal = /** @class */ (function (_super) {
    __extends(SMSOriginal, _super);
    function SMSOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMSOriginal.prototype.send = function (phoneNumber, message, options) { return cordova(this, "send", { "successIndex": 3, "errorIndex": 4 }, arguments); };
    SMSOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", { "platforms": ["Android"] }, arguments); };
    SMSOriginal.pluginName = "SMS";
    SMSOriginal.plugin = "cordova-sms-plugin";
    SMSOriginal.pluginRef = "sms";
    SMSOriginal.repo = "https://github.com/cordova-sms/cordova-sms-plugin";
    SMSOriginal.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    return SMSOriginal;
}(IonicNativePlugin));
var SMS = new SMSOriginal();
export { SMS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Ntcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFvRC9DLHVCQUFpQjs7OztJQVl4QyxrQkFBSSxhQUFDLFdBQThCLEVBQUUsT0FBZSxFQUFFLE9BQW9CO0lBVzFFLDJCQUFhOzs7Ozs7Y0E1RWY7RUFxRHlCLGlCQUFpQjtTQUE3QixHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogT3B0aW9ucyBmb3Igc2VuZGluZyBhbiBTTVNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTbXNPcHRpb25zIHtcbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIHJlcGxhY2UgXFxuIGJ5IGEgbmV3IGxpbmUuIERlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICByZXBsYWNlTGluZUJyZWFrcz86IGJvb2xlYW47XG5cbiAgYW5kcm9pZD86IFNtc09wdGlvbnNBbmRyb2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNtc09wdGlvbnNBbmRyb2lkIHtcbiAgLyoqXG4gICAqIFNldCB0byBcIklOVEVOVFwiIHRvIHNlbmQgU01TIHdpdGggdGhlIG5hdGl2ZSBhbmRyb2lkIFNNUyBtZXNzYWdpbmcuIExlYXZpbmcgaXQgZW1wdHkgd2lsbCBzZW5kIHRoZSBTTVMgd2l0aG91dCBvcGVuaW5nIGFueSBhcHAuXG4gICAqL1xuICBpbnRlbnQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgU01TXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1zbXMtcGx1Z2luLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbU01TIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vY29yZG92YS1zbXMvY29yZG92YS1zbXMtcGx1Z2luKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNNUyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc21zL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzbXM6IFNNUykgeyB9XG4gKlxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiAvLyBTZW5kIGEgdGV4dCBtZXNzYWdlIHVzaW5nIGRlZmF1bHQgb3B0aW9uc1xuICogdGhpcy5zbXMuc2VuZCgnNDE2MTIzNDU2JywgJ0hlbGxvIHdvcmxkIScpO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogU21zT3B0aW9uc1xuICogU21zT3B0aW9uc0FuZHJvaWRcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTTVMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXNtcy1wbHVnaW4nLFxuICBwbHVnaW5SZWY6ICdzbXMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NvcmRvdmEtc21zL2NvcmRvdmEtc21zLXBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUgOCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTTVMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTZW5kcyBzbXMgdG8gYSBudW1iZXJcbiAgICogQHBhcmFtIHBob25lTnVtYmVyIHtzdHJpbmd8c3RyaW5nW119IFBob25lIG51bWJlclxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSBNZXNzYWdlXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTbXNPcHRpb25zfSBPcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIHByb21pc2Ugd2hlbiB0aGUgU01TIGhhcyBiZWVuIHNlbnRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDMsXG4gICAgZXJyb3JJbmRleDogNCxcbiAgfSlcbiAgc2VuZChwaG9uZU51bWJlcjogc3RyaW5nIHwgc3RyaW5nW10sIG1lc3NhZ2U6IHN0cmluZywgb3B0aW9ucz86IFNtc09wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGxldHMgeW91IGtub3cgaWYgdGhlIGFwcCBoYXMgcGVybWlzc2lvbiB0byBzZW5kIFNNU1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHdlIGhhdmUgcGVybWlzc2lvblxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gIH0pXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=