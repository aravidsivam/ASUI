import { Type } from '@angular/core';
import { AnchorService } from './../../../Anchor/anchor.service';
import { CreateModelEvent } from './../Shared/Model';
export declare class ModelService {
    private anchorService;
    constructor(anchorService: AnchorService);
    private _digCollection;
    CreateDialog<T>(digType: Type<T>): CreateModelEvent<T>;
    CloseAll(): void;
}
