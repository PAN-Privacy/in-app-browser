import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova, checkAvailability, cordovaInstance, instancePropertyGet, instancePropertySet } from '@ionic-native/core';
var SQLiteObject = /** @class */ (function () {
    function SQLiteObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    SQLiteObject.prototype.addTransaction = function (transaction) { return cordovaInstance(this, "addTransaction", { "sync": true }, arguments); };
    SQLiteObject.prototype.transaction = function (fn) { return cordovaInstance(this, "transaction", { "successIndex": 2, "errorIndex": 1 }, arguments); };
    SQLiteObject.prototype.readTransaction = function (fn) { return cordovaInstance(this, "readTransaction", {}, arguments); };
    SQLiteObject.prototype.startNextTransaction = function () { return cordovaInstance(this, "startNextTransaction", { "sync": true }, arguments); };
    SQLiteObject.prototype.open = function () { return cordovaInstance(this, "open", {}, arguments); };
    SQLiteObject.prototype.close = function () { return cordovaInstance(this, "close", {}, arguments); };
    SQLiteObject.prototype.executeSql = function (statement, params) { return cordovaInstance(this, "executeSql", {}, arguments); };
    SQLiteObject.prototype.sqlBatch = function (sqlStatements) { return cordovaInstance(this, "sqlBatch", {}, arguments); };
    SQLiteObject.prototype.abortallPendingTransactions = function () { return cordovaInstance(this, "abortallPendingTransactions", { "sync": true }, arguments); };
    Object.defineProperty(SQLiteObject.prototype, "databaseFeatures", {
        get: function () { return instancePropertyGet(this, "databaseFeatures"); },
        set: function (value) { instancePropertySet(this, "databaseFeatures", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SQLiteObject.prototype, "openDBs", {
        get: function () { return instancePropertyGet(this, "openDBs"); },
        set: function (value) { instancePropertySet(this, "openDBs", value); },
        enumerable: false,
        configurable: true
    });
    return SQLiteObject;
}());
export { SQLiteObject };
var SQLite = /** @class */ (function (_super) {
    __extends(SQLite, _super);
    function SQLite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SQLite.prototype.create = function (config) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    sqlitePlugin.openDatabase(config, function (db) { return resolve(new SQLiteObject(db)); }, reject);
                });
            }
        })();
    };
    SQLite.prototype.echoTest = function () { return cordova(this, "echoTest", {}, arguments); };
    SQLite.prototype.selfTest = function () { return cordova(this, "selfTest", {}, arguments); };
    SQLite.prototype.deleteDatabase = function (config) { return cordova(this, "deleteDatabase", {}, arguments); };
    SQLite.pluginName = "SQLite";
    SQLite.pluginRef = "sqlitePlugin";
    SQLite.plugin = "cordova-sqlite-storage";
    SQLite.repo = "https://github.com/litehelpers/Cordova-sqlite-storage";
    SQLite.platforms = ["Android", "iOS", "macOS", "Windows"];
    SQLite.decorators = [
        { type: Injectable }
    ];
    return SQLite;
}(IonicNativePlugin));
export { SQLite };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NxbGl0ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw0R0FPTixNQUFNLG9CQUFvQixDQUFDOztJQXdEMUIsc0JBQW1CLGVBQW9CO1FBQXBCLG9CQUFlLEdBQWYsZUFBZSxDQUFLO0lBQUcsQ0FBQztJQVEzQyxxQ0FBYyxhQUFDLFdBQTRDO0lBVTNELGtDQUFXLGFBQUMsRUFBK0I7SUFTM0Msc0NBQWUsYUFBQyxFQUFtQztJQU9uRCwyQ0FBb0I7SUFNcEIsMkJBQUk7SUFRSiw0QkFBSztJQVNMLGlDQUFVLGFBQUMsU0FBaUIsRUFBRSxNQUFjO0lBUzVDLCtCQUFRLGFBQUMsYUFBMEM7SUFPbkQsa0RBQTJCOzBCQXZFUCwwQ0FBZ0I7Ozs7OzswQkFDaEIsaUNBQU87Ozs7Ozt1QkFuRTdCOzs7O0lBMEw0QiwwQkFBaUI7Ozs7SUFVM0MsdUJBQU0sYUFBQyxNQUE0Qjs7O21EQUF5QjtnQkFDMUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO29CQUNqQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxVQUFDLEVBQU8sSUFBSyxPQUFBLE9BQU8sQ0FBQyxJQUFJLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUE3QixDQUE2QixFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN4RixDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFPRCx5QkFBUTtJQVNSLHlCQUFRO0lBVVIsK0JBQWMsYUFBQyxNQUE0Qjs7Ozs7OztnQkF6QzVDLFVBQVU7O2lCQXpMWDtFQTBMNEIsaUJBQWlCO1NBQWhDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb3Jkb3ZhLFxuICBDb3Jkb3ZhQ2hlY2ssXG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VQcm9wZXJ0eSxcbiAgSW9uaWNOYXRpdmVQbHVnaW4sXG4gIFBsdWdpbixcbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZGVjbGFyZSBjb25zdCBzcWxpdGVQbHVnaW46IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBTUUxpdGVEYXRhYmFzZUNvbmZpZyB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBkYXRhYmFzZS4gRXhhbXBsZTogJ215LmRiJ1xuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogTG9jYXRpb24gb2YgdGhlIGRhdGFiYXNlLiBFeGFtcGxlOiAnZGVmYXVsdCdcbiAgICovXG4gIGxvY2F0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogaU9TIERhdGFiYXNlIExvY2F0aW9uLiBFeGFtcGxlOiAnTGlicmFyeSdcbiAgICovXG4gIGlvc0RhdGFiYXNlTG9jYXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzdXBwb3J0IGFyYml0cmFyeSBkYXRhYmFzZSBsb2NhdGlvbiBvbiBhbmRyb2lkIHdpdGggaHR0cHM6Ly9naXRodWIuY29tL2xpdGVoZWxwZXJzL2NvcmRvdmEtc3FsaXRlLWV2Y29yZS1leHRidWlsZC1mcmVlXG4gICAqL1xuICBhbmRyb2lkRGF0YWJhc2VMb2NhdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIHN1cHBvcnQgb3BlbmluZyBwcmUtZmlsbGVkIGRhdGFiYXNlcyB3aXRoIGh0dHBzOi8vZ2l0aHViLmNvbS9saXRlaGVscGVycy9jb3Jkb3ZhLXNxbGl0ZS1leHRcbiAgICovXG4gIGNyZWF0ZUZyb21Mb2NhdGlvbj86IG51bWJlcjtcbiAgLyoqXG4gICAqIHN1cHBvcnQgZW5jcnlwdGVkIGRhdGFiYXNlcyB3aXRoIGh0dHBzOi8vZ2l0aHViLmNvbS9saXRlaGVscGVycy9Db3Jkb3ZhLXNxbGNpcGhlci1hZGFwdGVyXG4gICAqL1xuICBrZXk/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIERiVHJhbnNhY3Rpb24ge1xuICBleGVjdXRlU3FsOiAoc3FsOiBhbnksIHZhbHVlcz86IGFueVtdLCBzdWNjZXNzPzogRnVuY3Rpb24sIGVycm9yPzogRnVuY3Rpb24pID0+IHZvaWQ7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNRTGl0ZVRyYW5zYWN0aW9uIGV4dGVuZHMgRGJUcmFuc2FjdGlvbiB7XG4gIHN0YXJ0OiAoKSA9PiB2b2lkO1xuICBhZGRTdGF0ZW1lbnQ6IERiVHJhbnNhY3Rpb25bJ2V4ZWN1dGVTcWwnXTtcbiAgaGFuZGxlU3RhdGVtZW50U3VjY2VzczogKGhhbmRsZXI6IEZ1bmN0aW9uLCByZXNwb25zZTogYW55KSA9PiB2b2lkO1xuICBoYW5kbGVTdGF0ZW1lbnRGYWlsdXJlOiAoaGFuZGxlcjogRnVuY3Rpb24sIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQ7XG4gIHJ1bjogKCkgPT4gdm9pZDtcbiAgYWJvcnQ6ICh0eEZhaWx1cmU6IGFueSkgPT4gdm9pZDtcbiAgZmluaXNoOiAoKSA9PiB2b2lkO1xuICBhYm9ydEZyb21ROiAoc3FsZXJyb3I6IGFueSkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBTUUxpdGVPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX29iamVjdEluc3RhbmNlOiBhbnkpIHt9XG5cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBkYXRhYmFzZUZlYXR1cmVzOiB7IGlzU1FMaXRlUGx1Z2luRGF0YWJhc2U6IGJvb2xlYW4gfTtcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBvcGVuREJzOiBhbnk7XG5cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgYWRkVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246ICh0eDogU1FMaXRlVHJhbnNhY3Rpb24pID0+IHZvaWQpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzdWNjZXNzSW5kZXg6IDIsXG4gICAgZXJyb3JJbmRleDogMSxcbiAgfSlcbiAgdHJhbnNhY3Rpb24oZm46ICh0eDogRGJUcmFuc2FjdGlvbikgPT4gdm9pZCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVhZFRyYW5zYWN0aW9uKGZuOiAodHg6IFNRTGl0ZVRyYW5zYWN0aW9uKSA9PiB2b2lkKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzdGFydE5leHRUcmFuc2FjdGlvbigpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgb3BlbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGNsb3NlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGUgU1FMIG9uIHRoZSBvcGVuZWQgZGF0YWJhc2UuIE5vdGUsIHlvdSBtdXN0IGNhbGwgYGNyZWF0ZWAgZmlyc3QsIGFuZFxuICAgKiBlbnN1cmUgaXQgcmVzb2x2ZWQgYW5kIHN1Y2Nlc3NmdWxseSBvcGVuZWQgdGhlIGRhdGFiYXNlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGV4ZWN1dGVTcWwoc3RhdGVtZW50OiBzdHJpbmcsIHBhcmFtcz86IGFueVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHNxbFN0YXRlbWVudHMge3N0cmluZ1tdIHwgc3RyaW5nW11bXSB8IGFueVtdfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHNxbEJhdGNoKHNxbFN0YXRlbWVudHM6IChzdHJpbmcgfCBzdHJpbmdbXSB8IGFueSlbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgYWJvcnRhbGxQZW5kaW5nVHJhbnNhY3Rpb25zKCk6IHZvaWQge31cbn1cblxuLyoqXG4gKiBAbmFtZSBTUUxpdGVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFjY2VzcyBTUUxpdGUgZGF0YWJhc2VzIG9uIHRoZSBkZXZpY2UuXG4gKlxuICogQHVzYWdlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU1FMaXRlLCBTUUxpdGVPYmplY3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NxbGl0ZS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3FsaXRlOiBTUUxpdGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuc3FsaXRlLmNyZWF0ZSh7XG4gKiAgIG5hbWU6ICdkYXRhLmRiJyxcbiAqICAgbG9jYXRpb246ICdkZWZhdWx0J1xuICogfSlcbiAqICAgLnRoZW4oKGRiOiBTUUxpdGVPYmplY3QpID0+IHtcbiAqXG4gKlxuICogICAgIGRiLmV4ZWN1dGVTcWwoJ2NyZWF0ZSB0YWJsZSBkYW5jZU1vdmVzKG5hbWUgVkFSQ0hBUigzMikpJywgW10pXG4gKiAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnRXhlY3V0ZWQgU1FMJykpXG4gKiAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gKlxuICpcbiAqICAgfSlcbiAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICpcbiAqIGBgYFxuICpcbiAqIEBjbGFzc2VzXG4gKiBTUUxpdGVPYmplY3RcbiAqIEBpbnRlcmZhY2VzXG4gKiBTUUxpdGVEYXRhYmFzZUNvbmZpZ1xuICogU1FMaXRlVHJhbnNhY3Rpb25cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTUUxpdGUnLFxuICBwbHVnaW5SZWY6ICdzcWxpdGVQbHVnaW4nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXNxbGl0ZS1zdG9yYWdlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9saXRlaGVscGVycy9Db3Jkb3ZhLXNxbGl0ZS1zdG9yYWdlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ21hY09TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1FMaXRlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogT3BlbiBvciBjcmVhdGUgYSBTUUxpdGUgZGF0YWJhc2UgZmlsZS5cbiAgICpcbiAgICogU2VlIHRoZSBwbHVnaW4gZG9jcyBmb3IgYW4gZXhwbGFuYXRpb24gb2YgYWxsIG9wdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9saXRlaGVscGVycy9Db3Jkb3ZhLXNxbGl0ZS1zdG9yYWdlI29wZW5pbmctYS1kYXRhYmFzZVxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnIHtTUUxpdGVEYXRhYmFzZUNvbmZpZ30gZGF0YWJhc2UgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJuIFByb21pc2U8U1FMaXRlT2JqZWN0PlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNyZWF0ZShjb25maWc6IFNRTGl0ZURhdGFiYXNlQ29uZmlnKTogUHJvbWlzZTxTUUxpdGVPYmplY3Q+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc3FsaXRlUGx1Z2luLm9wZW5EYXRhYmFzZShjb25maWcsIChkYjogYW55KSA9PiByZXNvbHZlKG5ldyBTUUxpdGVPYmplY3QoZGIpKSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgdGhhdCBib3RoIHRoZSBKYXZhc2NyaXB0IGFuZCBuYXRpdmUgcGFydCBvZiB0aGlzIHBsdWdpbiBhcmUgaW5zdGFsbGVkIGluIHlvdXIgYXBwbGljYXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZWNob1Rlc3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQXV0b21hdGljYWxseSB2ZXJpZnkgYmFzaWMgZGF0YWJhc2UgYWNjZXNzIG9wZXJhdGlvbnMgaW5jbHVkaW5nIG9wZW5pbmcgYSBkYXRhYmFzZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZWxmVGVzdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgZGF0YWJhc2VcbiAgICogQHBhcmFtIGNvbmZpZyB7U1FMaXRlRGF0YWJhc2VDb25maWd9IGRhdGFiYXNlIGNvbmZpZ3VyYXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlRGF0YWJhc2UoY29uZmlnOiBTUUxpdGVEYXRhYmFzZUNvbmZpZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=