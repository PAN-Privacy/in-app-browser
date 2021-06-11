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
var WebServerOriginal = /** @class */ (function (_super) {
    __extends(WebServerOriginal, _super);
    function WebServerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebServerOriginal.prototype.start = function (port) { return cordova(this, "start", { "callbackOrder": "reverse" }, arguments); };
    WebServerOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    WebServerOriginal.prototype.onRequest = function () { return cordova(this, "onRequest", { "callbackOrder": "reverse", "observable": true, "clearFunction": "stop" }, arguments); };
    WebServerOriginal.prototype.sendResponse = function (requestId, responseObject) { return cordova(this, "sendResponse", {}, arguments); };
    WebServerOriginal.pluginName = "WebServer";
    WebServerOriginal.plugin = "cordova-plugin-webserver";
    WebServerOriginal.pluginRef = "window.webserver";
    WebServerOriginal.repo = "https://github.com/bykof/cordova-plugin-webserver.git";
    WebServerOriginal.platforms = ["Android", "iOS"];
    return WebServerOriginal;
}(IonicNativePlugin));
var WebServer = new WebServerOriginal();
export { WebServer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3dlYi1zZXJ2ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUErREgsNkJBQWlCOzs7O0lBUTlDLHlCQUFLLGFBQUMsSUFBYTtJQVFuQix3QkFBSTtJQWFKLDZCQUFTO0lBV1QsZ0NBQVksYUFBQyxTQUFpQixFQUFFLGNBQXdCOzs7Ozs7b0JBekcxRDtFQWlFK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZSB7XG4gIHN0YXR1czogbnVtYmVyO1xuICBib2R5Pzogc3RyaW5nO1xuICBwYXRoPzogc3RyaW5nO1xuICBoZWFkZXJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3Qge1xuICByZXF1ZXN0SWQ6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xuICBoZWFkZXJzOiBzdHJpbmc7XG4gIG1ldGhvZDogJ1BPU1QnIHwgJ0dFVCcgfCAnUFVUJyB8ICdQQVRDSCcgfCAnREVMRVRFJztcbiAgcGF0aDogc3RyaW5nO1xuICBxdWVyeTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIFdlYiBTZXJ2ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBzdGFydCBhIGxvY2FsIGR5bmFtaWMgY29udGVudCB3ZWIgc2VydmVyIGZvciBhbmRyb2lkIGFuZCBpT1MgZGV2aWNlcy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFdlYlNlcnZlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvd2ViLXNlcnZlci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHdlYlNlcnZlcjogV2ViU2VydmVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLndlYlNlcnZlci5vblJlcXVlc3QoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICogICBjb25zdCByZXM6IFJlc3BvbnNlID0ge1xuICogICAgIHN0YXR1czogMjAwLFxuICogICAgIGJvZHk6ICcnLFxuICogICAgIGhlYWRlcnM6IHtcbiAqICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9odG1sJ1xuICogICAgIH1cbiAqICAgfTtcbiAqXG4gKiAgIHRoaXMud2ViU2VydmVyLnNlbmRSZXNwb25zZShkYXRhLnJlcXVlc3RJZCwgcmVzKVxuICogICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICogfSk7XG4gKlxuICogdGhpcy53ZWJTZXJ2ZXIuc3RhcnQoODApXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICpcbiAqIEBpbnRlcmZhY2VzXG4gKiBSZXNwb25zZVxuICogUmVxdWVzdFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1dlYlNlcnZlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXdlYnNlcnZlcicsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy53ZWJzZXJ2ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2J5a29mL2NvcmRvdmEtcGx1Z2luLXdlYnNlcnZlci5naXQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViU2VydmVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBzdGFydCB5b3VyIHdlYnNlcnZlci5cbiAgICogQHBhcmFtIHBvcnQge251bWJlcn0gUG9ydCBudW1iZXIgKGRlZmF1bHQgdG8gODA4MClcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIHN0YXJ0KHBvcnQ/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIHN0b3AgeW91ciB3ZWJzZXJ2ZXIuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3AoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgcmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgc3RyZWFtcyBIVFRQIHJlcXVlc3RzIHRvIGFuIG9ic2VydmVyLlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFJlcXVlc3Q+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgdG8gcmVzb2x2ZSBhcyBhIFJlcXVlc3Qgb2JqZWN0XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3N0b3AnLFxuICB9KVxuICBvblJlcXVlc3QoKTogT2JzZXJ2YWJsZTxSZXF1ZXN0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHNlbmRzIGEgcmVzcG9uc2UgdG8gYSByZXF1ZXN0LlxuICAgKiBAcGFyYW0gcmVxdWVzdElkIHtzdHJpbmd9IFJlcXVlc3QgSUQgdG8gcmVzcG9uZCB0b1xuICAgKiBAcGFyYW0gcmVzcG9uc2VPYmplY3Qge1Jlc3BvbnNlfSBSZXNwb25zZSBvYmplY3RcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2VuZFJlc3BvbnNlKHJlcXVlc3RJZDogc3RyaW5nLCByZXNwb25zZU9iamVjdDogUmVzcG9uc2UpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19