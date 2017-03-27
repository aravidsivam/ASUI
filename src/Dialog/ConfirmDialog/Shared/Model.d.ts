export interface IDialogParam {
    Title?: string;
    Message: string;
    Height?: number | string;
    Width?: number | string;
    OkBtnText?: string;
}
export interface IConfirmDialogParam extends IDialogParam {
    CancelBtnText?: string;
}
export interface IAlertDialogParam extends IDialogParam {
}
export declare enum ConfirmAction {
    Confirmed = 0,
    Cancel = 1,
}
export interface ConfirmDialogEvent {
    Action: ConfirmAction;
}
