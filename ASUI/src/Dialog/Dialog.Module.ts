import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from './Model/Model.Module';
import { ConfirmDialogModule } from './ConfirmDialog/ConfirmDialog.Module';

@NgModule({
    imports: [BrowserModule, ConfirmDialogModule, ModelModule],
    exports: [ConfirmDialogModule, ModelModule]
})
export class DialogModule { }
