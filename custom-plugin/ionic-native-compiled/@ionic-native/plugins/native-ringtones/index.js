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
var NativeRingtonesOriginal = /** @class */ (function (_super) {
    __extends(NativeRingtonesOriginal, _super);
    function NativeRingtonesOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeRingtonesOriginal.prototype.getRingtone = function () { return cordova(this, "getRingtone", {}, arguments); };
    NativeRingtonesOriginal.prototype.playRingtone = function (ringtoneUri) { return cordova(this, "playRingtone", {}, arguments); };
    NativeRingtonesOriginal.prototype.stopRingtone = function (ringtoneUri) { return cordova(this, "stopRingtone", {}, arguments); };
    NativeRingtonesOriginal.pluginName = "native-ringtones";
    NativeRingtonesOriginal.plugin = "cordova-plugin-native-ringtones";
    NativeRingtonesOriginal.pluginRef = "cordova.plugins.NativeRingtones";
    NativeRingtonesOriginal.repo = "https://github.com/TongZhangzt/cordova-plugin-native-ringtones";
    NativeRingtonesOriginal.platforms = ["Android", "iOS"];
    return NativeRingtonesOriginal;
}(IonicNativePlugin));
var NativeRingtones = new NativeRingtonesOriginal();
export { NativeRingtones };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS1yaW5ndG9uZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBa0NuQyxtQ0FBaUI7Ozs7SUFNcEQscUNBQVc7SUFVWCxzQ0FBWSxhQUFDLFdBQW1CO0lBVWhDLHNDQUFZLGFBQUMsV0FBbUI7Ozs7OzswQkE1RGxDO0VBa0NxQyxpQkFBaUI7U0FBekMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBiZXRhXG4gKiBAbmFtZSBOYXRpdmUgUmluZ3RvbmVzXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBwbHVnaW4gaGVscHMgZ2V0IHRoZSBuYXRpdmUgcmluZ3RvbmVzIGxpc3Qgb24gQW5kcm9pZCBvciBJT1MgZGV2aWNlcy5cbiAqIEFuZCB5b3UgY2FuIGFsc28gdXNlIHRoaXMgcGx1Z2luIHRvIHBsYXkgb3Igc3RvcCB0aGUgbmF0aXZlIHJpbmd0b25lcyBhbmQgY3VzdG9tIHJpbmd0b25lcyhhZGRlZCBpbiB0aGUgd3d3IGZvbGRlcikuXG4gKlxuICogQHVzYWdlXG4gKiBgYGBcbiAqIGltcG9ydCB7IE5hdGl2ZVJpbmd0b25lcyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmF0aXZlLXJpbmd0b25lcy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHJpbmd0b25lczogTmF0aXZlUmluZ3RvbmVzKSB7IH1cbiAqXG4gKiAuLi5cbiAqIHRoaXMucmluZ3RvbmVzLmdldFJpbmd0b25lKCkudGhlbigocmluZ3RvbmVzKSA9PiB7IGNvbnNvbGUubG9nKHJpbmd0b25lcyk7IH0pO1xuICpcbiAqIHRoaXMucmluZ3RvbmVzLnBsYXlSaW5ndG9uZSgnYXNzZXRzL3Jpbmd0b25lcy9zb3VuZF8xLmNhZicpO1xuICpcbiAqIHRoaXMucmluZ3RvbmVzLnN0b3BSaW5ndG9uZSgnYXNzZXRzL3Jpbmd0b25lcy9zb3VuZF8xLmNhZicpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ25hdGl2ZS1yaW5ndG9uZXMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uYXRpdmUtcmluZ3RvbmVzJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLk5hdGl2ZVJpbmd0b25lcycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVG9uZ1poYW5nenQvY29yZG92YS1wbHVnaW4tbmF0aXZlLXJpbmd0b25lcycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXRpdmVSaW5ndG9uZXMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBHZXQgdGhlIHJpbmd0b25lIGxpc3Qgb2YgdGhlIGRldmljZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiByaW5ndG9uZXMgZm91bmQgc3VjY2Vzc2Z1bGx5XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFJpbmd0b25lKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RhcnRzIHBsYXlpbmcgdGhlIHJpbmd0b25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByaW5ndG9uZVVyaSBUaGUgcGF0aCB0byB0aGUgcmluZ3RvbmUgZmlsZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBsYXlSaW5ndG9uZShyaW5ndG9uZVVyaTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzdG9wcyBwbGF5aW5nIHRoZSByaW5ndG9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmluZ3RvbmVVcmkgVGhlIHBhdGggdG8gdGhlIHJpbmd0b25lIGZpbGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wUmluZ3RvbmUocmluZ3RvbmVVcmk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=