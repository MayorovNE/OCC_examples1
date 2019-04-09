import { Component } from '@angular/core';
import { TransformService } from './transform.service';
import { IIceCream } from './transform.data';

@Component({
  selector: 'ChildChangeTransform-root',
  templateUrl: './ChildChangeTransform.component.html',
  styleUrls: ['./ChildChangeTransform.component.css']
})
export class ChildChangeTransformComponent {
  private _items: IIceCream[];
  private _inputID: number;
  private _inputNAME: string;
  private _inputDESCRIPTION: string;
  private _inputPRICE: number;
  private _accept: boolean;
  private _count: boolean;

  constructor(private transformService: TransformService){
    this._accept = true;
    this._count = false;
  }

  addItem (id: number, name: string, description: string, price: number) {  
    this._items = this.transformService.getData();
    if (id != null) {     
      if (name != null) {  
        if (description != null) { 
          if (price != null) { 
            if (id <= this._items.length) {
              id = this._items.length + 1;
            }
            this.transformService.addData(id, name, description, price); 
            this._count = true;           
          }
        }
      }
    }
  }

  DropHintChange(increased: void) {
    if (this._count === true) {
      this.transformService.dropHintEmitter.emit(increased);
      this._count = false;
    }
  }
}