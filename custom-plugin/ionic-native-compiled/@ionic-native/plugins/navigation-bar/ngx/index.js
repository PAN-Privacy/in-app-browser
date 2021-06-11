import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var NavigationBar = /** @class */ (function (_super) {
    __extends(NavigationBar, _super);
    function NavigationBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationBar.prototype.setUp = function (autohide) { return cordova(this, "setUp", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    NavigationBar.prototype.hideNavigationBar = function () { return cordova(this, "hideNavigationBar", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    NavigationBar.pluginName = "NavigationBar";
    NavigationBar.plugin = "cordova-plugin-navigationbar";
    NavigationBar.pluginRef = "navigationbar";
    NavigationBar.repo = "https://github.com/cranberrygame/cordova-plugin-navigationbar";
    NavigationBar.platforms = ["Android"];
    NavigationBar.decorators = [
        { type: Injectable }
    ];
    return NavigationBar;
}(IonicNativePlugin));
export { NavigationBar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdmlnYXRpb24tYmFyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTRCckMsaUNBQWlCOzs7O0lBV2xELDZCQUFLLGFBQUMsUUFBa0I7SUFheEIseUNBQWlCOzs7Ozs7O2dCQXpCbEIsVUFBVTs7d0JBNUJYO0VBNkJtQyxpQkFBaUI7U0FBdkMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBiZXRhXG4gKiBAbmFtZSBOYXZpZ2F0aW9uIEJhclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgTmF2aWdhdGlvbkJhciBwbHVnaW4gYWxsb3dzIHlvdSB0byBoaWRlIGFuZCBhdXRvIGhpZGUgdGhlIGFuZHJvaWQgbmF2aWdhdGlvbiBiYXIuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBOYXZpZ2F0aW9uQmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uYXZpZ2F0aW9uLWJhci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF2aWdhdGlvbkJhcjogTmF2aWdhdGlvbkJhcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogbGV0IGF1dG9IaWRlOiBib29sZWFuID0gdHJ1ZTtcbiAqIHRoaXMubmF2aWdhdGlvbkJhci5zZXRVcChhdXRvSGlkZSk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdOYXZpZ2F0aW9uQmFyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbmF2aWdhdGlvbmJhcicsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRpb25iYXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NyYW5iZXJyeWdhbWUvY29yZG92YS1wbHVnaW4tbmF2aWdhdGlvbmJhcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25CYXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBoaWRlIGF1dG9tYXRpY2FsbHkgKG9yIG5vdCkgdGhlIG5hdmlnYXRpb24gYmFyLlxuICAgKiBAcGFyYW0gYXV0b2hpZGUge2Jvb2xlYW59XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3MnLFxuICAgIGVycm9yTmFtZTogJ2ZhaWx1cmUnLFxuICB9KVxuICBzZXRVcChhdXRvaGlkZT86IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBuYXZpZ2F0aW9uIGJhci5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2VzcycsXG4gICAgZXJyb3JOYW1lOiAnZmFpbHVyZScsXG4gIH0pXG4gIGhpZGVOYXZpZ2F0aW9uQmFyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=