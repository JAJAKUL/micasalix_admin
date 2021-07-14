import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAgentTypeComponent } from './create-agent-type.component';

const routes: Routes = [
    { path: '', component: CreateAgentTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAgentTypeRoutes { }
