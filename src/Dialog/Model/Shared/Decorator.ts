import { IdialogOption } from './model';
import { Type } from '@angular/core';

export function ModelDialog(option?: IdialogOption) {
    return function (digType: Type<any>) {
        Reflect.defineMetadata("asmodeloption", option, digType);
    }
}