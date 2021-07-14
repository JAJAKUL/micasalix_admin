import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAgentTypeComponent } from './create-agent-type.component';
import { CreateAgentTypeRoutes } from './create-agent-type.routing.module';


@NgModule({
  declarations: [CreateAgentTypeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateAgentTypeRoutes
  ]
})
export class CreateAgentTypeModule { }
