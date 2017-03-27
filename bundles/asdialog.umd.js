(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/Rx'), require('@angular/platform-browser')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/Rx', '@angular/platform-browser'], factory) :
	(factory((global['ASUI/Dialog'] = global['ASUI/Dialog'] || {}),global.core_1,global.Rx_1,global.platform_browser_1));
}(this, (function (exports,core_1,Rx_1,platform_browser_1) { 'use strict';

core_1 = 'default' in core_1 ? core_1['default'] : core_1;
Rx_1 = 'default' in Rx_1 ? Rx_1['default'] : Rx_1;
platform_browser_1 = 'default' in platform_browser_1 ? platform_browser_1['default'] : platform_browser_1;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function isNumber(value) {
    return typeof value == 'number';
}
var isNumber_1 = isNumber;
function isDefined(value) {
    return value != undefined;
}
var isDefined_1 = isDefined;
function extend(obj, obj2) {
    for (var prop in obj2) {
        obj[prop] = obj2[prop];
    }
    return obj;
}
var extend_1 = extend;
function hasClass(element, className) {
    var classNames = element.className.split(" ");
    return classNames.indexOf(className) >= 0;
}
var hasClass_1 = hasClass;
function addClass(element, className) {
    if (!hasClass(element, className))
        element.className += " " + className;
}
var addClass_1 = addClass;

var Utility = {
	isNumber: isNumber_1,
	isDefined: isDefined_1,
	extend: extend_1,
	hasClass: hasClass_1,
	addClass: addClass_1
};

var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StyleBuilder = (function () {
    function StyleBuilder(_styleObj) {
        this._styleObj = _styleObj;
    }
    StyleBuilder.prototype.BuildStyle = function () {
        var style = {};
        for (var propName in this._styleObj) {
            var propStyleCB = this._styleBuilder(propName, this._styleObj[propName]);
            if (propStyleCB) {
                var propStyle = propStyleCB();
                for (var syName in propStyle)
                    style[syName] = propStyle[syName];
            }
        }
        return style;
    };
    StyleBuilder.prototype._styleBuilder = function (propName, value) {
        var _this = this;
        var _builder = {
            Top: function () {
                return {
                    top: _this.formatSize(value)
                };
            },
            Height: function () {
                return {
                    height: _this.formatSize(value)
                };
            },
            Width: function () {
                return {
                    width: _this.formatSize(value)
                };
            }
        };
        return _builder[propName];
    };
    
    StyleBuilder.prototype.formatSize = function (size) {
        return (Utility.isNumber(size) ? size + "px" : size);
    };
    StyleBuilder = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Object])
    ], StyleBuilder);
    return StyleBuilder;
}());
var StyleBuilder_2 = StyleBuilder;

var StyleBuilder_1 = {
	StyleBuilder: StyleBuilder_2
};

var __decorate$1 = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
                Utility.addClass(dragElement, "as-dragged");
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
    DraggableService = __decorate$1([
        core_1.Injectable(), 
        __metadata$1('design:paramtypes', [])
    ], DraggableService);
    return DraggableService;
}());
var DraggableService_1 = DraggableService;

var Draggable_Service = {
	DraggableService: DraggableService_1
};

var Model_Component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
        if (Utility.isDefined(this.option.CloseIcon))
            this.closeEnabled = this.option.CloseIcon;
        if (!Utility.isDefined(this.option.Draggable) || this.option.Draggable) {
            this.DraggableObj = this.dragService.Draggable(this.headerContainer.element.nativeElement, this.modelContainer.element.nativeElement);
            Utility.addClass(this.modelContainer.element.nativeElement, "as-model-draggable");
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
            providers: [Draggable_Service.DraggableService]
        }), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, Draggable_Service.DraggableService])
    ], ModelComponent);
    return ModelComponent;
}());
exports.ModelComponent = ModelComponent;
});

var __decorate$3 = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnchorService = (function () {
    function AnchorService() {
    }
    AnchorService.prototype.CreateComponent = function (arg) {
        if (this._createComponent)
            return this._createComponent(arg);
        throw new Error("Anchor dirtective is not defined.");
    };
    AnchorService = __decorate$3([
        core_1.Injectable(), 
        __metadata$3('design:paramtypes', [])
    ], AnchorService);
    return AnchorService;
}());
var AnchorService_1 = AnchorService;

var anchor_service = {
	AnchorService: AnchorService_1
};

var model_component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
        if (Utility.isDefined(this.option.CloseIcon))
            this.closeEnabled = this.option.CloseIcon;
        if (!Utility.isDefined(this.option.Draggable) || this.option.Draggable) {
            this.DraggableObj = this.dragService.Draggable(this.headerContainer.element.nativeElement, this.modelContainer.element.nativeElement);
            Utility.addClass(this.modelContainer.element.nativeElement, "as-model-draggable");
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
            providers: [Draggable_Service.DraggableService]
        }), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, Draggable_Service.DraggableService])
    ], ModelComponent);
    return ModelComponent;
}());
exports.ModelComponent = ModelComponent;
});

var __decorate$2 = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModelService = (function () {
    function ModelService(anchorService) {
        this.anchorService = anchorService;
        this._digCollection = [];
    }
    ModelService.prototype.CreateDialog = function (digType) {
        var _this = this;
        var componentRef = this.anchorService.CreateComponent(model_component.ModelComponent);
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
    ModelService = __decorate$2([
        core_1.Injectable(), 
        __metadata$2('design:paramtypes', [anchor_service.AnchorService])
    ], ModelService);
    return ModelService;
}());
var ModelService_1 = ModelService;

var Model_Service = {
	ModelService: ModelService_1
};

var __decorate$5 = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModelService$1 = (function () {
    function ModelService(anchorService) {
        this.anchorService = anchorService;
        this._digCollection = [];
    }
    ModelService.prototype.CreateDialog = function (digType) {
        var _this = this;
        var componentRef = this.anchorService.CreateComponent(model_component.ModelComponent);
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
    ModelService = __decorate$5([
        core_1.Injectable(), 
        __metadata$5('design:paramtypes', [anchor_service.AnchorService])
    ], ModelService);
    return ModelService;
}());
var ModelService_1$1 = ModelService$1;

var model_service = {
	ModelService: ModelService_1$1
};

var __decorate$7 = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$7 = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    AnchorDirective = __decorate$7([
        core_1.Directive({ selector: '[asAnchor]' }), 
        __metadata$7('design:paramtypes', [core_1.ViewContainerRef, core_1.ComponentFactoryResolver, anchor_service.AnchorService])
    ], AnchorDirective);
    return AnchorDirective;
}());
var AnchorDirective_1 = AnchorDirective;

var anchor_dirtective = {
	AnchorDirective: AnchorDirective_1
};

var __decorate$6 = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$6 = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnchorModule = (function () {
    function AnchorModule() {
    }
    AnchorModule.WithComponents = function (components) {
        return {
            ngModule: AnchorModule,
            providers: [
                { provide: core_1.ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
            ]
        };
    };
    AnchorModule = __decorate$6([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [anchor_dirtective.AnchorDirective],
            providers: [anchor_service.AnchorService],
            exports: [anchor_dirtective.AnchorDirective]
        }), 
        __metadata$6('design:paramtypes', [])
    ], AnchorModule);
    return AnchorModule;
}());
var AnchorModule_1 = AnchorModule;

var anchor_module = {
	AnchorModule: AnchorModule_1
};

var __decorate$9 = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$9 = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    __decorate$9([
        core_1.Input("asDraggable"), 
        __metadata$9('design:type', Object)
    ], DraggableDirective.prototype, "options", void 0);
    DraggableDirective = __decorate$9([
        core_1.Directive({
            selector: '[asDraggable]',
            providers: [Draggable_Service.DraggableService]
        }), 
        __metadata$9('design:paramtypes', [core_1.ElementRef, Draggable_Service.DraggableService])
    ], DraggableDirective);
    return DraggableDirective;
}());
var DraggableDirective_1 = DraggableDirective;

var Draggable_Dirtective = {
	DraggableDirective: DraggableDirective_1
};

var __decorate$8 = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$8 = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DraggableModule = (function () {
    function DraggableModule() {
    }
    DraggableModule = __decorate$8([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [Draggable_Dirtective.DraggableDirective],
            exports: [Draggable_Dirtective.DraggableDirective]
        }), 
        __metadata$8('design:paramtypes', [])
    ], DraggableModule);
    return DraggableModule;
}());
var DraggableModule_1 = DraggableModule;

var Draggable_module = {
	DraggableModule: DraggableModule_1
};

var __decorate$4 = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModelModule = (function () {
    function ModelModule() {
    }
    ModelModule.WithComponents = function (components) {
        return [
            ModelModule,
            {
                ngModule: anchor_module.AnchorModule,
                providers: [
                    { provide: core_1.ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
                ]
            }
        ];
    };
    ModelModule = __decorate$4([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, Draggable_module.DraggableModule],
            declarations: [model_component.ModelComponent],
            providers: [model_service.ModelService],
            entryComponents: [model_component.ModelComponent]
        }), 
        __metadata$4('design:paramtypes', [])
    ], ModelModule);
    return ModelModule;
}());
var ModelModule_1 = ModelModule;

var Model_Module = {
	ModelModule: ModelModule_1
};

function ModelDialog(option) {
    return function (digType) {
        Reflect.defineMetadata("asmodeloption", option, digType);
    };
}
var ModelDialog_1 = ModelDialog;

var Decorator = {
	ModelDialog: ModelDialog_1
};

var ConfirmDialog_Component = createCommonjsModule(function (module, exports) {
"use strict";
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfirmDialogComponent = (function () {
    function ConfirmDialogComponent() {
        this.OnAction = new Rx_1.Subject();
    }
    ConfirmDialogComponent.prototype.InitModel = function (dgType, modelComponentRef, option) {
        this.dbType = dgType;
        this.modelComponentRef = modelComponentRef;
        this.option = Utility.extend(defaultOption, option);
        var styleBuilder = new StyleBuilder_1.StyleBuilder(this.option);
        this.style = styleBuilder.BuildStyle();
    };
    ConfirmDialogComponent.prototype.OnActionClicked = function (action) {
        this.Close();
        this.OnAction.next({ Action: action });
    };
    ConfirmDialogComponent.prototype.Close = function () {
        this.modelComponentRef.destroy();
    };
    ConfirmDialogComponent.prototype.SetClasses = function () {
        return this.BuildClasses();
    };
    ConfirmDialogComponent.prototype.BuildClasses = function () {
        var classes = [];
        if (!this.option.Width) {
            classes.push("nowidth");
        }
        return classes;
    };
    ConfirmDialogComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            template: "\n      <div class=\"as-dg-overlay\"></div><div class=\"as-dg as-cmd\"><div class=\"as-dg-align\"></div><div class=\"as-dg-container\" [ngClass]=\"SetClasses()\" [ngStyle]=\"style\"><div class=\"as-dg-title\"><span [innerHtml]=\"option.Title\" class=\"title\"></span></div><div class=\"as-dg-content\" [innerHtml]=\"option.Message\"></div><div class=\"as-cmd-footer\"><button class=\"as-btn as-btn-default\" (click)=\"OnActionClicked(1)\" *ngIf=\"dbType!=1\"><span [innerHtml]=\"option.CancelBtnText\"></span></button> <button class=\"as-btn as-btn-primary\" (click)=\"OnActionClicked(0)\"><span [innerHtml]=\"option.OkBtnText\"></span></button></div></div></div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());
exports.ConfirmDialogComponent = ConfirmDialogComponent;
var defaultOption = {
    Title: "",
    Message: "",
    CancelBtnText: "Cancel",
    OkBtnText: "Ok"
};
});

var __decorate$10 = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$10 = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmDialogService = (function () {
    function ConfirmDialogService(anchorService) {
        this.anchorService = anchorService;
    }
    ConfirmDialogService.prototype.CreateConfirmBox = function (option) {
        var componentRef = this.anchorService.CreateComponent(ConfirmDialog_Component.ConfirmDialogComponent);
        componentRef.instance.InitModel(0, componentRef, option);
        return componentRef.instance.OnAction;
    };
    ConfirmDialogService.prototype.CreateAlertBox = function (option) {
        var componentRef = this.anchorService.CreateComponent(ConfirmDialog_Component.ConfirmDialogComponent);
        componentRef.instance.InitModel(1, componentRef, option);
        return componentRef.instance.OnAction;
    };
    ConfirmDialogService = __decorate$10([
        core_1.Injectable(), 
        __metadata$10('design:paramtypes', [anchor_service.AnchorService])
    ], ConfirmDialogService);
    return ConfirmDialogService;
}());
var ConfirmDialogService_1 = ConfirmDialogService;

var ConfirmDialog_Service = {
	ConfirmDialogService: ConfirmDialogService_1
};

var __decorate$11 = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$11 = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfirmDialogModule = (function () {
    function ConfirmDialogModule() {
    }
    ConfirmDialogModule = __decorate$11([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, { ngModule: anchor_module.AnchorModule, providers: [{ provide: core_1.ANALYZE_FOR_ENTRY_COMPONENTS, useValue: [ConfirmDialog_Component.ConfirmDialogComponent], multi: true }] }],
            declarations: [ConfirmDialog_Component.ConfirmDialogComponent],
            providers: [ConfirmDialog_Service.ConfirmDialogService]
        }), 
        __metadata$11('design:paramtypes', [])
    ], ConfirmDialogModule);
    return ConfirmDialogModule;
}());
var ConfirmDialogModule_1 = ConfirmDialogModule;

var ConfirmDialog_Module = {
	ConfirmDialogModule: ConfirmDialogModule_1
};



var Model = Object.freeze({

});

var __decorate$12 = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$12 = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogModule = (function () {
    function DialogModule() {
    }
    DialogModule = __decorate$12([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, ConfirmDialog_Module.ConfirmDialogModule, Model_Module.ModelModule],
            exports: [ConfirmDialog_Module.ConfirmDialogModule, Model_Module.ModelModule]
        }), 
        __metadata$12('design:paramtypes', [])
    ], DialogModule);
    return DialogModule;
}());
var DialogModule_1 = DialogModule;

var Dialog_Module = {
	DialogModule: DialogModule_1
};

var require$$0 = ( Model && undefined ) || Model;

var index = createCommonjsModule(function (module, exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

exports.ModelComponent = Model_Component.ModelComponent;

exports.ModelService = Model_Service.ModelService;

exports.ModelModule = Model_Module.ModelModule;

exports.ModelDialog = Decorator.ModelDialog;

exports.ConfirmDialogService = ConfirmDialog_Service.ConfirmDialogService;

exports.ConfirmDialogModule = ConfirmDialog_Module.ConfirmDialogModule;
__export(require$$0);

exports.DialogModule = Dialog_Module.DialogModule;
});

var index_1 = index.ModelComponent;
var index_2 = index.ModelService;
var index_3 = index.ModelModule;
var index_4 = index.ModelDialog;
var index_5 = index.ConfirmDialogService;
var index_6 = index.ConfirmDialogModule;
var index_7 = index.DialogModule;

exports['default'] = index;
exports.ModelComponent = index_1;
exports.ModelService = index_2;
exports.ModelModule = index_3;
exports.ModelDialog = index_4;
exports.ConfirmDialogService = index_5;
exports.ConfirmDialogModule = index_6;
exports.DialogModule = index_7;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=asdialog.umd.js.map
