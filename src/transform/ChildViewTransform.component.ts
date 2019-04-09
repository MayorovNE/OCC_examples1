import { Component, ChangeDetectorRef, OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { TransformService } from './transform.service';
import { IIceCream } from './transform.data';

@Component({
  selector: 'ChildViewTransform-root',
  templateUrl: './ChildViewTransform.component.html',
  styleUrls: ['./ChildViewTransform.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChildViewTransformComponent implements OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit  {
  private _items: IIceCream[];
  constructor (
    public transformService: TransformService,
    private cdr: ChangeDetectorRef,        
    ){

    }
  ngOnInit() {
    this._items = this.transformService.getData();
  }
  ngOnChanges() {
  }
  ngDoCheck() {
  }
  ngAfterViewInit() {         
  }
  ngAfterViewChecked() {
  }
  ngAfterContentInit() {
  }
  ngAfterContentChecked() {
  }
}
