import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransformComponent } from './transform.component';
import { CommonModule } from '@angular/common';

let routing =  RouterModule.forChild([
  { path: '', component: TransformComponent }
]);

@NgModule({
  imports: [CommonModule, routing],
  declarations: []
})
export class TransformRoutingModule { }