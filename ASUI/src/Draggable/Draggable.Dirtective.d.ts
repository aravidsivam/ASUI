import { ElementRef, OnInit } from '@angular/core';
import { IDraggableOption } from './Model';
import 'rxjs/Rx';
import { DraggableService } from './Draggable.Service';
export declare class DraggableDirective implements OnInit {
    private elementRef;
    private dragService;
    constructor(elementRef: ElementRef, dragService: DraggableService);
    options: IDraggableOption;
    private readonly LayoutElement;
    private HandlerElement;
    ngOnInit(): void;
}
