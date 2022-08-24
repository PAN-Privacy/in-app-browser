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
import { AwesomeCordovaNativePlugin, instanceAvailability, cordovaInstance } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var InAppBrowserObject = /** @class */ (function () {
    /**
     * Opens a URL in a new InAppBrowserOriginal instance, the current browser instance, or the system browser.
     * @param {string} url     The URL to load.
     * @param {string} [target="self"]  The target in which to load the URL, an optional parameter that defaults to _self.
     *                 _self: Opens in the WebView if the URL is in the white list, otherwise it opens in the InAppBrowserOriginal.
     *                 _blank: Opens in the InAppBrowserOriginal.
     *                 _system: Opens in the system's web browser.
     * @param {string | InAppBrowserOptions} [options] Options for the InAppBrowserOriginal. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    function InAppBrowserObject(url, target, options) {
        try {
            if (options && typeof options !== 'string') {
                options = Object.keys(options)
                    .map(function (key) { return key + "=" + options[key]; })
                    .join(',');
            }
            this._objectInstance = cordova.InAppBrowser.open(url, target, options);
        }
        catch (e) {
            if (typeof window !== 'undefined') {
                window.open(url, target);
            }
            console.warn('Native: InAppBrowserOriginal is not installed or you are running on a browser. Falling back to window.open.');
        }
    }
    InAppBrowserObject.prototype._loadAfterBeforeload = function (strUrl) { return cordovaInstance(this, "_loadAfterBeforeload", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.show = function () { return cordovaInstance(this, "show", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.close = function () { return cordovaInstance(this, "close", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.hide = function () { return cordovaInstance(this, "hide", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.executeScript = function (script) { return cordovaInstance(this, "executeScript", {}, arguments); };
    InAppBrowserObject.prototype.insertCSS = function (css) { return cordovaInstance(this, "insertCSS", {}, arguments); };
    InAppBrowserObject.prototype.on = function (event) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return new Observable(function (observer) {
                    _this._objectInstance.addEventListener(event, observer.next.bind(observer));
                    return function () { return _this._objectInstance.removeEventListener(event, observer.next.bind(observer)); };
                });
            }
        })();
    };
    return InAppBrowserObject;
}());
export { InAppBrowserObject };
var InAppBrowserOriginal = /** @class */ (function (_super) {
    __extends(InAppBrowserOriginal, _super);
    function InAppBrowserOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Opens a URL in a new InAppBrowserOriginal instance, the current browser instance, or the system browser.
     * @param  url {string}     The URL to load.
     * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options {string} Options for the InAppBrowserOriginal. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     * @returns {InAppBrowserObject}
     */
    InAppBrowserOriginal.prototype.create = function (url, target, options) {
        return new InAppBrowserObject(url, target, options);
    };
    InAppBrowserOriginal.pluginName = "InAppBrowser Pan";
    InAppBrowserOriginal.plugin = "cordova-plugin-inappbrowser-pan";
    InAppBrowserOriginal.pluginRef = "cordova.InAppBrowser";
    InAppBrowserOriginal.platforms = ["Android", "Browser", "iOS"];
    return InAppBrowserOriginal;
}(AwesomeCordovaNativePlugin));
var InAppBrowser = new InAppBrowserOriginal();
export { InAppBrowser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luLWFwcC1icm93c2VyLXBhbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw0REFBNkQsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRixPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDOztJQW9PMUM7Ozs7Ozs7Ozs7T0FVRztJQUNILDRCQUFZLEdBQVcsRUFBRSxNQUFlLEVBQUUsT0FBc0M7UUFDOUUsSUFBSTtZQUNGLElBQUksT0FBTyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtnQkFDMUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3FCQUMzQixHQUFHLENBQUMsVUFBQyxHQUFXLElBQUssT0FBRyxHQUFHLFNBQUssT0FBK0IsQ0FBQyxHQUFHLENBQUcsRUFBakQsQ0FBaUQsQ0FBQztxQkFDdkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2Q7WUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDeEU7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO2dCQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUMxQjtZQUNELE9BQU8sQ0FBQyxJQUFJLENBQ1YscUdBQXFHLENBQ3RHLENBQUM7U0FDSDtJQUNILENBQUM7SUFPRCxpREFBb0IsYUFBQyxNQUFjO0lBT25DLGlDQUFJO0lBTUosa0NBQUs7SUFPTCxpQ0FBSTtJQVFKLDBDQUFhLGFBQUMsTUFBd0M7SUFVdEQsc0NBQVMsYUFBQyxHQUFxQztJQVUvQywrQkFBRSxhQUFDLEtBQTRCOzs7c0RBQWlDO2dCQUM5RCxPQUFPLElBQUksVUFBVSxDQUFvQixVQUFDLFFBQXFDO29CQUM3RSxLQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUMzRSxPQUFPLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUE3RSxDQUE2RSxDQUFDO2dCQUM3RixDQUFDLENBQUMsQ0FBQzthQUNKOzs7NkJBOVRIOzs7O0lBc1hrQyxnQ0FBaUI7Ozs7SUFDakQ7Ozs7Ozs7O09BUUc7SUFDSCw2QkFBTSxHQUFOLFVBQU8sR0FBVyxFQUFFLE1BQWUsRUFBRSxPQUFzQztRQUN6RSxPQUFPLElBQUksa0JBQWtCLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozt1QkFsWUg7RUFzWGtDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZUNoZWNrLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgY29uc3QgY29yZG92YTogQ29yZG92YSAmIHsgSW5BcHBCcm93c2VyOiBhbnkgfTtcblxuZXhwb3J0IGludGVyZmFjZSBJbkFwcEJyb3dzZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIFNldCB0byB5ZXMgdG8gc2hvdyBob3N0IG5hbWVcbiAgICovXG4gIHNob3dPbmx5SG9zdG5hbWU/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBjb2xvciBvZiB0aGUgdGV4dCBpbiBsb2NhdGlvbiBiYXJcbiAgICovXG4gIGxvY2F0aW9uVGV4dENvbG9yPzogc3RyaW5nO1xuICAvKipcbiAgICogSGVscCBCdXR0b24gdGV4dFxuICAgKi9cbiAgaGVscEJ1dHRvblRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBIZWxwIFBvcHVwIHRleHQsXG4gICAqIFRleHQgdGhhdCBpcyBzaG93biBpbnNpZGUgb2YgYSBwb3B1cCB3aGVuIHRoZSBoZWxwIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgaGVscFBvcFVwVGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIEhlbHAgQnV0dG9uIHRleHQgY29sb3JcbiAgICovXG4gIGhlbHBCdXR0b25Db2xvcj86IHN0cmluZztcbiAgLyoqXG4gICAqIEZvb3RlciBUZXh0XG4gICAqL1xuICBmb290ZXJUZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICogRm9vdGVyIHRleHQgY29sb3JcbiAgICovXG4gIGZvb3RlclRleHRDb2xvcj86IHN0cmluZztcbiAgLyoqXG4gICAqIEZvb3RlciBJbWFnZSBuYW1lIHdpdGggZXh0ZW5zaW9uXG4gICAqIEltYWdlIHNob3VsZCBiZSBwbGFjZWQgaW4gdGhlIGFzc2V0cy9pY29uLyBmb2xkZXIuXG4gICAqL1xuICBmb290ZXJJbWFnZT86IHN0cmluZztcbiAgLyoqXG4gICAqIChBbmRyb2lkIG9ubHkpXG4gICAqIEZvb3RlciB0ZXh0IGZvbnQgZmFtaWx5LlxuICAgKiBmb250IGZpbGUgc2hvdWxkIGJlIHBsYWNlZCBpbiB0aGUgL2Fzc2V0cy9mb250cy8gZm9sZGVyLlxuICAgKiBQbGVhc2UgTm90ZTogT25seSAudHRmIGZvbnRzIGFyZSBzdXBwb3J0ZWQuXG4gICAqL1xuICBmb290ZXJGb250RmFtaWx5Pzogc3RyaW5nO1xuICAvKipcbiAgICogKGlPUyBvbmx5KVxuICAgKiBGb290ZXIgdGV4dCBmb250IGZhbWlseSBuYW1lIGFuZCBub3QgdGhlIGZpbGUgbmFtZS5cbiAgICovXG4gIGlvc0Zvb3RlckZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAoQW5kcm9pZCBvbmx5KVxuICAgKiBMb2NhdGlvbiB0ZXh0IGZvbnQgZmFtaWx5LlxuICAgKiBmb250IGZpbGUgc2hvdWxkIGJlIHBsYWNlZCBpbiB0aGUgL2Fzc2V0cy9mb250cy8gZm9sZGVyLlxuICAgKiBQbGVhc2UgTm90ZTogT25seSAudHRmIGZvbnRzIGFyZSBzdXBwb3J0ZWQuXG4gICAqL1xuICBsb2NhdGlvbkZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAoaU9TIG9ubHkpXG4gICAqIExvY2F0aW9uIHRleHQgZm9udCBmYW1pbHkgbmFtZSBhbmQgbm90IHRoZSBmaWxlIG5hbWUuXG4gICAqL1xuICBpb3NMb2NhdGlvbkZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAoQW5kcm9pZCBvbmx5KVxuICAgKiBIZWxwIHRleHQgZm9udCBmYW1pbHkuXG4gICAqIGZvbnQgZmlsZSBzaG91bGQgYmUgcGxhY2VkIGluIHRoZSAvYXNzZXRzL2ZvbnRzLyBmb2xkZXIuXG4gICAqIFBsZWFzZSBOb3RlOiBPbmx5IC50dGYgZm9udHMgYXJlIHN1cHBvcnRlZC5cbiAgICovXG4gIGhlbHBGb250RmFtaWx5Pzogc3RyaW5nO1xuICAvKipcbiAgICogKGlPUyBvbmx5KVxuICAgKiBIZWxwIHRleHQgZm9udCBmYW1pbHkgbmFtZSBhbmQgbm90IHRoZSBmaWxlIG5hbWUuXG4gICAqL1xuICBpb3NIZWxwRm9udEZhbWlseT86IHN0cmluZztcbiAgLyoqXG4gICAqIChBbmRyb2lkIG9ubHkpXG4gICAqIENsb3NlIEJ1dHRvbiB0ZXh0IGZvbnQgZmFtaWx5LlxuICAgKiBmb250IGZpbGUgc2hvdWxkIGJlIHBsYWNlZCBpbiB0aGUgL2Fzc2V0cy9mb250cy8gZm9sZGVyLlxuICAgKiBQbGVhc2UgTm90ZTogT25seSAudHRmIGZvbnRzIGFyZSBzdXBwb3J0ZWQuXG4gICAqL1xuICBjbG9zZUJ1dHRvbkZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAoaU9TIG9ubHkpXG4gICAqIENsb3NlIHRleHQgZm9udCBmYW1pbHkgbmFtZSBhbmQgbm90IHRoZSBmaWxlIG5hbWUuXG4gICAqL1xuICBpb3NDbG9zZUJ1dHRvbkZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gYWxsb3cgaW4tbGluZSBIVE1MNSBtZWRpYSBwbGF5YmFjaywgZGlzcGxheWluZyB3aXRoaW4gdGhlIGJyb3dzZXIgd2luZG93IHJhdGhlciB0aGFuIGEgZGV2aWNlLXNwZWNpZmljIHBsYXliYWNrIGludGVyZmFjZS5cbiAgICogVGhlIEhUTUwncyB2aWRlbyBlbGVtZW50IG11c3QgYWxzbyBpbmNsdWRlIHRoZSB3ZWJraXQtcGxheXNpbmxpbmUgYXR0cmlidXRlIChkZWZhdWx0cyB0byBubylcbiAgICovXG4gIGFsbG93SW5saW5lTWVkaWFQbGF5YmFjaz86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIHNldCB0byBlbmFibGUgdGhlIGJlZm9yZWxvYWQgZXZlbnQgdG8gbW9kaWZ5IHdoaWNoIHBhZ2VzIGFyZSBhY3R1YWxseSBsb2FkZWQgaW4gdGhlIGJyb3dzZXIuIEFjY2VwdGVkIHZhbHVlcyBhcmUgZ2V0IHRvXG4gICAqIGludGVyY2VwdCBvbmx5IEdFVCByZXF1ZXN0cywgcG9zdCB0byBpbnRlcmNlcHQgb24gUE9TVCByZXF1ZXN0cyBvciB5ZXMgdG8gaW50ZXJjZXB0IGJvdGggR0VUICYgUE9TVCByZXF1ZXN0cy5cbiAgICogTm90ZSB0aGF0IFBPU1QgcmVxdWVzdHMgYXJlIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIGlnbm9yZWQgKGlmIHlvdSBzZXQgYmVmb3JlbG9hZD1wb3N0IGl0IHdpbGwgcmFpc2UgYW4gZXJyb3IpLlxuICAgKi9cbiAgYmVmb3JlbG9hZD86ICd5ZXMnIHwgJ2dldCcgfCAncG9zdCc7XG4gIC8qKiBTZXQgdG8geWVzIHRvIGhhdmUgdGhlIGJyb3dzZXIncyBjb29raWUgY2FjaGUgY2xlYXJlZCBiZWZvcmUgdGhlIG5ldyB3aW5kb3cgaXMgb3BlbmVkLiAqL1xuICBjbGVhcmNhY2hlPzogJ3llcycgfCAnbm8nO1xuICAvKiogIHNldCB0byB5ZXMgdG8gaGF2ZSB0aGUgYnJvd3NlcidzIGVudGlyZSBsb2NhbCBzdG9yYWdlIGNsZWFyZWQgKGNvb2tpZXMsIEhUTUw1IGxvY2FsIHN0b3JhZ2UsIEluZGV4ZWREQiwgZXRjLikgYmVmb3JlIHRoZSBuZXcgd2luZG93IGlzIG9wZW5lZCAqL1xuICBjbGVhcmRhdGE/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBTZXQgdG8geWVzIHRvIGhhdmUgdGhlIHNlc3Npb24gY29va2llIGNhY2hlIGNsZWFyZWQgYmVmb3JlIHRoZSBuZXcgd2luZG93IGlzIG9wZW5lZC5cbiAgICogRm9yIFdLV2ViVmlldywgcmVxdWlyZXMgaU9TIDExKyBvbiB0YXJnZXQgZGV2aWNlLlxuICAgKi9cbiAgY2xlYXJzZXNzaW9uY2FjaGU/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAoQW5kcm9pZCkgU2V0IHRvIGEgc3RyaW5nIHRvIHVzZSBhcyB0aGUgY2xvc2UgYnV0dG9uJ3MgY2FwdGlvbiBpbnN0ZWFkIG9mIGEgWC4gTm90ZSB0aGF0IHlvdSBuZWVkIHRvIGxvY2FsaXplIHRoaXMgdmFsdWUgeW91cnNlbGYuXG4gICAqIChpT1MpIFNldCB0byBhIHN0cmluZyB0byB1c2UgYXMgdGhlIERvbmUgYnV0dG9uJ3MgY2FwdGlvbi4gTm90ZSB0aGF0IHlvdSBuZWVkIHRvIGxvY2FsaXplIHRoaXMgdmFsdWUgeW91cnNlbGYuXG4gICAqL1xuICBjbG9zZWJ1dHRvbmNhcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAoQW5kcm9pZCkgU2V0IHRvIGEgdmFsaWQgaGV4IGNvbG9yIHN0cmluZywgZm9yIGV4YW1wbGU6ICMwMGZmMDAsIGFuZCBpdCB3aWxsIGNoYW5nZSB0aGUgY2xvc2UgYnV0dG9uIGNvbG9yIGZyb20gZGVmYXVsdCwgcmVnYXJkbGVzcyBvZiBiZWluZyBhIHRleHQgb3IgZGVmYXVsdCBYLiBPbmx5IGhhcyBlZmZlY3QgaWYgdXNlciBoYXMgbG9jYXRpb24gc2V0IHRvIHllcy5cbiAgICogKGlPUykgU2V0IGFzIGEgdmFsaWQgaGV4IGNvbG9yIHN0cmluZywgZm9yIGV4YW1wbGU6ICMwMGZmMDAsIHRvIGNoYW5nZSBmcm9tIHRoZSBkZWZhdWx0IERvbmUgYnV0dG9uJ3MgY29sb3IuIE9ubHkgYXBwbGljYWJsZSBpZiB0b29sYmFyIGlzIG5vdCBkaXNhYmxlZC5cbiAgICovXG4gIGNsb3NlYnV0dG9uY29sb3I/OiBzdHJpbmc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gKGRlZmF1bHQgaXMgbm8pLiBUdXJucyBvbi9vZmYgdGhlIFVJV2ViVmlld0JvdW5jZSBwcm9wZXJ0eS4gKi9cbiAgZGlzYWxsb3dvdmVyc2Nyb2xsPzogJ3llcycgfCAnbm8nO1xuICAvKiogKGlPUyBPbmx5KSAgU2V0IHRvIHllcyBvciBubyB0byBwcmV2ZW50IHZpZXdwb3J0IHNjYWxpbmcgdGhyb3VnaCBhIG1ldGEgdGFnIChkZWZhdWx0cyB0byBubykuICovXG4gIGVuYWJsZVZpZXdwb3J0U2NhbGU/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoQW5kcm9pZCBPbmx5KSBTZXQgdG8geWVzIHRvIHNob3cgYSBjbG9zZSBidXR0b24gaW4gdGhlIGZvb3RlciBzaW1pbGFyIHRvIHRoZSBpT1MgRG9uZSBidXR0b24uIFRoZSBjbG9zZSBidXR0b24gd2lsbCBhcHBlYXIgdGhlIHNhbWUgYXMgZm9yIHRoZSBoZWFkZXIgaGVuY2UgdXNlIGNsb3NlYnV0dG9uY2FwdGlvbiBhbmQgY2xvc2VidXR0b25jb2xvciB0byBzZXQgaXRzIHByb3BlcnRpZXMgKi9cbiAgZm9vdGVyPzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIGEgdmFsaWQgaGV4IGNvbG9yIHN0cmluZywgZm9yIGV4YW1wbGUgIzAwZmYwMCBvciAjQ0MwMGZmMDAgKCNhYXJyZ2diYiksIGFuZCBpdCB3aWxsIGNoYW5nZSB0aGUgZm9vdGVyIGNvbG9yIGZyb20gZGVmYXVsdC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGZvb3RlciBzZXQgdG8geWVzICovXG4gIGZvb3RlcmNvbG9yPzogc3RyaW5nO1xuICAvKipcbiAgICogKFdpbmRvd3Mgb25seSkgU2V0IHRvIHllcyB0byBjcmVhdGUgdGhlIGJyb3dzZXIgY29udHJvbCB3aXRob3V0IGEgYm9yZGVyIGFyb3VuZCBpdC5cbiAgICogUGxlYXNlIG5vdGUgdGhhdCBpZiBsb2NhdGlvbj1ubyBpcyBhbHNvIHNwZWNpZmllZCwgdGhlcmUgd2lsbCBiZSBubyBjb250cm9sIHByZXNlbnRlZCB0byB1c2VyIHRvIGNsb3NlIElBQiB3aW5kb3cuXG4gICAqL1xuICBmdWxsc2NyZWVuPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQgJiBXaW5kb3dzIE9ubHkpIFNldCB0byB5ZXMgdG8gdXNlIHRoZSBoYXJkd2FyZSBiYWNrIGJ1dHRvbiB0byBuYXZpZ2F0ZSBiYWNrd2FyZHMgdGhyb3VnaCB0aGUgSW5BcHBCcm93c2VyJ3MgaGlzdG9yeS5cbiAgICogSWYgdGhlcmUgaXMgbm8gcHJldmlvdXMgcGFnZSwgdGhlIEluQXBwQnJvd3NlciB3aWxsIGNsb3NlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB5ZXMsIHNvIHlvdSBtdXN0IHNldCBpdCB0byBubyBpZiB5b3Ugd2FudCB0aGUgYmFjayBidXR0b24gdG8gc2ltcGx5IGNsb3NlIHRoZSBJbkFwcEJyb3dzZXIuXG4gICAqL1xuICBoYXJkd2FyZWJhY2s/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBTZXQgdG8geWVzIHRvIGNyZWF0ZSB0aGUgYnJvd3NlciBhbmQgbG9hZCB0aGUgcGFnZSwgYnV0IG5vdCBzaG93IGl0LiBUaGUgbG9hZHN0b3AgZXZlbnQgZmlyZXMgd2hlbiBsb2FkaW5nIGlzIGNvbXBsZXRlLlxuICAgKiBPbWl0IG9yIHNldCB0byBubyAoZGVmYXVsdCkgdG8gaGF2ZSB0aGUgYnJvd3NlciBvcGVuIGFuZCBsb2FkIG5vcm1hbGx5LlxuICAgKi9cbiAgaGlkZGVuPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byB5ZXMgdG8gaGlkZSB0aGUgbmF2aWdhdGlvbiBidXR0b25zIG9uIHRoZSBsb2NhdGlvbiB0b29sYmFyLCBvbmx5IGhhcyBlZmZlY3QgaWYgdXNlciBoYXMgbG9jYXRpb24gc2V0IHRvIHllcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgbm8uXG4gICAqIChpT1MpIFNldCB0byB5ZXMgb3Igbm8gdG8gdHVybiB0aGUgdG9vbGJhciBuYXZpZ2F0aW9uIGJ1dHRvbnMgb24gb3Igb2ZmIChkZWZhdWx0cyB0byBubykuIE9ubHkgYXBwbGljYWJsZSBpZiB0b29sYmFyIGlzIG5vdCBkaXNhYmxlZC5cbiAgICovXG4gIGhpZGVuYXZpZ2F0aW9uYnV0dG9ucz86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqICAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gY2hhbmdlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBsb2FkaW5nIGluZGljYXRvciAoZGVmYXVsdHMgdG8gbm8pLlxuICAgKi9cbiAgaGlkZXNwaW5uZXI/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoQW5kcm9pZCkgU2V0IHRvIHllcyB0byBoaWRlIHRoZSB1cmwgYmFyIG9uIHRoZSBsb2NhdGlvbiB0b29sYmFyLCBvbmx5IGhhcyBlZmZlY3QgaWYgdXNlciBoYXMgbG9jYXRpb24gc2V0IHRvIHllcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgbm8uICovXG4gIGhpZGV1cmxiYXI/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gb3BlbiB0aGUga2V5Ym9hcmQgd2hlbiBmb3JtIGVsZW1lbnRzIHJlY2VpdmUgZm9jdXMgdmlhIEphdmFTY3JpcHQncyBmb2N1cygpIGNhbGwgKGRlZmF1bHRzIHRvIHllcykuICovXG4gIGtleWJvYXJkRGlzcGxheVJlcXVpcmVzVXNlckFjdGlvbj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIChBbmRyb2lkKSBTZXQgdG8geWVzIHRvIHN3YXAgcG9zaXRpb25zIG9mIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbnMgYW5kIHRoZSBjbG9zZSBidXR0b24uIFNwZWNpZmljYWxseSwgbmF2aWdhdGlvbiBidXR0b25zIGdvIHRvIHRoZSBsZWZ0IGFuZCBjbG9zZSBidXR0b24gdG8gdGhlIHJpZ2h0LlxuICAgKiAoaU9TKSBTZXQgdG8geWVzIHRvIHN3YXAgcG9zaXRpb25zIG9mIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbnMgYW5kIHRoZSBjbG9zZSBidXR0b24uIFNwZWNpZmljYWxseSwgY2xvc2UgYnV0dG9uIGdvZXMgdG8gdGhlIHJpZ2h0IGFuZCBuYXZpZ2F0aW9uIGJ1dHRvbnMgdG8gdGhlIGxlZnQuXG4gICAqL1xuICBsZWZ0dG9yaWdodD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIFNldCB0byB5ZXMgb3Igbm8gdG8gdHVybiB0aGUgSW5BcHBCcm93c2VyJ3MgbG9jYXRpb24gYmFyIG9uIG9yIG9mZi4gKi9cbiAgbG9jYXRpb24/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAgU2V0IHRvIHllcyB0byBwcmV2ZW50IEhUTUw1IGF1ZGlvIG9yIHZpZGVvIGZyb20gYXV0b3BsYXlpbmcgKGRlZmF1bHRzIHRvIG5vKS5cbiAgICovXG4gIG1lZGlhUGxheWJhY2tSZXF1aXJlc1VzZXJBY3Rpb24/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAoQW5kcm9pZCkgU2V0IHRvIGEgdmFsaWQgaGV4IGNvbG9yIHN0cmluZywgZm9yIGV4YW1wbGU6ICMwMGZmMDAsIGFuZCBpdCB3aWxsIGNoYW5nZSB0aGUgY29sb3Igb2YgYm90aCBuYXZpZ2F0aW9uIGJ1dHRvbnMgZnJvbSBkZWZhdWx0LiBPbmx5IGhhcyBlZmZlY3QgaWYgdXNlciBoYXMgbG9jYXRpb24gc2V0IHRvIHllcyBhbmQgbm90IGhpZGVuYXZpZ2F0aW9uYnV0dG9ucyBzZXQgdG8geWVzLlxuICAgKiAoaU9TKSBTZXQgYXMgYSB2YWxpZCBoZXggY29sb3Igc3RyaW5nLCBmb3IgZXhhbXBsZTogIzAwZmYwMCwgdG8gY2hhbmdlIGZyb20gdGhlIGRlZmF1bHQgY29sb3IuIE9ubHkgYXBwbGljYWJsZSBpZiBuYXZpZ2F0aW9uIGJ1dHRvbnMgYXJlIHZpc2libGUuXG4gICAqL1xuICBuYXZpZ2F0aW9uYnV0dG9uY29sb3I/OiBzdHJpbmc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byBwYWdlc2hlZXQsIGZvcm1zaGVldCBvciBmdWxsc2NyZWVuIHRvIHNldCB0aGUgcHJlc2VudGF0aW9uIHN0eWxlIChkZWZhdWx0cyB0byBmdWxsc2NyZWVuKS4gKi9cbiAgcHJlc2VudGF0aW9uc3R5bGU/OiAncGFnZXNoZWV0JyB8ICdmb3Jtc2hlZXQnIHwgJ2Z1bGxzY3JlZW4nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIHllcyB0byBtYWtlIEluQXBwQnJvd3NlciBXZWJWaWV3IHRvIHBhdXNlL3Jlc3VtZSB3aXRoIHRoZSBhcHAgdG8gc3RvcCBiYWNrZ3JvdW5kIGF1ZGlvICh0aGlzIG1heSBiZSByZXF1aXJlZCB0byBhdm9pZCBHb29nbGUgUGxheSBpc3N1ZXMpICovXG4gIHNob3VsZFBhdXNlT25TdXNwZW5kPzogJ3llcycgfCAnbm8nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIHdhaXQgdW50aWwgYWxsIG5ldyB2aWV3IGNvbnRlbnQgaXMgcmVjZWl2ZWQgYmVmb3JlIGJlaW5nIHJlbmRlcmVkIChkZWZhdWx0cyB0byBubykuICovXG4gIHN1cHByZXNzZXNJbmNyZW1lbnRhbFJlbmRlcmluZz86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHllcyBvciBubyB0byB0dXJuIHRoZSB0b29sYmFyIG9uIG9yIG9mZiBmb3IgdGhlIEluQXBwQnJvd3NlciAoZGVmYXVsdHMgdG8geWVzKSAqL1xuICB0b29sYmFyPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGNvbG9yIHRoZSB0b29sYmFyIGZyb20gZGVmYXVsdC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuXG4gICAqIChpT1MpIFNldCBhcyBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCB0byBjaGFuZ2UgZnJvbSB0aGUgZGVmYXVsdCBjb2xvciBvZiB0aGUgdG9vbGJhci4gT25seSBhcHBsaWNhYmxlIGlmIHRvb2xiYXIgaXMgbm90IGRpc2FibGVkLlxuICAgKi9cbiAgdG9vbGJhcmNvbG9yPzogc3RyaW5nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8gdG9wIG9yIGJvdHRvbSAoZGVmYXVsdCBpcyBib3R0b20pLiBDYXVzZXMgdGhlIHRvb2xiYXIgdG8gYmUgYXQgdGhlIHRvcCBvciBib3R0b20gb2YgdGhlIHdpbmRvdy4gKi9cbiAgdG9vbGJhcnBvc2l0aW9uPzogJ3RvcCcgfCAnYm90dG9tJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHllcyBvciBubyB0byBtYWtlIHRoZSB0b29sYmFyIHRyYW5zbHVjZW50KHNlbWktdHJhbnNwYXJlbnQpIChkZWZhdWx0cyB0byB5ZXMpLiBPbmx5IGFwcGxpY2FibGUgaWYgdG9vbGJhciBpcyBub3QgZGlzYWJsZWQuICovXG4gIHRvb2xiYXJ0cmFuc2x1Y2VudD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIGZsaXBob3Jpem9udGFsLCBjcm9zc2Rpc3NvbHZlIG9yIGNvdmVydmVydGljYWwgdG8gc2V0IHRoZSB0cmFuc2l0aW9uIHN0eWxlIChkZWZhdWx0cyB0byBjb3ZlcnZlcnRpY2FsKS4gKi9cbiAgdHJhbnNpdGlvbnN0eWxlPzogJ2ZsaXBob3Jpem9udGFsJyB8ICdjcm9zc2Rpc3NvbHZlJyB8ICdjb3ZlcnZlcnRpY2FsJztcbiAgLyoqIChBbmRyb2lkIE9ubHkpIFNldHMgd2hldGhlciB0aGUgV2ViVmlldyBzaG91bGQgZW5hYmxlIHN1cHBvcnQgZm9yIHRoZSBcInZpZXdwb3J0XCIgSFRNTCBtZXRhIHRhZyBvciBzaG91bGQgdXNlIGEgd2lkZSB2aWV3cG9ydC4gV2hlbiB0aGUgdmFsdWUgb2YgdGhlIHNldHRpbmcgaXMgbm8sIHRoZSBsYXlvdXQgd2lkdGggaXMgYWx3YXlzIHNldCB0byB0aGUgd2lkdGggb2YgdGhlIFdlYlZpZXcgY29udHJvbCBpbiBkZXZpY2UtaW5kZXBlbmRlbnQgKENTUykgcGl4ZWxzLiBXaGVuIHRoZSB2YWx1ZSBpcyB5ZXMgYW5kIHRoZSBwYWdlIGNvbnRhaW5zIHRoZSB2aWV3cG9ydCBtZXRhIHRhZywgdGhlIHZhbHVlIG9mIHRoZSB3aWR0aCBzcGVjaWZpZWQgaW4gdGhlIHRhZyBpcyB1c2VkLiBJZiB0aGUgcGFnZSBkb2VzIG5vdCBjb250YWluIHRoZSB0YWcgb3IgZG9lcyBub3QgcHJvdmlkZSBhIHdpZHRoLCB0aGVuIGEgd2lkZSB2aWV3cG9ydCB3aWxsIGJlIHVzZWQuIChkZWZhdWx0cyB0byB5ZXMpLiAqL1xuICB1c2VXaWRlVmlld1BvcnQ/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgdG8gdXNlIFdLV2ViVmlldyBlbmdpbmUgZm9yIHRoZSBJbmFwcEJyb3dzZXIuIE9taXQgb3Igc2V0IHRvIG5vIChkZWZhdWx0KSB0byB1c2UgVUlXZWJWaWV3LiAqL1xuICB1c2V3a3dlYnZpZXc/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoQW5kcm9pZCBPbmx5KSBTZXQgdG8geWVzIHRvIHNob3cgQW5kcm9pZCBicm93c2VyJ3Mgem9vbSBjb250cm9scywgc2V0IHRvIG5vIHRvIGhpZGUgdGhlbS4gRGVmYXVsdCB2YWx1ZSBpcyB5ZXMuICovXG4gIHpvb20/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCB0eXBlIEluQXBwQnJvd3NlckV2ZW50VHlwZSA9XG4gIHwgJ2xvYWRzdGFydCdcbiAgfCAnbG9hZHN0b3AnXG4gIHwgJ2xvYWRlcnJvcidcbiAgfCAnZXhpdCdcbiAgfCAnYmVmb3JlbG9hZCdcbiAgfCAnbWVzc2FnZSdcbiAgfCAnY3VzdG9tc2NoZW1lJztcblxuZXhwb3J0IGludGVyZmFjZSBJbkFwcEJyb3dzZXJFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgLyoqIHRoZSBldmVudCBuYW1lICovXG4gIHR5cGU6IHN0cmluZztcbiAgLyoqIHRoZSBVUkwgdGhhdCB3YXMgbG9hZGVkLiAqL1xuICB1cmw6IHN0cmluZztcbiAgLyoqIHRoZSBlcnJvciBjb2RlLCBvbmx5IGluIHRoZSBjYXNlIG9mIGxvYWRlcnJvci4gKi9cbiAgY29kZTogbnVtYmVyO1xuICAvKiogdGhlIGVycm9yIG1lc3NhZ2UsIG9ubHkgaW4gdGhlIGNhc2Ugb2YgbG9hZGVycm9yLiAqL1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIC8qKiB0aGUgcG9zdE1lc3NhZ2UgZGF0YSwgb25seSBpbiB0aGUgY2FzZSBvZiBtZXNzYWdlLiAqL1xuICBkYXRhOiBhbnk7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgSW5BcHBCcm93c2VyT2JqZWN0IHtcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICAvKipcbiAgICogT3BlbnMgYSBVUkwgaW4gYSBuZXcgSW5BcHBCcm93c2VyIGluc3RhbmNlLCB0aGUgY3VycmVudCBicm93c2VyIGluc3RhbmNlLCBvciB0aGUgc3lzdGVtIGJyb3dzZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgICAgIFRoZSBVUkwgdG8gbG9hZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0YXJnZXQ9XCJzZWxmXCJdICBUaGUgdGFyZ2V0IGluIHdoaWNoIHRvIGxvYWQgdGhlIFVSTCwgYW4gb3B0aW9uYWwgcGFyYW1ldGVyIHRoYXQgZGVmYXVsdHMgdG8gX3NlbGYuXG4gICAqICAgICAgICAgICAgICAgICBfc2VsZjogT3BlbnMgaW4gdGhlIFdlYlZpZXcgaWYgdGhlIFVSTCBpcyBpbiB0aGUgd2hpdGUgbGlzdCwgb3RoZXJ3aXNlIGl0IG9wZW5zIGluIHRoZSBJbkFwcEJyb3dzZXIuXG4gICAqICAgICAgICAgICAgICAgICBfYmxhbms6IE9wZW5zIGluIHRoZSBJbkFwcEJyb3dzZXIuXG4gICAqICAgICAgICAgICAgICAgICBfc3lzdGVtOiBPcGVucyBpbiB0aGUgc3lzdGVtJ3Mgd2ViIGJyb3dzZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgSW5BcHBCcm93c2VyT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnMgZm9yIHRoZSBJbkFwcEJyb3dzZXIuIE9wdGlvbmFsLCBkZWZhdWx0aW5nIHRvOiBsb2NhdGlvbj15ZXMuXG4gICAqICAgICAgICAgICAgICAgICBUaGUgb3B0aW9ucyBzdHJpbmcgbXVzdCBub3QgY29udGFpbiBhbnkgYmxhbmsgc3BhY2UsIGFuZCBlYWNoIGZlYXR1cmUnc1xuICAgKiAgICAgICAgICAgICAgICAgbmFtZS92YWx1ZSBwYWlycyBtdXN0IGJlIHNlcGFyYXRlZCBieSBhIGNvbW1hLiBGZWF0dXJlIG5hbWVzIGFyZSBjYXNlIGluc2Vuc2l0aXZlLlxuICAgKi9cbiAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcsIHRhcmdldD86IHN0cmluZywgb3B0aW9ucz86IHN0cmluZyB8IEluQXBwQnJvd3Nlck9wdGlvbnMpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG9wdGlvbnMgPSBPYmplY3Qua2V5cyhvcHRpb25zKVxuICAgICAgICAgIC5tYXAoKGtleTogc3RyaW5nKSA9PiBgJHtrZXl9PSR7KG9wdGlvbnMgYXMgSW5BcHBCcm93c2VyT3B0aW9ucylba2V5XX1gKVxuICAgICAgICAgIC5qb2luKCcsJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gY29yZG92YS5JbkFwcEJyb3dzZXIub3Blbih1cmwsIHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCwgdGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05hdGl2ZTogSW5BcHBCcm93c2VyIGlzIG5vdCBpbnN0YWxsZWQgb3IgeW91IGFyZSBydW5uaW5nIG9uIGEgYnJvd3Nlci4gRmFsbGluZyBiYWNrIHRvIHdpbmRvdy5vcGVuLidcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIFwiYmVmb3JlbG9hZFwiIGV2ZW50IHRvIGNvbnRpbnVlIHRoZSBzY3JpcHRcbiAgICogQHBhcmFtIHN0clVybCB7U3RyaW5nfSBUaGUgVVJMIHRoZSBJbkFwcEJyb3dzZXIgc2hvdWxkIG5hdmlnYXRlIHRvLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgX2xvYWRBZnRlckJlZm9yZWxvYWQoc3RyVXJsOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIGFuIEluQXBwQnJvd3NlciB3aW5kb3cgdGhhdCB3YXMgb3BlbmVkIGhpZGRlbi4gQ2FsbGluZyB0aGlzIGhhcyBubyBlZmZlY3RcbiAgICogaWYgdGhlIEluQXBwQnJvd3NlciB3YXMgYWxyZWFkeSB2aXNpYmxlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2hvdygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGNsb3NlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSGlkZXMgYW4gSW5BcHBCcm93c2VyIHdpbmRvdyB0aGF0IGlzIGN1cnJlbnRseSBzaG93bi4gQ2FsbGluZyB0aGlzIGhhcyBubyBlZmZlY3RcbiAgICogaWYgdGhlIEluQXBwQnJvd3NlciB3YXMgYWxyZWFkeSBoaWRkZW4uXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBoaWRlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSW5qZWN0cyBKYXZhU2NyaXB0IGNvZGUgaW50byB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICogQHBhcmFtIHNjcmlwdCB7T2JqZWN0fSBEZXRhaWxzIG9mIHRoZSBzY3JpcHQgdG8gcnVuLCBzcGVjaWZ5aW5nIGVpdGhlciBhIGZpbGUgb3IgY29kZSBrZXkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZXhlY3V0ZVNjcmlwdChzY3JpcHQ6IHsgZmlsZT86IHN0cmluZzsgY29kZT86IHN0cmluZyB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW5qZWN0cyBDU1MgaW50byB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICogQHBhcmFtIGNzcyB7T2JqZWN0fSBEZXRhaWxzIG9mIHRoZSBzY3JpcHQgdG8gcnVuLCBzcGVjaWZ5aW5nIGVpdGhlciBhIGZpbGUgb3IgY29kZSBrZXkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgaW5zZXJ0Q1NTKGNzczogeyBmaWxlPzogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1ldGhvZCB0aGF0IGFsbG93cyB5b3UgdG8gbGlzdGVuIHRvIGV2ZW50cyBoYXBwZW5pbmcgaW4gdGhlIGJyb3dzZXIuXG4gICAqIEBwYXJhbSBldmVudCB7SW5BcHBCcm93c2VyRXZlbnRUeXBlfSBOYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD59IFJldHVybnMgYmFjayBhbiBvYnNlcnZhYmxlIHRoYXQgd2lsbCBsaXN0ZW4gdG8gdGhlIGV2ZW50IG9uIHN1YnNjcmliZSwgYW5kIHdpbGwgc3RvcCBsaXN0ZW5pbmcgdG8gdGhlIGV2ZW50IG9uIHVuc3Vic2NyaWJlLlxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBvbihldmVudDogSW5BcHBCcm93c2VyRXZlbnRUeXBlKTogT2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD4oKG9ic2VydmVyOiBPYnNlcnZlcjxJbkFwcEJyb3dzZXJFdmVudD4pID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcikpO1xuICAgICAgcmV0dXJuICgpID0+IHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcikpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgbWV0aG9kIHRoYXQgYWxsb3dzIHlvdSB0byBsaXN0ZW4gdG8gZXZlbnRzIGhhcHBlbmluZyBpbiB0aGUgYnJvd3Nlci5cbiAgICogQHBhcmFtIGV2ZW50IHtzdHJpbmd9IE5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEluQXBwQnJvd3NlckV2ZW50Pn0gUmV0dXJucyBiYWNrIGFuIG9ic2VydmFibGUgdGhhdCB3aWxsIGxpc3RlbiB0byB0aGUgZXZlbnQgb24gc3Vic2NyaWJlLCBhbmQgd2lsbCBzdG9wIGxpc3RlbmluZyB0byB0aGUgZXZlbnQgb24gdW5zdWJzY3JpYmUuXG4gICAqL1xuICAvKiBASW5zdGFuY2VDaGVjaygpXG4gIG9uKGV2ZW50OiBzdHJpbmcpOiBPYnNlcnZhYmxlPEluQXBwQnJvd3NlckV2ZW50PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPEluQXBwQnJvd3NlckV2ZW50Pigob2JzZXJ2ZXI6IE9ic2VydmVyPEluQXBwQnJvd3NlckV2ZW50PikgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKSk7XG4gICAgICByZXR1cm4gKCkgPT4gdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKSk7XG4gICAgfSk7XG4gIH0gKi9cbn1cblxuLyoqXG4gKiBAbmFtZSBJbiBBcHAgQnJvd3NlclxuICogQHByZW1pZXIgaW5hcHBicm93c2VyXG4gKiBAZGVzY3JpcHRpb24gTGF1bmNoZXMgaW4gYXBwIEJyb3dzZXJcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW5BcHBCcm93c2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pbi1hcHAtYnJvd3Nlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaWFiOiBJbkFwcEJyb3dzZXIpIHsgfVxuICpcbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogY29uc3QgYnJvd3NlciA9IHRoaXMuaWFiLmNyZWF0ZSgnaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vJyk7XG4gKlxuICogYnJvd3Nlci5leGVjdXRlU2NyaXB0KC4uLik7XG4gKlxuICogYnJvd3Nlci5pbnNlcnRDU1MoLi4uKTtcbiAqIGJyb3dzZXIub24oJ2xvYWRzdG9wJykuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAqICAgIGJyb3dzZXIuaW5zZXJ0Q1NTKHsgY29kZTogXCJib2R5e2NvbG9yOiByZWQ7XCIgfSk7XG4gKiB9KTtcbiAqXG4gKiBicm93c2VyLmNsb3NlKCk7XG4gKlxuICogYGBgXG4gKiBAY2xhc3Nlc1xuICogSW5BcHBCcm93c2VyT2JqZWN0XG4gKiBAaW50ZXJmYWNlc1xuICogSW5BcHBCcm93c2VyRXZlbnRcbiAqIEluQXBwQnJvd3Nlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbkFwcEJyb3dzZXIgUGFuJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW5hcHBicm93c2VyLXBhbicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEuSW5BcHBCcm93c2VyJyxcbiAgLy8gcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4taW5hcHBicm93c2VyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5BcHBCcm93c2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogT3BlbnMgYSBVUkwgaW4gYSBuZXcgSW5BcHBCcm93c2VyIGluc3RhbmNlLCB0aGUgY3VycmVudCBicm93c2VyIGluc3RhbmNlLCBvciB0aGUgc3lzdGVtIGJyb3dzZXIuXG4gICAqIEBwYXJhbSAgdXJsIHtzdHJpbmd9ICAgICBUaGUgVVJMIHRvIGxvYWQuXG4gICAqIEBwYXJhbSAgdGFyZ2V0IHtzdHJpbmd9ICBUaGUgdGFyZ2V0IGluIHdoaWNoIHRvIGxvYWQgdGhlIFVSTCwgYW4gb3B0aW9uYWwgcGFyYW1ldGVyIHRoYXQgZGVmYXVsdHMgdG8gX3NlbGYuXG4gICAqIEBwYXJhbSAgb3B0aW9ucyB7c3RyaW5nfSBPcHRpb25zIGZvciB0aGUgSW5BcHBCcm93c2VyLiBPcHRpb25hbCwgZGVmYXVsdGluZyB0bzogbG9jYXRpb249eWVzLlxuICAgKiAgICAgICAgICAgICAgICAgVGhlIG9wdGlvbnMgc3RyaW5nIG11c3Qgbm90IGNvbnRhaW4gYW55IGJsYW5rIHNwYWNlLCBhbmQgZWFjaCBmZWF0dXJlJ3NcbiAgICogICAgICAgICAgICAgICAgIG5hbWUvdmFsdWUgcGFpcnMgbXVzdCBiZSBzZXBhcmF0ZWQgYnkgYSBjb21tYS4gRmVhdHVyZSBuYW1lcyBhcmUgY2FzZSBpbnNlbnNpdGl2ZS5cbiAgICogQHJldHVybnMge0luQXBwQnJvd3Nlck9iamVjdH1cbiAgICovXG4gIGNyZWF0ZSh1cmw6IHN0cmluZywgdGFyZ2V0Pzogc3RyaW5nLCBvcHRpb25zPzogc3RyaW5nIHwgSW5BcHBCcm93c2VyT3B0aW9ucyk6IEluQXBwQnJvd3Nlck9iamVjdCB7XG4gICAgcmV0dXJuIG5ldyBJbkFwcEJyb3dzZXJPYmplY3QodXJsLCB0YXJnZXQsIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=
