import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PropertyTypeListRoutes } from './property-type-list.routing.module';
import { PropertyTypeListComponent } from './property-type-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [PropertyTypeListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PropertyTypeListRoutes,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ]
})
export class PropertyTypeListModule { }
