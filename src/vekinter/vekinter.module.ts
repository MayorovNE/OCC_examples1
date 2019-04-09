import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VekinterRoutingModule } from './vekinter-routing.module';
import { VekinterComponent } from './vekinter.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    VekinterComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    VekinterRoutingModule
  ],
  exports: [
    VekinterComponent
  ],
  providers: [],
  bootstrap: [VekinterComponent]
})
export class VekinterModule { }