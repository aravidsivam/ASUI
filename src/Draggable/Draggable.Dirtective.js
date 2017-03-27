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
require("rxjs/Rx");
var DraggableDirective = (function () {
    function DraggableDirective(elementRef) {
        this.elementRef = elementRef;
        this.docMouseUp = new core_1.EventEmitter();
        this.handlerMouseDown = new core_1.EventEmitter();
        this.docMouseMove = new core_1.EventEmitter();
        var option = this.options;
    }
    //@Output() onAsDragStart: EventEmitter<IAsDragStartEvent> = new EventEmitter();
    //@Output() onAsDragStop: EventEmitter<IAsDragStartEvent> = new EventEmitter();
    //@Output() onAsDrag: EventEmitter<IAsDragStartEvent> = new EventEmitter();
    DraggableDirective.prototype.onMouseup = function (event) {
        this.docMouseUp.emit(event);
    };
    DraggableDirective.prototype.onMousemove = function (event) {
        this.docMouseMove.emit(event);
    };
    Object.defineProperty(DraggableDirective.prototype, "LayoutElement", {
        get: function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    DraggableDirective.prototype.ngOnInit = function () {
        this.HandlerElement = this.LayoutElement.querySelector(this.options.handle);
        var listener = this.AddHandlerEvent();
        if (!this.options.disabled) {
            this.CreateDrag();
        }
    };
    DraggableDirective.prototype.ngOnDestroy = function () {
        this.Destory();
    };
    DraggableDirective.prototype.CreateDrag = function () {
        var _this = this;
        var mouseDragEvent = this.handlerMouseDown.map(function (event) {
            return {
                top: event.clientY - _this.LayoutElement.getBoundingClientRect().top,
                left: event.clientX - _this.LayoutElement.getBoundingClientRect().left
            };
        }).flatMap(function (imageOffset) { return _this.docMouseMove.map(function (event) { return ({
            ui: {
                top: event.clientY - imageOffset.top,
                left: event.clientX - imageOffset.left,
                handle: _this.HandlerElement
            },
            event: event
        }); })
            .takeUntil(_this.docMouseUp); });
        this.MouseDrag = mouseDragEvent.subscribe({
            next: function (pos) {
                //this.DragStarted(dragElement, triggerElement, pos);
                _this.LayoutElement.style.top = pos.ui.top + 'px';
                _this.LayoutElement.style.left = pos.ui.left + 'px';
            }
        });
    };
    DraggableDirective.prototype.Destory = function () {
        this.RemoveHandlerEvent();
        if (this.MouseDrag) {
            this.MouseDrag.unsubscribe();
        }
    };
    DraggableDirective.prototype.ngOnChanges = function (changes) {
    };
    DraggableDirective.prototype.AddHandlerEvent = function () {
        var _this = this;
        this.OnhandlerMouseDown = function (event) {
            _this.handlerMouseDown.emit(event);
        };
        this.HandlerElement.addEventListener("mousedown", this.OnhandlerMouseDown);
    };
    DraggableDirective.prototype.RemoveHandlerEvent = function () {
        this.HandlerElement.removeEventListener("mousedown", this.OnhandlerMouseDown);
        document.removeEventListener("mouseup", this.onMouseup);
        document.removeEventListener("mousemove", this.onMousemove);
    };
    return DraggableDirective;
}());
__decorate([
    core_1.HostListener('document:mouseup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], DraggableDirective.prototype, "onMouseup", null);
__decorate([
    core_1.HostListener('document:mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], DraggableDirective.prototype, "onMousemove", null);
__decorate([
    core_1.Input("asDraggable"),
    __metadata("design:type", Object)
], DraggableDirective.prototype, "options", void 0);
DraggableDirective = __decorate([
    core_1.Directive({
        selector: '[asDraggable]',
        providers: []
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], DraggableDirective);
exports.DraggableDirective = DraggableDirective;
var dragEventName = {
    start: "asDragStart",
    stop: "asDragStop"
};
//# sourceMappingURL=Draggable.Dirtective.js.map