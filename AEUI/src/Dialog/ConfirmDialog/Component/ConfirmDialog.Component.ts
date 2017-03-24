import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, Type, ComponentRef } from '@angular/core';
import { StyleBuilder } from './../../Common/StyleBuilder';
import { isDefined } from './../../Common/Utility';
import { IConfirmDialogParam, ConfirmAction, ConfirmDialogEvent, ConfirmType } from './../Shared/Model';
import { Subject } from 'rxjs/Subject';

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

    CancelBtnTxt: string = "Cancel";
    OkBtnTxt: string = "Ok";

    OnAction: Subject<ConfirmDialogEvent> = new Subject();

    InitModel(dgType: number, modelComponentRef: ComponentRef<ConfirmDialogComponent>, option: IConfirmDialogParam) {
        this.dbType = dgType;
        this.modelComponentRef = modelComponentRef;
        this.option = option;
        var styleBuilder = new StyleBuilder(this.option);
        this.style = styleBuilder.BuildStyle();
        this.OptionParser();
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

    private OptionParser() {
        if (isDefined(this.option.Type)) {
            this.BtnTypeParser(this.option.Type);
        }
    }

    private BtnTypeParser(btnType: ConfirmType) {
        if (btnType == ConfirmType.OkCancel) {
            this.CancelBtnTxt = "Cancel";
            this.OkBtnTxt = "Ok";
        }
        else if (btnType == ConfirmType.YesNo) {
            this.CancelBtnTxt = "No";
            this.OkBtnTxt = "Yes";
        }
    }

    private BuildClasses() {
        var classes: string[] = [];
        if (!this.option.Width) {
            classes.push("nowidth");
        }
        return classes;
    }
}