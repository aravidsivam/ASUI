import { Directive, ElementRef, Input, OnInit, EventEmitter } from '@angular/core';
import { IDraggableOption } from './Model';
import 'rxjs/Rx';
import { DraggableService } from './Draggable.Service';

@Directive(
    {
        selector: '[asDraggable]',
        providers: [DraggableService]
    })
export class DraggableDirective implements OnInit {
    constructor(private elementRef: ElementRef, private dragService: DraggableService) {
        var option = this.options;
    }

    @Input("asDraggable") options: IDraggableOption;
    private get LayoutElement(): HTMLElement {
        return this.elementRef.nativeElement;
    }
    private HandlerElement: HTMLElement;

    ngOnInit() {
        this.HandlerElement = <HTMLElement>this.LayoutElement.querySelector(this.options.Handle);
        this.dragService.Draggable(this.HandlerElement, this.LayoutElement);
    }
}