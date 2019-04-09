// import {TransformData} from './transform.data';
import {IIceCream} from './transform.data';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()

export class TransformService {

    public dropHintEmitter: EventEmitter<void>;

    private dataIceCream: IIceCream[] = [
        { id: 1, name: "Eskimo", description: "Glazed ice cream on a stick", price: 15.30},
        { id: 2, name: "Fruit ice", description: "Cold dessert from frozen juice", price: 10.50},
        { id: 3, name: "Cream", description: "French ice dessert", price: 21.00},
        { id: 4, name: "Sorbet", description: "Frozen dessert", price: 25.99},
        { id: 5, name: "Jelato", description: "Frozen dessert with berries, nuts and chocolate", price: 49.00}
    ];
   constructor () {
       console.log("CONSTRUCTOR");
       this.dropHintEmitter = new EventEmitter<void>();
    }
    getData (): IIceCream[] {         
        return this.dataIceCream;
    }
    addData (id: number, name: string, description: string, price: number) {    
        let _HelpCount: IIceCream = {id, name, description, price};
        this.dataIceCream.push(_HelpCount);
    }
    removeData (count: number) {    
        this.dataIceCream.splice(count,1);
    }
}