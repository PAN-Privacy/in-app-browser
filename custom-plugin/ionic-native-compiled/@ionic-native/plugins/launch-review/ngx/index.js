import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var LaunchReview = /** @class */ (function (_super) {
    __extends(LaunchReview, _super);
    function LaunchReview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LaunchReview.prototype.launch = function (appId) { return cordova(this, "launch", { "platforms": ["Android", "iOS"], "callbackOrder": "reverse" }, arguments); };
    LaunchReview.prototype.rating = function () { return cordova(this, "rating", { "observable": true }, arguments); };
    LaunchReview.prototype.isRatingSupported = function () { return cordova(this, "isRatingSupported", { "platforms": ["Android", "iOS"], "sync": true }, arguments); };
    LaunchReview.pluginName = "LaunchReview";
    LaunchReview.plugin = "cordova-launch-review";
    LaunchReview.pluginRef = "LaunchReview";
    LaunchReview.repo = "https://github.com/dpa99c/cordova-launch-review";
    LaunchReview.platforms = ["Android", "iOS"];
    LaunchReview.decorators = [
        { type: Injectable }
    ];
    return LaunchReview;
}(IonicNativePlugin));
export { LaunchReview };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xhdW5jaC1yZXZpZXcvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFtQ0EsZ0NBQWlCOzs7O0lBVWpELDZCQUFNLGFBQUMsS0FBYztJQWNyQiw2QkFBTTtJQVVOLHdDQUFpQjs7Ozs7OztnQkFuQ2xCLFVBQVU7O3VCQXBDWDtFQXFDa0MsaUJBQWlCO1NBQXRDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBMYXVuY2ggUmV2aWV3XG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBBc3Npc3RzIGluIGxlYXZpbmcgdXNlciByZXZpZXdzL3JhdGluZ3MgaW4gdGhlIEFwcCBTdG9yZXMuXG4gKiAtIExhdW5jaGVzIHRoZSBwbGF0Zm9ybSdzIEFwcCBTdG9yZSBwYWdlIGZvciB0aGUgY3VycmVudCBhcHAgaW4gb3JkZXIgZm9yIHRoZSB1c2VyIHRvIGxlYXZlIGEgcmV2aWV3LlxuICogLSBPbiBpT1MgKDEwLjMgYW5kIGFib3ZlKSBpbnZva2VzIHRoZSBuYXRpdmUgaW4tYXBwIHJhdGluZyBkaWFsb2cgd2hpY2ggYWxsb3dzIGEgdXNlciB0byByYXRlIHlvdXIgYXBwIHdpdGhvdXQgbmVlZGluZyB0byBvcGVuIHRoZSBBcHAgU3RvcmUuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBMYXVuY2hSZXZpZXcgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2xhdW5jaC1yZXZpZXcvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhdW5jaFJldmlldzogTGF1bmNoUmV2aWV3KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmxhdW5jaFJldmlldy5sYXVuY2goKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IGxhdW5jaGVkIHN0b3JlIGFwcCcpKTtcbiAqXG4gKiBpZih0aGlzLmxhdW5jaFJldmlldy5pc1JhdGluZ1N1cHBvcnRlZCgpKXtcbiAqICAgdGhpcy5sYXVuY2hSZXZpZXcucmF0aW5nKClcbiAqICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IGxhdW5jaGVkIHJhdGluZyBkaWFsb2cnKSk7XG4gKiB9XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdMYXVuY2hSZXZpZXcnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLWxhdW5jaC1yZXZpZXcnLFxuICBwbHVnaW5SZWY6ICdMYXVuY2hSZXZpZXcnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2RwYTk5Yy9jb3Jkb3ZhLWxhdW5jaC1yZXZpZXcnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGF1bmNoUmV2aWV3IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogTGF1bmNoZXMgQXBwIFN0b3JlIG9uIGN1cnJlbnQgcGxhdGZvcm0gaW4gb3JkZXIgdG8gbGVhdmUgYSByZXZpZXcgZm9yIGdpdmVuIGFwcC5cbiAgICogQHBhcmFtIGFwcElkIHtzdHJpbmd9IC0gKG9wdGlvbmFsKSB0aGUgcGxhdGZvcm0tc3BlY2lmaWMgYXBwIElEIHRvIHVzZSB0byBvcGVuIHRoZSBwYWdlIGluIHRoZSBzdG9yZSBhcHAuXG4gICAqIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBwbHVnaW4gd2lsbCB1c2UgdGhlIGFwcCBJRCBmb3IgdGhlIGFwcCBpbiB3aGljaCB0aGUgcGx1Z2luIGlzIGNvbnRhaW5lZC5cbiAgICogT24gQW5kcm9pZCB0aGlzIGlzIHRoZSBmdWxsIHBhY2thZ2UgbmFtZSBvZiB0aGUgYXBwLiBGb3IgZXhhbXBsZSwgZm9yIEdvb2dsZSBNYXBzOiBgY29tLmdvb2dsZS5hbmRyb2lkLmFwcHMubWFwc2BcbiAgICogT24gaU9TIHRoaXMgaXMgdGhlIEFwcGxlIElEIG9mIHRoZSBhcHAuIEZvciBleGFtcGxlLCBmb3IgR29vZ2xlIE1hcHM6IGA1ODUwMjczNTRgXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGxhdW5jaChhcHBJZD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VzIHRoZSBuYXRpdmUgaW4tYXBwIHJhdGluZyBkaWFsb2cgd2hpY2ggYWxsb3dzIGEgdXNlciB0byByYXRlIHlvdXIgYXBwIHdpdGhvdXQgbmVlZGluZyB0byBvcGVuIHRoZSBBcHAgU3RvcmUuXG4gICAqIFJlcXVpcmVzIGlPUyAxMC4zIGFuZCBhYm92ZTogQ2FsbGluZyB0aGlzIG9uIGFueSBwbGF0Zm9ybS92ZXJzaW9uIG90aGVyIHRoYW4gaU9TIDEwLjMrIHdpbGwgcmVzdWx0IGluIHRoZSBlcnJvciBjYWxsYmFjay5cbiAgICogU3VjY2VzcyBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB1cCB0byAzIHRpbWVzOlxuICAgKiAtIEZpcnN0OiBhZnRlciBgTGF1bmNoUmV2aWV3LnJhdGluZygpYCBpcyBjYWxsZWQgYW5kIHRoZSByZXF1ZXN0IHRvIHNob3cgdGhlIGRpYWxvZyBpcyBzdWNjZXNzZnVsLiBXaWxsIGJlIHBhc3NlZCB0aGUgdmFsdWUgYHJlcXVlc3RlZGAuXG4gICAqIC0gU2Vjb25kOiBpZiBhbmQgd2hlbiB0aGUgUmF0aW5nIGRpYWxvZyBpcyBhY3R1YWxseSBkaXNwbGF5ZWQuICBXaWxsIGJlIHBhc3NlZCB0aGUgdmFsdWUgYHNob3duYC5cbiAgICogLSBUaGlyZDogaWYgYW5kIHdoZW4gdGhlIFJhdGluZyBkaWFsb2cgaXMgZGlzbWlzc2VkLiAgV2lsbCBiZSBwYXNzZWQgdGhlIHZhbHVlIGBkaXNtaXNzZWRgLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHJhdGluZygpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlIGN1cnJlbnQgcGxhdGZvcm0vdmVyc2lvbiBzdXBwb3J0cyBpbi1hcHAgcmF0aW5ncyBkaWFsb2csIGkuZS4gY2FsbGluZyBMYXVuY2hSZXZpZXcucmF0aW5nKCkuXG4gICAqIFdpbGwgcmV0dXJuIHRydWUgaWYgY3VycmVudCBwbGF0Zm9ybSBpcyBpT1MgMTAuMyBvciBhYm92ZS5cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCBzeW5jOiB0cnVlIH0pXG4gIGlzUmF0aW5nU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19