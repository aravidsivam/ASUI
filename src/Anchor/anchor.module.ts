import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS, Type, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnchorDirective } from './anchor.dirtective';
import { AnchorService } from './anchor.service';
@NgModule({
    imports: [BrowserModule],
    declarations: [AnchorDirective],
    providers: [AnchorService],
    exports: [AnchorDirective]
})

export class AnchorModule {

    static WithComponents(components: Array<Type<any>>): ModuleWithProviders {
        return {
            ngModule: AnchorModule,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
            ]
        }
    }

}