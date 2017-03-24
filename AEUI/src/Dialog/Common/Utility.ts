export function isNumber(value: string | number) {
    return typeof value == 'number';
}
export function isDefined(value: any): boolean {
    return value != undefined;
}