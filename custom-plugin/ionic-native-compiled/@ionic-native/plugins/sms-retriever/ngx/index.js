import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var SmsRetriever = /** @class */ (function (_super) {
    __extends(SmsRetriever, _super);
    function SmsRetriever() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmsRetriever.prototype.startWatching = function () { return cordova(this, "startWatching", {}, arguments); };
    SmsRetriever.prototype.getAppHash = function () { return cordova(this, "getAppHash", {}, arguments); };
    SmsRetriever.pluginName = "SmsRetriever";
    SmsRetriever.plugin = "cordova-plugin-sms-retriever-manager";
    SmsRetriever.pluginRef = "cordova.plugins.smsRetriever";
    SmsRetriever.repo = "https://github.com/hanatharesh2712/ionic-native-sms-retriever-plugin-master";
    SmsRetriever.install = "ionic cordova plugin add cordova-plugin-sms-retriever-manager --variable PLAY_SERVICES_VERSION=\"15.0.1\"";
    SmsRetriever.installVariables = ["PLAY_SERVICES_VERSION"];
    SmsRetriever.platforms = ["Android"];
    SmsRetriever.decorators = [
        { type: Injectable }
    ];
    return SmsRetriever;
}(IonicNativePlugin));
export { SmsRetriever };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Ntcy1yZXRyaWV2ZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBb0N0QyxnQ0FBaUI7Ozs7SUFNakQsb0NBQWE7SUFTYixpQ0FBVTs7Ozs7Ozs7O2dCQWhCWCxVQUFVOzt1QkFwQ1g7RUFxQ2tDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU21zIFJldHJpZXZlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiByZXRyaXZlcyB0aGUgU01TIHdoaWNoIGFycml2ZSB3aXRob3V0IHJlcXVpcmluZyBSRUFEIHBlcm1pc3Npb25zLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU21zUmV0cmlldmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zbXMtcmV0cmlldmVyJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzbXNSZXRyaWV2ZXI6IFNtc1JldHJpZXZlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuc21zUmV0cmlldmVyLmdldEFwcEhhc2goKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICogdGhpcy5zbXNSZXRyaWV2ZXIuc3RhcnRXYXRjaGluZygpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU21zUmV0cmlldmVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc21zLXJldHJpZXZlci1tYW5hZ2VyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLnNtc1JldHJpZXZlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaGFuYXRoYXJlc2gyNzEyL2lvbmljLW5hdGl2ZS1zbXMtcmV0cmlldmVyLXBsdWdpbi1tYXN0ZXInLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXNtcy1yZXRyaWV2ZXItbWFuYWdlciAtLXZhcmlhYmxlIFBMQVlfU0VSVklDRVNfVkVSU0lPTj1cIjE1LjAuMVwiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydQTEFZX1NFUlZJQ0VTX1ZFUlNJT04nXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU21zUmV0cmlldmVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzdGFydCB3YXRoY2hpbmcgbWVzc2FnZSBhcnJpdmUgZXZlbnQgYW5kIHJldHJpdmUgbWVzc2FnZSB0ZXh0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiByZXRyaXZlcyBTTVMgdGV4dCBvciBUSU1FT1VUIGFmdGVyIDUgbWluLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydFdhdGNoaW5nKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgdG8gZ2V0IGhhc2ggc3RyaW5nIG9mIEFQUC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc3VjY2Vzc2Z1bGx5IGdlbmVyYXRlIGhhc2ggb2YgQVBQLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBcHBIYXNoKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=