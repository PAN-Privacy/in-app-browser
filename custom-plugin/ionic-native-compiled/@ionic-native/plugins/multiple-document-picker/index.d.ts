import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Multiple Documents Picker
 * @description
 * This plugin allows users to pick multiple documents/images at once
 *
 * @usage
 * ```typescript
 * import { MultipleDocumentsPicker } from '@ionic-native/multiple-document-picker/ngx';
 *
 *
 * constructor(private multipleDocumentsPicker: MultipleDocumentsPicker) { }
 *
 * ...
 *
 *
 * this.multipleDocumentsPicker.pick(1)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class MultipleDocumentsPickerOriginal extends IonicNativePlugin {
    /**
     * This function allow user to show native file picker
     * @param type {number} To pick type of files: for images send 1, for all files send 2
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    pick(type: number): Promise<any>;
}

export declare const MultipleDocumentsPicker: MultipleDocumentsPickerOriginal;