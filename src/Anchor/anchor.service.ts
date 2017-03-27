import { Injectable, Type, ComponentRef } from '@angular/core';

@Injectable()
export class AnchorService {
    _createComponent?<T>(arg: Type<T>): ComponentRef<T>;

    CreateComponent<T>(arg: Type<T>) {
        if (this._createComponent)
            return this._createComponent(arg);
        throw new Error("Anchor dirtective is not defined.");
    }
}