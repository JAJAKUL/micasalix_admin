import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomPipeModule } from 'app/custom/custom-pipe/custom-pipe.module';
import { MatTabsModule } from '@angular/material/tabs';
import { CreateAgentRoutes } from './create-agent.routing.module';
import { CreateAgentComponent } from './create-agent.component';


@NgModule({
  declarations: [CreateAgentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateAgentRoutes,
    MatPaginatorModule,
    CustomPipeModule,
    MatTabsModule,
  ]
})
export class CreateAgentModule { }
