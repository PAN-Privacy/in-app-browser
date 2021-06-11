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
var InstagramOriginal = /** @class */ (function (_super) {
    __extends(InstagramOriginal, _super);
    function InstagramOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstagramOriginal.prototype.isInstalled = function () { return cordova(this, "isInstalled", { "callbackStyle": "node" }, arguments); };
    InstagramOriginal.prototype.share = function (canvasIdOrDataUrl, caption) { return cordova(this, "share", { "callbackStyle": "node" }, arguments); };
    InstagramOriginal.prototype.shareAsset = function (assetLocalIdentifier) { return cordova(this, "shareAsset", { "callbackOrder": "reverse" }, arguments); };
    InstagramOriginal.pluginName = "Instagram";
    InstagramOriginal.plugin = "cordova-instagram-plugin";
    InstagramOriginal.pluginRef = "Instagram";
    InstagramOriginal.repo = "https://github.com/vstirbu/InstagramPlugin";
    InstagramOriginal.platforms = ["Android", "iOS"];
    return InstagramOriginal;
}(IonicNativePlugin));
var Instagram = new InstagramOriginal();
export { Instagram };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luc3RhZ3JhbS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE0QnpDLDZCQUFpQjs7OztJQVM5QywrQkFBVztJQWVYLHlCQUFLLGFBQUMsaUJBQXlCLEVBQUUsT0FBZ0I7SUFZakQsOEJBQVUsYUFBQyxvQkFBNEI7Ozs7OztvQkFqRXpDO0VBNkIrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEluc3RhZ3JhbVxuICogQGRlc2NyaXB0aW9uIFNoYXJlIGEgcGhvdG8gd2l0aCB0aGUgaW5zdGFncmFtIGFwcFxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW5zdGFncmFtIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pbnN0YWdyYW0vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGluc3RhZ3JhbTogSW5zdGFncmFtKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmluc3RhZ3JhbS5zaGFyZSgnZGF0YTppbWFnZS9wbmc7dWhkdWhmM2hmaWYzMycsICdDYXB0aW9uJylcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ1NoYXJlZCEnKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSW5zdGFncmFtJyxcbiAgcGx1Z2luOiAnY29yZG92YS1pbnN0YWdyYW0tcGx1Z2luJyxcbiAgcGx1Z2luUmVmOiAnSW5zdGFncmFtJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92c3RpcmJ1L0luc3RhZ3JhbVBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbnN0YWdyYW0gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBEZXRlY3QgaWYgdGhlIEluc3RhZ3JhbSBhcHBsaWNhdGlvbiBpcyBpbnN0YWxsZWQgb24gdGhlIGRldmljZS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbnxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJldHVybnMgYSBib29sZWFuIHZhbHVlIGlmIGluc3RhbGxlZCwgb3IgdGhlIGFwcCB2ZXJzaW9uIG9uIGFuZHJvaWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZScsXG4gIH0pXG4gIGlzSW5zdGFsbGVkKCk6IFByb21pc2U8Ym9vbGVhbiB8IHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZSBhbiBpbWFnZSBvbiBJbnN0YWdyYW1cbiAgICogTm90ZTogSW5zdGFncmFtIGFwcCBzdG9wcGVkIGFjY2VwdGluZyBwcmUtZmlsbGVkIGNhcHRpb25zIG9uIGJvdGggaU9TIGFuZCBBbmRyb2lkLiBBcyBhIHdvcmstYXJvdW5kLCB0aGUgY2FwdGlvbiBpcyBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZC4gWW91IGhhdmUgdG8gaW5mb3JtIHlvdXIgdXNlcnMgdG8gcGFzdGUgdGhlIGNhcHRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBjYW52YXNJZE9yRGF0YVVybCBUaGUgY2FudmFzIGVsZW1lbnQgaWQgb3IgdGhlIGRhdGFVUkwgb2YgdGhlIGltYWdlIHRvIHNoYXJlXG4gICAqIEBwYXJhbSBjYXB0aW9uIFRoZSBjYXB0aW9uIG9mIHRoZSBpbWFnZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGlmIHRoZSBpbWFnZSB3YXMgc2hhcmVkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ25vZGUnLFxuICB9KVxuICBzaGFyZShjYW52YXNJZE9yRGF0YVVybDogc3RyaW5nLCBjYXB0aW9uPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmUgYSBsaWJyYXJ5IGFzc2V0IG9yIHZpZGVvXG4gICAqIEBwYXJhbSBhc3NldExvY2FsSWRlbnRpZmllciBBIGxvY2FsIGZpbGVVUklcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBpZiB0aGUgaW1hZ2Ugd2FzIHNoYXJlZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgc2hhcmVBc3NldChhc3NldExvY2FsSWRlbnRpZmllcjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==