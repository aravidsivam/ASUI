export interface IConfirmDialogParam {
    Title?: string;
    Message: string;
    Height?: number | string;
    Width?: number | string;
    Type?: ConfirmType;
}
export enum ConfirmAction {
    Confirmed,
    Cancel
}

export interface ConfirmDialogEvent {
    Action: ConfirmAction;
}
export enum ConfirmType {
    YesNo,
    OkCancel
}