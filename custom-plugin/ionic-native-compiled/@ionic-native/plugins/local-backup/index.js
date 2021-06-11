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
var LocalBackupOriginal = /** @class */ (function (_super) {
    __extends(LocalBackupOriginal, _super);
    function LocalBackupOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalBackupOriginal.prototype.create = function (data) { return cordova(this, "create", {}, arguments); };
    LocalBackupOriginal.prototype.read = function () { return cordova(this, "read", {}, arguments); };
    LocalBackupOriginal.prototype.exists = function () { return cordova(this, "exists", {}, arguments); };
    LocalBackupOriginal.prototype.remove = function () { return cordova(this, "remove", {}, arguments); };
    LocalBackupOriginal.pluginName = "LocalBackup";
    LocalBackupOriginal.plugin = "cordova-plugin-local-backup";
    LocalBackupOriginal.pluginRef = "LocalBackup";
    LocalBackupOriginal.repo = "https://github.com/MaximBelov/cordova-plugin-local-backup";
    LocalBackupOriginal.install = "ionic cordova plugin add cordova-plugin-local-backup";
    LocalBackupOriginal.platforms = ["Android", "iOS"];
    return LocalBackupOriginal;
}(IonicNativePlugin));
var LocalBackup = new LocalBackupOriginal();
export { LocalBackup };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xvY2FsLWJhY2t1cC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnQ3ZDLCtCQUFpQjs7OztJQUVoRCw0QkFBTSxhQUFDLElBQVM7SUFLaEIsMEJBQUk7SUFLSiw0QkFBTTtJQUtOLDRCQUFNOzs7Ozs7O3NCQWxEUjtFQWlDaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBMb2NhbEJhY2t1cFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiB0byBjcmVhdGUgbG9jYWwgYmFja3VwXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBMb2NhbEJhY2t1cCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbG9jYWwtYmFja3VwL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYWxCYWNrdXA6IExvY2FsQmFja3VwKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5sb2NhbEJhY2t1cC5jcmVhdGUoe2RhdGE6IHtrZXk6ICd2YWx1ZSd9fSlcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdMb2NhbEJhY2t1cCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWxvY2FsLWJhY2t1cCcsXG4gIHBsdWdpblJlZjogJ0xvY2FsQmFja3VwJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NYXhpbUJlbG92L2NvcmRvdmEtcGx1Z2luLWxvY2FsLWJhY2t1cCcsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tbG9jYWwtYmFja3VwJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsQmFja3VwIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YSgpXG4gIGNyZWF0ZShkYXRhOiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHJlYWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGV4aXN0cygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHJlbW92ZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==