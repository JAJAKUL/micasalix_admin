import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditSubAgentTypeRoutes } from './edit-sub-agent-type.routing.module';
import { EditSubAgentTypeComponent } from './edit-sub-agent-type.component';

@NgModule({
  declarations: [EditSubAgentTypeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditSubAgentTypeRoutes
  ]
})
export class EditSubAgentTypeModule { }
