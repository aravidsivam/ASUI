import { Injectable, Type, ComponentRef } from '@angular/core';
import { AnchorService } from './../../../Anchor/anchor.service';
import { ConfirmDialogComponent } from './../Component/ConfirmDialog.Component';
import { IConfirmDialogParam } from './../Shared/Model';

@Injectable()
export class ConfirmDialogService {

    constructor(private anchorService: AnchorService) {

    }
    CreateConfirmBox(option: IConfirmDialogParam) {
        var componentRef = this.anchorService.CreateComponent(ConfirmDialogComponent);
        componentRef.instance.InitModel(0, componentRef, option);
        return componentRef.instance.OnAction;
    }

    CreateAlertBox(option: IConfirmDialogParam) {
        var componentRef = this.anchorService.CreateComponent(ConfirmDialogComponent);
        componentRef.instance.InitModel(1, componentRef, option);
        return componentRef.instance.OnAction;
    }
}

interface IdialogRef {
    componentRef: ComponentRef<ConfirmDialogComponent>;
}