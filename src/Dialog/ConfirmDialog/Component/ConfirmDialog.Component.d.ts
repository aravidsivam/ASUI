import { ComponentRef } from '@angular/core';
import { IConfirmDialogParam, ConfirmAction, ConfirmDialogEvent } from './../Shared/Model';
import { Subject } from 'rxjs/Rx';
export declare class ConfirmDialogComponent {
    constructor();
    private option;
    private modelComponentRef;
    private style;
    private dbType;
    OnAction: Subject<ConfirmDialogEvent>;
    InitModel(dgType: number, modelComponentRef: ComponentRef<ConfirmDialogComponent>, option: IConfirmDialogParam): void;
    OnActionClicked(action: ConfirmAction): void;
    Close(): void;
    SetClasses(): string[];
    private BuildClasses();
}
