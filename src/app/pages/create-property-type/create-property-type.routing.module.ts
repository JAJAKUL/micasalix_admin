import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePropertyTypeComponent } from './create-property-type.component';

const routes: Routes = [
    { path: '', component: CreatePropertyTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePropertyTypeRoutes { }
