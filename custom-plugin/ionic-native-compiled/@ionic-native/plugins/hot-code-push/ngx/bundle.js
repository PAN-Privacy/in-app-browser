'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
require('rxjs');

/**
 * For description on error codes, please visit https://github.com/nordnet/cordova-hot-code-push/wiki/Error-codes
 */
exports.ErrorCode = void 0;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NOTHING_TO_INSTALL"] = 1] = "NOTHING_TO_INSTALL";
    ErrorCode[ErrorCode["NOTHING_TO_UPDATE"] = 2] = "NOTHING_TO_UPDATE";
    ErrorCode[ErrorCode["FAILED_TO_DOWNLOAD_APPLICATION_CONFIG"] = -1] = "FAILED_TO_DOWNLOAD_APPLICATION_CONFIG";
    ErrorCode[ErrorCode["APPLICATION_BUILD_VERSION_TOO_LOW"] = -2] = "APPLICATION_BUILD_VERSION_TOO_LOW";
    ErrorCode[ErrorCode["FAILED_TO_DOWNLOAD_CONTENT_MANIFEST"] = -3] = "FAILED_TO_DOWNLOAD_CONTENT_MANIFEST";
    ErrorCode[ErrorCode["FAILED_TO_DOWNLOAD_UPDATE_FILES"] = -4] = "FAILED_TO_DOWNLOAD_UPDATE_FILES";
    ErrorCode[ErrorCode["FAILED_TO_MOVE_LOADED_FILES_TO_INSTALLATION_FOLDER"] = -5] = "FAILED_TO_MOVE_LOADED_FILES_TO_INSTALLATION_FOLDER";
    ErrorCode[ErrorCode["UPDATE_IS_INVALID"] = -6] = "UPDATE_IS_INVALID";
    ErrorCode[ErrorCode["FAILED_TO_COPY_FILES_FROM_PREVIOUS_RELEASE"] = -7] = "FAILED_TO_COPY_FILES_FROM_PREVIOUS_RELEASE";
    ErrorCode[ErrorCode["FAILED_TO_COPY_NEW_CONTENT_FILES"] = -8] = "FAILED_TO_COPY_NEW_CONTENT_FILES";
    ErrorCode[ErrorCode["LOCAL_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND"] = -9] = "LOCAL_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND";
    ErrorCode[ErrorCode["LOCAL_VERSION_OF_MANIFEST_NOT_FOUND"] = -10] = "LOCAL_VERSION_OF_MANIFEST_NOT_FOUND";
    ErrorCode[ErrorCode["LOADED_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND"] = -11] = "LOADED_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND";
    ErrorCode[ErrorCode["LOADED_VERSION_OF_MANIFEST_NOT_FOUND"] = -12] = "LOADED_VERSION_OF_MANIFEST_NOT_FOUND";
    ErrorCode[ErrorCode["FAILED_TO_INSTALL_ASSETS_ON_EXTERNAL_STORAGE"] = -13] = "FAILED_TO_INSTALL_ASSETS_ON_EXTERNAL_STORAGE";
    ErrorCode[ErrorCode["CANT_INSTALL_WHILE_DOWNLOAD_IN_PROGRESS"] = -14] = "CANT_INSTALL_WHILE_DOWNLOAD_IN_PROGRESS";
    ErrorCode[ErrorCode["CANT_DOWNLOAD_UPDATE_WHILE_INSTALLATION_IN_PROGRESS"] = -15] = "CANT_DOWNLOAD_UPDATE_WHILE_INSTALLATION_IN_PROGRESS";
    ErrorCode[ErrorCode["INSTALLATION_ALREADY_IN_PROGRESS"] = -16] = "INSTALLATION_ALREADY_IN_PROGRESS";
    ErrorCode[ErrorCode["DOWNLOAD_ALREADY_IN_PROGRESS"] = -17] = "DOWNLOAD_ALREADY_IN_PROGRESS";
    ErrorCode[ErrorCode["ASSETS_FOLDER_IS_NOT_YET_INSTALLED"] = -18] = "ASSETS_FOLDER_IS_NOT_YET_INSTALLED";
    ErrorCode[ErrorCode["NEW_APPLICATION_CONFIG_IS_INVALID"] = -19] = "NEW_APPLICATION_CONFIG_IS_INVALID";
})(exports.ErrorCode || (exports.ErrorCode = {}));
var HotCodePush = /** @class */ (function (_super) {
    tslib.__extends(HotCodePush, _super);
    function HotCodePush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HotCodePush.prototype.requestApplicationUpdate = function (message) { return core.cordova(this, "requestApplicationUpdate", {}, arguments); };
    HotCodePush.prototype.fetchUpdate = function (options) {
        var _this = this;
        return (function () {
            if (core.checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    HotCodePush.getPlugin().fetchUpdate(function (error, data) {
                        if (error) {
                            reject(error);
                        }
                        else {
                            resolve(data);
                        }
                    }, options);
                });
            }
        })();
    };
    HotCodePush.prototype.installUpdate = function () { return core.cordova(this, "installUpdate", { "callbackStyle": "node" }, arguments); };
    HotCodePush.prototype.isUpdateAvailableForInstallation = function () { return core.cordova(this, "isUpdateAvailableForInstallation", { "callbackStyle": "node" }, arguments); };
    HotCodePush.prototype.getVersionInfo = function () { return core.cordova(this, "getVersionInfo", { "callbackStyle": "node" }, arguments); };
    HotCodePush.prototype.onUpdateIsReadyToInstall = function () { return core.cordova(this, "onUpdateIsReadyToInstall", { "eventObservable": true, "event": "chcp_updateIsReadyToInstall" }, arguments); };
    HotCodePush.prototype.onUpdateLoadFailed = function () { return core.cordova(this, "onUpdateLoadFailed", { "eventObservable": true, "event": "chcp_updateLoadFailed" }, arguments); };
    HotCodePush.prototype.onNothingToUpdate = function () { return core.cordova(this, "onNothingToUpdate", { "eventObservable": true, "event": "chcp_nothingToUpdate" }, arguments); };
    HotCodePush.prototype.onBeforeInstall = function () { return core.cordova(this, "onBeforeInstall", { "eventObservable": true, "event": "chcp_beforeInstall" }, arguments); };
    HotCodePush.prototype.onUpdateInstalled = function () { return core.cordova(this, "onUpdateInstalled", { "eventObservable": true, "event": "chcp_updateInstalled" }, arguments); };
    HotCodePush.prototype.onUpdateInstallFailed = function () { return core.cordova(this, "onUpdateInstallFailed", { "eventObservable": true, "event": "chcp_updateInstallFailed" }, arguments); };
    HotCodePush.prototype.onNothingToInstall = function () { return core.cordova(this, "onNothingToInstall", { "eventObservable": true, "event": "chcp_nothingToInstall" }, arguments); };
    HotCodePush.prototype.onBeforeAssetsInstalledOnExternalStorage = function () { return core.cordova(this, "onBeforeAssetsInstalledOnExternalStorage", { "eventObservable": true, "event": "chcp_beforeAssetsInstalledOnExternalStorage" }, arguments); };
    HotCodePush.prototype.onAssetsInstalledOnExternalStorage = function () { return core.cordova(this, "onAssetsInstalledOnExternalStorage", { "eventObservable": true, "event": "chcp_assetsInstalledOnExternalStorage" }, arguments); };
    HotCodePush.prototype.onAssetsInstallationError = function () { return core.cordova(this, "onAssetsInstallationError", { "eventObservable": true, "event": "chcp_assetsInstallationError" }, arguments); };
    HotCodePush.pluginName = "HotCodePush";
    HotCodePush.plugin = "cordova-hot-code-push";
    HotCodePush.pluginRef = "chcp";
    HotCodePush.repo = "https://github.com/nordnet/cordova-hot-code-push";
    HotCodePush.platforms = ["Android", "iOS"];
    HotCodePush.decorators = [
        { type: core$1.Injectable }
    ];
    return HotCodePush;
}(core.IonicNativePlugin));

exports.HotCodePush = HotCodePush;
