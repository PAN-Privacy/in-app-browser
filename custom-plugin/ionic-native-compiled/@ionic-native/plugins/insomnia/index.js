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
var InsomniaOriginal = /** @class */ (function (_super) {
    __extends(InsomniaOriginal, _super);
    function InsomniaOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InsomniaOriginal.prototype.keepAwake = function () { return cordova(this, "keepAwake", {}, arguments); };
    InsomniaOriginal.prototype.allowSleepAgain = function () { return cordova(this, "allowSleepAgain", {}, arguments); };
    InsomniaOriginal.pluginName = "Insomnia";
    InsomniaOriginal.plugin = "cordova-plugin-insomnia";
    InsomniaOriginal.pluginRef = "plugins.insomnia";
    InsomniaOriginal.repo = "https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin";
    InsomniaOriginal.platforms = ["Android", "Browser", "Firefox OS", "iOS", "Windows", "Windows Phone 8"];
    return InsomniaOriginal;
}(IonicNativePlugin));
var Insomnia = new InsomniaOriginal();
export { Insomnia };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luc29tbmlhL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXFDMUMsNEJBQWlCOzs7O0lBTTdDLDRCQUFTO0lBU1Qsa0NBQWU7Ozs7OzttQkFyRGpCO0VBc0M4QixpQkFBaUI7U0FBbEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEluc29tbmlhXG4gKiBAZGVzY3JpcHRpb25cbiAqIFByZXZlbnQgdGhlIHNjcmVlbiBvZiB0aGUgbW9iaWxlIGRldmljZSBmcm9tIGZhbGxpbmcgYXNsZWVwLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW5zb21uaWEgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2luc29tbmlhL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBpbnNvbW5pYTogSW5zb21uaWEpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuaW5zb21uaWEua2VlcEF3YWtlKClcbiAqICAgLnRoZW4oXG4gKiAgICAgKCkgPT4gY29uc29sZS5sb2coJ3N1Y2Nlc3MnKSxcbiAqICAgICAoKSA9PiBjb25zb2xlLmxvZygnZXJyb3InKVxuICogICApO1xuICpcbiAqIHRoaXMuaW5zb21uaWEuYWxsb3dTbGVlcEFnYWluKClcbiAqICAgLnRoZW4oXG4gKiAgICAgKCkgPT4gY29uc29sZS5sb2coJ3N1Y2Nlc3MnKSxcbiAqICAgICAoKSA9PiBjb25zb2xlLmxvZygnZXJyb3InKVxuICogICApO1xuICogYGBgXG4gKlxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0luc29tbmlhJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW5zb21uaWEnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmluc29tbmlhJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9JbnNvbW5pYS1QaG9uZUdhcC1QbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ0ZpcmVmb3ggT1MnLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSA4J10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluc29tbmlhIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogS2VlcHMgYXdha2UgdGhlIGFwcGxpY2F0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGtlZXBBd2FrZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgdGhlIGFwcGxpY2F0aW9uIHRvIHNsZWVwIGFnYWluXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFsbG93U2xlZXBBZ2FpbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19