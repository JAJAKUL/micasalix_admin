import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSubAgentTypeRoutes } from './create-sub-agent-type.routing.module';
import { CreateSubAgentTypeComponent } from './create-sub-agent-type.component';


@NgModule({
  declarations: [CreateSubAgentTypeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateSubAgentTypeRoutes
  ]
})
export class CreateSubAgentTypeModule { }
