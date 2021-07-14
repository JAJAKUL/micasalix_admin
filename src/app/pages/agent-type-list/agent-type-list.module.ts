import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgentTypeListRoutes } from './agent-type-list.routing.module';
import { AgentTypeListComponent } from './agent-type-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [AgentTypeListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgentTypeListRoutes,
    MatPaginatorModule
  ]
})
export class AgentTypeListModule { }
