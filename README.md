# ASUI

Angular 2 library to create a dialog box at runtime.

# Install
1.Install npm module:
```
$ npm install asui
```
2.If you are using system.js you may want to add this into map and package config:
```
{
        map: {
            'asui/dialog': "node_modules/asui",
        },
        packages: {
            'asui/dialog': {
                defaultExtension: 'js',
                main: "dialog.js"
            }
        }
    }
```
# Usage
## Model dialog box
You need to include ae.dialog.css to your project.
```
<link href="node_modules/asui/src/Dialog/Resources/ae.dialog.css" rel="stylesheet" />
```
#### Setting up the Insertion Location
Add below tag in app component html. So that Our dialog box’s DOM will get inserted as a sibling to this div.
```
<div asAnchor=""></div>
```
#### Create a compontent 
```
import { Component, trigger, state, animate, transition, style } from '@angular/core';
import { ModelDialog } from 'asui/dialog';

@Component({
    selector: 'my-app',
    templateUrl: 'Default/FormSelector'
})
@ModelDialog({
    Title: "The Message",
    Height: 500,
    Width: 500
})
export class DgComponent {
    constructor() { }
}
```
To define a model dialog component, you always import the ModelDialog symbol.
The @ModelDialog decorator provides a option for model dialog box.
#### module declaration
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DgComponent } from './dg.compontent';
import { ModelModule, ModelService } from 'ASUI/Dialog';

@NgModule({
    imports: [BrowserModule, ModelModule.WithComponents([DgComponent])],
    declarations: [AppComponent, DgComponent],
    providers: [ModelService],
    bootstrap: [AppComponent]
})
export class AppModule { }

```
Pass all the model component in WithComponents method add the ModelService as provider in NgModule.
Finally call the CreateDialog from ModelService.
```
import { Component } from '@angular/core';
import { ModelService, ConfirmDialogService } from 'ASUI/Dialog';
import { DgComponent } from './dg.compontent';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    constructor(public modelService: ModelService, public confirmDgService: ConfirmDialogService) {
    }
    openPopup() {
        var param = this.modelService.CreateDialog(DgComponent);
    }
}
```
## confirm box & Alert box
Inject ConfirmDialogModule, ConfirmDialogService in NgModule.
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConfirmDialogModule, ConfirmDialogService } from 'ASUI/Dialog';

@NgModule({
    imports: [BrowserModule,  ConfirmDialogModule],
    declarations: [AppComponent],
    providers: [ConfirmDialogService],
    bootstrap: [AppComponent]
})
export class AppModule { }

```
Call the confirm box using method CreateConfirmBox and alert box using method CreateAlertBox.
```
 this.confirmDgService.CreateConfirmBox({
            Message: "Are sure you need to delete?",
            Title: "Delete",
            OkBtnText: "Delete"
        }).subscribe((event) => {
            alert(event.Action);
        });

this.confirmDgService.CreateAlertBox({
            Title: "Alert alert!",
            Message: "This is a simple alert"
        });
```
