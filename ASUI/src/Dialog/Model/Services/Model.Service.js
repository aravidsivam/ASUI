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
var anchor_service_1 = require('./../../../Anchor/anchor.service');
var model_component_1 = require('./../Component/model.component');
var ModelService = (function () {
    function ModelService(anchorService) {
        this.anchorService = anchorService;
        this._digCollection = [];
    }
    ModelService.prototype.CreateDialog = function (digType) {
        var _this = this;
        var componentRef = this.anchorService.CreateComponent(model_component_1.ModelComponent);
        componentRef.instance.InitModel(digType, componentRef);
        var digParam = { componentRef: componentRef };
        this._digCollection.push(digParam);
        componentRef.instance.OnClosed.subscribe(function () {
            var index = _this._digCollection.indexOf(digParam);
            _this._digCollection.splice(index, 1);
        });
        return {
            Instance: componentRef.instance.Instance,
            OnClosed: componentRef.instance.OnClosed
        };
    };
    ModelService.prototype.CloseAll = function () {
        this._digCollection.forEach(function (dig) {
            dig.componentRef.instance.Close();
        });
    };
    ModelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [anchor_service_1.AnchorService])
    ], ModelService);
    return ModelService;
}());
exports.ModelService = ModelService;
