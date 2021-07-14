import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomPipeModule } from 'app/custom/custom-pipe/custom-pipe.module';
import { MatTabsModule } from '@angular/material/tabs';
import { AgentListRoutes } from './agent-list.routing.module';
import { AgentListComponent } from './agent-list.component';


@NgModule({
  declarations: [AgentListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgentListRoutes,
    MatPaginatorModule,
    CustomPipeModule,
    MatTabsModule,
  ]
})
export class AgentListModule { }
