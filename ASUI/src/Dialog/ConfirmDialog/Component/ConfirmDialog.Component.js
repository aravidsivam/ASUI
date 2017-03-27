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
var core_1 = require('@angular/core');
var StyleBuilder_1 = require('./../../../Common/StyleBuilder');
var Utility_1 = require('./../../../Common/Utility');
var Rx_1 = require('rxjs/Rx');
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
    ConfirmDialogComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            template: "\n      <div class=\"as-dg-overlay\"></div><div class=\"as-dg as-cmd\"><div class=\"as-dg-align\"></div><div class=\"as-dg-container\" [ngClass]=\"SetClasses()\" [ngStyle]=\"style\"><div class=\"as-dg-title\"><span [innerHtml]=\"option.Title\" class=\"title\"></span></div><div class=\"as-dg-content\" [innerHtml]=\"option.Message\"></div><div class=\"as-cmd-footer\"><button class=\"as-btn as-btn-default\" (click)=\"OnActionClicked(1)\" *ngIf=\"dbType!=1\"><span [innerHtml]=\"option.CancelBtnText\"></span></button> <button class=\"as-btn as-btn-primary\" (click)=\"OnActionClicked(0)\"><span [innerHtml]=\"option.OkBtnText\"></span></button></div></div></div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());
exports.ConfirmDialogComponent = ConfirmDialogComponent;
var defaultOption = {
    Title: "",
    Message: "",
    CancelBtnText: "Cancel",
    OkBtnText: "Ok"
};
