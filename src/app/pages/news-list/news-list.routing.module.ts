import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list.component';

const routes: Routes = [
    { path: '', component: NewsListComponent },
    // { path: 'user-details/:userId', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsListRoutes { }
