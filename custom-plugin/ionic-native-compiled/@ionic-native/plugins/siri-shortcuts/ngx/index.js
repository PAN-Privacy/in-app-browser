import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var SiriShortcuts = /** @class */ (function (_super) {
    __extends(SiriShortcuts, _super);
    function SiriShortcuts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SiriShortcuts.prototype.donate = function (options) { return cordova(this, "donate", {}, arguments); };
    SiriShortcuts.prototype.present = function (options) { return cordova(this, "present", {}, arguments); };
    SiriShortcuts.prototype.remove = function (persistentIdentifiers) { return cordova(this, "remove", {}, arguments); };
    SiriShortcuts.prototype.removeAll = function () { return cordova(this, "removeAll", {}, arguments); };
    SiriShortcuts.prototype.getActivatedShortcut = function (options) { return cordova(this, "getActivatedShortcut", {}, arguments); };
    SiriShortcuts.pluginName = "SiriShortcuts";
    SiriShortcuts.plugin = "cordova-plugin-siri-shortcuts";
    SiriShortcuts.pluginRef = "cordova.plugins.SiriShortcuts";
    SiriShortcuts.repo = "https://github.com/bartwesselink/cordova-plugin-siri-shortcuts";
    SiriShortcuts.platforms = ["iOS"];
    SiriShortcuts.decorators = [
        { type: Injectable }
    ];
    return SiriShortcuts;
}(IonicNativePlugin));
export { SiriShortcuts };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Npcmktc2hvcnRjdXRzL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXNGckMsaUNBQWlCOzs7O0lBYWxELDhCQUFNLGFBQUMsT0FBNEI7SUFnQm5DLCtCQUFPLGFBQUMsT0FBNEI7SUFVcEMsOEJBQU0sYUFBQyxxQkFBd0M7SUFTL0MsaUNBQVM7SUFXVCw0Q0FBb0IsYUFBQyxPQUFrQzs7Ozs7OztnQkE1RHhELFVBQVU7O3dCQXRGWDtFQXVGbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTaXJpU2hvcnRjdXQge1xuICBwZXJzaXN0ZW50SWRlbnRpZmllcjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICB1c2VySW5mbzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgc3VnZ2VzdGVkSW52b2NhdGlvblBocmFzZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpcmlTaG9ydGN1dE9wdGlvbnMgZXh0ZW5kcyBTaXJpU2hvcnRjdXQge1xuICBpc0VsaWdpYmxlRm9yU2VhcmNoPzogYm9vbGVhbjtcbiAgaXNFbGlnaWJsZUZvclByZWRpY3Rpb24/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2YXRlZFNob3J0Y3V0T3B0aW9ucyB7XG4gIGNsZWFyPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAYmV0YVxuICogQG5hbWUgU2lyaSBTaG9ydGN1dHNcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gb25seSB3b3JrcyB3aGVuIHlvdXIgYXBwIGlzIGJ1aWx0IHdpdGggWENvZGUgMTAuIFNob3J0Y3V0cyB3aWxsIG9ubHkgYXBwZWFyIG9uIGlPUy12ZXJzaW9ucyA+PSAxMi4wXG4gKlxuICogVGhpcyBwbHVnaW4gZW5hYmxlcyB0aGUgdXNlIG9mIFNpcmkgc2hvcnRjdXRzIGluIENvcmRvdmEuIFNpcmkgU2hvcnRjdXRzIGVuYWJsZSB0aGUgdXNlciB0byBwZXJmb3JtIGNlcnRhaW4gYWN0aW9ucyBieSBhZGRpbmcgdGhlbSB0byBTaXJpLlxuICogQWZ0ZXIgeW91IGhhdmUgZG9uYXRlZCBhIHNob3J0Y3V0IHRvIFNpcmksIGl0IHdpbGwgYXBwZWFyIGluIHRoZSBzZXR0aW5ncyBtZW51LCBhZnRlciB3aGljaCB0aGUgdXNlciBpcyBhYmxlIHRvIGFkZCB0aGUgYWN0aW9uLiBZb3UgY2FuIGNoZWNrXG4gKiB3aGV0aGVyIHRoZSB1c2VyIGxhdW5jaGVkIHlvdXIgYXBwIHRocm91Z2ggYSBzaG9ydGN1dCBieSBjYWxsaW5nIGBnZXRBY3RpdmF0ZWRTaG9ydGN1dCgpYCB3aGVuIHRoZSBhcHAgaXMgcmVzdW1lZC4gSXQgd2lsbCByZXR1cm4gYG51bGxgXG4gKiBpZiBpdCBoYXMgbm90IGJlZW4gbGF1bmNoZWQgYnkgU2lyaSwgYW5kIGlmIGl0IGRpZCwgaXQgd2lsbCByZXR1cm4gYW4gb2JqZWN0IHdpdGggYFNpcmlTaG9ydGN1dGAgcHJvcGVydGllcy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNpcmlTaG9ydGN1dHMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3Npcmktc2hvcnRjdXRzL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2lyaVNob3J0Y3V0czogU2lyaVNob3J0Y3V0cykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuc2lyaVNob3J0Y3V0cy5kb25hdGUoe1xuICogICAgICAgcGVyc2lzdGVudElkZW50aWZpZXI6ICdvcGVuLW15LWFwcCcsXG4gKiAgICAgICB0aXRsZTogJ09wZW4gbXkgYXBwJyxcbiAqICAgICAgIHN1Z2dlc3RlZEludm9jYXRpb25QaHJhc2U6ICdPcGVuIG15IGFwcCcsXG4gKiAgICAgICB1c2VySW5mbzogeyB1c2VybmFtZTogJ3VzZXJuYW1lJyB9LFxuICogICAgICAgaXNFbGlnaWJsZUZvclNlYXJjaDogdHJ1ZSxcbiAqICAgICAgIGlzRWxpZ2libGVGb3JQcmVkaWN0aW9uOiB0cnVlLFxuICogICB9KVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnU2hvcnRjdXQgZG9uYXRlZC4nKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogdGhpcy5zaXJpU2hvcnRjdXRzLnByZXNlbnQoe1xuICogICAgICAgcGVyc2lzdGVudElkZW50aWZpZXI6ICdvcGVuLW15LWFwcCcsXG4gKiAgICAgICB0aXRsZTogJ09wZW4gbXkgYXBwJyxcbiAqICAgICAgIHN1Z2dlc3RlZEludm9jYXRpb25QaHJhc2U6ICdPcGVuIG15IGFwcCcsXG4gKiAgICAgICB1c2VySW5mbzogeyB1c2VybmFtZTogJ3VzZXJuYW1lJyB9LFxuICogICB9KVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnU2hvcnRjdXQgYWRkZWQuJykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIHRoaXMuc2lyaVNob3J0Y3V0cy5yZW1vdmUoJ29wZW4tbXktYXBwJylcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ1Nob3J0Y3V0IHJlbW92ZWQuJykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIHRoaXMuc2lyaVNob3J0Y3V0cy5yZW1vdmVBbGwoKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnQWxsIHNob3J0Y3V0cyByZW1vdmVkIHJlbW92ZWQuJykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIHRoaXMuc2lyaVNob3J0Y3V0cy5nZXRBY3RpdmF0ZWRTaG9ydGN1dCgpXG4gKiAgIC50aGVuKChkYXRhOiBTaXJpU2hvcnRjdXR8bnVsbCkgPT4gY29uc29sZS5sb2coZGF0YSkpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICpcbiAqIEBpbnRlcmZhY2VzXG4gKiBTaXJpU2hvcnRjdXRcbiAqIFNpcmlTaG9ydGN1dE9wdGlvbnNcbiAqIEFjdGl2YXRlZFNob3J0Y3V0T3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NpcmlTaG9ydGN1dHMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zaXJpLXNob3J0Y3V0cycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5TaXJpU2hvcnRjdXRzJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9iYXJ0d2Vzc2VsaW5rL2NvcmRvdmEtcGx1Z2luLXNpcmktc2hvcnRjdXRzJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaXJpU2hvcnRjdXRzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogRG9uYXRlIHNob3J0Y3V0IHRvIFNpcmlcbiAgICogQHBhcmFtIHtTaXJpU2hvcnRjdXRPcHRpb25zfSBvcHRpb25zIE9wdGlvbnMgdG8gc3BlY2lmeSBmb3IgdGhlIGRvbmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnBlcnNpc3RlbnRJZGVudGlmaWVyIFNwZWNpZnkgYW4gaWRlbnRpZmllciB0byB1bmlxdWVseSBpZGVudGlmeSB0aGUgc2hvcnRjdXQsIGluIG9yZGVyIHRvIGJlIGFibGUgdG8gcmVtb3ZlIGl0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRpdGxlIFNwZWNpZnkgYSB0aXRsZSBmb3IgdGhlIHNob3J0Y3V0LCB3aGljaCBpcyB2aXNpYmxlIHRvIHRoZSB1c2VyIGFzIHRoZSBuYW1lIG9mIHRoZSBzaG9ydGN1dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zdWdnZXN0ZWRJbnZvY2F0aW9uUGhyYXNlIFNwZWNpZnkgdGhlIHBocmFzZSB0byBnaXZlIHRoZSB1c2VyIHNvbWUgaW5zcGlyYXRpb24gb24gd2hhdCB0aGUgc2hvcnRjdXQgdG8gY2FsbFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy51c2VySW5mbyBQcm92aWRlIGEga2V5LXZhbHVlIG9iamVjdCB0aGF0IGNvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzaG9ydGN1dCwgdGhpcyB3aWxsIGJlIHJldHVybmVkIGluIHRoZSBnZXRBY3RpdmF0ZWRTaG9ydGN1dCBtZXRob2QuIEl0IGlzIG5vdCBwb3NzaWJsZSB0byB1c2UgdGhlIHBlcnNpc3RlbnRJZGVudGlmaWVyIGtleSwgaXQgaXMgdXNlZCBpbnRlcm5hbGx5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5pc0VsaWdpYmxlRm9yU2VhcmNoIFRoaXMgdmFsdWUgZGVmYXVsdHMgdG8gdHJ1ZSwgc2V0IHRoaXMgdmFsdWUgdG8gbWFrZSBpdCBzZWFyY2hhYmxlIGluIFNpcmlcbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmlzRWxpZ2libGVGb3JQcmVkaWN0aW9uIFRoaXMgdmFsdWUgZGVmYXVsdHMgdG8gdHJ1ZSwgc2V0IHRoaXMgdmFsdWUgdG8gc2V0IHdoZXRoZXIgdGhlIHNob3J0Y3V0IGVsaWdpYmxlIGZvciBwcmVkaWN0aW9uXG4gICAqIEByZXR1cm4gUHJvbWlzZTx2b2lkPlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkb25hdGUob3B0aW9uczogU2lyaVNob3J0Y3V0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVzZW50IHNob3J0Y3V0IHRvIHRoZSB1c2VyLCB3aWxsIHBvcHVwIGEgdmlldyBjb250cm9sbGVyIGFza2luZyB0aGUgdXNlciB0byBhZGQgaXQgdG8gU2lyaVxuICAgKiBAcGFyYW0ge1NpcmlTaG9ydGN1dE9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyB0byBzcGVjaWZ5IGZvciB0aGUgZG9uYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMucGVyc2lzdGVudElkZW50aWZpZXIgU3BlY2lmeSBhbiBpZGVudGlmaWVyIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoZSBzaG9ydGN1dCwgaW4gb3JkZXIgdG8gYmUgYWJsZSB0byByZW1vdmUgaXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudGl0bGUgU3BlY2lmeSBhIHRpdGxlIGZvciB0aGUgc2hvcnRjdXQsIHdoaWNoIGlzIHZpc2libGUgdG8gdGhlIHVzZXIgYXMgdGhlIG5hbWUgb2YgdGhlIHNob3J0Y3V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnN1Z2dlc3RlZEludm9jYXRpb25QaHJhc2UgU3BlY2lmeSB0aGUgcGhyYXNlIHRvIGdpdmUgdGhlIHVzZXIgc29tZSBpbnNwaXJhdGlvbiBvbiB3aGF0IHRoZSBzaG9ydGN1dCB0byBjYWxsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLnVzZXJJbmZvIFByb3ZpZGUgYSBrZXktdmFsdWUgb2JqZWN0IHRoYXQgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNob3J0Y3V0LCB0aGlzIHdpbGwgYmUgcmV0dXJuZWQgaW4gdGhlIGdldEFjdGl2YXRlZFNob3J0Y3V0IG1ldGhvZC4gSXQgaXMgbm90IHBvc3NpYmxlIHRvIHVzZSB0aGUgcGVyc2lzdGVudElkZW50aWZpZXIga2V5LCBpdCBpcyB1c2VkIGludGVybmFsbHlcbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmlzRWxpZ2libGVGb3JTZWFyY2ggVGhpcyB2YWx1ZSBkZWZhdWx0cyB0byB0cnVlLCBzZXQgdGhpcyB2YWx1ZSB0byBtYWtlIGl0IHNlYXJjaGFibGUgaW4gU2lyaVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuaXNFbGlnaWJsZUZvclByZWRpY3Rpb24gVGhpcyB2YWx1ZSBkZWZhdWx0cyB0byB0cnVlLCBzZXQgdGhpcyB2YWx1ZSB0byBzZXQgd2hldGhlciB0aGUgc2hvcnRjdXQgZWxpZ2libGUgZm9yIHByZWRpY3Rpb25cbiAgICogQHJldHVybiBQcm9taXNlPHZvaWQ+XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByZXNlbnQob3B0aW9uczogU2lyaVNob3J0Y3V0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgc2hvcnRjdXRzIGJhc2VkIG9uIGlkZW50aWZpZXJzXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBwZXJzaXN0ZW50SWRlbnRpZmllcnMgU3BlY2lmeSB3aGljaCBzaG9ydGN1dChzKSB0byBkZWxldGUgYnkgdGhlaXIgcGVyc2lzdGVudCBpZGVudGlmaWVyc1xuICAgKiBAcmV0dXJuIFByb21pc2U8dm9pZD5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVtb3ZlKHBlcnNpc3RlbnRJZGVudGlmaWVyczogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBzaG9ydGN1dHMgZnJvbSB0aGUgYXBwbGljYXRpb25cbiAgICogQHJldHVybiBQcm9taXNlPHZvaWQ+XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlbW92ZUFsbCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGNsaWNrZWQgdXNlciBhY3Rpdml0eSwgYW5kIHJldHVybiBgbnVsbGAgaWYgbm9uZVxuICAgKiBAcGFyYW0ge0FjdGl2YXRlZFNob3J0Y3V0T3B0aW9uc3xudWxsfSBvcHRpb25zIE9wdGlvbnMgdG8gc3BlY2lmeSBmb3IgZ2V0dGluZyB0aGUgc2hvcnRjdXRcbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmNsZWFyIENsZWFyIHRoZSBjdXJyZW50bHkgYWN0aXZhdGVkIHNob3J0Y3V0LCBkZWZhdWx0cyB0byB0cnVlXG4gICAqIEByZXR1cm4gUHJvbWlzZTxTaXJpU2hvcnRjdXR8bnVsbD5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWN0aXZhdGVkU2hvcnRjdXQob3B0aW9ucz86IEFjdGl2YXRlZFNob3J0Y3V0T3B0aW9ucyk6IFByb21pc2U8U2lyaVNob3J0Y3V0IHwgbnVsbD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19