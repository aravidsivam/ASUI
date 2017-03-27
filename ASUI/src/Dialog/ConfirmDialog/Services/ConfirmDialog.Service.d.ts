import { AnchorService } from './../../../Anchor/anchor.service';
import { IConfirmDialogParam, IAlertDialogParam, ConfirmDialogEvent } from './../Shared/Model';
import { Subject } from 'rxjs/Rx';
export declare class ConfirmDialogService {
    private anchorService;
    constructor(anchorService: AnchorService);
    CreateConfirmBox(option: IConfirmDialogParam): Subject<ConfirmDialogEvent>;
    CreateAlertBox(option: IAlertDialogParam): Subject<ConfirmDialogEvent>;
}
