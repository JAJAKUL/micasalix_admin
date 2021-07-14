import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPropertyTypeComponent } from './edit-property-type.component';

const routes: Routes = [
    { path: '', component: EditPropertyTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPropertyTypeRoutes { }
