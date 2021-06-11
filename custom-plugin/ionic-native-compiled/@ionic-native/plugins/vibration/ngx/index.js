import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Vibration = /** @class */ (function (_super) {
    __extends(Vibration, _super);
    function Vibration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vibration.prototype.vibrate = function (time) { return cordova(this, "vibrate", { "sync": true }, arguments); };
    Vibration.pluginName = "Vibration";
    Vibration.plugin = "cordova-plugin-vibration";
    Vibration.pluginRef = "navigator";
    Vibration.repo = "https://github.com/apache/cordova-plugin-vibration";
    Vibration.platforms = ["Android", "iOS", "Windows"];
    Vibration.decorators = [
        { type: Injectable }
    ];
    return Vibration;
}(IonicNativePlugin));
export { Vibration };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3ZpYnJhdGlvbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFxQ3pDLDZCQUFpQjs7OztJQVE5QywyQkFBTyxhQUFDLElBQXVCOzs7Ozs7O2dCQVRoQyxVQUFVOztvQkFyQ1g7RUFzQytCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgVmlicmF0aW9uXG4gKiBAcHJlbWllciB2aWJyYXRpb25cbiAqIEBkZXNjcmlwdGlvbiBWaWJyYXRlcyB0aGUgZGV2aWNlXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFZpYnJhdGlvbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdmlicmF0aW9uL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB2aWJyYXRpb246IFZpYnJhdGlvbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gVmlicmF0ZSB0aGUgZGV2aWNlIGZvciBhIHNlY29uZFxuICogLy8gRHVyYXRpb24gaXMgaWdub3JlZCBvbiBpT1MuXG4gKiB0aGlzLnZpYnJhdGlvbi52aWJyYXRlKDEwMDApO1xuICpcbiAqIC8vIFZpYnJhdGUgMiBzZWNvbmRzXG4gKiAvLyBQYXVzZSBmb3IgMSBzZWNvbmRcbiAqIC8vIFZpYnJhdGUgZm9yIDIgc2Vjb25kc1xuICogLy8gUGF0dGVybnMgd29yayBvbiBBbmRyb2lkIGFuZCBXaW5kb3dzIG9ubHlcbiAqIHRoaXMudmlicmF0aW9uLnZpYnJhdGUoWzIwMDAsMTAwMCwyMDAwXSk7XG4gKlxuICogLy8gU3RvcCBhbnkgY3VycmVudCB2aWJyYXRpb25zIGltbWVkaWF0ZWx5XG4gKiAvLyBXb3JrcyBvbiBBbmRyb2lkIGFuZCBXaW5kb3dzIG9ubHlcbiAqIHRoaXMudmlicmF0aW9uLnZpYnJhdGUoMCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdWaWJyYXRpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi12aWJyYXRpb24nLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3InLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi12aWJyYXRpb24nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWaWJyYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBWaWJyYXRlcyB0aGUgZGV2aWNlIGZvciBnaXZlbiBhbW91bnQgb2YgdGltZS5cbiAgICogQHBhcmFtIHRpbWUge251bWJlcnxudW1iZXJbXX0gTWlsbGlzZWNvbmRzIHRvIHZpYnJhdGUgdGhlIGRldmljZS4gSWYgcGFzc2VkIGFuIGFycmF5IG9mIG51bWJlcnMsIGl0IHdpbGwgZGVmaW5lIGEgdmlicmF0aW9uIHBhdHRlcm4uIFBhc3MgMCB0byBzdG9wIGFueSB2aWJyYXRpb24gaW1tZWRpYXRlbHkuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgdmlicmF0ZSh0aW1lOiBudW1iZXIgfCBudW1iZXJbXSkge31cbn1cbiJdfQ==