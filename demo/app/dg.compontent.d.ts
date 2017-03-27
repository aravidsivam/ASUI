import { ModelService, ConfirmDialogService, IModelComponent } from 'ASUI/Dialog';
import { Subject } from 'rxjs/Rx';
export declare class DgComponent implements IModelComponent {
    modelService: ModelService;
    private confirmDialogService;
    constructor(modelService: ModelService, confirmDialogService: ConfirmDialogService);
    Content: string;
    openPopup(): void;
    OnBeforeClose(): Subject<boolean>;
}
