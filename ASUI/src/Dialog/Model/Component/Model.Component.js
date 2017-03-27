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
var StyleBuilder_1 = require('./../../../Common/StyleBuilder');
var Utility_1 = require('./../../../Common/Utility');
var Rx_1 = require('rxjs/Rx');
var Draggable_Service_1 = require('./../../../Draggable/Draggable.Service');
var ModelComponent = (function () {
    function ModelComponent(componentFactoryResolver, dragService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.dragService = dragService;
        this.OnClosed = new Rx_1.Subject();
        this.closeEnabled = true;
    }
    Object.defineProperty(ModelComponent.prototype, "Instance", {
        get: function () {
            return this.componentRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    ModelComponent.prototype.ngOnInit = function () {
    };
    ModelComponent.prototype.Close = function () {
        this.modelComponentRef.destroy();
        this.OnClosed.next({});
    };
    ModelComponent.prototype.SetClasses = function () {
        return this.BuildClasses();
    };
    ModelComponent.prototype.InitModel = function (ComponentType, modelComponentRef) {
        this.modelComponentRef = modelComponentRef;
        this.componentType = ComponentType;
        this.RenderModelContent();
        var styleBuilder = new StyleBuilder_1.StyleBuilder(this.option);
        this.style = styleBuilder.BuildStyle();
    };
    ModelComponent.prototype.ngOnDestroy = function () {
        if (this.DraggableObj) {
            this.DraggableObj.destory();
        }
    };
    ModelComponent.prototype.RenderModelContent = function () {
        this.option = Reflect.getMetadata("asmodeloption", this.componentType);
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentType);
        this.componentRef = this.contentContainer.createComponent(dialogComponentFactory);
        if (Utility_1.isDefined(this.option.CloseIcon))
            this.closeEnabled = this.option.CloseIcon;
        if (!Utility_1.isDefined(this.option.Draggable) || this.option.Draggable) {
            this.DraggableObj = this.dragService.Draggable(this.headerContainer.element.nativeElement, this.modelContainer.element.nativeElement);
            Utility_1.addClass(this.modelContainer.element.nativeElement, "as-model-draggable");
        }
    };
    ModelComponent.prototype.BuildClasses = function () {
        var classes = [];
        return classes;
    };
    __decorate([
        core_1.ViewChild('dgModelContent', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], ModelComponent.prototype, "contentContainer", void 0);
    __decorate([
        core_1.ViewChild('dgModel', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], ModelComponent.prototype, "modelContainer", void 0);
    __decorate([
        core_1.ViewChild('dgModelHeader', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], ModelComponent.prototype, "headerContainer", void 0);
    ModelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'as-model',
            template: "\n      <div class=\"as-dg-overlay\"></div><div class=\"as-dg as-model\" [ngClass]=\"SetClasses()\"><div class=\"as-dg-align\"></div><div class=\"as-dg-container\" [ngStyle]=\"style\" #dgModel><div class=\"as-dg-title\" #dgModelHeader><span [innerHtml]=\"option.Title\" class=\"title\"></span> <span class=\"as-dg-close\" (click)=\"Close()\" *ngIf=\"closeEnabled\">&times;</span></div><div class=\"as-dg-content\"><span #dgModelContent></span></div></div></div>\n    ",
            providers: [Draggable_Service_1.DraggableService]
        }), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, Draggable_Service_1.DraggableService])
    ], ModelComponent);
    return ModelComponent;
}());
exports.ModelComponent = ModelComponent;
