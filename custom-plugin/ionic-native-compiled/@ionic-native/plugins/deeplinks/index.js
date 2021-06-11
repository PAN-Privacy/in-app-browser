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
var DeeplinksOriginal = /** @class */ (function (_super) {
    __extends(DeeplinksOriginal, _super);
    function DeeplinksOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeeplinksOriginal.prototype.route = function (paths) { return cordova(this, "route", { "observable": true }, arguments); };
    DeeplinksOriginal.prototype.routeWithNavController = function (navController, paths, options) { return cordova(this, "routeWithNavController", { "observable": true }, arguments); };
    DeeplinksOriginal.pluginName = "Deeplinks";
    DeeplinksOriginal.plugin = "ionic-plugin-deeplinks";
    DeeplinksOriginal.pluginRef = "IonicDeeplink";
    DeeplinksOriginal.repo = "https://github.com/ionic-team/ionic-plugin-deeplinks";
    DeeplinksOriginal.install = "ionic cordova plugin add ionic-plugin-deeplinks --variable URL_SCHEME=myapp --variable DEEPLINK_SCHEME=https --variable DEEPLINK_HOST=example.com --variable ANDROID_PATH_PREFIX=/";
    DeeplinksOriginal.installVariables = ["URL_SCHEME", "DEEPLINK_SCHEME", "DEEPLINK_HOST", "ANDROID_PATH_PREFIX"];
    DeeplinksOriginal.platforms = ["Android", "Browser", "iOS"];
    return DeeplinksOriginal;
}(IonicNativePlugin));
var Deeplinks = new DeeplinksOriginal();
export { Deeplinks };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RlZXBsaW5rcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTZGSCw2QkFBaUI7Ozs7SUFjOUMseUJBQUssYUFBQyxLQUFVO0lBNkJoQiwwQ0FBc0IsYUFBQyxhQUFrQixFQUFFLEtBQVUsRUFBRSxPQUF5Qjs7Ozs7Ozs7b0JBMUlsRjtFQStGK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBEZWVwbGlua01hdGNoIHtcbiAgLyoqXG4gICAqIFRoZSByb3V0ZSBpbmZvIGZvciB0aGUgbWF0Y2hlZCByb3V0ZVxuICAgKi9cbiAgJHJvdXRlOiBhbnk7XG5cbiAgLyoqXG4gICAqIEFueSBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciB0aHJvdWdoIHJvdXRlIHBhcmFtZXRlcnMgb3IgR0VUIHBhcmFtZXRlcnNcbiAgICovXG4gICRhcmdzOiBhbnk7XG5cbiAgLyoqXG4gICAqIFRoZSBkZWVwbGluayBvYmplY3QgcHJvY2Vzc2VkIGZyb20gdGhlIHBsdWdpbiwgYWxvbmcgd2l0aCBhbnlcbiAgICogYW55IGludGVybmFsIG5hdGl2ZSBkYXRhIGF2YWlsYWJsZSBhcyBcImV4dHJhc1wiIGF0IHRoZSB0aW1lXG4gICAqIHRoZSByb3V0ZSB3YXMgbWF0Y2hlZCAoZm9yIGV4YW1wbGUsIEZhY2Vib29rIHNvbWV0aW1lcyBhZGRzIGV4dHJhIGRhdGEpXG4gICAqL1xuICAkbGluazogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlZXBsaW5rT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTZXQgdGhlIG1hdGNoZWQgcm91dGUgYXMgcm9vdCBwYWdlIHVzaW5nIGBuYXZDdHJsLnNldFJvb3QoKWAgbWV0aG9kLlxuICAgKi9cbiAgcm9vdDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBEZWVwbGlua3NcbiAqIEBwcmVtaWVyIGRlZXBsaW5rc1xuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGhhbmRsZXMgZGVlcGxpbmtzIG9uIGlPUyBhbmQgQW5kcm9pZCBmb3IgYm90aCBjdXN0b20gVVJMIHNjaGVtZSBsaW5rc1xuICogYW5kIFVuaXZlcnNhbCBBcHAgTGlua3MuXG4gKlxuICogUGxlYXNlIHJlYWQgdGhlIFtpb25pYyBwbHVnaW4gZGVlcGxpbmtzIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLXBsdWdpbi1kZWVwbGlua3MpIGZvciBpT1MgYW5kIEFuZHJvaWQgaW50ZWdyYXRpb24uXG4gKiBZb3UgbXVzdCBhZGQgYHVuaXZlcnNhbC1saW5rc2AgdG8geW91ciBgY29uZmlnLnhtbGAgYW5kIHNldCB1cCBBcHBsZSBBcHAgU2l0ZSBBc3NvY2lhdGlvbiAoQUFTQSkgZm9yIGlPUyBhbmQgQXNzZXQgTGlua3MgZm9yIEFuZHJvaWQuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEZWVwbGlua3MgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RlZXBsaW5rcy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVlcGxpbmtzOiBEZWVwbGlua3MpIHsgfVxuICpcbiAqIHRoaXMuZGVlcGxpbmtzLnJvdXRlKHtcbiAqICAgICAgJy9hYm91dC11cyc6IEFib3V0UGFnZSxcbiAqICAgICAgJy91bml2ZXJzYWwtbGlua3MtdGVzdCc6IEFib3V0UGFnZSxcbiAqICAgICAgJy9wcm9kdWN0cy86cHJvZHVjdElkJzogUHJvZHVjdFBhZ2VcbiAqICAgIH0pLnN1YnNjcmliZShtYXRjaCA9PiB7XG4gKiAgICAgIC8vIG1hdGNoLiRyb3V0ZSAtIHRoZSByb3V0ZSB3ZSBtYXRjaGVkLCB3aGljaCBpcyB0aGUgbWF0Y2hlZCBlbnRyeSBmcm9tIHRoZSBhcmd1bWVudHMgdG8gcm91dGUoKVxuICogICAgICAvLyBtYXRjaC4kYXJncyAtIHRoZSBhcmdzIHBhc3NlZCBpbiB0aGUgbGlua1xuICogICAgICAvLyBtYXRjaC4kbGluayAtIHRoZSBmdWxsIGxpbmsgZGF0YVxuICogICAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IG1hdGNoZWQgcm91dGUnLCBtYXRjaCk7XG4gKiAgICB9LCBub21hdGNoID0+IHtcbiAqICAgICAgLy8gbm9tYXRjaC4kbGluayAtIHRoZSBmdWxsIGxpbmsgZGF0YVxuICogICAgICBjb25zb2xlLmVycm9yKCdHb3QgYSBkZWVwbGluayB0aGF0IGRpZG5cXCd0IG1hdGNoJywgbm9tYXRjaCk7XG4gKiAgICB9KTtcbiAqIGBgYFxuICpcbiAqIEFsdGVybmF0aXZlbHksIGlmIHlvdSdyZSB1c2luZyBJb25pYywgdGhlcmUncyBhIGNvbnZlbmllbmNlIG1ldGhvZCB0aGF0IHRha2VzIGEgcmVmZXJlbmNlIHRvIGEgYE5hdkNvbnRyb2xsZXJgIGFuZCBoYW5kbGVzXG4gKiB0aGUgYWN0dWFsIG5hdmlnYXRpb24gZm9yIHlvdTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiB0aGlzLmRlZXBsaW5rcy5yb3V0ZVdpdGhOYXZDb250cm9sbGVyKHRoaXMubmF2Q29udHJvbGxlciwge1xuICogICAnL2Fib3V0LXVzJzogQWJvdXRQYWdlLFxuICogICAnL3Byb2R1Y3RzLzpwcm9kdWN0SWQnOiBQcm9kdWN0UGFnZVxuICogfSkuc3Vic2NyaWJlKG1hdGNoID0+IHtcbiAqICAgICAvLyBtYXRjaC4kcm91dGUgLSB0aGUgcm91dGUgd2UgbWF0Y2hlZCwgd2hpY2ggaXMgdGhlIG1hdGNoZWQgZW50cnkgZnJvbSB0aGUgYXJndW1lbnRzIHRvIHJvdXRlKClcbiAqICAgICAvLyBtYXRjaC4kYXJncyAtIHRoZSBhcmdzIHBhc3NlZCBpbiB0aGUgbGlua1xuICogICAgIC8vIG1hdGNoLiRsaW5rIC0gdGhlIGZ1bGwgbGluayBkYXRhXG4gKiAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBtYXRjaGVkIHJvdXRlJywgbWF0Y2gpO1xuICogICB9LCBub21hdGNoID0+IHtcbiAqICAgICAvLyBub21hdGNoLiRsaW5rIC0gdGhlIGZ1bGwgbGluayBkYXRhXG4gKiAgICAgY29uc29sZS5lcnJvcignR290IGEgZGVlcGxpbmsgdGhhdCBkaWRuXFwndCBtYXRjaCcsIG5vbWF0Y2gpO1xuICogICB9KTtcbiAqIGBgYFxuICpcbiAqIFNlZSB0aGUgW0lvbmljIERlZXBsaW5rcyBEZW1vXShodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYzItZGVlcGxpbmtzLWRlbW8vYmxvYi9tYXN0ZXIvYXBwL2FwcC50cykgZm9yIGFuIGV4YW1wbGUgb2YgaG93IHRvXG4gKiByZXRyaWV2ZSB0aGUgYE5hdkNvbnRyb2xsZXJgIHJlZmVyZW5jZSBhdCBydW50aW1lLlxuICpcbiAqIEBpbnRlcmZhY2VzXG4gKiBEZWVwbGlua01hdGNoXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRGVlcGxpbmtzJyxcbiAgcGx1Z2luOiAnaW9uaWMtcGx1Z2luLWRlZXBsaW5rcycsXG4gIHBsdWdpblJlZjogJ0lvbmljRGVlcGxpbmsnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtcGx1Z2luLWRlZXBsaW5rcycsXG4gIGluc3RhbGw6XG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBpb25pYy1wbHVnaW4tZGVlcGxpbmtzIC0tdmFyaWFibGUgVVJMX1NDSEVNRT1teWFwcCAtLXZhcmlhYmxlIERFRVBMSU5LX1NDSEVNRT1odHRwcyAtLXZhcmlhYmxlIERFRVBMSU5LX0hPU1Q9ZXhhbXBsZS5jb20gLS12YXJpYWJsZSBBTkRST0lEX1BBVEhfUFJFRklYPS8nLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ1VSTF9TQ0hFTUUnLCAnREVFUExJTktfU0NIRU1FJywgJ0RFRVBMSU5LX0hPU1QnLCAnQU5EUk9JRF9QQVRIX1BSRUZJWCddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZWVwbGlua3MgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBEZWZpbmUgYSBzZXQgb2YgcGF0aHMgdG8gbWF0Y2ggYWdhaW5zdCBpbmNvbWluZyBkZWVwbGlua3MuXG4gICAqXG4gICAqIEBwYXJhbSB7cGF0aHN9IHBhdGhzIERlZmluZSBhIHNldCBvZiBwYXRocyB0byBtYXRjaCBhZ2FpbnN0IGluY29taW5nIGRlZXBsaW5rcy5cbiAgICogcGF0aHMgdGFrZXMgYW4gb2JqZWN0IG9mIHRoZSBmb3JtIHsgJ3BhdGgnOiBkYXRhIH0uIElmIGEgZGVlcGxpbmtcbiAgICogbWF0Y2hlcyB0aGUgcGF0aCwgdGhlIHJlc3VsdGluZyBwYXRoLWRhdGEgcGFpciB3aWxsIGJlIHJldHVybmVkIGluIHRoZVxuICAgKiBwcm9taXNlIHJlc3VsdCB3aGljaCB5b3UgY2FuIHRoZW4gdXNlIHRvIG5hdmlnYXRlIGluIHRoZSBhcHAgYXMgeW91IHNlZSBmaXQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPERlZXBsaW5rTWF0Y2g+fSBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBpcyBjYWxsZWQgZWFjaCB0aW1lIGEgZGVlcGxpbmsgY29tZXMgdGhyb3VnaCwgYW5kXG4gICAqIGVycm9ycyBpZiBhIGRlZXBsaW5rIGNvbWVzIHRocm91Z2ggdGhhdCBkb2VzIG5vdCBtYXRjaCBhIGdpdmVuIHBhdGguXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgfSlcbiAgcm91dGUocGF0aHM6IGFueSk6IE9ic2VydmFibGU8RGVlcGxpbmtNYXRjaD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBUaGlzIGlzIGEgY29udmVuaWVuY2UgdmVyc2lvbiBvZiBgcm91dGVgIHRoYXQgdGFrZXMgYSByZWZlcmVuY2UgdG8gYSBOYXZDb250cm9sbGVyXG4gICAqIGZyb20gSW9uaWMsIG9yIGEgY3VzdG9tIGNsYXNzIHRoYXQgY29uZm9ybXMgdG8gdGhpcyBwcm90b2NvbDpcbiAgICpcbiAgICogTmF2Q29udHJvbGxlci5wdXNoID0gZnVuY3Rpb24oVmlldywgUGFyYW1zKXt9XG4gICAqXG4gICAqIFRoaXMgaGFuZGxlciB3aWxsIGF1dG9tYXRpY2FsbHkgbmF2aWdhdGUgd2hlbiBhIHJvdXRlIG1hdGNoZXMuIElmIHlvdSBuZWVkIGZpbmVyLWdyYWluZWRcbiAgICogY29udHJvbCBvdmVyIHRoZSBiZWhhdmlvciBvZiBhIG1hdGNoaW5nIGRlZXBsaW5rLCB1c2UgdGhlIHBsYWluIGByb3V0ZWAgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge05hdn0gbmF2Q29udHJvbGxlciBEZWZpbmUgYSBzZXQgb2YgcGF0aHMgdG8gbWF0Y2ggYWdhaW5zdCBpbmNvbWluZyBkZWVwbGlua3MuXG4gICAqIHBhdGhzIHRha2VzIGFuIG9iamVjdCBvZiB0aGUgZm9ybSB7ICdwYXRoJzogZGF0YSB9LiBJZiBhIGRlZXBsaW5rXG4gICAqIG1hdGNoZXMgdGhlIHBhdGgsIHRoZSByZXN1bHRpbmcgcGF0aC1kYXRhIHBhaXIgd2lsbCBiZSByZXR1cm5lZCBpbiB0aGVcbiAgICogcHJvbWlzZSByZXN1bHQgd2hpY2ggeW91IGNhbiB0aGVuIHVzZSB0byBuYXZpZ2F0ZSBpbiB0aGUgYXBwIGFzIHlvdSBzZWUgZml0LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGF0aHNcbiAgICpcbiAgICogQHBhcmFtIHtEZWVwbGlua09wdGlvbnN9IG9wdGlvbnNcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RGVlcGxpbmtNYXRjaD59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IHJlc29sdmVzIGVhY2ggdGltZSBhIGRlZXBsaW5rIGNvbWVzIHRocm91Z2gsIGFuZFxuICAgKiBlcnJvcnMgaWYgYSBkZWVwbGluayBjb21lcyB0aHJvdWdoIHRoYXQgZG9lcyBub3QgbWF0Y2ggYSBnaXZlbiBwYXRoLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIHJvdXRlV2l0aE5hdkNvbnRyb2xsZXIobmF2Q29udHJvbGxlcjogYW55LCBwYXRoczogYW55LCBvcHRpb25zPzogRGVlcGxpbmtPcHRpb25zKTogT2JzZXJ2YWJsZTxEZWVwbGlua01hdGNoPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=