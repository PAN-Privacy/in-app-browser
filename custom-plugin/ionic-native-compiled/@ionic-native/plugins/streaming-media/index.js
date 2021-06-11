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
var StreamingMediaOriginal = /** @class */ (function (_super) {
    __extends(StreamingMediaOriginal, _super);
    function StreamingMediaOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StreamingMediaOriginal.prototype.playVideo = function (videoUrl, options) { return cordova(this, "playVideo", { "sync": true }, arguments); };
    StreamingMediaOriginal.prototype.playAudio = function (audioUrl, options) { return cordova(this, "playAudio", { "sync": true }, arguments); };
    StreamingMediaOriginal.prototype.stopAudio = function () { return cordova(this, "stopAudio", { "sync": true }, arguments); };
    StreamingMediaOriginal.prototype.pauseAudio = function () { return cordova(this, "pauseAudio", { "sync": true, "platforms": ["iOS"] }, arguments); };
    StreamingMediaOriginal.prototype.resumeAudio = function () { return cordova(this, "resumeAudio", { "sync": true, "platforms": ["iOS"] }, arguments); };
    StreamingMediaOriginal.pluginName = "StreamingMedia";
    StreamingMediaOriginal.plugin = "cordova-plugin-streaming-media";
    StreamingMediaOriginal.pluginRef = "plugins.streamingMedia";
    StreamingMediaOriginal.repo = "https://github.com/nchutchind/cordova-plugin-streaming-media";
    StreamingMediaOriginal.platforms = ["Amazon Fire OS", "Android", "iOS"];
    return StreamingMediaOriginal;
}(IonicNativePlugin));
var StreamingMedia = new StreamingMediaOriginal();
export { StreamingMedia };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N0cmVhbWluZy1tZWRpYS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpRnBDLGtDQUFpQjs7OztJQU9uRCxrQ0FBUyxhQUFDLFFBQWdCLEVBQUUsT0FBK0I7SUFRM0Qsa0NBQVMsYUFBQyxRQUFnQixFQUFFLE9BQStCO0lBTTNELGtDQUFTO0lBTVQsbUNBQVU7SUFNVixvQ0FBVzs7Ozs7O3lCQW5IYjtFQWtGb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBPYmplY3Qgb2Ygb3B0aW9ucyB0byBwYXNzIGludG8gdGhlIHBsYXlWaWRlbyBtZXRob2QuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWFtaW5nVmlkZW9PcHRpb25zIHtcbiAgLyoqIEV4ZWN1dGVzIGFmdGVyIHN1Y2Nlc3MgcGxheWluZyBhdWRpby4gKi9cbiAgc3VjY2Vzc0NhbGxiYWNrPzogRnVuY3Rpb247XG4gIC8qKiBFeGVjdXRlcyBhZnRlciBlcnJvciBwbGF5aW5nIHZpZGVvLiAqL1xuICBlcnJvckNhbGxiYWNrPzogRnVuY3Rpb247XG4gIC8qKiBGb3JjZSBvbmUgb3JpZW50YXRpb24gZm9yIHBsYXlpbmcgdmlkZW8uICovXG4gIG9yaWVudGF0aW9uPzogc3RyaW5nO1xuICAvKiogU2hvdWxkIHRoZSB2aWRlbyBjbG9zZSBhZnRlciBpdCdzIG92ZXIuIERlZmF1bHRzIHRvIHRydWUuICovXG4gIHNob3VsZEF1dG9DbG9zZT86IGJvb2xlYW47XG4gIC8qKiBTaG91bGQgdGhlIHZpZGVvIGhhdmUgY29udHJvbHMuIERlZmF1bHRzIHRvIHRydWUuIEFuZHJvaWQgb25seS4gKi9cbiAgY29udHJvbHM/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIE9iamVjdCBvZiBvcHRpb25zIHRvIHBhc3MgaW50byB0aGUgcGxheUF1ZGlvIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdHJlYW1pbmdBdWRpb09wdGlvbnMge1xuICAvKiogQmFja2dyb3VuZCBjb2xvciBmb3IgYXVkaW8gcGxheWVyLiAqL1xuICBiZ0NvbG9yPzogc3RyaW5nO1xuICAvKiogQmFja2dyb3VuZCBpbWFnZSBmb3IgYXVkaW8gcGxheWVyLiAqL1xuICBiZ0ltYWdlPzogc3RyaW5nO1xuICAvKipcbiAgICogQmFja2dyb3VuZCBpbWFnZSBzY2FsZSBmb3IgYXVkaW8gcGxheWVyLlxuICAgKiBWYWxpZCB2YWx1ZXMgYXJlOlxuICAgKiBmaXRcbiAgICogc3RyZXRjaFxuICAgKiBhc3BlY3RTdHJldGNoLlxuICAgKi9cbiAgYmdJbWFnZVNjYWxlPzogc3RyaW5nO1xuICAvKiogU3RhcnQgYXVkaW8gcGxheWVyIGluIGZ1bGwgc2NyZWVuLiBpT1Mgb25seS4gKi9cbiAgaW5pdEZ1bGxzY3JlZW4/OiBib29sZWFuO1xuICAvKipcbiAgICogS2VlcHMgdGhlIHNjcmVlbiBsaXQgYW5kIHN0b3BzIGl0IGZyb20gbG9ja2luZ1xuICAgKiB3aGlsZSBhdWRpbyBpcyBwbGF5aW5nLiBBbmRyb2lkIG9ubHkuXG4gICAqL1xuICBrZWVwQXdha2U/OiBib29sZWFuO1xuICAvKiogRXhlY3V0ZXMgYWZ0ZXIgc3VjY2VzcyBwbGF5aW5nIGF1ZGlvLiAqL1xuICBzdWNjZXNzQ2FsbGJhY2s/OiBGdW5jdGlvbjtcbiAgLyoqIEV4ZWN1dGVzIGFmdGVyIGVycm9yIHBsYXlpbmcgYXVkaW8uICovXG4gIGVycm9yQ2FsbGJhY2s/OiBGdW5jdGlvbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBTdHJlYW1pbmcgTWVkaWFcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBzdHJlYW0gYXVkaW8gYW5kIHZpZGVvIGluIGEgZnVsbHNjcmVlbiwgbmF0aXZlIHBsYXllciBvbiBpT1MgYW5kIEFuZHJvaWQuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTdHJlYW1pbmdNZWRpYSwgU3RyZWFtaW5nVmlkZW9PcHRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdHJlYW1pbmctbWVkaWEvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cmVhbWluZ01lZGlhOiBTdHJlYW1pbmdNZWRpYSkgeyB9XG4gKlxuICogbGV0IG9wdGlvbnM6IFN0cmVhbWluZ1ZpZGVvT3B0aW9ucyA9IHtcbiAqICAgc3VjY2Vzc0NhbGxiYWNrOiAoKSA9PiB7IGNvbnNvbGUubG9nKCdWaWRlbyBwbGF5ZWQnKSB9LFxuICogICBlcnJvckNhbGxiYWNrOiAoZSkgPT4geyBjb25zb2xlLmxvZygnRXJyb3Igc3RyZWFtaW5nJykgfSxcbiAqICAgb3JpZW50YXRpb246ICdsYW5kc2NhcGUnLFxuICogICBzaG91bGRBdXRvQ2xvc2U6IHRydWUsXG4gKiAgIGNvbnRyb2xzOiBmYWxzZVxuICogfTtcbiAqXG4gKiB0aGlzLnN0cmVhbWluZ01lZGlhLnBsYXlWaWRlbygnaHR0cHM6Ly9wYXRoL3RvL3ZpZGVvL3N0cmVhbScsIG9wdGlvbnMpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIFN0cmVhbWluZ1ZpZGVvT3B0aW9uc1xuICogU3RyZWFtaW5nQXVkaW9PcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU3RyZWFtaW5nTWVkaWEnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zdHJlYW1pbmctbWVkaWEnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLnN0cmVhbWluZ01lZGlhJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9uY2h1dGNoaW5kL2NvcmRvdmEtcGx1Z2luLXN0cmVhbWluZy1tZWRpYScsXG4gIHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJlYW1pbmdNZWRpYSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFN0cmVhbXMgYSB2aWRlb1xuICAgKiBAcGFyYW0gdmlkZW9Vcmwge3N0cmluZ30gVGhlIFVSTCBvZiB0aGUgdmlkZW9cbiAgICogQHBhcmFtIG9wdGlvbnMge1N0cmVhbWluZ1ZpZGVvT3B0aW9uc30gT3B0aW9uc1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHBsYXlWaWRlbyh2aWRlb1VybDogc3RyaW5nLCBvcHRpb25zPzogU3RyZWFtaW5nVmlkZW9PcHRpb25zKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTdHJlYW1zIGFuIGF1ZGlvXG4gICAqIEBwYXJhbSBhdWRpb1VybCB7c3RyaW5nfSBUaGUgVVJMIG9mIHRoZSBhdWRpbyBzdHJlYW1cbiAgICogQHBhcmFtIG9wdGlvbnMge1N0cmVhbWluZ0F1ZGlvT3B0aW9uc30gT3B0aW9uc1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHBsYXlBdWRpbyhhdWRpb1VybDogc3RyaW5nLCBvcHRpb25zPzogU3RyZWFtaW5nQXVkaW9PcHRpb25zKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTdG9wcyBzdHJlYW1pbmcgYXVkaW9cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzdG9wQXVkaW8oKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBQYXVzZXMgc3RyZWFtaW5nIGF1ZGlvXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUsIHBsYXRmb3JtczogWydpT1MnXSB9KVxuICBwYXVzZUF1ZGlvKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVzdW1lcyBzdHJlYW1pbmcgYXVkaW9cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSwgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIHJlc3VtZUF1ZGlvKCk6IHZvaWQge31cbn1cbiJdfQ==