import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentListComponent } from './agent-list.component';

const routes: Routes = [
    { path: '', component: AgentListComponent },
    // { path: 'user-details/:userId', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentListRoutes { }
