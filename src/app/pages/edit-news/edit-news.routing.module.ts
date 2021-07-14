import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditNewsComponent } from './edit-news.component';

const routes: Routes = [
    { path: '', component: EditNewsComponent },
    // { path: 'user-details/:userId', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditNewsRoutes { }
