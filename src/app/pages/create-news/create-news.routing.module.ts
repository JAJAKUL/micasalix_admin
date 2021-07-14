import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewsComponent } from './create-news.component';

const routes: Routes = [
    { path: '', component: CreateNewsComponent },
    // { path: 'user-details/:userId', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateNewsRoutes { }
