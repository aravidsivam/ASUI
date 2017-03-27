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
require('rxjs/Rx');
var Draggable_Service_1 = require('./Draggable.Service');
var DraggableDirective = (function () {
    function DraggableDirective(elementRef, dragService) {
        this.elementRef = elementRef;
        this.dragService = dragService;
        var option = this.options;
    }
    Object.defineProperty(DraggableDirective.prototype, "LayoutElement", {
        get: function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    DraggableDirective.prototype.ngOnInit = function () {
        this.HandlerElement = this.LayoutElement.querySelector(this.options.Handle);
        this.dragService.Draggable(this.HandlerElement, this.LayoutElement);
    };
    __decorate([
        core_1.Input("asDraggable"), 
        __metadata('design:type', Object)
    ], DraggableDirective.prototype, "options", void 0);
    DraggableDirective = __decorate([
        core_1.Directive({
            selector: '[asDraggable]',
            providers: [Draggable_Service_1.DraggableService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, Draggable_Service_1.DraggableService])
    ], DraggableDirective);
    return DraggableDirective;
}());
exports.DraggableDirective = DraggableDirective;
