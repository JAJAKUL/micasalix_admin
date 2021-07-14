import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PropertyTypeListRoutes } from './property-type-list.routing.module';
import { PropertyTypeListComponent } from './property-type-list.component';


@NgModule({
  declarations: [PropertyTypeListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PropertyTypeListRoutes,
    MatPaginatorModule
  ]
})
export class PropertyTypeListModule { }
