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
var VideoPlayerOriginal = /** @class */ (function (_super) {
    __extends(VideoPlayerOriginal, _super);
    function VideoPlayerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoPlayerOriginal.prototype.play = function (fileUrl, options) { return cordova(this, "play", {}, arguments); };
    VideoPlayerOriginal.prototype.close = function () { return cordova(this, "close", { "sync": true }, arguments); };
    VideoPlayerOriginal.pluginName = "VideoPlayer";
    VideoPlayerOriginal.plugin = "https://github.com/moust/cordova-plugin-videoplayer.git";
    VideoPlayerOriginal.pluginRef = "VideoPlayer";
    VideoPlayerOriginal.repo = "https://github.com/moust/cordova-plugin-videoplayer";
    VideoPlayerOriginal.platforms = ["Android"];
    return VideoPlayerOriginal;
}(IonicNativePlugin));
var VideoPlayer = new VideoPlayerOriginal();
export { VideoPlayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3ZpZGVvLXBsYXllci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFvRHZDLCtCQUFpQjs7OztJQVFoRCwwQkFBSSxhQUFDLE9BQWUsRUFBRSxPQUFzQjtJQVE1QywyQkFBSzs7Ozs7O3NCQXJFUDtFQXFEaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBPcHRpb25zIGZvciB0aGUgdmlkZW8gcGxheWJhY2sgdXNpbmcgdGhlIGBwbGF5YCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWaWRlb09wdGlvbnMge1xuICAvKipcbiAgICogU2V0IHRoZSBpbml0aWFsIHZvbHVtZSBvZiB0aGUgdmlkZW8gcGxheWJhY2ssIHdoZXJlIDAuMCBpcyAwJSB2b2x1bWUgYW5kIDEuMCBpcyAxMDAlLlxuICAgKiBGb3IgZXhhbXBsZTogZm9yIGEgdm9sdW1lIG9mIDMwJSBzZXQgdGhlIHZhbHVlIHRvIDAuMy5cbiAgICovXG4gIHZvbHVtZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZXJlIGFyZSB0d28gb3B0aW9ucyBmb3IgdGhlIHNjYWxpbmcgbW9kZS4gU0NBTEVfVE9fRklUIHdoaWNoIGlzIGRlZmF1bHQgYW5kIFNDQUxFX1RPX0ZJVF9XSVRIX0NST1BQSU5HLlxuICAgKiBUaGVzZSBzdHJpbmdzIGFyZSB0aGUgb25seSBvbmVzIHdoaWNoIGNhbiBiZSBwYXNzZWQgYXMgb3B0aW9uLlxuICAgKi9cbiAgc2NhbGluZ01vZGU/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgVmlkZW8gUGxheWVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgQ29yZG92YSBwbHVnaW4gdGhhdCBzaW1wbHkgYWxsb3dzIHlvdSB0byBpbW1lZGlhdGVseSBwbGF5IGEgdmlkZW8gaW4gZnVsbHNjcmVlbiBtb2RlLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29tLm1vdXN0LmNvcmRvdmEudmlkZW9wbGF5ZXJgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbVmlkZW9QbGF5ZXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3VzdC9jb3Jkb3ZhLXBsdWdpbi12aWRlb3BsYXllcikuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBWaWRlb1BsYXllciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdmlkZW8tcGxheWVyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB2aWRlb1BsYXllcjogVmlkZW9QbGF5ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIFBsYXlpbmcgYSB2aWRlby5cbiAqIHRoaXMudmlkZW9QbGF5ZXIucGxheSgnZmlsZTovLy9hbmRyb2lkX2Fzc2V0L3d3dy9tb3ZpZS5tcDQnKS50aGVuKCgpID0+IHtcbiAqICBjb25zb2xlLmxvZygndmlkZW8gY29tcGxldGVkJyk7XG4gKiB9KS5jYXRjaChlcnIgPT4ge1xuICogIGNvbnNvbGUubG9nKGVycik7XG4gKiB9KTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBWaWRlb09wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdWaWRlb1BsYXllcicsXG4gIHBsdWdpbjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tb3VzdC9jb3Jkb3ZhLXBsdWdpbi12aWRlb3BsYXllci5naXQnLFxuICBwbHVnaW5SZWY6ICdWaWRlb1BsYXllcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbW91c3QvY29yZG92YS1wbHVnaW4tdmlkZW9wbGF5ZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWaWRlb1BsYXllciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFBsYXlzIHRoZSB2aWRlbyBmcm9tIHRoZSBwYXNzZWQgdXJsLlxuICAgKiBAcGFyYW0gZmlsZVVybCB7c3RyaW5nfSBGaWxlIHVybCB0byB0aGUgdmlkZW8uXG4gICAqIEBwYXJhbSBvcHRpb25zIHtWaWRlb09wdGlvbnM/fSBPcHRpb25hbCB2aWRlbyBwbGF5YmFjayBzZXR0aW5ncy4gU2VlIG9wdGlvbnMgYWJvdmUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIHByb21pc2Ugd2hlbiB0aGUgdmlkZW8gd2FzIHBsYXllZCBzdWNjZXNzZnVsbHkuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBsYXkoZmlsZVVybDogc3RyaW5nLCBvcHRpb25zPzogVmlkZW9PcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgdGhlIHZpZGVvIHBsYXliYWNrIGltbWVkaWF0bHkuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY2xvc2UoKTogdm9pZCB7fVxufVxuIl19