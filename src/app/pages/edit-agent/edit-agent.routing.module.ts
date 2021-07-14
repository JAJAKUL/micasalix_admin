import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditAgentComponent } from './edit-agent.component';

const routes: Routes = [
    { path: '', component: EditAgentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditAgentRoutes { }
