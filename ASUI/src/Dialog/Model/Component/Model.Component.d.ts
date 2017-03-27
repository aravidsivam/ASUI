import { OnInit, ComponentFactoryResolver, Type, ComponentRef } from '@angular/core';
import { CloseModelEvent } from './../Shared/model';
import { Subject } from 'rxjs/Rx';
import { DraggableService, IDraggableReturn } from './../../../Draggable/Draggable.Service';
export declare class ModelComponent<T> implements OnInit {
    private componentFactoryResolver;
    private dragService;
    constructor(componentFactoryResolver: ComponentFactoryResolver, dragService: DraggableService);
    private contentContainer;
    private modelContainer;
    private headerContainer;
    DraggableObj: IDraggableReturn;
    OnClosed: Subject<CloseModelEvent>;
    closeEnabled: boolean;
    private modelComponentRef;
    private componentType;
    private componentRef;
    private option;
    private style;
    readonly Instance: T;
    ngOnInit(): void;
    Close(): void;
    SetClasses(): string[];
    InitModel(ComponentType: Type<T>, modelComponentRef: ComponentRef<ModelComponent<T>>): void;
    ngOnDestroy(): void;
    private RenderModelContent();
    private BuildClasses();
}
