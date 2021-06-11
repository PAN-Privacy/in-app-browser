import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var FirebaseAuthentication = /** @class */ (function (_super) {
    __extends(FirebaseAuthentication, _super);
    function FirebaseAuthentication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseAuthentication.prototype.getIdToken = function (forceRefresh) { return cordova(this, "getIdToken", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.createUserWithEmailAndPassword = function (email, password) { return cordova(this, "createUserWithEmailAndPassword", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.sendEmailVerification = function () { return cordova(this, "sendEmailVerification", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.sendPasswordResetEmail = function (email) { return cordova(this, "sendPasswordResetEmail", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signInWithEmailAndPassword = function (email, password) { return cordova(this, "signInWithEmailAndPassword", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.verifyPhoneNumber = function (phoneNumber, timeout) { return cordova(this, "verifyPhoneNumber", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signInWithVerificationId = function (verificationId, smsCode) { return cordova(this, "signInWithVerificationId", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signInAnonymously = function () { return cordova(this, "signInAnonymously", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signInWithGoogle = function (idToken, accessToken) { return cordova(this, "signInWithGoogle", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signInWithApple = function (identityToken, rawNonce) { return cordova(this, "signInWithApple", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signInWithFacebook = function (accessToken) { return cordova(this, "signInWithFacebook", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signInWithTwitter = function (token, secret) { return cordova(this, "signInWithTwitter", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.onAuthStateChanged = function () { return cordova(this, "onAuthStateChanged", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    FirebaseAuthentication.prototype.setLanguageCode = function (languageCode) { return cordova(this, "setLanguageCode", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.useAppLanguage = function () { return cordova(this, "useAppLanguage", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signOut = function () { return cordova(this, "signOut", { "sync": true }, arguments); };
    FirebaseAuthentication.pluginName = "FirebaseAuthentication";
    FirebaseAuthentication.plugin = "cordova-plugin-firebase-authentication";
    FirebaseAuthentication.pluginRef = "cordova.plugins.firebase.auth";
    FirebaseAuthentication.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-authentication";
    FirebaseAuthentication.install = "ionic cordova plugin add cordova-plugin-firebase-authentication --variable FIREBASE_AUTH_VERSION=version";
    FirebaseAuthentication.installVariables = ["FIREBASE_AUTH_VERSION"];
    FirebaseAuthentication.platforms = ["Android", "iOS"];
    FirebaseAuthentication.decorators = [
        { type: Injectable }
    ];
    return FirebaseAuthentication;
}(IonicNativePlugin));
export { FirebaseAuthentication };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpcmViYXNlLWF1dGhlbnRpY2F0aW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBaUNVLDBDQUFpQjs7OztJQU8zRCwyQ0FBVSxhQUFDLFlBQXFCO0lBVWhDLCtEQUE4QixhQUFDLEtBQWEsRUFBRSxRQUFnQjtJQVE5RCxzREFBcUI7SUFVckIsdURBQXNCLGFBQUMsS0FBYTtJQVVwQywyREFBMEIsYUFBQyxLQUFhLEVBQUUsUUFBZ0I7SUFnQjFELGtEQUFpQixhQUFDLFdBQW1CLEVBQUUsT0FBZTtJQVV0RCx5REFBd0IsYUFBQyxjQUFzQixFQUFFLE9BQWU7SUFRaEUsa0RBQWlCO0lBVWpCLGlEQUFnQixhQUFDLE9BQWUsRUFBRSxXQUFtQjtJQVVyRCxnREFBZSxhQUFDLGFBQXFCLEVBQUUsUUFBaUI7SUFTeEQsbURBQWtCLGFBQUMsV0FBbUI7SUFVdEMsa0RBQWlCLGFBQUMsS0FBYSxFQUFFLE1BQWM7SUFXL0MsbURBQWtCO0lBU2xCLGdEQUFlLGFBQUMsWUFBb0I7SUFRcEMsK0NBQWM7SUFRZCx3Q0FBTzs7Ozs7Ozs7O2dCQTNKUixVQUFVOztpQ0FsQ1g7RUFtQzRDLGlCQUFpQjtTQUFoRCxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBGaXJlYmFzZSBBdXRoZW50aWNhdGlvblxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIHBsdWdpbiBmb3IgRmlyZWJhc2UgQXV0aGVudGljYXRpb25cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpcmViYXNlQXV0aGVudGljYXRpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZpcmViYXNlLWF1dGhlbnRpY2F0aW9uL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2VBdXRoZW50aWNhdGlvbjogRmlyZWJhc2VBdXRoZW50aWNhdGlvbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuZmlyZWJhc2VBdXRoZW50aWNhdGlvbi5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoJ3Rlc3RAZ21haWwuY29tJywgJzEyMycpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlyZWJhc2VBdXRoZW50aWNhdGlvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmZpcmViYXNlLmF1dGgnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NoZW1lcmlzdWsvY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtYXV0aGVudGljYXRpb24nLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uIC0tdmFyaWFibGUgRklSRUJBU0VfQVVUSF9WRVJTSU9OPXZlcnNpb24nLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0ZJUkVCQVNFX0FVVEhfVkVSU0lPTiddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VBdXRoZW50aWNhdGlvbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBKV1QgdG9rZW4gdXNlZCB0byBpZGVudGlmeSB0aGUgdXNlciB0byBhIEZpcmViYXNlIHNlcnZpY2UuXG4gICAqIEBwYXJhbSBmb3JjZVJlZnJlc2gge2Jvb2xlYW59IEZvcmNlIFJlZnJlc2hcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIHRoZSBpZCB0b2tlblxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldElkVG9rZW4oZm9yY2VSZWZyZXNoOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJpZXMgdG8gY3JlYXRlIGEgbmV3IHVzZXIgYWNjb3VudCB3aXRoIHRoZSBnaXZlbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZC5cbiAgICogQHBhcmFtIGVtYWlsIEVtYWlsXG4gICAqIEBwYXJhbSBwYXNzd29yZCBQYXNzd29yZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhdGVzIGVtYWlsIHZlcmlmaWNhdGlvbiBmb3IgdGhlIGN1cnJlbnQgdXNlci5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZW5kRW1haWxWZXJpZmljYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcnMgdGhlIEZpcmViYXNlIEF1dGhlbnRpY2F0aW9uIGJhY2tlbmQgdG8gc2VuZCBhIHBhc3N3b3JkLXJlc2V0IGVtYWlsIHRvIHRoZSBnaXZlbiBlbWFpbCBhZGRyZXNzLFxuICAgKiB3aGljaCBtdXN0IGNvcnJlc3BvbmQgdG8gYW4gZXhpc3RpbmcgdXNlciBvZiB5b3VyIGFwcC5cbiAgICogQHBhcmFtIGVtYWlsIEVtYWlsXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQXN5bmNocm9ub3VzbHkgc2lnbnMgaW4gdXNpbmcgYW4gZW1haWwgYW5kIHBhc3N3b3JkLlxuICAgKiBAcGFyYW0gZW1haWwgRW1haWxcbiAgICogQHBhcmFtIHBhc3N3b3JkIFBhc3N3b3JkXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgcGhvbmUgbnVtYmVyIHZlcmlmaWNhdGlvbiBwcm9jZXNzIGZvciB0aGUgZ2l2ZW4gcGhvbmUgbnVtYmVyLlxuICAgKiBOT1RFOiBBbmRyb2lkIHN1cHBvcnRzIGF1dG8tdmVyaWZ5IGFuZCBpbnN0YW50IGRldmljZSB2ZXJpZmljYXRpb24uXG4gICAqIFRoZXJlZm9yZSBpbiB0aGF0IGNhc2VzIGl0IGRvZXNuJ3QgbWFrZSBzZW5zZSB0byBhc2sgZm9yIHNtcyBjb2RlLlxuICAgKiBJdCdzIHJlY29tbWVuZGVkIHRvIHJlZ2lzdGVyIG9uQXV0aFN0YXRlQ2hhbmdlZCBjYWxsYmFjayB0byBiZSBub3RpZmllZCBvbiBhdXRvIHNpZ24taW4uXG4gICAqIHRpbWVvdXQgW21pbGxpc2Vjb25kc10gaXMgdGhlIG1heGltdW0gYW1vdW50IG9mIHRpbWUgeW91IGFyZSB3aWxsaW5nIHRvIHdhaXQgZm9yIFNNUyBhdXRvLXJldHJpZXZhbFxuICAgKiB0byBiZSBjb21wbGV0ZWQgYnkgdGhlIGxpYnJhcnkuIE1heGltdW0gYWxsb3dlZCB2YWx1ZSBpcyAyIG1pbnV0ZXMuIFVzZSAwIHRvIGRpc2FibGUgU01TLWF1dG8tcmV0cmlldmFsLlxuICAgKiBJZiB5b3Ugc3BlY2lmeSBhIHBvc2l0aXZlIHZhbHVlIGxlc3MgdGhhbiAzMCBzZWNvbmRzLCBsaWJyYXJ5IHdpbGwgZGVmYXVsdCB0byAzMCBzZWNvbmRzLlxuICAgKiBAcGFyYW0gcGhvbmVOdW1iZXIgUGhvbmUgbnVtYmVyXG4gICAqIEBwYXJhbSB0aW1lb3V0IHtudW1iZXJ9IFRpbWVvdXRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB2ZXJpZnlQaG9uZU51bWJlcihwaG9uZU51bWJlcjogc3RyaW5nLCB0aW1lb3V0OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3luY2hyb25vdXNseSBzaWducyBpbiB1c2luZyB2ZXJpZmljYXRpb25JZCBhbmQgNi1kaWdpdCBTTVMgY29kZS5cbiAgICogQHBhcmFtIHZlcmlmaWNhdGlvbklkIFZlcmlmaWNhdGlvbiBJRFxuICAgKiBAcGFyYW0gc21zQ29kZSBTTVMgY29kZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNpZ25JbldpdGhWZXJpZmljYXRpb25JZCh2ZXJpZmljYXRpb25JZDogc3RyaW5nLCBzbXNDb2RlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIHVzZSB0ZW1wb3JhcnkgYW5vbnltb3VzIGFjY291bnQgdG8gYXV0aGVudGljYXRlIHdpdGggRmlyZWJhc2UuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2lnbkluQW5vbnltb3VzbHkoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVXNlcyBHb29nbGUncyBpZFRva2VuIGFuZCBhY2Nlc3NUb2tlbiB0byBzaWduLWluIGludG8gZmlyZWJhc2UgYWNjb3VudC4gSW4gb3JkZXIgdG8gcmV0cmlldmUgdGhvc2UgdG9rZW5zIGZvbGxvdyBpbnN0cnVjdGlvbnMgZm9yIEFuZHJvaWQgYW5kIGlPU1xuICAgKiBAcGFyYW0gaWRUb2tlbiBJRCBUb2tlblxuICAgKiBAcGFyYW0gYWNjZXNzVG9rZW4gQWNjZXNzIFRva2VuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2lnbkluV2l0aEdvb2dsZShpZFRva2VuOiBzdHJpbmcsIGFjY2Vzc1Rva2VuOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VzIEFwcGxlcydzIGlkVG9rZW4gYW5kIHJhd05vbmNlIChvcHRpb25hbCkgdG8gc2lnbi1pbiBpbnRvIGZpcmViYXNlIGFjY291bnQuIEluIG9yZGVyIHRvIHJldHJpZXZlIHRob3NlIHRva2VucyBmb2xsb3cgaW5zdHJ1Y3Rpb25zIGZvciBBbmRyb2lkIGFuZCBpT1NcbiAgICogQHBhcmFtIGlkVG9rZW4gSUQgVG9rZW5cbiAgICogQHBhcmFtIHJhd05vbmNlIEFjY2VzcyBUb2tlblxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNpZ25JbldpdGhBcHBsZShpZGVudGl0eVRva2VuOiBzdHJpbmcsIHJhd05vbmNlPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVXNlcyBGYWNlYm9vaydzIGFjY2Vzc1Rva2VuIHRvIHNpZ24taW4gaW50byBmaXJlYmFzZSBhY2NvdW50LiBJbiBvcmRlciB0byByZXRyaWV2ZSB0aG9zZSB0b2tlbnMgZm9sbG93IGluc3RydWN0aW9ucyBmb3IgQW5kcm9pZCBhbmQgaU9TLlxuICAgKiBAcGFyYW0gYWNjZXNzVG9rZW4gQWNjZXNzIFRva2VuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2lnbkluV2l0aEZhY2Vib29rKGFjY2Vzc1Rva2VuOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VzIFR3aXR0ZXIncyB0b2tlbiBhbmQgc2VjcmV0IHRvIHNpZ24taW4gaW50byBmaXJlYmFzZSBhY2NvdW50LiBJbiBvcmRlciB0byByZXRyaWV2ZSB0aG9zZSB0b2tlbnMgZm9sbG93IGluc3RydWN0aW9ucyBmb3IgQW5kcm9pZCBhbmQgaU9TLlxuICAgKiBAcGFyYW0gdG9rZW4gVG9rZW5cbiAgICogQHBhcmFtIHNlY3JldCBTZWNyZXRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzaWduSW5XaXRoVHdpdHRlcih0b2tlbjogc3RyaW5nLCBzZWNyZXQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGJsb2NrIGFzIGFuIGF1dGggc3RhdGUgZGlkIGNoYW5nZSBsaXN0ZW5lci4gVG8gYmUgaW52b2tlZCB3aGVuOlxuICAgKiAgICAtIFRoZSBibG9jayBpcyByZWdpc3RlcmVkIGFzIGEgbGlzdGVuZXIsXG4gICAqICAgIC0gQSB1c2VyIHdpdGggYSBkaWZmZXJlbnQgVUlEIGZyb20gdGhlIGN1cnJlbnQgdXNlciBoYXMgc2lnbmVkIGluLCBvclxuICAgKiAgICAtIFRoZSBjdXJyZW50IHVzZXIgaGFzIHNpZ25lZCBvdXQuXG4gICAqL1xuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUsIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBvbkF1dGhTdGF0ZUNoYW5nZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0J3MgdGhlIGN1cnJlbnQgdXNlciBsYW5ndWFnZSBjb2RlLiBUaGUgc3RyaW5nIHVzZWQgdG8gc2V0IHRoaXMgcHJvcGVydHkgbXVzdCBiZSBhIGxhbmd1YWdlIGNvZGUgdGhhdCBmb2xsb3dzIEJDUCA0Ny5cbiAgICogQHBhcmFtIGxhbmd1YWdlQ29kZSBMYW5ndWFnZSBDb2RlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0TGFuZ3VhZ2VDb2RlKGxhbmd1YWdlQ29kZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBsYW5ndWFnZUNvZGUgdG8gdGhlIGFwcOKAmXMgY3VycmVudCBsYW5ndWFnZS5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB1c2VBcHBMYW5ndWFnZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaWducyBvdXQgdGhlIGN1cnJlbnQgdXNlciBhbmQgY2xlYXJzIGl0IGZyb20gdGhlIGRpc2sgY2FjaGUuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2lnbk91dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19