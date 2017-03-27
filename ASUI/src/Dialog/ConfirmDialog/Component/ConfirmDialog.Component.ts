import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, Type, ComponentRef } from '@angular/core';
import { StyleBuilder } from './../../../Common/StyleBuilder';
import { isDefined, extend } from './../../../Common/Utility';
import { IConfirmDialogParam, ConfirmAction, ConfirmDialogEvent } from './../Shared/Model';
import { Subject } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    templateUrl: 'ConfirmDialog.Component.html'
})
export class ConfirmDialogComponent {
    constructor() {
    }
    private option: IConfirmDialogParam;
    private modelComponentRef: ComponentRef<ConfirmDialogComponent>;
    private style: {};
    private dbType: number;

    public OnAction: Subject<ConfirmDialogEvent> = new Subject();

    InitModel(dgType: number, modelComponentRef: ComponentRef<ConfirmDialogComponent>, option: IConfirmDialogParam) {
        this.dbType = dgType;
        this.modelComponentRef = modelComponentRef;
        this.option = extend(defaultOption, option);
        var styleBuilder = new StyleBuilder(this.option);
        this.style = styleBuilder.BuildStyle();
    }

    OnActionClicked(action: ConfirmAction) {
        this.Close();
        this.OnAction.next({ Action: action });
    }

    Close() {
        this.modelComponentRef.destroy();
    }

    SetClasses() {
        return this.BuildClasses();
    }

    private BuildClasses() {
        var classes: string[] = [];
        if (!this.option.Width) {
            classes.push("nowidth");
        }
        return classes;
    }
}
var defaultOption: IConfirmDialogParam = {
    Title: "",
    Message: "",
    CancelBtnText: "Cancel",
    OkBtnText: "Ok"
};