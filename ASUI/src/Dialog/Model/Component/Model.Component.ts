import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, Type, ComponentRef } from '@angular/core';
import { IdialogOption, CloseModelEvent } from './../Shared/model';
import { StyleBuilder } from './../../../Common/StyleBuilder';
import { isDefined, addClass } from './../../../Common/Utility';
import { Subject } from 'rxjs/Rx';
import { IDraggableOption } from './../../../Draggable/Model';
import { DraggableService, IDraggableReturn } from './../../../Draggable/Draggable.Service';

@Component({
    moduleId: module.id,
    selector: 'as-model',
    templateUrl: 'Model.Component.html',
    providers: [DraggableService]
})
export class ModelComponent<T> implements OnInit {
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private dragService: DraggableService) {
    }

    @ViewChild('dgModelContent', { read: ViewContainerRef }) private contentContainer: ViewContainerRef;
    @ViewChild('dgModel', { read: ViewContainerRef }) private modelContainer: ViewContainerRef;
    @ViewChild('dgModelHeader', { read: ViewContainerRef }) private headerContainer: ViewContainerRef;
    DraggableObj: IDraggableReturn;
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

    ngOnDestroy() {
        if (this.DraggableObj) {
            this.DraggableObj.destory();
        }
    }

    private RenderModelContent() {
        this.option = Reflect.getMetadata("asmodeloption", this.componentType);
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentType);
        this.componentRef = this.contentContainer.createComponent(dialogComponentFactory);
        if (isDefined(this.option.CloseIcon))
            this.closeEnabled = this.option.CloseIcon;
        if (!isDefined(this.option.Draggable) || this.option.Draggable) {
            this.DraggableObj = this.dragService.Draggable(this.headerContainer.element.nativeElement, this.modelContainer.element.nativeElement);
            addClass(this.modelContainer.element.nativeElement, "as-model-draggable");
        }
    }

    private BuildClasses() {
        var classes: string[] = [];
        return classes;
    }
}
