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
import { Observable } from 'rxjs';
var FirebaseAuthenticationOriginal = /** @class */ (function (_super) {
    __extends(FirebaseAuthenticationOriginal, _super);
    function FirebaseAuthenticationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseAuthenticationOriginal.prototype.getIdToken = function (forceRefresh) { return cordova(this, "getIdToken", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.createUserWithEmailAndPassword = function (email, password) { return cordova(this, "createUserWithEmailAndPassword", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.sendEmailVerification = function () { return cordova(this, "sendEmailVerification", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.sendPasswordResetEmail = function (email) { return cordova(this, "sendPasswordResetEmail", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.signInWithEmailAndPassword = function (email, password) { return cordova(this, "signInWithEmailAndPassword", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.verifyPhoneNumber = function (phoneNumber, timeout) { return cordova(this, "verifyPhoneNumber", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.signInWithVerificationId = function (verificationId, smsCode) { return cordova(this, "signInWithVerificationId", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.signInAnonymously = function () { return cordova(this, "signInAnonymously", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.signInWithGoogle = function (idToken, accessToken) { return cordova(this, "signInWithGoogle", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.signInWithApple = function (identityToken, rawNonce) { return cordova(this, "signInWithApple", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.signInWithFacebook = function (accessToken) { return cordova(this, "signInWithFacebook", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.signInWithTwitter = function (token, secret) { return cordova(this, "signInWithTwitter", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.onAuthStateChanged = function () { return cordova(this, "onAuthStateChanged", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    FirebaseAuthenticationOriginal.prototype.setLanguageCode = function (languageCode) { return cordova(this, "setLanguageCode", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.useAppLanguage = function () { return cordova(this, "useAppLanguage", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.signOut = function () { return cordova(this, "signOut", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.pluginName = "FirebaseAuthentication";
    FirebaseAuthenticationOriginal.plugin = "cordova-plugin-firebase-authentication";
    FirebaseAuthenticationOriginal.pluginRef = "cordova.plugins.firebase.auth";
    FirebaseAuthenticationOriginal.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-authentication";
    FirebaseAuthenticationOriginal.install = "ionic cordova plugin add cordova-plugin-firebase-authentication --variable FIREBASE_AUTH_VERSION=version";
    FirebaseAuthenticationOriginal.installVariables = ["FIREBASE_AUTH_VERSION"];
    FirebaseAuthenticationOriginal.platforms = ["Android", "iOS"];
    return FirebaseAuthenticationOriginal;
}(IonicNativePlugin));
var FirebaseAuthentication = new FirebaseAuthenticationOriginal();
export { FirebaseAuthentication };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpcmViYXNlLWF1dGhlbnRpY2F0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBaUNVLDBDQUFpQjs7OztJQU8zRCwyQ0FBVSxhQUFDLFlBQXFCO0lBVWhDLCtEQUE4QixhQUFDLEtBQWEsRUFBRSxRQUFnQjtJQVE5RCxzREFBcUI7SUFVckIsdURBQXNCLGFBQUMsS0FBYTtJQVVwQywyREFBMEIsYUFBQyxLQUFhLEVBQUUsUUFBZ0I7SUFnQjFELGtEQUFpQixhQUFDLFdBQW1CLEVBQUUsT0FBZTtJQVV0RCx5REFBd0IsYUFBQyxjQUFzQixFQUFFLE9BQWU7SUFRaEUsa0RBQWlCO0lBVWpCLGlEQUFnQixhQUFDLE9BQWUsRUFBRSxXQUFtQjtJQVVyRCxnREFBZSxhQUFDLGFBQXFCLEVBQUUsUUFBaUI7SUFTeEQsbURBQWtCLGFBQUMsV0FBbUI7SUFVdEMsa0RBQWlCLGFBQUMsS0FBYSxFQUFFLE1BQWM7SUFXL0MsbURBQWtCO0lBU2xCLGdEQUFlLGFBQUMsWUFBb0I7SUFRcEMsK0NBQWM7SUFRZCx3Q0FBTzs7Ozs7Ozs7aUNBN0xUO0VBbUM0QyxpQkFBaUI7U0FBaEQsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgRmlyZWJhc2UgQXV0aGVudGljYXRpb25cbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBwbHVnaW4gZm9yIEZpcmViYXNlIEF1dGhlbnRpY2F0aW9uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGaXJlYmFzZUF1dGhlbnRpY2F0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maXJlYmFzZS1hdXRoZW50aWNhdGlvbi9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmViYXNlQXV0aGVudGljYXRpb246IEZpcmViYXNlQXV0aGVudGljYXRpb24pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmZpcmViYXNlQXV0aGVudGljYXRpb24uY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKCd0ZXN0QGdtYWlsLmNvbScsICcxMjMnKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpcmViYXNlQXV0aGVudGljYXRpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1hdXRoZW50aWNhdGlvbicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5maXJlYmFzZS5hdXRoJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaGVtZXJpc3VrL2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uJyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1hdXRoZW50aWNhdGlvbiAtLXZhcmlhYmxlIEZJUkVCQVNFX0FVVEhfVkVSU0lPTj12ZXJzaW9uJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydGSVJFQkFTRV9BVVRIX1ZFUlNJT04nXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpcmViYXNlQXV0aGVudGljYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgSldUIHRva2VuIHVzZWQgdG8gaWRlbnRpZnkgdGhlIHVzZXIgdG8gYSBGaXJlYmFzZSBzZXJ2aWNlLlxuICAgKiBAcGFyYW0gZm9yY2VSZWZyZXNoIHtib29sZWFufSBGb3JjZSBSZWZyZXNoXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyB0aGUgaWQgdG9rZW5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZFRva2VuKGZvcmNlUmVmcmVzaDogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIGNyZWF0ZSBhIG5ldyB1c2VyIGFjY291bnQgd2l0aCB0aGUgZ2l2ZW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmQuXG4gICAqIEBwYXJhbSBlbWFpbCBFbWFpbFxuICAgKiBAcGFyYW0gcGFzc3dvcmQgUGFzc3dvcmRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYXRlcyBlbWFpbCB2ZXJpZmljYXRpb24gZm9yIHRoZSBjdXJyZW50IHVzZXIuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2VuZEVtYWlsVmVyaWZpY2F0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIHRoZSBGaXJlYmFzZSBBdXRoZW50aWNhdGlvbiBiYWNrZW5kIHRvIHNlbmQgYSBwYXNzd29yZC1yZXNldCBlbWFpbCB0byB0aGUgZ2l2ZW4gZW1haWwgYWRkcmVzcyxcbiAgICogd2hpY2ggbXVzdCBjb3JyZXNwb25kIHRvIGFuIGV4aXN0aW5nIHVzZXIgb2YgeW91ciBhcHAuXG4gICAqIEBwYXJhbSBlbWFpbCBFbWFpbFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzeW5jaHJvbm91c2x5IHNpZ25zIGluIHVzaW5nIGFuIGVtYWlsIGFuZCBwYXNzd29yZC5cbiAgICogQHBhcmFtIGVtYWlsIEVtYWlsXG4gICAqIEBwYXJhbSBwYXNzd29yZCBQYXNzd29yZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIHBob25lIG51bWJlciB2ZXJpZmljYXRpb24gcHJvY2VzcyBmb3IgdGhlIGdpdmVuIHBob25lIG51bWJlci5cbiAgICogTk9URTogQW5kcm9pZCBzdXBwb3J0cyBhdXRvLXZlcmlmeSBhbmQgaW5zdGFudCBkZXZpY2UgdmVyaWZpY2F0aW9uLlxuICAgKiBUaGVyZWZvcmUgaW4gdGhhdCBjYXNlcyBpdCBkb2Vzbid0IG1ha2Ugc2Vuc2UgdG8gYXNrIGZvciBzbXMgY29kZS5cbiAgICogSXQncyByZWNvbW1lbmRlZCB0byByZWdpc3RlciBvbkF1dGhTdGF0ZUNoYW5nZWQgY2FsbGJhY2sgdG8gYmUgbm90aWZpZWQgb24gYXV0byBzaWduLWluLlxuICAgKiB0aW1lb3V0IFttaWxsaXNlY29uZHNdIGlzIHRoZSBtYXhpbXVtIGFtb3VudCBvZiB0aW1lIHlvdSBhcmUgd2lsbGluZyB0byB3YWl0IGZvciBTTVMgYXV0by1yZXRyaWV2YWxcbiAgICogdG8gYmUgY29tcGxldGVkIGJ5IHRoZSBsaWJyYXJ5LiBNYXhpbXVtIGFsbG93ZWQgdmFsdWUgaXMgMiBtaW51dGVzLiBVc2UgMCB0byBkaXNhYmxlIFNNUy1hdXRvLXJldHJpZXZhbC5cbiAgICogSWYgeW91IHNwZWNpZnkgYSBwb3NpdGl2ZSB2YWx1ZSBsZXNzIHRoYW4gMzAgc2Vjb25kcywgbGlicmFyeSB3aWxsIGRlZmF1bHQgdG8gMzAgc2Vjb25kcy5cbiAgICogQHBhcmFtIHBob25lTnVtYmVyIFBob25lIG51bWJlclxuICAgKiBAcGFyYW0gdGltZW91dCB7bnVtYmVyfSBUaW1lb3V0XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdmVyaWZ5UGhvbmVOdW1iZXIocGhvbmVOdW1iZXI6IHN0cmluZywgdGltZW91dDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQXN5bmNocm9ub3VzbHkgc2lnbnMgaW4gdXNpbmcgdmVyaWZpY2F0aW9uSWQgYW5kIDYtZGlnaXQgU01TIGNvZGUuXG4gICAqIEBwYXJhbSB2ZXJpZmljYXRpb25JZCBWZXJpZmljYXRpb24gSURcbiAgICogQHBhcmFtIHNtc0NvZGUgU01TIGNvZGVcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzaWduSW5XaXRoVmVyaWZpY2F0aW9uSWQodmVyaWZpY2F0aW9uSWQ6IHN0cmluZywgc21zQ29kZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuZCB1c2UgdGVtcG9yYXJ5IGFub255bW91cyBhY2NvdW50IHRvIGF1dGhlbnRpY2F0ZSB3aXRoIEZpcmViYXNlLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNpZ25JbkFub255bW91c2x5KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZXMgR29vZ2xlJ3MgaWRUb2tlbiBhbmQgYWNjZXNzVG9rZW4gdG8gc2lnbi1pbiBpbnRvIGZpcmViYXNlIGFjY291bnQuIEluIG9yZGVyIHRvIHJldHJpZXZlIHRob3NlIHRva2VucyBmb2xsb3cgaW5zdHJ1Y3Rpb25zIGZvciBBbmRyb2lkIGFuZCBpT1NcbiAgICogQHBhcmFtIGlkVG9rZW4gSUQgVG9rZW5cbiAgICogQHBhcmFtIGFjY2Vzc1Rva2VuIEFjY2VzcyBUb2tlblxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNpZ25JbldpdGhHb29nbGUoaWRUb2tlbjogc3RyaW5nLCBhY2Nlc3NUb2tlbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVXNlcyBBcHBsZXMncyBpZFRva2VuIGFuZCByYXdOb25jZSAob3B0aW9uYWwpIHRvIHNpZ24taW4gaW50byBmaXJlYmFzZSBhY2NvdW50LiBJbiBvcmRlciB0byByZXRyaWV2ZSB0aG9zZSB0b2tlbnMgZm9sbG93IGluc3RydWN0aW9ucyBmb3IgQW5kcm9pZCBhbmQgaU9TXG4gICAqIEBwYXJhbSBpZFRva2VuIElEIFRva2VuXG4gICAqIEBwYXJhbSByYXdOb25jZSBBY2Nlc3MgVG9rZW5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzaWduSW5XaXRoQXBwbGUoaWRlbnRpdHlUb2tlbjogc3RyaW5nLCByYXdOb25jZT86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZXMgRmFjZWJvb2sncyBhY2Nlc3NUb2tlbiB0byBzaWduLWluIGludG8gZmlyZWJhc2UgYWNjb3VudC4gSW4gb3JkZXIgdG8gcmV0cmlldmUgdGhvc2UgdG9rZW5zIGZvbGxvdyBpbnN0cnVjdGlvbnMgZm9yIEFuZHJvaWQgYW5kIGlPUy5cbiAgICogQHBhcmFtIGFjY2Vzc1Rva2VuIEFjY2VzcyBUb2tlblxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNpZ25JbldpdGhGYWNlYm9vayhhY2Nlc3NUb2tlbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVXNlcyBUd2l0dGVyJ3MgdG9rZW4gYW5kIHNlY3JldCB0byBzaWduLWluIGludG8gZmlyZWJhc2UgYWNjb3VudC4gSW4gb3JkZXIgdG8gcmV0cmlldmUgdGhvc2UgdG9rZW5zIGZvbGxvdyBpbnN0cnVjdGlvbnMgZm9yIEFuZHJvaWQgYW5kIGlPUy5cbiAgICogQHBhcmFtIHRva2VuIFRva2VuXG4gICAqIEBwYXJhbSBzZWNyZXQgU2VjcmV0XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2lnbkluV2l0aFR3aXR0ZXIodG9rZW46IHN0cmluZywgc2VjcmV0OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBibG9jayBhcyBhbiBhdXRoIHN0YXRlIGRpZCBjaGFuZ2UgbGlzdGVuZXIuIFRvIGJlIGludm9rZWQgd2hlbjpcbiAgICogICAgLSBUaGUgYmxvY2sgaXMgcmVnaXN0ZXJlZCBhcyBhIGxpc3RlbmVyLFxuICAgKiAgICAtIEEgdXNlciB3aXRoIGEgZGlmZmVyZW50IFVJRCBmcm9tIHRoZSBjdXJyZW50IHVzZXIgaGFzIHNpZ25lZCBpbiwgb3JcbiAgICogICAgLSBUaGUgY3VycmVudCB1c2VyIGhhcyBzaWduZWQgb3V0LlxuICAgKi9cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlLCBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgb25BdXRoU3RhdGVDaGFuZ2VkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCdzIHRoZSBjdXJyZW50IHVzZXIgbGFuZ3VhZ2UgY29kZS4gVGhlIHN0cmluZyB1c2VkIHRvIHNldCB0aGlzIHByb3BlcnR5IG11c3QgYmUgYSBsYW5ndWFnZSBjb2RlIHRoYXQgZm9sbG93cyBCQ1AgNDcuXG4gICAqIEBwYXJhbSBsYW5ndWFnZUNvZGUgTGFuZ3VhZ2UgQ29kZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldExhbmd1YWdlQ29kZShsYW5ndWFnZUNvZGU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgbGFuZ3VhZ2VDb2RlIHRvIHRoZSBhcHDigJlzIGN1cnJlbnQgbGFuZ3VhZ2UuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdXNlQXBwTGFuZ3VhZ2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2lnbnMgb3V0IHRoZSBjdXJyZW50IHVzZXIgYW5kIGNsZWFycyBpdCBmcm9tIHRoZSBkaXNrIGNhY2hlLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNpZ25PdXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==