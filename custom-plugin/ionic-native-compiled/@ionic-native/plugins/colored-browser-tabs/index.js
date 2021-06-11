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
var ColoredBrowserTabsOriginal = /** @class */ (function (_super) {
    __extends(ColoredBrowserTabsOriginal, _super);
    function ColoredBrowserTabsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColoredBrowserTabsOriginal.prototype.openTab = function (url, color) { return cordova(this, "openTab", { "observable": true, "successIndex": 2, "errorIndex": 3 }, arguments); };
    ColoredBrowserTabsOriginal.prototype.openTabWithAnimation = function (url, anim, color) { return cordova(this, "openTabWithAnimation", { "observable": true, "successIndex": 3, "errorIndex": 4 }, arguments); };
    ColoredBrowserTabsOriginal.pluginName = "ColoredBrowserTabs";
    ColoredBrowserTabsOriginal.plugin = "cordova-plugin-colored-browser-tabs";
    ColoredBrowserTabsOriginal.pluginRef = "ColoredBrowserTabs";
    ColoredBrowserTabsOriginal.repo = "https://github.com/TobyEb/cordova-plugin-colored-browser-tabs";
    ColoredBrowserTabsOriginal.platforms = ["Android", "iOS"];
    return ColoredBrowserTabsOriginal;
}(IonicNativePlugin));
var ColoredBrowserTabs = new ColoredBrowserTabsOriginal();
export { ColoredBrowserTabs };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NvbG9yZWQtYnJvd3Nlci10YWJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBaUNNLHNDQUFpQjs7OztJQVF2RCxvQ0FBTyxhQUFDLEdBQVcsRUFBRSxLQUFjO0lBWW5DLGlEQUFvQixhQUFDLEdBQVcsRUFBRSxJQUFZLEVBQUUsS0FBYzs7Ozs7OzZCQXZEaEU7RUFtQ3dDLGlCQUFpQjtTQUE1QyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBDb2xvcmVkIEJyb3dzZXIgVGFic1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBvcGVucyBDaHJvbWUgQ3VzdG9tIFRhYnMgb24gQW5kcm9pZCBvciBTYWZhcmlWaWV3Q29udHJvbGxlciBvbiBpT1NcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvbG9yZWRCcm93c2VyVGFicyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29sb3JlZC1icm93c2VyLXRhYnMvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBicm93c2VyVGFiczogQ29sb3JlZEJyb3dzZXJUYWJzKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5icm93c2VyVGFicy5vcGVuVGFiKCd3d3cuZXhhbXBsZS51cmwnLCAnI2ZmZmZmZicpXG4gKiAgIC5zdWJzY3JpYmUoKVxuICpcbiAqIHRoaXMuYnJvd3NlclRhYnMub3BlblRhYldpdGhBbmltYXRpb24oJ3d3dy5leGFtcGxlLnVybCcsICdzbGlkZV94JywgJyNmZmZmZmYnKVxuICogICAuc3Vic2NyaWJlKClcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDb2xvcmVkQnJvd3NlclRhYnMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jb2xvcmVkLWJyb3dzZXItdGFicycsXG4gIHBsdWdpblJlZjogJ0NvbG9yZWRCcm93c2VyVGFicycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVG9ieUViL2NvcmRvdmEtcGx1Z2luLWNvbG9yZWQtYnJvd3Nlci10YWJzJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbG9yZWRCcm93c2VyVGFicyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENhbGwgdGhpcyBtZXRob2QgdG8gb3BlbiB0aGUgdGFiXG4gICAqIEBwYXJhbSB1cmwgLSB0aGUgdXJsIHlvdSB3YW50IHRvIG9wZW5cbiAgICogQHBhcmFtIGNvbG9yIC0gdGhlIGNvbG9yIHdpdGggd2hpY2ggeW91IHdhbnQgdG8gZGVmaW5lIHRoZSB0b29sYmFyIGNvbG9yXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhIE9ic2VydmFibGUgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUsIHN1Y2Nlc3NJbmRleDogMiwgZXJyb3JJbmRleDogMyB9KVxuICBvcGVuVGFiKHVybDogc3RyaW5nLCBjb2xvcj86IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBDYWxsIHRoaXMgbWV0aG9kIHRvIG9wZW4gdGhlIHRhYlxuICAgKiBAcGFyYW0gdXJsIC0gdGhlIHVybCB5b3Ugd2FudCB0byBvcGVuXG4gICAqIEBwYXJhbSBhbmltIC0gdGhlIGFuaW1hdGlvbiB5b3Ugd2FudCBmb3IgZW50ZXIgYW5kIGV4aXQsIHlvdSBjYW4gY2hvb3NlIGJldHdlZW4gc2xpZGVfeCAvIHNsaWRlX3kgYW5kIGZhZGVcbiAgICogICAgICAgIG9ubHkgd29ya3MgaW4gQW5kcm9pZCwgaU9TIGp1c3Qgc2hvd3MgdGhlIGRlZmF1bHQgYW5pbWF0aW9uXG4gICAqIEBwYXJhbSBjb2xvciAtIHRoZSBjb2xvciB3aXRoIHdoaWNoIHlvdSB3YW50IHRvIGRlZmluZSB0aGUgdG9vbGJhciBjb2xvclxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYSBPYnNlcnZhYmxlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlLCBzdWNjZXNzSW5kZXg6IDMsIGVycm9ySW5kZXg6IDQgfSlcbiAgb3BlblRhYldpdGhBbmltYXRpb24odXJsOiBzdHJpbmcsIGFuaW06IHN0cmluZywgY29sb3I/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19