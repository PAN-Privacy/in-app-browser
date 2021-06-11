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
var IntelSecurityOriginal = /** @class */ (function (_super) {
    __extends(IntelSecurityOriginal, _super);
    function IntelSecurityOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * returns an IntelSecurityStorage object
         * @type {IntelSecurityStorage}
         */
        _this.storage = new IntelSecurityStorage();
        /**
         * Returns an IntelSecurityData object
         * @type {IntelSecurityData}
         */
        _this.data = new IntelSecurityData();
        return _this;
    }
    IntelSecurityOriginal.pluginName = "IntelSecurity";
    IntelSecurityOriginal.plugin = "com-intel-security-cordova-plugin";
    IntelSecurityOriginal.pluginRef = "intel.security";
    IntelSecurityOriginal.repo = "https://github.com/AppSecurityApi/com-intel-security-cordova-plugin";
    IntelSecurityOriginal.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    return IntelSecurityOriginal;
}(IonicNativePlugin));
var IntelSecurity = new IntelSecurityOriginal();
export { IntelSecurity };
var IntelSecurityData = /** @class */ (function () {
    function IntelSecurityData() {
    }
    IntelSecurityData.prototype.createFromData = function (options) { return cordova(this, "createFromData", { "otherPromise": true }, arguments); };
    IntelSecurityData.prototype.createFromSealedData = function (options) { return cordova(this, "createFromSealedData", { "otherPromise": true }, arguments); };
    IntelSecurityData.prototype.getData = function (instanceID) { return cordova(this, "getData", { "otherPromise": true }, arguments); };
    IntelSecurityData.prototype.getSealedData = function (instanceID) { return cordova(this, "getSealedData", { "otherPromise": true }, arguments); };
    IntelSecurityData.prototype.getTag = function (instanceID) { return cordova(this, "getTag", { "otherPromise": true }, arguments); };
    IntelSecurityData.prototype.getPolicy = function (instanceID) { return cordova(this, "getPolicy", { "otherPromise": true }, arguments); };
    IntelSecurityData.prototype.getOwners = function (instanceID) { return cordova(this, "getOwners", { "otherPromise": true }, arguments); };
    IntelSecurityData.prototype.getCreator = function (instanceID) { return cordova(this, "getCreator", { "otherPromise": true }, arguments); };
    IntelSecurityData.prototype.getWebOwners = function (instanceID) { return cordova(this, "getWebOwners", { "otherPromise": true }, arguments); };
    IntelSecurityData.prototype.changeExtraKey = function (options) { return cordova(this, "changeExtraKey", { "otherPromise": true }, arguments); };
    IntelSecurityData.prototype.destroy = function (instanceID) { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    IntelSecurityData.pluginName = "IntelSecurity";
    IntelSecurityData.plugin = "com-intel-security-cordova-plugin";
    IntelSecurityData.pluginRef = "intel.security.secureData";
    return IntelSecurityData;
}());
export { IntelSecurityData };
var IntelSecurityStorage = /** @class */ (function () {
    function IntelSecurityStorage() {
    }
    IntelSecurityStorage.prototype.delete = function (options) { return cordova(this, "delete", { "otherPromise": true }, arguments); };
    IntelSecurityStorage.prototype.read = function (options) { return cordova(this, "read", { "otherPromise": true }, arguments); };
    IntelSecurityStorage.prototype.write = function (options) { return cordova(this, "write", { "otherPromise": true }, arguments); };
    IntelSecurityStorage.pluginName = "IntelSecurity";
    IntelSecurityStorage.plugin = "com-intel-security-cordova-plugin";
    IntelSecurityStorage.pluginRef = "intel.security.secureStorage";
    return IntelSecurityStorage;
}());
export { IntelSecurityStorage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ludGVsLXNlY3VyaXR5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTZFckMsaUNBQWlCOzs7UUFDbEQ7OztXQUdHO1FBQ0gsYUFBTyxHQUF5QixJQUFJLG9CQUFvQixFQUFFLENBQUM7UUFFM0Q7OztXQUdHO1FBQ0gsVUFBSSxHQUFzQixJQUFJLGlCQUFpQixFQUFFLENBQUM7Ozs7Ozs7O3dCQXhGcEQ7RUE2RW1DLGlCQUFpQjtTQUF2QyxhQUFhOzs7O0lBNkJ4QiwwQ0FBYyxhQUFDLE9BQWlDO0lBV2hELGdEQUFvQixhQUFDLE9BQStCO0lBVXBELG1DQUFPLGFBQUMsVUFBa0I7SUFVMUIseUNBQWEsYUFBQyxVQUFlO0lBVTdCLGtDQUFNLGFBQUMsVUFBZTtJQVV0QixxQ0FBUyxhQUFDLFVBQWU7SUFVekIscUNBQVMsYUFBQyxVQUFlO0lBVXpCLHNDQUFVLGFBQUMsVUFBZTtJQVUxQix3Q0FBWSxhQUFDLFVBQWU7SUFZNUIsMENBQWMsYUFBQyxPQUFZO0lBVTNCLG1DQUFPLGFBQUMsVUFBZTs7Ozs0QkFqTnpCOztTQW1HYSxpQkFBaUI7Ozs7SUFvSTVCLHFDQUFNLGFBQUMsT0FBNkM7SUFhcEQsbUNBQUksYUFBQyxPQUFnRTtJQWFyRSxvQ0FBSyxhQUFDLE9BQWlFOzs7OytCQWpRekU7O1NBOE5hLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIEludGVsU2VjdXJpdHlEYXRhT3B0aW9ucyB7XG4gIC8qIE5vbi1lbXB0eSBzdHJpbmcuICoqL1xuICBkYXRhOiBTdHJpbmc7XG4gIC8qKiBUYWcgdGV4dC4gICovXG4gIHRhZz86IFN0cmluZztcbiAgLyoqIFZhbGlkIHNlY3VyZSBkYXRhIGluc3RhbmNlIElELiAqL1xuICBleHRyYUtleT86IE51bWJlcjtcbiAgLyoqIEFwcGxpY2F0aW9uIGFjY2VzcyBjb250cm9sIHBvbGljeS4gKi9cbiAgYXBwQWNjZXNzQ29udHJvbD86IE51bWJlcjtcbiAgLyoqIERldmljZSBsb2NhbGl0eSBwb2xpY3kuICovXG4gIGRldmljZUxvY2FsaXR5PzogTnVtYmVyO1xuICAvKiogU2Vuc2l0aXZpdHkgbGV2ZWwgcG9saWN5LiAqL1xuICBzZW5zaXRpdml0eUxldmVsPzogTnVtYmVyO1xuICAvKiogRGlzYWxsb3cgc2VhbGVkIGJsb2IgYWNjZXNzLiAqL1xuICBub1N0b3JlPzogQm9vbGVhbjtcbiAgLyoqIERpc2FsbG93IHBsYWluLXRleHQgZGF0YSBhY2Nlc3MuICovXG4gIG5vUmVhZD86IEJvb2xlYW47XG4gIC8qKiBDcmVhdG9yIHVuaXF1ZSBJRC4gKi9cbiAgY3JlYXRvcj86IE51bWJlcjtcbiAgLyoqIEFycmF5IG9mIG93bmVycyB1bmlxdWUgSURzLiAqL1xuICBvd25lcnM/OiBOdW1iZXJbXTtcbiAgLyoqIExpc3Qgb2YgdHJ1c3RlZCB3ZWIgZG9tYWlucy4gKi9cbiAgd2ViT3duZXJzPzogU3RyaW5nW107XG59XG5cbi8qKlxuICogQG5hbWUgSW50ZWwgU2VjdXJpdHlcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIEFwcCBTZWN1cml0eSBBUEkgZW5hYmxlcyB0aGUgdXNlIG9mIHNlY3VyaXR5IHByb3BlcnRpZXMgYW5kIGNhcGFiaWxpdGllcyBvbiB0aGUgcGxhdGZvcm0sIHVzaW5nIGEgbmV3IHNldCBvZiBBUEkgZGVmaW5lZCBmb3IgYXBwbGljYXRpb24gZGV2ZWxvcGVycy4gWW91IGFyZSBub3QgcmVxdWlyZWQgdG8gYmUgYSBzZWN1cml0eSBleHBlcnQgdG8gbWFrZSBnb29kIHVzZSBvZiB0aGUgQVBJLiBLZXkgZWxlbWVudHMsIHN1Y2ggYXMgZW5jcnlwdGlvbiBvZiBkYXRhIGFuZCBlc3RhYmxpc2htZW50cyBvZiBjYXBhYmlsaXRpZXMsIGlzIGFic3RyYWN0ZWQgYW5kIGRvbmUgYnkgdGhlIEFQSSBpbXBsZW1lbnRhdGlvbiwgZm9yIHlvdS5cbiAqXG4gKiBGb3IgZXhhbXBsZTpcbiAqIC0gVXNlIHRoZSBBUEkgdG8gc3RvcmUgKEUuZy4gY2FjaGUpIGRhdGEgbG9jYWxseSwgdXNpbmcgdGhlIGRldmljZSBub24tdm9sYXRpbGUgc3RvcmFnZS4gRGF0YSBwcm90ZWN0aW9uL2VuY3J5cHRpb24gd2lsbCBiZSBkb25lIGZvciB5b3UgYnkgdGhlIEFQSSBpbXBsZW1lbnRhdGlvblxuICogLSBFc3RhYmxpc2ggYSBjb25uZWN0aW9uIHdpdGggcmVtb3RlIHNlcnZlciAoRS5nLiBYSFIpIHVzaW5nIGEgcHJvdGVjdGVkIGNoYW5uZWwuIFNTTC9UTFMgZXN0YWJsaXNobWVudCBhbmQgdXNhZ2Ugd2lsbCBiZSBkb25lIGZvciB5b3UgYnkgdGhlIEFQSSBpbXBsZW1lbnRhdGlvblxuICpcbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uIHBsZWFzZSB2aXNpdCB0aGUgW0FQSSBkb2N1bWVudGF0aW9uXShodHRwczovL3NvZnR3YXJlLmludGVsLmNvbS9lbi11cy9hcHAtc2VjdXJpdHktYXBpL2FwaSkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJbnRlbFNlY3VyaXR5IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pbnRlbC1zZWN1cml0eS9uZ3gnO1xuICogLi4uXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGludGVsU2VjdXJpdHk6IEludGVsU2VjdXJpdHkpIHsgfVxuICogLi4uXG4gKlxuICogbGV0IHN0b3JhZ2VJRCA9ICdpZCc7XG4gKlxuICogdGhpcy5pbnRlbFNlY3VyaXR5LmRhdGEuY3JlYXRlRnJvbURhdGEoeyBkYXRhOiAnU2FtcGxlIERhdGEnIH0pXG4gKiAgIC50aGVuKChpbnN0YW5jZUlEOiBOdW1iZXIpID0+IHRoaXMuaW50ZWxTZWN1cml0eS5zdG9yYWdlLndyaXRlKHsgaWQ6IHN0b3JhZ2VJZCwgaW5zdGFuY2VJRDogaW5zdGFuY2VJRCB9KSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICpcbiAqIHRoaXMuaW50ZWxTZWN1cml0eS5zdG9yYWdlLnJlYWQoe2lkOiBzdG9yYWdlSUQgfSlcbiAqICAgLnRoZW4oKGluc3RhbmNlSUQ6IG51bWJlcikgPT4gdGhpcy5pbnRlbFNlY3VyaXR5LmRhdGEuZ2V0RGF0YShpbnN0YW5jZUlEKSlcbiAqICAgLnRoZW4oKGRhdGE6IHN0cmluZykgPT4gY29uc29sZS5sb2coZGF0YSkpIC8vIFJlc29sdmVzIHRvICdTYW1wbGUgRGF0YSdcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICpcbiAqIHRoaXMuaW50ZWxTZWN1cml0eS5zdG9yYWdlLmRlbGV0ZSh7IGlkOiBzdG9yYWdlSUQgfSlcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0RlbGV0ZWQgU3VjY2Vzc2Z1bGx5JykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAqIGBgYFxuICogQGNsYXNzZXNcbiAqIEludGVsU2VjdXJpdHlEYXRhXG4gKiBJbnRlbFNlY3VyaXR5U3RvcmFnZVxuICogQGludGVyZmFjZXNcbiAqIEludGVsU2VjdXJpdHlEYXRhT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ludGVsU2VjdXJpdHknLFxuICBwbHVnaW46ICdjb20taW50ZWwtc2VjdXJpdHktY29yZG92YS1wbHVnaW4nLFxuICBwbHVnaW5SZWY6ICdpbnRlbC5zZWN1cml0eScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vQXBwU2VjdXJpdHlBcGkvY29tLWludGVsLXNlY3VyaXR5LWNvcmRvdmEtcGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSA4J10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEludGVsU2VjdXJpdHkgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiByZXR1cm5zIGFuIEludGVsU2VjdXJpdHlTdG9yYWdlIG9iamVjdFxuICAgKiBAdHlwZSB7SW50ZWxTZWN1cml0eVN0b3JhZ2V9XG4gICAqL1xuICBzdG9yYWdlOiBJbnRlbFNlY3VyaXR5U3RvcmFnZSA9IG5ldyBJbnRlbFNlY3VyaXR5U3RvcmFnZSgpO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIEludGVsU2VjdXJpdHlEYXRhIG9iamVjdFxuICAgKiBAdHlwZSB7SW50ZWxTZWN1cml0eURhdGF9XG4gICAqL1xuICBkYXRhOiBJbnRlbFNlY3VyaXR5RGF0YSA9IG5ldyBJbnRlbFNlY3VyaXR5RGF0YSgpO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbnRlbFNlY3VyaXR5JyxcbiAgcGx1Z2luOiAnY29tLWludGVsLXNlY3VyaXR5LWNvcmRvdmEtcGx1Z2luJyxcbiAgcGx1Z2luUmVmOiAnaW50ZWwuc2VjdXJpdHkuc2VjdXJlRGF0YScsXG59KVxuZXhwb3J0IGNsYXNzIEludGVsU2VjdXJpdHlEYXRhIHtcbiAgLyoqXG4gICAqIFRoaXMgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBzZWN1cmUgZGF0YSB1c2luZyBwbGFpbi10ZXh0IGRhdGEuXG4gICAqIEBwYXJhbSBvcHRpb25zIHtJbnRlbFNlY3VyaXR5RGF0YU9wdGlvbnN9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgaW5zdGFuY2VJRCBvZiB0aGUgY3JlYXRlZCBkYXRhIGluc3RhbmNlLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBjcmVhdGVGcm9tRGF0YShvcHRpb25zOiBJbnRlbFNlY3VyaXR5RGF0YU9wdGlvbnMpOiBQcm9taXNlPE51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2Ygc2VjdXJlIGRhdGEgKHVzaW5nIHNlYWxlZCBkYXRhKVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7T2JqZWN0fVxuICAgKiBAcGFyYW0gb3B0aW9ucy5zZWFsZWREYXRhIHtzdHJpbmd9IFNlYWxlZCBkYXRhIGluIHN0cmluZyBmb3JtYXQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgaW5zdGFuY2VJRCBvZiB0aGUgY3JlYXRlZCBkYXRhIGluc3RhbmNlLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBjcmVhdGVGcm9tU2VhbGVkRGF0YShvcHRpb25zOiB7IHNlYWxlZERhdGE6IHN0cmluZyB9KTogUHJvbWlzZTxOdW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyByZXR1cm5zIHRoZSBwbGFpbi10ZXh0IGRhdGEgb2YgdGhlIHNlY3VyZSBkYXRhIGluc3RhbmNlLlxuICAgKiBAcGFyYW0gaW5zdGFuY2VJRCB7TnVtYmVyfSBTZWN1cmUgZGF0YSBpbnN0YW5jZSBJRC5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgZGF0YSBhcyBwbGFpbi10ZXh0LCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBnZXREYXRhKGluc3RhbmNlSUQ6IE51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgcmV0dXJucyB0aGUgc2VhbGVkIGNodW5rIG9mIGEgc2VjdXJlIGRhdGEgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSBpbnN0YW5jZUlEIHthbnl9IFNlY3VyZSBkYXRhIGluc3RhbmNlIElELlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBzZWFsZWQgZGF0YSwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgZ2V0U2VhbGVkRGF0YShpbnN0YW5jZUlEOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHJldHVybnMgdGhlIHRhZyBvZiB0aGUgc2VjdXJlIGRhdGEgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSBpbnN0YW5jZUlEIHthbnl9IFNlY3VyZSBkYXRhIGluc3RhbmNlIElELlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSB0YWcsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGdldFRhZyhpbnN0YW5jZUlEOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHJldHVybnMgdGhlIGRhdGEgcG9saWN5IG9mIHRoZSBzZWN1cmUgZGF0YSBpbnN0YW5jZS5cbiAgICogQHBhcmFtIGluc3RhbmNlSUQge2FueX0gU2VjdXJlIGRhdGEgaW5zdGFuY2UgSUQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIHBvbGljeSBvYmplY3QsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGdldFBvbGljeShpbnN0YW5jZUlEOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIGRhdGEgb3duZXJzIHVuaXF1ZSBJRHMuXG4gICAqIEBwYXJhbSBpbnN0YW5jZUlEIHthbnl9IFNlY3VyZSBkYXRhIGluc3RhbmNlIElELlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYW4gYXJyYXkgb2Ygb3duZXJzJyB1bmlxdWUgSURzLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBnZXRPd25lcnMoaW5zdGFuY2VJRDogYW55KTogUHJvbWlzZTxhbnlbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHJldHVybnMgdGhlIGRhdGEgY3JlYXRvciB1bmlxdWUgSUQuXG4gICAqIEBwYXJhbSBpbnN0YW5jZUlEIHthbnl9IFNlY3VyZSBkYXRhIGluc3RhbmNlIElELlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxOdW1iZXI+fSBSZXR1cm5zIGEgcHJvbXNpZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBjcmVhdG9yJ3MgdW5pcXVlIElELCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBnZXRDcmVhdG9yKGluc3RhbmNlSUQ6IGFueSk6IFByb21pc2U8TnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgdHJ1c3RlZCB3ZWIgZG9tYWlucyBvZiB0aGUgc2VjdXJlIGRhdGEgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSBpbnN0YW5jZUlEIHthbnl9IFNlY3VyZSBkYXRhIGluc3RhbmNlIElELlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBsaXN0IG9mIHdlYiBvd25lcnMsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGdldFdlYk93bmVycyhpbnN0YW5jZUlEOiBhbnkpOiBQcm9taXNlPGFueVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgY2hhbmdlcyB0aGUgZXh0cmEga2V5IG9mIGEgc2VjdXJlIGRhdGEgaW5zdGFuY2UuIFRvIHN1Y2Nlc3NmdWxseSByZXBsYWNlIHRoZSBleHRyYSBrZXksIHRoZSBjYWxsaW5nIGFwcGxpY2F0aW9uIG11c3QgaGF2ZSBzdWZmaWNpZW50IGFjY2VzcyB0byB0aGUgcGxhaW4tdGV4dCBkYXRhLlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7T2JqZWN0fVxuICAgKiBAcGFyYW0gb3B0aW9ucy5pbnN0YW5jZUlEIHthbnl9IFNlY3VyZSBkYXRhIGluc3RhbmNlIElELlxuICAgKiBAcGFyYW0gb3B0aW9ucy5leHRyYUtleSB7TnVtYmVyfSBFeHRyYSBzZWFsaW5nIHNlY3JldCBmb3Igc2VjdXJlIGRhdGEgaW5zdGFuY2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBubyBwYXJhbWV0ZXJzLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBjaGFuZ2VFeHRyYUtleShvcHRpb25zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHJlbGVhc2VzIGEgc2VjdXJlIGRhdGEgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSBpbnN0YW5jZUlEIHthbnl9IFNlY3VyZSBkYXRhIGluc3RhbmNlIElELlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc292bGVzIHdpdGggbm8gcGFyYW1ldGVycywgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgZGVzdHJveShpbnN0YW5jZUlEOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbnRlbFNlY3VyaXR5JyxcbiAgcGx1Z2luOiAnY29tLWludGVsLXNlY3VyaXR5LWNvcmRvdmEtcGx1Z2luJyxcbiAgcGx1Z2luUmVmOiAnaW50ZWwuc2VjdXJpdHkuc2VjdXJlU3RvcmFnZScsXG59KVxuZXhwb3J0IGNsYXNzIEludGVsU2VjdXJpdHlTdG9yYWdlIHtcbiAgLyoqXG4gICAqIFRoaXMgZGVsZXRlcyBhIHNlY3VyZSBzdG9yYWdlIHJlc291cmNlIChpbmRpY2F0ZWQgYnkgaWQpLlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7T2JqZWN0fVxuICAgKiBAcGFyYW0gb3B0aW9ucy5pZCB7U3RyaW5nfSBTdG9yYWdlIHJlc291cmNlIGlkZW50aWZpZXIuXG4gICAqIEBwYXJhbSBbb3B0aW9ucy5zdG9yYWdlVHlwZV0ge051bWJlcn0gU3RvcmFnZSB0eXBlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggbm8gcGFyYW1ldGVycywgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgZGVsZXRlKG9wdGlvbnM6IHsgaWQ6IHN0cmluZzsgc3RvcmFnZVR5cGU/OiBOdW1iZXIgfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgcmVhZHMgdGhlIGRhdGEgZnJvbSBzZWN1cmUgc3RvcmFnZSAoaW5kaWNhdGVkIGJ5IGlkKSBhbmQgY3JlYXRlcyBhIG5ldyBzZWN1cmUgZGF0YSBpbnN0YW5jZS5cbiAgICogQHBhcmFtIG9wdGlvbnMge09iamVjdH1cbiAgICogQHBhcmFtIG9wdGlvbnMuaWQge1N0cmluZ30gU3RvcmFnZSByZXNvdXJjZSBpZGVudGlmaWVyLlxuICAgKiBAcGFyYW0gW29wdGlvbnMuc3RvcmFnZVR5cGVdIHtOdW1iZXJ9IFN0b3JhZ2UgdHlwZS5cbiAgICogQHBhcmFtIFtvcHRpb25zLmV4dHJhS2V5XSB7TnVtYmVyfSBWYWxpZCBzZWN1cmUgZGF0YSBpbnN0YW5jZSBJRC5cbiAgICogQHJldHVybnMge1Byb21pc2U8TnVtYmVyPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBpbnN0YW5jZSBJRCBvZiB0aGUgY3JlYXRlZCBzZWN1cmUgZGF0YSBpbnN0YW5jZSwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgcmVhZChvcHRpb25zOiB7IGlkOiBzdHJpbmc7IHN0b3JhZ2VUeXBlPzogTnVtYmVyOyBleHRyYUtleT86IE51bWJlciB9KTogUHJvbWlzZTxOdW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyB3cml0ZXMgdGhlIGRhdGEgY29udGFpbmVkIGluIGEgc2VjdXJlIGRhdGEgaW5zdGFuY2UgaW50byBzZWN1cmUgc3RvcmFnZS5cbiAgICogQHBhcmFtIG9wdGlvbnMge09iamVjdH1cbiAgICogQHBhcmFtIG9wdGlvbnMuaWQge1N0cmluZ30gU3RvcmFnZSByZXNvdXJjZSBpZGVudGlmaWVyLlxuICAgKiBAcGFyYW0gb3B0aW9ucy5pbnN0YW5jZUlEIHtOdW1iZXJ9IFZhbGlkIHNlY3VyZSBkYXRhIGluc3RhbmNlIElEXG4gICAqIEBwYXJhbSBbb3B0aW9ucy5zdG9yYWdlVHlwZV0ge051bWJlcn0gU3RvcmFnZSB0eXBlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggbm8gcGFyYW1ldGVycywgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgd3JpdGUob3B0aW9uczogeyBpZDogU3RyaW5nOyBpbnN0YW5jZUlEOiBOdW1iZXI7IHN0b3JhZ2VUeXBlPzogTnVtYmVyIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19