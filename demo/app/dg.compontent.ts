import { Component, trigger, state, animate, transition, style, HostListener } from '@angular/core';
import { ModelDialog, ModelService, ConfirmDialogService, IModelComponent, ConfirmAction } from 'ASUI/Dialog';
import { Subject } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    templateUrl: 'dg.compontent.html'
})
@ModelDialog({
    Title: "The Message",
    Height: 500,
    Width: 500,
    Draggable: false
})
export class DgComponent implements IModelComponent {
    constructor(public modelService: ModelService, private confirmDialogService: ConfirmDialogService) { }
    public Content: string = "";
    openPopup() {
        this.modelService.CreateDialog(DgComponent);
    }
    OnBeforeClose() {
        var close = new Subject<boolean>();
        this.confirmDialogService.CreateConfirmBox({ Title: "Confirm Box", Message: "Are you sure to close?" }).subscribe((result) => {
            close.next(result.Action == ConfirmAction.Confirmed);
        });
        return close;
    }
}
