import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var PhotoViewer = /** @class */ (function (_super) {
    __extends(PhotoViewer, _super);
    function PhotoViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhotoViewer.prototype.show = function (url, title, options) { return cordova(this, "show", { "sync": true }, arguments); };
    PhotoViewer.pluginName = "PhotoViewer";
    PhotoViewer.plugin = "com-sarriaroman-photoviewer";
    PhotoViewer.pluginRef = "PhotoViewer";
    PhotoViewer.repo = "https://github.com/sarriaroman/photoviewer";
    PhotoViewer.platforms = ["Android", "iOS"];
    PhotoViewer.decorators = [
        { type: Injectable }
    ];
    return PhotoViewer;
}(IonicNativePlugin));
export { PhotoViewer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Bob3RvLXZpZXdlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUF3RHZDLCtCQUFpQjs7OztJQVFoRCwwQkFBSSxhQUFDLEdBQVcsRUFBRSxLQUFjLEVBQUUsT0FBNEI7Ozs7Ozs7Z0JBVC9ELFVBQVU7O3NCQXhEWDtFQXlEaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQaG90b1ZpZXdlck9wdGlvbnMge1xuICAvKipcbiAgICogU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhlIHNoYXJlIGJ1dHRvbiAoQW5kcm9pZCBvbmx5KS4gRGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgc2hhcmU/OiBib29sZWFuO1xuICAvKipcbiAgICogQWRkIEhUVFAgaGVhZGVycyB0byB0aGUgcmVxdWVzdC4gIFVzZWZ1bCBmb3IgYXV0aGVudGljYXRlZCBwYWdlcy5cbiAgICogVGhlIHZhbHVlIGlzIGEgc3RyaW5nIGluIGEgSlNPTiBmb3JtYXQuICBEZWZhdWx0OiAnJ1xuICAgKi9cbiAgaGVhZGVycz86IHN0cmluZztcbiAgLyoqXG4gICAqIE9wdGlvbiBmb3IgY2xvc2UgYnV0dG9uIHZpc2liaWxpdHkgd2hlbiBzaGFyZSBmYWxzZSBbT05MWSBGT1IgaU9TXVxuICAgKi9cbiAgY2xvc2VCdXR0b24/OiBib29sZWFuO1xuICAvKipcbiAgICogSWYgeW91IG5lZWQgdG8gY29weSBpbWFnZSB0byByZWZlcmVuY2UgYmVmb3JlIHNob3cgdGhlbiBzZXQgaXQgdHJ1ZSBbT05MWSBGT1IgaU9TXVxuICAgKi9cbiAgY29weVRvUmVmZXJlbmNlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEVuYWJsZSBvciBEaXNhYmxlIFBpY2Fzc28gT3B0aW9ucyAoIE9ubHkgQW5kcm9pZCApOiBmaXQsIGNlbnRlckluc2lkZSwgY2VudGVyQ3JvcC5cbiAgICovXG4gIHBpY2Nhc29PcHRpb25zPzoge1xuICAgIGZpdD86IGJvb2xlYW47XG4gICAgY2VudGVySW5zaWRlPzogYm9vbGVhbjtcbiAgICBjZW50ZXJDcm9wPzogYm9vbGVhbjtcbiAgfTtcbn1cblxuLyoqXG4gKiBAbmFtZSBQaG90byBWaWV3ZXJcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIHBsdWdpbiBjYW4gZGlzcGxheSB5b3VyIGltYWdlIGluIGZ1bGwgc2NyZWVuIHdpdGggdGhlIGFiaWxpdHkgdG8gcGFuLCB6b29tLCBhbmQgc2hhcmUgdGhlIGltYWdlLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBQaG90b1ZpZXdlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvcGhvdG8tdmlld2VyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBwaG90b1ZpZXdlcjogUGhvdG9WaWV3ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMucGhvdG9WaWV3ZXIuc2hvdygnaHR0cHM6Ly9teXNpdGUuY29tL3BhdGgvdG8vaW1hZ2UuanBnJyk7XG4gKlxuICogdGhpcy5waG90b1ZpZXdlci5zaG93KCdodHRwczovL215c2l0ZS5jb20vcGF0aC90by9pbWFnZS5qcGcnLCAnTXkgaW1hZ2UgdGl0bGUnLCB7c2hhcmU6IGZhbHNlfSk7XG4gKlxuICogdGhpcy5waG90b1ZpZXdlci5zaG93KCdodHRwczovL215c2VjdXJlc2l0ZS5jb20vcGF0aC90by9pbWFnZS5qcGcnLCAnTXkgaW1hZ2UgdGl0bGUnLCB7c2hhcmU6IGZhbHNlLCBoZWFkZXJzOiAne3VzZXJuYW1lOmZvbyxwYXNzd29yZDpiYXJ9J30pO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUGhvdG9WaWV3ZXInLFxuICBwbHVnaW46ICdjb20tc2Fycmlhcm9tYW4tcGhvdG92aWV3ZXInLFxuICBwbHVnaW5SZWY6ICdQaG90b1ZpZXdlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc2Fycmlhcm9tYW4vcGhvdG92aWV3ZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGhvdG9WaWV3ZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTaG93cyBhbiBpbWFnZSBpbiBmdWxsIHNjcmVlblxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFVSTCBvciBwYXRoIHRvIGltYWdlXG4gICAqIEBwYXJhbSB0aXRsZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7UGhvdG9WaWV3ZXJPcHRpb25zfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNob3codXJsOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvcHRpb25zPzogUGhvdG9WaWV3ZXJPcHRpb25zKTogdm9pZCB7fVxufVxuIl19