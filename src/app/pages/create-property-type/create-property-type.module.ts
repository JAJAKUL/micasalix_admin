import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CreatePropertyTypeRoutes } from './create-property-type.routing.module';
import { CreatePropertyTypeComponent } from './create-property-type.component';


@NgModule({
  declarations: [CreatePropertyTypeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreatePropertyTypeRoutes,
    MatPaginatorModule
  ]
})
export class CreatePropertyTypeModule { }
