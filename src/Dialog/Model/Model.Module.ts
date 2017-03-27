import { NgModule, Type, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModelComponent } from './Component/model.component';
import { ModelService } from './Services/model.service';
import { AnchorModule } from './../../Anchor/anchor.module';
import { DraggableModule } from './../../Draggable/Draggable.module';

@NgModule({
    imports: [BrowserModule, DraggableModule],
    declarations: [ModelComponent],
    providers: [ModelService],
    entryComponents: [ModelComponent]
})
export class ModelModule {
    static WithComponents(components: Array<Type<any>>): Array<any> {
        return [
            ModelModule,
            {
                ngModule: AnchorModule,
                providers: [
                    { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
                ]
            }
        ]
    }
}
