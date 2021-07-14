import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CreatePropertyCategoryRoutes } from './create-property-category.routing.module';
import { CreatePropertyCategoryComponent } from './create-property-category.component';


@NgModule({
  declarations: [CreatePropertyCategoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreatePropertyCategoryRoutes,
    MatPaginatorModule
  ]
})
export class CreatePropertyCategoryModule { }
