export declare class StyleBuilder {
    private _styleObj;
    constructor(_styleObj: IStyleObj);
    BuildStyle(): {};
    private _styleBuilder(propName, value);
    private formatSize(size);
}
export interface IStyleObj {
    Top?: string | number;
    Height?: string | number;
    Width?: string | number;
}
