import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from './Model/Model.Module';
import { ConfirmDialogModule } from './ConfirmDialog/ConfirmDialog.Module';
import {DraggableModule } from './../Draggable/Draggable.module';

@NgModule({
    imports: [BrowserModule, ConfirmDialogModule, ModelModule, DraggableModule],
    exports: [ConfirmDialogModule, ModelModule]
})
export class DialogModule { }
