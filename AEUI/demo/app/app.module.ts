import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DgComponent } from './dg.compontent';
import { ModelModule, ModelService, ConfirmDialogModule, ConfirmDialogService } from 'ASUI/Dialog';

@NgModule({
    imports: [BrowserModule, ModelModule.WithComponents([DgComponent]), ConfirmDialogModule],
    declarations: [AppComponent, DgComponent],
    providers: [ModelService, ConfirmDialogService],
    bootstrap: [AppComponent]
})
export class AppModule { }
