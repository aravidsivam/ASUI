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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var anchor_service_1 = require("./anchor.service");
var AnchorDirective = (function () {
    function AnchorDirective(viewContainer, componentFactoryResolver, anchorService) {
        var _this = this;
        this.viewContainer = viewContainer;
        this.componentFactoryResolver = componentFactoryResolver;
        this.anchorService = anchorService;
        anchorService._createComponent = function (dialogComponent) {
            return _this.createDialog(dialogComponent);
        };
    }
    AnchorDirective.prototype.createDialog = function (dialogComponent) {
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(dialogComponent);
        var dialogComponentRef = this.viewContainer.createComponent(dialogComponentFactory);
        return dialogComponentRef;
    };
    return AnchorDirective;
}());
AnchorDirective = __decorate([
    core_1.Directive({ selector: '[asAnchor]' }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef, core_1.ComponentFactoryResolver, anchor_service_1.AnchorService])
], AnchorDirective);
exports.AnchorDirective = AnchorDirective;
//# sourceMappingURL=anchor.dirtective.js.map