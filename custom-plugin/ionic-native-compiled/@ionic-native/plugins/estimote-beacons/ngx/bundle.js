'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
require('rxjs');

var EstimoteBeacons = /** @class */ (function (_super) {
    tslib.__extends(EstimoteBeacons, _super);
    function EstimoteBeacons() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Proximity value */
        _this.ProximityUnknown = 0;
        /** Proximity value */
        _this.ProximityImmediate = 1;
        /** Proximity value */
        _this.ProximityNear = 2;
        /** Proximity value */
        _this.ProximityFar = 3;
        /** Beacon colour */
        _this.BeaconColorUnknown = 0;
        /** Beacon colour */
        _this.BeaconColorMintCocktail = 1;
        /** Beacon colour */
        _this.BeaconColorIcyMarshmallow = 2;
        /** Beacon colour */
        _this.BeaconColorBlueberryPie = 3;
        /**
         * Beacon colour.
         */
        _this.BeaconColorSweetBeetroot = 4;
        /** Beacon colour */
        _this.BeaconColorCandyFloss = 5;
        /** Beacon colour */
        _this.BeaconColorLemonTart = 6;
        /** Beacon colour */
        _this.BeaconColorVanillaJello = 7;
        /** Beacon colour */
        _this.BeaconColorLiquoriceSwirl = 8;
        /** Beacon colour */
        _this.BeaconColorWhite = 9;
        /** Beacon colour */
        _this.BeaconColorTransparent = 10;
        /** Region state */
        _this.RegionStateUnknown = 'unknown';
        /** Region state */
        _this.RegionStateOutside = 'outside';
        /** Region state */
        _this.RegionStateInside = 'inside';
        return _this;
    }
    EstimoteBeacons.prototype.requestWhenInUseAuthorization = function () { return core.cordova(this, "requestWhenInUseAuthorization", {}, arguments); };
    EstimoteBeacons.prototype.requestAlwaysAuthorization = function () { return core.cordova(this, "requestAlwaysAuthorization", {}, arguments); };
    EstimoteBeacons.prototype.authorizationStatus = function () { return core.cordova(this, "authorizationStatus", {}, arguments); };
    EstimoteBeacons.prototype.startAdvertisingAsBeacon = function (uuid, major, minor, regionId) { return core.cordova(this, "startAdvertisingAsBeacon", { "clearFunction": "stopAdvertisingAsBeacon" }, arguments); };
    EstimoteBeacons.prototype.stopAdvertisingAsBeacon = function () { return core.cordova(this, "stopAdvertisingAsBeacon", {}, arguments); };
    EstimoteBeacons.prototype.enableAnalytics = function (enable) { return core.cordova(this, "enableAnalytics", {}, arguments); };
    EstimoteBeacons.prototype.isAnalyticsEnabled = function () { return core.cordova(this, "isAnalyticsEnabled", {}, arguments); };
    EstimoteBeacons.prototype.isAuthorized = function () { return core.cordova(this, "isAuthorized", {}, arguments); };
    EstimoteBeacons.prototype.setupAppIDAndAppToken = function (appID, appToken) { return core.cordova(this, "setupAppIDAndAppToken", {}, arguments); };
    EstimoteBeacons.prototype.startEstimoteBeaconDiscovery = function () { return core.cordova(this, "startEstimoteBeaconDiscovery", { "observable": true, "clearFunction": "stopEstimoteBeaconDiscovery" }, arguments); };
    EstimoteBeacons.prototype.stopEstimoteBeaconDiscovery = function () { return core.cordova(this, "stopEstimoteBeaconDiscovery", {}, arguments); };
    EstimoteBeacons.prototype.startRangingBeaconsInRegion = function (region) { return core.cordova(this, "startRangingBeaconsInRegion", { "observable": true, "clearFunction": "stopRangingBeaconsInRegion", "clearWithArgs": true }, arguments); };
    EstimoteBeacons.prototype.stopRangingBeaconsInRegion = function (region) { return core.cordova(this, "stopRangingBeaconsInRegion", {}, arguments); };
    EstimoteBeacons.prototype.startRangingSecureBeaconsInRegion = function (region) { return core.cordova(this, "startRangingSecureBeaconsInRegion", { "observable": true, "clearFunction": "stopRangingSecureBeaconsInRegion", "clearWithArgs": true }, arguments); };
    EstimoteBeacons.prototype.stopRangingSecureBeaconsInRegion = function (region) { return core.cordova(this, "stopRangingSecureBeaconsInRegion", {}, arguments); };
    EstimoteBeacons.prototype.startMonitoringForRegion = function (region, notifyEntryStateOnDisplay) { return core.cordova(this, "startMonitoringForRegion", { "observable": true, "clearFunction": "stopMonitoringForRegion", "clearWithArgs": true, "successIndex": 1, "errorIndex": 2 }, arguments); };
    EstimoteBeacons.prototype.stopMonitoringForRegion = function (region) { return core.cordova(this, "stopMonitoringForRegion", {}, arguments); };
    EstimoteBeacons.prototype.startSecureMonitoringForRegion = function (region, notifyEntryStateOnDisplay) { return core.cordova(this, "startSecureMonitoringForRegion", { "observable": true, "clearFunction": "stopSecureMonitoringForRegion", "clearWithArgs": true, "successIndex": 1, "errorIndex": 2 }, arguments); };
    EstimoteBeacons.prototype.stopSecureMonitoringForRegion = function (region) { return core.cordova(this, "stopSecureMonitoringForRegion", {}, arguments); };
    EstimoteBeacons.prototype.connectToBeacon = function (beacon) { return core.cordova(this, "connectToBeacon", {}, arguments); };
    EstimoteBeacons.prototype.disconnectConnectedBeacon = function () { return core.cordova(this, "disconnectConnectedBeacon", {}, arguments); };
    EstimoteBeacons.prototype.writeConnectedProximityUUID = function (uuid) { return core.cordova(this, "writeConnectedProximityUUID", {}, arguments); };
    EstimoteBeacons.prototype.writeConnectedMajor = function (major) { return core.cordova(this, "writeConnectedMajor", {}, arguments); };
    EstimoteBeacons.prototype.writeConnectedMinor = function (minor) { return core.cordova(this, "writeConnectedMinor", {}, arguments); };
    EstimoteBeacons.pluginName = "EstimoteBeacons";
    EstimoteBeacons.plugin = "cordova-plugin-estimote";
    EstimoteBeacons.pluginRef = "estimote.beacons";
    EstimoteBeacons.repo = "https://github.com/evothings/phonegap-estimotebeacons";
    EstimoteBeacons.platforms = ["Android", "iOS"];
    EstimoteBeacons.decorators = [
        { type: core$1.Injectable }
    ];
    return EstimoteBeacons;
}(core.IonicNativePlugin));

exports.EstimoteBeacons = EstimoteBeacons;
