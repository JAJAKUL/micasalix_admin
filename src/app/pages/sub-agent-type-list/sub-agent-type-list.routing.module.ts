import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubAgentTypeListComponent } from './sub-agent-type-list.component';

const routes: Routes = [
    { path: '', component: SubAgentTypeListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubAgentTypeListRoutes { }
