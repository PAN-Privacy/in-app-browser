import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var OpenALPR = /** @class */ (function (_super) {
    __extends(OpenALPR, _super);
    function OpenALPR() {
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
    OpenALPR.prototype.scan = function (imageData, options) { return cordova(this, "scan", {}, arguments); };
    OpenALPR.pluginName = "OpenALPR";
    OpenALPR.plugin = "cordova-plugin-openalpr";
    OpenALPR.pluginRef = "cordova.plugins.OpenALPR";
    OpenALPR.repo = "https://github.com/iMicknl/cordova-plugin-openalpr";
    OpenALPR.platforms = ["Android", "iOS"];
    OpenALPR.decorators = [
        { type: Injectable }
    ];
    return OpenALPR;
}(IonicNativePlugin));
export { OpenALPR };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL29wZW5hbHByL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWtEMUMsNEJBQWlCOzs7UUFDN0MsYUFBTyxHQUFHO1lBQ1IsRUFBRSxFQUFFLElBQUk7WUFDUixFQUFFLEVBQUUsSUFBSTtZQUNSLEdBQUcsRUFBRSxLQUFLO1lBQ1YsRUFBRSxFQUFFLElBQUk7WUFDUixFQUFFLEVBQUUsSUFBSTtZQUNSLEdBQUcsRUFBRSxLQUFLO1lBQ1YsRUFBRSxFQUFFLElBQUk7WUFDUixHQUFHLEVBQUUsS0FBSztTQUNYLENBQUM7OztJQVNGLHVCQUFJLGFBQUMsU0FBYyxFQUFFLE9BQXlCOzs7Ozs7O2dCQXBCL0MsVUFBVTs7bUJBbERYO0VBbUQ4QixpQkFBaUI7U0FBbEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5BTFBST3B0aW9ucyB7XG4gIC8qKiBDb3VudHJ5IHVzZWQgZm9yIHNjYW5uaW5nIHRoZSBsaWNlbnNlIHBsYXRlICovXG4gIGNvdW50cnk/OiBzdHJpbmc7XG5cbiAgLyoqIEFtb3VudCBvZiByZXN1bHRzIHJldHVybmVkICovXG4gIGFtb3VudD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcGVuQUxQUlJlc3VsdCB7XG4gIC8qKiBMaWNlbnNlUGxhdGUgKi9cbiAgbnVtYmVyOiBzdHJpbmc7XG4gIC8qKiBQcm9iYWJpbGl0eSAqL1xuICBjb25maWRlbmNlOiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgT3BlbkFMUFJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBDb3Jkb3ZhIHBsdWdpbiBhZGRzIHN1cHBvcnQgZm9yIHRoZSBPcGVuQUxQUiAoQXV0b21hdGljIExpY2Vuc2UgUGxhdGUgUmVjb2duaXRpb24pIGxpYnJhcnksIHdoaWNoIHByb3ZpZGVzIHN1cHBvcnQgZm9yIHJldHJpZXZpbmcgdGhlIGxpY2Vuc2UgcGxhdGUgZnJvbSBhIHBpY3R1cmUuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBPcGVuQUxQUiwgT3BlbkFMUFJPcHRpb25zLCBPcGVuQUxQUlJlc3VsdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvb3BlbmFscHIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBvcGVuQUxQUjogT3BlbkFMUFIpIHsgfVxuICpcbiAqIGNvbnN0IHNjYW5PcHRpb25zOiBPcGVuQUxQUk9wdGlvbnMgPSB7XG4gKiAgICBjb3VudHJ5OiB0aGlzLm9wZW5BTFBSLkNvdW50cnkuRVUsXG4gKiAgICBhbW91bnQ6IDNcbiAqIH1cbiAqXG4gKiAvLyBUbyBnZXQgaW1hZ2VEYXRhLCB5b3UgY2FuIHVzZSB0aGUgQGlvbmljLW5hdGl2ZS9jYW1lcmEgbW9kdWxlIGZvciBleGFtcGxlLiBJdCB3b3JrcyB3aXRoIERlc3RpbmF0aW9uVHlwZS5GSUxFX1VSSSBhbmQgREFUQV9VUkxcbiAqXG4gKiB0aGlzLm9wZW5BTFBSLnNjYW4oaW1hZ2VEYXRhLCBzY2FuT3B0aW9ucylcbiAqICAgLnRoZW4oKHJlczogW09wZW5BTFBSUmVzdWx0XSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdPcGVuQUxQUicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW9wZW5hbHByJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLk9wZW5BTFBSJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9pTWlja25sL2NvcmRvdmEtcGx1Z2luLW9wZW5hbHByJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9wZW5BTFBSIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBDb3VudHJ5ID0ge1xuICAgIEFVOiAnYXUnLFxuICAgIEJSOiAnYnInLFxuICAgIEJSMjogJ2JyMicsXG4gICAgRVU6ICdldScsXG4gICAgSU46ICdpbicsXG4gICAgS1IyOiAna3IyJyxcbiAgICBVUzogJ3VzJyxcbiAgICBWTjI6ICd2bjInLFxuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXMgc29tZXRoaW5nXG4gICAqIEBwYXJhbSBpbWFnZURhdGEge2FueX0gQmFzZTY0IGVuY29kaW5nIG9mIHRoZSBpbWFnZSBkYXRhIG9yIHRoZSBpbWFnZSBmaWxlIFVSSVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7T3BlbkFMUFJPcHRpb25zfSBPcHRpb25zIHRvIHBhc3MgdG8gdGhlIE9wZW5BTFBSIHNjYW5uZXJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2NhbihpbWFnZURhdGE6IGFueSwgb3B0aW9ucz86IE9wZW5BTFBST3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=