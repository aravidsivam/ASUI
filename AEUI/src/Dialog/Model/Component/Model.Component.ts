import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, Type, ComponentRef } from '@angular/core';
import { IdialogOption, CloseModelEvent } from './../Shared/model';
import { StyleBuilder } from './../../Common/StyleBuilder';
import { isDefined } from './../../Common/Utility';
import { Subject } from 'rxjs/Subject';

@Component({
    moduleId: module.id,
    selector: 'as-model',
    templateUrl: 'Model.Component.html'
})
export class ModelComponent<T> implements OnInit {
    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    @ViewChild('dgModelContent', { read: ViewContainerRef }) private widgetContainer: ViewContainerRef;
    OnClosed: Subject<CloseModelEvent> = new Subject();
    closeEnabled: boolean = true;

    private modelComponentRef: ComponentRef<ModelComponent<T>>;
    private componentType: Type<T>;
    private componentRef: ComponentRef<T>;
    private option: IdialogOption;
    private style: {};

    get Instance(): T {
        return this.componentRef.instance;
    }

    ngOnInit() {
    }

    Close() {
        this.modelComponentRef.destroy();
        this.OnClosed.next({});
    }

    SetClasses() {
        return this.BuildClasses();
    }

    InitModel(ComponentType: Type<T>, modelComponentRef: ComponentRef<ModelComponent<T>>) {
        this.modelComponentRef = modelComponentRef;
        this.componentType = ComponentType;
        this.RenderModelContent();
        var styleBuilder = new StyleBuilder(this.option);
        this.style = styleBuilder.BuildStyle();
    }

    private RenderModelContent() {
        this.option = Reflect.getMetadata("asmodeloption", this.componentType);
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentType);
        this.componentRef = this.widgetContainer.createComponent(dialogComponentFactory);
        if (isDefined(this.option.CloseIcon))
            this.closeEnabled = this.option.CloseIcon;
    }

    private BuildClasses() {
        var classes: string[] = [];
        return classes;
    }
}
