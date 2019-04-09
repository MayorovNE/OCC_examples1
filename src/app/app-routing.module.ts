import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VekinterComponent } from 'src/vekinter/vekinter.component';
import { CountComponent } from 'src/count/count.component';
import { NavigationComponent } from 'src/navigation/navigation.component';
import { ArraySortingComponent } from 'src/array_sorting/array_sorting.component';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  { path: 'navigation',  children: [
    { path: '', component: NavigationComponent},
    { path: 'example1', component: CountComponent},
    { path: 'example2', component: VekinterComponent},
    { path: 'example3', component: ArraySortingComponent},
    { path: 'example4', loadChildren: 'src/transform/transform.module#TransformModule'}
  ]},
 // { path: '**', redirectTo: '/navigation', pathMatch:'full'}
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
