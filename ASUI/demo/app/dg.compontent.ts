import { Component, trigger, state, animate, transition, style } from '@angular/core';
import { ModelDialog } from 'ASUI/Dialog';
import { ModelService } from 'ASUI/Dialog';

@Component({
    moduleId: module.id,
    templateUrl: 'dg.compontent.html'
})
@ModelDialog({
    Title: "The Message",
    Height: 500,
    Width: 500
})
export class DgComponent {
    constructor(public modelService: ModelService) { }
    public Content: string = "Some text in the Modal..";
    openPopup() {
        this.modelService.CreateDialog(DgComponent);
    }
}
