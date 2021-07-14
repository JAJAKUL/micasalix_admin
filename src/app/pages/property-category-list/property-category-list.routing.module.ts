import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyCategoryListComponent } from './property-category-list.component';

const routes: Routes = [
    { path: '', component: PropertyCategoryListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyCategoryListRoutes { }
