import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Luxand = /** @class */ (function (_super) {
    __extends(Luxand, _super);
    function Luxand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Luxand.prototype.init = function (config) { return cordova(this, "init", {}, arguments); };
    Luxand.prototype.register = function (params) { return cordova(this, "register", {}, arguments); };
    Luxand.prototype.login = function (params) { return cordova(this, "login", {}, arguments); };
    Luxand.prototype.clear = function (id) { return cordova(this, "clear", {}, arguments); };
    Luxand.prototype.clearMemory = function () { return cordova(this, "clearMemory", {}, arguments); };
    Luxand.pluginName = "Luxand";
    Luxand.plugin = "codova-plugin-luxand";
    Luxand.pluginRef = "window.Luxand";
    Luxand.repo = "https://github.com/molobala/cordova-plugin-luxand";
    Luxand.platforms = ["Android", "iOS"];
    Luxand.decorators = [
        { type: Injectable }
    ];
    return Luxand;
}(IonicNativePlugin));
export { Luxand };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2x1eGFuZC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUEyRjVDLDBCQUFpQjs7OztJQU8zQyxxQkFBSSxhQUFDLE1BQW9CO0lBU3pCLHlCQUFRLGFBQUMsTUFBMkI7SUFTcEMsc0JBQUssYUFBQyxNQUEyQjtJQVNqQyxzQkFBSyxhQUFDLEVBQVU7SUFRaEIsNEJBQVc7Ozs7Ozs7Z0JBM0NaLFVBQVU7O2lCQTNGWDtFQTRGNEIsaUJBQWlCO1NBQWhDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBMdXhhbmRDb25maWcge1xuICAvKiogVGhlIGxpY2VuY2Uga2V5IGdvdHRlbiBmcm9tIEx1eGFuZCAqL1xuICBsaWNlbmNlOiBzdHJpbmc7XG4gIC8qKiBUaGUgaW50ZXJuYWwgZGF0YWJhc2UgbmFtZSB0aGUgdHJhY2tlciBzaG91bGQgdXNlICovXG4gIGRibmFtZTogc3RyaW5nO1xuICAvKiogdGhlIG51bWJlciBvZiByZXRyaWVzIHdoZW4gcmVnaXN0ZXJpbmcgb3IgaWRlbnRpZnlpbmcgYSBmYWNlICovXG4gIGxvZ2luVHJ5Q291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPTUxGYWNpYWxEYXRhIHtcbiAgLyoqIFRoZSBzdGF0dXMgbWVzc2FnZSAqL1xuICBzdGF0dXM6IHN0cmluZztcbiAgLyoqIFRoZSBtZXNzYWdlIHJldHVybmVkIGJ5IHRoZSBwbHVnaW4gKi9cbiAgbWVzc2FnZTogc3RyaW5nO1xuICAvKiogVGhlIHVuaXF1ZSBuYW1lIGdlbmVyYXRlZCBhbmQgYXNzb2NpYXRlZCB0byBhIGZhY2Ugd2hlbiByZWdpc3RlcmluZyAqL1xuICBuYW1lOiBzdHJpbmc7XG4gIC8qKiBUaGUgdW5pcXVlIGlkIEx1eGFuZCBGYWNlIFNESyB0cmFja2VyIGFzc29jaWF0ZXMgdG8gYSBmYWNlIGluIGl0J3MgaW50ZXJuYWwgZGF0YWJhc2UgKi9cbiAgaWQ6IG51bWJlcjtcbiAgLyoqIEV4dHJhIGluZm9ybWF0aW9uIGFib3V0IHRoZSBmYWNlIGluY2x1ZGluZyBhZ2UsIGV4cHJlc3Npb25zICovXG4gIGV4dHJhOiB7XG4gICAgQUdFPzogYW55O1xuICAgIEdFTkRFUj86IGFueTtcbiAgICBFWUVTT1BFTkVEPzogYW55O1xuICAgIFNNSUxFOiBhbnk7XG4gIH07XG59XG5cbi8qKlxuICogQG5hbWUgTHV4YW5kXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGxldCB5b3UgaW50ZWdyYXRlIEx1eGFuZCBGYWNlIFNESyBpbnRvIHlvdXIgaW9uaWMgcHJvamVjdHMsIHNvIHlvdSBjYW4gaW1wbGVtZW50IGZhY2UgYXV0aGVudGljYXRpb24gZWFzaWx5IGluIHlvdXIgYXBwbGljYXRpb24uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBMdXhhbmQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2x1eGFuZCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbHV4YW5kOiBMdXhhbmQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vaW5pdCBMdXhhbmQgIEZhY2UgU0RLXG4gKlxuICogdGhpcy5sdXhhbmQuaW5pdCh7XG4gKiAgbGljZW5jZTogXCJcIixcbiAqICBkYm5hbWU6IFwiZGF0YS5kYXRcIixcbiAqICBsb2dpblRyeUNvdW50OiAzXG4gKiB9KVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICogLy8gcmVnaXN0ZXIgYSBmYWNlXG4gKiB0aGlzLmx1eGFuZC5yZWdpc3Rlcih7XG4gKiAgdGltZW91dDogMjAwMDAvLzIwIHNlY29uZHNcbiAqIH0pXG4gKiAudGhlbihyPT57XG4gKiAgY29uc29sZS5sb2coXCJZb3VyIEZBQ0UgSUQ6XCIsIHIuaWQpO1xuICogIGNvbnNvbGUubG9nKFwiWW91ciBBR0U6XCIsIHIuZXh0cmEuQUdFKTtcbiAqICBjb25zb2xlLmxvZyhcIllvdXIgR0VOREVSOlwiLCByLmV4dHJhLkdFTkRFUik7XG4gKiAgY29uc29sZS5sb2coXCJTSU1JTElORzpcIiwgci5leHRyYS5TTUlMRT4zNT8gXCJZRVNcIjogXCJOT1wiKTtcbiAqICBjb25zb2xlLmxvZyhcIkVZRSBPUEVORUQ6XCIsIHIuZXh0cmEuRVlFU09QRU5FRD40NT8gXCJZRVNcIjogXCJOT1wiKTtcbiAqIH0pXG4gKiAuY2F0Y2goZXJyPT57XG4gKiAgaWYoZXJyLm1lc3NnYWUgPT09IFwiQWxyZWFkeSByZWdpc3RlcmVkXCIpIHtcbiAqICAgIC8vZXh0cmEgZGF0YSBhdmFpbGFibGVcbiAqICAgIGNvbnNvbGUubG9nKFwiWW91ciBBR0U6XCIsIHIuZXh0cmEuQUdFKTtcbiAqICAgIGNvbnNvbGUubG9nKFwiWW91ciBHRU5ERVI6XCIsIHIuZXh0cmEuR0VOREVSKTtcbiAqICAgIGNvbnNvbGUubG9nKFwiU0lNSUxJTkc6XCIsIHIuZXh0cmEuU01JTEU+MzU/IFwiWUVTXCI6IFwiTk9cIik7XG4gKiAgICBjb25zb2xlLmxvZyhcIkVZRSBPUEVORUQ6XCIsIHIuZXh0cmEuRVlFU09QRU5FRD40NT8gXCJZRVNcIjogXCJOT1wiKTtcbiAqICB9XG4gKiB9KVxuICogLy90byBsb2dpbiB1c2luZyBhIGZhY2VcbiAqIHRoaXMubHV4YW5kLmxvZ2luKHtcbiAqIHRpbWVvdXQ6IDIwMDAwXG4gKiB9KS50aGVuKHI9PmNvbnNvbGUubG9nKHIpKVxuICogLmNhdGNoKGVycj0+Y29uc29sZS5sb2coZXJyKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogT01MRmFjaWFsRGF0YVxuICogTHV4YW5kQ29uZmlnXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTHV4YW5kJyxcbiAgcGx1Z2luOiAnY29kb3ZhLXBsdWdpbi1sdXhhbmQnLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuTHV4YW5kJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tb2xvYmFsYS9jb3Jkb3ZhLXBsdWdpbi1sdXhhbmQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHV4YW5kIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSBMdXhhbmQgU0RLXG4gICAqIEBwYXJhbSBjb25maWcge0x1eGFuZENvbmZpZ30gTHV4YW5kQ29uZmlnIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHRvIHVzZSB0byBpbml0IHRoZSBTREtcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSAvLyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGlmIEx1eGFuZCBGYWNlU0RLIGlzIGluaXRpYWxpemVkIHN1Y2Nlc2ZmdWxseVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbml0KGNvbmZpZzogTHV4YW5kQ29uZmlnKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIElkZW50aWZ5IG1ldGhvZGUsIHRyeSB0byByZWdpc3RlciBhIGZhY2UgaW4gaW50ZXJuYWwgZGF0YSBiYXNlXG4gICAqIEBwYXJhbSBwYXJhbXMge2FueX0gQWxsb3cgdG8gc3BlY2lmeSB0aGUgdGltZW91dCB2YWx1ZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPE9NTEZhY2lhbERhdGE+fSAvLyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmUgaWYgYSBmYWNlIGhhcyBiZWVuIGRldGVjdGVkIGFuZCBzYXZlZCBieSB0aGUgdHJhY2tlciBpbiB0aGUgaW50ZXJuYWwgZGF0YWJhc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVnaXN0ZXIocGFyYW1zOiB7IHRpbWVvdXQ6IG51bWJlciB9KTogUHJvbWlzZTxPTUxGYWNpYWxEYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBMb2dpbiBtZXRob2QsIHRyeSB0byBhdXRoZW50aWNhdGVkIGEgZmFjZVxuICAgKiBAcGFyYW0gcGFyYW1zIHthbnl9IEFsbG93IHRvIHNwZWNpZnkgdGhlIHRpbWVvdXQgdmFsdWVcbiAgICogQHJldHVybiB7UHJvbWlzZTxPTUxGYWNpYWxEYXRhPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9naW4ocGFyYW1zOiB7IHRpbWVvdXQ6IG51bWJlciB9KTogUHJvbWlzZTxPTUxGYWNpYWxEYXRhPiB7XG4gICAgcmV0dXJuOyAvLyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmUgaWYgYSBmYWNlIGlzIHJlY29nbml6ZSBzdWNjZXNzZnVsbHlcbiAgfVxuICAvKipcbiAgICogY2xlYXIgbWV0aG9kLCB0cnkgdG8gcmVtb3ZlIGEgZmFjZSBmcm9tIGludGVybmFsIGRhdGFiYXNlXG4gICAqIEBwYXJhbSBpZCB7bnVtYmVyfVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsZWFyKGlkOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogY2xlYXJNZW1vcnkgbWV0aG9kLCB0cnkgdG8gY2xlYXIgaW50ZXJuYWwgZGF0YWJhc2VcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbGVhck1lbW9yeSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19