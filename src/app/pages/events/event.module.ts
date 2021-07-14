import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomPipeModule } from 'app/custom/custom-pipe/custom-pipe.module';
import { MatTabsModule } from '@angular/material/tabs';
import { EventsRoutes } from './event.routing.module';
import { EventsComponent } from './events.component';
import { CreateEventComponent } from './create-event/create-event.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    EventsComponent,
    CreateEventComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    CustomPipeModule,
    MatTabsModule,
    EventsRoutes,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    NgxMaterialTimepickerModule
  ],
 
})
export class EventsModule { }
