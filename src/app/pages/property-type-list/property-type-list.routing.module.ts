import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyTypeListComponent } from './property-type-list.component';

const routes: Routes = [
    { path: '', component: PropertyTypeListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  PropertyTypeListRoutes { }
