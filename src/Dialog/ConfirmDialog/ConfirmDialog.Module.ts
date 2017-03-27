import { NgModule, Type, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmDialogComponent } from './Component/ConfirmDialog.Component';
import { ConfirmDialogService } from './Services/ConfirmDialog.Service';
import { AnchorModule } from './../../Anchor/anchor.module';

@NgModule({
    imports: [BrowserModule, { ngModule: AnchorModule, providers: [{ provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: [ConfirmDialogComponent], multi: true }] }],
    declarations: [ConfirmDialogComponent],
    providers: [ConfirmDialogService]
})
export class ConfirmDialogModule {
}
