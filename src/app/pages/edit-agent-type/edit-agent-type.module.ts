import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAgentTypeRoutes } from './edit-agent-type.routing.module';
import { EditAgentTypeComponent } from './edit-agent-type.component';

@NgModule({
  declarations: [EditAgentTypeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditAgentTypeRoutes
  ]
})
export class EditAgentTypeModule { }
