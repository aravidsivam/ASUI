import { Component } from '@angular/core';
import { ModelService, ConfirmDialogService } from 'ASUI/Dialog';
import { DgComponent } from './dg.compontent';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    constructor(public modelService: ModelService, public confirmDgService: ConfirmDialogService) {
    }
    name = 'Angular';

    openPopup() {
        var param = this.modelService.CreateDialog(DgComponent);
        param.Instance.Content = "Changed from App!!!!!!";
    }
    openConfirm() {
        this.confirmDgService.CreateConfirmBox({
            Message: "Are sure you need to delete?",
            Title: "Delete",
            OkBtnText: "Delete"
        }).subscribe((event) => {
            alert(event.Action);
        });
    }
    openAlert() {
        this.confirmDgService.CreateAlertBox({
            Title: "Alert alert!",
            Message: "This is a simple alert"
        });
    }
}
