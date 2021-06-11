'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var SSHConnect = /** @class */ (function (_super) {
    tslib.__extends(SSHConnect, _super);
    function SSHConnect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SSHConnect.prototype.connect = function (user, password, host, port) { return core.cordova(this, "connect", {}, arguments); };
    SSHConnect.prototype.executeCommand = function (command) { return core.cordova(this, "executeCommand", {}, arguments); };
    SSHConnect.prototype.disconnect = function () { return core.cordova(this, "disconnect", {}, arguments); };
    SSHConnect.pluginName = "SSHConnect";
    SSHConnect.plugin = "cordova-plugin-ssh-connect";
    SSHConnect.pluginRef = "cordova.plugins.sshConnect";
    SSHConnect.repo = "https://github.com/JosePerez27/cordova-plugin-ssh-connect";
    SSHConnect.platforms = ["Android"];
    SSHConnect.decorators = [
        { type: core$1.Injectable }
    ];
    return SSHConnect;
}(core.IonicNativePlugin));

exports.SSHConnect = SSHConnect;
