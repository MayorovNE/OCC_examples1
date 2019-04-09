import { Component, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';

enum Direction {
  red,
  blue,
  green
};

@Component({
  selector: 'count-root',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {

  @ViewChild("spanElement") scoreRef: ElementRef;
  @ViewChild("inputElement") numRef: ElementRef;
  private score: number = 0;
  private num: number = 1;
  private koy: number = 1;
  private id: string;
  minus() {
    this.score = this.score - 1;
    this.koy = Direction.red;
    console.log("scoreRef", this.scoreRef.nativeElement.innerHTML);
    ;
  }
  obnulenie() {
    this.score = 0;
    this.koy = Direction.blue;
  }
  slojenie() {
    this.score = this.score + 1;
    this.koy = Direction.green;
   console.log("scoreRef", this.scoreRef.nativeElement.innerHTML);
  }
  zamena() {
    this.score = Number(this.numRef.nativeElement.value);
    this.koy = Direction.blue;
  }
  constructor(private router: Router){}
  goNavigation(){       
      this.router.navigate(['/navigation']);
}
}
