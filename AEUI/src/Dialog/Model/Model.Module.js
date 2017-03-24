"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var model_component_1 = require("./Component/model.component");
var model_service_1 = require("./Services/model.service");
var anchor_module_1 = require("./../../Anchor/anchor.module");
var ModelModule = ModelModule_1 = (function () {
    function ModelModule() {
    }
    ModelModule.WithComponents = function (components) {
        return [
            ModelModule_1,
            {
                ngModule: anchor_module_1.AnchorModule,
                providers: [
                    { provide: core_1.ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
                ]
            }
        ];
    };
    return ModelModule;
}());
ModelModule = ModelModule_1 = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [model_component_1.ModelComponent],
        providers: [model_service_1.ModelService],
        entryComponents: [model_component_1.ModelComponent]
    })
], ModelModule);
exports.ModelModule = ModelModule;
var ModelModule_1;
//# sourceMappingURL=Model.Module.js.map