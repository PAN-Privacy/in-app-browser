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
var OpenALPROriginal = /** @class */ (function (_super) {
    __extends(OpenALPROriginal, _super);
    function OpenALPROriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Country = {
            AU: 'au',
            BR: 'br',
            BR2: 'br2',
            EU: 'eu',
            IN: 'in',
            KR2: 'kr2',
            US: 'us',
            VN2: 'vn2',
        };
        return _this;
    }
    OpenALPROriginal.prototype.scan = function (imageData, options) { return cordova(this, "scan", {}, arguments); };
    OpenALPROriginal.pluginName = "OpenALPR";
    OpenALPROriginal.plugin = "cordova-plugin-openalpr";
    OpenALPROriginal.pluginRef = "cordova.plugins.OpenALPR";
    OpenALPROriginal.repo = "https://github.com/iMicknl/cordova-plugin-openalpr";
    OpenALPROriginal.platforms = ["Android", "iOS"];
    return OpenALPROriginal;
}(IonicNativePlugin));
var OpenALPR = new OpenALPROriginal();
export { OpenALPR };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL29wZW5hbHByL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWtEMUMsNEJBQWlCOzs7UUFDN0MsYUFBTyxHQUFHO1lBQ1IsRUFBRSxFQUFFLElBQUk7WUFDUixFQUFFLEVBQUUsSUFBSTtZQUNSLEdBQUcsRUFBRSxLQUFLO1lBQ1YsRUFBRSxFQUFFLElBQUk7WUFDUixFQUFFLEVBQUUsSUFBSTtZQUNSLEdBQUcsRUFBRSxLQUFLO1lBQ1YsRUFBRSxFQUFFLElBQUk7WUFDUixHQUFHLEVBQUUsS0FBSztTQUNYLENBQUM7OztJQVNGLHVCQUFJLGFBQUMsU0FBYyxFQUFFLE9BQXlCOzs7Ozs7bUJBdEVoRDtFQW1EOEIsaUJBQWlCO1NBQWxDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBPcGVuQUxQUk9wdGlvbnMge1xuICAvKiogQ291bnRyeSB1c2VkIGZvciBzY2FubmluZyB0aGUgbGljZW5zZSBwbGF0ZSAqL1xuICBjb3VudHJ5Pzogc3RyaW5nO1xuXG4gIC8qKiBBbW91bnQgb2YgcmVzdWx0cyByZXR1cm5lZCAqL1xuICBhbW91bnQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3BlbkFMUFJSZXN1bHQge1xuICAvKiogTGljZW5zZVBsYXRlICovXG4gIG51bWJlcjogc3RyaW5nO1xuICAvKiogUHJvYmFiaWxpdHkgKi9cbiAgY29uZmlkZW5jZTogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBuYW1lIE9wZW5BTFBSXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgQ29yZG92YSBwbHVnaW4gYWRkcyBzdXBwb3J0IGZvciB0aGUgT3BlbkFMUFIgKEF1dG9tYXRpYyBMaWNlbnNlIFBsYXRlIFJlY29nbml0aW9uKSBsaWJyYXJ5LCB3aGljaCBwcm92aWRlcyBzdXBwb3J0IGZvciByZXRyaWV2aW5nIHRoZSBsaWNlbnNlIHBsYXRlIGZyb20gYSBwaWN0dXJlLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgT3BlbkFMUFIsIE9wZW5BTFBST3B0aW9ucywgT3BlbkFMUFJSZXN1bHQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL29wZW5hbHByL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgb3BlbkFMUFI6IE9wZW5BTFBSKSB7IH1cbiAqXG4gKiBjb25zdCBzY2FuT3B0aW9uczogT3BlbkFMUFJPcHRpb25zID0ge1xuICogICAgY291bnRyeTogdGhpcy5vcGVuQUxQUi5Db3VudHJ5LkVVLFxuICogICAgYW1vdW50OiAzXG4gKiB9XG4gKlxuICogLy8gVG8gZ2V0IGltYWdlRGF0YSwgeW91IGNhbiB1c2UgdGhlIEBpb25pYy1uYXRpdmUvY2FtZXJhIG1vZHVsZSBmb3IgZXhhbXBsZS4gSXQgd29ya3Mgd2l0aCBEZXN0aW5hdGlvblR5cGUuRklMRV9VUkkgYW5kIERBVEFfVVJMXG4gKlxuICogdGhpcy5vcGVuQUxQUi5zY2FuKGltYWdlRGF0YSwgc2Nhbk9wdGlvbnMpXG4gKiAgIC50aGVuKChyZXM6IFtPcGVuQUxQUlJlc3VsdF0pID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnT3BlbkFMUFInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1vcGVuYWxwcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5PcGVuQUxQUicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaU1pY2tubC9jb3Jkb3ZhLXBsdWdpbi1vcGVuYWxwcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcGVuQUxQUiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgQ291bnRyeSA9IHtcbiAgICBBVTogJ2F1JyxcbiAgICBCUjogJ2JyJyxcbiAgICBCUjI6ICdicjInLFxuICAgIEVVOiAnZXUnLFxuICAgIElOOiAnaW4nLFxuICAgIEtSMjogJ2tyMicsXG4gICAgVVM6ICd1cycsXG4gICAgVk4yOiAndm4yJyxcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBkb2VzIHNvbWV0aGluZ1xuICAgKiBAcGFyYW0gaW1hZ2VEYXRhIHthbnl9IEJhc2U2NCBlbmNvZGluZyBvZiB0aGUgaW1hZ2UgZGF0YSBvciB0aGUgaW1hZ2UgZmlsZSBVUklcbiAgICogQHBhcmFtIG9wdGlvbnMge09wZW5BTFBST3B0aW9uc30gT3B0aW9ucyB0byBwYXNzIHRvIHRoZSBPcGVuQUxQUiBzY2FubmVyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNjYW4oaW1hZ2VEYXRhOiBhbnksIG9wdGlvbnM/OiBPcGVuQUxQUk9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19