"use strict";
function isNumber(value) {
    return typeof value == 'number';
}
exports.isNumber = isNumber;
function isDefined(value) {
    return value != undefined;
}
exports.isDefined = isDefined;
function extend(obj, obj2) {
    for (var prop in obj2) {
        obj[prop] = obj2[prop];
    }
    return obj;
}
exports.extend = extend;
function hasClass(element, className) {
    var classNames = element.className.split(" ");
    return classNames.indexOf(className) >= 0;
}
exports.hasClass = hasClass;
function addClass(element, className) {
    if (!hasClass(element, className))
        element.className += " " + className;
}
exports.addClass = addClass;
