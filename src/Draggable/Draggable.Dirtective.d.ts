import { ElementRef, OnInit } from '@angular/core';
import 'rxjs/Rx';
export declare class DraggableDirective implements OnInit {
    private elementRef;
    constructor(elementRef: ElementRef);
    private docMouseUp;
    private handlerMouseDown;
    private docMouseMove;
    private MouseDrag;
    onMouseup(event: MouseEvent): void;
    onMousemove(event: MouseEvent): void;
    OnhandlerMouseDown?(event: Event): void;
    options: IDraggableOption;
    private readonly LayoutElement;
    private HandlerElement;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private CreateDrag();
    private Destory();
    ngOnChanges(changes: any): void;
    private AddHandlerEvent();
    private RemoveHandlerEvent();
}
export interface IDraggableOption {
    handle?: string;
    disabled?: boolean;
}
