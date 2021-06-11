import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HyperTrackPlugin = /** @class */ (function (_super) {
    __extends(HyperTrackPlugin, _super);
    function HyperTrackPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HyperTrackPlugin.prototype.initialize = function (publishableKey) { return cordova(this, "initialize", {}, arguments); };
    HyperTrackPlugin.prototype.enableDebugLogging = function () { return cordova(this, "enableDebugLogging", {}, arguments); };
    HyperTrackPlugin.pluginName = "cordova-plugin-hypertrack-v3";
    HyperTrackPlugin.plugin = "cordova-plugin-hypertrack-v3";
    HyperTrackPlugin.pluginRef = "hypertrack";
    HyperTrackPlugin.repo = "https://github.com/hypertrack/cordova-plugin-hypertrack.git";
    HyperTrackPlugin.platforms = ["Android"];
    HyperTrackPlugin.decorators = [
        { type: Injectable }
    ];
    return HyperTrackPlugin;
}(IonicNativePlugin));
export { HyperTrackPlugin };
var CoordinatesValidationError = /** @class */ (function (_super) {
    __extends(CoordinatesValidationError, _super);
    function CoordinatesValidationError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CoordinatesValidationError;
}(Error));
export { CoordinatesValidationError };
var Coordinates = /** @class */ (function () {
    function Coordinates(latitude, longitude) {
        if (latitude < -90.0 || latitude > 90.0 || longitude < -180.0 || longitude > 180.0) {
            throw new CoordinatesValidationError('latitude and longitude should be of correct valaues');
        }
    }
    return Coordinates;
}());
export { Coordinates };
var HyperTrack = /** @class */ (function () {
    function HyperTrack(cordovaInstanceHandle) {
        this.cordovaInstanceHandle = cordovaInstanceHandle;
    }
    /** Enables debug log in native HyperTrack SDK. */
    HyperTrack.enableDebugLogging = function () {
        new HyperTrackPlugin().enableDebugLogging();
    };
    /**
     * Entry point into SDK.
     *
     * Initializes SDK. Also resolves SDK instance that could be used to query deviceId or set
     * various data.
     * @param publishableKey account-specific secret from the HyperTrack dashborad.
     *
     * @see {@link https://dashboard.hypertrack.com/setup}.
     */
    HyperTrack.initialize = function (publishableKey) {
        return new Promise(function (resolve, reject) {
            new HyperTrackPlugin()
                .initialize(publishableKey)
                .then(function (cordovaInstance) {
                resolve(new HyperTrack(cordovaInstance));
            })
                .catch(function (err) { return reject(err); });
        });
    };
    /** Resolves device ID that could be used to identify the device. */
    HyperTrack.prototype.getDeviceId = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.getDeviceId(function (deviceId) { return resolve(deviceId); }, function (err) { return reject(err); });
        });
    };
    /** Resolves to true if tracking service is running and false otherwise */
    HyperTrack.prototype.isRunning = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.isRunning(function (isRunning) { return resolve(isRunning); }, function (err) { return reject(err); });
        });
    };
    /** Sets device name that could be used to identify the device in HyperTrack dashboard */
    HyperTrack.prototype.setDeviceName = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.setDeviceName(name, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Use this to set additional properties, like segments, teams etc.
     * @param metadata key-value pais of properties.
     */
    HyperTrack.prototype.setDeviceMetadata = function (metadata) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.setDeviceMetadata(metadata, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Updates title and text in persistent notification, that appears when tracking is active.  */
    HyperTrack.prototype.setTrackingNotificationProperties = function (title, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.setTrackingNotificationProperties(title, message, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Adds special marker-like object to device timeline. */
    HyperTrack.prototype.addGeotag = function (geotagData, expectedLocation) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.addGeoTag(geotagData, expectedLocation, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Pops up permission request dialog, if permissions weren't granted before or does nothing otherwise. */
    HyperTrack.prototype.requestPermissionsIfNecessary = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.requestPermissionsIfNecessary(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Allows injecting false locations into the SDK, which ignores them by default. */
    HyperTrack.prototype.allowMockLocations = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.allowMockLocations(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Synchronizes tracking state with platform model. This method is used to
     * harden platform2device communication channel.
     */
    HyperTrack.prototype.syncDeviceSettings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.syncDeviceSettings(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    return HyperTrack;
}());
export { HyperTrack };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2h5cGVyLXRyYWNrL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQU9OLE1BQU0sb0JBQW9CLENBQUM7O0lBY1Usb0NBQWlCOzs7O0lBRXJELHFDQUFVLGFBQUMsY0FBc0I7SUFLakMsNkNBQWtCOzs7Ozs7O2dCQVJuQixVQUFVOzsyQkFyQlg7RUFzQnNDLGlCQUFpQjtTQUExQyxnQkFBZ0I7O0lBNkNtQiw4Q0FBSzs7OztxQ0FuRXJEO0VBbUVnRCxLQUFLOzs7SUFJbkQscUJBQVksUUFBZ0IsRUFBRSxTQUFpQjtRQUM3QyxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxTQUFTLEdBQUcsS0FBSyxFQUFFO1lBQ2xGLE1BQU0sSUFBSSwwQkFBMEIsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1NBQzdGO0lBQ0gsQ0FBQztzQkEzRUg7Ozs7SUF3T0Usb0JBQTRCLHFCQUF3QztRQUF4QywwQkFBcUIsR0FBckIscUJBQXFCLENBQW1CO0lBQUcsQ0FBQztJQS9IeEUsa0RBQWtEO0lBQzNDLDZCQUFrQixHQUF6QjtRQUNFLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLHFCQUFVLEdBQWpCLFVBQWtCLGNBQXNCO1FBQ3RDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxJQUFJLGdCQUFnQixFQUFFO2lCQUNuQixVQUFVLENBQUMsY0FBYyxDQUFDO2lCQUMxQixJQUFJLENBQUMsVUFBQyxlQUFrQztnQkFDdkMsT0FB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RUFBWCxDQUFXLENBQ25CLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwwR0FBMEc7SUFDMUcsa0RBQTZCLEdBQTdCO1FBQUEsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLDZCQUE2QixDQUN0RCxjQUFNLE9BQUEsT0FBTyxFQUFFLEVBQVQsQ0FBUyxFQUNmLFVBQUEsR0FBRyxJQUFJLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FDbkIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9GQUFvRjtJQUNwRix1Q0FBa0IsR0FBbEI7UUFBQSxpQkFPQztRQU5DLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQzNDLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLEVBQ2YsVUFBQSxHQUFHLElBQUksT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUNuQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsdUNBQWtCLEdBQWxCO1FBQUEsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUMzQyxjQUFNLE9BQUEsT0FBTyxFQUFFLEVBQVQsQ0FBUyxFQUNmLFVBQUEsR0FBRyxJQUFJLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FDbkIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztxQkF0T0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQbHVnaW4sXG4gIENvcmRvdmEsXG4gIENvcmRvdmFQcm9wZXJ0eSxcbiAgQ29yZG92YUluc3RhbmNlLFxuICBJbnN0YW5jZVByb3BlcnR5LFxuICBJb25pY05hdGl2ZVBsdWdpbixcbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IGtNYXhMZW5ndGggfSBmcm9tICdidWZmZXInO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ2Rucyc7XG5pbXBvcnQgeyByZWplY3QgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICdjb25zb2xlJztcblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdjb3Jkb3ZhLXBsdWdpbi1oeXBlcnRyYWNrLXYzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taHlwZXJ0cmFjay12MycsXG4gIHBsdWdpblJlZjogJ2h5cGVydHJhY2snLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2h5cGVydHJhY2svY29yZG92YS1wbHVnaW4taHlwZXJ0cmFjay5naXQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIeXBlclRyYWNrUGx1Z2luIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YSgpXG4gIGluaXRpYWxpemUocHVibGlzaGFibGVLZXk6IHN0cmluZyk6IFByb21pc2U8SHlwZXJUcmFja0NvcmRvdmE+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGVuYWJsZURlYnVnTG9nZ2luZygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vLyBJbnRlcmZhY2VzIGZvciBDb3Jkb3ZhIFBsdWdpbiBjYWxsYmFja3NcbmludGVyZmFjZSBEZXZpY2VJZFJlY2VpdmVyIHtcbiAgKGRldmljZUlkOiBzdHJpbmcpOiBhbnk7XG59XG5pbnRlcmZhY2UgVHJhY2tpbmdTdGF0ZVJlY2VpdmVyIHtcbiAgKGlzUnVubmluZzogYm9vbGVhbik6IGFueTtcbn1cbmludGVyZmFjZSBGYWlsdXJlSGFuZGxlciB7XG4gIChlcnJvcjogRXJyb3IpOiBhbnk7XG59XG5pbnRlcmZhY2UgU3VjY2Vzc0hhbmRsZXIge1xuICAoKTogYW55O1xufVxuXG4vLyBTREsgaW5zdGFuY2UgdGhhdCBleHBvc2VkIGZyb20gQ29yZG92YSB1dGlsaXplcyB1c2FnZSBvZiBjYWxsYmFja3MsIHNvIHdlXG4vLyB3cmFwIGl0IHdpdGggYWRhcHRlciB0byBhdm9pZCBtaXggb2YgY2FsbGJhY2tzIGFuZCBQcm9taXNlc1xuaW50ZXJmYWNlIEh5cGVyVHJhY2tDb3Jkb3ZhIHtcbiAgZ2V0RGV2aWNlSWQoc3VjY2VzczogRGV2aWNlSWRSZWNlaXZlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcbiAgaXNSdW5uaW5nKHN1Y2Nlc3M6IFRyYWNraW5nU3RhdGVSZWNlaXZlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcbiAgc2V0RGV2aWNlTmFtZShuYW1lOiBzdHJpbmcsIHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xuICBzZXREZXZpY2VNZXRhZGF0YShtZXRhZGF0YTogT2JqZWN0LCBzdWNjZXNzOiBTdWNjZXNzSGFuZGxlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcbiAgc2V0VHJhY2tpbmdOb3RpZmljYXRpb25Qcm9wZXJ0aWVzKFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLFxuICAgIGVycm9yOiBGYWlsdXJlSGFuZGxlclxuICApOiB2b2lkO1xuICBhZGRHZW9UYWcoZ2VvdGFnRGF0YTogT2JqZWN0LCBleHBlY3RlZExvY2F0aW9uOiBDb29yZGluYXRlcywgc3VjY2VzczogU3VjY2Vzc0hhbmRsZXIsIGVycm9yOiBGYWlsdXJlSGFuZGxlcik6IHZvaWQ7XG4gIHJlcXVlc3RQZXJtaXNzaW9uc0lmTmVjZXNzYXJ5KHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xuICBhbGxvd01vY2tMb2NhdGlvbnMoc3VjY2VzczogU3VjY2Vzc0hhbmRsZXIsIGVycm9yOiBGYWlsdXJlSGFuZGxlcik6IHZvaWQ7XG4gIHN5bmNEZXZpY2VTZXR0aW5ncyhzdWNjZXNzOiBTdWNjZXNzSGFuZGxlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIENvb3JkaW5hdGVzVmFsaWRhdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige31cblxuLyoqIFdyYXBwZXIgY2xhc3MgZm9yIHBhc3Npbmcgc3BhdGlhbCBnZW9wb3NpdGlvbiBhcyBhIGdlb3RhZydzIGV4cGVjdGVkIGxvY2F0aW9uICovXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZXMge1xuICBjb25zdHJ1Y3RvcihsYXRpdHVkZTogbnVtYmVyLCBsb25naXR1ZGU6IG51bWJlcikge1xuICAgIGlmIChsYXRpdHVkZSA8IC05MC4wIHx8IGxhdGl0dWRlID4gOTAuMCB8fCBsb25naXR1ZGUgPCAtMTgwLjAgfHwgbG9uZ2l0dWRlID4gMTgwLjApIHtcbiAgICAgIHRocm93IG5ldyBDb29yZGluYXRlc1ZhbGlkYXRpb25FcnJvcignbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBzaG91bGQgYmUgb2YgY29ycmVjdCB2YWxhdWVzJyk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAgIGltcG9ydCB7IEh5cGVyVHJhY2sgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2h5cGVyLXRyYWNrJztcbiAqXG4gKiAgIGluaXRpYWxpemVIeXBlcnRyYWNrKCkge1xuICogICAgIEh5cGVyVHJhY2suZW5hYmxlRGVidWdMb2dnaW5nKCk7XG4gKiAgICAgSHlwZXJUcmFjay5pbml0aWFsaXplKCdZT1VSX1BVQkxJU0hJTkdfS0VZJylcbiAqICAgICAudGhlbiggdGhpcy5vblNka0luc3RhbmNlUmVjZWl2ZWQgKVxuICogICAgIC5jYXRjaCggKGVycikgPT4gY29uc29sZS5lcnJvcihcIkh5cGVyVHJhY2sgaW5pdCBmYWlsZWQgd2l0aCBlcnJvciBcIiArIGVycikgKTtcbiAqICAgfVxuICogICBvblNka0luc3RhbmNlUmVjZWl2ZWQoc2RrSW5zdGFuY2U6IEh5cGVyVHJhY2spIHtcbiAqICAgICAgIHNka0luc3RhbmNlLmdldERldmljZUlkKClcbiAqICAgICAgLnRoZW4oKGlkKSA9PiBjb25zb2xlLmxvZyhcIkdvdCBkZXZpY2UgaWQgXCIgKyBpZCkpXG4gKiAgICAgIC50aGVuKCgpID0+IHNka0luc3RhbmNlLnNldERldmljZU5hbWUoXCJFbHZpcyBJb25pY1wiKSlcbiAqICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJEZXZpY2UgbmFtZSB3YXMgY2hhbmdlZFwiKSlcbiAqICAgICAgLnRoZW4oKCkgPT4gc2RrSW5zdGFuY2Uuc2V0RGV2aWNlTWV0YWRhdGEoe3BsYXRmb3JtOiBcIklvbmljIEFuZHJvaWRcIn0pKVxuICogICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIkRldmljZSBtZXRhZGF0YSB3YXMgY2hhbmdlZFwiKSlcbiAqICAgICAgLnRoZW4oKCkgPT4gc2RrSW5zdGFuY2Uuc2V0VHJhY2tpbmdOb3RpZmljYXRpb25Qcm9wZXJ0aWVzKFwiVHJhY2tpbmcgT25cIiwgXCJJb25pYyBTREsgaXMgdHJhY2tpbmdcIikpXG4gKiAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiTm90aWZpY2F0aW9uIHByb3BlcnRpZXMgd2VyZSBjaGFuZ2VkXCIpKVxuICogICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkdvdCBlcnJvciBpbiBIeXBlclRyYWNrIFwiICsgZXJyKSk7XG4gKiAgIH1cbiAqXG4gKiBgYGBcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBIeXBlclRyYWNrIHtcbiAgLyoqIEVuYWJsZXMgZGVidWcgbG9nIGluIG5hdGl2ZSBIeXBlclRyYWNrIFNESy4gKi9cbiAgc3RhdGljIGVuYWJsZURlYnVnTG9nZ2luZygpOiB2b2lkIHtcbiAgICBuZXcgSHlwZXJUcmFja1BsdWdpbigpLmVuYWJsZURlYnVnTG9nZ2luZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVudHJ5IHBvaW50IGludG8gU0RLLlxuICAgKlxuICAgKiBJbml0aWFsaXplcyBTREsuIEFsc28gcmVzb2x2ZXMgU0RLIGluc3RhbmNlIHRoYXQgY291bGQgYmUgdXNlZCB0byBxdWVyeSBkZXZpY2VJZCBvciBzZXRcbiAgICogdmFyaW91cyBkYXRhLlxuICAgKiBAcGFyYW0gcHVibGlzaGFibGVLZXkgYWNjb3VudC1zcGVjaWZpYyBzZWNyZXQgZnJvbSB0aGUgSHlwZXJUcmFjayBkYXNoYm9yYWQuXG4gICAqXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZGFzaGJvYXJkLmh5cGVydHJhY2suY29tL3NldHVwfS5cbiAgICovXG4gIHN0YXRpYyBpbml0aWFsaXplKHB1Ymxpc2hhYmxlS2V5OiBzdHJpbmcpOiBQcm9taXNlPEh5cGVyVHJhY2s+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbmV3IEh5cGVyVHJhY2tQbHVnaW4oKVxuICAgICAgICAuaW5pdGlhbGl6ZShwdWJsaXNoYWJsZUtleSlcbiAgICAgICAgLnRoZW4oKGNvcmRvdmFJbnN0YW5jZTogSHlwZXJUcmFja0NvcmRvdmEpID0+IHtcbiAgICAgICAgICByZXNvbHZlKG5ldyBIeXBlclRyYWNrKGNvcmRvdmFJbnN0YW5jZSkpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHJlamVjdChlcnIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBSZXNvbHZlcyBkZXZpY2UgSUQgdGhhdCBjb3VsZCBiZSB1c2VkIHRvIGlkZW50aWZ5IHRoZSBkZXZpY2UuICovXG4gIGdldERldmljZUlkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLmdldERldmljZUlkKFxuICAgICAgICBkZXZpY2VJZCA9PiByZXNvbHZlKGRldmljZUlkKSxcbiAgICAgICAgZXJyID0+IHJlamVjdChlcnIpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFJlc29sdmVzIHRvIHRydWUgaWYgdHJhY2tpbmcgc2VydmljZSBpcyBydW5uaW5nIGFuZCBmYWxzZSBvdGhlcndpc2UgKi9cbiAgaXNSdW5uaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5pc1J1bm5pbmcoXG4gICAgICAgIGlzUnVubmluZyA9PiByZXNvbHZlKGlzUnVubmluZyksXG4gICAgICAgIGVyciA9PiByZWplY3QoZXJyKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBTZXRzIGRldmljZSBuYW1lIHRoYXQgY291bGQgYmUgdXNlZCB0byBpZGVudGlmeSB0aGUgZGV2aWNlIGluIEh5cGVyVHJhY2sgZGFzaGJvYXJkICovXG4gIHNldERldmljZU5hbWUobmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuc2V0RGV2aWNlTmFtZShcbiAgICAgICAgbmFtZSxcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxuICAgICAgICBlcnIgPT4gcmVqZWN0KGVycilcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoaXMgdG8gc2V0IGFkZGl0aW9uYWwgcHJvcGVydGllcywgbGlrZSBzZWdtZW50cywgdGVhbXMgZXRjLlxuICAgKiBAcGFyYW0gbWV0YWRhdGEga2V5LXZhbHVlIHBhaXMgb2YgcHJvcGVydGllcy5cbiAgICovXG4gIHNldERldmljZU1ldGFkYXRhKG1ldGFkYXRhOiBPYmplY3QpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5zZXREZXZpY2VNZXRhZGF0YShcbiAgICAgICAgbWV0YWRhdGEsXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcbiAgICAgICAgZXJyID0+IHJlamVjdChlcnIpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFVwZGF0ZXMgdGl0bGUgYW5kIHRleHQgaW4gcGVyc2lzdGVudCBub3RpZmljYXRpb24sIHRoYXQgYXBwZWFycyB3aGVuIHRyYWNraW5nIGlzIGFjdGl2ZS4gICovXG4gIHNldFRyYWNraW5nTm90aWZpY2F0aW9uUHJvcGVydGllcyh0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5zZXRUcmFja2luZ05vdGlmaWNhdGlvblByb3BlcnRpZXMoXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICAoKSA9PiByZXNvbHZlKCksXG4gICAgICAgIGVyciA9PiByZWplY3QoZXJyKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBBZGRzIHNwZWNpYWwgbWFya2VyLWxpa2Ugb2JqZWN0IHRvIGRldmljZSB0aW1lbGluZS4gKi9cbiAgYWRkR2VvdGFnKGdlb3RhZ0RhdGE6IE9iamVjdCwgZXhwZWN0ZWRMb2NhdGlvbj86IENvb3JkaW5hdGVzKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuYWRkR2VvVGFnKFxuICAgICAgICBnZW90YWdEYXRhLFxuICAgICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgICAoKSA9PiByZXNvbHZlKCksXG4gICAgICAgIGVyciA9PiByZWplY3QoZXJyKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBQb3BzIHVwIHBlcm1pc3Npb24gcmVxdWVzdCBkaWFsb2csIGlmIHBlcm1pc3Npb25zIHdlcmVuJ3QgZ3JhbnRlZCBiZWZvcmUgb3IgZG9lcyBub3RoaW5nIG90aGVyd2lzZS4gKi9cbiAgcmVxdWVzdFBlcm1pc3Npb25zSWZOZWNlc3NhcnkoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUucmVxdWVzdFBlcm1pc3Npb25zSWZOZWNlc3NhcnkoXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcbiAgICAgICAgZXJyID0+IHJlamVjdChlcnIpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEFsbG93cyBpbmplY3RpbmcgZmFsc2UgbG9jYXRpb25zIGludG8gdGhlIFNESywgd2hpY2ggaWdub3JlcyB0aGVtIGJ5IGRlZmF1bHQuICovXG4gIGFsbG93TW9ja0xvY2F0aW9ucygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5hbGxvd01vY2tMb2NhdGlvbnMoXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcbiAgICAgICAgZXJyID0+IHJlamVjdChlcnIpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bmNocm9uaXplcyB0cmFja2luZyBzdGF0ZSB3aXRoIHBsYXRmb3JtIG1vZGVsLiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvXG4gICAqIGhhcmRlbiBwbGF0Zm9ybTJkZXZpY2UgY29tbXVuaWNhdGlvbiBjaGFubmVsLlxuICAgKi9cbiAgc3luY0RldmljZVNldHRpbmdzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLnN5bmNEZXZpY2VTZXR0aW5ncyhcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxuICAgICAgICBlcnIgPT4gcmVqZWN0KGVycilcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHByaXZhdGUgY29yZG92YUluc3RhbmNlSGFuZGxlOiBIeXBlclRyYWNrQ29yZG92YSkge31cbn1cbiJdfQ==