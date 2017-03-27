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
var anchor_dirtective_1 = require("./anchor.dirtective");
var anchor_service_1 = require("./anchor.service");
var AnchorModule = AnchorModule_1 = (function () {
    function AnchorModule() {
    }
    AnchorModule.WithComponents = function (components) {
        return {
            ngModule: AnchorModule_1,
            providers: [
                { provide: core_1.ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
            ]
        };
    };
    return AnchorModule;
}());
AnchorModule = AnchorModule_1 = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [anchor_dirtective_1.AnchorDirective],
        providers: [anchor_service_1.AnchorService],
        exports: [anchor_dirtective_1.AnchorDirective]
    })
], AnchorModule);
exports.AnchorModule = AnchorModule;
var AnchorModule_1;
//# sourceMappingURL=anchor.module.js.map