import { OnInit, ComponentFactoryResolver, Type, ComponentRef } from '@angular/core';
import { CloseModelEvent } from './../Shared/model';
import { Subject } from 'rxjs/Rx';
import { IModelComponent } from './../Shared/Model';
export declare class ModelComponent<T extends IModelComponent> implements OnInit {
    private componentFactoryResolver;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    private contentContainer;
    private modelContainer;
    private headerContainer;
    OnClosed: Subject<CloseModelEvent>;
    closeEnabled: boolean;
    private modelComponentRef;
    private componentType;
    private componentRef;
    private option;
    private style;
    readonly Instance: T;
    ngOnInit(): void;
    OnCloseClicked(): void;
    SetClasses(): string[];
    InitModel(ComponentType: Type<T>, modelComponentRef: ComponentRef<ModelComponent<T>>): void;
    private CloseDialogBox();
    private RenderModelContent();
    private focusDialogContent();
    private BuildClasses();
}
