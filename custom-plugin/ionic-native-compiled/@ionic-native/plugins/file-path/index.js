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
var FilePathOriginal = /** @class */ (function (_super) {
    __extends(FilePathOriginal, _super);
    function FilePathOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilePathOriginal.prototype.resolveNativePath = function (path) { return cordova(this, "resolveNativePath", {}, arguments); };
    FilePathOriginal.pluginName = "FilePath";
    FilePathOriginal.plugin = "cordova-plugin-filepath";
    FilePathOriginal.pluginRef = "window.FilePath";
    FilePathOriginal.repo = "https://github.com/hiddentao/cordova-plugin-filepath";
    FilePathOriginal.platforms = ["Android"];
    return FilePathOriginal;
}(IonicNativePlugin));
var FilePath = new FilePathOriginal();
export { FilePath };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtcGF0aC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpQzFDLDRCQUFpQjs7OztJQU83QyxvQ0FBaUIsYUFBQyxJQUFZOzs7Ozs7bUJBekNoQztFQWtDOEIsaUJBQWlCO1NBQWxDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcblxuLyoqXG4gKiBAbmFtZSBGaWxlIFBhdGhcbiAqIEBwcmVtaWVyIGZpbGVzeXN0ZW1cbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gcmVzb2x2ZSB0aGUgbmF0aXZlIGZpbGVzeXN0ZW0gcGF0aCBmb3IgQW5kcm9pZCBjb250ZW50IFVSSXMgYW5kIGlzIGJhc2VkIG9uIGNvZGUgaW4gdGhlIGFGaWxlQ2hvb3NlciBsaWJyYXJ5LlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmlsZVBhdGggfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZpbGUtcGF0aC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZVBhdGg6IEZpbGVQYXRoKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZpbGVQYXRoLnJlc29sdmVOYXRpdmVQYXRoKHBhdGgpXG4gKiAgIC50aGVuKGZpbGVQYXRoID0+IGNvbnNvbGUubG9nKGZpbGVQYXRoKSlcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGaWxlUGF0aCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGVwYXRoJyxcbiAgcGx1Z2luUmVmOiAnd2luZG93LkZpbGVQYXRoJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9oaWRkZW50YW8vY29yZG92YS1wbHVnaW4tZmlsZXBhdGgnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlUGF0aCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFJlc29sdmUgbmF0aXZlIHBhdGggZm9yIGdpdmVuIGNvbnRlbnQgVVJML3BhdGguXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICBDb250ZW50IFVSTC9wYXRoLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXNvbHZlTmF0aXZlUGF0aChwYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19