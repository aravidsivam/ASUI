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
var StyleBuilder_1 = require("./../../../Common/StyleBuilder");
var Utility_1 = require("./../../../Common/Utility");
var Rx_1 = require("rxjs/Rx");
var ConfirmDialogComponent = (function () {
    function ConfirmDialogComponent() {
        this.OnAction = new Rx_1.Subject();
    }
    ConfirmDialogComponent.prototype.InitModel = function (dgType, modelComponentRef, option) {
        this.dbType = dgType;
        this.modelComponentRef = modelComponentRef;
        this.option = Utility_1.extend(defaultOption, option);
        var styleBuilder = new StyleBuilder_1.StyleBuilder(this.option);
        this.style = styleBuilder.BuildStyle();
    };
    ConfirmDialogComponent.prototype.OnActionClicked = function (action) {
        this.Close();
        this.OnAction.next({ Action: action });
    };
    ConfirmDialogComponent.prototype.Close = function () {
        this.modelComponentRef.destroy();
    };
    ConfirmDialogComponent.prototype.SetClasses = function () {
        return this.BuildClasses();
    };
    ConfirmDialogComponent.prototype.BuildClasses = function () {
        var classes = [];
        if (!this.option.Width) {
            classes.push("nowidth");
        }
        return classes;
    };
    return ConfirmDialogComponent;
}());
ConfirmDialogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "as-confirmdialog",
        templateUrl: 'ConfirmDialog.Component.html'
    }),
    __metadata("design:paramtypes", [])
], ConfirmDialogComponent);
exports.ConfirmDialogComponent = ConfirmDialogComponent;
var defaultOption = {
    Title: "",
    Message: "",
    CancelBtnText: "Cancel",
    OkBtnText: "Ok"
};
//# sourceMappingURL=ConfirmDialog.Component.js.map