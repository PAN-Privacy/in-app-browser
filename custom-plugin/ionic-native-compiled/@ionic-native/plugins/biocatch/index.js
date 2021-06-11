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
var BioCatchOriginal = /** @class */ (function (_super) {
    __extends(BioCatchOriginal, _super);
    function BioCatchOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BioCatchOriginal.prototype.start = function (customerSessionID, wupUrl, publicKey) { return cordova(this, "start", {}, arguments); };
    BioCatchOriginal.prototype.pause = function () { return cordova(this, "pause", {}, arguments); };
    BioCatchOriginal.prototype.resume = function () { return cordova(this, "resume", {}, arguments); };
    BioCatchOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    BioCatchOriginal.prototype.resetSession = function () { return cordova(this, "resetSession", {}, arguments); };
    BioCatchOriginal.prototype.changeContext = function (contextName) { return cordova(this, "changeContext", {}, arguments); };
    BioCatchOriginal.prototype.updateCustomerSessionID = function (customerSessionID) { return cordova(this, "updateCustomerSessionID", {}, arguments); };
    BioCatchOriginal.pluginName = "BioCatch";
    BioCatchOriginal.plugin = "cordova-plugin-biocatch";
    BioCatchOriginal.pluginRef = "BioCatch";
    BioCatchOriginal.repo = "https://bitbucket.org/carlos_orellana/ionic-plugin";
    BioCatchOriginal.platforms = ["iOS", "Android"];
    return BioCatchOriginal;
}(IonicNativePlugin));
var BioCatch = new BioCatchOriginal();
export { BioCatch };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jpb2NhdGNoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQStCMUMsNEJBQWlCOzs7O0lBUzdDLHdCQUFLLGFBQUMsaUJBQWdDLEVBQUUsTUFBYyxFQUFFLFNBQXdCO0lBU2hGLHdCQUFLO0lBU0wseUJBQU07SUFTTix1QkFBSTtJQVNKLCtCQUFZO0lBVVosZ0NBQWEsYUFBQyxXQUFtQjtJQVVqQywwQ0FBdUIsYUFBQyxpQkFBZ0M7Ozs7OzttQkFqRzFEO0VBZ0M4QixpQkFBaUI7U0FBbEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEJpb0NhdGNoXG4gKiBAZGVzY3JpcHRpb25cbiAqIEJpb0NhdGNoIFNESyBDb3Jkb3ZhIHN1cHBvcnRcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJpb0NhdGNoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iaW9jYXRjaCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmlvY2F0Y2g6IEJpb0NhdGNoKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5iaW9jYXRjaC5zdGFydCgnY3VzdG9tZXItc2Vzc2lvbi0xJywgJ2h0dHA6Ly9leGFtcGxlLmNvbScsICdzb21lLXB1YmxpYy1rZXknKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Jpb0NhdGNoJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYmlvY2F0Y2gnLFxuICBwbHVnaW5SZWY6ICdCaW9DYXRjaCcsXG4gIHJlcG86ICdodHRwczovL2JpdGJ1Y2tldC5vcmcvY2FybG9zX29yZWxsYW5hL2lvbmljLXBsdWdpbicsXG4gIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCaW9DYXRjaCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFN0YXJ0IGEgc2Vzc2lvblxuICAgKiBAcGFyYW0gY3VzdG9tZXJTZXNzaW9uSUQge1N0cmluZ30gQ3VzdG9tZXIgc2Vzc2lvbiBpZFxuICAgKiBAcGFyYW0gd3VwVXJsIHtTdHJpbmd9IFdVUCBzZXJ2ZXIgVVJMXG4gICAqIEBwYXJhbSBwdWJsaWNLZXkge1N0cmluZ30gUHVibGljIEtleVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydChjdXN0b21lclNlc3Npb25JRDogc3RyaW5nIHwgbnVsbCwgd3VwVXJsOiBzdHJpbmcsIHB1YmxpY0tleTogc3RyaW5nIHwgbnVsbCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXVzZSB0aGUgc2Vzc2lvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVzdW1lIHRoZSBzZXNzaW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlc3VtZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcCB0aGUgc2Vzc2lvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgc2Vzc2lvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXNldFNlc3Npb24oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSB0aGUgc2Vzc2lvbiBjb250ZXh0XG4gICAqIEBwYXJhbSBjb250ZXh0TmFtZSB7U3RyaW5nfSBDb250ZXh0IG5hbWVcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2hhbmdlQ29udGV4dChjb250ZXh0TmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgY3VzdG9tZXIgc2Vzc2lvbiBJRFxuICAgKiBAcGFyYW0gY3VzdG9tZXJTZXNzaW9uSUQge1N0cmluZ31cbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdXBkYXRlQ3VzdG9tZXJTZXNzaW9uSUQoY3VzdG9tZXJTZXNzaW9uSUQ6IHN0cmluZyB8IG51bGwpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==