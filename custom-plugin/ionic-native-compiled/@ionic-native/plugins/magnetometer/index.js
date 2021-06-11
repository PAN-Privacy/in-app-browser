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
var MagnetometerOriginal = /** @class */ (function (_super) {
    __extends(MagnetometerOriginal, _super);
    function MagnetometerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MagnetometerOriginal.prototype.getReading = function () { return cordova(this, "getReading", {}, arguments); };
    MagnetometerOriginal.prototype.watchReadings = function () { return cordova(this, "watchReadings", { "callbackOrder": "reverse", "observable": true, "clearFunction": "stop" }, arguments); };
    MagnetometerOriginal.pluginName = "Magnetometer";
    MagnetometerOriginal.plugin = "cordova-plugin-magnetometer";
    MagnetometerOriginal.pluginRef = "cordova.plugins.magnetometer";
    MagnetometerOriginal.repo = "https://github.com/sdesalas/cordova-plugin-magnetometer";
    MagnetometerOriginal.platforms = ["Android", "iOS"];
    return MagnetometerOriginal;
}(IonicNativePlugin));
var Magnetometer = new MagnetometerOriginal();
export { Magnetometer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21hZ25ldG9tZXRlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQStEQSxnQ0FBaUI7Ozs7SUFNakQsaUNBQVU7SUFnQlYsb0NBQWE7Ozs7Ozt1QkF2RmY7RUFpRWtDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFnbmV0b21ldGVyUmVhZGluZyB7XG4gIC8qKlxuICAgKiBYIHJlYWRpbmcgb2YgbWFnbmV0b21ldGVyLiAoTnVtYmVyKVxuICAgKi9cbiAgeDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBZIHJlYWRpbmcgb2YgbWFnbmV0b21ldGVyLiAoTnVtYmVyKVxuICAgKi9cbiAgeTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBaIHJlYWRpbmcgb2YgbWFnbmV0b21ldGVyLiAoTnVtYmVyKVxuICAgKi9cbiAgejogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVkIHRvdGFsIC0gYWx3YXlzIHBvc2l0aXZlIG9mIG1hZ25ldG9tZXRlci4gKE51bWJlcilcbiAgICovXG4gIG1hZ25pdHVkZTogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBuYW1lIERldmljZSBlTWFnbmV0b21ldGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tbWFnbmV0b21ldGVyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0RldmljZSBPcmllbnRhdGlvbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vc2Rlc2FsYXMvY29yZG92YS1wbHVnaW4tbWFnbmV0b21ldGVyKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIC8vIERldmljZU9yaWVudGF0aW9uQ29tcGFzc0hlYWRpbmcgaXMgYW4gaW50ZXJmYWNlIGZvciBjb21wYXNzXG4gKiBpbXBvcnQgeyBNYWduZXRvbWV0ZXIsIE1hZ25ldG9tZXRlclJlYWRpbmcgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RldmljZS1vcmllbnRhdGlvbi9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFnbmV0b21ldGVyOiBNYWduZXRvbWV0ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIEdldCB0aGUgZGV2aWNlIGN1cnJlbnQgY29tcGFzcyBoZWFkaW5nXG4gKiB0aGlzLmRldmljZU9yaWVudGF0aW9uLmdldFJlYWRpbmcoKS50aGVuKFxuICogICAoZGF0YTogTWFnbmV0b21ldGVyUmVhZGluZykgPT4gY29uc29sZS5sb2coZGF0YSksXG4gKiAgIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAqICk7XG4gKlxuICogLy8gV2F0Y2ggdGhlIGRldmljZSBjb21wYXNzIGhlYWRpbmcgY2hhbmdlXG4gKiB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5kZXZpY2VPcmllbnRhdGlvbi53YXRjaFJlYWRpbmdzKCkuc3Vic2NyaWJlKFxuICogICAoZGF0YTogTWFnbmV0b21ldGVyUmVhZGluZykgPT4gY29uc29sZS5sb2coZGF0YSlcbiAqICk7XG4gKlxuICogLy8gU3RvcCB3YXRjaGluZyBoZWFkaW5nIGNoYW5nZVxuICogc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBNYWduZXRvbWV0ZXJSZWFkaW5nXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTWFnbmV0b21ldGVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWFnbmV0b21ldGVyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLm1hZ25ldG9tZXRlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc2Rlc2FsYXMvY29yZG92YS1wbHVnaW4tbWFnbmV0b21ldGVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1hZ25ldG9tZXRlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBjb21wYXNzIHJlYWRpbmcuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE1hZ25ldG9tZXRlclJlYWRpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRSZWFkaW5nKCk6IFByb21pc2U8TWFnbmV0b21ldGVyUmVhZGluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRldmljZSBjdXJyZW50IGhlYWRpbmcgYXQgYSByZWd1bGFyIGludGVydmFsXG4gICAqXG4gICAqIFN0b3AgdGhlIHdhdGNoIGJ5IHVuc3Vic2NyaWJpbmcgZnJvbSB0aGUgb2JzZXJ2YWJsZVxuICAgKiBAcGFyYW0ge0RldmljZU9yaWVudGF0aW9uQ29tcGFzc09wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIGZvciBjb21wYXNzLiBGcmVxdWVuY3kgYW5kIEZpbHRlci4gT3B0aW9uYWxcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RGV2aWNlT3JpZW50YXRpb25Db21wYXNzSGVhZGluZz59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IGNvbnRhaW5zIHRoZSBjb21wYXNzIGhlYWRpbmdcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnc3RvcCcsXG4gIH0pXG4gIHdhdGNoUmVhZGluZ3MoKTogT2JzZXJ2YWJsZTxNYWduZXRvbWV0ZXJSZWFkaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=