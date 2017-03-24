import { Directive, ViewContainerRef, ComponentFactoryResolver, Injectable, ComponentRef, Type } from '@angular/core';
import { AnchorService } from './anchor.service';

@Directive({ selector: '[asAnchor]' })
export class AnchorDirective {
    constructor(private viewContainer: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver, private anchorService: AnchorService) {
        anchorService._createComponent = <T>(dialogComponent: Type<T>) => {
            return this.createDialog(dialogComponent);
        };
    }
    createDialog<T>(dialogComponent: Type<T>): ComponentRef<T> {
        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory<T>(dialogComponent);
        let dialogComponentRef = this.viewContainer.createComponent(dialogComponentFactory);
        return dialogComponentRef;
    }
}