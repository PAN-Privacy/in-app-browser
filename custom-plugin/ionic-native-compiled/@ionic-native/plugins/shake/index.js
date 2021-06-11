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
import { Observable } from 'rxjs';
var ShakeOriginal = /** @class */ (function (_super) {
    __extends(ShakeOriginal, _super);
    function ShakeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShakeOriginal.prototype.startWatch = function (sensitivity) { return cordova(this, "startWatch", { "observable": true, "clearFunction": "stopWatch", "successIndex": 0, "errorIndex": 2 }, arguments); };
    ShakeOriginal.pluginName = "Shake";
    ShakeOriginal.plugin = "cordova-plugin-shake";
    ShakeOriginal.pluginRef = "shake";
    ShakeOriginal.repo = "https://github.com/leecrossley/cordova-plugin-shake";
    ShakeOriginal.platforms = ["iOS"];
    return ShakeOriginal;
}(IonicNativePlugin));
var Shake = new ShakeOriginal();
export { Shake };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NoYWtlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBMkJQLHlCQUFpQjs7OztJQVkxQywwQkFBVSxhQUFDLFdBQW9COzs7Ozs7Z0JBekNqQztFQTZCMkIsaUJBQWlCO1NBQS9CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbi8qKlxuICogQG5hbWUgU2hha2VcbiAqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIHNoYWtlIGdlc3R1cmVcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU2hha2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NoYWtlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzaGFrZTogU2hha2UpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0IHdhdGNoID0gdGhpcy5zaGFrZS5zdGFydFdhdGNoKDYwKS5zdWJzY3JpYmUoKCkgPT4ge1xuICogICAvLyBkbyBzb21ldGhpbmdcbiAqICAgfSk7XG4gKlxuICogd2F0Y2gudW5zdWJzY3JpYmUoKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NoYWtlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc2hha2UnLFxuICBwbHVnaW5SZWY6ICdzaGFrZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbGVlY3Jvc3NsZXkvY29yZG92YS1wbHVnaW4tc2hha2UnLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNoYWtlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogV2F0Y2ggZm9yIHNoYWtlIGdlc3R1cmVcbiAgICogQHBhcmFtIHNlbnNpdGl2aXR5IHtudW1iZXJ9IE9wdGlvbmFsIHNlbnNpdGl2aXR5IHBhcmFtZXRlci4gRGVmYXVsdHMgdG8gNDBcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdzdG9wV2F0Y2gnLFxuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAyLFxuICB9KVxuICBzdGFydFdhdGNoKHNlbnNpdGl2aXR5PzogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==