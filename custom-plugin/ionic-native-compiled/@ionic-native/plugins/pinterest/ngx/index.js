import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var Pinterest = /** @class */ (function (_super) {
    __extends(Pinterest, _super);
    function Pinterest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pinterest.prototype.login = function (scopes) { return cordova(this, "login", {}, arguments); };
    Pinterest.prototype.getMe = function (fields) { return cordova(this, "getMe", { "callbackOrder": "reverse" }, arguments); };
    Pinterest.prototype.getMyPins = function (fields, limit) { return cordova(this, "getMyPins", { "callbackOrder": "reverse" }, arguments); };
    Pinterest.prototype.getMyBoards = function (fields, limit) { return cordova(this, "getMyBoards", { "callbackOrder": "reverse" }, arguments); };
    Pinterest.prototype.getMyLikes = function (fields, limit) { return cordova(this, "getMyLikes", { "callbackOrder": "reverse" }, arguments); };
    Pinterest.prototype.getMyFollowers = function (fields, limit) { return cordova(this, "getMyFollowers", { "callbackOrder": "reverse" }, arguments); };
    Pinterest.prototype.getMyFollowedBoards = function (fields, limit) { return cordova(this, "getMyFollowedBoards", { "callbackOrder": "reverse" }, arguments); };
    Pinterest.prototype.getMyFollowedInterests = function (fields, limit) { return cordova(this, "getMyFollowedInterests", { "callbackOrder": "reverse" }, arguments); };
    Pinterest.prototype.getUser = function (username, fields) { return cordova(this, "getUser", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Pinterest.prototype.getBoard = function (boardId, fields) { return cordova(this, "getBoard", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Pinterest.prototype.getBoardPins = function (boardId, fields, limit) { return cordova(this, "getBoardPins", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Pinterest.prototype.deleteBoard = function (boardId) { return cordova(this, "deleteBoard", {}, arguments); };
    Pinterest.prototype.createBoard = function (name, desc) { return cordova(this, "createBoard", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    Pinterest.prototype.getPin = function (pinId, fields) { return cordova(this, "getPin", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Pinterest.prototype.deletePin = function (pinId) { return cordova(this, "deletePin", {}, arguments); };
    Pinterest.prototype.createPin = function (note, boardId, imageUrl, link) { return cordova(this, "createPin", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    Object.defineProperty(Pinterest.prototype, "SCOPES", {
        get: function () { return cordovaPropertyGet(this, "SCOPES"); },
        set: function (value) { cordovaPropertySet(this, "SCOPES", value); },
        enumerable: false,
        configurable: true
    });
    Pinterest.pluginName = "Pinterest";
    Pinterest.plugin = "cordova-plugin-pinterest";
    Pinterest.pluginRef = "cordova.plugins.Pinterest";
    Pinterest.repo = "https://github.com/zyramedia/cordova-plugin-pinterest";
    Pinterest.install = "ionic cordova plugin add cordova-plugin-pinterest --variable APP_ID=YOUR_APP_ID";
    Pinterest.installVariables = ["APP_ID"];
    Pinterest.platforms = ["Android", "iOS"];
    Pinterest.decorators = [
        { type: Injectable }
    ];
    return Pinterest;
}(IonicNativePlugin));
export { Pinterest };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3BpbnRlcmVzdC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQzs7SUFrTDFELDZCQUFpQjs7OztJQWtCOUMseUJBQUssYUFBQyxNQUFnQjtJQVl0Qix5QkFBSyxhQUFDLE1BQWU7SUFhckIsNkJBQVMsYUFBQyxNQUFlLEVBQUUsS0FBYztJQWF6QywrQkFBVyxhQUFDLE1BQWUsRUFBRSxLQUFjO0lBYTNDLDhCQUFVLGFBQUMsTUFBZSxFQUFFLEtBQWM7SUFhMUMsa0NBQWMsYUFBQyxNQUFlLEVBQUUsS0FBYztJQWE5Qyx1Q0FBbUIsYUFBQyxNQUFlLEVBQUUsS0FBYztJQWFuRCwwQ0FBc0IsYUFBQyxNQUFlLEVBQUUsS0FBYztJQWN0RCwyQkFBTyxhQUFDLFFBQWdCLEVBQUUsTUFBZTtJQWN6Qyw0QkFBUSxhQUFDLE9BQWUsRUFBRSxNQUFlO0lBZXpDLGdDQUFZLGFBQUMsT0FBZSxFQUFFLE1BQWUsRUFBRSxLQUFjO0lBVTdELCtCQUFXLGFBQUMsT0FBZTtJQWMzQiwrQkFBVyxhQUFDLElBQVksRUFBRSxJQUFhO0lBY3ZDLDBCQUFNLGFBQUMsS0FBYSxFQUFFLE1BQWU7SUFVckMsNkJBQVMsYUFBQyxLQUFhO0lBZ0J2Qiw2QkFBUyxhQUFDLElBQVksRUFBRSxPQUFlLEVBQUUsUUFBZ0IsRUFBRSxJQUFhOzBCQWxOeEUsNkJBQU07Ozs7Ozs7Ozs7Ozs7O2dCQU5QLFVBQVU7O29CQWxMWDtFQW1MK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBpbnRlcmVzdFVzZXIge1xuICAvKipcbiAgICogVGhlIHVuaXF1ZSBzdHJpbmcgb2YgbnVtYmVycyBhbmQgbGV0dGVycyB0aGF0IGlkZW50aWZpZXMgdGhlIHVzZXIgb24gUGludGVyZXN0LlxuICAgKi9cbiAgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgdXNlcuKAmXMgUGludGVyZXN0IHVzZXJuYW1lLlxuICAgKi9cbiAgdXNlcm5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgdXNlcuKAmXMgZmlyc3QgbmFtZS5cbiAgICovXG4gIGZpcnN0X25hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgdXNlcuKAmXMgbGFzdCBuYW1lLlxuICAgKi9cbiAgbGFzdF9uYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHRleHQgaW4gdGhlIHVzZXLigJlzIOKAnEFib3V0IHlvdeKAnSBzZWN0aW9uIGluIHRoZWlyIHByb2ZpbGUuXG4gICAqL1xuICBiaW8/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0ZSB0aGUgdXNlciBjcmVhdGVkIHRoZWlyIGFjY291bnQgaW4gSVNPIDg2MDEgZm9ybWF0XG4gICAqL1xuICBjcmVhdGVkX2F0Pzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHVzZXLigJlzIHN0YXRzLCBpbmNsdWRpbmcgaG93IG1hbnkgUGlucywgZm9sbG93cywgYm9hcmRzIGFuZCBsaWtlcyB0aGV5IGhhdmUuXG4gICAqL1xuICBjb3VudHM/OiBhbnk7XG4gIC8qKlxuICAgKiBUaGUgdXNlcuKAmXMgcHJvZmlsZSBpbWFnZS4gVGhlIHJlc3BvbnNlIHJldHVybnMgdGhlIGltYWdl4oCZcyBVUkwsIHdpZHRoIGFuZCBoZWlnaHQuXG4gICAqL1xuICBpbWFnZT86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQaW50ZXJlc3RCb2FyZCB7XG4gIC8qKlxuICAgKiBUaGUgdW5pcXVlIHN0cmluZyBvZiBudW1iZXJzIGFuZCBsZXR0ZXJzIHRoYXQgaWRlbnRpZmllcyB0aGUgYm9hcmQgb24gUGludGVyZXN0LlxuICAgKi9cbiAgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgYm9hcmQuXG4gICAqL1xuICBuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGxpbmsgdG8gdGhlIGJvYXJkLlxuICAgKi9cbiAgdXJsPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHVzZXItZW50ZXJlZCBkZXNjcmlwdGlvbiBvZiB0aGUgYm9hcmQuXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBmaXJzdCBhbmQgbGFzdCBuYW1lLCBJRCBhbmQgcHJvZmlsZSBVUkwgb2YgdGhlIHVzZXIgd2hvIGNyZWF0ZWQgdGhlIGJvYXJkLlxuICAgKi9cbiAgY3JlYXRvcj86IFBpbnRlcmVzdFVzZXI7XG4gIC8qKlxuICAgKiBUaGUgZGF0ZSB0aGUgdXNlciBjcmVhdGVkIHRoZSBib2FyZC5cbiAgICovXG4gIGNyZWF0ZWRfYXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgYm9hcmTigJlzIHN0YXRzLCBpbmNsdWRpbmcgaG93IG1hbnkgUGlucywgZm9sbG93ZXJzLCB1c2VyJ3MgZm9sbG93aW5nIGFuZCBjb2xsYWJvcmF0b3JzIGl0IGhhcy5cbiAgICovXG4gIGNvdW50cz86IGFueTtcbiAgLyoqXG4gICAqIFRoZSB1c2Vy4oCZcyBwcm9maWxlIGltYWdlLiBUaGUgcmVzcG9uc2UgcmV0dXJucyB0aGUgaW1hZ2XigJlzIFVSTCwgd2lkdGggYW5kIGhlaWdodC5cbiAgICovXG4gIGltYWdlPzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBpbnRlcmVzdFBpbiB7XG4gIC8qKlxuICAgKiBUaGUgdW5pcXVlIHN0cmluZyBvZiBudW1iZXJzIGFuZCBsZXR0ZXJzIHRoYXQgaWRlbnRpZmllcyB0aGUgUGluIG9uIFBpbnRlcmVzdC5cbiAgICovXG4gIGlkPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIFVSTCBvZiB0aGUgd2VicGFnZSB3aGVyZSB0aGUgUGluIHdhcyBjcmVhdGVkLlxuICAgKi9cbiAgbGluaz86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBVUkwgb2YgdGhlIFBpbiBvbiBQaW50ZXJlc3QuXG4gICAqL1xuICB1cmw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZmlyc3QgYW5kIGxhc3QgbmFtZSwgSUQgYW5kIHByb2ZpbGUgVVJMIG9mIHRoZSB1c2VyIHdobyBjcmVhdGVkIHRoZSBib2FyZC5cbiAgICovXG4gIGNyZWF0b3I/OiBQaW50ZXJlc3RVc2VyO1xuICAvKipcbiAgICogVGhlIGJvYXJkIHRoYXQgdGhlIFBpbiBpcyBvbi5cbiAgICovXG4gIGJvYXJkPzogUGludGVyZXN0Qm9hcmQ7XG4gIC8qKlxuICAgKiBUaGUgZGF0ZSB0aGUgUGluIHdhcyBjcmVhdGVkLlxuICAgKi9cbiAgY3JlYXRlZF9hdD86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSB1c2VyLWVudGVyZWQgZGVzY3JpcHRpb24gb2YgdGhlIFBpbi5cbiAgICovXG4gIG5vdGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZG9taW5hbnQgY29sb3Igb2YgdGhlIFBpbuKAmXMgaW1hZ2UgaW4gaGV4IGNvZGUgZm9ybWF0LlxuICAgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgUGlu4oCZcyBzdGF0cywgaW5jbHVkaW5nIHRoZSBudW1iZXIgb2YgcmVwaW5zLCBjb21tZW50cyBhbmQgbGlrZXMuXG4gICAqL1xuICBjb3VudHM/OiBhbnk7XG4gIC8qKlxuICAgKiBUaGUgbWVkaWEgdHlwZSBvZiB0aGUgUGluIChpbWFnZSBvciB2aWRlbykuXG4gICAqL1xuICBtZWRpYT86IGFueTtcbiAgLyoqXG4gICAqIFRoZSBzb3VyY2UgZGF0YSBmb3IgdmlkZW9zLCBpbmNsdWRpbmcgdGhlIHRpdGxlLCBVUkwsIHByb3ZpZGVyLCBhdXRob3IgbmFtZSwgYXV0aG9yIFVSTCBhbmQgcHJvdmlkZXIgbmFtZS5cbiAgICovXG4gIGF0dHJpYnV0aW9uPzogYW55O1xuICAvKipcbiAgICogVGhlIFBpbuKAmXMgaW1hZ2UuIFRoZSBkZWZhdWx0IHJlc3BvbnNlIHJldHVybnMgdGhlIGltYWdl4oCZcyBVUkwsIHdpZHRoIGFuZCBoZWlnaHQuXG4gICAqL1xuICBpbWFnZT86IGFueTtcbiAgLyoqXG4gICAqIEV4dHJhIGluZm9ybWF0aW9uIGFib3V0IHRoZSBQaW4gZm9yIFJpY2ggUGlucy4gSW5jbHVkZXMgdGhlIFBpbiB0eXBlIChlLmcuLCBhcnRpY2xlLCByZWNpcGUpIGFuZCByZWxhdGVkIGluZm9ybWF0aW9uIChlLmcuLCBpbmdyZWRpZW50cywgYXV0aG9yKS5cbiAgICovXG4gIG1ldGFkYXRhPzogYW55O1xufVxuXG4vKipcbiAqIEBiZXRhXG4gKiBAbmFtZSBQaW50ZXJlc3RcbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBwbHVnaW4gZm9yIFBpbnRlcmVzdFxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUGludGVyZXN0LCBQaW50ZXJlc3RVc2VyLCBQaW50ZXJlc3RQaW4sIFBpbnRlcmVzdEJvYXJkIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9waW50ZXJlc3Qvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBpbnRlcmVzdDogUGludGVyZXN0KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zdCBzY29wZXMgPSBbXG4gKiAgIHRoaXMucGludGVyZXN0LlNDT1BFUy5SRUFEX1BVQkxJQyxcbiAqICAgdGhpcy5waW50ZXJlc3QuU0NPUEVTLldSSVRFX1BVQkxJQyxcbiAqICAgdGhpcy5waW50ZXJlc3QuU0NPUEVTLlJFQURfUkVMQVRJT05TSElQUyxcbiAqICAgdGhpcy5waW50ZXJlc3QuU0NPUEVTLldSSVRFX1JFTEFUSU9OU0hJUFNcbiAqIF07XG4gKlxuICogdGhpcy5waW50ZXJlc3QubG9naW4oc2NvcGVzKVxuICogICAudGhlbihyZXMgPT4gY29uc29sZS5sb2coJ0xvZ2dlZCBpbiEnLCByZXMpKVxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvZ2dpbiBpbicsIGVycikpO1xuICpcbiAqIHRoaXMucGludGVyZXN0LmdldE15UGlucygpXG4gKiAgIC50aGVuKChwaW5zOiBQaW50ZXJlc3RQaW5bXSkgPT4gY29uc29sZS5sb2cocGlucykpXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAqXG4gKiB0aGlzLnBpbnRlcmVzdC5nZXRNZSgpXG4gKiAgIC50aGVuKCh1c2VyOiBQaW50ZXJlc3RVc2VyKSA9PiBjb25zb2xlLmxvZyh1c2VyKSk7XG4gKlxuICogdGhpcy5waW50ZXJlc3QuZ2V0TXlCb2FyZHMoKVxuICogICAudGhlbigoYm9hcmRzOiBQaW50ZXJlc3RCb2FyZFtdKSA9PiBjb25zb2xlLmxvZyhib2FyZHMpKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBQaW50ZXJlc3RVc2VyXG4gKiBQaW50ZXJlc3RCb2FyZFxuICogUGludGVyZXN0UGluXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUGludGVyZXN0JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcGludGVyZXN0JyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLlBpbnRlcmVzdCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20venlyYW1lZGlhL2NvcmRvdmEtcGx1Z2luLXBpbnRlcmVzdCcsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tcGludGVyZXN0IC0tdmFyaWFibGUgQVBQX0lEPVlPVVJfQVBQX0lEJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBUFBfSUQnXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBpbnRlcmVzdCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhdXRoZW50aWNhdGlvbiBzY29wZXNcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBTQ09QRVM6IHtcbiAgICBSRUFEX1BVQkxJQzogc3RyaW5nO1xuICAgIFdSSVRFX1BVQkxJQzogc3RyaW5nO1xuICAgIFJFQURfUkVMQVRJT05TSElQUzogc3RyaW5nO1xuICAgIFdSSVRFX1JFTEFUSU9OU0hJUFM6IHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogTG9ncyB0aGUgdXNlciBpbiB1c2luZyB0aGVpciBQaW50ZXJlc3QgYWNjb3VudC5cbiAgICogQHBhcmFtIHNjb3BlcyB7c3RyaW5nW119IEFycmF5IG9mIHNjb3BlcyB0aGF0IHlvdSBuZWVkIGFjY2VzcyB0by4gWW91IGNhbiB1c2UgUGludGVyZXN0LlNDT1BFUyBjb25zdGFudCBmb3IgY29udmVuaWVuY2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFRoZSByZXNwb25zZSBvYmplY3Qgd2lsbCBjb250YWluIHRoZSB1c2VyJ3MgcHJvZmlsZSBkYXRhLCBhcyB3ZWxsIGFzIHRoZSBhY2Nlc3MgdG9rZW4gKGlmIHlvdSBuZWVkIHRvIHVzZSBpdCBlbHNld2hlcmUsIGV4YW1wbGU6IHNlbmQgaXQgdG8geW91ciBzZXJ2ZXIgYW5kIHBlcmZvcm0gYWN0aW9ucyBvbiBiZWhhbGYgb2YgdGhlIHVzZXIpLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dpbihzY29wZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgYXV0aGVudGljYXRlZCB1c2VyJ3MgcHJvZmlsZVxuICAgKiBAcGFyYW0gZmllbGRzIHtzdHJpbmd9IEZpZWxkcyB0byByZXRyaWV2ZSwgc2VwYXJhdGVkIGJ5IGNvbW1hcy4gRGVmYXVsdHMgdG8gYWxsIGF2YWlsYWJsZSBmaWVsZHMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFBpbnRlcmVzdFVzZXI+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHVzZXIncyBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGdldE1lKGZpZWxkcz86IHN0cmluZyk6IFByb21pc2U8UGludGVyZXN0VXNlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZmllbGRzIHtzdHJpbmd9IE9wdGlvbmFsIGZpZWxkcyBzZXBhcmF0ZWQgYnkgY29tbWFcbiAgICogQHBhcmFtIGxpbWl0IHtudW1iZXJ9IE9wdGlvbmFsIGxpbWl0LCBkZWZhdWx0cyB0byAxMDAsIG1heGltdW0gaXMgMTAwLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxQaW50ZXJlc3RQaW5bXT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBnZXRNeVBpbnMoZmllbGRzPzogc3RyaW5nLCBsaW1pdD86IG51bWJlcik6IFByb21pc2U8UGludGVyZXN0UGluW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGZpZWxkcyB7c3RyaW5nfSBPcHRpb25hbCBmaWVsZHMgc2VwYXJhdGVkIGJ5IGNvbW1hXG4gICAqIEBwYXJhbSBsaW1pdCB7bnVtYmVyfSBPcHRpb25hbCBsaW1pdCwgZGVmYXVsdHMgdG8gMTAwLCBtYXhpbXVtIGlzIDEwMC5cbiAgICogQHJldHVybnMge1Byb21pc2U8UGludGVyZXN0Qm9hcmRbXT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBnZXRNeUJvYXJkcyhmaWVsZHM/OiBzdHJpbmcsIGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxQaW50ZXJlc3RCb2FyZFtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYXV0aGVudGljYXRlZCB1c2VyJ3MgbGlrZXMuXG4gICAqIEBwYXJhbSBmaWVsZHMge3N0cmluZ30gT3B0aW9uYWwgZmllbGRzIHNlcGFyYXRlZCBieSBjb21tYVxuICAgKiBAcGFyYW0gbGltaXQge251bWJlcn0gT3B0aW9uYWwgbGltaXQsIGRlZmF1bHRzIHRvIDEwMCwgbWF4aW11bSBpcyAxMDAuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFBpbnRlcmVzdFBpbltdPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGdldE15TGlrZXMoZmllbGRzPzogc3RyaW5nLCBsaW1pdD86IG51bWJlcik6IFByb21pc2U8UGludGVyZXN0UGluW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBhdXRoZW50aWNhdGVkIHVzZXIncyBmb2xsb3dlcnMuXG4gICAqIEBwYXJhbSBmaWVsZHMge3N0cmluZ30gT3B0aW9uYWwgZmllbGRzIHNlcGFyYXRlZCBieSBjb21tYVxuICAgKiBAcGFyYW0gbGltaXQge251bWJlcn0gT3B0aW9uYWwgbGltaXQsIGRlZmF1bHRzIHRvIDEwMCwgbWF4aW11bSBpcyAxMDAuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFBpbnRlcmVzdFVzZXJbXT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBnZXRNeUZvbGxvd2VycyhmaWVsZHM/OiBzdHJpbmcsIGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxQaW50ZXJlc3RVc2VyW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBhdXRoZW50aWNhdGVkIHVzZXIncyBmb2xsb3dlZCBib2FyZHMuXG4gICAqIEBwYXJhbSBmaWVsZHMge3N0cmluZ30gT3B0aW9uYWwgZmllbGRzIHNlcGFyYXRlZCBieSBjb21tYVxuICAgKiBAcGFyYW0gbGltaXQge251bWJlcn0gT3B0aW9uYWwgbGltaXQsIGRlZmF1bHRzIHRvIDEwMCwgbWF4aW11bSBpcyAxMDAuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFBpbnRlcmVzdEJvYXJkW10+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgZ2V0TXlGb2xsb3dlZEJvYXJkcyhmaWVsZHM/OiBzdHJpbmcsIGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxQaW50ZXJlc3RCb2FyZFtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYXV0aGVudGljYXRlZCB1c2VyJ3MgZm9sbG93ZWQgaW50ZXJlc3RzLlxuICAgKiBAcGFyYW0gZmllbGRzIHtzdHJpbmd9IE9wdGlvbmFsIGZpZWxkcyBzZXBhcmF0ZWQgYnkgY29tbWFcbiAgICogQHBhcmFtIGxpbWl0IHtudW1iZXJ9IE9wdGlvbmFsIGxpbWl0LCBkZWZhdWx0cyB0byAxMDAsIG1heGltdW0gaXMgMTAwLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgZ2V0TXlGb2xsb3dlZEludGVyZXN0cyhmaWVsZHM/OiBzdHJpbmcsIGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgdXNlcidzIHByb2ZpbGUuXG4gICAqIEBwYXJhbSB1c2VybmFtZVxuICAgKiBAcGFyYW0gZmllbGRzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFBpbnRlcmVzdFVzZXI+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyLFxuICB9KVxuICBnZXRVc2VyKHVzZXJuYW1lOiBzdHJpbmcsIGZpZWxkcz86IHN0cmluZyk6IFByb21pc2U8UGludGVyZXN0VXNlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBib2FyZCdzIGRhdGEuXG4gICAqIEBwYXJhbSBib2FyZElkXG4gICAqIEBwYXJhbSBmaWVsZHNcbiAgICogQHJldHVybnMge1Byb21pc2U8UGludGVyZXN0Qm9hcmQ+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyLFxuICB9KVxuICBnZXRCb2FyZChib2FyZElkOiBzdHJpbmcsIGZpZWxkcz86IHN0cmluZyk6IFByb21pc2U8UGludGVyZXN0Qm9hcmQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IFBpbnMgb2YgYSBzcGVjaWZpYyBib2FyZC5cbiAgICogQHBhcmFtIGJvYXJkSWQge3N0cmluZ30gVGhlIElEIG9mIHRoZSBib2FyZFxuICAgKiBAcGFyYW0gZmllbGRzIHtzdHJpbmd9IE9wdGlvbmFsIGZpZWxkcyBzZXBhcmF0ZWQgYnkgY29tbWFcbiAgICogQHBhcmFtIGxpbWl0IHtudW1iZXJ9IE9wdGlvbmFsIGxpbWl0LCBkZWZhdWx0cyB0byAxMDAsIG1heGltdW0gaXMgMTAwLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxQaW50ZXJlc3RQaW5bXT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIGdldEJvYXJkUGlucyhib2FyZElkOiBzdHJpbmcsIGZpZWxkcz86IHN0cmluZywgbGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPFBpbnRlcmVzdFBpbltdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhIGJvYXJkLlxuICAgKiBAcGFyYW0gYm9hcmRJZCB7c3RyaW5nfSBUaGUgSUQgb2YgdGhlIGJvYXJkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFBpbnRlcmVzdFVzZXI+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZWxldGVCb2FyZChib2FyZElkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgYm9hcmQgZm9yIHRoZSBhdXRoZW50aWNhdGVkIHVzZXIuXG4gICAqIEBwYXJhbSBuYW1lIHtzdHJpbmd9IE5hbWUgb2YgdGhlIGJvYXJkXG4gICAqIEBwYXJhbSBkZXNjIHtzdHJpbmd9IE9wdGlvbmFsIGRlc2NyaXB0aW9uIG9mIHRoZSBib2FyZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxQaW50ZXJlc3RCb2FyZD59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gIH0pXG4gIGNyZWF0ZUJvYXJkKG5hbWU6IHN0cmluZywgZGVzYz86IHN0cmluZyk6IFByb21pc2U8UGludGVyZXN0Qm9hcmQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgUGluIGJ5IElELlxuICAgKiBAcGFyYW0gcGluSWQge3N0cmluZ30gVGhlIElEIG9mIHRoZSBQaW5cbiAgICogQHBhcmFtIGZpZWxkcyB7c3RyaW5nfSBPcHRpb25hbCBmaWVsZHMgc2VwYXJhdGVkIGJ5IGNvbW1hXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFBpbnRlcmVzdFBpbj59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIGdldFBpbihwaW5JZDogc3RyaW5nLCBmaWVsZHM/OiBzdHJpbmcpOiBQcm9taXNlPFBpbnRlcmVzdFBpbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgcGluXG4gICAqIEBwYXJhbSBwaW5JZCB7c3RyaW5nfSBUaGUgSUQgb2YgdGhlIHBpblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZWxldGVQaW4ocGluSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBQaW5cbiAgICogQHBhcmFtIG5vdGUge3N0cmluZ30gTm90ZS9EZXNjcmlwdGlvbiBvZiB0aGUgcGluXG4gICAqIEBwYXJhbSBib2FyZElkIHtzdHJpbmd9IEJvYXJkIElEIHRvIHB1dCB0aGUgUGluIHVuZGVyXG4gICAqIEBwYXJhbSBpbWFnZVVybCB7c3RyaW5nfSBVUkwgb2YgdGhlIGltYWdlIHRvIHNoYXJlXG4gICAqIEBwYXJhbSBsaW5rIHtzdHJpbmd9IE9wdGlvbmFsIGxpbmsgdG8gc2hhcmVcbiAgICogQHJldHVybnMge1Byb21pc2U8UGludGVyZXN0UGluPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDQsXG4gICAgZXJyb3JJbmRleDogNSxcbiAgfSlcbiAgY3JlYXRlUGluKG5vdGU6IHN0cmluZywgYm9hcmRJZDogc3RyaW5nLCBpbWFnZVVybDogc3RyaW5nLCBsaW5rPzogc3RyaW5nKTogUHJvbWlzZTxQaW50ZXJlc3RQaW4+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==