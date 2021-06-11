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
var ForegroundServiceOriginal = /** @class */ (function (_super) {
    __extends(ForegroundServiceOriginal, _super);
    function ForegroundServiceOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ForegroundServiceOriginal.prototype.start = function (title, text, icon, importance, id) {
        if (importance === void 0) { importance = 1; }
        if (id === void 0) { id = 0; }
        return cordova(this, "start", { "sync": true }, arguments);
    };
    ForegroundServiceOriginal.prototype.stop = function () { return cordova(this, "stop", { "sync": true }, arguments); };
    ForegroundServiceOriginal.pluginName = "ForegroundService";
    ForegroundServiceOriginal.plugin = "cordova-plugin-foreground-service";
    ForegroundServiceOriginal.pluginRef = "cordova.plugins.foregroundService";
    ForegroundServiceOriginal.repo = "https://github.com/DavidBriglio/cordova-plugin-foreground-service";
    ForegroundServiceOriginal.platforms = ["Android"];
    return ForegroundServiceOriginal;
}(IonicNativePlugin));
var ForegroundService = new ForegroundServiceOriginal();
export { ForegroundService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZvcmVncm91bmQtc2VydmljZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnRGpDLHFDQUFpQjs7OztJQThCdEQsaUNBQUssYUFBQyxLQUFhLEVBQUUsSUFBWSxFQUFFLElBQWEsRUFBRSxVQUF5QixFQUFFLEVBQU07UUFBakMsMkJBQUEsRUFBQSxjQUF5QjtRQUFFLG1CQUFBLEVBQUEsTUFBTTs7O0lBVW5GLGdDQUFJOzs7Ozs7NEJBekZOO0VBaUR1QyxpQkFBaUI7U0FBM0MsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgRm9yZWdyb3VuZCBTZXJ2aWNlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyBmb3IgYW5kcm9pZCBkZXZpY2VzIHRvIGNvbnRpbnVlIHJ1bm5pbmcgc2VydmljZXMgaW4gdGhlIGJhY2tncm91bmQsIHVzaW5nIGFcbiAqIGZvcmVncm91bmQgb25nb2luZyBub3RpZmljYXRpb24uIFRoaXMgaXMgdGFyZ2V0ZWQgdG93YXJkcyB1c2Ugd2l0aCBwbHVnaW5zIHN1Y2ggYXNcbiAqICdjb3Jkb3ZhLWdlb2xvY2F0aW9uJyB0aGF0IHdpbGwgbm90IHJ1biB3aGlsZSB0aGUgYXBwIGlzIGluIHRoZSBiYWNrZ3JvdW5kIG9uIGFuZHJvaWQgQVBJIDI2Ky5cbiAqXG4gKiBGb3IgYW5kcm9pZCBBUEkgMjgrLCB0aGUgZm9sbG93aW5nIHhtbCBzbmlwcGV0IHNob3VsZCBiZSBpbnNlcnRlZCBpbnRvIGBgYGNvbmZpZy54bWxgYGA6XG4gKlxuICogYGBgXG4gKiAuLi5cbiAqIDxwbGF0Zm9ybSBuYW1lPVwiYW5kcm9pZFwiPlxuICogICA8Y29uZmlnLWZpbGUgcGFyZW50PVwiLypcIiB0YXJnZXQ9XCJBbmRyb2lkTWFuaWZlc3QueG1sXCI+XG4gKiAgICAgPHVzZXMtcGVybWlzc2lvbiBhbmRyb2lkOm5hbWU9XCJhbmRyb2lkLnBlcm1pc3Npb24uRk9SRUdST1VORF9TRVJWSUNFXCIgLz5cbiAqICAgPC9jb25maWctZmlsZT5cbiAqICAgLi4uXG4gKiBgYGBcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRm9yZWdyb3VuZFNlcnZpY2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZvcmVncm91bmQtc2VydmljZS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3RvcihwdWJsaWMgZm9yZWdyb3VuZFNlcnZpY2U6IEZvcmVncm91bmRTZXJ2aWNlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBzdGFydFNlcnZpY2UoKSB7XG4gKiAgLy8gTm90aWZpY2F0aW9uIGltcG9ydGFuY2UgaXMgb3B0aW9uYWwsIHRoZSBkZWZhdWx0IGlzIDEgLSBMb3cgKG5vIHNvdW5kIG9yIHZpYnJhdGlvbilcbiAqICB0aGlzLmZvcmVncm91bmRTZXJ2aWNlLnN0YXJ0KCdHUFMgUnVubmluZycsICdCYWNrZ3JvdW5kIFNlcnZpY2UnLCAnZHJhd2FibGUvZnNpY29uJyk7XG4gKiB9XG4gKlxuICogc3RvcFNlcnZpY2UoKSB7XG4gKiAgLy8gRGlzYWJsZSB0aGUgZm9yZWdyb3VuZCBzZXJ2aWNlXG4gKiAgdGhpcy5mb3JlZ3JvdW5kU2VydmljZS5zdG9wKCk7XG4gKiB9XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRm9yZWdyb3VuZFNlcnZpY2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1mb3JlZ3JvdW5kLXNlcnZpY2UnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuZm9yZWdyb3VuZFNlcnZpY2UnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJpZ2xpby9jb3Jkb3ZhLXBsdWdpbi1mb3JlZ3JvdW5kLXNlcnZpY2UnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JlZ3JvdW5kU2VydmljZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIGZvcmVncm91bmQgc2VydmljZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgKGNvbnRlbnQgdGl0bGUpIEEgYnJpZWYgaGVhZGxpbmUgZm9yIHRoZSBub3RpZmljYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgKGNvbnRlbnQgdGV4dCkgU3VwcG9ydGluZyBpbmZvcm1hdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWNvbiBUaGUgZHJhd2FibGUgaWNvbiBjYW4gYmUgYW55IGRyYXdhYmxlIGltYWdlIHRoYXQgZXhpc3RzIGluIHRoZSByZXNvdXJjZSBmb2xkZXIuIFRoaXMgbWVhbnMgeW91IG11c3QgY29weSB0aGUgaWNvbiB5b3Ugd2FudCB0byB1c2UgaW50byB0aGUgcGxhdGZvcm1zL2FuZHJvaWQvYXBwL3NyYy9tYWluL3Jlcy9kcmF3YWJsZSBmb2xkZXIgc2V0LiBJZiBubyBpY29uIGNhbiBiZSBmb3VuZCB1c2luZyB0aGUgaWNvbiBuYW1lIHBhcmFtZXRlciwgYSBkZWZhdWx0IHN0YXIgaWNvbiB3aWxsIGJlIHVzZWQuXG4gICAqXG4gICAqIEZvciBhbiBleGFtcGxlLCBpZiB0aGUgYGZzaWNvbi5wbmdgIChzZWUgeG1sIGJlbG93KSByZXNpZGVzIGhlcmU6IGBgYHNyYy9hc3NldHMvaWNvbi9mc2ljb24ucG5nYGBgLiBUaGVuIGBgYGljb25gYGAgcGFyYW1ldGVyIHZhbHVlIHdvdWxkIGJlIGBgYCdkcmF3YWJsZS9mc2ljb24nYGBgLiBJbiBvcmRlciBmb3IgdGhpcyBleGFtcGxlIHRvIHdvcmssIHRoZSBmb2xsb3dpbmcgeG1sIHNuaXBwZXQgbXVzdCBiZSBpbiBgYGBjb25maWcueG1sYGBgLlxuICAgKlxuICAgKiBgYGBcbiAgICogPHBsYXRmb3JtIG5hbWU9XCJhbmRyb2lkXCI+XG4gICAqICAgPHJlc291cmNlLWZpbGUgc3JjPVwid3d3L2Fzc2V0cy9pY29uL2ZzaWNvbi5wbmdcIiB0YXJnZXQ9XCJhcHAvc3JjL21haW4vcmVzL2RyYXdhYmxlL2ZzaWNvbi5wbmdcIiAvPlxuICAgKiAgIC4uLlxuICAgKiBgYGBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGltcG9ydGFuY2UgTm90aWZpY2F0aW9uIGltcG9ydGFuY2UgZGljdGF0ZXMgaG93IHRoZSBub3RpZmljYXRpb24gaXMgaW5pdGlhbGx5IHByZXNlbnRlZDpcbiAgICpcbiAgICogVmFsdWUgfCBJbXBvcnRhbmNlIHwgRGVzY3JpcHRpb24gfCBFeGFtcGxlc1xuICAgKiAtLS0gfCAtLS0gfCAtLS0gfCAtLS1cbiAgICogMXxJTVBPUlRBTkNFX0xPV3xEb2VzIG5vdCBtYWtlIGEgc291bmQgb3IgaGVhZHMtdXAgZGlzcGxheSAocGx1Z2luJ3MgZGVmYXVsdCl8TmV3IGNvbnRlbnQgdGhlIHVzZXIgaGFzIHN1YnNjcmliZWQgdG8sIHNvY2lhbCBuZXR3b3JrIGludml0YXRpb25zXG4gICAqIDJ8SU1QT1JUQU5DRV9ERUZBVUxUfE1ha2VzIGEgc291bmQsIGJ1dCBubyBoZWFkcy11cCBkaXNwbGF5fFRyYWZmaWMgYWxlcnRzLCB0YXNrIHJlbWluZGVyc1xuICAgKiAzfElNUE9SVEFOQ0VfSElHSHxNYWtlcyBhIHNvdW5kIGFuZCBoZWFkcy11cCBkaXNwbGF5fFRleHQgbWVzc2FnZXMsIGFsYXJtcywgcGhvbmUgY2FsbHNcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIFRoZSBub3RpZmljYXRpb24gaWQgaXMgYSBjdXN0b21pemFibGUgaW50ZWdlciB0aGF0IGlzIHVzZWQgdG8gcmVmZXJlbmNlIHRoZSBub3RpZmljYXRpb24gdGhhdCB3aWxsIGJlIGxhdW5jaGVkLiBUaGlzIGlzIGN1c3RvbWl6YWJsZSB0byBhdm9pZCBjb25mbGljdGluZyB3aXRoIGFueSBvdGhlciBub3RpZmljYXRpb25zLiBJZiB0aGlzIGlzIG5vdCBpbmNsdWRlZCwgYSBbKnVuaXF1ZSpdIGRlZmF1bHQgaWQgd2lsbCBiZSB1c2VkLlxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL3BsYXRmb3JtLWd1aWRhbmNlL2FuZHJvaWQtbm90aWZpY2F0aW9ucy5odG1sXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc3RhcnQodGl0bGU6IHN0cmluZywgdGV4dDogc3RyaW5nLCBpY29uPzogc3RyaW5nLCBpbXBvcnRhbmNlOiAxIHwgMiB8IDMgPSAxLCBpZCA9IDApOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGZvcmVncm91bmQgc2VydmljZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHN0b3AoKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=