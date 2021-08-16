import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SubAgentTypeListRoutes } from './sub-agent-type-list.routing.module';
import { SubAgentTypeListComponent } from './sub-agent-type-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [SubAgentTypeListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SubAgentTypeListRoutes,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    ]
})
export class SubAgentTypeListModule { }
