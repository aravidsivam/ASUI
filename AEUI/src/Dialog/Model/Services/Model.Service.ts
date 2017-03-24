import { Injectable, Type, ComponentRef } from '@angular/core';
import { AnchorService } from './../../../Anchor/anchor.service';
import { ModelComponent } from './../Component/model.component';
import { CreateModelEvent } from './../Shared/Model';

@Injectable()
export class ModelService {

    constructor(private anchorService: AnchorService) {

    }
    private _digCollection: IdialogRef[] = [];

    CreateDialog<T>(digType: Type<T>): CreateModelEvent<T> {
        var componentRef = this.anchorService.CreateComponent(ModelComponent);
        componentRef.instance.InitModel(digType, componentRef);
        var digParam = { componentRef: componentRef };
        this._digCollection.push(digParam);
        componentRef.instance.OnClosed.subscribe(() => {
            var index = this._digCollection.indexOf(digParam);
            this._digCollection.splice(index, 1);
        });
        return {
            Instance: componentRef.instance.Instance,
            OnClosed: componentRef.instance.OnClosed
        };
    }

    CloseAll() {
        this._digCollection.forEach((dig) => {
            dig.componentRef.instance.Close();
        });
    }
}

interface IdialogRef {
    componentRef: ComponentRef<ModelComponent<any>>;
}
