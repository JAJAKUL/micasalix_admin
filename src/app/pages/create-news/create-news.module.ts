import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomPipeModule } from 'app/custom/custom-pipe/custom-pipe.module';
import { MatTabsModule } from '@angular/material/tabs';
import { CreateNewsRoutes } from './create-news.routing.module';
import { CreateNewsComponent } from './create-news.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [CreateNewsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateNewsRoutes,
    MatPaginatorModule,
    CustomPipeModule,
    MatTabsModule,
    MatDatepickerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CreateNewsModule { }
