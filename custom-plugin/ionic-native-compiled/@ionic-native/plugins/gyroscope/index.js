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
var GyroscopeOriginal = /** @class */ (function (_super) {
    __extends(GyroscopeOriginal, _super);
    function GyroscopeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Watching for gyroscope sensor changes
     * @param {GyroscopeOptions} [options]
     * @return {Observable<GyroscopeOrientation>} Returns an Observable that resolves GyroscopeOrientation
     */
    GyroscopeOriginal.prototype.watch = function (options) {
        return new Observable(function (observer) {
            var watchId = navigator.gyroscope.watch(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.gyroscope.clearWatch(watchId); };
        });
    };
    GyroscopeOriginal.prototype.getCurrent = function (options) { return cordova(this, "getCurrent", { "callbackOrder": "reverse" }, arguments); };
    GyroscopeOriginal.pluginName = "Gyroscope";
    GyroscopeOriginal.plugin = "cordova-plugin-gyroscope";
    GyroscopeOriginal.pluginRef = "navigator.gyroscope";
    GyroscopeOriginal.repo = "https://github.com/NeoLSN/cordova-plugin-gyroscope";
    GyroscopeOriginal.platforms = ["Android", "iOS"];
    return GyroscopeOriginal;
}(IonicNativePlugin));
var Gyroscope = new GyroscopeOriginal();
export { Gyroscope };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2d5cm9zY29wZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQWtGSCw2QkFBaUI7Ozs7SUFDOUM7Ozs7T0FJRztJQUNILHlCQUFLLEdBQUwsVUFBTSxPQUEwQjtRQUM5QixPQUFPLElBQUksVUFBVSxDQUF1QixVQUFDLFFBQWE7WUFDeEQsSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDL0csT0FBTyxjQUFNLE9BQUEsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQXZDLENBQXVDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBVUQsOEJBQVUsYUFBQyxPQUEwQjs7Ozs7O29CQXhHdkM7RUFtRitCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmRlY2xhcmUgY29uc3QgbmF2aWdhdG9yOiBhbnk7XG5cbi8qKlxuICogIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHeXJvc2NvcGVPcmllbnRhdGlvbiB7XG4gIC8qKlxuICAgKiAgUmVwcmVzZW50IHgtYXhpc1xuICAgKi9cbiAgeDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiAgUmVwcmVzZW50IHktYXhpc1xuICAgKi9cbiAgeTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiAgUmVwcmVzZW50IHotYXhpc1xuICAgKi9cbiAgejogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiAgUmVwcmVzZW50IHRpbWVzdGFtcCBvZiBzZW5zb3IgcmVhZC4gRGVmYXVsdCBpcyAxMDAwMG1zXG4gICAqL1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiAgQGhpZGRlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIEd5cm9zY29wZU9wdGlvbnMge1xuICAvKipcbiAgICogIFJlcHJlc2VudCBob3cgb2Z0ZW4gKGluIG1pbGxpc2Vjb25kcykgc2Vuc29yIHNob3VsZCBiZSByZWFkLiAgRGVmYXVsdCBpcyAxMDAwMCBtc1xuICAgKi9cbiAgZnJlcXVlbmN5OiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgR3lyb3Njb3BlXG4gKiBAZGVzY3JpcHRpb24gUmVhZCBHeXJvc2NvcGUgc2Vuc29yIGRhdGFcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgR3lyb3Njb3BlLCBHeXJvc2NvcGVPcmllbnRhdGlvbiwgR3lyb3Njb3BlT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZ3lyb3Njb3BlL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3lyb3Njb3BlOiBHeXJvc2NvcGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBsZXQgb3B0aW9uczogR3lyb3Njb3BlT3B0aW9ucyA9IHtcbiAqICAgIGZyZXF1ZW5jeTogMTAwMFxuICogfVxuICpcbiAqIHRoaXMuZ3lyb3Njb3BlLmdldEN1cnJlbnQob3B0aW9ucylcbiAqICAgLnRoZW4oKG9yaWVudGF0aW9uOiBHeXJvc2NvcGVPcmllbnRhdGlvbikgPT4ge1xuICogICAgICBjb25zb2xlLmxvZyhvcmllbnRhdGlvbi54LCBvcmllbnRhdGlvbi55LCBvcmllbnRhdGlvbi56LCBvcmllbnRhdGlvbi50aW1lc3RhbXApO1xuICogICAgfSlcbiAqICAgLmNhdGNoKClcbiAqXG4gKlxuICogdGhpcy5neXJvc2NvcGUud2F0Y2goKVxuICogICAgLnN1YnNjcmliZSgob3JpZW50YXRpb246IEd5cm9zY29wZU9yaWVudGF0aW9uKSA9PiB7XG4gKiAgICAgICBjb25zb2xlLmxvZyhvcmllbnRhdGlvbi54LCBvcmllbnRhdGlvbi55LCBvcmllbnRhdGlvbi56LCBvcmllbnRhdGlvbi50aW1lc3RhbXApO1xuICogICAgfSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogR3lyb3Njb3BlT3JpZW50YXRpb25cbiAqIEd5cm9zY29wZU9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHeXJvc2NvcGUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1neXJvc2NvcGUnLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3IuZ3lyb3Njb3BlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9OZW9MU04vY29yZG92YS1wbHVnaW4tZ3lyb3Njb3BlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEd5cm9zY29wZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFdhdGNoaW5nIGZvciBneXJvc2NvcGUgc2Vuc29yIGNoYW5nZXNcbiAgICogQHBhcmFtIHtHeXJvc2NvcGVPcHRpb25zfSBbb3B0aW9uc11cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxHeXJvc2NvcGVPcmllbnRhdGlvbj59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IHJlc29sdmVzIEd5cm9zY29wZU9yaWVudGF0aW9uXG4gICAqL1xuICB3YXRjaChvcHRpb25zPzogR3lyb3Njb3BlT3B0aW9ucyk6IE9ic2VydmFibGU8R3lyb3Njb3BlT3JpZW50YXRpb24+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8R3lyb3Njb3BlT3JpZW50YXRpb24+KChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBjb25zdCB3YXRjaElkID0gbmF2aWdhdG9yLmd5cm9zY29wZS53YXRjaChvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLCBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiAoKSA9PiBuYXZpZ2F0b3IuZ3lyb3Njb3BlLmNsZWFyV2F0Y2god2F0Y2hJZCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgZGF0YSBmcm9tIGd5cm9zY29wZSBzZW5zb3JcbiAgICogQHBhcmFtIHtHeXJvc2NvcGVPcHRpb25zfSBbb3B0aW9uc11cbiAgICogQHJldHVybiB7UHJvbWlzZTxHeXJvc2NvcGVPcmllbnRhdGlvbj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgR3lyb3Njb3BlT3JpZW50YXRpb25cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGdldEN1cnJlbnQob3B0aW9ucz86IEd5cm9zY29wZU9wdGlvbnMpOiBQcm9taXNlPEd5cm9zY29wZU9yaWVudGF0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=