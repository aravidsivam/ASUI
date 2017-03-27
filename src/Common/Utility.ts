export function isNumber(value: string | number) {
    return typeof value == 'number';
}
export function isDefined(value: any): boolean {
    return value != undefined;
}
export function extend<T>(obj: T, obj2: Object): T {
    for (var prop in obj2) {
        obj[prop] = obj2[prop];
    }
    return obj;
}
export function hasClass(element: Element, className: string) {
    var classNames = element.className.split(" ");
    return classNames.indexOf(className) >= 0;
}
export function addClass(element: Element, className: string) {
    if (!hasClass(element, className))
        element.className += " " + className;
}
export function isBoolean(value: any) {
    return value === true || value === false;
}