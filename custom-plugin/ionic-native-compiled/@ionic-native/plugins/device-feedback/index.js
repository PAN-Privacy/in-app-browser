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
var DeviceFeedbackOriginal = /** @class */ (function (_super) {
    __extends(DeviceFeedbackOriginal, _super);
    function DeviceFeedbackOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceFeedbackOriginal.prototype.acoustic = function () { return cordova(this, "acoustic", { "sync": true }, arguments); };
    DeviceFeedbackOriginal.prototype.haptic = function (type) { return cordova(this, "haptic", { "sync": true }, arguments); };
    DeviceFeedbackOriginal.prototype.isFeedbackEnabled = function () { return cordova(this, "isFeedbackEnabled", {}, arguments); };
    DeviceFeedbackOriginal.pluginName = "DeviceFeedback";
    DeviceFeedbackOriginal.plugin = "cordova-plugin-velda-devicefeedback";
    DeviceFeedbackOriginal.pluginRef = "plugins.deviceFeedback";
    DeviceFeedbackOriginal.repo = "https://github.com/VVelda/device-feedback";
    DeviceFeedbackOriginal.platforms = ["Android"];
    return DeviceFeedbackOriginal;
}(IonicNativePlugin));
var DeviceFeedback = new DeviceFeedbackOriginal();
export { DeviceFeedback };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RldmljZS1mZWVkYmFjay9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFrRHBDLGtDQUFpQjs7OztJQUtuRCxpQ0FBUTtJQU9SLCtCQUFNLGFBQUMsSUFBWTtJQU9uQiwwQ0FBaUI7Ozs7Ozt5QkF0RW5CO0VBbURvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZUZlZWRiYWNrU3RhdHVzIHtcbiAgLyoqIEhhcHRpYyBGZWVkYmFjayAqL1xuICBoYXB0aWM6IGJvb2xlYW47XG5cbiAgLyoqIEFjb3VzdGljIEZlZWRiYWNrICovXG4gIGFjb3VzdGljOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIERldmljZSBGZWVkYmFja1xuICogQHByZW1pZXIgdmlicmF0aW9uXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBQbHVnaW4gdGhhdCBsZXRzIHlvdSBwcm92aWRlIGhhcHRpYyBvciBhY291c3RpYyBmZWVkYmFjayBvbiBBbmRyb2lkIGRldmljZXMuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEZXZpY2VGZWVkYmFjayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGV2aWNlLWZlZWRiYWNrL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkZXZpY2VGZWVkYmFjazogRGV2aWNlRmVlZGJhY2spIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmRldmljZUZlZWRiYWNrLmFjb3VzdGljKCk7XG4gKlxuICogdGhpcy5kZXZpY2VGZWVkYmFjay5oYXB0aWMoMCk7XG4gKlxuICogdGhpcy5kZXZpY2VGZWVkYmFjay5pc0ZlZWRiYWNrRW5hYmxlZCgpLnRoZW4oZmVlZGJhY2sgPT4ge1xuICogICAgIGNvbnNvbGUubG9nKGZlZWRiYWNrKTtcbiAqICAgICAvLyB7XG4gKiAgICAgLy8gICBhY291c3RpYzogdHJ1ZSxcbiAqICAgICAvLyAgIGhhcHRpYzogdHJ1ZVxuICogICAgIC8vIH1cbiAqICAgfSk7XG4gKlxuICogYGBgXG4gKiBAaW5udGVyZmFjZXNcbiAqIERldmljZUZlZWRiYWNrRW5hYmxlZFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0RldmljZUZlZWRiYWNrJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdmVsZGEtZGV2aWNlZmVlZGJhY2snLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmRldmljZUZlZWRiYWNrJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9WVmVsZGEvZGV2aWNlLWZlZWRiYWNrJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGV2aWNlRmVlZGJhY2sgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBQcm92aWRlIHNvdW5kIGZlZWRiYWNrIHRvIHVzZXIsIG5ldmVydGhlbGVzcyByZXNwZWN0IHVzZXIncyBzZXR0aW5ncyBhbmQgY3VycmVudCBhY3RpdmUgZGV2aWNlIHByb2ZpbGUgYXMgbmF0aXZlIGZlZWRiYWNrIGRvLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGFjb3VzdGljKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUHJvdmlkZSB2aWJyYXRlIGZlZWRiYWNrIHRvIHVzZXIsIG5ldmVydGhlbGVzcyByZXNwZWN0IHVzZXIncyB0YWN0aWxlIGZlZWRiYWNrIHNldHRpbmcgYXMgbmF0aXZlIGZlZWRiYWNrIGRvLlxuICAgKiBAcGFyYW0ge251bWJlcn0gdHlwZSBTcGVjaWZ5IHR5cGUgb2YgdmlicmF0aW9uIGZlZWRiYWNrLiAwIGZvciBsb25nIHByZXNzLCAxIGZvciB2aXJ0dWFsIGtleSwgb3IgMyBmb3Iga2V5Ym9hcmQgdGFwLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGhhcHRpYyh0eXBlOiBudW1iZXIpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGhhcHRpYyBhbmQgYWNvdXN0aWMgZmVlZGJhY2sgaXMgZW5hYmxlZCBieSB1c2VyIHNldHRpbmdzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEZXZpY2VGZWVkYmFja0VuYWJsZWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0ZlZWRiYWNrRW5hYmxlZCgpOiBQcm9taXNlPERldmljZUZlZWRiYWNrU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=