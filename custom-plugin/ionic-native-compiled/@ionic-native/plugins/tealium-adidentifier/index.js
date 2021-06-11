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
var TealiumAdIdentifierOriginal = /** @class */ (function (_super) {
    __extends(TealiumAdIdentifierOriginal, _super);
    function TealiumAdIdentifierOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumAdIdentifierOriginal.prototype.setPersistent = function (instanceName) { return cordova(this, "setPersistent", {}, arguments); };
    TealiumAdIdentifierOriginal.prototype.setVolatile = function (instanceName) { return cordova(this, "setVolatile", {}, arguments); };
    TealiumAdIdentifierOriginal.pluginName = "TealiumAdIdentifier";
    TealiumAdIdentifierOriginal.plugin = "tealium-cordova-adidentifier";
    TealiumAdIdentifierOriginal.pluginRef = "window.tealiumAdIdentifier";
    TealiumAdIdentifierOriginal.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumAdIdentifierOriginal.platforms = ["Android", "iOS"];
    TealiumAdIdentifierOriginal.install = "";
    return TealiumAdIdentifierOriginal;
}(IonicNativePlugin));
var TealiumAdIdentifier = new TealiumAdIdentifierOriginal();
export { TealiumAdIdentifier };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RlYWxpdW0tYWRpZGVudGlmaWVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW1DL0IsdUNBQWlCOzs7O0lBT3hELDJDQUFhLGFBQUMsWUFBb0I7SUFVbEMseUNBQVcsYUFBQyxZQUFvQjs7Ozs7Ozs4QkFwRGxDO0VBbUN5QyxpQkFBaUI7U0FBN0MsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHBhaWRcbiAqIEBuYW1lIFRlYWxpdW1BZElkZW50aWZpZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBtb2R1bGUgZGVwZW5kcyBvbiB0aGUgW1RlYWxpdW0gQ29yZG92YSBQbHVnaW5dKGh0dHBzOi8vZ2l0aHViLmNvbS90ZWFsaXVtL2NvcmRvdmEtcGx1Z2luKS4gV2l0aG91dCBpdCwgdGhpcyBtb2R1bGUgd2lsbCBub3QgZG8gYW55dGhpbmcuXG4gKiBNYWtlcyB0aGUgSURGQSBhbmQgR29vZ2xlIEFkIElkZW50aWZpZXIgYXZhaWxhYmxlIGluIHRoZSBUZWFsaXVtIGRhdGEgbGF5ZXIuXG4gKlxuICogQHVzYWdlXG4gKiBgYGBcbiAqIGltcG9ydCB7IFRlYWxpdW1BZElkZW50aWZpZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RlYWxpdW0tYWRpZGVudGlmaWVyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYWRJZGVudGlmaWVyOiBUZWFsaXVtQWRJZGVudGlmaWVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5hZElkZW50aWZpZXIuc2V0UGVyc2lzdGVudChcIm1haW5cIik7XG4gKiB0aGlzLmFkSWRlbnRpZmllci5zZXRWb2xhdGlsZShcIm1haW5cIik7XG4gKlxuICogYGBgXG4gKi9cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdUZWFsaXVtQWRJZGVudGlmaWVyJyxcbiAgcGx1Z2luOiAndGVhbGl1bS1jb3Jkb3ZhLWFkaWRlbnRpZmllcicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICd3aW5kb3cudGVhbGl1bUFkSWRlbnRpZmllcicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UZWFsaXVtL2NvcmRvdmEtcGx1Z2luJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGVhbGl1bUFkSWRlbnRpZmllciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RvcmVzIHRoZSBhZCBpZGVudGlmaWVyIGluZm9ybWF0aW9uIGFzIHBlcnNpc3RlbnQgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2VOYW1lIHtzdHJpbmd9IFlvdXIgYXJiaXRyYXJ5IFRlYWxpdW0gaW5zdGFuY2UgbmFtZSBwcm92aWRlZCBhdCBpbml0IHRpbWVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0UGVyc2lzdGVudChpbnN0YW5jZU5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RvcmVzIHRoZSBhZCBpZGVudGlmaWVyIGluZm9ybWF0aW9uIGFzIHZvbGF0aWxlIGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlTmFtZSB7c3RyaW5nfSBZb3VyIGFyYml0cmFyeSBUZWFsaXVtIGluc3RhbmNlIG5hbWUgcHJvdmlkZWQgYXQgaW5pdCB0aW1lXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFZvbGF0aWxlKGluc3RhbmNlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==