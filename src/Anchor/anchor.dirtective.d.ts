import { ViewContainerRef, ComponentFactoryResolver, ComponentRef, Type } from '@angular/core';
import { AnchorService } from './anchor.service';
export declare class AnchorDirective {
    private viewContainer;
    private componentFactoryResolver;
    private anchorService;
    constructor(viewContainer: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver, anchorService: AnchorService);
    createDialog<T>(dialogComponent: Type<T>): ComponentRef<T>;
}
