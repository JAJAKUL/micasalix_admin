import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomPipeModule } from 'app/custom/custom-pipe/custom-pipe.module';
import { MatTabsModule } from '@angular/material/tabs';
import { CreateUserRoutes } from './create-user.routing.module';
import { CreateUserComponent } from './create-user.component';


@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateUserRoutes,
    MatPaginatorModule,
    CustomPipeModule,
    MatTabsModule,
  ]
})
export class CreateUserModule { }
