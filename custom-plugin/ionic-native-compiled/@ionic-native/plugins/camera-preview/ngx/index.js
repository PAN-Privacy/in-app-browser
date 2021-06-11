import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var CameraPreview = /** @class */ (function (_super) {
    __extends(CameraPreview, _super);
    function CameraPreview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FOCUS_MODE = {
            FIXED: 'fixed',
            AUTO: 'auto',
            CONTINUOUS: 'continuous',
            CONTINUOUS_PICTURE: 'continuous-picture',
            CONTINUOUS_VIDEO: 'continuous-video',
            EDOF: 'edof',
            INFINITY: 'infinity',
            MACRO: 'macro',
        };
        _this.EXPOSURE_MODE = {
            LOCK: 'lock',
            AUTO: 'auto',
            CONTINUOUS: 'continuous',
            CUSTOM: 'custom',
        };
        _this.FLASH_MODE = {
            OFF: 'off',
            ON: 'on',
            AUTO: 'auto',
            RED_EYE: 'red-eye',
            TORCH: 'torch',
        };
        _this.COLOR_EFFECT = {
            AQUA: 'aqua',
            BLACKBOARD: 'blackboard',
            MONO: 'mono',
            NEGATIVE: 'negative',
            NONE: 'none',
            POSTERIZE: 'posterize',
            SEPIA: 'sepia',
            SOLARIZE: 'solarize',
            WHITEBOARD: 'whiteboard',
        };
        _this.CAMERA_DIRECTION = {
            BACK: 'back',
            FRONT: 'front',
        };
        return _this;
    }
    CameraPreview.prototype.startCamera = function (options) { return cordova(this, "startCamera", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.startRecordVideo = function (options) { return cordova(this, "startRecordVideo", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.stopCamera = function () { return cordova(this, "stopCamera", {}, arguments); };
    CameraPreview.prototype.stopRecordVideo = function () { return cordova(this, "stopRecordVideo", {}, arguments); };
    CameraPreview.prototype.switchCamera = function () { return cordova(this, "switchCamera", {}, arguments); };
    CameraPreview.prototype.hide = function () { return cordova(this, "hide", {}, arguments); };
    CameraPreview.prototype.show = function () { return cordova(this, "show", {}, arguments); };
    CameraPreview.prototype.takePicture = function (options) { return cordova(this, "takePicture", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.takeSnapshot = function (options) { return cordova(this, "takeSnapshot", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.setColorEffect = function (effect) { return cordova(this, "setColorEffect", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.setZoom = function (zoom) { return cordova(this, "setZoom", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getMaxZoom = function () { return cordova(this, "getMaxZoom", {}, arguments); };
    CameraPreview.prototype.getZoom = function () { return cordova(this, "getZoom", {}, arguments); };
    CameraPreview.prototype.setPreviewSize = function (dimensions) { return cordova(this, "setPreviewSize", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getFocusMode = function () { return cordova(this, "getFocusMode", {}, arguments); };
    CameraPreview.prototype.setFocusMode = function (focusMode) { return cordova(this, "setFocusMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getSupportedFocusModes = function () { return cordova(this, "getSupportedFocusModes", {}, arguments); };
    CameraPreview.prototype.getFlashMode = function () { return cordova(this, "getFlashMode", {}, arguments); };
    CameraPreview.prototype.setFlashMode = function (flashMode) { return cordova(this, "setFlashMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getSupportedFlashModes = function () { return cordova(this, "getSupportedFlashModes", {}, arguments); };
    CameraPreview.prototype.getSupportedPictureSizes = function () { return cordova(this, "getSupportedPictureSizes", {}, arguments); };
    CameraPreview.prototype.getExposureMode = function () { return cordova(this, "getExposureMode", {}, arguments); };
    CameraPreview.prototype.getExposureModes = function () { return cordova(this, "getExposureModes", {}, arguments); };
    CameraPreview.prototype.setExposureMode = function (lock) { return cordova(this, "setExposureMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getExposureCompensation = function () { return cordova(this, "getExposureCompensation", {}, arguments); };
    CameraPreview.prototype.setExposureCompensation = function (exposureCompensation) { return cordova(this, "setExposureCompensation", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getExposureCompensationRange = function () { return cordova(this, "getExposureCompensationRange", {}, arguments); };
    CameraPreview.prototype.tapToFocus = function (xPoint, yPoint) { return cordova(this, "tapToFocus", {}, arguments); };
    CameraPreview.prototype.onBackButton = function () { return cordova(this, "onBackButton", {}, arguments); };
    CameraPreview.prototype.getHorizontalFOV = function () { return cordova(this, "getHorizontalFOV", {}, arguments); };
    CameraPreview.prototype.getCameraCharacteristics = function () { return cordova(this, "getCameraCharacteristics", {}, arguments); };
    CameraPreview.pluginName = "CameraPreview";
    CameraPreview.plugin = "cordova-plugin-camera-preview";
    CameraPreview.pluginRef = "CameraPreview";
    CameraPreview.repo = "https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview";
    CameraPreview.platforms = ["Android", "iOS"];
    CameraPreview.decorators = [
        { type: Injectable }
    ];
    return CameraPreview;
}(IonicNativePlugin));
export { CameraPreview };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbWVyYS1wcmV2aWV3L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW1KckMsaUNBQWlCOzs7UUFDbEQsZ0JBQVUsR0FBRztZQUNYLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLE1BQU07WUFDWixVQUFVLEVBQUUsWUFBWTtZQUN4QixrQkFBa0IsRUFBRSxvQkFBb0I7WUFDeEMsZ0JBQWdCLEVBQUUsa0JBQWtCO1lBQ3BDLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLFVBQVU7WUFDcEIsS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDO1FBRUYsbUJBQWEsR0FBRztZQUNkLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLE1BQU07WUFDWixVQUFVLEVBQUUsWUFBWTtZQUN4QixNQUFNLEVBQUUsUUFBUTtTQUNqQixDQUFDO1FBRUYsZ0JBQVUsR0FBRztZQUNYLEdBQUcsRUFBRSxLQUFLO1lBQ1YsRUFBRSxFQUFFLElBQUk7WUFDUixJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLEtBQUssRUFBRSxPQUFPO1NBQ2YsQ0FBQztRQUVGLGtCQUFZLEdBQUc7WUFDYixJQUFJLEVBQUUsTUFBTTtZQUNaLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLFVBQVU7WUFDcEIsSUFBSSxFQUFFLE1BQU07WUFDWixTQUFTLEVBQUUsV0FBVztZQUN0QixLQUFLLEVBQUUsT0FBTztZQUNkLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFVBQVUsRUFBRSxZQUFZO1NBQ3pCLENBQUM7UUFFRixzQkFBZ0IsR0FBRztZQUNqQixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxPQUFPO1NBQ2YsQ0FBQzs7O0lBV0YsbUNBQVcsYUFBQyxPQUE2QjtJQWF6Qyx3Q0FBZ0IsYUFBQyxPQUFZO0lBUzdCLGtDQUFVO0lBU1YsdUNBQWU7SUFTZixvQ0FBWTtJQVNaLDRCQUFJO0lBU0osNEJBQUk7SUFhSixtQ0FBVyxhQUFDLE9BQXFDO0lBYWpELG9DQUFZLGFBQUMsT0FBcUM7SUFlbEQsc0NBQWMsYUFBQyxNQUFjO0lBYTdCLCtCQUFPLGFBQUMsSUFBYTtJQVNyQixrQ0FBVTtJQVNWLCtCQUFPO0lBYVAsc0NBQWMsYUFBQyxVQUFvQztJQVNuRCxvQ0FBWTtJQWFaLG9DQUFZLGFBQUMsU0FBa0I7SUFTL0IsOENBQXNCO0lBU3RCLG9DQUFZO0lBYVosb0NBQVksYUFBQyxTQUFrQjtJQVMvQiw4Q0FBc0I7SUFTdEIsZ0RBQXdCO0lBU3hCLHVDQUFlO0lBU2Ysd0NBQWdCO0lBYWhCLHVDQUFlLGFBQUMsSUFBYTtJQVM3QiwrQ0FBdUI7SUFhdkIsK0NBQXVCLGFBQUMsb0JBQTZCO0lBU3JELG9EQUE0QjtJQVc1QixrQ0FBVSxhQUFDLE1BQWMsRUFBRSxNQUFjO0lBU3pDLG9DQUFZO0lBU1osd0NBQWdCO0lBU2hCLGdEQUF3Qjs7Ozs7OztnQkFoWHpCLFVBQVU7O3dCQW5KWDtFQW9KbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFQcmV2aWV3RGltZW5zaW9ucyB7XG4gIC8qKiBUaGUgd2lkdGggb2YgdGhlIGNhbWVyYSBwcmV2aWV3LCBkZWZhdWx0IHRvIHdpbmRvdy5zY3JlZW4ud2lkdGggKi9cbiAgd2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqIFRoZSBoZWlnaHQgb2YgdGhlIGNhbWVyYSBwcmV2aWV3LCBkZWZhdWx0IHRvIHdpbmRvdy5zY3JlZW4uaGVpZ2h0ICovXG4gIGhlaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFQcmV2aWV3T3B0aW9ucyB7XG4gIC8qKiBUaGUgbGVmdCBlZGdlIGluIHBpeGVscywgZGVmYXVsdCAwICovXG4gIHg/OiBudW1iZXI7XG5cbiAgLyoqIFRoZSB0b3AgZWRnZSBpbiBwaXhlbHMsIGRlZmF1bHQgMCAqL1xuICB5PzogbnVtYmVyO1xuXG4gIC8qKiBUaGUgd2lkdGggaW4gcGl4ZWxzLCBkZWZhdWx0IHdpbmRvdy5zY3JlZW4ud2lkdGggKi9cbiAgd2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqIFRoZSBoZWlnaHQgaW4gcGl4ZWxzLCBkZWZhdWx0IHdpbmRvdy5zY3JlZW4uaGVpZ2h0ICovXG4gIGhlaWdodD86IG51bWJlcjtcblxuICAvKiogQ2hvb3NlIHRoZSBjYW1lcmEgdG8gdXNlICdmcm9udCcgb3IgJ3JlYXInLCBkZWZhdWx0ICdmcm9udCcgKi9cbiAgY2FtZXJhPzogc3RyaW5nO1xuXG4gIC8qKiBUYXAgdG8gdGFrZSBhIHBob3RvLCBkZWZhdWx0IHRydWUgKHBpY3R1cmUgcXVhbGl0eSBieSBkZWZhdWx0IDogODUpICovXG4gIHRhcFBob3RvPzogYm9vbGVhbjtcblxuICAvKiogUHJldmlldyBib3ggZHJhZyBhY3Jvc3MgdGhlIHNjcmVlbiwgZGVmYXVsdCAnZmFsc2UnICovXG4gIHByZXZpZXdEcmFnPzogYm9vbGVhbjtcblxuICAvKiogUHJldmlldyBib3ggdG8gdGhlIGJhY2sgb2YgdGhlIHdlYnZpZXcgKHRydWUgPT4gYmFjaywgZmFsc2UgPT4gZnJvbnQpICwgZGVmYXVsdCBmYWxzZSAqL1xuICB0b0JhY2s/OiBib29sZWFuO1xuXG4gIC8qKiBBbHBoYSBjaGFubmVsIG9mIHRoZSBwcmV2aWV3IGJveCwgZmxvYXQsIFswLDFdLCBkZWZhdWx0IDEgKi9cbiAgYWxwaGE/OiBudW1iZXI7XG5cbiAgLyoqIFRhcCB0byBzZXQgc3BlY2lmaWMgZm9jdXMgcG9pbnQuIE5vdGUsIHRoaXMgYXNzdW1lcyB0aGUgY2FtZXJhIGlzIGZ1bGwtc2NyZWVuLiBkZWZhdWx0IGZhbHNlICovXG4gIHRhcEZvY3VzPzogYm9vbGVhbjtcblxuICAvKiogT24gQW5kcm9pZCBkaXNhYmxlIGF1dG9tYXRpYyByb3RhdGlvbiBvZiB0aGUgaW1hZ2UgYW5kIHN0cmlwcGluZyBvZiBFeGl0IGhlYWRlci4gZGVmYXVsdCBmYWxzZSAqL1xuICBkaXNhYmxlRXhpZkhlYWRlclN0cmlwcGluZz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhUHJldmlld1BpY3R1cmVPcHRpb25zIHtcbiAgLyoqIFRoZSB3aWR0aCBpbiBwaXhlbHMsIGRlZmF1bHQgMCAqL1xuICB3aWR0aD86IG51bWJlcjtcbiAgLyoqIFRoZSBoZWlnaHQgaW4gcGl4ZWxzLCBkZWZhdWx0IDAgKi9cbiAgaGVpZ2h0PzogbnVtYmVyO1xuICAvKiogVGhlIHBpY3R1cmUgcXVhbGl0eSwgMCAtIDEwMCwgZGVmYXVsdCA4NSAqL1xuICBxdWFsaXR5PzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBiZXRhXG4gKiBAbmFtZSBDYW1lcmEgUHJldmlld1xuICogQGRlc2NyaXB0aW9uXG4gKiBTaG93aW5nIGNhbWVyYSBwcmV2aWV3IGluIEhUTUxcbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEtcHJldmlldy9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEtcHJldmlldy5naXRgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQ29yZG92YSBDYW1lcmEgUHJldmlldyBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vY29yZG92YS1wbHVnaW4tY2FtZXJhLXByZXZpZXcvY29yZG92YS1wbHVnaW4tY2FtZXJhLXByZXZpZXcpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2FtZXJhUHJldmlldywgQ2FtZXJhUHJldmlld1BpY3R1cmVPcHRpb25zLCBDYW1lcmFQcmV2aWV3T3B0aW9ucywgQ2FtZXJhUHJldmlld0RpbWVuc2lvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbWVyYS1wcmV2aWV3L25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjYW1lcmFQcmV2aWV3OiBDYW1lcmFQcmV2aWV3KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBjYW1lcmEgb3B0aW9ucyAoU2l6ZSBhbmQgbG9jYXRpb24pLiBJbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUsIHRoZSBwcmV2aWV3IHVzZXMgdGhlIHJlYXIgY2FtZXJhIGFuZCBkaXNwbGF5IHRoZSBwcmV2aWV3IGluIHRoZSBiYWNrIG9mIHRoZSB3ZWJ2aWV3XG4gKiBjb25zdCBjYW1lcmFQcmV2aWV3T3B0czogQ2FtZXJhUHJldmlld09wdGlvbnMgPSB7XG4gKiAgIHg6IDAsXG4gKiAgIHk6IDAsXG4gKiAgIHdpZHRoOiB3aW5kb3cuc2NyZWVuLndpZHRoLFxuICogICBoZWlnaHQ6IHdpbmRvdy5zY3JlZW4uaGVpZ2h0LFxuICogICBjYW1lcmE6ICdyZWFyJyxcbiAqICAgdGFwUGhvdG86IHRydWUsXG4gKiAgIHByZXZpZXdEcmFnOiB0cnVlLFxuICogICB0b0JhY2s6IHRydWUsXG4gKiAgIGFscGhhOiAxXG4gKiB9XG4gKlxuICogLy8gc3RhcnQgY2FtZXJhXG4gKiB0aGlzLmNhbWVyYVByZXZpZXcuc3RhcnRDYW1lcmEoY2FtZXJhUHJldmlld09wdHMpLnRoZW4oXG4gKiAgIChyZXMpID0+IHtcbiAqICAgICBjb25zb2xlLmxvZyhyZXMpXG4gKiAgIH0sXG4gKiAgIChlcnIpID0+IHtcbiAqICAgICBjb25zb2xlLmxvZyhlcnIpXG4gKiAgIH0pO1xuICpcbiAqIC8vIFNldCB0aGUgaGFuZGxlciB0byBydW4gZXZlcnkgdGltZSB3ZSB0YWtlIGEgcGljdHVyZVxuICogdGhpcy5jYW1lcmFQcmV2aWV3LnNldE9uUGljdHVyZVRha2VuSGFuZGxlcigpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gKiAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIHRoZSByZXN1bHRcbiAqIH0pO1xuICpcbiAqXG4gKiAvLyBwaWN0dXJlIG9wdGlvbnNcbiAqIGNvbnN0IHBpY3R1cmVPcHRzOiBDYW1lcmFQcmV2aWV3UGljdHVyZU9wdGlvbnMgPSB7XG4gKiAgIHdpZHRoOiAxMjgwLFxuICogICBoZWlnaHQ6IDEyODAsXG4gKiAgIHF1YWxpdHk6IDg1XG4gKiB9XG4gKlxuICogLy8gdGFrZSBhIHBpY3R1cmVcbiAqIHRoaXMuY2FtZXJhUHJldmlldy50YWtlUGljdHVyZSh0aGlzLnBpY3R1cmVPcHRzKS50aGVuKChpbWFnZURhdGEpID0+IHtcbiAqICAgdGhpcy5waWN0dXJlID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsJyArIGltYWdlRGF0YTtcbiAqIH0sIChlcnIpID0+IHtcbiAqICAgY29uc29sZS5sb2coZXJyKTtcbiAqICAgdGhpcy5waWN0dXJlID0gJ2Fzc2V0cy9pbWcvdGVzdC5qcGcnO1xuICogfSk7XG4gKlxuICogLy8gdGFrZSBhIHNuYXAgc2hvdFxuICogdGhpcy5jYW1lcmFQcmV2aWV3LnRha2VTbmFwc2hvdCh0aGlzLnBpY3R1cmVPcHRzKS50aGVuKChpbWFnZURhdGEpID0+IHtcbiAqICAgdGhpcy5waWN0dXJlID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsJyArIGltYWdlRGF0YTtcbiAqIH0sIChlcnIpID0+IHtcbiAqICAgY29uc29sZS5sb2coZXJyKTtcbiAqICAgdGhpcy5waWN0dXJlID0gJ2Fzc2V0cy9pbWcvdGVzdC5qcGcnO1xuICogfSk7XG4gKlxuICpcbiAqIC8vIFN3aXRjaCBjYW1lcmFcbiAqIHRoaXMuY2FtZXJhUHJldmlldy5zd2l0Y2hDYW1lcmEoKTtcbiAqXG4gKiAvLyBzZXQgY29sb3IgZWZmZWN0IHRvIG5lZ2F0aXZlXG4gKiB0aGlzLmNhbWVyYVByZXZpZXcuc2V0Q29sb3JFZmZlY3QoJ25lZ2F0aXZlJyk7XG4gKlxuICogLy8gU3RvcCB0aGUgY2FtZXJhIHByZXZpZXdcbiAqIHRoaXMuY2FtZXJhUHJldmlldy5zdG9wQ2FtZXJhKCk7XG4gKlxuICogYGBgXG4gKlxuICogQGludGVyZmFjZXNcbiAqIENhbWVyYVByZXZpZXdPcHRpb25zXG4gKiBDYW1lcmFQcmV2aWV3UGljdHVyZU9wdGlvbnNcbiAqIENhbWVyYVByZXZpZXdEaW1lbnNpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2FtZXJhUHJldmlldycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNhbWVyYS1wcmV2aWV3JyxcbiAgcGx1Z2luUmVmOiAnQ2FtZXJhUHJldmlldycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY29yZG92YS1wbHVnaW4tY2FtZXJhLXByZXZpZXcvY29yZG92YS1wbHVnaW4tY2FtZXJhLXByZXZpZXcnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FtZXJhUHJldmlldyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgRk9DVVNfTU9ERSA9IHtcbiAgICBGSVhFRDogJ2ZpeGVkJyxcbiAgICBBVVRPOiAnYXV0bycsXG4gICAgQ09OVElOVU9VUzogJ2NvbnRpbnVvdXMnLCAvLyBJT1MgT25seVxuICAgIENPTlRJTlVPVVNfUElDVFVSRTogJ2NvbnRpbnVvdXMtcGljdHVyZScsIC8vIEFuZHJvaWQgT25seVxuICAgIENPTlRJTlVPVVNfVklERU86ICdjb250aW51b3VzLXZpZGVvJywgLy8gQW5kcm9pZCBPbmx5XG4gICAgRURPRjogJ2Vkb2YnLCAvLyBBbmRyb2lkIE9ubHlcbiAgICBJTkZJTklUWTogJ2luZmluaXR5JywgLy8gQW5kcm9pZCBPbmx5XG4gICAgTUFDUk86ICdtYWNybycsIC8vIEFuZHJvaWQgT25seVxuICB9O1xuXG4gIEVYUE9TVVJFX01PREUgPSB7XG4gICAgTE9DSzogJ2xvY2snLCAvLyBJT1MgT25seVxuICAgIEFVVE86ICdhdXRvJywgLy8gSU9TIE9ubHlcbiAgICBDT05USU5VT1VTOiAnY29udGludW91cycsXG4gICAgQ1VTVE9NOiAnY3VzdG9tJyxcbiAgfTtcblxuICBGTEFTSF9NT0RFID0ge1xuICAgIE9GRjogJ29mZicsXG4gICAgT046ICdvbicsXG4gICAgQVVUTzogJ2F1dG8nLFxuICAgIFJFRF9FWUU6ICdyZWQtZXllJyxcbiAgICBUT1JDSDogJ3RvcmNoJywgLy8gQW5kcm9pZCBPbmx5XG4gIH07XG5cbiAgQ09MT1JfRUZGRUNUID0ge1xuICAgIEFRVUE6ICdhcXVhJywgLy8gQW5kcm9pZCBPbmx5XG4gICAgQkxBQ0tCT0FSRDogJ2JsYWNrYm9hcmQnLCAvLyBBbmRyb2lkIE9ubHlcbiAgICBNT05POiAnbW9ubycsXG4gICAgTkVHQVRJVkU6ICduZWdhdGl2ZScsXG4gICAgTk9ORTogJ25vbmUnLFxuICAgIFBPU1RFUklaRTogJ3Bvc3Rlcml6ZScsXG4gICAgU0VQSUE6ICdzZXBpYScsXG4gICAgU09MQVJJWkU6ICdzb2xhcml6ZScsIC8vIEFuZHJvaWQgT25seVxuICAgIFdISVRFQk9BUkQ6ICd3aGl0ZWJvYXJkJywgLy8gQW5kcm9pZCBPbmx5XG4gIH07XG5cbiAgQ0FNRVJBX0RJUkVDVElPTiA9IHtcbiAgICBCQUNLOiAnYmFjaycsXG4gICAgRlJPTlQ6ICdmcm9udCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgY2FtZXJhIHByZXZpZXcgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSB7Q2FtZXJhUHJldmlld09wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyLFxuICB9KVxuICBzdGFydENhbWVyYShvcHRpb25zOiBDYW1lcmFQcmV2aWV3T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgY2FtZXJhIHZpZGVvIGluc3RhbmNlLlxuICAgKiBAcGFyYW0ge2FueX0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHN0YXJ0UmVjb3JkVmlkZW8ob3B0aW9uczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgdGhlIGNhbWVyYSBwcmV2aWV3IGluc3RhbmNlLiAoaU9TICYgQW5kcm9pZClcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wQ2FtZXJhKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHRoZSBjYW1lcmEgdmlkZW8gaW5zdGFuY2UuIChpT1MgJiBBbmRyb2lkKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3BSZWNvcmRWaWRlbygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTd2l0Y2ggZnJvbSB0aGUgcmVhciBjYW1lcmEgYW5kIGZyb250IGNhbWVyYSwgaWYgYXZhaWxhYmxlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN3aXRjaENhbWVyYSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBjYW1lcmEgcHJldmlldyBib3guXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGlkZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBjYW1lcmEgcHJldmlldyBib3guXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvdygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlIHRoZSBwaWN0dXJlIChiYXNlNjQpXG4gICAqIEBwYXJhbSB7Q2FtZXJhUHJldmlld1BpY3R1cmVPcHRpb25zfSBbb3B0aW9uc10gc2l6ZSBhbmQgcXVhbGl0eSBvZiB0aGUgcGljdHVyZSB0byB0YWtlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgdGFrZVBpY3R1cmUob3B0aW9ucz86IENhbWVyYVByZXZpZXdQaWN0dXJlT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2UgYSBzbmFwc2hvdCBvZiBwcmV2aWV3IHdpbmRvdyAoc2l6ZSBzcGVjaWZpZWQgaW4gc3RhcnRDYW1lcmEgb3B0aW9ucylcbiAgICogQHBhcmFtIHtDYW1lcmFQcmV2aWV3UGljdHVyZU9wdGlvbnN9IFtvcHRpb25zXSBxdWFsaXR5IG9mIHRoZSBwaWN0dXJlIHRvIHRha2VcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyLFxuICB9KVxuICB0YWtlU25hcHNob3Qob3B0aW9ucz86IENhbWVyYVByZXZpZXdQaWN0dXJlT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIFNldCBjYW1lcmEgY29sb3IgZWZmZWN0LlxuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlZmZlY3QgbmFtZSA6ICdub25lJyAoaU9TICYgQW5kcm9pZCksICdhcXVhJyAoQW5kcm9pZCksICdibGFja2JvYXJkJyAoQW5kcm9pZCksICdtb25vJyAoaU9TICYgQW5kcm9pZCksICduZWdhdGl2ZScgKGlPUyAmIEFuZHJvaWQpLCAncG9zdGVyaXplJyAoaU9TICYgQW5kcm9pZCksICdzZXBpYScgKGlPUyAmIEFuZHJvaWQpLCAnc29sYXJpemUnIChBbmRyb2lkKSBvciAnd2hpdGVib2FyZCcgKEFuZHJvaWQpXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgc2V0Q29sb3JFZmZlY3QoZWZmZWN0OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHpvb20gKEFuZHJvaWQpXG4gICAqIEBwYXJhbSBbem9vbV0ge251bWJlcn0gWm9vbSB2YWx1ZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHNldFpvb20oem9vbT86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWF4aW11bSB6b29tIChBbmRyb2lkKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldE1heFpvb20oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgem9vbSAoQW5kcm9pZClcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRab29tKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcHJldmlldyBTaXplXG4gICAqIEBwYXJhbSB7Q2FtZXJhUHJldmlld0RpbWVuc2lvbnN9IFtkaW1lbnNpb25zXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHNldFByZXZpZXdTaXplKGRpbWVuc2lvbnM/OiBDYW1lcmFQcmV2aWV3RGltZW5zaW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBmb2N1cyBtb2RlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Rm9jdXNNb2RlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZm9jdXMgbW9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2ZvY3VzTW9kZV0gJ2ZpeGVkJywgJ2F1dG8nLCAnY29udGludW91cy1waWN0dXJlJywgJ2NvbnRpbnVvdXMtdmlkZW8nIChpT1MgJiBBbmRyb2lkKSwgJ2Vkb2YnLCAnaW5maW5pdHknLCAnbWFjcm8nIChBbmRyb2lkIE9ubHkpXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgc2V0Rm9jdXNNb2RlKGZvY3VzTW9kZT86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdXBwb3J0ZWQgZm9jdXMgbW9kZXNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRTdXBwb3J0ZWRGb2N1c01vZGVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBmbGFzaCBtb2RlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Rmxhc2hNb2RlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZmxhc2ggbW9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2ZsYXNoTW9kZV0gJ29mZicgKGlPUyAmIEFuZHJvaWQpLCAnb24nIChpT1MgJiBBbmRyb2lkKSwgJ2F1dG8nIChpT1MgJiBBbmRyb2lkKSwgJ3RvcmNoJyAoQW5kcm9pZClcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyLFxuICB9KVxuICBzZXRGbGFzaE1vZGUoZmxhc2hNb2RlPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN1cHBvcnRlZCBmbGFzaCBtb2Rlc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFN1cHBvcnRlZEZsYXNoTW9kZXMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN1cHBvcnRlZCBwaWN0dXJlIHNpemVzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U3VwcG9ydGVkUGljdHVyZVNpemVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBleHBvc3VyZSBtb2RlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RXhwb3N1cmVNb2RlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBleHBvc3VyZSBtb2Rlc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEV4cG9zdXJlTW9kZXMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV4cG9zdXJlIG1vZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsb2NrXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHNldEV4cG9zdXJlTW9kZShsb2NrPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGV4cG9zdXJlIGNvbXBlbnNhdGlvbiAoQW5kcm9pZClcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRFeHBvc3VyZUNvbXBlbnNhdGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZXhwb3N1cmUgY29tcGVuc2F0aW9uIChBbmRyb2lkKVxuICAgKiBAcGFyYW0ge251bWJlcn0gW2V4cG9zdXJlQ29tcGVuc2F0aW9uXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHNldEV4cG9zdXJlQ29tcGVuc2F0aW9uKGV4cG9zdXJlQ29tcGVuc2F0aW9uPzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGV4cG9zdXJlIGNvbXBlbnNhdGlvbiByYW5nZSAoQW5kcm9pZClcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRFeHBvc3VyZUNvbXBlbnNhdGlvblJhbmdlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzcGVjaWZpYyBmb2N1cyBwb2ludC4gTm90ZSwgdGhpcyBhc3N1bWVzIHRoZSBjYW1lcmEgaXMgZnVsbC1zY3JlZW4uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4UG9pbnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlQb2ludFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHRhcFRvRm9jdXMoeFBvaW50OiBudW1iZXIsIHlQb2ludDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbGlzdGVuZXIgZm9yIHRoZSBiYWNrIGV2ZW50IGZvciB0aGUgcHJldmlld1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IGlmIGJhY2sgYnV0dG9uIHByZXNzZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb25CYWNrQnV0dG9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBpbiB1c2UgZGV2aWNlIGNhbWVyYSBmb3ZcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRIb3Jpem9udGFsRk9WKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY2hhcmFjdGVyaXN0aWNzIG9mIGFsbCBhdmFpbGFibGUgY2FtZXJhc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldENhbWVyYUNoYXJhY3RlcmlzdGljcygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19