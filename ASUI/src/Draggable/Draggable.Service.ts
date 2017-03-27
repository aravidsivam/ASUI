import { Injectable, EventEmitter } from '@angular/core';
import { addClass } from './../Common/Utility';

@Injectable()
export class DraggableService {
    private docMouseUp = new EventEmitter<MouseEvent>();
    private handlerMouseDown = new EventEmitter<MouseEvent>();
    private docMouseMove = new EventEmitter<MouseEvent>();

    Draggable(handler: HTMLElement, dragElement: HTMLElement): IDraggableReturn {
        var listener = this.AddHandlerEvent(handler);
        var mousedrag = this.handlerMouseDown.map(event => {
            return {
                top: event.clientY - dragElement.getBoundingClientRect().top,
                left: event.clientX - dragElement.getBoundingClientRect().left
            };
        }).flatMap(
            imageOffset => this.docMouseMove.map(pos => ({
                top: pos.clientY - imageOffset.top,
                left: pos.clientX - imageOffset.left
            }))
                .takeUntil(this.docMouseUp)
            );
        mousedrag.subscribe({
            next: pos => {
                addClass(dragElement, "as-dragged");
                dragElement.style.top = pos.top + 'px';
                dragElement.style.left = pos.left + 'px';
            }
        });
        return {
            destory: () => {
                this.Destory(handler, dragElement, listener);
            }
        };
    }

    Destory(handler: HTMLElement, dragElement: HTMLElement, listener: IDragListener) {
        this.RemoveHandlerEvent(handler, listener);
    }

    private AddHandlerEvent(handler: HTMLElement): IDragListener {
        var handlerMouseDownListener = (event: MouseEvent) => {
            this.handlerMouseDown.emit(event);
        };
        var docMouseUpListener = (event: MouseEvent) => {
            this.docMouseUp.emit(event);
        };
        var docMouseMoveListener = (event: MouseEvent) => {
            this.docMouseMove.emit(event);
        }
        handler.addEventListener("mousedown", handlerMouseDownListener);
        document.addEventListener("mouseup", docMouseUpListener);
        document.addEventListener("mousemove", docMouseMoveListener);
        return {
            handlerMouseDown: handlerMouseDownListener,
            docMouseUp: docMouseUpListener,
            docMouseMove: docMouseMoveListener
        };
    }

    private RemoveHandlerEvent(handler: HTMLElement, listener: IDragListener) {
        handler.removeEventListener("mousedown", listener.handlerMouseDown);
        document.removeEventListener("mouseup", listener.docMouseUp);
        document.removeEventListener("mousemove", listener.docMouseMove);
    }
}
export interface IDragListener {
    handlerMouseDown(event: Event): void;
    docMouseUp(event: Event): void;
    docMouseMove(event: Event): void;
}
export interface IDraggableReturn {
    destory(): void;
}