import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EditPropertyCategoryRoutes } from './edit-property-category.routing.module';
import { EditPropertyCategoryComponent } from './edit-property-category.component';


@NgModule({
  declarations: [EditPropertyCategoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditPropertyCategoryRoutes,
    MatPaginatorModule
  ]
})
export class EditPropertyCategoryModule { }
