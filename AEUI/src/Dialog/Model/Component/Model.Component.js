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
var StyleBuilder_1 = require("./../../Common/StyleBuilder");
var Utility_1 = require("./../../Common/Utility");
var Subject_1 = require("rxjs/Subject");
var ModelComponent = (function () {
    function ModelComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.OnClosed = new Subject_1.Subject();
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
    ModelComponent.prototype.RenderModelContent = function () {
        this.option = Reflect.getMetadata("asmodeloption", this.componentType);
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentType);
        this.componentRef = this.widgetContainer.createComponent(dialogComponentFactory);
        if (Utility_1.isDefined(this.option.CloseIcon))
            this.closeEnabled = this.option.CloseIcon;
    };
    ModelComponent.prototype.BuildClasses = function () {
        var classes = [];
        return classes;
    };
    return ModelComponent;
}());
__decorate([
    core_1.ViewChild('dgModelContent', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], ModelComponent.prototype, "widgetContainer", void 0);
ModelComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'as-model',
        templateUrl: 'Model.Component.html'
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
], ModelComponent);
exports.ModelComponent = ModelComponent;
//# sourceMappingURL=Model.Component.js.map