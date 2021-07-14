import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSubAgentTypeComponent } from './create-sub-agent-type.component';

const routes: Routes = [
    { path: '', component: CreateSubAgentTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateSubAgentTypeRoutes { }
