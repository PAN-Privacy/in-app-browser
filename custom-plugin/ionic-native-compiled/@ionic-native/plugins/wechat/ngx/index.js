import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Wechat = /** @class */ (function (_super) {
    __extends(Wechat, _super);
    function Wechat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wechat.prototype.isInstalled = function () { return cordova(this, "isInstalled", {}, arguments); };
    Wechat.prototype.share = function (params) { return cordova(this, "share", {}, arguments); };
    Wechat.prototype.auth = function (scope, state) { return cordova(this, "auth", {}, arguments); };
    Wechat.prototype.sendPaymentRequest = function (params) { return cordova(this, "sendPaymentRequest", {}, arguments); };
    Wechat.prototype.jumpToWechat = function (url) { return cordova(this, "jumpToWechat", {}, arguments); };
    Wechat.prototype.chooseInvoiceFromWX = function (params) { return cordova(this, "chooseInvoiceFromWX", {}, arguments); };
    Wechat.prototype.openMiniProgram = function (params) { return cordova(this, "openMiniProgram", {}, arguments); };
    Wechat.pluginName = "Wechat";
    Wechat.plugin = "cordova-plugin-wechat";
    Wechat.pluginRef = "Wechat";
    Wechat.repo = "https://github.com/xu-li/cordova-plugin-wechat.git";
    Wechat.install = "cordova plugin add cordova-plugin-wechat --variable wechatappid=YOUR_WECHAT_APPID";
    Wechat.installVariables = ["wechatappid"];
    Wechat.platforms = ["Android", "iOS"];
    Wechat.decorators = [
        { type: Injectable }
    ];
    return Wechat;
}(IonicNativePlugin));
export { Wechat };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3dlY2hhdC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpQzVDLDBCQUFpQjs7OztJQXdCM0MsNEJBQVc7SUE4Qlgsc0JBQUssYUFBQyxNQUFXO0lBYWpCLHFCQUFJLGFBQUMsS0FBVSxFQUFFLEtBQVU7SUF5QjNCLG1DQUFrQixhQUFDLE1BQVc7SUE0QjlCLDZCQUFZLGFBQUMsR0FBVztJQWtCeEIsb0NBQW1CLGFBQUMsTUFBVztJQWtCL0IsZ0NBQWUsYUFBQyxNQUFXOzs7Ozs7Ozs7Z0JBN0o1QixVQUFVOztpQkFqQ1g7RUFrQzRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgV2VjaGF0XG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgY29yZG92YSBwbHVnaW4sIGEgSlMgdmVyc2lvbiBvZiBXZWNoYXQgU0RLXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBXZWNoYXQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3dlY2hhdC9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHdlY2hhdDogV2VjaGF0KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy53ZWNoYXQuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXZWNoYXQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWNoYXQnLFxuICBwbHVnaW5SZWY6ICdXZWNoYXQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3h1LWxpL2NvcmRvdmEtcGx1Z2luLXdlY2hhdC5naXQnLFxuICBpbnN0YWxsOiAnY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXdlY2hhdCAtLXZhcmlhYmxlIHdlY2hhdGFwcGlkPVlPVVJfV0VDSEFUX0FQUElEJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWyd3ZWNoYXRhcHBpZCddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2VjaGF0IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBTY2VuZToge1xuICAgIFNFU1NJT046IDA7IC8vIOiBiuWkqeeVjOmdolxuICAgIFRJTUVMSU5FOiAxOyAvLyDmnIvlj4vlnIhcbiAgICBGQVZPUklURTogMjsgLy8g5pS26JePXG4gIH07XG5cbiAgVHlwZToge1xuICAgIEFQUDogMTtcbiAgICBFTU9USU9OOiAyO1xuICAgIEZJTEU6IDM7XG4gICAgSU1BR0U6IDQ7XG4gICAgTVVTSUM6IDU7XG4gICAgVklERU86IDY7XG4gICAgV0VCUEFHRTogNztcbiAgfTtcblxuICBNaW5pOiB7XG4gICAgUkVMRUFTRTogMDsgLy8g5q2j5byP54mIXG4gICAgVEVTVDogMTsgLy8g5rWL6K+V54mIXG4gICAgUFJFVklFVzogMjsgLy8g5L2T6aqM54mIXG4gIH07XG5cbiAgQENvcmRvdmEoKVxuICBpc0luc3RhbGxlZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZSBhIG1lc3NhZ2UgdG8gd2VjaGF0IGFwcFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiA8Y29kZT5cbiAgICogdGhpcy53ZWNoYXQuc2hhcmUoe1xuICAgKiAgICAgbWVzc2FnZToge1xuICAgKiAgICAgICAgdGl0bGU6IFwiTWVzc2FnZSBUaXRsZVwiLFxuICAgKiAgICAgICAgZGVzY3JpcHRpb246IFwiTWVzc2FnZSBEZXNjcmlwdGlvbihvcHRpb25hbClcIixcbiAgICogICAgICAgIG1lZGlhVGFnTmFtZTogXCJNZWRpYSBUYWcgTmFtZShvcHRpb25hbClcIixcbiAgICogICAgICAgIHRodW1iOiBcImh0dHA6Ly9ZT1VSX1RIVU1CTkFJTF9JTUFHRVwiLFxuICAgKiAgICAgICAgbWVkaWE6IHtcbiAgICogICAgICAgICAgICB0eXBlOiBXZWNoYXQuVHlwZS5XRUJQQUdFLCAgIC8vIHdlYnBhZ2VcbiAgICogICAgICAgICAgICB3ZWJwYWdlVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS94dS1saS9jb3Jkb3ZhLXBsdWdpbi13ZWNoYXRcIiAgICAvLyB3ZWJwYWdlXG4gICAqICAgICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHNjZW5lOiB0aGlzLndlY2hhdC5TY2VuZS5USU1FTElORSAgIC8vIHNoYXJlIHRvIFRpbWVsaW5lXG4gICAqIH0udGhlbigoKSA9PiB7XG4gICAqICAgICAgIGNvbnNvbGUubG9nKCdzaGFyZSBzdWNjZXNzJyk7XG4gICAqICAgIH0pXG4gICAqICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAqICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICogICAgfSk7XG4gICAqIDwvY29kZT5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hhcmUocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kaW5nIGFuIGF1dGggcmVxdWVzdCB0byBXZWNoYXRcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogPGNvZGU+XG4gICAqIHRoaXMud2VjaGF0LmF1dGgudGhlbigocmVzKSA9PiB7IGFsZXJ0KHJlcy5jb2RlKTsgfSk7XG4gICAqIDwvY29kZT5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYXV0aChzY29wZTogYW55LCBzdGF0ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIHBheW1lbnQgcmVxdWVzdFxuICAgKlxuICAgKiBAbGluayBodHRwczovL3BheS53ZWl4aW4ucXEuY29tL3dpa2kvZG9jL2FwaS9hcHAucGhwP2NoYXB0ZXI9OV8xXG4gICAqIEBleGFtcGxlXG4gICAqIDxjb2RlPlxuICAgKiB2YXIgcGFyYW1zID0ge1xuICAgKiAgICAgbWNoX2lkOiAnMTAwMDAxMDAnLCAvLyBtZXJjaGFudCBpZFxuICAgKiAgICAgcHJlcGF5X2lkOiAnd3gyMDE0MTExMDE2Mzk1MDdjYmY2ZmZkOGIwNzc5OTUwODc0JywgLy8gcHJlcGF5IGlkIHJldHVybmVkIGZyb20gc2VydmVyXG4gICAqICAgICBub25jZTogJzFhZGQxYTMwYWM4N2FhMmRiNzJmNTdhMjM3NWQ4ZmVjJywgLy8gbm9uY2Ugc3RyaW5nIHJldHVybmVkIGZyb20gc2VydmVyXG4gICAqICAgICB0aW1lc3RhbXA6ICcxNDM5NTMxMzY0JywgLy8gdGltZXN0YW1wXG4gICAqICAgICBzaWduOiAnMENCMDE1MzNCOEMxRUYxMDMwNjUxNzRGNTBCQ0EwMDEnLCAvLyBzaWduZWQgc3RyaW5nXG4gICAqIH07XG4gICAqIHRoaXMud2VjaGF0LnNlbmRQYXltZW50UmVxdWVzdChwYXJhbXMpLnRoZW4oKCkgPT4ge1xuICAgKiAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzXCIpO1xuICAgKiB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAqICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAqIH0pO1xuICAgKiA8L2NvZGU+XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlbmRQYXltZW50UmVxdWVzdChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIGp1bXBUb0JpelByb2ZpbGUg77yI6Lez6L2s5Yiw5p+Q5Liq5b6u5L+h5YWs5LyX5Y+377yJMjAxNi0xMS0xMSDmtYvor5XmmK/lpLHmlYjnmoTvvIzlm6dcbiAgICpcbiAgICogQGxpbmsgaHR0cHM6Ly9zZWdtZW50ZmF1bHQuY29tL2EvMTE5MDAwMDAwNzIwNDYyNFxuICAgKiBAbGluayBodHRwczovL3NlZ21lbnRmYXVsdC5jb20vcS8xMDEwMDAwMDAzOTA3Nzk2XG4gICAqIEBleGFtcGxlXG4gICAqIDxjb2RlPlxuICAgKiB2YXIgcGFyYW1zID0ge1xuICAgKiAgICAgaW5mbzogJ2doX3h4eHh4eHgnLCAvLyDlhazkvJfluJDlj7fljp/lp4tJRFxuICAgKiAgICAgdHlwZTogICdOb3JtYWwnIC8vIOaZrumAmuWPt1xuICAgKiB9XG4gICAqIG9yXG4gICAqIHZhciBwYXJhbXMgPSB7XG4gICAqICAgICBpbmZvOiAnZXh0TXNnJywgLy8g55u45YWz55qE56Gs5Lu25LqM57u056CB5LiyXG4gICAqICAgICB0eXBlOiAgJ0RldmljZScgLy8g56Gs5Lu25Y+3XG4gICAqIH07XG4gICAqIHRoaXMud2VjaGF0Lmp1bXBUb0JpelByb2ZpbGUocGFyYW1zKS50aGVuKCgpPT4ge1xuICAgKiAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzXCIpO1xuICAgKiB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAqICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAqIH0pO1xuICAgKiA8L2NvZGU+XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGp1bXBUb1dlY2hhdCh1cmw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIGNob29zZUludm9pY2VGcm9tV1ggZXhxOmNob29zZSBpbnZvaWNlcyBmcm9tIFdlY2hhdCBjYXJkIGxpc3RcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogPGNvZGU+XG4gICAqIHBhcmFtczogc2lnblR5cGUsIGNhcmRTaWduLCBub25jZVN0ciwgdGltZVN0YW1wICBhbGwgcmVxdWlyZWRcbiAgICogdGhpcy53ZWNoYXQuY2hvb3NlSW52b2ljZUZyb21XWChwYXJhbXMpLnRoZW4oKCkgPT4ge1xuICAgKiAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzXCIpO1xuICAgKiB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAqICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAqIH0pO1xuICAgKiA8L2NvZGU+XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNob29zZUludm9pY2VGcm9tV1gocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBvcGVuTWluaVByb2dyYW0gZXhxOmFwcCBvcGVucyB3ZWNoYXQgbWluaSBwcm9ncmFtXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIDxjb2RlPlxuICAgKiBwYXJhbXM6IHVzZXJOYW1lLCBwYXRoLCBtaW5pcHJvZ3JhbVR5cGUgIGFsbCByZXF1aXJlZFxuICAgKiBXZWNoYXQub3Blbk1pbmlQcm9ncmFtKHBhcmFtcywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICogICAgIGFsZXJ0KGRhdGEuZXh0TXNnKTtcbiAgICogfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgKiAgICAgYWxlcnQoXCJGYWlsZWQ6IFwiICsgcmVhc29uKTtcbiAgICogfSk7XG4gICAqIDwvY29kZT5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb3Blbk1pbmlQcm9ncmFtKHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==