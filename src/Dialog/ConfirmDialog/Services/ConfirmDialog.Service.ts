import { Injectable, Type, ComponentRef } from '@angular/core';
import { AnchorService } from './../../../Anchor/anchor.service';
import { ConfirmDialogComponent } from './../Component/ConfirmDialog.Component';
import { IConfirmDialogParam, IAlertDialogParam, ConfirmDialogEvent } from './../Shared/Model';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class ConfirmDialogService {

    constructor(private anchorService: AnchorService) {

    }
    public CreateConfirmBox(option: IConfirmDialogParam) {
        var componentRef = this.anchorService.CreateComponent(ConfirmDialogComponent);
        componentRef.instance.InitModel(0, componentRef, option);
        return componentRef.instance.OnAction;
    }

    public CreateAlertBox(option: IAlertDialogParam) {
        var componentRef = this.anchorService.CreateComponent(ConfirmDialogComponent);
        componentRef.instance.InitModel(1, componentRef, option);
        return componentRef.instance.OnAction;
    }
}

interface IdialogRef {
    componentRef: ComponentRef<ConfirmDialogComponent>;
}