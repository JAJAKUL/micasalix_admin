import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomPipeModule } from 'app/custom/custom-pipe/custom-pipe.module';
import { MatTabsModule } from '@angular/material/tabs';
import { EditAgentRoutes } from './edit-agent.routing.module';
import { EditAgentComponent } from './edit-agent.component';


@NgModule({
  declarations: [EditAgentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditAgentRoutes,
    MatPaginatorModule,
    CustomPipeModule,
    MatTabsModule,
  ]
})
export class EditAgentModule { }
