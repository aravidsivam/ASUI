import { Directive, ElementRef, Input, OnInit, EventEmitter, HostListener, Output } from '@angular/core';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { addClass, isDefined } from './../Common/Utility';

@Directive(
    {
        selector: '[asDraggable]',
        providers: []
    })
export class DraggableDirective implements OnInit {
    constructor(private elementRef: ElementRef) {
        var option = this.options;
    }
    private docMouseUp = new EventEmitter<MouseEvent>();
    private handlerMouseDown = new EventEmitter<MouseEvent>();
    private docMouseMove = new EventEmitter<MouseEvent>();
    private MouseDrag: Subscription;
    //@Output() onAsDragStart: EventEmitter<IAsDragStartEvent> = new EventEmitter();
    //@Output() onAsDragStop: EventEmitter<IAsDragStartEvent> = new EventEmitter();
    //@Output() onAsDrag: EventEmitter<IAsDragStartEvent> = new EventEmitter();

    @HostListener('document:mouseup', ['$event'])
    onMouseup(event: MouseEvent) {
        this.docMouseUp.emit(event);
    }

    @HostListener('document:mousemove', ['$event'])
    onMousemove(event: MouseEvent) {
        this.docMouseMove.emit(event);
    }
    OnhandlerMouseDown?(event: Event): void;

    @Input("asDraggable") options: IDraggableOption;

    private get LayoutElement(): HTMLElement {
        return this.elementRef.nativeElement;
    }
    private HandlerElement: HTMLElement;

    ngOnInit() {
        this.HandlerElement = <HTMLElement>this.LayoutElement.querySelector(this.options.handle);
        var listener = this.AddHandlerEvent();
        if (!this.options.disabled) {
            this.CreateDrag();
        }
    }

    ngOnDestroy() {
        this.Destory();
    }
    private CreateDrag() {
        var mouseDragEvent = this.handlerMouseDown.map(event => {
            return {
                top: event.clientY - this.LayoutElement.getBoundingClientRect().top,
                left: event.clientX - this.LayoutElement.getBoundingClientRect().left
            };
        }).flatMap(
            imageOffset => this.docMouseMove.map(event => ({
                ui: {
                    top: event.clientY - imageOffset.top,
                    left: event.clientX - imageOffset.left,
                    handle: this.HandlerElement
                },
                event: event
            }))
                .takeUntil(this.docMouseUp)
            );
        this.MouseDrag = mouseDragEvent.subscribe({
            next: pos => {
                //this.DragStarted(dragElement, triggerElement, pos);
                this.LayoutElement.style.top = pos.ui.top + 'px';
                this.LayoutElement.style.left = pos.ui.left + 'px';
            }
        });
    }
    private Destory() {
        this.RemoveHandlerEvent();
        if (this.MouseDrag)
        {
            this.MouseDrag.unsubscribe();
        }
    }
    ngOnChanges(changes: any) {
    }
    private AddHandlerEvent() {
        this.OnhandlerMouseDown = (event: MouseEvent) => {
            this.handlerMouseDown.emit(event);
        };
        this.HandlerElement.addEventListener("mousedown", this.OnhandlerMouseDown);
    }
    private RemoveHandlerEvent() {
        this.HandlerElement.removeEventListener("mousedown", this.OnhandlerMouseDown);
        document.removeEventListener("mouseup", this.onMouseup);
        document.removeEventListener("mousemove", this.onMousemove);
    }

}
var dragEventName = {
    start: "asDragStart",
    stop: "asDragStop"
};

export interface IDraggableOption {
    handle?: string;
    disabled?: boolean;
}