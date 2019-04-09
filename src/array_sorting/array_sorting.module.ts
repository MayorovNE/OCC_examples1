import { NgModule } from '@angular/core';
import { ArraySortingRoutingModule } from './array_sorting-routing.module';
import { ArraySortingComponent } from './array_sorting.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ArraySortingComponent
  ],
  imports: [
    CommonModule,
    ArraySortingRoutingModule
  ],
  exports: [
    ArraySortingComponent
  ],
  providers: [],
  bootstrap: [ArraySortingComponent]
})
export class ArraySortingModule { }