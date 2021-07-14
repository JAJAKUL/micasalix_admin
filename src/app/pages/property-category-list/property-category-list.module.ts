import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PropertyCategoryListRoutes } from './property-category-list.routing.module';
import { PropertyCategoryListComponent } from './property-category-list.component';


@NgModule({
  declarations: [PropertyCategoryListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PropertyCategoryListRoutes,
    MatPaginatorModule
  ]
})
export class PropertyCategoryListModule { }
