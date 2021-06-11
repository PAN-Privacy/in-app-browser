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
var SqliteDbCopyOriginal = /** @class */ (function (_super) {
    __extends(SqliteDbCopyOriginal, _super);
    function SqliteDbCopyOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SqliteDbCopyOriginal.prototype.copy = function (dbname, location) { return cordova(this, "copy", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    SqliteDbCopyOriginal.prototype.checkDbOnStorage = function (dbname, source) { return cordova(this, "checkDbOnStorage", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    SqliteDbCopyOriginal.prototype.copyDbFromStorage = function (dbname, location, source, deleteolddb) { return cordova(this, "copyDbFromStorage", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    SqliteDbCopyOriginal.prototype.copyDbToStorage = function (dbname, location, destination, overwrite) { return cordova(this, "copyDbToStorage", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    SqliteDbCopyOriginal.prototype.remove = function (dbname, location) { return cordova(this, "remove", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    SqliteDbCopyOriginal.pluginName = "cordova-plugin-dbcopy";
    SqliteDbCopyOriginal.plugin = "cordova-plugin-dbcopy";
    SqliteDbCopyOriginal.pluginRef = "window.plugins.sqlDB";
    SqliteDbCopyOriginal.repo = "https://github.com/an-rahulpandey/cordova-plugin-dbcopy";
    SqliteDbCopyOriginal.platforms = ["Android", "iOS"];
    return SqliteDbCopyOriginal;
}(IonicNativePlugin));
var SqliteDbCopy = new SqliteDbCopyOriginal();
export { SqliteDbCopy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NxbGl0ZS1kYi1jb3B5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQStCdEMsZ0NBQWlCOzs7O0lBaUJqRCwyQkFBSSxhQUFDLE1BQWMsRUFBRSxRQUFnQjtJQWFyQyx1Q0FBZ0IsYUFBQyxNQUFjLEVBQUUsTUFBYztJQXFCL0Msd0NBQWlCLGFBQUMsTUFBYyxFQUFFLFFBQWdCLEVBQUUsTUFBYyxFQUFFLFdBQW9CO0lBcUJ4RixzQ0FBZSxhQUFDLE1BQWMsRUFBRSxRQUFnQixFQUFFLFdBQW1CLEVBQUUsU0FBa0I7SUFtQnpGLDZCQUFNLGFBQUMsTUFBYyxFQUFFLFFBQWdCOzs7Ozs7dUJBM0h6QztFQWdDa0MsaUJBQWlCO1NBQXRDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBTcWxpdGUgRGIgQ29weVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU3FsaXRlRGJDb3B5IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zcWxpdGUtZGItY29weS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNxbGl0ZURiQ29weTogU3FsaXRlRGJDb3B5KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5zcWxpdGVEYkNvcHkuY29weSgnc2FtcGxlLmRiJywgMClcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdjb3Jkb3ZhLXBsdWdpbi1kYmNvcHknLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kYmNvcHknLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cucGx1Z2lucy5zcWxEQicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYW4tcmFodWxwYW5kZXkvY29yZG92YS1wbHVnaW4tZGJjb3B5JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNxbGl0ZURiQ29weSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvcHkgZGF0YWJhc2UgZnJvbSB3d3cgZGlyZWN0b3J5IHRvIGRldmljZSBTUUxpdGUgREIgbG9jYXRpb25cbiAgICogKGZvciBpb3Mgb25seSwgdXNlIDAgZm9yIEFuZHJvaWQpXG4gICAqIGxvY2F0aW9uID0gMDsgLy8gKERpc2FibGUgaUNsb3VkIEJhY2t1cCkgSWYgc2V0IHdpbGwgY29weSB0aGUgZGF0YWJhc2UgdG8gTGlicmFyeS9Mb2NhbERhdGFiYXNlLiBUaGUgZGF0YWJhc2Ugd2lsbCBub3QgYmUgc3luY2VkIGJ5IHRoZSBpQ2xvdWQgQmFja3VwLlxuICAgKiBvclxuICAgKiBsb2NhdGlvbiA9IDE7IC8vIElmIHNldCB3aWxsIGNvcHkgdGhlIGRhdGFiYXNlIHRvIExpYnJhcnkgZm9sZGVyIGluc3RlYWQgb2YgRG9jdW1lbnRzIGZvbGRlci5cbiAgICogb3JcbiAgICogbG9jYXRpb24gPSAyOyAvLyBJdCB3aWxsIGNvcHkgdGhlIGRhdGFiYXNlIGluIHRoZSBkZWZhdWx0IFNRTGl0ZSBEYXRhYmFzZSBkaXJlY3RvcnkuIFRoaXMgaXMgdGhlIGRlZmF1bHQgbG9jYXRpb24gZm9yIGRhdGFiYXNlXG4gICAqIEBwYXJhbSBkYm5hbWUge3N0cmluZ30gRGF0YWJhc2UgZmlsZSBuYW1lIGF2YWlsYWJsZSBpbiB3d3cgZGlyZXRvcnkgd2l0aCBleHRlbnNpb24uVGhlIHBsdWdpbiB3aWxsIGxvb2sgZm9yIGFuZCBjb3B5IHRoZSBmaWxlIGFjY29yZGluZyB0byB0aGUgZmlsZW5hbWUgcHJvdmlkZWQgaGVyZS4gQW5kIHRoZSBzYW1lIGZpbGUgbmFtZSBzaG91bGQgYmUgdXNlZCB3aGlsZSBvcGVuaW5nIHRoZSBkYXRhYmFzZSB2aWEgU1FMaXRlUGx1Z2luXG4gICAqIEBwYXJhbSBsb2NhdGlvbiB7bnVtYmVyfSBMb2NhdGlvbiB3aGVyZSB0byBjb3B5IHRoZSBkYXRhYmFzZSBmb3IgYXBwIChvbmx5IGFwcGxpY2FibGUgZm9yIGlvcykuRm9yIEFuZHJvaWQgcGFzcyAwLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiAzLFxuICB9KVxuICBjb3B5KGRibmFtZTogc3RyaW5nLCBsb2NhdGlvbjogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrIGlmIGRhdGFiYXNlIGlzIGF2YWlsYWJsZSBhdCBleHRlcm5hbCBzdG9yYWdlLiBVc2VmdWwgd2hlbiB0cnlpbmcgdG8gY29weWluZyB0aGUgZGF0YWJhc2UgZnJvbSBkZXZpY2Ugc2RjYXJkLlxuICAgKiBAcGFyYW0gZGJuYW1lIHtzdHJpbmd9IE5hbWUgb2YgdGhlIGRhdGFiYXNlIGZpbGUgd2hpY2ggaXMgYXZhaWxhYmxlIG9uIGV4dGVybmFsIG9yIGludGVucmFsIHN0b3JhZ2VcbiAgICogQHBhcmFtIHNvdXJjZSB7c3RyaW5nfSBGdWxsIG5hdGl2ZSBwYXRoIGZvciB0aGUgZm9sZGVyIGluIHdoaWNoIGRiIGZpbGUgaXMgcHJlc2VudC4gVGhlIFwiL1wiIG11c3QgYmUgYWRkZWQgYXQgdGhlIGVuZCBvZiBwYXRoLiBGb3IuZWcuIC9zZGNhcmQvbXlkYi8uIFNob3VsZCBub3QgaW5jbHVkZSBkYm5hbWUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDIsXG4gICAgZXJyb3JJbmRleDogMyxcbiAgfSlcbiAgY2hlY2tEYk9uU3RvcmFnZShkYm5hbWU6IHN0cmluZywgc291cmNlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogQ29weSBkYXRhYmFzZSB3aGljaCBpcyBhdmFpbGFibGUgb24gdGhlIGRldmljZSBleHRlcm5hbC9pbnRlcm5hbCBzdG9yYWdlIHRvIGFwcCBkZWZhdWx0IGRiIGxvY2F0aW9uXG4gICAqIChmb3IgaW9zIG9ubHksIHVzZSAwIGZvciBBbmRyb2lkKVxuICAgKiBsb2NhdGlvbiA9IDA7IC8vIChEaXNhYmxlIGlDbG91ZCBCYWNrdXApIElmIHNldCB3aWxsIGNvcHkgdGhlIGRhdGFiYXNlIHRvIExpYnJhcnkvTG9jYWxEYXRhYmFzZS4gVGhlIGRhdGFiYXNlIHdpbGwgbm90IGJlIHN5bmNlZCBieSB0aGUgaUNsb3VkIEJhY2t1cC5cbiAgICogb3JcbiAgICogbG9jYXRpb24gPSAxOyAvLyBJZiBzZXQgd2lsbCBjb3B5IHRoZSBkYXRhYmFzZSB0byBMaWJyYXJ5IGZvbGRlciBpbnN0ZWFkIG9mIERvY3VtZW50cyBmb2xkZXIuXG4gICAqIG9yXG4gICAqIGxvY2F0aW9uID0gMjsgLy8gSXQgd2lsbCBjb3B5IHRoZSBkYXRhYmFzZSBpbiB0aGUgZGVmYXVsdCBTUUxpdGUgRGF0YWJhc2UgZGlyZWN0b3J5LiBUaGlzIGlzIHRoZSBkZWZhdWx0IGxvY2F0aW9uIGZvciBkYXRhYmFzZVxuICAgKiBAcGFyYW0gZGJuYW1lIHtzdHJpbmd9IElzIHRoZSBuYW1lIG9mIHRoZSBkYXRhYmFzZSB5b3Ugd2FudCB0byBjb3B5LiBUaGUgcGx1Z2luIHdpbGwgbG9vayBmb3IgYW5kIGNvcHkgdGhlIGZpbGUgYWNjb3JkaW5nIHRvIHRoZSBmaWxlbmFtZSBwcm92aWRlZCBoZXJlLiBBbmQgdGhlIHNhbWUgZmlsZSBuYW1lIHNob3VsZCBiZSB1c2VkIHdoaWxlIG9wZW5pbmcgdGhlIGRhdGFiYXNlIHZpYSBTUUxpdGVQbHVnaW5cbiAgICogQHBhcmFtIGxvY2F0aW9uIHtudW1iZXJ9IExvY2F0aW9uIHdoZXJlIHRvIGNvcHkgdGhlIGRhdGFiYXNlIGZvciBhcHAgKG9ubHkgYXBwbGljYWJsZSBmb3IgaW9zKS4gRm9yIEFuZHJvaWQgcGFzcyAwLlxuICAgKiBAcGFyYW0gc291cmNlIHtzdHJpbmd9IFNvdXJjZSBGaWxlIGxvY2F0aW9uIGxpa2UgL3NkY2FyZC9teWRiL2RiLmRiLiBQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIGV4aXN0aW5nIGxvY2F0aW9uIGFuZCB0aGUgZGJuYW1lIHNob3VsZCBiZSBwcmVzZW50IGluIHRoZSBwYXRoLlxuICAgKiBAcGFyYW0gZGVsZXRlb2xkZGIge2Jvb2xlYW59IEEgYm9vbGVhbiB2YWx1ZSBpZiBzZXQgdG8gdHJ1ZSwgd2lsbCBkZWxldGUgdGhlIGV4aXN0aW5nIGRiIGZyb20gdGhlIGxvY2FsIGFwcCBkYXRhYmFzZSBmb2xkZXIgYmVmb3JlIGNvcHlpbmcgdGhlIG5ldyBkYi4gUGxlYXNlIHByb3ZpZGUgcHJvcGVyIGJvb2xlYW4gdmFsdWUgdHJ1ZSBvciBmYWxzZTtcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogNCxcbiAgICBlcnJvckluZGV4OiA1LFxuICB9KVxuICBjb3B5RGJGcm9tU3RvcmFnZShkYm5hbWU6IHN0cmluZywgbG9jYXRpb246IG51bWJlciwgc291cmNlOiBzdHJpbmcsIGRlbGV0ZW9sZGRiOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIENvcHkgdGhlIGFwcCBkYXRhYmFzZSB0byBleHRlcm5hbC9pbnRlcm5hbCBzdG9yYWdlIG9uIHRoZSBkZXZpY2UuXG4gICAqIChmb3IgaW9zIG9ubHksIHVzZSAwIGZvciBBbmRyb2lkKVxuICAgKiBsb2NhdGlvbiA9IDA7IC8vSXQgd2lsbCBjb3B5IHRoZSBkYXRhYmFzZSBmcm9tIExpYnJhcnkvTG9jYWxEYXRhYmFzZSBsb2NhdGlvbi5cbiAgICogb3JcbiAgICogbG9jYXRpb24gPSAxOyAvLyBJdCB3aWxsIGNvcHkgdGhlIGRhdGFiYXNlIGZyb20gTGlicmFyeSBmb2xkZXIgaW5zdGVhZC5cbiAgICogb3JcbiAgICogbG9jYXRpb24gPSAyOyAvLyBJdCB3aWxsIGNvcHkgdGhlIGRhdGFiYXNlIGZyb20gdGhlIGRlZmF1bHQgU1FMaXRlIERhdGFiYXNlIGRpcmVjdG9yeS4gVGhpcyBpcyB0aGUgZGVmYXVsdCBsb2NhdGlvbiBmb3IgZGF0YWJhc2VcbiAgICogQHBhcmFtIGRibmFtZSB7c3RyaW5nfSBJcyB0aGUgbmFtZSBvZiB0aGUgZGF0YWJhc2UgeW91IHdhbnQgdG8gY29weS4gVGhlIHBsdWdpbiB3aWxsIGxvb2sgZm9yIGFuZCBjb3B5IHRoZSBmaWxlIGFjY29yZGluZyB0byB0aGUgZmlsZW5hbWUgcHJvdmlkZWQgaGVyZS4gQW5kIHRoZSBzYW1lIGZpbGUgbmFtZSBzaG91bGQgYmUgdXNlZCB3aGlsZSBvcGVuaW5nIHRoZSBkYXRhYmFzZSB2aWEgU1FMaXRlUGx1Z2luLlxuICAgKiBAcGFyYW0gbG9jYXRpb24ge251bWJlcn0gTG9jYXRpb24gd2hlcmUgdG8gY29weSB0aGUgZGF0YWJhc2UgZm9yIGFwcCAob25seSBhcHBsaWNhYmxlIGZvciBpb3MpLiBGb3IgQW5kcm9pZCBwYXNzIDAuXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbiB7c3RyaW5nfSBEZXN0aW5hdGlvbiBGaWxlIGxvY2F0aW9uIGxpa2UgL3NkY2FyZC9teWRiLyBQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIGV4aXN0aW5nIGxvY2F0aW9uIGFuZCBcIi9cIiBzaG91bGQgYmUgcHJlc2VudCBhdCB0aGUgZW5kIG9mIHRoZSBwYXRoLiBEbyBub3QgYXBwZW5kIGRiIG5hbWUgaW4gdGhlIHBhdGguXG4gICAqIEBwYXJhbSBvdmVyd3JpdGUge2Jvb2xlYW59ICBJZiBzZXQgdG8gdHJ1ZSwgdGhlbiB3aWxsIHJlcGxhY2UgdGhlIGZpbGUgYXQgdGhlIGRlc3RpbmF0aW9uLiBPdGhlcndpc2Ugd2lsbCB0aHJvdyBhbiBlcnJvciwgaWYgZGVzdGluYXRpb24gZmlsZSBhbHJlYWR5IGV4aXN0cy5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogNCxcbiAgICBlcnJvckluZGV4OiA1LFxuICB9KVxuICBjb3B5RGJUb1N0b3JhZ2UoZGJuYW1lOiBzdHJpbmcsIGxvY2F0aW9uOiBudW1iZXIsIGRlc3RpbmF0aW9uOiBzdHJpbmcsIG92ZXJ3cml0ZTogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBhbGxvd3MgeW91IHRvIHJlbW92ZSB0aGUgZGF0YWJhc2UgZnJvbSB0aGUgYXBwcyBkZWZhdWx0IGRhdGFiYXNlIHN0b3JhZ2UgbG9jYXRpb24uXG4gICAqIChmb3IgaW9zIG9ubHksIHVzZSAwIGZvciBBbmRyb2lkKVxuICAgKiBsb2NhdGlvbiA9IDA7IC8vIChEaXNhYmxlIGlDbG91ZCBCYWNrdXApIElmIHNldCB3aWxsIGNvcHkgdGhlIGRhdGFiYXNlIHRvIExpYnJhcnkvTG9jYWxEYXRhYmFzZS4gVGhlIGRhdGFiYXNlIHdpbGwgbm90IGJlIHN5bmNlZCBieSB0aGUgaUNsb3VkIEJhY2t1cC5cbiAgICogb3JcbiAgICogbG9jYXRpb24gPSAxOyAvLyBJZiBzZXQgd2lsbCBjb3B5IHRoZSBkYXRhYmFzZSB0byBMaWJyYXJ5IGZvbGRlciBpbnN0ZWFkIG9mIERvY3VtZW50cyBmb2xkZXIuXG4gICAqIG9yXG4gICAqIGxvY2F0aW9uID0gMjsgLy8gSXQgd2lsbCBjb3B5IHRoZSBkYXRhYmFzZSBpbiB0aGUgZGVmYXVsdCBTUUxpdGUgRGF0YWJhc2UgZGlyZWN0b3J5LiBUaGlzIGlzIHRoZSBkZWZhdWx0IGxvY2F0aW9uIGZvciBkYXRhYmFzZVxuICAgKiBAcGFyYW0gZGJuYW1lIHtzdHJpbmd9IElzIHRoZSBuYW1lIG9mIHRoZSBkYXRhYmFzZSB5b3Ugd2FudCB0byByZW1vdmUuIElmIHRoZSBkYXRhYmFzZSBmaWxlIGlzIGhhdmluZyBhbnkgZXh0ZW5zaW9uLCBwbGVhc2UgcHJvdmlkZSB0aGF0IGFsc28uXG4gICAqIEBwYXJhbSBsb2NhdGlvbiB7bnVtYmVyfSBMb2NhdGlvbiB3aGVyZSB0byBjb3B5IHRoZSBkYXRhYmFzZSBmb3IgYXBwIChvbmx5IGFwcGxpY2FibGUgZm9yIGlvcykuRm9yIEFuZHJvaWQgcGFzcyAwLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gIH0pXG4gIHJlbW92ZShkYm5hbWU6IHN0cmluZywgbG9jYXRpb246IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=