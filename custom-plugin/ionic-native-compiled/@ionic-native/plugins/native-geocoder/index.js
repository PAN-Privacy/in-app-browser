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
var NativeGeocoderOriginal = /** @class */ (function (_super) {
    __extends(NativeGeocoderOriginal, _super);
    function NativeGeocoderOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeGeocoderOriginal.prototype.reverseGeocode = function (latitude, longitude, options) { return cordova(this, "reverseGeocode", { "callbackOrder": "reverse" }, arguments); };
    NativeGeocoderOriginal.prototype.forwardGeocode = function (addressString, options) { return cordova(this, "forwardGeocode", { "callbackOrder": "reverse" }, arguments); };
    NativeGeocoderOriginal.pluginName = "NativeGeocoder";
    NativeGeocoderOriginal.plugin = "cordova-plugin-nativegeocoder";
    NativeGeocoderOriginal.pluginRef = "nativegeocoder";
    NativeGeocoderOriginal.repo = "https://github.com/sebastianbaar/cordova-plugin-nativegeocoder";
    NativeGeocoderOriginal.platforms = ["iOS", "Android"];
    return NativeGeocoderOriginal;
}(IonicNativePlugin));
var NativeGeocoder = new NativeGeocoderOriginal();
export { NativeGeocoder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS1nZW9jb2Rlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUF3Q3BDLGtDQUFpQjs7OztJQVduRCx1Q0FBYyxhQUNaLFFBQWdCLEVBQ2hCLFNBQWlCLEVBQ2pCLE9BQStCO0lBY2pDLHVDQUFjLGFBQUMsYUFBcUIsRUFBRSxPQUErQjs7Ozs7O3lCQXJFdkU7RUF5Q29DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgTmF0aXZlIEdlb2NvZGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgcGx1Z2luIGZvciBuYXRpdmUgZm9yd2FyZCBhbmQgcmV2ZXJzZSBnZW9jb2RpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE5hdGl2ZUdlb2NvZGVyLCBOYXRpdmVHZW9jb2RlclJlc3VsdCwgTmF0aXZlR2VvY29kZXJPcHRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uYXRpdmUtZ2VvY29kZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdGl2ZUdlb2NvZGVyOiBOYXRpdmVHZW9jb2RlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogbGV0IG9wdGlvbnM6IE5hdGl2ZUdlb2NvZGVyT3B0aW9ucyA9IHtcbiAqICAgICB1c2VMb2NhbGU6IHRydWUsXG4gKiAgICAgbWF4UmVzdWx0czogNVxuICogfTtcbiAqXG4gKiB0aGlzLm5hdGl2ZUdlb2NvZGVyLnJldmVyc2VHZW9jb2RlKDUyLjUwNzIwOTUsIDEzLjE0NTI4MTgsIG9wdGlvbnMpXG4gKiAgIC50aGVuKChyZXN1bHQ6IE5hdGl2ZUdlb2NvZGVyUmVzdWx0W10pID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdFswXSkpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gKlxuICogdGhpcy5uYXRpdmVHZW9jb2Rlci5mb3J3YXJkR2VvY29kZSgnQmVybGluJywgb3B0aW9ucylcbiAqICAgLnRoZW4oKHJlc3VsdDogTmF0aXZlR2VvY29kZXJSZXN1bHRbXSkgPT4gY29uc29sZS5sb2coJ1RoZSBjb29yZGluYXRlcyBhcmUgbGF0aXR1ZGU9JyArIHJlc3VsdFswXS5sYXRpdHVkZSArICcgYW5kIGxvbmdpdHVkZT0nICsgcmVzdWx0WzBdLmxvbmdpdHVkZSkpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIE5hdGl2ZUdlb2NvZGVyUmVzdWx0XG4gKiBOYXRpdmVHZW9jb2Rlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdOYXRpdmVHZW9jb2RlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW5hdGl2ZWdlb2NvZGVyJyxcbiAgcGx1Z2luUmVmOiAnbmF0aXZlZ2VvY29kZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3NlYmFzdGlhbmJhYXIvY29yZG92YS1wbHVnaW4tbmF0aXZlZ2VvY29kZXInLFxuICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF0aXZlR2VvY29kZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBSZXZlcnNlIGdlb2NvZGUgYSBnaXZlbiBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIHRvIGZpbmQgbG9jYXRpb24gYWRkcmVzc1xuICAgKiBAcGFyYW0gbGF0aXR1ZGUge251bWJlcn0gVGhlIGxhdGl0dWRlXG4gICAqIEBwYXJhbSBsb25naXR1ZGUge251bWJlcn0gVGhlIGxvbmdpdHVkZVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7TmF0aXZlR2VvY29kZXJPcHRpb25zfSBUaGUgb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPE5hdGl2ZUdlb2NvZGVyUmVzdWx0W10+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgcmV2ZXJzZUdlb2NvZGUoXG4gICAgbGF0aXR1ZGU6IG51bWJlcixcbiAgICBsb25naXR1ZGU6IG51bWJlcixcbiAgICBvcHRpb25zPzogTmF0aXZlR2VvY29kZXJPcHRpb25zXG4gICk6IFByb21pc2U8TmF0aXZlR2VvY29kZXJSZXN1bHRbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3J3YXJkIGdlb2NvZGUgYSBnaXZlbiBhZGRyZXNzIHRvIGZpbmQgY29vcmRpbmF0ZXNcbiAgICogQHBhcmFtIGFkZHJlc3NTdHJpbmcge3N0cmluZ30gVGhlIGFkZHJlc3MgdG8gYmUgZ2VvY29kZWRcbiAgICogQHBhcmFtIG9wdGlvbnMge05hdGl2ZUdlb2NvZGVyT3B0aW9uc30gVGhlIG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxOYXRpdmVHZW9jb2RlclJlc3VsdFtdPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGZvcndhcmRHZW9jb2RlKGFkZHJlc3NTdHJpbmc6IHN0cmluZywgb3B0aW9ucz86IE5hdGl2ZUdlb2NvZGVyT3B0aW9ucyk6IFByb21pc2U8TmF0aXZlR2VvY29kZXJSZXN1bHRbXT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEVuY2Fwc3VsYXRlcyBmb3JtYXQgaW5mb3JtYXRpb24gYWJvdXQgYSBnZW9jb2RpbmcgcmVzdWx0LlxuICogbW9yZSBJbmZvOlxuICogIC0gaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vY29yZWxvY2F0aW9uL2NscGxhY2VtYXJrXG4gKiAgLSBodHRwczovL2RldmVsb3Blci5hbmRyb2lkLmNvbS9yZWZlcmVuY2UvYW5kcm9pZC9sb2NhdGlvbi9BZGRyZXNzLmh0bWxcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVHZW9jb2RlclJlc3VsdCB7XG4gIC8qKlxuICAgKiBUaGUgbGF0aXR1ZGUuXG4gICAqL1xuICBsYXRpdHVkZTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGxvbmdpdHVkZS5cbiAgICovXG4gIGxvbmdpdHVkZTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGNvdW50cnkgY29kZS5cbiAgICovXG4gIGNvdW50cnlDb2RlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgY291bnRyeSBuYW1lLlxuICAgKi9cbiAgY291bnRyeU5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBwb3N0YWwgY29kZS5cbiAgICovXG4gIHBvc3RhbENvZGU6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBhZG1pbmlzdHJhdGl2ZUFyZWEuXG4gICAqL1xuICBhZG1pbmlzdHJhdGl2ZUFyZWE6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBzdWJBZG1pbmlzdHJhdGl2ZUFyZWEuXG4gICAqL1xuICBzdWJBZG1pbmlzdHJhdGl2ZUFyZWE6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBsb2NhbGl0eS5cbiAgICovXG4gIGxvY2FsaXR5OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgc3ViTG9jYWxpdHkuXG4gICAqL1xuICBzdWJMb2NhbGl0eTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHRob3JvdWdoZmFyZS5cbiAgICovXG4gIHRob3JvdWdoZmFyZTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHN1YlRob3JvdWdoZmFyZS5cbiAgICovXG4gIHN1YlRob3JvdWdoZmFyZTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGFyZWFzT2ZJbnRlcmVzdFxuICAgKi9cbiAgYXJlYXNPZkludGVyZXN0OiBzdHJpbmdbXTtcbn1cblxuLyoqXG4gKiBPcHRpb25zIGZvciByZXZlcnNlIGFuZCBmb3J3YXJkIGdlb2NvZGluZy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVHZW9jb2Rlck9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGxvY2FsZSB0byB1c2Ugd2hlbiByZXR1cm5pbmcgdGhlIGFkZHJlc3MgaW5mb3JtYXRpb24uXG4gICAqIElmIHNldCB0byAnZmFsc2UnIHRoZSBsb2NhbGUgd2lsbCBhbHdheXMgYmUgJ2VuX1VTJy5cbiAgICogRGVmYXVsdCBpcyAndHJ1ZSdcbiAgICovXG4gIHVzZUxvY2FsZTogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGxvY2FsZSB0byB1c2Ugd2hlbiByZXR1cm5pbmcgdGhlIGFkZHJlc3MgaW5mb3JtYXRpb24uXG4gICAqIGUuZy46ICdmYS1JUicgb3IgJ2RlX0RFJy5cbiAgICovXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgcmVzdWx0IHRvIHJldHVybiAobWF4IGlzIDUpLlxuICAgKiBEZWZhdWx0IGlzIDFcbiAgICovXG4gIG1heFJlc3VsdHM6IG51bWJlcjtcbn1cbiJdfQ==