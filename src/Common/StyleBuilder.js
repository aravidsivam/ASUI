"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Utility_1 = require("./Utility");
var StyleBuilder = (function () {
    function StyleBuilder(_styleObj) {
        this._styleObj = _styleObj;
    }
    StyleBuilder.prototype.BuildStyle = function () {
        var style = {};
        for (var propName in this._styleObj) {
            var propStyleCB = this._styleBuilder(propName, this._styleObj[propName]);
            if (propStyleCB) {
                var propStyle = propStyleCB();
                for (var syName in propStyle)
                    style[syName] = propStyle[syName];
            }
        }
        return style;
    };
    StyleBuilder.prototype._styleBuilder = function (propName, value) {
        var _this = this;
        var _builder = {
            Top: function () {
                return {
                    top: _this.formatSize(value)
                };
            },
            Height: function () {
                return {
                    height: _this.formatSize(value)
                };
            },
            Width: function () {
                return {
                    width: _this.formatSize(value)
                };
            }
        };
        return _builder[propName];
    };
    ;
    StyleBuilder.prototype.formatSize = function (size) {
        return (Utility_1.isNumber(size) ? size + "px" : size);
    };
    return StyleBuilder;
}());
StyleBuilder = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [Object])
], StyleBuilder);
exports.StyleBuilder = StyleBuilder;
//# sourceMappingURL=StyleBuilder.js.map