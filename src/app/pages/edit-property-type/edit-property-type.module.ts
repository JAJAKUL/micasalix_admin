import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EditPropertyTypeComponent } from './edit-property-type.component';
import { EditPropertyTypeRoutes } from './edit-property-type.routing.module';


@NgModule({
  declarations: [EditPropertyTypeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditPropertyTypeRoutes,
    MatPaginatorModule
  ]
})
export class EditPropertyTypeModule { }
