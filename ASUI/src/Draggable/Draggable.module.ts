import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS, Type, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DraggableDirective } from './Draggable.Dirtective';

@NgModule({
    imports: [BrowserModule],
    declarations: [DraggableDirective],
    exports: [DraggableDirective]
})

export class DraggableModule {

}