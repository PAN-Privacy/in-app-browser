import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var SumUpKeys = /** @class */ (function () {
    function SumUpKeys() {
        this.accessToken = '';
        this.affiliateKey = '';
    }
    return SumUpKeys;
}());
export { SumUpKeys };
var SumUp = /** @class */ (function (_super) {
    __extends(SumUp, _super);
    function SumUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SumUp.prototype.login = function (sumUpKeys) { return cordova(this, "login", {}, arguments); };
    SumUp.prototype.auth = function (accessToken) { return cordova(this, "auth", {}, arguments); };
    SumUp.prototype.getSettings = function () { return cordova(this, "getSettings", {}, arguments); };
    SumUp.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    SumUp.prototype.isLoggedIn = function () { return cordova(this, "isLoggedIn", {}, arguments); };
    SumUp.prototype.prepare = function () { return cordova(this, "prepare", {}, arguments); };
    SumUp.prototype.closeConnection = function () { return cordova(this, "closeConnection", {}, arguments); };
    SumUp.prototype.pay = function (amount, currencycode) { return cordova(this, "pay", {}, arguments); };
    SumUp.pluginName = "SumUp";
    SumUp.plugin = "cordova-sumup-plugin";
    SumUp.pluginRef = "window.SumUp";
    SumUp.repo = "https://github.com/mariusbackes/cordova-plugin-sumup";
    SumUp.install = "cordova plugin add cordova-sumup-plugin --variable SUMUP_API_KEY=INSERT_YOUR_KEY";
    SumUp.installVariables = ["SUMUP_API_KEY"];
    SumUp.platforms = ["Android", "iOS"];
    SumUp.decorators = [
        { type: Injectable }
    ];
    return SumUp;
}(IonicNativePlugin));
export { SumUp };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N1bS11cC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErRHRFO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQztvQkFuRUg7Ozs7SUFrSTJCLHlCQUFpQjs7OztJQVMxQyxxQkFBSyxhQUFDLFNBQW9CO0lBVTFCLG9CQUFJLGFBQUMsV0FBbUI7SUFTeEIsMkJBQVc7SUFTWCxzQkFBTTtJQVNOLDBCQUFVO0lBVVYsdUJBQU87SUFTUCwrQkFBZTtJQVlmLG1CQUFHLGFBQUMsTUFBYyxFQUFFLFlBQW9COzs7Ozs7Ozs7Z0JBOUV6QyxVQUFVOztnQkFqSVg7RUFrSTJCLGlCQUFpQjtTQUEvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3VtVXBSZXNwb25zZSB7XG4gIC8vIENvZGUgdG8gaWRlbnRpZnkgdGhlIG1lc3NhZ2VcbiAgY29kZTogbnVtYmVyO1xuXG4gIC8vIE1lc3NhZ2UgZm9yIHJlYWRhYmxlIHVzYWdlXG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdW1VcExvZ2luU3RhdHVzIHtcbiAgLy8gQ29kZSwgdG8gY2hlY2sgaWYgYW4gZXJyb3Igb2NjdXJlZFxuICBjb2RlOiBudW1iZXI7XG5cbiAgLy8gQm9vbGVhbmQgdmFsdWUgd2hldGhlciB0aGUgdXNlciBpcyBsb2dnZWQgaW4gb3Igbm90XG4gIGlzTG9nZ2VkSW46IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3VtVXBQYXltZW50IHtcbiAgLy8gVW5pcXVlIHRyYW5zYWN0aW9uIGNvZGVcbiAgdHJhbnNhY3Rpb25fY29kZTogc3RyaW5nO1xuXG4gIC8vIENhcmQgdHlwZSAtPiBsaWtlIE1BRVNUUk9cbiAgY2FyZF90eXBlOiBzdHJpbmc7XG5cbiAgLy8gTWVyY2hhbnQgY29kZSBmb3IgaWRlbnRpZmljYXRpb25cbiAgbWVyY2hhbnRfY29kZTogc3RyaW5nO1xuXG4gIC8vIEFtb3VudCBvZiB0aGUgcGF5bWVudFxuICBhbW91bnQ6IG51bWJlcjtcblxuICAvLyBUaXAgYW1vdW50IC0+IGRlZmF1bHQgMFxuICB0aXBfYW1vdW50OiBudW1iZXI7XG5cbiAgLy8gVmF0IGFtb3VudCAtPiBkZWZhdWx0IDBcbiAgdmF0X2Ftb3VudDogbnVtYmVyO1xuXG4gIC8vIEN1cnJlbmN5IGNvZGUgLT4gbGlrZSBFVVJcbiAgY3VycmVuY3k6IHN0cmluZztcblxuICAvLyBQYXltZW50IHN0YXR1cyAtPiBzdWNjZXNzZnVsIG9yIGVycm9yXG4gIHN0YXR1czogc3RyaW5nO1xuXG4gIC8vIFR5cGUgLT4gQ2FyZCBvciBuZmNcbiAgcGF5bWVudF90eXBlOiBzdHJpbmc7XG5cbiAgLy8gRW50cnkgbW9kZSAtPiBMaWtlIGNoaXAgb3IgY29udGFjdGxlc3NcbiAgZW50cnlfbW9kZTogc3RyaW5nO1xuXG4gIC8vIE51bWJlciBvZiBpbnN0YWxsbWVudHMgLT4gZGVmYXVsdCAxXG4gIGluc3RhbGxtZW50czogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFN1bVVwS2V5cyB7XG4gIC8vIFRoZSBnZW5lcmF0ZWQgYWNjZXNzVG9rZW4sIHRvIGF1dG9tYXRlIHRoZSBsb2dpbiBwcm9jZXNzXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG5cbiAgLy8gYWZmaWxpYXRlS2V5IGNhbiBhbHNvIGJlIHNldCBpbiB0aGUgb2JqZWN0LCBpZiBpdCBoYXMgdG8gYmUgY2hhbmdlZCBvbiBydW50aW1lXG4gIGFmZmlsaWF0ZUtleTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYWNjZXNzVG9rZW4gPSAnJztcbiAgICB0aGlzLmFmZmlsaWF0ZUtleSA9ICcnO1xuICB9XG59XG5cbi8qKlxuICogQG5hbWUgU3VtVXBcbiAqIEBkZXNjcmlwdGlvblxuICogUGx1Z2luIHRvIGNvbW11bmljYXRlIHdpdGggYSBTdW1VcCBwYXltZW50IHRlcm1pbmFsXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTdW1VcCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3VtLXVwJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzdW1VcDogU3VtVXApIHsgfVxuICpcbiAqIGNvbnN0IHN1bVVwS2V5czogU3VtVXBLZXlzID0gbmV3IFN1bVVwS2V5cygpO1xuICogc3VtVXBLZXlzLmFmZmlsaWF0ZUtleSA9ICdZT1VSX0FQSV9LRVknOyAvLyBpZiBub3QgcHJvdmlkZWQgaW4gaW5zdGFsbGF0aW9uXG4gKiBzdW1VcEtleXMuYWNjZXNzVG9rZW4gPSAnWU9VUl9BQ0NFU1NfVE9LRU4nO1xuICpcbiAqIHRoaXMuc3VtVXAubG9naW4oc3VtVXBLZXlzKVxuICogICAudGhlbigocmVzOiBTdW1VcFJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBTdW1VcFJlc3BvbnNlKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogIHRoaXMuc3VtVXAuYXV0aCgnWU9VUl9BQ0NFU1NfVE9LRU4nKVxuICogICAudGhlbigocmVzOiBTdW1VcFJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBTdW1VcFJlc3BvbnNlKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogIHRoaXMuc3VtVXAuZ2V0U2V0dGluZ3MoKVxuICogICAudGhlbigocmVzOiBTdW1VcFJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBTdW1VcFJlc3BvbnNlKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogIHRoaXMuc3VtVXAubG9nb3V0KClcbiAqICAgLnRoZW4oKHJlczogU3VtVXBSZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogU3VtVXBSZXNwb25zZSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqICB0aGlzLnN1bVVwLmlzTG9nZ2VkSW4oKVxuICogICAudGhlbigocmVzOiBTdW1VcExvZ2luU3RhdHVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBTdW1VcExvZ2luU3RhdHVzKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogIHRoaXMuc3VtVXAucHJlcGFyZSgpXG4gKiAgIC50aGVuKChyZXM6IFN1bVVwUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IFN1bVVwUmVzcG9uc2UpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiB0aGlzLnN1bVVwLmNsb3NlQ29ubmVjdGlvbigpXG4gKiAgIC50aGVuKChyZXM6IFN1bVVwUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IFN1bVVwUmVzcG9uc2UpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiB0aGlzLnN1bVVwLnBheSgxMC4wLCAnRVVSJylcbiAqICAgLnRoZW4oKHJlczogU3VtVXBQYXltZW50KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBTdW1VcFBheW1lbnQpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTdW1VcCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtc3VtdXAtcGx1Z2luJyxcbiAgcGx1Z2luUmVmOiAnd2luZG93LlN1bVVwJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXJpdXNiYWNrZXMvY29yZG92YS1wbHVnaW4tc3VtdXAnLFxuICBpbnN0YWxsOiAnY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtc3VtdXAtcGx1Z2luIC0tdmFyaWFibGUgU1VNVVBfQVBJX0tFWT1JTlNFUlRfWU9VUl9LRVknLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ1NVTVVQX0FQSV9LRVknXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1bVVwIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogTG9naW4gYSB1c2VyIHdpdGggYW4gb3B0aW9uYWwgYWNjZXNzIHRva2VuLlxuICAgKiBJZiB0aGUgYWNjZXNzIHRva2VuIGlzIHByb3ZpZGVkIGFuZCB2YWxpZCwgdGhlIHVzZXIgaXMgbG9nZ2VkIGluIGF1dG1hdGljYWxseS5cbiAgICogT3RoZXJ3aXNlIHRoZSB1c2VyIGhhcyB0byB0eXBlIGluIHRoZSBjcmVkZW50aWFsc1xuICAgKiBAcGFyYW0gc3VtVXBLZXlzIHtTdW1VcEtleXN9XG4gICAqIEByZXR1cm4ge1Byb21pc2U8U3VtVXBSZXNwb25zZT59IFJldHVybiBhIFN1bVVwUmVzcG9uc2Ugb2JqZWN0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ2luKHN1bVVwS2V5czogU3VtVXBLZXlzKTogUHJvbWlzZTxTdW1VcFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEF1dGhlbnRpY2F0ZXMgdGhlIGFjY291bnQgd2l0aCB0aGUgZ2l2ZW4gYWNjZXNzIHRva2VuLiBQYXJhbWV0ZXIgYWNjZXNzVG9rZW4gaXMgcmVxdWlyZWQuXG4gICAqIEBwYXJhbSBhY2Nlc3NUb2tlbiB7c3RyaW5nfVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFN1bVVwUmVzcG9uc2U+fSBSZXR1cm4gYSBTdW1VcFJlc3BvbnNlIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhdXRoKGFjY2Vzc1Rva2VuOiBzdHJpbmcpOiBQcm9taXNlPFN1bVVwUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYSBuZXcgd2luZG93IHdpdGggdGhlIGFsbCBhY2NvdW50IHNldHRpbmdzIG9mIGFuIGxvZ2dlZCBpbiB1c2VyLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFN1bVVwUmVzcG9uc2U+fSBSZXR1cm4gYSBTdW1VcFJlc3BvbnNlIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRTZXR0aW5ncygpOiBQcm9taXNlPFN1bVVwUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9nb3V0IGEgdXNlciBmcm9tIHRoZSBhY2NvdW50LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFN1bVVwUmVzcG9uc2U+fSBSZXR1cm4gYSBTdW1VcFJlc3BvbnNlIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dvdXQoKTogUHJvbWlzZTxTdW1VcFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbiBvciBub3QgYW5kIHJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIGZpZWxkIGlzTG9nZ2VkSW4gd2hpY2ggaXMgYSBib29sZWFuIHZhbHVlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFN1bVVwUmVzcG9uc2U+fSBSZXR1cm4gYSBTdW1VcFJlc3BvbnNlIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0xvZ2dlZEluKCk6IFByb21pc2U8U3VtVXBMb2dpblN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlcyB0aGUgdGVybWluYWwgZm9yIGEgcGF5bWVudC4gQ2hlY2tzIHdoZXRoZXIgdGhlIENhcmRSZWFkZXIgaXMgcmVhZHkgdG8gdHJhbnNtaXQgYW5kXG4gICAqIGlmIGFuIGluc3RhbmNlIG9mIHRoZSBDYXJkUmVhZGVyTWFuYWdlciBpcyBhdmFpbGFibGUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8U3VtVXBSZXNwb25zZT59IFJldHVybiBhIFN1bVVwUmVzcG9uc2Ugb2JqZWN0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByZXBhcmUoKTogUHJvbWlzZTxTdW1VcFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIGNsb3NlIHRoZSBjb25uZWN0aW9uIHRvIHRoZSBjYXJkIHRlcm1pbmFsLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFN1bVVwUmVzcG9uc2U+fSBSZXR1cm4gYSBTdW1VcFJlc3BvbnNlIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbG9zZUNvbm5lY3Rpb24oKTogUHJvbWlzZTxTdW1VcFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGEgbmF0aXZlIFN1bVVwIHdpbmRvdyB0byBwcm9jZWVkIGEgcGF5bWVudC4gUGFyYW1ldGVyIGFtb3VudCBhbmQgY3VycmVuY3ljb2RlIGFyZSByZXF1aXJlZC5cbiAgICogSWYgdGhlIFBheW1lbnQgd2FzIHN1Y2Nlc3NmdWwgaXQgcmV0dXJucyBhbiBTdW1VcFBheW1lbnQgb2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgdGhlIHBheW1lbnQuXG4gICAqIEBwYXJhbSBhbW91bnQge251bWJlcn1cbiAgICogQHBhcmFtIGN1cnJlbmN5Y29kZSB7c3RyaW5nfVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFN1bVVwUmVzcG9uc2U+fSBSZXR1cm4gYSBTdW1VcFJlc3BvbnNlIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwYXkoYW1vdW50OiBudW1iZXIsIGN1cnJlbmN5Y29kZTogc3RyaW5nKTogUHJvbWlzZTxTdW1VcFBheW1lbnQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==