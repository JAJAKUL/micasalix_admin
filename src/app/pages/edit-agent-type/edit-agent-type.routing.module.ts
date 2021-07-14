import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditAgentTypeComponent } from './edit-agent-type.component';

const routes: Routes = [
    { path: '', component: EditAgentTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditAgentTypeRoutes { }
