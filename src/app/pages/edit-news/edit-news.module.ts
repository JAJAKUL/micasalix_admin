import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomPipeModule } from 'app/custom/custom-pipe/custom-pipe.module';
import { MatTabsModule } from '@angular/material/tabs';
import { EditNewsRoutes } from './edit-news.routing.module';
import { EditNewsComponent } from './edit-news.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [EditNewsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditNewsRoutes,
    MatPaginatorModule,
    CustomPipeModule,
    MatTabsModule,
    MatDatepickerModule,
    // MatFormFieldModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditNewsModule { }
