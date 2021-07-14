import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomPipeModule } from 'app/custom/custom-pipe/custom-pipe.module';
import { MatTabsModule } from '@angular/material/tabs';
import { EditUserRoutes } from './edit-user.routing.module';
import { EditUserComponent } from './edit-user.component';


@NgModule({
  declarations: [EditUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditUserRoutes,
    MatPaginatorModule,
    CustomPipeModule,
    MatTabsModule,
  ]
})
export class EditUserModule { }
