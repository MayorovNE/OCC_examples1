import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransformRoutingModule } from './transform-routing.module';
import { TransformComponent } from './transform.component';
import { ChildViewTransformComponent } from './ChildViewTransform.component';
import { ChildChangeTransformComponent } from './ChildChangeTransform.component';
import { ChildRemoveTransformComponent } from './ChildRemoveTransform.component';
import { CommonModule } from '@angular/common';
import { TransformService } from './transform.service';
import { DropOutHintComponent } from './DropOutHintTransform.component';


@NgModule({
  declarations: [
    TransformComponent,
    ChildViewTransformComponent,
    ChildChangeTransformComponent,
    ChildRemoveTransformComponent,
    DropOutHintComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TransformRoutingModule
  ],
  exports: [
    TransformComponent
  ],
  providers: [TransformService],
  bootstrap: [TransformComponent]
})
export class TransformModule { }