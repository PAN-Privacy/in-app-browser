'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var PinDialog = /** @class */ (function (_super) {
    tslib.__extends(PinDialog, _super);
    function PinDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PinDialog.prototype.prompt = function (message, title, buttons) { return core.cordova(this, "prompt", { "successIndex": 1, "errorIndex": 4 }, arguments); };
    PinDialog.pluginName = "PinDialog";
    PinDialog.plugin = "cordova-plugin-pin-dialog";
    PinDialog.pluginRef = "plugins.pinDialog";
    PinDialog.repo = "https://github.com/Paldom/PinDialog";
    PinDialog.platforms = ["Android", "iOS"];
    PinDialog.decorators = [
        { type: core$1.Injectable }
    ];
    return PinDialog;
}(core.IonicNativePlugin));

exports.PinDialog = PinDialog;
