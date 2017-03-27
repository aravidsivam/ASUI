import { Injectable } from '@angular/core';
import { isNumber } from './Utility';
@Injectable()
export class StyleBuilder {

    constructor(private _styleObj: IStyleObj) {
    }
    BuildStyle() {
        var style = {};
        for (var propName in this._styleObj) {
            var propStyleCB = this._styleBuilder(propName, this._styleObj[propName]);
            if (propStyleCB) {
                var propStyle = propStyleCB()
                for (var syName in propStyle)
                    style[syName] = propStyle[syName];
            }
        }
        return style;
    }
    private _styleBuilder(propName: string, value: any) {
        var _builder = {
            Top: () => {
                return {
                    top: this.formatSize(value)
                }
            },
            Height: () => {
                return {
                    height: this.formatSize(value)
                }
            },
            Width: () => {
                return {
                    width: this.formatSize(value)
                }
            }
        };
        return _builder[propName];
    };
    private formatSize(size: string | number): string {
        return (isNumber(size) ? size + "px" : (<string>size));
    }
}

export interface IStyleObj {
    Top?: string | number;
    Height?: string | number;
    Width?: string | number;
}