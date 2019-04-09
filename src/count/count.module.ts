import { NgModule } from '@angular/core';
import { CountRoutingModule } from './count-routing.module';
import { CountComponent } from './count.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CountComponent
  ],
  imports: [
    CommonModule,
    CountRoutingModule
  ],
  exports: [
    CountComponent
  ],
  providers: [],
  bootstrap: [CountComponent]
})
export class CountModule { }