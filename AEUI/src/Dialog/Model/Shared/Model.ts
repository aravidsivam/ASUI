import { Subject } from 'rxjs/Subject';

export interface IdialogOption {
    Title?: string;
    Height?: string | number;
    Width?: string | number;
    CloseIcon?: boolean;
}
export interface CreateModelEvent<T> {
    OnClosed?: Subject<CloseModelEvent>;
    Instance?: T;
}
export interface CloseModelEvent {
}