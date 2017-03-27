import { ModelService, ConfirmDialogService } from 'ASUI/Dialog';
export declare class AppComponent {
    modelService: ModelService;
    confirmDgService: ConfirmDialogService;
    constructor(modelService: ModelService, confirmDgService: ConfirmDialogService);
    name: string;
    openPopup(): void;
    openConfirm(): void;
    openAlert(): void;
}
