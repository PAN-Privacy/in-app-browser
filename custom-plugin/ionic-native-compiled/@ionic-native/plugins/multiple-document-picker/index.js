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
var MultipleDocumentsPickerOriginal = /** @class */ (function (_super) {
    __extends(MultipleDocumentsPickerOriginal, _super);
    function MultipleDocumentsPickerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultipleDocumentsPickerOriginal.prototype.pick = function (type) { return cordova(this, "pick", {}, arguments); };
    MultipleDocumentsPickerOriginal.pluginName = "MultipleDocumentsPicker";
    MultipleDocumentsPickerOriginal.plugin = "cordova-plugin-multiple-documents-picker";
    MultipleDocumentsPickerOriginal.pluginRef = "multipleDocumentsPicker";
    MultipleDocumentsPickerOriginal.repo = "https://github.com/akeotech/cordova-plugin-multiple-documents-picker";
    MultipleDocumentsPickerOriginal.platforms = ["Android", "iOS"];
    return MultipleDocumentsPickerOriginal;
}(IonicNativePlugin));
var MultipleDocumentsPicker = new MultipleDocumentsPickerOriginal();
export { MultipleDocumentsPicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL211bHRpcGxlLWRvY3VtZW50LXBpY2tlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBS0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQjNCLDJDQUFpQjs7OztJQU81RCxzQ0FBSSxhQUFDLElBQVk7Ozs7OztrQ0EzQ25CO0VBb0M2QyxpQkFBaUI7U0FBakQsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgd3JhcHBlciBmb3IgTXVsdGlwbGVEb2N1bWVudHNQaWNrZXIgcGx1Z2luXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBNdWx0aXBsZSBEb2N1bWVudHMgUGlja2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB1c2VycyB0byBwaWNrIG11bHRpcGxlIGRvY3VtZW50cy9pbWFnZXMgYXQgb25jZVxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTXVsdGlwbGVEb2N1bWVudHNQaWNrZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL211bHRpcGxlLWRvY3VtZW50LXBpY2tlci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG11bHRpcGxlRG9jdW1lbnRzUGlja2VyOiBNdWx0aXBsZURvY3VtZW50c1BpY2tlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMubXVsdGlwbGVEb2N1bWVudHNQaWNrZXIucGljaygxKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ011bHRpcGxlRG9jdW1lbnRzUGlja2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbXVsdGlwbGUtZG9jdW1lbnRzLXBpY2tlcicsXG4gIHBsdWdpblJlZjogJ211bHRpcGxlRG9jdW1lbnRzUGlja2VyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ha2VvdGVjaC9jb3Jkb3ZhLXBsdWdpbi1tdWx0aXBsZS1kb2N1bWVudHMtcGlja2VyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE11bHRpcGxlRG9jdW1lbnRzUGlja2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBhbGxvdyB1c2VyIHRvIHNob3cgbmF0aXZlIGZpbGUgcGlja2VyXG4gICAqIEBwYXJhbSB0eXBlIHtudW1iZXJ9IFRvIHBpY2sgdHlwZSBvZiBmaWxlczogZm9yIGltYWdlcyBzZW5kIDEsIGZvciBhbGwgZmlsZXMgc2VuZCAyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBpY2sodHlwZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG59XG4iXX0=