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
var Utility_1 = require('./../Common/Utility');
var DraggableService = (function () {
    function DraggableService() {
        this.docMouseUp = new core_1.EventEmitter();
        this.handlerMouseDown = new core_1.EventEmitter();
        this.docMouseMove = new core_1.EventEmitter();
    }
    DraggableService.prototype.Draggable = function (handler, dragElement) {
        var _this = this;
        var listener = this.AddHandlerEvent(handler);
        var mousedrag = this.handlerMouseDown.map(function (event) {
            return {
                top: event.clientY - dragElement.getBoundingClientRect().top,
                left: event.clientX - dragElement.getBoundingClientRect().left
            };
        }).flatMap(function (imageOffset) { return _this.docMouseMove.map(function (pos) { return ({
            top: pos.clientY - imageOffset.top,
            left: pos.clientX - imageOffset.left
        }); })
            .takeUntil(_this.docMouseUp); });
        mousedrag.subscribe({
            next: function (pos) {
                Utility_1.addClass(dragElement, "as-dragged");
                dragElement.style.top = pos.top + 'px';
                dragElement.style.left = pos.left + 'px';
            }
        });
        return {
            destory: function () {
                _this.Destory(handler, dragElement, listener);
            }
        };
    };
    DraggableService.prototype.Destory = function (handler, dragElement, listener) {
        this.RemoveHandlerEvent(handler, listener);
    };
    DraggableService.prototype.AddHandlerEvent = function (handler) {
        var _this = this;
        var handlerMouseDownListener = function (event) {
            _this.handlerMouseDown.emit(event);
        };
        var docMouseUpListener = function (event) {
            _this.docMouseUp.emit(event);
        };
        var docMouseMoveListener = function (event) {
            _this.docMouseMove.emit(event);
        };
        handler.addEventListener("mousedown", handlerMouseDownListener);
        document.addEventListener("mouseup", docMouseUpListener);
        document.addEventListener("mousemove", docMouseMoveListener);
        return {
            handlerMouseDown: handlerMouseDownListener,
            docMouseUp: docMouseUpListener,
            docMouseMove: docMouseMoveListener
        };
    };
    DraggableService.prototype.RemoveHandlerEvent = function (handler, listener) {
        handler.removeEventListener("mousedown", listener.handlerMouseDown);
        document.removeEventListener("mouseup", listener.docMouseUp);
        document.removeEventListener("mousemove", listener.docMouseMove);
    };
    DraggableService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DraggableService);
    return DraggableService;
}());
exports.DraggableService = DraggableService;
