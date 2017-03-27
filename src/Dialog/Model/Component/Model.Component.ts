import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, Type, ComponentRef } from '@angular/core';
import { IdialogOption, CloseModelEvent } from './../Shared/model';
import { StyleBuilder } from './../../../Common/StyleBuilder';
import { isDefined, addClass, isBoolean } from './../../../Common/Utility';
import { Subject } from 'rxjs/Rx';
import { IDraggableOption } from './../../../Draggable/Draggable.Dirtective';
import { IModelComponent } from './../Shared/Model';

@Component({
    moduleId: module.id,
    selector: 'as-model',
    templateUrl: 'Model.Component.html'
})
export class ModelComponent<T extends IModelComponent> implements OnInit {
    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    @ViewChild('dgModelContent', { read: ViewContainerRef }) private contentContainer: ViewContainerRef;
    @ViewChild('dgModel', { read: ViewContainerRef }) private modelContainer: ViewContainerRef;
    @ViewChild('dgModelHeader', { read: ViewContainerRef }) private headerContainer: ViewContainerRef;

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

    OnCloseClicked() {
        if (this.Instance.OnBeforeClose) {
            var result = this.Instance.OnBeforeClose();
            if (isBoolean(result)) {
                if (result)
                    this.CloseDialogBox();
            } else {
                (<Subject<boolean>>result).subscribe((isClose) => {
                    if (isClose)
                        this.CloseDialogBox();
                });
            }

        } else
            this.CloseDialogBox();
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
    private CloseDialogBox() {
        this.modelComponentRef.destroy();
        this.OnClosed.next({});
    }

    private RenderModelContent() {
        this.option = Reflect.getMetadata("asmodeloption", this.componentType);
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentType);
        this.componentRef = this.contentContainer.createComponent(dialogComponentFactory);
        this.componentRef.instance.CloseMe = () => {
            this.CloseDialogBox();
        };
        if (isDefined(this.option.CloseIcon))
            this.closeEnabled = this.option.CloseIcon;
        if (!isDefined(this.option.Draggable) || this.option.Draggable) {
            addClass(this.modelContainer.element.nativeElement, "as-model-draggable");
        }
        this.focusDialogContent();
    }
    private focusDialogContent() {
        var focusElement = <HTMLElement>(<Element>this.componentRef.location.nativeElement).querySelector("[tabindex~='0'],input,select,textarea");
        if (focusElement)
            focusElement.focus();
    }
    private BuildClasses() {
        var classes: string[] = [];
        return classes;
    }
}
