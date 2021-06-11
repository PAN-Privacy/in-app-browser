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
var SSHConnectOriginal = /** @class */ (function (_super) {
    __extends(SSHConnectOriginal, _super);
    function SSHConnectOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SSHConnectOriginal.prototype.connect = function (user, password, host, port) { return cordova(this, "connect", {}, arguments); };
    SSHConnectOriginal.prototype.executeCommand = function (command) { return cordova(this, "executeCommand", {}, arguments); };
    SSHConnectOriginal.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    SSHConnectOriginal.pluginName = "SSHConnect";
    SSHConnectOriginal.plugin = "cordova-plugin-ssh-connect";
    SSHConnectOriginal.pluginRef = "cordova.plugins.sshConnect";
    SSHConnectOriginal.repo = "https://github.com/JosePerez27/cordova-plugin-ssh-connect";
    SSHConnectOriginal.platforms = ["Android"];
    return SSHConnectOriginal;
}(IonicNativePlugin));
var SSHConnect = new SSHConnectOriginal();
export { SSHConnect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NzaC1jb25uZWN0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXVDeEMsOEJBQWlCOzs7O0lBVS9DLDRCQUFPLGFBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsSUFBWSxFQUFFLElBQVk7SUFVbEUsbUNBQWMsYUFBQyxPQUFlO0lBUzlCLCtCQUFVOzs7Ozs7cUJBckVaO0VBd0NnQyxpQkFBaUI7U0FBcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFNTSCBDb25uZWN0XG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgcGx1Z2luIHRvIG1ha2UgY29ubmVjdGlvbnMgYW5kIGV4ZWN1dGUgY29tbWFuZHMgdGhyb3VnaCBTU0hcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNTSENvbm5lY3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NzaC1jb25uZWN0L25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3NoQ29ubmVjdDogU1NIQ29ubmVjdCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuc3NoQ29ubmVjdC5jb25uZWN0KCd1c2VyJywgJ3Bhc3N3b3JkJywgJ2hvc3QnLCBwb3J0KVxuICogICAudGhlbihyZXNwID0+IGNvbnNvbGUubG9nKHJlc3ApKVxuICogICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIHRoaXMuc3NoQ29ubmVjdC5leGVjdXRlQ29tbWFuZCgnY29tbWFuZCcpXG4gKiAgIC50aGVuKHJlc3AgPT4gY29uc29sZS5sb2cocmVzcCkpXG4gKiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogdGhpcy5zc2hDb25uZWN0LmRpc2Nvbm5lY3QoKVxuICogICAudGhlbihyZXNwID0+IGNvbnNvbGUubG9nKHJlc3ApKVxuICogICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NTSENvbm5lY3QnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zc2gtY29ubmVjdCcsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5zc2hDb25uZWN0JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Kb3NlUGVyZXoyNy9jb3Jkb3ZhLXBsdWdpbi1zc2gtY29ubmVjdCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNTSENvbm5lY3QgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBFc3RhYmxpc2ggYSByZW1vdGUgc3NoIGNvbm5lY3Rpb25cbiAgICogQHBhcmFtIHt1c2VyfSB1c2VyICBUaGUgcmVtb3RlIGhvc3QgdXNlclxuICAgKiBAcGFyYW0ge3Bhc3N3b3JkfSBwYXNzd29yZCAgVGhlIHJlbW90ZSBob3N0IHBhc3N3b3JkXG4gICAqIEBwYXJhbSB7aG9zdH0gaG9zdCAgVGhlIHJlbW90ZSBkZXZpY2UgdG8gY29ubmVjdFxuICAgKiBAcGFyYW0ge3BvcnR9IHBvcnQgIFRoZSBTU0ggcG9ydCBmb3IgY29ubmVjdGlvbiAodXN1YWxseSBwb3J0IDIyKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYW4gcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHN1Y2Nlc3Mgb2YgdGhlIGNvbm5lY3Rpb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY29ubmVjdCh1c2VyOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGhvc3Q6IHN0cmluZywgcG9ydDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZSBhIGNvbW1hbmQgb24gdGhlIHJlbW90ZSBob3N0IGNvbm5lY3RlZCBieSBzc2hcbiAgICogQHBhcmFtIHtjb21tYW5kfSBjb21tYW5kICBUaGUgY29tbWFuZCB0byBleGVjdXRlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhbiBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcHJpbnRlZCB0ZXh0IG9uIHRoZSByZW1vdGUgY29uc29sZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBleGVjdXRlQ29tbWFuZChjb21tYW5kOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNjb25uZWN0IHRoZSBTU0ggc2Vzc2lvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYW4gcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHN1Y2Nlc3Mgb2YgdGhlIGRpc2Nvbm5lY3Rpb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGlzY29ubmVjdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19