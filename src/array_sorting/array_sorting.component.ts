import { Component, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';

interface myArray<T> {
  length: number; 
  [x: number]: T; 
}

@Component({
  selector: 'array_sorting-root',
  templateUrl: './array_sorting.component.html',
  styleUrls: ['./array_sorting.component.css']
})

export class ArraySortingComponent {
  @ViewChild("userArray") input1Ref: ElementRef;
  @ViewChild("StringRadio") strValRef: ElementRef;
  @ViewChild("NumberRadio") numValRef: ElementRef;

    constructor(private router: Router){}
    goNavigation() {       
      this.router.navigate(['/navigation']);
    }


    private _N = 10;
    public Array1: myArray<any> = [];
    private left = 0;
    private choose = 0;
    private right = this._N-1;
    private pivot: any = 0;
    private l_hold: number; 
    private r_hold: number; 
    private flag: boolean; 
    private pivotFlag: number; 
    private ArrayForSort: myArray<any> = [];
    
    Users_array() {
      let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

      if (this.input1Ref.nativeElement.value > 0) {
        this._N = this.input1Ref.nativeElement.value;
      }
      if (this.numValRef.nativeElement.value == 1) {
        this.strValRef.nativeElement.value == 0;
        for (var i = 0; i < this._N; i++) {
          this.Array1[i] = Math.floor(Math.random() * (100 - 0 + 1)) + 0;   
        }   
      }
      if (this.strValRef.nativeElement.value == 1) {
        let HelpArray: string[];
        let HelpCount: string;
        for (let t = 0; t < this._N; t++) {
          HelpCount = "Clear";
          for (let z = 0; z < 3; z++) {
            let randSymb = Math.floor(Math.random() * (26 - 0)) + 0; 
            HelpArray[z] = alphabet[randSymb];
            if (HelpCount === "Clear") {
              HelpCount = HelpArray[z];
            }
            else {
              HelpCount = HelpCount + HelpArray[z];
            }
          }
          this.Array1[t] = HelpCount;
        }   
      }
    }

    Sort() {
      for (var i = 0; i < this._N; i++) {
        this.ArrayForSort[i] = this.Array1[i];   
      }   
    }

    QuickSort<T>(numbers: myArray<T>) {  
      if (this.choose>0) {
        if (this.flag == false) {
          this.left = this.left;
          this.right = this.pivotFlag-1;
          this.l_hold = this.left; 
          this.r_hold = this.right; 
          this.pivot = numbers[this.left];
        }
        else {
          this.right = this.right;
          this.left = this.pivotFlag+1;
          this.l_hold = this.left; 
          this.r_hold = this.right; 
          this.pivot = numbers[this.left];
        }
      }
      else {   
        this.l_hold = this.left; 
        this.r_hold = this.right; 
        this.pivot = numbers[this.left];
        this.choose = 1;
      }
      while (this.left < this.right) {
        while ((numbers[this.right] >= this.pivot) && (this.left < this.right)) {
          this.right--; 
        }
        if (this.left !== this.right) {
          numbers[this.left] = numbers[this.right];
          this.left++;  
        }
        while ((numbers[this.left] <= this.pivot) && (this.left < this.right)) {
          this.left++;
        } 
        if (this.left !== this.right) {
          numbers[this.right] = numbers[this.left];
          this.right--; 
        }
      }
      numbers[this.left] = this.pivot; 
      this.pivotFlag = this.left;
      this.left = this.l_hold;
      this.right = this.r_hold;

      if (this.left < this.pivotFlag) {
        this.flag = false;
        this.QuickSort(numbers);
      }
      if (this.right > this.pivotFlag) {
        this.flag = true;
        this.QuickSort(numbers);
      }
      this.left = 0;
      this.choose = 0;
      this.right = this._N - 1;
      return;
    }

}
