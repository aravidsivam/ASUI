"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var model_component_1 = require('./Component/model.component');
var model_service_1 = require('./Services/model.service');
var anchor_module_1 = require('./../../Anchor/anchor.module');
var Draggable_module_1 = require('./../../Draggable/Draggable.module');
var ModelModule = (function () {
    function ModelModule() {
    }
    ModelModule.WithComponents = function (components) {
        return [
            ModelModule,
            {
                ngModule: anchor_module_1.AnchorModule,
                providers: [
                    { provide: core_1.ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
                ]
            }
        ];
    };
    ModelModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, Draggable_module_1.DraggableModule],
            declarations: [model_component_1.ModelComponent],
            providers: [model_service_1.ModelService],
            entryComponents: [model_component_1.ModelComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ModelModule);
    return ModelModule;
}());
exports.ModelModule = ModelModule;
