import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsComponent } from './events.component';


const routes: Routes = [
    { path: '', component: EventsComponent },
    { path: 'create-event', component: CreateEventComponent }
    // { path: 'user-details/:userId', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutes { }
