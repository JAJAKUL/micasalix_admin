import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgentTypeListRoutes } from './agent-type-list.routing.module';
import { AgentTypeListComponent } from './agent-type-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [AgentTypeListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgentTypeListRoutes,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ]
})
export class AgentTypeListModule { }
