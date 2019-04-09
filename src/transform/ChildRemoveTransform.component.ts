import { Component } from '@angular/core';
import { TransformService } from './transform.service';
import { IIceCream } from './transform.data';

@Component({
  selector: 'ChildRemoveTransform-root',
  templateUrl: './ChildRemoveTransform.component.html',
  styleUrls: ['./ChildRemoveTransform.component.css']
})
export class ChildRemoveTransformComponent {
    private _inputRemove: any;
    private _RemoveArray: IIceCream[];
    private _acceptRemove: boolean;
    private _count: boolean;

    constructor(private transformService: TransformService){
        this._acceptRemove = true;
        this._count = false;
    }

    removeItem (sRemove: any) {
        if (sRemove != null) {
            this._RemoveArray = this.transformService.getData();
            for (let i = 0; i < this._RemoveArray.length; i++) {
                let countIceCream = this._RemoveArray[i];
                Object.keys(countIceCream).forEach((item) => { 
                    if (sRemove === countIceCream[item]) {
                        this.transformService.removeData(i);
                        this._count = true;
                        return;
                    }
                });

            }
        }
    }

    DropHintRemove (increased: void) {
        if (this._count === true) {
            this.transformService.dropHintEmitter.emit(increased);
            this._count = false;
        }
    }
}