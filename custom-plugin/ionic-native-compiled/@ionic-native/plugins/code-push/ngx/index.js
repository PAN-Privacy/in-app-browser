import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
/**
 * Defines the possible result statuses of the window.codePush.sync operation.
 */
export var SyncStatus;
(function (SyncStatus) {
    /**
     * The application is up to date.
     */
    SyncStatus[SyncStatus["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    /**
     * An update is available, it has been downloaded, unzipped and copied to the deployment folder.
     * After the completion of the callback invoked with SyncStatus.UPDATE_INSTALLED, the application will be reloaded with the updated code and resources.
     */
    SyncStatus[SyncStatus["UPDATE_INSTALLED"] = 1] = "UPDATE_INSTALLED";
    /**
     * An optional update is available, but the user declined to install it. The update was not downloaded.
     */
    SyncStatus[SyncStatus["UPDATE_IGNORED"] = 2] = "UPDATE_IGNORED";
    /**
     * An error happened during the sync operation. This might be an error while communicating with the server, downloading or unziping the update.
     * The console logs should contain more information about what happened. No update has been applied in this case.
     */
    SyncStatus[SyncStatus["ERROR"] = 3] = "ERROR";
    /**
     * There is an ongoing sync in progress, so this attempt to sync has been aborted.
     */
    SyncStatus[SyncStatus["IN_PROGRESS"] = 4] = "IN_PROGRESS";
    /**
     * Intermediate status - the plugin is about to check for updates.
     */
    SyncStatus[SyncStatus["CHECKING_FOR_UPDATE"] = 5] = "CHECKING_FOR_UPDATE";
    /**
     * Intermediate status - a user dialog is about to be displayed. This status will be reported only if user interaction is enabled.
     */
    SyncStatus[SyncStatus["AWAITING_USER_ACTION"] = 6] = "AWAITING_USER_ACTION";
    /**
     * Intermediate status - the update package is about to be downloaded.
     */
    SyncStatus[SyncStatus["DOWNLOADING_PACKAGE"] = 7] = "DOWNLOADING_PACKAGE";
    /**
     * Intermediate status - the update package is about to be installed.
     */
    SyncStatus[SyncStatus["INSTALLING_UPDATE"] = 8] = "INSTALLING_UPDATE";
})(SyncStatus || (SyncStatus = {}));
/**
 * Defines the available install modes for updates.
 */
export var InstallMode;
(function (InstallMode) {
    /**
     * The update will be applied to the running application immediately. The application will be reloaded with the new content immediately.
     */
    InstallMode[InstallMode["IMMEDIATE"] = 0] = "IMMEDIATE";
    /**
     * The update is downloaded but not installed immediately. The new content will be available the next time the application is started.
     */
    InstallMode[InstallMode["ON_NEXT_RESTART"] = 1] = "ON_NEXT_RESTART";
    /**
     * The udpate is downloaded but not installed immediately. The new content will be available the next time the application is resumed or restarted, whichever event happends first.
     */
    InstallMode[InstallMode["ON_NEXT_RESUME"] = 2] = "ON_NEXT_RESUME";
})(InstallMode || (InstallMode = {}));
var CodePush = /** @class */ (function (_super) {
    __extends(CodePush, _super);
    function CodePush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CodePush.prototype.getCurrentPackage = function () { return cordova(this, "getCurrentPackage", {}, arguments); };
    CodePush.prototype.getPendingPackage = function () { return cordova(this, "getPendingPackage", {}, arguments); };
    CodePush.prototype.checkForUpdate = function (deploymentKey) { return cordova(this, "checkForUpdate", { "callbackOrder": "reverse" }, arguments); };
    CodePush.prototype.notifyApplicationReady = function () { return cordova(this, "notifyApplicationReady", {}, arguments); };
    CodePush.prototype.restartApplication = function () { return cordova(this, "restartApplication", {}, arguments); };
    CodePush.prototype.sync = function (syncOptions, downloadProgress) { return cordova(this, "sync", { "observable": true, "successIndex": 0, "errorIndex": 3 }, arguments); };
    CodePush.pluginName = "CodePush";
    CodePush.plugin = "cordova-plugin-code-push";
    CodePush.pluginRef = "codePush";
    CodePush.repo = "https://github.com/Microsoft/cordova-plugin-code-push";
    CodePush.platforms = ["Android", "iOS"];
    CodePush.decorators = [
        { type: Injectable }
    ];
    return CodePush;
}(IonicNativePlugin));
export { CodePush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NvZGUtcHVzaC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBa1FsQzs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLFVBK0NYO0FBL0NELFdBQVksVUFBVTtJQUNwQjs7T0FFRztJQUNILHVEQUFVLENBQUE7SUFFVjs7O09BR0c7SUFDSCxtRUFBZ0IsQ0FBQTtJQUVoQjs7T0FFRztJQUNILCtEQUFjLENBQUE7SUFFZDs7O09BR0c7SUFDSCw2Q0FBSyxDQUFBO0lBRUw7O09BRUc7SUFDSCx5REFBVyxDQUFBO0lBRVg7O09BRUc7SUFDSCx5RUFBbUIsQ0FBQTtJQUVuQjs7T0FFRztJQUNILDJFQUFvQixDQUFBO0lBRXBCOztPQUVHO0lBQ0gseUVBQW1CLENBQUE7SUFFbkI7O09BRUc7SUFDSCxxRUFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBL0NXLFVBQVUsS0FBVixVQUFVLFFBK0NyQjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksV0FlWDtBQWZELFdBQVksV0FBVztJQUNyQjs7T0FFRztJQUNILHVEQUFTLENBQUE7SUFFVDs7T0FFRztJQUNILG1FQUFlLENBQUE7SUFFZjs7T0FFRztJQUNILGlFQUFjLENBQUE7QUFDaEIsQ0FBQyxFQWZXLFdBQVcsS0FBWCxXQUFXLFFBZXRCOztJQTJJNkIsNEJBQWlCOzs7O0lBTzdDLG9DQUFpQjtJQVVqQixvQ0FBaUI7SUFhakIsaUNBQWMsYUFBQyxhQUFzQjtJQVlyQyx5Q0FBc0I7SUFVdEIscUNBQWtCO0lBNkJsQix1QkFBSSxhQUFDLFdBQXlCLEVBQUUsZ0JBQW9EOzs7Ozs7O2dCQWxGckYsVUFBVTs7bUJBcGRYO0VBcWQ4QixpQkFBaUI7U0FBbEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5uYW1lc3BhY2UgSHR0cCB7XG4gIGV4cG9ydCBjb25zdCBlbnVtIFZlcmIge1xuICAgIEdFVCxcbiAgICBIRUFELFxuICAgIFBPU1QsXG4gICAgUFVULFxuICAgIERFTEVURSxcbiAgICBUUkFDRSxcbiAgICBPUFRJT05TLFxuICAgIENPTk5FQ1QsXG4gICAgUEFUQ0gsXG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlIHtcbiAgICBzdGF0dXNDb2RlOiBudW1iZXI7XG4gICAgYm9keT86IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdGVyIHtcbiAgICByZXF1ZXN0KHZlcmI6IFZlcmIsIHVybDogc3RyaW5nLCBjYWxsYmFjazogQ2FsbGJhY2s8UmVzcG9uc2U+KTogdm9pZDtcbiAgICByZXF1ZXN0KHZlcmI6IFZlcmIsIHVybDogc3RyaW5nLCByZXF1ZXN0Qm9keTogc3RyaW5nLCBjYWxsYmFjazogQ2FsbGJhY2s8UmVzcG9uc2U+KTogdm9pZDtcbiAgfVxufVxuXG4vKipcbiAqIERlZmluZXMgYSBwYWNrYWdlLiBBbGwgZmllbGRzIGFyZSBub24tbnVsbGFibGUsIGV4Y2VwdCB3aGVuIHJldHJpZXZpbmcgdGhlIGN1cnJlbnRseSBydW5uaW5nIHBhY2thZ2Ugb24gdGhlIGZpcnN0IHJ1biBvZiB0aGUgYXBwLFxuICogaW4gd2hpY2ggY2FzZSBvbmx5IHRoZSBhcHBWZXJzaW9uIGlzIGNvbXB1bHNvcnkuXG4gKlxuICogISEgVEhJUyBUWVBFIElTIFJFQUQgRlJPTSBOQVRJVkUgQ09ERSBBUyBXRUxMLiBBTlkgQ0hBTkdFUyBUTyBUSElTIElOVEVSRkFDRSBORUVEUyBUTyBCRSBVUERBVEVEIElOIE5BVElWRSBDT0RFICEhXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVBhY2thZ2Uge1xuICBkZXBsb3ltZW50S2V5OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGFwcFZlcnNpb246IHN0cmluZztcbiAgaXNNYW5kYXRvcnk6IGJvb2xlYW47XG4gIHBhY2thZ2VIYXNoOiBzdHJpbmc7XG4gIHBhY2thZ2VTaXplOiBudW1iZXI7XG4gIGZhaWxlZEluc3RhbGw6IGJvb2xlYW47XG59XG5cbi8qKlxuICogRGVmaW5lcyBhIHJlbW90ZSBwYWNrYWdlLCB3aGljaCByZXByZXNlbnRzIGFuIHVwZGF0ZSBwYWNrYWdlIGF2YWlsYWJsZSBmb3IgZG93bmxvYWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVJlbW90ZVBhY2thZ2UgZXh0ZW5kcyBJUGFja2FnZSB7XG4gIC8qKlxuICAgKiBUaGUgVVJMIGF0IHdoaWNoIHRoZSBwYWNrYWdlIGlzIGF2YWlsYWJsZSBmb3IgZG93bmxvYWQuXG4gICAqL1xuICBkb3dubG9hZFVybDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEb3dubG9hZHMgdGhlIHBhY2thZ2UgdXBkYXRlIGZyb20gdGhlIENvZGVQdXNoIHNlcnZpY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7U3VjY2Vzc0NhbGxiYWNrfSBkb3dubG9hZFN1Y2Nlc3MgQ2FsbGVkIHdpdGggb25lIHBhcmFtZXRlciwgdGhlIGRvd25sb2FkZWQgcGFja2FnZSBpbmZvcm1hdGlvbiwgb25jZSB0aGUgZG93bmxvYWQgY29tcGxldGVkIHN1Y2Nlc3NmdWxseS5cbiAgICogQHBhcmFtIHtFcnJvckNhbGxiYWNrfSBbZG93bmxvYWRFcnJvcl0gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBpbiBjYXNlIG9mIGFuIGVycm9yLlxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFjazxEb3dubG9hZFByb2dyZXNzPn0gW2Rvd25sb2FkUHJvZ3Jlc3NdIE9wdGlvbmFsIGNhbGxiYWNrIGludm9rZWQgZHVyaW5nIHRoZSBkb3dubG9hZCBwcm9jZXNzLiBJdCBpcyBjYWxsZWQgc2V2ZXJhbCB0aW1lcyB3aXRoIG9uZSBEb3dubG9hZFByb2dyZXNzIHBhcmFtZXRlci5cbiAgICovXG4gIGRvd25sb2FkKFxuICAgIGRvd25sb2FkU3VjY2VzczogU3VjY2Vzc0NhbGxiYWNrPElMb2NhbFBhY2thZ2U+LFxuICAgIGRvd25sb2FkRXJyb3I/OiBFcnJvckNhbGxiYWNrLFxuICAgIGRvd25sb2FkUHJvZ3Jlc3M/OiBTdWNjZXNzQ2FsbGJhY2s8RG93bmxvYWRQcm9ncmVzcz5cbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogQWJvcnRzIHRoZSBjdXJyZW50IGRvd25sb2FkIHNlc3Npb24sIHByZXZpb3VzbHkgc3RhcnRlZCB3aXRoIGRvd25sb2FkKCkuXG4gICAqXG4gICAqIEBwYXJhbSB7U3VjY2Vzc0NhbGxiYWNrPHZvaWQ+fSBbYWJvcnRTdWNjZXNzXSBPcHRpb25hbCBjYWxsYmFjayBpbnZva2VkIGlmIHRoZSBhYm9ydCBvcGVyYXRpb24gc3VjY2VlZGVkLlxuICAgKiBAcGFyYW0ge0Vycm9yQ2FsbGJhY2t9IFthYm9ydEVycm9yXSBPcHRpb25hbCBjYWxsYmFjayBpbnZva2VkIGluIGNhc2Ugb2YgYW4gZXJyb3IuXG4gICAqL1xuICBhYm9ydERvd25sb2FkKGFib3J0U3VjY2Vzcz86IFN1Y2Nlc3NDYWxsYmFjazx2b2lkPiwgYWJvcnRFcnJvcj86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xufVxuXG4vKipcbiAqIERlZmluZXMgYSBsb2NhbCBwYWNrYWdlLlxuICpcbiAqICEhIFRISVMgVFlQRSBJUyBSRUFEIEZST00gTkFUSVZFIENPREUgQVMgV0VMTC4gQU5ZIENIQU5HRVMgVE8gVEhJUyBJTlRFUkZBQ0UgTkVFRFMgVE8gQkUgVVBEQVRFRCBJTiBOQVRJVkUgQ09ERSAhIVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElMb2NhbFBhY2thZ2UgZXh0ZW5kcyBJUGFja2FnZSB7XG4gIC8qKlxuICAgKiBUaGUgbG9jYWwgc3RvcmFnZSBwYXRoIHdoZXJlIHRoaXMgcGFja2FnZSBpcyBsb2NhdGVkLlxuICAgKi9cbiAgbG9jYWxQYXRoOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB0aGUgY3VycmVudCBhcHBsaWNhdGlvbiBydW4gaXMgdGhlIGZpcnN0IG9uZSBhZnRlciB0aGUgcGFja2FnZSB3YXMgYXBwbGllZC5cbiAgICovXG4gIGlzRmlyc3RSdW46IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgdGhpcyBwYWNrYWdlIHRvIHRoZSBhcHBsaWNhdGlvbi4gVGhlIGFwcGxpY2F0aW9uIHdpbGwgYmUgcmVsb2FkZWQgd2l0aCB0aGlzIHBhY2thZ2UgYW5kIG9uIGV2ZXJ5IGFwcGxpY2F0aW9uIGxhdW5jaCB0aGlzIHBhY2thZ2Ugd2lsbCBiZSBsb2FkZWQuXG4gICAqIE9uIHRoZSBmaXJzdCBydW4gYWZ0ZXIgdGhlIHVwZGF0ZSwgdGhlIGFwcGxpY2F0aW9uIHdpbGwgd2FpdCBmb3IgYSBjb2RlUHVzaC5ub3RpZnlBcHBsaWNhdGlvblJlYWR5KCkgY2FsbC4gT25jZSB0aGlzIGNhbGwgaXMgbWFkZSwgdGhlIGluc3RhbGwgb3BlcmF0aW9uIGlzIGNvbnNpZGVyZWQgYSBzdWNjZXNzLlxuICAgKiBPdGhlcndpc2UsIHRoZSBpbnN0YWxsIG9wZXJhdGlvbiB3aWxsIGJlIG1hcmtlZCBhcyBmYWlsZWQsIGFuZCB0aGUgYXBwbGljYXRpb24gaXMgcmV2ZXJ0ZWQgdG8gaXRzIHByZXZpb3VzIHZlcnNpb24gb24gdGhlIG5leHQgcnVuLlxuICAgKlxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFjazxJbnN0YWxsTW9kZT59IGluc3RhbGxTdWNjZXNzIENhbGxiYWNrIGludm9rZWQgaWYgdGhlIGluc3RhbGwgb3BlcmF0aW9uIHN1Y2NlZWRlZC5cbiAgICogQHBhcmFtIHtFcnJvckNhbGxiYWNrfSBbaW5zdGFsbEVycm9yXSBPcHRpb25hbCBjYWxsYmFjayBpbnZva2VkIGluIGNhc2Ugb2YgYW4gZXJyb3IuXG4gICAqIEBwYXJhbSB7SW5zdGFsbE9wdGlvbnN9IFtpbnN0YWxsT3B0aW9uc10gT3B0aW9uYWwgcGFyYW1ldGVyIHVzZWQgZm9yIGN1c3RvbWl6aW5nIHRoZSBpbnN0YWxsYXRpb24gYmVoYXZpb3IuXG4gICAqL1xuICBpbnN0YWxsKFxuICAgIGluc3RhbGxTdWNjZXNzOiBTdWNjZXNzQ2FsbGJhY2s8SW5zdGFsbE1vZGU+LFxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrLFxuICAgIGluc3RhbGxPcHRpb25zPzogSW5zdGFsbE9wdGlvbnNcbiAgKTogdm9pZDtcbn1cblxuLyoqXG4gKiBEZWNvbXBvc2VkIHN0YXRpYyBzaWRlIG9mIFJlbW90ZVBhY2thZ2UuXG4gKiBGb3IgQ2xhc3MgRGVjb21wb3NpdGlvbiBndWlkZWxpbmVzIHNlZSBodHRwOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy9IYW5kYm9vayN3cml0aW5nLWR0cy1maWxlcy1ndWlkZWxpbmVzLWFuZC1zcGVjaWZpY3NcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW50ZXJmYWNlIFJlbW90ZVBhY2thZ2VfU3RhdGljIHtcbiAgbmV3ICgpOiBJUmVtb3RlUGFja2FnZTtcbn1cblxuLyogdHNsaW50OmVuYWJsZSAqL1xuXG4vKipcbiAqIERlY29tcG9zZWQgc3RhdGljIHNpZGUgb2YgTG9jYWxQYWNrYWdlLlxuICogRm9yIENsYXNzIERlY29tcG9zaXRpb24gZ3VpZGVsaW5lcyBzZWUgaHR0cDovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvSGFuZGJvb2sjd3JpdGluZy1kdHMtZmlsZXMtZ3VpZGVsaW5lcy1hbmQtc3BlY2lmaWNzXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cbmludGVyZmFjZSBMb2NhbFBhY2thZ2VfU3RhdGljIHtcbiAgbmV3ICgpOiBJTG9jYWxQYWNrYWdlO1xufVxuXG4vKiB0c2xpbnQ6ZW5hYmxlICovXG5cbmRlY2xhcmUgY29uc3QgUmVtb3RlUGFja2FnZTogUmVtb3RlUGFja2FnZV9TdGF0aWM7XG5kZWNsYXJlIGNvbnN0IExvY2FsUGFja2FnZTogTG9jYWxQYWNrYWdlX1N0YXRpYztcblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBKU09OIGZvcm1hdCBvZiB0aGUgY3VycmVudCBwYWNrYWdlIGluZm9ybWF0aW9uIGZpbGUuXG4gKiBUaGlzIGZpbGUgaXMgc3RvcmVkIGluIHRoZSBsb2NhbCBzdG9yYWdlIG9mIHRoZSBkZXZpY2UgYW5kIHBlcnNpc3RzIGJldHdlZW4gc3RvcmUgdXBkYXRlcyBhbmQgY29kZS1wdXNoIHVwZGF0ZXMuXG4gKlxuICogISEgVEhJUyBGSUxFIElTIFJFQUQgRlJPTSBOQVRJVkUgQ09ERSBBUyBXRUxMLiBBTlkgQ0hBTkdFUyBUTyBUSElTIElOVEVSRkFDRSBORUVEUyBUTyBCRSBVUERBVEVEIElOIE5BVElWRSBDT0RFICEhXG4gKi9cbmludGVyZmFjZSBJUGFja2FnZUluZm9NZXRhZGF0YSBleHRlbmRzIElMb2NhbFBhY2thZ2Uge1xuICBuYXRpdmVCdWlsZFRpbWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIE5hdGl2ZVVwZGF0ZU5vdGlmaWNhdGlvbiB7XG4gIHVwZGF0ZUFwcFZlcnNpb246IGJvb2xlYW47IC8vIEFsd2F5cyB0cnVlXG4gIGFwcFZlcnNpb246IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgQ2FsbGJhY2s8VD4gPSAoZXJyb3I6IEVycm9yLCBwYXJhbWV0ZXI6IFQpID0+IHZvaWQ7XG5leHBvcnQgdHlwZSBTdWNjZXNzQ2FsbGJhY2s8VD4gPSAocmVzdWx0PzogVCkgPT4gdm9pZDtcbmV4cG9ydCB0eXBlIEVycm9yQ2FsbGJhY2sgPSAoZXJyb3I/OiBFcnJvcikgPT4gdm9pZDtcblxuaW50ZXJmYWNlIENvbmZpZ3VyYXRpb24ge1xuICBhcHBWZXJzaW9uOiBzdHJpbmc7XG4gIGNsaWVudFVuaXF1ZUlkOiBzdHJpbmc7XG4gIGRlcGxveW1lbnRLZXk6IHN0cmluZztcbiAgc2VydmVyVXJsOiBzdHJpbmc7XG4gIGlnbm9yZUFwcFZlcnNpb24/OiBib29sZWFuO1xufVxuXG5kZWNsYXJlIGNsYXNzIEFjcXVpc2l0aW9uU3RhdHVzIHtcbiAgc3RhdGljIERlcGxveW1lbnRTdWNjZWVkZWQ6IHN0cmluZztcbiAgc3RhdGljIERlcGxveW1lbnRGYWlsZWQ6IHN0cmluZztcbn1cblxuZGVjbGFyZSBjbGFzcyBBY3F1aXNpdGlvbk1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcihodHRwUmVxdWVzdGVyOiBIdHRwLlJlcXVlc3RlciwgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbik7XG4gIHF1ZXJ5VXBkYXRlV2l0aEN1cnJlbnRQYWNrYWdlKFxuICAgIGN1cnJlbnRQYWNrYWdlOiBJUGFja2FnZSxcbiAgICBjYWxsYmFjaz86IENhbGxiYWNrPElSZW1vdGVQYWNrYWdlIHwgTmF0aXZlVXBkYXRlTm90aWZpY2F0aW9uPlxuICApOiB2b2lkO1xuICByZXBvcnRTdGF0dXNEZXBsb3koXG4gICAgcGtnPzogSVBhY2thZ2UsXG4gICAgc3RhdHVzPzogc3RyaW5nLFxuICAgIHByZXZpb3VzTGFiZWxPckFwcFZlcnNpb24/OiBzdHJpbmcsXG4gICAgcHJldmlvdXNEZXBsb3ltZW50S2V5Pzogc3RyaW5nLFxuICAgIGNhbGxiYWNrPzogQ2FsbGJhY2s8dm9pZD5cbiAgKTogdm9pZDtcbiAgcmVwb3J0U3RhdHVzRG93bmxvYWQocGtnOiBJUGFja2FnZSwgY2FsbGJhY2s/OiBDYWxsYmFjazx2b2lkPik6IHZvaWQ7XG59XG5cbmludGVyZmFjZSBDb2RlUHVzaENvcmRvdmFQbHVnaW4ge1xuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHBhY2thZ2UgaW5mb3JtYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBwYWNrYWdlU3VjY2VzcyBDYWxsYmFjayBpbnZva2VkIHdpdGggdGhlIGN1cnJlbnRseSBkZXBsb3llZCBwYWNrYWdlIGluZm9ybWF0aW9uLlxuICAgKiBAcGFyYW0gcGFja2FnZUVycm9yIE9wdGlvbmFsIGNhbGxiYWNrIGludm9rZWQgaW4gY2FzZSBvZiBhbiBlcnJvci5cbiAgICovXG4gIGdldEN1cnJlbnRQYWNrYWdlKHBhY2thZ2VTdWNjZXNzOiBTdWNjZXNzQ2FsbGJhY2s8SUxvY2FsUGFja2FnZT4sIHBhY2thZ2VFcnJvcj86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBwZW5kaW5nIHBhY2thZ2UgaW5mb3JtYXRpb24sIGlmIGFueS4gQSBwZW5kaW5nIHBhY2thZ2UgaXMgb25lIHRoYXQgaGFzIGJlZW4gaW5zdGFsbGVkIGJ1dCB0aGUgYXBwbGljYXRpb24gc3RpbGwgcnVucyB0aGUgb2xkIGNvZGUuXG4gICAqIFRoaXMgaGFwcGVucyBvbmx5IGFmdGVyIGEgcGFja2FnZSBoYXMgYmVlbiBpbnN0YWxsZWQgdXNpbmcgT05fTkVYVF9SRVNUQVJUIG9yIE9OX05FWFRfUkVTVU1FIG1vZGUsIGJ1dCB0aGUgYXBwbGljYXRpb24gd2FzIG5vdCByZXN0YXJ0ZWQvcmVzdW1lZCB5ZXQuXG4gICAqL1xuICBnZXRQZW5kaW5nUGFja2FnZShwYWNrYWdlU3VjY2VzczogU3VjY2Vzc0NhbGxiYWNrPElMb2NhbFBhY2thZ2U+LCBwYWNrYWdlRXJyb3I/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcblxuICAvKipcbiAgICogQ2hlY2tzIHdpdGggdGhlIENvZGVQdXNoIHNlcnZlciBpZiBhbiB1cGRhdGUgcGFja2FnZSBpcyBhdmFpbGFibGUgZm9yIGRvd25sb2FkLlxuICAgKlxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFjazxJUmVtb3RlUGFja2FnZT59IHF1ZXJ5U3VjY2VzcyBDYWxsYmFjayBpbnZva2VkIGluIGNhc2Ugb2YgYSBzdWNjZXNzZnVsIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlci5cbiAgICogICAgICAgICAgICAgICAgICAgICBUaGUgY2FsbGJhY2sgdGFrZXMgb25lIFJlbW90ZVBhY2thZ2UgcGFyYW1ldGVyLiBBIG5vbi1udWxsIHBhY2thZ2UgaXMgYSB2YWxpZCB1cGRhdGUuXG4gICAqICAgICAgICAgICAgICAgICAgICAgQSBudWxsIHBhY2thZ2UgbWVhbnMgdGhlIGFwcGxpY2F0aW9uIGlzIHVwIHRvIGRhdGUgZm9yIHRoZSBjdXJyZW50IG5hdGl2ZSBhcHBsaWNhdGlvbiB2ZXJzaW9uLlxuICAgKiBAcGFyYW0ge0Vycm9yQ2FsbGJhY2t9IFtxdWVyeUVycm9yXSBPcHRpb25hbCBjYWxsYmFjayBpbnZva2VkIGluIGNhc2Ugb2YgYW4gZXJyb3IuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZGVwbG95bWVudEtleV0gT3B0aW9uYWwgZGVwbG95bWVudCBrZXkgdGhhdCBvdmVycmlkZXMgdGhlIGNvbmZpZy54bWwgc2V0dGluZy5cbiAgICovXG4gIGNoZWNrRm9yVXBkYXRlKFxuICAgIHF1ZXJ5U3VjY2VzczogU3VjY2Vzc0NhbGxiYWNrPElSZW1vdGVQYWNrYWdlPixcbiAgICBxdWVyeUVycm9yPzogRXJyb3JDYWxsYmFjayxcbiAgICBkZXBsb3ltZW50S2V5Pzogc3RyaW5nXG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIE5vdGlmaWVzIHRoZSBwbHVnaW4gdGhhdCB0aGUgdXBkYXRlIG9wZXJhdGlvbiBzdWNjZWVkZWQgYW5kIHRoYXQgdGhlIGFwcGxpY2F0aW9uIGlzIHJlYWR5LlxuICAgKiBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gaXMgcmVxdWlyZWQgb24gdGhlIGZpcnN0IHJ1biBhZnRlciBhbiB1cGRhdGUuIE9uIGV2ZXJ5IHN1YnNlcXVlbnQgYXBwbGljYXRpb24gcnVuLCBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gaXMgYSBub29wLlxuICAgKiBJZiB1c2luZyBzeW5jIEFQSSwgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIGlzIG5vdCByZXF1aXJlZCBzaW5jZSBzeW5jIGNhbGxzIGl0IGludGVybmFsbHkuXG4gICAqXG4gICAqIEBwYXJhbSB7U3VjY2Vzc0NhbGxiYWNrPHZvaWQ+fSBbbm90aWZ5U3VjY2VlZGVkXSBPcHRpb25hbCBjYWxsYmFjayBpbnZva2VkIGlmIHRoZSBwbHVnaW4gd2FzIHN1Y2Nlc3NmdWxseSBub3RpZmllZC5cbiAgICogQHBhcmFtIHtFcnJvckNhbGxiYWNrfSBbbm90aWZ5RmFpbGVkXSBPcHRpb25hbCBjYWxsYmFjayBpbnZva2VkIGluIGNhc2Ugb2YgYW4gZXJyb3IgZHVyaW5nIG5vdGlmeWluZyB0aGUgcGx1Z2luLlxuICAgKi9cbiAgbm90aWZ5QXBwbGljYXRpb25SZWFkeShub3RpZnlTdWNjZWVkZWQ/OiBTdWNjZXNzQ2FsbGJhY2s8dm9pZD4sIG5vdGlmeUZhaWxlZD86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZWxvYWRzIHRoZSBhcHBsaWNhdGlvbi4gSWYgdGhlcmUgaXMgYSBwZW5kaW5nIHVwZGF0ZSBwYWNrYWdlIGluc3RhbGxlZCB1c2luZyBPTl9ORVhUX1JFU1RBUlQgb3IgT05fTkVYVF9SRVNVTUUgbW9kZXMsIHRoZSB1cGRhdGVcbiAgICogd2lsbCBiZSBpbW1lZGlhdGVseSB2aXNpYmxlIHRvIHRoZSB1c2VyLiBPdGhlcndpc2UsIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiB3aWxsIHNpbXBseSByZWxvYWQgdGhlIGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgYXBwbGljYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7U3VjY2Vzc0NhbGxiYWNrPHZvaWQ+fSBpbnN0YWxsU3VjY2Vzc1xuICAgKiBAcGFyYW0ge0Vycm9yQ2FsbGJhY2t9IFtlcnJvckNhbGxiYWNrXVxuICAgKi9cbiAgcmVzdGFydEFwcGxpY2F0aW9uKGluc3RhbGxTdWNjZXNzOiBTdWNjZXNzQ2FsbGJhY2s8dm9pZD4sIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBpbnN0YWxsaW5nIHVwZGF0ZXMgaW4gb25lIG1ldGhvZCBjYWxsLlxuICAgKiBUaGlzIG1ldGhvZCBpcyBwcm92aWRlZCBmb3Igc2ltcGxpY2l0eSwgYW5kIGl0cyBiZWhhdmlvciBjYW4gYmUgcmVwbGljYXRlZCBieSB1c2luZyB3aW5kb3cuY29kZVB1c2guY2hlY2tGb3JVcGRhdGUoKSwgUmVtb3RlUGFja2FnZSdzIGRvd25sb2FkKCkgYW5kIExvY2FsUGFja2FnZSdzIGluc3RhbGwoKSBtZXRob2RzLlxuICAgKlxuICAgKiBUaGUgYWxnb3JpdGhtIG9mIHRoaXMgbWV0aG9kIGlzIHRoZSBmb2xsb3dpbmc6XG4gICAqIC0gQ2hlY2tzIGZvciBhbiB1cGRhdGUgb24gdGhlIENvZGVQdXNoIHNlcnZlci5cbiAgICogLSBJZiBhbiB1cGRhdGUgaXMgYXZhaWxhYmxlXG4gICAqICAgICAgICAgLSBJZiB0aGUgdXBkYXRlIGlzIG1hbmRhdG9yeSBhbmQgdGhlIGFsZXJ0TWVzc2FnZSBpcyBzZXQgaW4gb3B0aW9ucywgdGhlIHVzZXIgd2lsbCBiZSBpbmZvcm1lZCB0aGF0IHRoZSBhcHBsaWNhdGlvbiB3aWxsIGJlIHVwZGF0ZWQgdG8gdGhlIGxhdGVzdCB2ZXJzaW9uLlxuICAgKiAgICAgICAgICAgVGhlIHVwZGF0ZSBwYWNrYWdlIHdpbGwgdGhlbiBiZSBkb3dubG9hZGVkIGFuZCBhcHBsaWVkLlxuICAgKiAgICAgICAgIC0gSWYgdGhlIHVwZGF0ZSBpcyBub3QgbWFuZGF0b3J5IGFuZCB0aGUgY29uZmlybU1lc3NhZ2UgaXMgc2V0IGluIG9wdGlvbnMsIHRoZSB1c2VyIHdpbGwgYmUgYXNrZWQgaWYgdGhleSB3YW50IHRvIHVwZGF0ZSB0byB0aGUgbGF0ZXN0IHZlcnNpb24uXG4gICAqICAgICAgICAgICBJZiB0aGV5IGRlY2xpbmUsIHRoZSBzeW5jQ2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIHdpdGggU3luY1N0YXR1cy5VUERBVEVfSUdOT1JFRC5cbiAgICogICAgICAgICAtIE90aGVyd2lzZSwgdGhlIHVwZGF0ZSBwYWNrYWdlIHdpbGwgYmUgZG93bmxvYWRlZCBhbmQgYXBwbGllZCB3aXRoIG5vIHVzZXIgaW50ZXJhY3Rpb24uXG4gICAqIC0gSWYgbm8gdXBkYXRlIGlzIGF2YWlsYWJsZSBvbiB0aGUgc2VydmVyLCBvciBpZiBhIHByZXZpb3VzbHkgcm9sbGVkIGJhY2sgdXBkYXRlIGlzIGF2YWlsYWJsZSBhbmQgdGhlIGlnbm9yZUZhaWxlZFVwZGF0ZXMgaXMgc2V0IHRvIHRydWUsIHRoZSBzeW5jQ2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIHdpdGggdGhlIFN5bmNTdGF0dXMuVVBfVE9fREFURS5cbiAgICogLSBJZiBhbiBlcnJvciBvY2N1cnMgZHVyaW5nIGNoZWNraW5nIGZvciB1cGRhdGUsIGRvd25sb2FkaW5nIG9yIGluc3RhbGxpbmcgaXQsIHRoZSBzeW5jQ2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIHdpdGggdGhlIFN5bmNTdGF0dXMuRVJST1IuXG4gICAqXG4gICAqIEBwYXJhbSB7U3VjY2Vzc0NhbGxiYWNrPFN5bmNTdGF0dXM+fSBbc3luY0NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2l0aCB0aGUgc3RhdHVzIG9mIHRoZSBzeW5jIG9wZXJhdGlvbi5cbiAgICogICAgICAgICAgICAgICAgICAgICBUaGUgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgb25seSBvbmNlLCBhbmQgdGhlIHBvc3NpYmxlIHN0YXR1c2VzIGFyZSBkZWZpbmVkIGJ5IHRoZSBTeW5jU3RhdHVzIGVudW0uXG4gICAqIEBwYXJhbSB7U3luY09wdGlvbnN9IFtzeW5jT3B0aW9uc10gT3B0aW9uYWwgU3luY09wdGlvbnMgcGFyYW1ldGVyIGNvbmZpZ3VyaW5nIHRoZSBiZWhhdmlvciBvZiB0aGUgc3luYyBvcGVyYXRpb24uXG4gICAqIEBwYXJhbSB7U3VjY2Vzc0NhbGxiYWNrPERvd25sb2FkUHJvZ3Jlc3M+fSBbZG93bmxvYWRQcm9ncmVzc10gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBkdXJpbmcgdGhlIGRvd25sb2FkIHByb2Nlc3MuIEl0IGlzIGNhbGxlZCBzZXZlcmFsIHRpbWVzIHdpdGggb25lIERvd25sb2FkUHJvZ3Jlc3MgcGFyYW1ldGVyLlxuICAgKlxuICAgKi9cbiAgc3luYyhcbiAgICBzeW5jQ2FsbGJhY2s/OiBTdWNjZXNzQ2FsbGJhY2s8U3luY1N0YXR1cz4sXG4gICAgc3luY09wdGlvbnM/OiBTeW5jT3B0aW9ucyxcbiAgICBkb3dubG9hZFByb2dyZXNzPzogU3VjY2Vzc0NhbGxiYWNrPERvd25sb2FkUHJvZ3Jlc3M+XG4gICk6IHZvaWQ7XG59XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgcG9zc2libGUgcmVzdWx0IHN0YXR1c2VzIG9mIHRoZSB3aW5kb3cuY29kZVB1c2guc3luYyBvcGVyYXRpb24uXG4gKi9cbmV4cG9ydCBlbnVtIFN5bmNTdGF0dXMge1xuICAvKipcbiAgICogVGhlIGFwcGxpY2F0aW9uIGlzIHVwIHRvIGRhdGUuXG4gICAqL1xuICBVUF9UT19EQVRFLFxuXG4gIC8qKlxuICAgKiBBbiB1cGRhdGUgaXMgYXZhaWxhYmxlLCBpdCBoYXMgYmVlbiBkb3dubG9hZGVkLCB1bnppcHBlZCBhbmQgY29waWVkIHRvIHRoZSBkZXBsb3ltZW50IGZvbGRlci5cbiAgICogQWZ0ZXIgdGhlIGNvbXBsZXRpb24gb2YgdGhlIGNhbGxiYWNrIGludm9rZWQgd2l0aCBTeW5jU3RhdHVzLlVQREFURV9JTlNUQUxMRUQsIHRoZSBhcHBsaWNhdGlvbiB3aWxsIGJlIHJlbG9hZGVkIHdpdGggdGhlIHVwZGF0ZWQgY29kZSBhbmQgcmVzb3VyY2VzLlxuICAgKi9cbiAgVVBEQVRFX0lOU1RBTExFRCxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgdXBkYXRlIGlzIGF2YWlsYWJsZSwgYnV0IHRoZSB1c2VyIGRlY2xpbmVkIHRvIGluc3RhbGwgaXQuIFRoZSB1cGRhdGUgd2FzIG5vdCBkb3dubG9hZGVkLlxuICAgKi9cbiAgVVBEQVRFX0lHTk9SRUQsXG5cbiAgLyoqXG4gICAqIEFuIGVycm9yIGhhcHBlbmVkIGR1cmluZyB0aGUgc3luYyBvcGVyYXRpb24uIFRoaXMgbWlnaHQgYmUgYW4gZXJyb3Igd2hpbGUgY29tbXVuaWNhdGluZyB3aXRoIHRoZSBzZXJ2ZXIsIGRvd25sb2FkaW5nIG9yIHVuemlwaW5nIHRoZSB1cGRhdGUuXG4gICAqIFRoZSBjb25zb2xlIGxvZ3Mgc2hvdWxkIGNvbnRhaW4gbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGhhcHBlbmVkLiBObyB1cGRhdGUgaGFzIGJlZW4gYXBwbGllZCBpbiB0aGlzIGNhc2UuXG4gICAqL1xuICBFUlJPUixcblxuICAvKipcbiAgICogVGhlcmUgaXMgYW4gb25nb2luZyBzeW5jIGluIHByb2dyZXNzLCBzbyB0aGlzIGF0dGVtcHQgdG8gc3luYyBoYXMgYmVlbiBhYm9ydGVkLlxuICAgKi9cbiAgSU5fUFJPR1JFU1MsXG5cbiAgLyoqXG4gICAqIEludGVybWVkaWF0ZSBzdGF0dXMgLSB0aGUgcGx1Z2luIGlzIGFib3V0IHRvIGNoZWNrIGZvciB1cGRhdGVzLlxuICAgKi9cbiAgQ0hFQ0tJTkdfRk9SX1VQREFURSxcblxuICAvKipcbiAgICogSW50ZXJtZWRpYXRlIHN0YXR1cyAtIGEgdXNlciBkaWFsb2cgaXMgYWJvdXQgdG8gYmUgZGlzcGxheWVkLiBUaGlzIHN0YXR1cyB3aWxsIGJlIHJlcG9ydGVkIG9ubHkgaWYgdXNlciBpbnRlcmFjdGlvbiBpcyBlbmFibGVkLlxuICAgKi9cbiAgQVdBSVRJTkdfVVNFUl9BQ1RJT04sXG5cbiAgLyoqXG4gICAqIEludGVybWVkaWF0ZSBzdGF0dXMgLSB0aGUgdXBkYXRlIHBhY2thZ2UgaXMgYWJvdXQgdG8gYmUgZG93bmxvYWRlZC5cbiAgICovXG4gIERPV05MT0FESU5HX1BBQ0tBR0UsXG5cbiAgLyoqXG4gICAqIEludGVybWVkaWF0ZSBzdGF0dXMgLSB0aGUgdXBkYXRlIHBhY2thZ2UgaXMgYWJvdXQgdG8gYmUgaW5zdGFsbGVkLlxuICAgKi9cbiAgSU5TVEFMTElOR19VUERBVEUsXG59XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgYXZhaWxhYmxlIGluc3RhbGwgbW9kZXMgZm9yIHVwZGF0ZXMuXG4gKi9cbmV4cG9ydCBlbnVtIEluc3RhbGxNb2RlIHtcbiAgLyoqXG4gICAqIFRoZSB1cGRhdGUgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBydW5uaW5nIGFwcGxpY2F0aW9uIGltbWVkaWF0ZWx5LiBUaGUgYXBwbGljYXRpb24gd2lsbCBiZSByZWxvYWRlZCB3aXRoIHRoZSBuZXcgY29udGVudCBpbW1lZGlhdGVseS5cbiAgICovXG4gIElNTUVESUFURSxcblxuICAvKipcbiAgICogVGhlIHVwZGF0ZSBpcyBkb3dubG9hZGVkIGJ1dCBub3QgaW5zdGFsbGVkIGltbWVkaWF0ZWx5LiBUaGUgbmV3IGNvbnRlbnQgd2lsbCBiZSBhdmFpbGFibGUgdGhlIG5leHQgdGltZSB0aGUgYXBwbGljYXRpb24gaXMgc3RhcnRlZC5cbiAgICovXG4gIE9OX05FWFRfUkVTVEFSVCxcblxuICAvKipcbiAgICogVGhlIHVkcGF0ZSBpcyBkb3dubG9hZGVkIGJ1dCBub3QgaW5zdGFsbGVkIGltbWVkaWF0ZWx5LiBUaGUgbmV3IGNvbnRlbnQgd2lsbCBiZSBhdmFpbGFibGUgdGhlIG5leHQgdGltZSB0aGUgYXBwbGljYXRpb24gaXMgcmVzdW1lZCBvciByZXN0YXJ0ZWQsIHdoaWNoZXZlciBldmVudCBoYXBwZW5kcyBmaXJzdC5cbiAgICovXG4gIE9OX05FWFRfUkVTVU1FLFxufVxuXG4vKipcbiAqIERlZmluZXMgdGhlIGluc3RhbGwgb3BlcmF0aW9uIG9wdGlvbnMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFsbE9wdGlvbnMge1xuICAvKipcbiAgICogVXNlZCB0byBzcGVjaWZ5IHRoZSBJbnN0YWxsTW9kZSB1c2VkIGZvciB0aGUgaW5zdGFsbCBvcGVyYXRpb24uIFRoaXMgaXMgb3B0aW9uYWwgYW5kIGRlZmF1bHRzIHRvIEluc3RhbGxNb2RlLk9OX05FWFRfUkVTVEFSVC5cbiAgICovXG4gIGluc3RhbGxNb2RlPzogSW5zdGFsbE1vZGU7XG5cbiAgLyoqXG4gICAqIElmIGluc3RhbGxNb2RlID09PSBPTl9ORVhUX1JFU1VNRSwgdGhlIG1pbmltdW0gYW1vdW50IG9mIHRpbWUgKGluIHNlY29uZHMpIHdoaWNoIG5lZWRzIHRvIHBhc3Mgd2l0aCB0aGUgYXBwIGluIHRoZSBiYWNrZ3JvdW5kIGJlZm9yZSBhbiB1cGRhdGUgaW5zdGFsbCBvY2N1cnMgd2hlbiB0aGUgYXBwIGlzIHJlc3VtZWQuXG4gICAqL1xuICBtaW5pbXVtQmFja2dyb3VuZER1cmF0aW9uPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBVc2VkIHRvIHNwZWNpZnkgdGhlIEluc3RhbGxNb2RlIHVzZWQgZm9yIHRoZSBpbnN0YWxsIG9wZXJhdGlvbiBpZiB0aGUgdXBkYXRlIGlzIG1hbmRhdG9yeS4gVGhpcyBpcyBvcHRpb25hbCBhbmQgZGVmYXVsdHMgdG8gSW5zdGFsbE1vZGUuSU1NRURJQVRFLlxuICAgKi9cbiAgbWFuZGF0b3J5SW5zdGFsbE1vZGU/OiBJbnN0YWxsTW9kZTtcbn1cblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBzeW5jIG9wZXJhdGlvbiBvcHRpb25zLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN5bmNPcHRpb25zIGV4dGVuZHMgSW5zdGFsbE9wdGlvbnMge1xuICAvKipcbiAgICogT3B0aW9uYWwgYm9vbGVhbiBmbGFnLiBJZiBzZXQsIHByZXZpb3VzIHVwZGF0ZXMgd2hpY2ggd2VyZSByb2xsZWQgYmFjayB3aWxsIGJlIGlnbm9yZWQuIERlZmF1bHRzIHRvIHRydWUuXG4gICAqL1xuICBpZ25vcmVGYWlsZWRVcGRhdGVzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVXNlZCB0byBlbmFibGUsIGRpc2FibGUgb3IgY3VzdG9taXplIHRoZSB1c2VyIGludGVyYWN0aW9uIGR1cmluZyBzeW5jLlxuICAgKiBJZiBzZXQgdG8gZmFsc2UsIHVzZXIgaW50ZXJhY3Rpb24gd2lsbCBiZSBkaXNhYmxlZC4gSWYgc2V0IHRvIHRydWUsIHRoZSB1c2VyIHdpbGwgYmUgYWxlcnRlZCBvciBhc2tlZCB0byBjb25maXJtIG5ldyB1cGRhdGVzLCBiYXNlZCBvbiB3aGV0aGVyIHRoZSB1cGRhdGUgaXMgbWFuZGF0b3J5LlxuICAgKiBUbyBjdXN0b21pemUgdGhlIHVzZXIgZGlhbG9nLCB0aGlzIG9wdGlvbiBjYW4gYmUgc2V0IHRvIGEgY3VzdG9tIFVwZGF0ZURpYWxvZ09wdGlvbnMgaW5zdGFuY2UuXG4gICAqL1xuICB1cGRhdGVEaWFsb2c/OiBib29sZWFuIHwgVXBkYXRlRGlhbG9nT3B0aW9ucztcblxuICAvKipcbiAgICogT3ZlcnJpZGVzIHRoZSBjb25maWcueG1sIGRlcGxveW1lbnQga2V5IHdoZW4gY2hlY2tpbmcgZm9yIHVwZGF0ZXMuXG4gICAqL1xuICBkZXBsb3ltZW50S2V5Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIERlZmluZXMgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIGFsZXJ0IG9yIGNvbmZpcm1hdGlvbiBkaWFsb2dcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVEaWFsb2dPcHRpb25zIHtcbiAgLyoqXG4gICAqIElmIGEgbWFuZGF0b3J5IHVwZGF0ZSBpcyBhdmFpbGFibGUgYW5kIHRoaXMgb3B0aW9uIGlzIHNldCwgdGhlIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIgaW4gYW4gYWxlcnQgZGlhbG9nIGJlZm9yZSBkb3dubG9hZGluZyBhbmQgaW5zdGFsbGluZyB0aGUgdXBkYXRlLlxuICAgKiBUaGUgdXNlciB3aWxsIG5vdCBiZSBhYmxlIHRvIGNhbmNlbCB0aGUgb3BlcmF0aW9uLCBzaW5jZSB0aGUgdXBkYXRlIGlzIG1hbmRhdG9yeS5cbiAgICovXG4gIG1hbmRhdG9yeVVwZGF0ZU1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIElmIGFuIG9wdGlvbmFsIHVwZGF0ZSBpcyBhdmFpbGFibGUgYW5kIHRoaXMgb3B0aW9uIGlzIHNldCwgdGhlIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIgaW4gYSBjb25maXJtYXRpb24gZGlhbG9nLlxuICAgKiBJZiB0aGUgdXNlciBjb25maXJtcyB0aGUgdXBkYXRlLCBpdCB3aWxsIGJlIGRvd25sb2FkZWQgYW5kIGluc3RhbGxlZC4gT3RoZXJ3aXNlLCB0aGUgdXBkYXRlIHVwZGF0ZSBpcyBub3QgZG93bmxvYWRlZC5cbiAgICovXG4gIG9wdGlvbmFsVXBkYXRlTWVzc2FnZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHRpdGxlIG9mIHRoZSBkaWFsb2cgYm94IHVzZWQgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIHVzZXIgaW4gY2FzZSBvZiBhIG1hbmRhdG9yeSBvciBvcHRpb25hbCB1cGRhdGUuXG4gICAqIFRoaXMgdGl0bGUgd2lsbCBvbmx5IGJlIHVzZWQgaWYgYXQgbGVhc3Qgb25lIG9mIG1hbmRhdG9yeVVwZGF0ZU1lc3NhZ2Ugb3Igb3B0aW9uYWxVcGRhdGVNZXNzYWdlIG9wdGlvbnMgYXJlIHNldC5cbiAgICovXG4gIHVwZGF0ZVRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgb2YgdGhlIGNvbmZpcm1hdGlvbiBidXR0b24gaW4gY2FzZSBvZiBhbiBvcHRpb25hbCB1cGRhdGUuXG4gICAqL1xuICBvcHRpb25hbEluc3RhbGxCdXR0b25MYWJlbD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGxhYmVsIG9mIHRoZSBjYW5jZWwgYnV0dG9uIGluIGNhc2Ugb2YgYW4gb3B0aW9uYWwgdXBkYXRlLlxuICAgKi9cbiAgb3B0aW9uYWxJZ25vcmVCdXR0b25MYWJlbD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGxhYmVsIG9mIHRoZSBjb250aW51ZSBidXR0b24gaW4gY2FzZSBvZiBhIG1hbmRhdG9yeSB1cGRhdGUuXG4gICAqL1xuICBtYW5kYXRvcnlDb250aW51ZUJ1dHRvbkxhYmVsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBGbGFnIGluZGljYXRpbmcgaWYgdGhlIHVwZGF0ZSBkZXNjcmlwdGlvbiBwcm92aWRlZCBieSB0aGUgQ29kZVB1c2ggc2VydmVyIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRpYWxvZyBib3ggYXBwZW5kZWQgdG8gdGhlIHVwZGF0ZSBtZXNzYWdlLlxuICAgKi9cbiAgYXBwZW5kUmVsZWFzZURlc2NyaXB0aW9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogT3B0aW9uYWwgcHJlZml4IHRvIGFkZCB0byB0aGUgcmVsZWFzZSBkZXNjcmlwdGlvbi5cbiAgICovXG4gIGRlc2NyaXB0aW9uUHJlZml4Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIERlZmluZXMgdGhlIEpTT04gZm9ybWF0IG9mIHRoZSBwYWNrYWdlIGRpZmYgbWFuaWZlc3QgZmlsZS5cbiAqL1xuaW50ZXJmYWNlIElEaWZmTWFuaWZlc3Qge1xuICBkZWxldGVkRmlsZXM6IHN0cmluZ1tdO1xufVxuXG4vKipcbiAqIERlZmluZXMgdGhlIGZvcm1hdCBvZiB0aGUgRG93bmxvYWRQcm9ncmVzcyBvYmplY3QsIHVzZWQgdG8gc2VuZCBwZXJpb2RpY2FsIHVwZGF0ZSBub3RpZmljYXRpb25zIG9uIHRoZSBwcm9ncmVzcyBvZiB0aGUgdXBkYXRlIGRvd25sb2FkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERvd25sb2FkUHJvZ3Jlc3Mge1xuICB0b3RhbEJ5dGVzOiBudW1iZXI7XG4gIHJlY2VpdmVkQnl0ZXM6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAbmFtZSBDb2RlIFB1c2hcbiAqIEBkZXNjcmlwdGlvblxuICogQ29kZVB1c2ggcGx1Z2luIGZvciBDb3Jkb3ZhIGJ5IE1pY3Jvc29mdCB0aGF0IHN1cHBvcnRzIGlPUyBhbmQgQW5kcm9pZC5cbiAqXG4gKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9EZWxsb3M3L2V4YW1wbGUtY29yZG92YS1jb2RlLXB1c2gtcGx1Z2luXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDb2RlUHVzaCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29kZS1wdXNoL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjb2RlUHVzaDogQ29kZVB1c2gpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIG5vdGUgLSBtb3N0bHkgZXJyb3IgJiBjb21wbGV0ZWQgbWV0aG9kcyBvZiBvYnNlcnZhYmxlIHdpbGwgbm90IGZpcmVcbiAqIC8vIGFzIHN5bmNTdGF0dXMgd2lsbCBjb250YWluIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSB1cGRhdGVcbiAqIHRoaXMuY29kZVB1c2guc3luYygpLnN1YnNjcmliZSgoc3luY1N0YXR1cykgPT4gY29uc29sZS5sb2coc3luY1N0YXR1cykpO1xuICpcbiAqIGNvbnN0IGRvd25sb2FkUHJvZ3Jlc3MgPSAocHJvZ3Jlc3MpID0+IHsgY29uc29sZS5sb2coYERvd25sb2FkZWQgJHtwcm9ncmVzcy5yZWNlaXZlZEJ5dGVzfSBvZiAke3Byb2dyZXNzLnRvdGFsQnl0ZXN9YCk7IH1cbiAqIHRoaXMuY29kZVB1c2guc3luYyh7fSwgZG93bmxvYWRQcm9ncmVzcykuc3Vic2NyaWJlKChzeW5jU3RhdHVzKSA9PiBjb25zb2xlLmxvZyhzeW5jU3RhdHVzKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ29kZVB1c2gnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jb2RlLXB1c2gnLFxuICBwbHVnaW5SZWY6ICdjb2RlUHVzaCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L2NvcmRvdmEtcGx1Z2luLWNvZGUtcHVzaCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2RlUHVzaCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBwYWNrYWdlIGluZm9ybWF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJTG9jYWxQYWNrYWdlPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q3VycmVudFBhY2thZ2UoKTogUHJvbWlzZTxJTG9jYWxQYWNrYWdlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHBlbmRpbmcgcGFja2FnZSBpbmZvcm1hdGlvbiwgaWYgYW55LiBBIHBlbmRpbmcgcGFja2FnZSBpcyBvbmUgdGhhdCBoYXMgYmVlbiBpbnN0YWxsZWQgYnV0IHRoZSBhcHBsaWNhdGlvbiBzdGlsbCBydW5zIHRoZSBvbGQgY29kZS5cbiAgICogVGhpcyBoYXBwZW5zIG9ubHkgYWZ0ZXIgYSBwYWNrYWdlIGhhcyBiZWVuIGluc3RhbGxlZCB1c2luZyBPTl9ORVhUX1JFU1RBUlQgb3IgT05fTkVYVF9SRVNVTUUgbW9kZSwgYnV0IHRoZSBhcHBsaWNhdGlvbiB3YXMgbm90IHJlc3RhcnRlZC9yZXN1bWVkIHlldC5cbiAgICogQHJldHVybnMge1Byb21pc2U8SUxvY2FsUGFja2FnZT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFBlbmRpbmdQYWNrYWdlKCk6IFByb21pc2U8SUxvY2FsUGFja2FnZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2l0aCB0aGUgQ29kZVB1c2ggc2VydmVyIGlmIGFuIHVwZGF0ZSBwYWNrYWdlIGlzIGF2YWlsYWJsZSBmb3IgZG93bmxvYWQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZGVwbG95bWVudEtleV0gT3B0aW9uYWwgZGVwbG95bWVudCBrZXkgdGhhdCBvdmVycmlkZXMgdGhlIGNvbmZpZy54bWwgc2V0dGluZy5cbiAgICogQHJldHVybnMge1Byb21pc2U8SVJlbW90ZVBhY2thZ2U+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgY2hlY2tGb3JVcGRhdGUoZGVwbG95bWVudEtleT86IHN0cmluZyk6IFByb21pc2U8SVJlbW90ZVBhY2thZ2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTm90aWZpZXMgdGhlIHBsdWdpbiB0aGF0IHRoZSB1cGRhdGUgb3BlcmF0aW9uIHN1Y2NlZWRlZCBhbmQgdGhhdCB0aGUgYXBwbGljYXRpb24gaXMgcmVhZHkuXG4gICAqIENhbGxpbmcgdGhpcyBmdW5jdGlvbiBpcyByZXF1aXJlZCBvbiB0aGUgZmlyc3QgcnVuIGFmdGVyIGFuIHVwZGF0ZS4gT24gZXZlcnkgc3Vic2VxdWVudCBhcHBsaWNhdGlvbiBydW4sIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiBpcyBhIG5vb3AuXG4gICAqIElmIHVzaW5nIHN5bmMgQVBJLCBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gaXMgbm90IHJlcXVpcmVkIHNpbmNlIHN5bmMgY2FsbHMgaXQgaW50ZXJuYWxseS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG5vdGlmeUFwcGxpY2F0aW9uUmVhZHkoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbG9hZHMgdGhlIGFwcGxpY2F0aW9uLiBJZiB0aGVyZSBpcyBhIHBlbmRpbmcgdXBkYXRlIHBhY2thZ2UgaW5zdGFsbGVkIHVzaW5nIE9OX05FWFRfUkVTVEFSVCBvciBPTl9ORVhUX1JFU1VNRSBtb2RlcywgdGhlIHVwZGF0ZVxuICAgKiB3aWxsIGJlIGltbWVkaWF0ZWx5IHZpc2libGUgdG8gdGhlIHVzZXIuIE90aGVyd2lzZSwgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIHdpbGwgc2ltcGx5IHJlbG9hZCB0aGUgY3VycmVudCB2ZXJzaW9uIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlc3RhcnRBcHBsaWNhdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBpbnN0YWxsaW5nIHVwZGF0ZXMgaW4gb25lIG1ldGhvZCBjYWxsLlxuICAgKiBUaGlzIG1ldGhvZCBpcyBwcm92aWRlZCBmb3Igc2ltcGxpY2l0eSwgYW5kIGl0cyBiZWhhdmlvciBjYW4gYmUgcmVwbGljYXRlZCBieSB1c2luZyB3aW5kb3cuY29kZVB1c2guY2hlY2tGb3JVcGRhdGUoKSwgUmVtb3RlUGFja2FnZSdzIGRvd25sb2FkKCkgYW5kIExvY2FsUGFja2FnZSdzIGluc3RhbGwoKSBtZXRob2RzLlxuICAgKlxuICAgKiBUaGUgYWxnb3JpdGhtIG9mIHRoaXMgbWV0aG9kIGlzIHRoZSBmb2xsb3dpbmc6XG4gICAqIC0gQ2hlY2tzIGZvciBhbiB1cGRhdGUgb24gdGhlIENvZGVQdXNoIHNlcnZlci5cbiAgICogLSBJZiBhbiB1cGRhdGUgaXMgYXZhaWxhYmxlXG4gICAqICAgICAgICAgLSBJZiB0aGUgdXBkYXRlIGlzIG1hbmRhdG9yeSBhbmQgdGhlIGFsZXJ0TWVzc2FnZSBpcyBzZXQgaW4gb3B0aW9ucywgdGhlIHVzZXIgd2lsbCBiZSBpbmZvcm1lZCB0aGF0IHRoZSBhcHBsaWNhdGlvbiB3aWxsIGJlIHVwZGF0ZWQgdG8gdGhlIGxhdGVzdCB2ZXJzaW9uLlxuICAgKiAgICAgICAgICAgVGhlIHVwZGF0ZSBwYWNrYWdlIHdpbGwgdGhlbiBiZSBkb3dubG9hZGVkIGFuZCBhcHBsaWVkLlxuICAgKiAgICAgICAgIC0gSWYgdGhlIHVwZGF0ZSBpcyBub3QgbWFuZGF0b3J5IGFuZCB0aGUgY29uZmlybU1lc3NhZ2UgaXMgc2V0IGluIG9wdGlvbnMsIHRoZSB1c2VyIHdpbGwgYmUgYXNrZWQgaWYgdGhleSB3YW50IHRvIHVwZGF0ZSB0byB0aGUgbGF0ZXN0IHZlcnNpb24uXG4gICAqICAgICAgICAgICBJZiB0aGV5IGRlY2xpbmUsIHRoZSBzeW5jQ2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIHdpdGggU3luY1N0YXR1cy5VUERBVEVfSUdOT1JFRC5cbiAgICogICAgICAgICAtIE90aGVyd2lzZSwgdGhlIHVwZGF0ZSBwYWNrYWdlIHdpbGwgYmUgZG93bmxvYWRlZCBhbmQgYXBwbGllZCB3aXRoIG5vIHVzZXIgaW50ZXJhY3Rpb24uXG4gICAqIC0gSWYgbm8gdXBkYXRlIGlzIGF2YWlsYWJsZSBvbiB0aGUgc2VydmVyLCBvciBpZiBhIHByZXZpb3VzbHkgcm9sbGVkIGJhY2sgdXBkYXRlIGlzIGF2YWlsYWJsZSBhbmQgdGhlIGlnbm9yZUZhaWxlZFVwZGF0ZXMgaXMgc2V0IHRvIHRydWUsIHRoZSBzeW5jQ2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIHdpdGggdGhlIFN5bmNTdGF0dXMuVVBfVE9fREFURS5cbiAgICogLSBJZiBhbiBlcnJvciBvY2N1cnMgZHVyaW5nIGNoZWNraW5nIGZvciB1cGRhdGUsIGRvd25sb2FkaW5nIG9yIGluc3RhbGxpbmcgaXQsIHRoZSBzeW5jQ2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIHdpdGggdGhlIFN5bmNTdGF0dXMuRVJST1IuXG4gICAqXG4gICAqIEBwYXJhbSB7U3luY09wdGlvbnN9IFtzeW5jT3B0aW9uc10gT3B0aW9uYWwgU3luY09wdGlvbnMgcGFyYW1ldGVyIGNvbmZpZ3VyaW5nIHRoZSBiZWhhdmlvciBvZiB0aGUgc3luYyBvcGVyYXRpb24uXG4gICAqIEBwYXJhbSB7U3VjY2Vzc0NhbGxiYWNrPERvd25sb2FkUHJvZ3Jlc3M+fSBbZG93bmxvYWRQcm9ncmVzc10gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBkdXJpbmcgdGhlIGRvd25sb2FkIHByb2Nlc3MuIEl0IGlzIGNhbGxlZCBzZXZlcmFsIHRpbWVzIHdpdGggb25lIERvd25sb2FkUHJvZ3Jlc3MgcGFyYW1ldGVyLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxTeW5jU3RhdHVzPn1cbiAgICpcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAzLCAvLyB3ZSBkb24ndCBuZWVkIHRoaXMsIHNvIHdlIHNldCBpdCB0byBhIHZhbHVlIGhpZ2hlciB0aGFuICMgb2YgYXJnc1xuICB9KVxuICBzeW5jKHN5bmNPcHRpb25zPzogU3luY09wdGlvbnMsIGRvd25sb2FkUHJvZ3Jlc3M/OiBTdWNjZXNzQ2FsbGJhY2s8RG93bmxvYWRQcm9ncmVzcz4pOiBPYnNlcnZhYmxlPFN5bmNTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==