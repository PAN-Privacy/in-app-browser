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
var FileChooserOriginal = /** @class */ (function (_super) {
    __extends(FileChooserOriginal, _super);
    function FileChooserOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileChooserOriginal.prototype.open = function (options) { return cordova(this, "open", {}, arguments); };
    FileChooserOriginal.pluginName = "FileChooser";
    FileChooserOriginal.plugin = "cordova-plugin-filechooser";
    FileChooserOriginal.pluginRef = "fileChooser";
    FileChooserOriginal.repo = "https://github.com/ihadeed/cordova-filechooser";
    FileChooserOriginal.platforms = ["Android"];
    return FileChooserOriginal;
}(IonicNativePlugin));
var FileChooser = new FileChooserOriginal();
export { FileChooser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtY2hvb3Nlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUF1Q3ZDLCtCQUFpQjs7OztJQU9oRCwwQkFBSSxhQUFDLE9BQTRCOzs7Ozs7c0JBL0NuQztFQXdDaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBGaWxlQ2hvb3Nlck9wdGlvbnMge1xuICAvKipcbiAgICogY29tbWEgc2VwZXJhdGVkIG1pbWUgdHlwZXMgdG8gZmlsdGVyIGZpbGVzLlxuICAgKi9cbiAgbWltZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEZpbGUgQ2hvb3NlclxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogT3BlbnMgdGhlIGZpbGUgcGlja2VyIG9uIEFuZHJvaWQgZm9yIHRoZSB1c2VyIHRvIHNlbGVjdCBhIGZpbGUsIHJldHVybnMgYSBmaWxlIFVSSS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpbGVDaG9vc2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlLWNob29zZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbGVDaG9vc2VyOiBGaWxlQ2hvb3NlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5maWxlQ2hvb3Nlci5vcGVuKClcbiAqICAgLnRoZW4odXJpID0+IGNvbnNvbGUubG9nKHVyaSkpXG4gKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBGaWxlQ2hvb3Nlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGaWxlQ2hvb3NlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGVjaG9vc2VyJyxcbiAgcGx1Z2luUmVmOiAnZmlsZUNob29zZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2loYWRlZWQvY29yZG92YS1maWxlY2hvb3NlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGVDaG9vc2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogT3BlbiBhIGZpbGVcbiAgICogQHBhcmFtIHtGaWxlQ2hvb3Nlck9wdGlvbnN9IFtvcHRpb25zXSAgT3B0aW9uYWwgcGFyYW1ldGVyLCBkZWZhdWx0cyB0byAnJy4gRmlsdGVycyB0aGUgZmlsZSBzZWxlY3Rpb24gbGlzdCBhY2NvcmRpbmcgdG8gbWltZSB0eXBlc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcGVuKG9wdGlvbnM/OiBGaWxlQ2hvb3Nlck9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19