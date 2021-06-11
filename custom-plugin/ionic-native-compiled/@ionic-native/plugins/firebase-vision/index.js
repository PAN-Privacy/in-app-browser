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
export var BarcodeFormat;
(function (BarcodeFormat) {
    BarcodeFormat[BarcodeFormat["UNKNOWN"] = -1] = "UNKNOWN";
    BarcodeFormat[BarcodeFormat["ALL_FORMATS"] = 0] = "ALL_FORMATS";
    BarcodeFormat[BarcodeFormat["CODE_128"] = 1] = "CODE_128";
    BarcodeFormat[BarcodeFormat["CODE_39"] = 2] = "CODE_39";
    BarcodeFormat[BarcodeFormat["CODE_93"] = 4] = "CODE_93";
    BarcodeFormat[BarcodeFormat["CODABAR"] = 8] = "CODABAR";
    BarcodeFormat[BarcodeFormat["DATA_MATRIX"] = 16] = "DATA_MATRIX";
    BarcodeFormat[BarcodeFormat["EAN_13"] = 32] = "EAN_13";
    BarcodeFormat[BarcodeFormat["EAN_8"] = 64] = "EAN_8";
    BarcodeFormat[BarcodeFormat["ITF"] = 128] = "ITF";
    BarcodeFormat[BarcodeFormat["QR_CODE"] = 256] = "QR_CODE";
    BarcodeFormat[BarcodeFormat["UPC_A"] = 512] = "UPC_A";
    BarcodeFormat[BarcodeFormat["UPC_E"] = 1024] = "UPC_E";
    BarcodeFormat[BarcodeFormat["PDF417"] = 2048] = "PDF417";
    BarcodeFormat[BarcodeFormat["AZTEC"] = 4096] = "AZTEC";
})(BarcodeFormat || (BarcodeFormat = {}));
export var BarcodeValueType;
(function (BarcodeValueType) {
    /** Unknown Barcode value types.  */
    BarcodeValueType[BarcodeValueType["Unknown"] = 0] = "Unknown";
    /** Barcode value type for contact info. */
    BarcodeValueType[BarcodeValueType["ContactInfo"] = 1] = "ContactInfo";
    /** Barcode value type for email addresses. */
    BarcodeValueType[BarcodeValueType["Email"] = 2] = "Email";
    /** Barcode value type for ISBNs. */
    BarcodeValueType[BarcodeValueType["ISBN"] = 3] = "ISBN";
    /** Barcode value type for phone numbers. */
    BarcodeValueType[BarcodeValueType["Phone"] = 4] = "Phone";
    /** Barcode value type for product codes. */
    BarcodeValueType[BarcodeValueType["Product"] = 5] = "Product";
    /** Barcode value type for SMS details. */
    BarcodeValueType[BarcodeValueType["SMS"] = 6] = "SMS";
    /** Barcode value type for plain text. */
    BarcodeValueType[BarcodeValueType["Text"] = 7] = "Text";
    /** Barcode value type for URLs/bookmarks. */
    BarcodeValueType[BarcodeValueType["URL"] = 8] = "URL";
    /** Barcode value type for Wi-Fi access point details. */
    BarcodeValueType[BarcodeValueType["WiFi"] = 9] = "WiFi";
    /** Barcode value type for geographic coordinates. */
    BarcodeValueType[BarcodeValueType["GeographicCoordinates"] = 10] = "GeographicCoordinates";
    /** Barcode value type for calendar events. */
    BarcodeValueType[BarcodeValueType["CalendarEvent"] = 11] = "CalendarEvent";
    /** Barcode value type for driver's license data. */
    BarcodeValueType[BarcodeValueType["DriversLicense"] = 12] = "DriversLicense";
})(BarcodeValueType || (BarcodeValueType = {}));
export var BarcodeEmailType;
(function (BarcodeEmailType) {
    /** Unknown email type. */
    BarcodeEmailType[BarcodeEmailType["Unknown"] = 0] = "Unknown";
    /** Barcode work email type. */
    BarcodeEmailType[BarcodeEmailType["Work"] = 1] = "Work";
    /** Barcode home email type. */
    BarcodeEmailType[BarcodeEmailType["Home"] = 2] = "Home";
})(BarcodeEmailType || (BarcodeEmailType = {}));
export var BarcodePhoneType;
(function (BarcodePhoneType) {
    /** Unknown phone type. */
    BarcodePhoneType[BarcodePhoneType["Unknown"] = 0] = "Unknown";
    /** Barcode work phone type. */
    BarcodePhoneType[BarcodePhoneType["Work"] = 1] = "Work";
    /** Barcode home phone type. */
    BarcodePhoneType[BarcodePhoneType["Home"] = 2] = "Home";
    /** Barcode fax phone type. */
    BarcodePhoneType[BarcodePhoneType["Fax"] = 3] = "Fax";
    /** Barcode mobile phone type. */
    BarcodePhoneType[BarcodePhoneType["Mobile"] = 4] = "Mobile";
})(BarcodePhoneType || (BarcodePhoneType = {}));
export var BarcodeWiFiEncryptionType;
(function (BarcodeWiFiEncryptionType) {
    /** Barcode unknown Wi-Fi encryption type. */
    BarcodeWiFiEncryptionType[BarcodeWiFiEncryptionType["Unknown"] = 0] = "Unknown";
    /** Barcode open Wi-Fi encryption type. */
    BarcodeWiFiEncryptionType[BarcodeWiFiEncryptionType["Open"] = 1] = "Open";
    /** Barcode WPA Wi-Fi encryption type. */
    BarcodeWiFiEncryptionType[BarcodeWiFiEncryptionType["WPA"] = 2] = "WPA";
    /** Barcode WEP Wi-Fi encryption type. */
    BarcodeWiFiEncryptionType[BarcodeWiFiEncryptionType["WEP"] = 3] = "WEP";
})(BarcodeWiFiEncryptionType || (BarcodeWiFiEncryptionType = {}));
export var BarcodeAddressType;
(function (BarcodeAddressType) {
    /** Barcode unknown address type. */
    BarcodeAddressType[BarcodeAddressType["Unknown"] = 0] = "Unknown";
    /** Barcode work address type. */
    BarcodeAddressType[BarcodeAddressType["Work"] = 1] = "Work";
    /** Barcode home address type. */
    BarcodeAddressType[BarcodeAddressType["Home"] = 2] = "Home";
})(BarcodeAddressType || (BarcodeAddressType = {}));
var FirebaseVisionOriginal = /** @class */ (function (_super) {
    __extends(FirebaseVisionOriginal, _super);
    function FirebaseVisionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseVisionOriginal.prototype.onDeviceTextRecognizer = function (file_uri) { return cordova(this, "onDeviceTextRecognizer", {}, arguments); };
    FirebaseVisionOriginal.prototype.barcodeDetector = function (file_uri) { return cordova(this, "barcodeDetector", {}, arguments); };
    FirebaseVisionOriginal.prototype.imageLabeler = function (file_uri) { return cordova(this, "imageLabeler", {}, arguments); };
    FirebaseVisionOriginal.pluginName = "FirebaseVision";
    FirebaseVisionOriginal.plugin = "cordova-plugin-firebase-mlvision";
    FirebaseVisionOriginal.pluginRef = "FirebaseVisionPlugin";
    FirebaseVisionOriginal.repo = "https://github.com/alon22/cordova-plugin-firebase-mlvision";
    FirebaseVisionOriginal.platforms = ["Android", "iOS"];
    return FirebaseVisionOriginal;
}(IonicNativePlugin));
var FirebaseVision = new FirebaseVisionOriginal();
export { FirebaseVision };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpcmViYXNlLXZpc2lvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQW9DeEUsTUFBTSxDQUFOLElBQVksYUFnQlg7QUFoQkQsV0FBWSxhQUFhO0lBQ3ZCLHdEQUFZLENBQUE7SUFDWiwrREFBZSxDQUFBO0lBQ2YseURBQVksQ0FBQTtJQUNaLHVEQUFXLENBQUE7SUFDWCx1REFBVyxDQUFBO0lBQ1gsdURBQVcsQ0FBQTtJQUNYLGdFQUFnQixDQUFBO0lBQ2hCLHNEQUFXLENBQUE7SUFDWCxvREFBVSxDQUFBO0lBQ1YsaURBQVMsQ0FBQTtJQUNULHlEQUFhLENBQUE7SUFDYixxREFBVyxDQUFBO0lBQ1gsc0RBQVksQ0FBQTtJQUNaLHdEQUFhLENBQUE7SUFDYixzREFBWSxDQUFBO0FBQ2QsQ0FBQyxFQWhCVyxhQUFhLEtBQWIsYUFBYSxRQWdCeEI7QUFFRCxNQUFNLENBQU4sSUFBWSxnQkEyQlg7QUEzQkQsV0FBWSxnQkFBZ0I7SUFDMUIsb0NBQW9DO0lBQ3BDLDZEQUFPLENBQUE7SUFDUCwyQ0FBMkM7SUFDM0MscUVBQVcsQ0FBQTtJQUNYLDhDQUE4QztJQUM5Qyx5REFBSyxDQUFBO0lBQ0wsb0NBQW9DO0lBQ3BDLHVEQUFJLENBQUE7SUFDSiw0Q0FBNEM7SUFDNUMseURBQUssQ0FBQTtJQUNMLDRDQUE0QztJQUM1Qyw2REFBTyxDQUFBO0lBQ1AsMENBQTBDO0lBQzFDLHFEQUFHLENBQUE7SUFDSCx5Q0FBeUM7SUFDekMsdURBQUksQ0FBQTtJQUNKLDZDQUE2QztJQUM3QyxxREFBRyxDQUFBO0lBQ0gseURBQXlEO0lBQ3pELHVEQUFJLENBQUE7SUFDSixxREFBcUQ7SUFDckQsMEZBQXFCLENBQUE7SUFDckIsOENBQThDO0lBQzlDLDBFQUFhLENBQUE7SUFDYixvREFBb0Q7SUFDcEQsNEVBQWMsQ0FBQTtBQUNoQixDQUFDLEVBM0JXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUEyQjNCO0FBRUQsTUFBTSxDQUFOLElBQVksZ0JBT1g7QUFQRCxXQUFZLGdCQUFnQjtJQUMxQiwwQkFBMEI7SUFDMUIsNkRBQU8sQ0FBQTtJQUNQLCtCQUErQjtJQUMvQix1REFBSSxDQUFBO0lBQ0osK0JBQStCO0lBQy9CLHVEQUFJLENBQUE7QUFDTixDQUFDLEVBUFcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQU8zQjtBQUVELE1BQU0sQ0FBTixJQUFZLGdCQVdYO0FBWEQsV0FBWSxnQkFBZ0I7SUFDMUIsMEJBQTBCO0lBQzFCLDZEQUFPLENBQUE7SUFDUCwrQkFBK0I7SUFDL0IsdURBQUksQ0FBQTtJQUNKLCtCQUErQjtJQUMvQix1REFBSSxDQUFBO0lBQ0osOEJBQThCO0lBQzlCLHFEQUFHLENBQUE7SUFDSCxpQ0FBaUM7SUFDakMsMkRBQU0sQ0FBQTtBQUNSLENBQUMsRUFYVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBVzNCO0FBRUQsTUFBTSxDQUFOLElBQVkseUJBU1g7QUFURCxXQUFZLHlCQUF5QjtJQUNuQyw2Q0FBNkM7SUFDN0MsK0VBQU8sQ0FBQTtJQUNQLDBDQUEwQztJQUMxQyx5RUFBSSxDQUFBO0lBQ0oseUNBQXlDO0lBQ3pDLHVFQUFHLENBQUE7SUFDSCx5Q0FBeUM7SUFDekMsdUVBQUcsQ0FBQTtBQUNMLENBQUMsRUFUVyx5QkFBeUIsS0FBekIseUJBQXlCLFFBU3BDO0FBRUQsTUFBTSxDQUFOLElBQVksa0JBT1g7QUFQRCxXQUFZLGtCQUFrQjtJQUM1QixvQ0FBb0M7SUFDcEMsaUVBQU8sQ0FBQTtJQUNQLGlDQUFpQztJQUNqQywyREFBSSxDQUFBO0lBQ0osaUNBQWlDO0lBQ2pDLDJEQUFJLENBQUE7QUFDTixDQUFDLEVBUFcsa0JBQWtCLEtBQWxCLGtCQUFrQixRQU83Qjs7SUF3SW1DLGtDQUFpQjs7OztJQU9uRCwrQ0FBc0IsYUFBQyxRQUFnQjtJQVN2Qyx3Q0FBZSxhQUFDLFFBQWdCO0lBU2hDLHFDQUFZLGFBQUMsUUFBZ0I7Ozs7Ozt5QkE3Ui9CO0VBb1FvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRleHQge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGJsb2NrczogVGV4dExpbmVbXTtcbiAgaW1hZ2VIZWlnaHQ6IG51bWJlcjtcbiAgaW1hZ2VXaWR0aDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRleHRMaW5lIGV4dGVuZHMgVGV4dEJsb2NrIHtcbiAgbGluZXM6IFRleHRFbGVtZW50W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dEVsZW1lbnQgZXh0ZW5kcyBUZXh0QmxvY2sge1xuICBlbGVtZW50czogVGV4dEJsb2NrW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dEJsb2NrIHtcbiAgdGV4dDogc3RyaW5nO1xuICBjb3JuZXJQb2ludHM6IFRleHRQb2ludFtdO1xuICBmcmFtZTogVGV4dEZyYW1lO1xuICByZWNvZ25pemVkTGFuZ3VhZ2VzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFBvaW50IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dEZyYW1lIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgZW51bSBCYXJjb2RlRm9ybWF0IHtcbiAgVU5LTk9XTiA9IC0xLFxuICBBTExfRk9STUFUUyA9IDAsXG4gIENPREVfMTI4ID0gMSxcbiAgQ09ERV8zOSA9IDIsXG4gIENPREVfOTMgPSA0LFxuICBDT0RBQkFSID0gOCxcbiAgREFUQV9NQVRSSVggPSAxNixcbiAgRUFOXzEzID0gMzIsXG4gIEVBTl84ID0gNjQsXG4gIElURiA9IDEyOCxcbiAgUVJfQ09ERSA9IDI1NixcbiAgVVBDX0EgPSA1MTIsXG4gIFVQQ19FID0gMTAyNCxcbiAgUERGNDE3ID0gMjA0OCxcbiAgQVpURUMgPSA0MDk2LFxufVxuXG5leHBvcnQgZW51bSBCYXJjb2RlVmFsdWVUeXBlIHtcbiAgLyoqIFVua25vd24gQmFyY29kZSB2YWx1ZSB0eXBlcy4gICovXG4gIFVua25vd24sXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIGNvbnRhY3QgaW5mby4gKi9cbiAgQ29udGFjdEluZm8sXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIGVtYWlsIGFkZHJlc3Nlcy4gKi9cbiAgRW1haWwsXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIElTQk5zLiAqL1xuICBJU0JOLFxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBwaG9uZSBudW1iZXJzLiAqL1xuICBQaG9uZSxcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgcHJvZHVjdCBjb2Rlcy4gKi9cbiAgUHJvZHVjdCxcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgU01TIGRldGFpbHMuICovXG4gIFNNUyxcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgcGxhaW4gdGV4dC4gKi9cbiAgVGV4dCxcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgVVJMcy9ib29rbWFya3MuICovXG4gIFVSTCxcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgV2ktRmkgYWNjZXNzIHBvaW50IGRldGFpbHMuICovXG4gIFdpRmksXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIGdlb2dyYXBoaWMgY29vcmRpbmF0ZXMuICovXG4gIEdlb2dyYXBoaWNDb29yZGluYXRlcyxcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgY2FsZW5kYXIgZXZlbnRzLiAqL1xuICBDYWxlbmRhckV2ZW50LFxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBkcml2ZXIncyBsaWNlbnNlIGRhdGEuICovXG4gIERyaXZlcnNMaWNlbnNlLFxufVxuXG5leHBvcnQgZW51bSBCYXJjb2RlRW1haWxUeXBlIHtcbiAgLyoqIFVua25vd24gZW1haWwgdHlwZS4gKi9cbiAgVW5rbm93bixcbiAgLyoqIEJhcmNvZGUgd29yayBlbWFpbCB0eXBlLiAqL1xuICBXb3JrLFxuICAvKiogQmFyY29kZSBob21lIGVtYWlsIHR5cGUuICovXG4gIEhvbWUsXG59XG5cbmV4cG9ydCBlbnVtIEJhcmNvZGVQaG9uZVR5cGUge1xuICAvKiogVW5rbm93biBwaG9uZSB0eXBlLiAqL1xuICBVbmtub3duLFxuICAvKiogQmFyY29kZSB3b3JrIHBob25lIHR5cGUuICovXG4gIFdvcmssXG4gIC8qKiBCYXJjb2RlIGhvbWUgcGhvbmUgdHlwZS4gKi9cbiAgSG9tZSxcbiAgLyoqIEJhcmNvZGUgZmF4IHBob25lIHR5cGUuICovXG4gIEZheCxcbiAgLyoqIEJhcmNvZGUgbW9iaWxlIHBob25lIHR5cGUuICovXG4gIE1vYmlsZSxcbn1cblxuZXhwb3J0IGVudW0gQmFyY29kZVdpRmlFbmNyeXB0aW9uVHlwZSB7XG4gIC8qKiBCYXJjb2RlIHVua25vd24gV2ktRmkgZW5jcnlwdGlvbiB0eXBlLiAqL1xuICBVbmtub3duLFxuICAvKiogQmFyY29kZSBvcGVuIFdpLUZpIGVuY3J5cHRpb24gdHlwZS4gKi9cbiAgT3BlbixcbiAgLyoqIEJhcmNvZGUgV1BBIFdpLUZpIGVuY3J5cHRpb24gdHlwZS4gKi9cbiAgV1BBLFxuICAvKiogQmFyY29kZSBXRVAgV2ktRmkgZW5jcnlwdGlvbiB0eXBlLiAqL1xuICBXRVAsXG59XG5cbmV4cG9ydCBlbnVtIEJhcmNvZGVBZGRyZXNzVHlwZSB7XG4gIC8qKiBCYXJjb2RlIHVua25vd24gYWRkcmVzcyB0eXBlLiAqL1xuICBVbmtub3duLFxuICAvKiogQmFyY29kZSB3b3JrIGFkZHJlc3MgdHlwZS4gKi9cbiAgV29yayxcbiAgLyoqIEJhcmNvZGUgaG9tZSBhZGRyZXNzIHR5cGUuICovXG4gIEhvbWUsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZSB7XG4gIHZhbHVlVHlwZTogQmFyY29kZVZhbHVlVHlwZTtcbiAgZm9ybWF0OiBCYXJjb2RlRm9ybWF0O1xuICByYXdWYWx1ZTogc3RyaW5nO1xuICBkaXNwbGF5VmFsdWU6IHN0cmluZztcbiAgY29ybmVyUG9pbnRzOiBhbnk7XG4gIGltYWdlSGVpZ2h0OiBudW1iZXI7XG4gIGltYWdlV2lkdGg6IG51bWJlcjtcbiAgZW1haWw6IEJhcmNvZGVFbWFpbDtcbiAgcGhvbmU6IEJhcmNvZGVQaG9uZTtcbiAgc21zOiBCYXJjb2RlU21zO1xuICB1cmw6IEJhcmNvZGVVcmw7XG4gIHdpZmk6IEJhcmNvZGVXaWZpO1xuICBnZW9Qb2ludDogQmFyY29kZUdlb1BvaW50O1xuICBjYWxlbmRhckV2ZW50OiBCYXJjb2RlQ2FsZW5kYXJFdmVudDtcbiAgY29udGFjdEluZm86IEJhcmNvZGVDb250YWN0SW5mbztcbiAgZHJpdmVyTGljZW5zZTogQmFyY29kZURyaXZlckxpY2Vuc2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZUVtYWlsIHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIHN1YmplY3Q6IHN0cmluZztcbiAgdHlwZTogQmFyY29kZUVtYWlsVHlwZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlUGhvbmUge1xuICBudW1iZXI6IHN0cmluZztcbiAgdHlwZTogQmFyY29kZVBob25lVHlwZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlU21zIHtcbiAgcGhvbmVOdW1iZXI6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVVcmwge1xuICB0aXRsZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVdpZmkge1xuICBzc2lkOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIHR5cGU6IEJhcmNvZGVXaUZpRW5jcnlwdGlvblR5cGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVHZW9Qb2ludCB7XG4gIGxhdGl0dWRlOiBudW1iZXI7XG4gIGxvbmdpdHVkZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVDYWxlbmRhckV2ZW50IHtcbiAgZXZlbnREZXNjcmlwdGlvbjogc3RyaW5nO1xuICBsb2NhdGlvbjogc3RyaW5nO1xuICBvcmdhbml6ZXI6IHN0cmluZztcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIHN1bW1hcnk6IHN0cmluZztcbiAgc3RhcnQ6IGFueTtcbiAgZW5kOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZUNvbnRhY3RJbmZvIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBhZGRyZXNzZXM6IEJhcmNvZGVBZGRyZXNzW107XG4gIHBob25lczogQmFyY29kZVBob25lW107XG4gIGVtYWlsczogQmFyY29kZUVtYWlsW107XG4gIG9yZ2FuaXphdGlvbjogc3RyaW5nO1xuICB1cmxzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZUFkZHJlc3Mge1xuICBhZGRyZXNzTGluZTogc3RyaW5nO1xuICB0eXBlOiBCYXJjb2RlQWRkcmVzc1R5cGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZURyaXZlckxpY2Vuc2Uge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbWlkZGxlTmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBnZW5kZXI6IHN0cmluZztcbiAgYWRkcmVzc0NpdHk6IHN0cmluZztcbiAgYWRkcmVzc1N0YXRlOiBzdHJpbmc7XG4gIGFkZHJlc3NTdHJlZXQ6IHN0cmluZztcbiAgYWRkcmVzc1ppcDogc3RyaW5nO1xuICBiaXJ0aERhdGU6IHN0cmluZztcbiAgZG9jdW1lbnRUeXBlOiBzdHJpbmc7XG4gIGxpY2Vuc2VOdW1iZXI6IHN0cmluZztcbiAgZXhwaXJ5RGF0ZTogc3RyaW5nO1xuICBpc3N1aW5nRGF0ZTogc3RyaW5nO1xuICBpc3N1aW5nQ291bnRyeTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlTGFiZWwge1xuICBpbmRleDogbnVtYmVyO1xuICBjb25maWRlbmNlOiBudW1iZXI7XG4gIHRleHQ6IHN0cmluZztcbn1cbi8qKlxuICogQG5hbWUgRmlyZWJhc2UgVmlzaW9uXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgcGx1Z2luIGZvciBGaXJlYmFzZSBNTEtpdCBWaXNpb25cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpcmViYXNlVmlzaW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maXJlYmFzZS12aXNpb24vbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZVZpc2lvbjogRmlyZWJhc2VWaXNpb24pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmZpcmViYXNlVmlzaW9uLm9uRGV2aWNlVGV4dFJlY29nbml6ZXIoRklMRV9VUkkpXG4gKiAgIC50aGVuKChyZXM6IHN0cmluZykgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogc3RyaW5nKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogdGhpcy5maXJlYmFzZVZpc2lvbi5iYXJjb2RlRGV0ZWN0b3IoRklMRV9VUkkpXG4gKiAgIC50aGVuKChyZXM6IEJhcmNvZGVbXSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogc3RyaW5nKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogdGhpcy5maXJlYmFzZVZpc2lvbi5pbWFnZUxhYmVsZXIoRklMRV9VUkkpXG4gKiAgIC50aGVuKChyZXM6IEltYWdlTGFiZWxbXSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogc3RyaW5nKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlyZWJhc2VWaXNpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1tbHZpc2lvbicsXG4gIHBsdWdpblJlZjogJ0ZpcmViYXNlVmlzaW9uUGx1Z2luJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbG9uMjIvY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtbWx2aXNpb24nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VWaXNpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBSZWNvZ25pemUgdGV4dCBpbiBpbWFnZVxuICAgKiBAcGFyYW0gZmlsZV91cmkge3N0cmluZ30gSW1hZ2UgVVJJXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aXRoIHRoZSB0ZXh0IGluIHRoZSBpbWFnZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvbkRldmljZVRleHRSZWNvZ25pemVyKGZpbGVfdXJpOiBzdHJpbmcpOiBQcm9taXNlPFRleHQ+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIFJlYWQgZGF0YSBmcm9tIEJhcmNvZGVcbiAgICogQHBhcmFtIGZpbGVfdXJpIHtzdHJpbmd9IEltYWdlIFVSSVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEJhcmNvZGVbXT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgZnVsZmlsbHMgd2l0aCB0aGUgZGF0YSBpbiBiYXJjb2RlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGJhcmNvZGVEZXRlY3RvcihmaWxlX3VyaTogc3RyaW5nKTogUHJvbWlzZTxCYXJjb2RlW10+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIFJlY29nbml6ZSBvYmplY3QgaW4gaW1hZ2VcbiAgICogQHBhcmFtIGZpbGVfdXJpIHtzdHJpbmd9IEltYWdlIFVSSVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEltYWdlTGFiZWxbXT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgZnVsZmlsbHMgd2l0aCB0aGUgaW5mb3JtYXRpb24gYWJvdXQgZW50aXRpZXMgaW4gYW4gaW1hZ2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaW1hZ2VMYWJlbGVyKGZpbGVfdXJpOiBzdHJpbmcpOiBQcm9taXNlPEltYWdlTGFiZWxbXT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19