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
var ConfirmDialog_Component_1 = require('./Component/ConfirmDialog.Component');
var ConfirmDialog_Service_1 = require('./Services/ConfirmDialog.Service');
var anchor_module_1 = require('./../../Anchor/anchor.module');
var ConfirmDialogModule = (function () {
    function ConfirmDialogModule() {
    }
    ConfirmDialogModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, { ngModule: anchor_module_1.AnchorModule, providers: [{ provide: core_1.ANALYZE_FOR_ENTRY_COMPONENTS, useValue: [ConfirmDialog_Component_1.ConfirmDialogComponent], multi: true }] }],
            declarations: [ConfirmDialog_Component_1.ConfirmDialogComponent],
            providers: [ConfirmDialog_Service_1.ConfirmDialogService]
        }), 
        __metadata('design:paramtypes', [])
    ], ConfirmDialogModule);
    return ConfirmDialogModule;
}());
exports.ConfirmDialogModule = ConfirmDialogModule;
