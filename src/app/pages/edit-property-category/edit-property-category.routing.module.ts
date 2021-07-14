import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPropertyCategoryComponent } from './edit-property-category.component';

const routes: Routes = [
    { path: '', component: EditPropertyCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPropertyCategoryRoutes { }
