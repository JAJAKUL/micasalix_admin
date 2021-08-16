import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserRoutes } from './user.routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomPipeModule } from 'app/custom/custom-pipe/custom-pipe.module';
import { MatTabsModule } from '@angular/material/tabs';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [UserComponent, UserListComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutes,
    MatPaginatorModule,
    CustomPipeModule,
    MatTabsModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ]
})
export class UserModule { }
