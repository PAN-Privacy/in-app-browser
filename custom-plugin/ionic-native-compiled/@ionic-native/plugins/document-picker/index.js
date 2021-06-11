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
var DocumentPickerOriginal = /** @class */ (function (_super) {
    __extends(DocumentPickerOriginal, _super);
    function DocumentPickerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentPickerOriginal.prototype.getFile = function (option) { return cordova(this, "getFile", {}, arguments); };
    DocumentPickerOriginal.pluginName = "IOSDocumentPicker";
    DocumentPickerOriginal.plugin = "cordova-plugin-documentpicker.DocumentPicker";
    DocumentPickerOriginal.pluginRef = "DocumentPicker";
    DocumentPickerOriginal.repo = "https://github.com/iampossible/Cordova-DocPicker";
    DocumentPickerOriginal.platforms = ["iOS"];
    return DocumentPickerOriginal;
}(IonicNativePlugin));
var DocumentPicker = new DocumentPickerOriginal();
export { DocumentPicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RvY3VtZW50LXBpY2tlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQnBDLGtDQUFpQjs7OztJQU9uRCxnQ0FBTyxhQUFDLE1BQWU7Ozs7Ozt5QkF2Q3pCO0VBZ0NvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIGlPUyBEb2N1bWVudFBpY2tlclxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogT3BlbnMgdGhlIGZpbGUgcGlja2VyIG9uIGlPUyBmb3IgdGhlIHVzZXIgdG8gc2VsZWN0IGEgZmlsZSwgcmV0dXJucyBhIGZpbGUgVVJJLlxuICogQWxsb3dzIHRoZSB1c2VyIHRvIHVwbG9hZCBmaWxlcyBmcm9tIGlDbG91ZFxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRG9jdW1lbnRQaWNrZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RvY3VtZW50LXBpY2tlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9jUGlja2VyOiBEb2N1bWVudFBpY2tlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5kb2NQaWNrZXIuZ2V0RmlsZSgnYWxsJylcbiAqICAgLnRoZW4odXJpID0+IGNvbnNvbGUubG9nKHVyaSkpXG4gKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJT1NEb2N1bWVudFBpY2tlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRvY3VtZW50cGlja2VyLkRvY3VtZW50UGlja2VyJyxcbiAgcGx1Z2luUmVmOiAnRG9jdW1lbnRQaWNrZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2lhbXBvc3NpYmxlL0NvcmRvdmEtRG9jUGlja2VyJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb2N1bWVudFBpY2tlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIE9wZW4gYSBmaWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9uXSBmaWxlcyBiZXR3ZWVuICdpbWFnZScsICdwZGYnIG9yICdhbGwnXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEZpbGUob3B0aW9uPzogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==