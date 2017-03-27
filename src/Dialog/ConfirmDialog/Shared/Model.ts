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
export enum ConfirmAction {
    Confirmed,
    Cancel
}
export interface ConfirmDialogEvent {
    Action: ConfirmAction;
}