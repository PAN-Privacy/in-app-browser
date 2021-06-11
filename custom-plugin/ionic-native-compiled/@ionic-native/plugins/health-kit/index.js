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
var HealthKitOriginal = /** @class */ (function (_super) {
    __extends(HealthKitOriginal, _super);
    function HealthKitOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HealthKitOriginal.prototype.available = function () { return cordova(this, "available", {}, arguments); };
    HealthKitOriginal.prototype.checkAuthStatus = function (options) { return cordova(this, "checkAuthStatus", {}, arguments); };
    HealthKitOriginal.prototype.requestAuthorization = function (options) { return cordova(this, "requestAuthorization", {}, arguments); };
    HealthKitOriginal.prototype.readDateOfBirth = function () { return cordova(this, "readDateOfBirth", {}, arguments); };
    HealthKitOriginal.prototype.readGender = function () { return cordova(this, "readGender", {}, arguments); };
    HealthKitOriginal.prototype.readBloodType = function () { return cordova(this, "readBloodType", {}, arguments); };
    HealthKitOriginal.prototype.readFitzpatrickSkinType = function () { return cordova(this, "readFitzpatrickSkinType", {}, arguments); };
    HealthKitOriginal.prototype.saveWeight = function (options) { return cordova(this, "saveWeight", {}, arguments); };
    HealthKitOriginal.prototype.readWeight = function (options) { return cordova(this, "readWeight", {}, arguments); };
    HealthKitOriginal.prototype.saveHeight = function (options) { return cordova(this, "saveHeight", {}, arguments); };
    HealthKitOriginal.prototype.readHeight = function (options) { return cordova(this, "readHeight", {}, arguments); };
    HealthKitOriginal.prototype.findWorkouts = function () { return cordova(this, "findWorkouts", {}, arguments); };
    HealthKitOriginal.prototype.saveWorkout = function (options) { return cordova(this, "saveWorkout", {}, arguments); };
    HealthKitOriginal.prototype.querySampleType = function (options) { return cordova(this, "querySampleType", {}, arguments); };
    HealthKitOriginal.prototype.querySampleTypeAggregated = function (options) { return cordova(this, "querySampleTypeAggregated", {}, arguments); };
    HealthKitOriginal.prototype.deleteSamples = function (options) { return cordova(this, "deleteSamples", {}, arguments); };
    HealthKitOriginal.prototype.monitorSampleType = function (options) { return cordova(this, "monitorSampleType", {}, arguments); };
    HealthKitOriginal.prototype.sumQuantityType = function (options) { return cordova(this, "sumQuantityType", {}, arguments); };
    HealthKitOriginal.prototype.saveQuantitySample = function (options) { return cordova(this, "saveQuantitySample", {}, arguments); };
    HealthKitOriginal.prototype.saveCorrelation = function (options) { return cordova(this, "saveCorrelation", {}, arguments); };
    HealthKitOriginal.prototype.queryCorrelationType = function (options) { return cordova(this, "queryCorrelationType", {}, arguments); };
    HealthKitOriginal.pluginName = "HealthKit";
    HealthKitOriginal.plugin = "com.telerik.plugins.healthkit";
    HealthKitOriginal.pluginRef = "window.plugins.healthkit";
    HealthKitOriginal.repo = "https://github.com/Telerik-Verified-Plugins/HealthKit";
    HealthKitOriginal.platforms = ["iOS"];
    return HealthKitOriginal;
}(IonicNativePlugin));
var HealthKit = new HealthKitOriginal();
export { HealthKit };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2hlYWx0aC1raXQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBMkd6Qyw2QkFBaUI7Ozs7SUFNOUMsNkJBQVM7SUFVVCxtQ0FBZSxhQUFDLE9BQXlCO0lBVXpDLHdDQUFvQixhQUFDLE9BQXlCO0lBUzlDLG1DQUFlO0lBU2YsOEJBQVU7SUFTVixpQ0FBYTtJQVNiLDJDQUF1QjtJQVV2Qiw4QkFBVSxhQUFDLE9BQXlCO0lBVXBDLDhCQUFVLGFBQUMsT0FBeUI7SUFVcEMsOEJBQVUsYUFBQyxPQUF5QjtJQVVwQyw4QkFBVSxhQUFDLE9BQXlCO0lBU3BDLGdDQUFZO0lBVVosK0JBQVcsYUFBQyxPQUF5QjtJQVVyQyxtQ0FBZSxhQUFDLE9BQXlCO0lBVXpDLDZDQUF5QixhQUFDLE9BQXlCO0lBVW5ELGlDQUFhLGFBQUMsT0FBeUI7SUFVdkMscUNBQWlCLGFBQUMsT0FBeUI7SUFVM0MsbUNBQWUsYUFBQyxPQUF5QjtJQVV6QyxzQ0FBa0IsYUFBQyxPQUF5QjtJQVU1QyxtQ0FBZSxhQUFDLE9BQXlCO0lBVXpDLHdDQUFvQixhQUFDLE9BQXlCOzs7Ozs7b0JBclRoRDtFQTRHK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBIZWFsdGhLaXRPcHRpb25zIHtcbiAgLyoqXG4gICAqIEhLV29ya291dEFjdGl2aXR5VHlwZSBjb25zdGFudFxuICAgKiBSZWFkIG1vcmUgaGVyZTogaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2xpYnJhcnkvaW9zL2RvY3VtZW50YXRpb24vSGVhbHRoS2l0L1JlZmVyZW5jZS9IS1dvcmtvdXRfQ2xhc3MvIy8vYXBwbGVfcmVmL2MvdGRlZi9IS1dvcmtvdXRBY3Rpdml0eVR5cGVcbiAgICovXG4gIGFjdGl2aXR5VHlwZT86IHN0cmluZztcblxuICAvKipcbiAgICogJ2hvdXInLCAnd2VlaycsICd5ZWFyJyBvciAnZGF5JywgZGVmYXVsdCAnZGF5J1xuICAgKi9cbiAgYWdncmVnYXRpb24/OiBzdHJpbmc7XG5cbiAgYW1vdW50PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBzcGVjaWZpZXMgaWYgdGhlIGRhdGEgcmV0dXJuZWQgYnkgcXVlcnlTYW1wbGVUeXBlKCkgc2hvdWxkIGJlIHNvcnRlZCBieVxuICAgKiBlbmQgZGF0ZSBpbiBhc2NlbmRpbmcgb3JkZXIsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICovXG4gIGFzY2VuZGluZz86IGJvb2xlYW47XG5cbiAgY29ycmVsYXRpb25UeXBlPzogc3RyaW5nO1xuXG4gIGRhdGU/OiBhbnk7XG5cbiAgZGlzdGFuY2U/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIHByb2JhYmx5IHVzZWZ1bCB3aXRoIHRoZSBmb3JtZXIgcGFyYW1cbiAgICovXG4gIGRpc3RhbmNlVW5pdD86IHN0cmluZztcblxuICAvKipcbiAgICogaW4gc2Vjb25kcywgb3B0aW9uYWwsIHVzZSBlaXRoZXIgdGhpcyBvciBlbmREYXRlXG4gICAqL1xuICBkdXJhdGlvbj86IG51bWJlcjtcblxuICBlbmREYXRlPzogYW55O1xuXG4gIGVuZXJneT86IG51bWJlcjtcblxuICAvKipcbiAgICogSnxjYWx8a2NhbFxuICAgKi9cbiAgZW5lcmd5VW5pdD86IHN0cmluZztcblxuICBleHRyYURhdGE/OiBhbnk7XG5cbiAgLyoqXG4gICAqIGxpbWl0cyB0aGUgbWF4aW11bSBudW1iZXIgb2YgcmVjb3JkcyByZXR1cm5lZCBieSBxdWVyeVNhbXBsZVR5cGUoKVxuICAgKi9cbiAgbGltaXQ/OiBudW1iZXI7XG5cbiAgbWV0YWRhdGE/OiBhbnk7XG5cbiAgcXVhbnRpdHlUeXBlPzogc3RyaW5nO1xuXG4gIHR5cGU/OiBzdHJpbmc7XG5cbiAgcmVhZFR5cGVzPzogYW55O1xuXG4gIHJlcXVlc3RXcml0ZVBlcm1pc3Npb24/OiBib29sZWFuO1xuXG4gIHNhbXBsZXM/OiBhbnk7XG5cbiAgc2FtcGxlVHlwZT86IHN0cmluZztcblxuICBzdGFydERhdGU/OiBhbnk7XG5cbiAgLyoqXG4gICAqIG18Y218bW18aW58ZnRcbiAgICovXG4gIHVuaXQ/OiBzdHJpbmc7XG5cbiAgcmVxdWVzdFJlYWRQZXJtaXNzaW9uPzogYm9vbGVhbjtcblxuICB3cml0ZVR5cGVzPzogYW55O1xufVxuXG4vKipcbiAqIEBuYW1lIEhlYWx0aCBLaXRcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIEhlYWx0aEtpdCBwbHVnaW4gYWxsb3dzIHlvdSB0byByZWFkIGRhdGEgZnJvbSBhbmQgd3JpdGUgZGF0YSB0byB0aGUgaU9TIDgrIEhlYWx0aEtpdCBmcmFtZXdvcmsuXG4gKiBBbnkgZGF0YSBzYXZlZCBzaG93cyB1cCBpbiB0aGUgaU9TIEhlYWx0aCBhcHAgYW5kIGlzIGF2YWlsYWJsZSBmb3Igb3RoZXIgaU9TIGFwcHMuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBIZWFsdGhLaXQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2hlYWx0aC1raXQvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBoZWFsdGhLaXQ6IEhlYWx0aEtpdCkgeyB9XG4gKlxuICogLi4uXG4gKiBgYGBcbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogSGVhbHRoS2l0T3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0hlYWx0aEtpdCcsXG4gIHBsdWdpbjogJ2NvbS50ZWxlcmlrLnBsdWdpbnMuaGVhbHRoa2l0JyxcbiAgcGx1Z2luUmVmOiAnd2luZG93LnBsdWdpbnMuaGVhbHRoa2l0JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UZWxlcmlrLVZlcmlmaWVkLVBsdWdpbnMvSGVhbHRoS2l0JyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZWFsdGhLaXQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDaGVjayBpZiBIZWFsdGhLaXQgaXMgc3VwcG9ydGVkIChpT1M4Kywgbm90IG9uIGlQYWQpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGF2YWlsYWJsZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXNzIGluIGEgdHlwZSBhbmQgZ2V0IGJhY2sgb24gb2YgdW5kZXRlcm1pbmVkIHwgZGVuaWVkIHwgYXV0aG9yaXplZFxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SGVhbHRoS2l0T3B0aW9uc31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2hlY2tBdXRoU3RhdHVzKG9wdGlvbnM6IEhlYWx0aEtpdE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc2sgc29tZSBvciBhbGwgcGVybWlzc2lvbnMgdXAgZnJvbnRcbiAgICogQHBhcmFtIG9wdGlvbnMge0hlYWx0aEtpdE9wdGlvbnN9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RBdXRob3JpemF0aW9uKG9wdGlvbnM6IEhlYWx0aEtpdE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXR0ZWQgYXMgeXl5eS1NTS1kZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZWFkRGF0ZU9mQmlydGgoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT3V0cHV0ID0gbWFsZXxmZW1hbGV8b3RoZXJ8dW5rbm93blxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZWFkR2VuZGVyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE91dHB1dCA9IEErfEEtfEIrfEItfEFCK3xBQi18Tyt8Ty18dW5rbm93blxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZWFkQmxvb2RUeXBlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE91dHB1dCA9IEl8SUl8SUlJfElWfFZ8Vkl8dW5rbm93blxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZWFkRml0enBhdHJpY2tTa2luVHlwZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXNzIGluIHVuaXQgKGc9Z3JhbSwga2c9a2lsb2dyYW0sIG96PW91bmNlLCBsYj1wb3VuZCwgc3Q9c3RvbmUpIGFuZCBhbW91bnRcbiAgICogQHBhcmFtIG9wdGlvbnMge0hlYWx0aEtpdE9wdGlvbnN9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNhdmVXZWlnaHQob3B0aW9uczogSGVhbHRoS2l0T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhc3MgaW4gdW5pdCAoZz1ncmFtLCBrZz1raWxvZ3JhbSwgb3o9b3VuY2UsIGxiPXBvdW5kLCBzdD1zdG9uZSlcbiAgICogQHBhcmFtIG9wdGlvbnMge0hlYWx0aEtpdE9wdGlvbnN9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlYWRXZWlnaHQob3B0aW9uczogSGVhbHRoS2l0T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhc3MgaW4gdW5pdCAobW09bWlsbGltZXRlciwgY209Y2VudGltZXRlciwgbT1tZXRlciwgaW49aW5jaCwgZnQ9Zm9vdCkgYW5kIGFtb3VudFxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SGVhbHRoS2l0T3B0aW9uc31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2F2ZUhlaWdodChvcHRpb25zOiBIZWFsdGhLaXRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUGFzcyBpbiB1bml0IChtbT1taWxsaW1ldGVyLCBjbT1jZW50aW1ldGVyLCBtPW1ldGVyLCBpbj1pbmNoLCBmdD1mb290KVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SGVhbHRoS2l0T3B0aW9uc31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVhZEhlaWdodChvcHRpb25zOiBIZWFsdGhLaXRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogbm8gcGFyYW1zIHlldCwgc28gdGhpcyB3aWxsIHJldHVybiBhbGwgd29ya291dHMgZXZlciBvZiBhbnkgdHlwZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBmaW5kV29ya291dHMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMge0hlYWx0aEtpdE9wdGlvbnN9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNhdmVXb3Jrb3V0KG9wdGlvbnM6IEhlYWx0aEtpdE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SGVhbHRoS2l0T3B0aW9uc31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcXVlcnlTYW1wbGVUeXBlKG9wdGlvbnM6IEhlYWx0aEtpdE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SGVhbHRoS2l0T3B0aW9uc31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcXVlcnlTYW1wbGVUeXBlQWdncmVnYXRlZChvcHRpb25zOiBIZWFsdGhLaXRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMge0hlYWx0aEtpdE9wdGlvbnN9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRlbGV0ZVNhbXBsZXMob3B0aW9uczogSGVhbHRoS2l0T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zIHtIZWFsdGhLaXRPcHRpb25zfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBtb25pdG9yU2FtcGxlVHlwZShvcHRpb25zOiBIZWFsdGhLaXRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMge0hlYWx0aEtpdE9wdGlvbnN9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN1bVF1YW50aXR5VHlwZShvcHRpb25zOiBIZWFsdGhLaXRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMge0hlYWx0aEtpdE9wdGlvbnN9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNhdmVRdWFudGl0eVNhbXBsZShvcHRpb25zOiBIZWFsdGhLaXRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMge0hlYWx0aEtpdE9wdGlvbnN9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNhdmVDb3JyZWxhdGlvbihvcHRpb25zOiBIZWFsdGhLaXRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMge0hlYWx0aEtpdE9wdGlvbnN9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHF1ZXJ5Q29ycmVsYXRpb25UeXBlKG9wdGlvbnM6IEhlYWx0aEtpdE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19