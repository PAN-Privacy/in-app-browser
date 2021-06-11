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
var HeaderColorOriginal = /** @class */ (function (_super) {
    __extends(HeaderColorOriginal, _super);
    function HeaderColorOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderColorOriginal.prototype.tint = function (color) { return cordova(this, "tint", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    HeaderColorOriginal.pluginName = "HeaderColor";
    HeaderColorOriginal.plugin = "cordova-plugin-headercolor";
    HeaderColorOriginal.pluginRef = "plugins.headerColor";
    HeaderColorOriginal.repo = "https://github.com/tomloprod/cordova-plugin-headercolor";
    HeaderColorOriginal.platforms = ["Android"];
    return HeaderColorOriginal;
}(IonicNativePlugin));
var HeaderColor = new HeaderColorOriginal();
export { HeaderColor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2hlYWRlci1jb2xvci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUEwQnZDLCtCQUFpQjs7OztJQVdoRCwwQkFBSSxhQUFDLEtBQWE7Ozs7OztzQkF0Q3BCO0VBMkJpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEhlYWRlciBDb2xvclxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIHBsdWdpbiB0byBjaGFuZ2UgY29sb3Igb2YgaGVhZGVyIGluIEFuZHJvaWQgTXVsdGl0YXNrIFZpZXdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEhlYWRlckNvbG9yIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9oZWFkZXItY29sb3Ivbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGhlYWRlckNvbG9yOiBIZWFkZXJDb2xvcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5oZWFkZXJDb2xvci50aW50KCcjYmVjYjI5Jyk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdIZWFkZXJDb2xvcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhlYWRlcmNvbG9yJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5oZWFkZXJDb2xvcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdG9tbG9wcm9kL2NvcmRvdmEtcGx1Z2luLWhlYWRlcmNvbG9yJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29sb3IgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTZXQgYSBjb2xvciB0byB0aGUgdGFzayBoZWFkZXJcbiAgICogQHBhcmFtIGNvbG9yIHtzdHJpbmd9IFRoZSBoZXggdmFsdWUgb2YgdGhlIGNvbG9yXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ29iamVjdCcsXG4gICAgc3VjY2Vzc05hbWU6ICdzdWNjZXNzJyxcbiAgICBlcnJvck5hbWU6ICdmYWlsdXJlJyxcbiAgfSlcbiAgdGludChjb2xvcjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==