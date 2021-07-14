import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditSubAgentTypeComponent } from './edit-sub-agent-type.component';

const routes: Routes = [
    { path: '', component: EditSubAgentTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSubAgentTypeRoutes { }
