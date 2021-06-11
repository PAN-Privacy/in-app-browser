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
var HyperTrackPluginOriginal = /** @class */ (function (_super) {
    __extends(HyperTrackPluginOriginal, _super);
    function HyperTrackPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HyperTrackPluginOriginal.prototype.initialize = function (publishableKey) { return cordova(this, "initialize", {}, arguments); };
    HyperTrackPluginOriginal.prototype.enableDebugLogging = function () { return cordova(this, "enableDebugLogging", {}, arguments); };
    HyperTrackPluginOriginal.pluginName = "cordova-plugin-hypertrack-v3";
    HyperTrackPluginOriginal.plugin = "cordova-plugin-hypertrack-v3";
    HyperTrackPluginOriginal.pluginRef = "hypertrack";
    HyperTrackPluginOriginal.repo = "https://github.com/hypertrack/cordova-plugin-hypertrack.git";
    HyperTrackPluginOriginal.platforms = ["Android"];
    return HyperTrackPluginOriginal;
}(IonicNativePlugin));
var HyperTrackPlugin = new HyperTrackPluginOriginal();
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
        new HyperTrackPluginOriginal().enableDebugLogging();
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
            new HyperTrackPluginOriginal()
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2h5cGVyLXRyYWNrL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQU9OLE1BQU0sb0JBQW9CLENBQUM7O0lBY1Usb0NBQWlCOzs7O0lBRXJELHFDQUFVLGFBQUMsY0FBc0I7SUFLakMsNkNBQWtCOzs7Ozs7MkJBN0JwQjtFQXNCc0MsaUJBQWlCO1NBQTFDLGdCQUFnQjs7SUE2Q21CLDhDQUFLOzs7O3FDQW5FckQ7RUFtRWdELEtBQUs7OztJQUluRCxxQkFBWSxRQUFnQixFQUFFLFNBQWlCO1FBQzdDLElBQUksUUFBUSxHQUFHLENBQUMsSUFBSSxJQUFJLFFBQVEsR0FBRyxJQUFJLElBQUksU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLFNBQVMsR0FBRyxLQUFLLEVBQUU7WUFDbEYsTUFBTSxJQUFJLDBCQUEwQixDQUFDLHFEQUFxRCxDQUFDLENBQUM7U0FDN0Y7SUFDSCxDQUFDO3NCQTNFSDs7OztJQXdPRSxvQkFBNEIscUJBQXdDO1FBQXhDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBbUI7SUFBRyxDQUFDO0lBL0h4RSxrREFBa0Q7SUFDM0MsNkJBQWtCLEdBQXpCO1FBQ0UsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0kscUJBQVUsR0FBakIsVUFBa0IsY0FBc0I7UUFDdEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLElBQUksZ0JBQWdCLEVBQUU7aUJBQ25CLFVBQVUsQ0FBQyxjQUFjLENBQUM7aUJBQzFCLElBQUksQ0FBQyxVQUFDLGVBQWtDO2dCQUN2QyxPQUFPLENBQUMsSUFBSSxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUMzQyxD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QztJQUVELDBHQUEwRztJQUMxRyxrREFBNkIsR0FBN0I7UUFBQSxpQkFPQztRQU5DLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMscUJBQXFCLENBQUMsNkJBQTZCLENBQ3RELGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLEVBQ2YsVUFBQSxHQUFHLElBQUksT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUNuQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0ZBQW9GO0lBQ3BGLHVDQUFrQixHQUFsQjtRQUFBLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FDM0MsY0FBTSxPQUFBLE9BQU8sRUFBRSxFQUFULENBQVMsRUFDZixVQUFBLEdBQUcsSUFBSSxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBWCxDQUFXLENBQ25CLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCx1Q0FBa0IsR0FBbEI7UUFBQSxpQkFPQztRQU5DLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQzNDLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLEVBQ2YsVUFBQSxHQUFHLElBQUksT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUNuQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO3FCQXRPSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBsdWdpbixcbiAgQ29yZG92YSxcbiAgQ29yZG92YVByb3BlcnR5LFxuICBDb3Jkb3ZhSW5zdGFuY2UsXG4gIEluc3RhbmNlUHJvcGVydHksXG4gIElvbmljTmF0aXZlUGx1Z2luLFxufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsga01heExlbmd0aCB9IGZyb20gJ2J1ZmZlcic7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnZG5zJztcbmltcG9ydCB7IHJlamVjdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBlcnJvciB9IGZyb20gJ2NvbnNvbGUnO1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ2NvcmRvdmEtcGx1Z2luLWh5cGVydHJhY2stdjMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1oeXBlcnRyYWNrLXYzJyxcbiAgcGx1Z2luUmVmOiAnaHlwZXJ0cmFjaycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaHlwZXJ0cmFjay9jb3Jkb3ZhLXBsdWdpbi1oeXBlcnRyYWNrLmdpdCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh5cGVyVHJhY2tQbHVnaW4gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKClcbiAgaW5pdGlhbGl6ZShwdWJsaXNoYWJsZUtleTogc3RyaW5nKTogUHJvbWlzZTxIeXBlclRyYWNrQ29yZG92YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZW5hYmxlRGVidWdMb2dnaW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8vIEludGVyZmFjZXMgZm9yIENvcmRvdmEgUGx1Z2luIGNhbGxiYWNrc1xuaW50ZXJmYWNlIERldmljZUlkUmVjZWl2ZXIge1xuICAoZGV2aWNlSWQ6IHN0cmluZyk6IGFueTtcbn1cbmludGVyZmFjZSBUcmFja2luZ1N0YXRlUmVjZWl2ZXIge1xuICAoaXNSdW5uaW5nOiBib29sZWFuKTogYW55O1xufVxuaW50ZXJmYWNlIEZhaWx1cmVIYW5kbGVyIHtcbiAgKGVycm9yOiBFcnJvcik6IGFueTtcbn1cbmludGVyZmFjZSBTdWNjZXNzSGFuZGxlciB7XG4gICgpOiBhbnk7XG59XG5cbi8vIFNESyBpbnN0YW5jZSB0aGF0IGV4cG9zZWQgZnJvbSBDb3Jkb3ZhIHV0aWxpemVzIHVzYWdlIG9mIGNhbGxiYWNrcywgc28gd2Vcbi8vIHdyYXAgaXQgd2l0aCBhZGFwdGVyIHRvIGF2b2lkIG1peCBvZiBjYWxsYmFja3MgYW5kIFByb21pc2VzXG5pbnRlcmZhY2UgSHlwZXJUcmFja0NvcmRvdmEge1xuICBnZXREZXZpY2VJZChzdWNjZXNzOiBEZXZpY2VJZFJlY2VpdmVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xuICBpc1J1bm5pbmcoc3VjY2VzczogVHJhY2tpbmdTdGF0ZVJlY2VpdmVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xuICBzZXREZXZpY2VOYW1lKG5hbWU6IHN0cmluZywgc3VjY2VzczogU3VjY2Vzc0hhbmRsZXIsIGVycm9yOiBGYWlsdXJlSGFuZGxlcik6IHZvaWQ7XG4gIHNldERldmljZU1ldGFkYXRhKG1ldGFkYXRhOiBPYmplY3QsIHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xuICBzZXRUcmFja2luZ05vdGlmaWNhdGlvblByb3BlcnRpZXMoXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgc3VjY2VzczogU3VjY2Vzc0hhbmRsZXIsXG4gICAgZXJyb3I6IEZhaWx1cmVIYW5kbGVyXG4gICk6IHZvaWQ7XG4gIGFkZEdlb1RhZyhnZW90YWdEYXRhOiBPYmplY3QsIGV4cGVjdGVkTG9jYXRpb246IENvb3JkaW5hdGVzLCBzdWNjZXNzOiBTdWNjZXNzSGFuZGxlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcbiAgcmVxdWVzdFBlcm1pc3Npb25zSWZOZWNlc3Nhcnkoc3VjY2VzczogU3VjY2Vzc0hhbmRsZXIsIGVycm9yOiBGYWlsdXJlSGFuZGxlcik6IHZvaWQ7XG4gIGFsbG93TW9ja0xvY2F0aW9ucyhzdWNjZXNzOiBTdWNjZXNzSGFuZGxlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcbiAgc3luY0RldmljZVNldHRpbmdzKHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZXNWYWxpZGF0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuXG4vKiogV3JhcHBlciBjbGFzcyBmb3IgcGFzc2luZyBzcGF0aWFsIGdlb3Bvc2l0aW9uIGFzIGEgZ2VvdGFnJ3MgZXhwZWN0ZWQgbG9jYXRpb24gKi9cbmV4cG9ydCBjbGFzcyBDb29yZGluYXRlcyB7XG4gIGNvbnN0cnVjdG9yKGxhdGl0dWRlOiBudW1iZXIsIGxvbmdpdHVkZTogbnVtYmVyKSB7XG4gICAgaWYgKGxhdGl0dWRlIDwgLTkwLjAgfHwgbGF0aXR1ZGUgPiA5MC4wIHx8IGxvbmdpdHVkZSA8IC0xODAuMCB8fCBsb25naXR1ZGUgPiAxODAuMCkge1xuICAgICAgdGhyb3cgbmV3IENvb3JkaW5hdGVzVmFsaWRhdGlvbkVycm9yKCdsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIHNob3VsZCBiZSBvZiBjb3JyZWN0IHZhbGF1ZXMnKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqICAgaW1wb3J0IHsgSHlwZXJUcmFjayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaHlwZXItdHJhY2snO1xuICpcbiAqICAgaW5pdGlhbGl6ZUh5cGVydHJhY2soKSB7XG4gKiAgICAgSHlwZXJUcmFjay5lbmFibGVEZWJ1Z0xvZ2dpbmcoKTtcbiAqICAgICBIeXBlclRyYWNrLmluaXRpYWxpemUoJ1lPVVJfUFVCTElTSElOR19LRVknKVxuICogICAgIC50aGVuKCB0aGlzLm9uU2RrSW5zdGFuY2VSZWNlaXZlZCApXG4gKiAgICAgLmNhdGNoKCAoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiSHlwZXJUcmFjayBpbml0IGZhaWxlZCB3aXRoIGVycm9yIFwiICsgZXJyKSApO1xuICogICB9XG4gKiAgIG9uU2RrSW5zdGFuY2VSZWNlaXZlZChzZGtJbnN0YW5jZTogSHlwZXJUcmFjaykge1xuICogICAgICAgc2RrSW5zdGFuY2UuZ2V0RGV2aWNlSWQoKVxuICogICAgICAudGhlbigoaWQpID0+IGNvbnNvbGUubG9nKFwiR290IGRldmljZSBpZCBcIiArIGlkKSlcbiAqICAgICAgLnRoZW4oKCkgPT4gc2RrSW5zdGFuY2Uuc2V0RGV2aWNlTmFtZShcIkVsdmlzIElvbmljXCIpKVxuICogICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIkRldmljZSBuYW1lIHdhcyBjaGFuZ2VkXCIpKVxuICogICAgICAudGhlbigoKSA9PiBzZGtJbnN0YW5jZS5zZXREZXZpY2VNZXRhZGF0YSh7cGxhdGZvcm06IFwiSW9uaWMgQW5kcm9pZFwifSkpXG4gKiAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiRGV2aWNlIG1ldGFkYXRhIHdhcyBjaGFuZ2VkXCIpKVxuICogICAgICAudGhlbigoKSA9PiBzZGtJbnN0YW5jZS5zZXRUcmFja2luZ05vdGlmaWNhdGlvblByb3BlcnRpZXMoXCJUcmFja2luZyBPblwiLCBcIklvbmljIFNESyBpcyB0cmFja2luZ1wiKSlcbiAqICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gcHJvcGVydGllcyB3ZXJlIGNoYW5nZWRcIikpXG4gKiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiR290IGVycm9yIGluIEh5cGVyVHJhY2sgXCIgKyBlcnIpKTtcbiAqICAgfVxuICpcbiAqIGBgYFxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIEh5cGVyVHJhY2sge1xuICAvKiogRW5hYmxlcyBkZWJ1ZyBsb2cgaW4gbmF0aXZlIEh5cGVyVHJhY2sgU0RLLiAqL1xuICBzdGF0aWMgZW5hYmxlRGVidWdMb2dnaW5nKCk6IHZvaWQge1xuICAgIG5ldyBIeXBlclRyYWNrUGx1Z2luKCkuZW5hYmxlRGVidWdMb2dnaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogRW50cnkgcG9pbnQgaW50byBTREsuXG4gICAqXG4gICAqIEluaXRpYWxpemVzIFNESy4gQWxzbyByZXNvbHZlcyBTREsgaW5zdGFuY2UgdGhhdCBjb3VsZCBiZSB1c2VkIHRvIHF1ZXJ5IGRldmljZUlkIG9yIHNldFxuICAgKiB2YXJpb3VzIGRhdGEuXG4gICAqIEBwYXJhbSBwdWJsaXNoYWJsZUtleSBhY2NvdW50LXNwZWNpZmljIHNlY3JldCBmcm9tIHRoZSBIeXBlclRyYWNrIGRhc2hib3JhZC5cbiAgICpcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kYXNoYm9hcmQuaHlwZXJ0cmFjay5jb20vc2V0dXB9LlxuICAgKi9cbiAgc3RhdGljIGluaXRpYWxpemUocHVibGlzaGFibGVLZXk6IHN0cmluZyk6IFByb21pc2U8SHlwZXJUcmFjaz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBuZXcgSHlwZXJUcmFja1BsdWdpbigpXG4gICAgICAgIC5pbml0aWFsaXplKHB1Ymxpc2hhYmxlS2V5KVxuICAgICAgICAudGhlbigoY29yZG92YUluc3RhbmNlOiBIeXBlclRyYWNrQ29yZG92YSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUobmV3IEh5cGVyVHJhY2soY29yZG92YUluc3RhbmNlKSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4gcmVqZWN0KGVycikpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFJlc29sdmVzIGRldmljZSBJRCB0aGF0IGNvdWxkIGJlIHVzZWQgdG8gaWRlbnRpZnkgdGhlIGRldmljZS4gKi9cbiAgZ2V0RGV2aWNlSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuZ2V0RGV2aWNlSWQoXG4gICAgICAgIGRldmljZUlkID0+IHJlc29sdmUoZGV2aWNlSWQpLFxuICAgICAgICBlcnIgPT4gcmVqZWN0KGVycilcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogUmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0cmFja2luZyBzZXJ2aWNlIGlzIHJ1bm5pbmcgYW5kIGZhbHNlIG90aGVyd2lzZSAqL1xuICBpc1J1bm5pbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLmlzUnVubmluZyhcbiAgICAgICAgaXNSdW5uaW5nID0+IHJlc29sdmUoaXNSdW5uaW5nKSxcbiAgICAgICAgZXJyID0+IHJlamVjdChlcnIpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFNldHMgZGV2aWNlIG5hbWUgdGhhdCBjb3VsZCBiZSB1c2VkIHRvIGlkZW50aWZ5IHRoZSBkZXZpY2UgaW4gSHlwZXJUcmFjayBkYXNoYm9hcmQgKi9cbiAgc2V0RGV2aWNlTmFtZShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5zZXREZXZpY2VOYW1lKFxuICAgICAgICBuYW1lLFxuICAgICAgICAoKSA9PiByZXNvbHZlKCksXG4gICAgICAgIGVyciA9PiByZWplY3QoZXJyKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdGhpcyB0byBzZXQgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLCBsaWtlIHNlZ21lbnRzLCB0ZWFtcyBldGMuXG4gICAqIEBwYXJhbSBtZXRhZGF0YSBrZXktdmFsdWUgcGFpcyBvZiBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgc2V0RGV2aWNlTWV0YWRhdGEobWV0YWRhdGE6IE9iamVjdCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLnNldERldmljZU1ldGFkYXRhKFxuICAgICAgICBtZXRhZGF0YSxcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxuICAgICAgICBlcnIgPT4gcmVqZWN0KGVycilcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogVXBkYXRlcyB0aXRsZSBhbmQgdGV4dCBpbiBwZXJzaXN0ZW50IG5vdGlmaWNhdGlvbiwgdGhhdCBhcHBlYXJzIHdoZW4gdHJhY2tpbmcgaXMgYWN0aXZlLiAgKi9cbiAgc2V0VHJhY2tpbmdOb3RpZmljYXRpb25Qcm9wZXJ0aWVzKHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLnNldFRyYWNraW5nTm90aWZpY2F0aW9uUHJvcGVydGllcyhcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcbiAgICAgICAgZXJyID0+IHJlamVjdChlcnIpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEFkZHMgc3BlY2lhbCBtYXJrZXItbGlrZSBvYmplY3QgdG8gZGV2aWNlIHRpbWVsaW5lLiAqL1xuICBhZGRHZW90YWcoZ2VvdGFnRGF0YTogT2JqZWN0LCBleHBlY3RlZExvY2F0aW9uPzogQ29vcmRpbmF0ZXMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5hZGRHZW9UYWcoXG4gICAgICAgIGdlb3RhZ0RhdGEsXG4gICAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcbiAgICAgICAgZXJyID0+IHJlamVjdChlcnIpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFBvcHMgdXAgcGVybWlzc2lvbiByZXF1ZXN0IGRpYWxvZywgaWYgcGVybWlzc2lvbnMgd2VyZW4ndCBncmFudGVkIGJlZm9yZSBvciBkb2VzIG5vdGhpbmcgb3RoZXJ3aXNlLiAqL1xuICByZXF1ZXN0UGVybWlzc2lvbnNJZk5lY2Vzc2FyeSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5yZXF1ZXN0UGVybWlzc2lvbnNJZk5lY2Vzc2FyeShcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxuICAgICAgICBlcnIgPT4gcmVqZWN0KGVycilcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQWxsb3dzIGluamVjdGluZyBmYWxzZSBsb2NhdGlvbnMgaW50byB0aGUgU0RLLCB3aGljaCBpZ25vcmVzIHRoZW0gYnkgZGVmYXVsdC4gKi9cbiAgYWxsb3dNb2NrTG9jYXRpb25zKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLmFsbG93TW9ja0xvY2F0aW9ucyhcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxuICAgICAgICBlcnIgPT4gcmVqZWN0KGVycilcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3luY2hyb25pemVzIHRyYWNraW5nIHN0YXRlIHdpdGggcGxhdGZvcm0gbW9kZWwuIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG9cbiAgICogaGFyZGVuIHBsYXRmb3JtMmRldmljZSBjb21tdW5pY2F0aW9uIGNoYW5uZWwuXG4gICAqL1xuICBzeW5jRGV2aWNlU2V0dGluZ3MoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuc3luY0RldmljZVNldHRpbmdzKFxuICAgICAgICAoKSA9PiByZXNvbHZlKCksXG4gICAgICAgIGVyciA9PiByZWplY3QoZXJyKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY29uc3RydWN0b3IocHJpdmF0ZSBjb3Jkb3ZhSW5zdGFuY2VIYW5kbGU6IEh5cGVyVHJhY2tDb3Jkb3ZhKSB7fVxufVxuIl19