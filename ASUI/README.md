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
You need to include ae.dialog.css to your project.
```
<link href="node_modules/asui/src/Dialog/Resources/ae.dialog.css" rel="stylesheet" />
```
Setting up the Insertion Location. Add below tag in app component html. So that Our dialog box’s DOM will get inserted as a sibling to this div.
```
<div asAnchor=""></div>
```
Create a compontent 
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

