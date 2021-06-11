import { __extends } from "tslib";
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
var BlinkUp = /** @class */ (function (_super) {
    __extends(BlinkUp, _super);
    function BlinkUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlinkUp.prototype.startBlinkUp = function (options) { return cordova(this, "startBlinkUp", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BlinkUp.prototype.flashWifiBlinkUp = function (options) { return cordova(this, "flashWifiBlinkUp", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BlinkUp.prototype.flashWPSBlinkUp = function (options) { return cordova(this, "flashWPSBlinkUp", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BlinkUp.prototype.abortBlinkUp = function () { return cordova(this, "abortBlinkUp", { "observable": true }, arguments); };
    BlinkUp.prototype.clearBlinkUpData = function () { return cordova(this, "clearBlinkUpData", { "observable": true }, arguments); };
    BlinkUp.pluginName = "BlinkUp";
    BlinkUp.plugin = "cordova-plugin-blinkup";
    BlinkUp.pluginRef = "blinkup";
    BlinkUp.repo = "https://github.com/SensorShare/cordova-plugin-blinkup";
    BlinkUp.platforms = ["Android", "iOS"];
    BlinkUp.decorators = [
        { type: Injectable }
    ];
    return BlinkUp;
}(IonicNativePlugin));
export { BlinkUp };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JsaW5rdXAvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUE0RGQsMkJBQWlCOzs7O0lBVTVDLDhCQUFZLGFBQUMsT0FBdUI7SUFhcEMsa0NBQWdCLGFBQUMsT0FBMkI7SUFhNUMsaUNBQWUsYUFBQyxPQUEwQjtJQVcxQyw4QkFBWTtJQVdaLGtDQUFnQjs7Ozs7OztnQkEzRGpCLFVBQVU7O2tCQTdEWDtFQThENkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2Ugb2YgYSBibGluayB1cCBvcHRpb25zLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rVXBPcHRpb25zIHtcbiAgYXBpS2V5OiBzdHJpbmc7XG4gIGRldmVsb3BtZW50UGxhbklkPzogc3RyaW5nO1xuICBpc0luRGV2ZWxvcG1lbnQ/OiBib29sZWFuO1xuICB0aW1lb3V0TXM/OiBudW1iZXI7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIG9mIGEgYmxpbmsgdXAgd2lmaSBvcHRpb25zLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rVXBXaWZpT3B0aW9ucyB7XG4gIGFwaUtleTogc3RyaW5nO1xuICB0aW1lb3V0TXM/OiBudW1iZXI7XG4gIHNzaWQ6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2Ugb2YgYSBibGluayB1cCB3cHMgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCbGlua1VwV1BTT3B0aW9ucyB7XG4gIGFwaUtleTogc3RyaW5nO1xuICB0aW1lb3V0TXM/OiBudW1iZXI7XG4gIHdwc1Bpbjogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEJsaW5rVXBcbiAqIEBkZXNjcmlwdGlvblxuICogRWxlY3RyaWMgSW1wIEJsaW5rVXAgaW9uaWMgcGx1Z2luLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmxpbmtVcCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmxpbmt1cC9uZ3gnO1xuICpcbiAqIGNvbnN0IG9wdGlvbnMgPSA8QmxpbmtVcFdpZmlPcHRpb25zPntcbiAqICAgIGFwaUtleTogJ0FQSV9LRVknLFxuICogICAgdGltZW91dE1zOiA2MDAwMCxcbiAqICAgIHNzaWQ6ICdNWV9TU0lEJyxcbiAqICAgIHBhc3N3b3JkOiAnTVlfUEFTU1dPUkQnXG4gKiAgfVxuICogIEJsaW5rVXAuZmxhc2hXaWZpQmxpbmtVcChvcHRpb25zKS5zdWJzY3JpYmUoXG4gKiAgICAgKHJlc3VsdCkgPT4gY29uc29sZS5sb2coJ0RvbmUnKSxcbiAqICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICogICApXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCbGlua1VwJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYmxpbmt1cCcsXG4gIHBsdWdpblJlZjogJ2JsaW5rdXAnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1NlbnNvclNoYXJlL2NvcmRvdmEtcGx1Z2luLWJsaW5rdXAnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmxpbmtVcCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIHN0YXJ0QmxpbmtVcCAtIHN0YXJ0cyB0aGUgYmxpbmt1cCBwcm9jZXNzXG4gICAqIEBwYXJhbSB7bW9kdWxlOmJsaW5rdXAuQmxpbmtVcE9wdGlvbnN9IG9wdGlvbnMgQmxpbmtVcCBPcHRpb25zXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBPYnNlcnZhYmxlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIHN0YXJ0QmxpbmtVcChvcHRpb25zOiBCbGlua1VwT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIGZsYXNoV2lmaUJsaW5rVXAgLSBpbnZva2VzIHRoZSBmbGFzaCB3aWZpIHByb2Nlc3NcbiAgICogQHBhcmFtIHttb2R1bGU6Ymxpbmt1cC5CbGlua1VwV2lmaU9wdGlvbnN9IG9wdGlvbnMgQmxpbmtVcCBXaWZpIE9wdGlvbnNcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIE9ic2VydmFibGVcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgfSlcbiAgZmxhc2hXaWZpQmxpbmtVcChvcHRpb25zOiBCbGlua1VwV2lmaU9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBmbGFzaFdQU0JsaW5rVXAgLSBpbnZva2VzIHRoZSBmbGFzaCB3cHMgcHJvY2Vzc1xuICAgKiBAcGFyYW0ge21vZHVsZTpibGlua3VwLkJsaW5rVXBXUFNPcHRpb25zfSBvcHRpb25zIEJsaW5rVXAgV1BTIE9wdGlvbnNcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIE9ic2VydmFibGVcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgfSlcbiAgZmxhc2hXUFNCbGlua1VwKG9wdGlvbnM6IEJsaW5rVXBXUFNPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogYWJvcnRCbGlua1VwIC0gYWJvcnQgYmxpbmt1cCBwcm9jZXNzXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBPYnNlcnZhYmxlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgfSlcbiAgYWJvcnRCbGlua1VwKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsZWFyQmxpbmtVcERhdGEgLSBjbGVhciB3aWZpIGRhdGFcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIE9ic2VydmFibGVcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICB9KVxuICBjbGVhckJsaW5rVXBEYXRhKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=