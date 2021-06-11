import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Insomnia = /** @class */ (function (_super) {
    __extends(Insomnia, _super);
    function Insomnia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Insomnia.prototype.keepAwake = function () { return cordova(this, "keepAwake", {}, arguments); };
    Insomnia.prototype.allowSleepAgain = function () { return cordova(this, "allowSleepAgain", {}, arguments); };
    Insomnia.pluginName = "Insomnia";
    Insomnia.plugin = "cordova-plugin-insomnia";
    Insomnia.pluginRef = "plugins.insomnia";
    Insomnia.repo = "https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin";
    Insomnia.platforms = ["Android", "Browser", "Firefox OS", "iOS", "Windows", "Windows Phone 8"];
    Insomnia.decorators = [
        { type: Injectable }
    ];
    return Insomnia;
}(IonicNativePlugin));
export { Insomnia };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luc29tbmlhL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXFDMUMsNEJBQWlCOzs7O0lBTTdDLDRCQUFTO0lBU1Qsa0NBQWU7Ozs7Ozs7Z0JBaEJoQixVQUFVOzttQkFyQ1g7RUFzQzhCLGlCQUFpQjtTQUFsQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgSW5zb21uaWFcbiAqIEBkZXNjcmlwdGlvblxuICogUHJldmVudCB0aGUgc2NyZWVuIG9mIHRoZSBtb2JpbGUgZGV2aWNlIGZyb20gZmFsbGluZyBhc2xlZXAuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJbnNvbW5pYSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW5zb21uaWEvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGluc29tbmlhOiBJbnNvbW5pYSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5pbnNvbW5pYS5rZWVwQXdha2UoKVxuICogICAudGhlbihcbiAqICAgICAoKSA9PiBjb25zb2xlLmxvZygnc3VjY2VzcycpLFxuICogICAgICgpID0+IGNvbnNvbGUubG9nKCdlcnJvcicpXG4gKiAgICk7XG4gKlxuICogdGhpcy5pbnNvbW5pYS5hbGxvd1NsZWVwQWdhaW4oKVxuICogICAudGhlbihcbiAqICAgICAoKSA9PiBjb25zb2xlLmxvZygnc3VjY2VzcycpLFxuICogICAgICgpID0+IGNvbnNvbGUubG9nKCdlcnJvcicpXG4gKiAgICk7XG4gKiBgYGBcbiAqXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSW5zb21uaWEnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1pbnNvbW5pYScsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuaW5zb21uaWEnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL0luc29tbmlhLVBob25lR2FwLVBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnRmlyZWZveCBPUycsICdpT1MnLCAnV2luZG93cycsICdXaW5kb3dzIFBob25lIDgnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5zb21uaWEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBLZWVwcyBhd2FrZSB0aGUgYXBwbGljYXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAga2VlcEF3YWtlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0aGUgYXBwbGljYXRpb24gdG8gc2xlZXAgYWdhaW5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYWxsb3dTbGVlcEFnYWluKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=