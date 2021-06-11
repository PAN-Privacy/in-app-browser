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
import { fromEvent } from 'rxjs';
var AdMobFreeOriginal = /** @class */ (function (_super) {
    __extends(AdMobFreeOriginal, _super);
    function AdMobFreeOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience object to get event names
         * @type {Object}
         */
        _this.events = {
            BANNER_LOAD: 'admob.banner.events.LOAD',
            BANNER_LOAD_FAIL: 'admob.banner.events.LOAD_FAIL',
            BANNER_OPEN: 'admob.banner.events.OPEN',
            BANNER_CLOSE: 'admob.banner.events.CLOSE',
            BANNER_EXIT_APP: 'admob.banner.events.EXIT_APP',
            INTERSTITIAL_LOAD: 'admob.interstitial.events.LOAD',
            INTERSTITIAL_LOAD_FAIL: 'admob.interstitial.events.LOAD_FAIL',
            INTERSTITIAL_OPEN: 'admob.interstitial.events.OPEN',
            INTERSTITIAL_CLOSE: 'admob.interstitial.events.CLOSE',
            INTERSTITIAL_EXIT_APP: 'admob.interstitial.events.EXIT_APP',
            REWARD_VIDEO_LOAD: 'admob.rewardvideo.events.LOAD',
            REWARD_VIDEO_LOAD_FAIL: 'admob.rewardvideo.events.LOAD_FAIL',
            REWARD_VIDEO_OPEN: 'admob.rewardvideo.events.OPEN',
            REWARD_VIDEO_CLOSE: 'admob.rewardvideo.events.CLOSE',
            REWARD_VIDEO_EXIT_APP: 'admob.rewardvideo.events.EXIT_APP',
            REWARD_VIDEO_START: 'admob.rewardvideo.events.START',
            REWARD_VIDEO_REWARD: 'admob.rewardvideo.events.REWARD',
        };
        /**
         * Returns the AdMobFreeBanner object
         * @type {AdMobFreeBanner}
         */
        _this.banner = new AdMobFreeBanner();
        /**
         * Returns the AdMobFreeInterstitial object
         * @type {AdMobFreeInterstitial}
         */
        _this.interstitial = new AdMobFreeInterstitial();
        /**
         * Returns the AdMobFreeRewardVideo object
         * @type {AdMobFreeRewardVideo}
         */
        _this.rewardVideo = new AdMobFreeRewardVideo();
        return _this;
    }
    /**
     * Watch an event
     * @param event {string} event name
     * @return {Observable<any>}
     */
    AdMobFreeOriginal.prototype.on = function (event) {
        return fromEvent(document, event);
    };
    AdMobFreeOriginal.pluginName = "AdMobFree";
    AdMobFreeOriginal.plugin = "cordova-plugin-admob-free";
    AdMobFreeOriginal.pluginRef = "admob";
    AdMobFreeOriginal.repo = "https://github.com/ratson/cordova-plugin-admob-free";
    AdMobFreeOriginal.platforms = ["Android", "iOS"];
    return AdMobFreeOriginal;
}(IonicNativePlugin));
var AdMobFree = new AdMobFreeOriginal();
export { AdMobFree };
var AdMobFreeBanner = /** @class */ (function (_super) {
    __extends(AdMobFreeBanner, _super);
    function AdMobFreeBanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdMobFreeBanner.prototype.config = function (options) { return cordova(this, "config", { "sync": true }, arguments); };
    AdMobFreeBanner.prototype.hide = function () { return cordova(this, "hide", { "otherPromise": true }, arguments); };
    AdMobFreeBanner.prototype.prepare = function () { return cordova(this, "prepare", { "otherPromise": true }, arguments); };
    AdMobFreeBanner.prototype.remove = function () { return cordova(this, "remove", { "otherPromise": true }, arguments); };
    AdMobFreeBanner.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    AdMobFreeBanner.pluginName = "AdMobFree";
    AdMobFreeBanner.plugin = "cordova-plugin-admob-free";
    AdMobFreeBanner.pluginRef = "admob.banner";
    return AdMobFreeBanner;
}(IonicNativePlugin));
export { AdMobFreeBanner };
var AdMobFreeInterstitial = /** @class */ (function (_super) {
    __extends(AdMobFreeInterstitial, _super);
    function AdMobFreeInterstitial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdMobFreeInterstitial.prototype.config = function (options) { return cordova(this, "config", { "sync": true }, arguments); };
    AdMobFreeInterstitial.prototype.isReady = function () { return cordova(this, "isReady", { "otherPromise": true }, arguments); };
    AdMobFreeInterstitial.prototype.prepare = function () { return cordova(this, "prepare", { "otherPromise": true }, arguments); };
    AdMobFreeInterstitial.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    AdMobFreeInterstitial.pluginName = "AdMobFree";
    AdMobFreeInterstitial.plugin = "cordova-plugin-admob-free";
    AdMobFreeInterstitial.pluginRef = "admob.interstitial";
    return AdMobFreeInterstitial;
}(IonicNativePlugin));
export { AdMobFreeInterstitial };
var AdMobFreeRewardVideo = /** @class */ (function (_super) {
    __extends(AdMobFreeRewardVideo, _super);
    function AdMobFreeRewardVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdMobFreeRewardVideo.prototype.config = function (options) { return cordova(this, "config", { "sync": true }, arguments); };
    AdMobFreeRewardVideo.prototype.isReady = function () { return cordova(this, "isReady", { "otherPromise": true }, arguments); };
    AdMobFreeRewardVideo.prototype.prepare = function () { return cordova(this, "prepare", { "otherPromise": true }, arguments); };
    AdMobFreeRewardVideo.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    AdMobFreeRewardVideo.pluginName = "AdMobFree";
    AdMobFreeRewardVideo.plugin = "cordova-plugin-admob-free";
    AdMobFreeRewardVideo.pluginRef = "admob.rewardvideo";
    return AdMobFreeRewardVideo;
}(IonicNativePlugin));
export { AdMobFreeRewardVideo };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FkbW9iLWZyZWUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFjLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFzS2QsNkJBQWlCOzs7UUFDOUM7OztXQUdHO1FBQ0gsWUFBTSxHQUFHO1lBQ1AsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxnQkFBZ0IsRUFBRSwrQkFBK0I7WUFDakQsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxZQUFZLEVBQUUsMkJBQTJCO1lBQ3pDLGVBQWUsRUFBRSw4QkFBOEI7WUFFL0MsaUJBQWlCLEVBQUUsZ0NBQWdDO1lBQ25ELHNCQUFzQixFQUFFLHFDQUFxQztZQUM3RCxpQkFBaUIsRUFBRSxnQ0FBZ0M7WUFDbkQsa0JBQWtCLEVBQUUsaUNBQWlDO1lBQ3JELHFCQUFxQixFQUFFLG9DQUFvQztZQUUzRCxpQkFBaUIsRUFBRSwrQkFBK0I7WUFDbEQsc0JBQXNCLEVBQUUsb0NBQW9DO1lBQzVELGlCQUFpQixFQUFFLCtCQUErQjtZQUNsRCxrQkFBa0IsRUFBRSxnQ0FBZ0M7WUFDcEQscUJBQXFCLEVBQUUsbUNBQW1DO1lBQzFELGtCQUFrQixFQUFFLGdDQUFnQztZQUNwRCxtQkFBbUIsRUFBRSxpQ0FBaUM7U0FDdkQsQ0FBQztRQVdGOzs7V0FHRztRQUNILFlBQU0sR0FBb0IsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUVoRDs7O1dBR0c7UUFDSCxrQkFBWSxHQUEwQixJQUFJLHFCQUFxQixFQUFFLENBQUM7UUFFbEU7OztXQUdHO1FBQ0gsaUJBQVcsR0FBeUIsSUFBSSxvQkFBb0IsRUFBRSxDQUFDOzs7SUF6Qi9EOzs7O09BSUc7SUFDSCxzQkFBRSxHQUFGLFVBQUcsS0FBYTtRQUNkLE9BQU8sU0FBUyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7b0JBMU1IO0VBd0srQixpQkFBaUI7U0FBbkMsU0FBUzs7SUErRGUsbUNBQWlCOzs7O0lBT3BELGdDQUFNLGFBQUMsT0FBOEI7SUFTckMsOEJBQUk7SUFTSixpQ0FBTztJQVNQLGdDQUFNO0lBU04sOEJBQUk7Ozs7MEJBbFJOO0VBdU9xQyxpQkFBaUI7U0FBekMsZUFBZTs7SUF3RGUseUNBQWlCOzs7O0lBTzFELHNDQUFNLGFBQUMsT0FBb0M7SUFTM0MsdUNBQU87SUFTUCx1Q0FBTztJQVNQLG9DQUFJOzs7O2dDQWpVTjtFQStSMkMsaUJBQWlCO1NBQS9DLHFCQUFxQjs7SUErQ1Esd0NBQWlCOzs7O0lBT3pELHFDQUFNLGFBQUMsT0FBbUM7SUFTMUMsc0NBQU87SUFTUCxzQ0FBTztJQVNQLG1DQUFJOzs7OytCQWhYTjtFQThVMEMsaUJBQWlCO1NBQTlDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRNb2JGcmVlQmFubmVyQ29uZmlnIHtcbiAgLyoqXG4gICAqIEFkIFVuaXQgSURcbiAgICovXG4gIGlkPzogc3RyaW5nO1xuICAvKipcbiAgICogUmVjZWl2aW5nIHRlc3QgYWRcbiAgICovXG4gIGlzVGVzdGluZz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBdXRvIHNob3cgYWQgd2hlbiBsb2FkZWRcbiAgICovXG4gIGF1dG9TaG93PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENoaWxkLWRpcmVjdGVkIHNldHRpbmcuIERlZmF1bHQgaXMgbm90IGNhbGxpbmcgYHRhZ0ZvckNoaWxkRGlyZWN0ZWRUcmVhdG1lbnRgLlxuICAgKiBTZXQgdG8gYHRydWVgIGZvciBgdGFnRm9yQ2hpbGREaXJlY3RlZFRyZWF0bWVudCh0cnVlKWAuXG4gICAqIFNldCB0byBgZmFsc2VgIGZvciBgdGFnRm9yQ2hpbGREaXJlY3RlZFRyZWF0bWVudChmYWxzZSlgLlxuICAgKi9cbiAgZm9yQ2hpbGQ/OiBib29sZWFuIHwgbnVsbDtcbiAgLyoqXG4gICAqIERlc2lnbmVkIGZvciBGYW1pbGllcyBzZXR0aW5nLiBBbmRyb2lkLW9ubHkuIERlZmF1bHQgaXMgbm90IGNhbGxpbmcgc2V0SXNEZXNpZ25lZEZvckZhbWlsaWVzLlxuICAgKiBTZXQgdG8gYHRydWVgIGZvciBgc2V0SXNEZXNpZ25lZEZvckZhbWlsaWVzKHRydWUpYC5cbiAgICogU2V0IHRvIGBmYWxzZWAgZm9yIGBzZXRJc0Rlc2lnbmVkRm9yRmFtaWxpZXMoZmFsc2UpYC5cbiAgICovXG4gIGZvckZhbWlseT86IGJvb2xlYW4gfCBudWxsO1xuICAvKipcbiAgICogTG9jYXRpb24gdGFyZ2V0aW5nLiBJdCBhY2NlcHQgYW4gYXJyYXkgaW4gdGhlIGZvcm0gb2YgYFtsYXRpdHVkZSwgbG9uZ2l0dWRlXWAuXG4gICAqIEFuZHJvaWQtb25seS4gRGVmYXVsdCBpcyBub3QgY2FsbGluZyBgc2V0TGF0aXR1ZGVgIGFuZCBgc2V0TG9uZ2l0dWRlYC5cbiAgICovXG4gIGxvY2F0aW9uPzogbnVtYmVyW10gfCBudWxsO1xuICAvKipcbiAgICogU2V0IHRvIHRydWUsIHRvIHB1dCBiYW5uZXIgYXQgdG9wXG4gICAqL1xuICBiYW5uZXJBdFRvcD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSwgdG8gYWxsb3cgYmFubmVyIG92ZXJsYXAgV2ViVmlld1xuICAgKi9cbiAgb3ZlcmxhcD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSB0byBhdm9pZCBpb3M3IHN0YXR1cyBiYXIgb3ZlcmxhcFxuICAgKi9cbiAgb2Zmc2V0VG9wQmFyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEJhbm5lciAgc2l6ZVxuICAgKi9cbiAgc2l6ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZE1vYkZyZWVJbnRlcnN0aXRpYWxDb25maWcge1xuICAvKipcbiAgICogQWQgVW5pdCBJRFxuICAgKi9cbiAgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBSZWNlaXZpbmcgdGVzdCBhZFxuICAgKi9cbiAgaXNUZXN0aW5nPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEF1dG8gc2hvdyBhZCB3aGVuIGxvYWRlZFxuICAgKi9cbiAgYXV0b1Nob3c/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2hpbGQtZGlyZWN0ZWQgc2V0dGluZy4gRGVmYXVsdCBpcyBub3QgY2FsbGluZyBgdGFnRm9yQ2hpbGREaXJlY3RlZFRyZWF0bWVudGAuXG4gICAqIFNldCB0byBgdHJ1ZWAgZm9yIGB0YWdGb3JDaGlsZERpcmVjdGVkVHJlYXRtZW50KHRydWUpYC5cbiAgICogU2V0IHRvIGBmYWxzZWAgZm9yIGB0YWdGb3JDaGlsZERpcmVjdGVkVHJlYXRtZW50KGZhbHNlKWAuXG4gICAqL1xuICBmb3JDaGlsZD86IGJvb2xlYW4gfCBudWxsO1xuICAvKipcbiAgICogRGVzaWduZWQgZm9yIEZhbWlsaWVzIHNldHRpbmcuIEFuZHJvaWQtb25seS4gRGVmYXVsdCBpcyBub3QgY2FsbGluZyBzZXRJc0Rlc2lnbmVkRm9yRmFtaWxpZXMuXG4gICAqIFNldCB0byBgdHJ1ZWAgZm9yIGBzZXRJc0Rlc2lnbmVkRm9yRmFtaWxpZXModHJ1ZSlgLlxuICAgKiBTZXQgdG8gYGZhbHNlYCBmb3IgYHNldElzRGVzaWduZWRGb3JGYW1pbGllcyhmYWxzZSlgLlxuICAgKi9cbiAgZm9yRmFtaWx5PzogYm9vbGVhbiB8IG51bGw7XG4gIC8qKlxuICAgKiBMb2NhdGlvbiB0YXJnZXRpbmcuIEl0IGFjY2VwdCBhbiBhcnJheSBpbiB0aGUgZm9ybSBvZiBgW2xhdGl0dWRlLCBsb25naXR1ZGVdYC5cbiAgICogQW5kcm9pZC1vbmx5LiBEZWZhdWx0IGlzIG5vdCBjYWxsaW5nIGBzZXRMYXRpdHVkZWAgYW5kIGBzZXRMb25naXR1ZGVgLlxuICAgKi9cbiAgbG9jYXRpb24/OiBudW1iZXJbXSB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRNb2JGcmVlUmV3YXJkVmlkZW9Db25maWcge1xuICAvKipcbiAgICogQWQgVW5pdCBJRFxuICAgKi9cbiAgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBSZWNlaXZpbmcgdGVzdCBhZFxuICAgKi9cbiAgaXNUZXN0aW5nPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEF1dG8gc2hvdyBhZCB3aGVuIGxvYWRlZFxuICAgKi9cbiAgYXV0b1Nob3c/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2hpbGQtZGlyZWN0ZWQgc2V0dGluZy4gRGVmYXVsdCBpcyBub3QgY2FsbGluZyBgdGFnRm9yQ2hpbGREaXJlY3RlZFRyZWF0bWVudGAuXG4gICAqIFNldCB0byBgdHJ1ZWAgZm9yIGB0YWdGb3JDaGlsZERpcmVjdGVkVHJlYXRtZW50KHRydWUpYC5cbiAgICogU2V0IHRvIGBmYWxzZWAgZm9yIGB0YWdGb3JDaGlsZERpcmVjdGVkVHJlYXRtZW50KGZhbHNlKWAuXG4gICAqL1xuICBmb3JDaGlsZD86IGJvb2xlYW4gfCBudWxsO1xuICAvKipcbiAgICogRGVzaWduZWQgZm9yIEZhbWlsaWVzIHNldHRpbmcuIEFuZHJvaWQtb25seS4gRGVmYXVsdCBpcyBub3QgY2FsbGluZyBzZXRJc0Rlc2lnbmVkRm9yRmFtaWxpZXMuXG4gICAqIFNldCB0byBgdHJ1ZWAgZm9yIGBzZXRJc0Rlc2lnbmVkRm9yRmFtaWxpZXModHJ1ZSlgLlxuICAgKiBTZXQgdG8gYGZhbHNlYCBmb3IgYHNldElzRGVzaWduZWRGb3JGYW1pbGllcyhmYWxzZSlgLlxuICAgKi9cbiAgZm9yRmFtaWx5PzogYm9vbGVhbiB8IG51bGw7XG4gIC8qKlxuICAgKiBMb2NhdGlvbiB0YXJnZXRpbmcuIEl0IGFjY2VwdCBhbiBhcnJheSBpbiB0aGUgZm9ybSBvZiBgW2xhdGl0dWRlLCBsb25naXR1ZGVdYC5cbiAgICogQW5kcm9pZC1vbmx5LiBEZWZhdWx0IGlzIG5vdCBjYWxsaW5nIGBzZXRMYXRpdHVkZWAgYW5kIGBzZXRMb25naXR1ZGVgLlxuICAgKi9cbiAgbG9jYXRpb24/OiBudW1iZXJbXSB8IG51bGw7XG59XG5cbi8qKlxuICogQG5hbWUgQWRNb2IgRnJlZVxuICogQGRlc2NyaXB0aW9uXG4gKiBBIGZyZWUsIG5vIGFkLXNoYXJpbmcgdmVyc2lvbiBvZiBHb29nbGUgQWRNb2IgcGx1Z2luIGZvciBDb3Jkb3ZhLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tYWRtb2ItZnJlZWAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtBZE1vYiBGcmVlIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vcmF0c29uL2NvcmRvdmEtcGx1Z2luLWFkbW9iLWZyZWUpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQWRNb2JGcmVlLCBBZE1vYkZyZWVCYW5uZXJDb25maWcgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FkbW9iLWZyZWUvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhZG1vYkZyZWU6IEFkTW9iRnJlZSkgeyB9XG4gKlxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBjb25zdCBiYW5uZXJDb25maWc6IEFkTW9iRnJlZUJhbm5lckNvbmZpZyA9IHtcbiAqICAvLyBhZGQgeW91ciBjb25maWcgaGVyZVxuICogIC8vIGZvciB0aGUgc2FrZSBvZiB0aGlzIGV4YW1wbGUgd2Ugd2lsbCBqdXN0IHVzZSB0aGUgdGVzdCBjb25maWdcbiAqICBpc1Rlc3Rpbmc6IHRydWUsXG4gKiAgYXV0b1Nob3c6IHRydWVcbiAqIH07XG4gKiB0aGlzLmFkbW9iRnJlZS5iYW5uZXIuY29uZmlnKGJhbm5lckNvbmZpZyk7XG4gKlxuICogdGhpcy5hZG1vYkZyZWUuYmFubmVyLnByZXBhcmUoKVxuICogICAudGhlbigoKSA9PiB7XG4gKiAgICAgLy8gYmFubmVyIEFkIGlzIHJlYWR5XG4gKiAgICAgLy8gaWYgd2Ugc2V0IGF1dG9TaG93IHRvIGZhbHNlLCB0aGVuIHdlIHdpbGwgbmVlZCB0byBjYWxsIHRoZSBzaG93IG1ldGhvZCBoZXJlXG4gKiAgIH0pXG4gKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAqXG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQWRNb2JGcmVlQmFubmVyQ29uZmlnXG4gKiBBZE1vYkZyZWVJbnRlcnN0aXRpYWxDb25maWdcbiAqIEFkTW9iRnJlZVJld2FyZFZpZGVvQ29uZmlnXG4gKiBAY2xhc3Nlc1xuICogQWRNb2JGcmVlQmFubmVyXG4gKiBBZE1vYkZyZWVJbnRlcnN0aXRpYWxcbiAqIEFkTW9iRnJlZVJld2FyZFZpZGVvXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQWRNb2JGcmVlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYWRtb2ItZnJlZScsXG4gIHBsdWdpblJlZjogJ2FkbW9iJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9yYXRzb24vY29yZG92YS1wbHVnaW4tYWRtb2ItZnJlZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZE1vYkZyZWUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBvYmplY3QgdG8gZ2V0IGV2ZW50IG5hbWVzXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBldmVudHMgPSB7XG4gICAgQkFOTkVSX0xPQUQ6ICdhZG1vYi5iYW5uZXIuZXZlbnRzLkxPQUQnLFxuICAgIEJBTk5FUl9MT0FEX0ZBSUw6ICdhZG1vYi5iYW5uZXIuZXZlbnRzLkxPQURfRkFJTCcsXG4gICAgQkFOTkVSX09QRU46ICdhZG1vYi5iYW5uZXIuZXZlbnRzLk9QRU4nLFxuICAgIEJBTk5FUl9DTE9TRTogJ2FkbW9iLmJhbm5lci5ldmVudHMuQ0xPU0UnLFxuICAgIEJBTk5FUl9FWElUX0FQUDogJ2FkbW9iLmJhbm5lci5ldmVudHMuRVhJVF9BUFAnLFxuXG4gICAgSU5URVJTVElUSUFMX0xPQUQ6ICdhZG1vYi5pbnRlcnN0aXRpYWwuZXZlbnRzLkxPQUQnLFxuICAgIElOVEVSU1RJVElBTF9MT0FEX0ZBSUw6ICdhZG1vYi5pbnRlcnN0aXRpYWwuZXZlbnRzLkxPQURfRkFJTCcsXG4gICAgSU5URVJTVElUSUFMX09QRU46ICdhZG1vYi5pbnRlcnN0aXRpYWwuZXZlbnRzLk9QRU4nLFxuICAgIElOVEVSU1RJVElBTF9DTE9TRTogJ2FkbW9iLmludGVyc3RpdGlhbC5ldmVudHMuQ0xPU0UnLFxuICAgIElOVEVSU1RJVElBTF9FWElUX0FQUDogJ2FkbW9iLmludGVyc3RpdGlhbC5ldmVudHMuRVhJVF9BUFAnLFxuXG4gICAgUkVXQVJEX1ZJREVPX0xPQUQ6ICdhZG1vYi5yZXdhcmR2aWRlby5ldmVudHMuTE9BRCcsXG4gICAgUkVXQVJEX1ZJREVPX0xPQURfRkFJTDogJ2FkbW9iLnJld2FyZHZpZGVvLmV2ZW50cy5MT0FEX0ZBSUwnLFxuICAgIFJFV0FSRF9WSURFT19PUEVOOiAnYWRtb2IucmV3YXJkdmlkZW8uZXZlbnRzLk9QRU4nLFxuICAgIFJFV0FSRF9WSURFT19DTE9TRTogJ2FkbW9iLnJld2FyZHZpZGVvLmV2ZW50cy5DTE9TRScsXG4gICAgUkVXQVJEX1ZJREVPX0VYSVRfQVBQOiAnYWRtb2IucmV3YXJkdmlkZW8uZXZlbnRzLkVYSVRfQVBQJyxcbiAgICBSRVdBUkRfVklERU9fU1RBUlQ6ICdhZG1vYi5yZXdhcmR2aWRlby5ldmVudHMuU1RBUlQnLFxuICAgIFJFV0FSRF9WSURFT19SRVdBUkQ6ICdhZG1vYi5yZXdhcmR2aWRlby5ldmVudHMuUkVXQVJEJyxcbiAgfTtcblxuICAvKipcbiAgICogV2F0Y2ggYW4gZXZlbnRcbiAgICogQHBhcmFtIGV2ZW50IHtzdHJpbmd9IGV2ZW50IG5hbWVcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgb24oZXZlbnQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIGZyb21FdmVudChkb2N1bWVudCwgZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIEFkTW9iRnJlZUJhbm5lciBvYmplY3RcbiAgICogQHR5cGUge0FkTW9iRnJlZUJhbm5lcn1cbiAgICovXG4gIGJhbm5lcjogQWRNb2JGcmVlQmFubmVyID0gbmV3IEFkTW9iRnJlZUJhbm5lcigpO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBBZE1vYkZyZWVJbnRlcnN0aXRpYWwgb2JqZWN0XG4gICAqIEB0eXBlIHtBZE1vYkZyZWVJbnRlcnN0aXRpYWx9XG4gICAqL1xuICBpbnRlcnN0aXRpYWw6IEFkTW9iRnJlZUludGVyc3RpdGlhbCA9IG5ldyBBZE1vYkZyZWVJbnRlcnN0aXRpYWwoKTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgQWRNb2JGcmVlUmV3YXJkVmlkZW8gb2JqZWN0XG4gICAqIEB0eXBlIHtBZE1vYkZyZWVSZXdhcmRWaWRlb31cbiAgICovXG4gIHJld2FyZFZpZGVvOiBBZE1vYkZyZWVSZXdhcmRWaWRlbyA9IG5ldyBBZE1vYkZyZWVSZXdhcmRWaWRlbygpO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBZE1vYkZyZWUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hZG1vYi1mcmVlJyxcbiAgcGx1Z2luUmVmOiAnYWRtb2IuYmFubmVyJyxcbn0pXG5leHBvcnQgY2xhc3MgQWRNb2JGcmVlQmFubmVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVXBkYXRlIGNvbmZpZ1xuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtBZE1vYkZyZWVCYW5uZXJDb25maWd9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY29uZmlnKG9wdGlvbnM6IEFkTW9iRnJlZUJhbm5lckNvbmZpZyk6IEFkTW9iRnJlZUJhbm5lckNvbmZpZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIGJhbm5lclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBoaWRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBiYW5uZXJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgcHJlcGFyZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGJhbm5lclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICByZW1vdmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgYmFubmVyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIHNob3coKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQWRNb2JGcmVlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYWRtb2ItZnJlZScsXG4gIHBsdWdpblJlZjogJ2FkbW9iLmludGVyc3RpdGlhbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFkTW9iRnJlZUludGVyc3RpdGlhbCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFVwZGF0ZSBjb25maWdcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHJldHVybiB7QWRNb2JGcmVlSW50ZXJzdGl0aWFsQ29uZmlnfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNvbmZpZyhvcHRpb25zOiBBZE1vYkZyZWVJbnRlcnN0aXRpYWxDb25maWcpOiBBZE1vYkZyZWVJbnRlcnN0aXRpYWxDb25maWcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBpbnRlcnN0aXRpYWwgaXMgcmVhZHlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgaXNSZWFkeSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGludGVyc3RpdGlhbFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBwcmVwYXJlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIGludGVyc3RpdGlhbFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBzaG93KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FkTW9iRnJlZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFkbW9iLWZyZWUnLFxuICBwbHVnaW5SZWY6ICdhZG1vYi5yZXdhcmR2aWRlbycsXG59KVxuZXhwb3J0IGNsYXNzIEFkTW9iRnJlZVJld2FyZFZpZGVvIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVXBkYXRlIGNvbmZpZ1xuICAgKiBAcGFyYW0ge0FkTW9iRnJlZVJld2FyZFZpZGVvQ29uZmlnfSBvcHRpb25zIEFkbW9iIHJld2FyZCBjb25maWdcbiAgICogQHJldHVybiB7QWRNb2JGcmVlUmV3YXJkVmlkZW9Db25maWd9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY29uZmlnKG9wdGlvbnM6IEFkTW9iRnJlZVJld2FyZFZpZGVvQ29uZmlnKTogQWRNb2JGcmVlUmV3YXJkVmlkZW9Db25maWcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiByZXdhcmQgdmlkZW8gaXMgcmVhZHlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgaXNSZWFkeSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHJld2FyZCB2aWRlb1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBwcmVwYXJlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIHJld2FyZCB2aWRlb1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBzaG93KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=