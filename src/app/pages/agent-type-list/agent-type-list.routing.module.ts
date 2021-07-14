import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentTypeListComponent } from './agent-type-list.component';

const routes: Routes = [
    { path: '', component: AgentTypeListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentTypeListRoutes { }
