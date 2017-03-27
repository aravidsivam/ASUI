export declare class DraggableService {
    private docMouseUp;
    private handlerMouseDown;
    private docMouseMove;
    Draggable(handler: HTMLElement, dragElement: HTMLElement): IDraggableReturn;
    Destory(handler: HTMLElement, dragElement: HTMLElement, listener: IDragListener): void;
    private AddHandlerEvent(handler);
    private RemoveHandlerEvent(handler, listener);
}
export interface IDragListener {
    handlerMouseDown(event: Event): void;
    docMouseUp(event: Event): void;
    docMouseMove(event: Event): void;
}
export interface IDraggableReturn {
    destory(): void;
}
