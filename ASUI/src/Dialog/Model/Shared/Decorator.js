"use strict";
function ModelDialog(option) {
    return function (digType) {
        Reflect.defineMetadata("asmodeloption", option, digType);
    };
}
exports.ModelDialog = ModelDialog;
