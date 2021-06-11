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
var AppCenterOriginal = /** @class */ (function (_super) {
    __extends(AppCenterOriginal, _super);
    function AppCenterOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterOriginal.prototype.getInstallId = function () { return cordova(this, "getInstallId", {}, arguments); };
    AppCenterOriginal.prototype.setUserId = function (userId) { return cordova(this, "setUserId", {}, arguments); };
    AppCenterOriginal.pluginName = "AppCenter";
    AppCenterOriginal.plugin = "cordova-plugin-appcenter-shared";
    AppCenterOriginal.pluginRef = "AppCenter";
    AppCenterOriginal.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-shared";
    AppCenterOriginal.platforms = ["Android", "iOS"];
    return AppCenterOriginal;
}(IonicNativePlugin));
var AppCenter = new AppCenterOriginal();
export { AppCenter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1jZW50ZXItc2hhcmVkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXVDekMsNkJBQWlCOzs7O0lBTzlDLGdDQUFZO0lBV1osNkJBQVMsYUFBQyxNQUFjOzs7Ozs7b0JBMUQxQjtFQXdDK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBcHAgQ2VudGVyIFNoYXJlZFxuICogQGNhcGFjaXRvcmluY29tcGF0aWJsZSB0cnVlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEV4cG9zZXMgYWRkaXRpb25hbCBzaGFyZWQgQVBJcyBmb3IgQXBwIENlbnRlci5cbiAqXG4gKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2FwcGNlbnRlci9zZGsvb3RoZXItYXBpcy9jb3Jkb3ZhXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBcHBDZW50ZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FwcC1jZW50ZXItc2hhcmVkL25neCc7XG4gKlxuICogLi4uXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhcHBDZW50ZXJTaGFyZWQ6IEFwcENlbnRlcikgeyB9XG4gKlxuICogYXN5bmMgZ2V0SW5zdGFsbElkKCkge1xuICogICBjb25zdCBpZCA9IGF3YWl0IHRoaXMuYXBwQ2VudGVyLmdldEluc3RhbGxJZCgpO1xuICogfVxuICpcbiAqIGFzeW5jIHNldFVzZXJJZCgpIHtcbiAqICAgdHJ5e1xuICogICAgIGF3YWl0IHRoaXMuYXBwQ2VudGVyLnNldFVzZXJJZCgnaS1hbS1qb2huJyk7XG4gKiAgIH0gY2F0Y2ggKGUpe1xuICogICAgIGNvbnNvbGUubG9nKGUpO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBcHBDZW50ZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHBjZW50ZXItc2hhcmVkJyxcbiAgcGx1Z2luUmVmOiAnQXBwQ2VudGVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvYXBwY2VudGVyLXNkay1jb3Jkb3ZhL3RyZWUvbWFzdGVyL2NvcmRvdmEtcGx1Z2luLWFwcGNlbnRlci1zaGFyZWQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwQ2VudGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUmV0dXJucyBBcHBDZW50ZXIgVVVJRC5cbiAgICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTogaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvYXBwY2VudGVyL3Nkay9vdGhlci1hcGlzL2NvcmRvdmEjaWRlbnRpZnktaW5zdGFsbGF0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBJbnN0YWxsIElEXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEluc3RhbGxJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSB1c2VyIElEIHRoYXQncyB1c2VkIHRvIGF1Z21lbnQgY3Jhc2ggcmVwb3J0cy5cbiAgICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTogaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvYXBwY2VudGVyL3Nkay9vdGhlci1hcGlzL2NvcmRvdmEjaWRlbnRpZnktdXNlcnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBFeC4gXCJ5b3VyLXVzZXItaWRcIlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0VXNlcklkKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=