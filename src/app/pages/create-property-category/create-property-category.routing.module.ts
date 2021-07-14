import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePropertyCategoryComponent } from './create-property-category.component';

const routes: Routes = [
    { path: '', component: CreatePropertyCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePropertyCategoryRoutes { }
