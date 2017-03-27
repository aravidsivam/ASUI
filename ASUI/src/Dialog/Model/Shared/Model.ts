import { Subject } from 'rxjs/Rx';

export interface IdialogOption {
    Title?: string;
    Height?: string | number;
    Width?: string | number;
    CloseIcon?: boolean;
    Draggable?: boolean;
}
export interface CreateModelEvent<T> {
    OnClosed?: Subject<CloseModelEvent>;
    Instance?: T;
}
export interface CloseModelEvent {
}