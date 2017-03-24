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
var Dialog_1 = require("ASUI/Dialog");
var dg_compontent_1 = require("./dg.compontent");
var AppComponent = (function () {
    function AppComponent(modelService, confirmDgService) {
        this.modelService = modelService;
        this.confirmDgService = confirmDgService;
        this.name = 'Angular';
    }
    AppComponent.prototype.openPopup = function () {
        var param = this.modelService.CreateDialog(dg_compontent_1.DgComponent);
        param.Instance.Content = "Changed from App!!!!!!";
    };
    AppComponent.prototype.openConfirm = function () {
        this.confirmDgService.CreateConfirmBox({
            Message: "Are sure you need to delete?",
            Title: "Delete"
        }).subscribe(function (event) {
            alert(event.Action);
        });
    };
    AppComponent.prototype.openAlert = function () {
        this.confirmDgService.CreateAlertBox({
            Title: "Alert alert!",
            Message: "This is a simple alert"
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html',
    }),
    __metadata("design:paramtypes", [Dialog_1.ModelService, Dialog_1.ConfirmDialogService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map