import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlreadyLoginActivate } from 'app/_guards/auth-guard.service';
import { AuthGuard } from 'app/services/auth.guard';
const routes: Routes = [
   { path: 'login',  loadChildren: () => import('../../pages/login/login.module').then(m => m.LoginModule) },
   { path: 'dashboard', loadChildren: () => import('../../pages/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
   { path: 'profile', loadChildren: () => import('../../pages/profile/profile.module').then(m => m.ProfileModule) ,canActivate: [AuthGuard]},
   { path: 'change-password', loadChildren: () => import('../../pages/change-password/change-password.module').then(m => m.ChangePasswordModule) ,canActivate: [AuthGuard]},
   { path: 'agent-type-list', loadChildren: () => import('../../pages/agent-type-list/agent-type-list.module').then(m => m.AgentTypeListModule),canActivate: [AuthGuard]},
   { path: 'edit-agent-type/:id', loadChildren: () => import('../../pages/edit-agent-type/edit-agent-type.module').then(m => m.EditAgentTypeModule),canActivate: [AuthGuard]},
   { path: 'create-agent-type', loadChildren: () => import('../../pages/create-agent-type/create-agent-type.module').then(m => m.CreateAgentTypeModule),canActivate: [AuthGuard]},
   { path: 'sub-agent-type-list', loadChildren: () => import('../../pages/sub-agent-type-list/sub-agent-type-list.module').then(m => m.SubAgentTypeListModule),canActivate: [AuthGuard]},
   { path: 'edit-sub-agent-type/:id', loadChildren: () => import('../../pages/edit-sub-agent-type/edit-sub-agent-type.module').then(m => m.EditSubAgentTypeModule),canActivate: [AuthGuard]},
   { path: 'create-sub-agent-type', loadChildren: () => import('../../pages/create-sub-agent-type/create-sub-agent-type.module').then(m => m.CreateSubAgentTypeModule),canActivate: [AuthGuard]},
   { path: 'property-category-list', loadChildren: () => import('../../pages/property-category-list/property-category-list.module').then(m => m.PropertyCategoryListModule),canActivate: [AuthGuard]},
   { path: 'create-property-category', loadChildren: () => import('../../pages/create-property-category/create-property-category.module').then(m => m.CreatePropertyCategoryModule),canActivate: [AuthGuard]},
   { path: 'edit-property-category/:id', loadChildren: () => import('../../pages/edit-property-category/edit-property-category.module').then(m => m.EditPropertyCategoryModule),canActivate: [AuthGuard]},

   { path: 'property-type-list', loadChildren: () => import('../../pages/property-type-list/property-type-list.module').then(m => m.PropertyTypeListModule),canActivate: [AuthGuard]},
   { path: 'create-property-type', loadChildren: () => import('../../pages/create-property-type/create-property-type.module').then(m => m.CreatePropertyTypeModule),canActivate: [AuthGuard]},
   { path: 'edit-property-type/:id', loadChildren: () => import('../../pages/edit-property-type/edit-property-type.module').then(m => m.EditPropertyTypeModule),canActivate: [AuthGuard]},

   { path: 'user-list', loadChildren: () => import('../../pages/user/user.module').then(m => m.UserModule) ,canActivate: [AuthGuard]},
   { path: 'agent-list', loadChildren: () => import('../../pages/agent-list/agent-list.module').then(m => m.AgentListModule) ,canActivate: [AuthGuard]},
   { path: 'edit-agent/:id', loadChildren: () => import('../../pages/edit-agent/edit-agent.module').then(m => m.EditAgentModule) ,canActivate: [AuthGuard]},
   { path: 'create-agent', loadChildren:() => import('../../pages/create-agent/create-agent.module').then(m => m.CreateAgentModule),canActivate: [AuthGuard]},
   { path: 'edit-user/:id', loadChildren:() => import('../../pages/edit-user/edit-user.module').then(m => m.EditUserModule),canActivate: [AuthGuard]},
   { path: 'create-user', loadChildren:() => import('../../pages/create-user/create-user.module').then(m => m.CreateUserModule),canActivate: [AuthGuard]},

   { path: 'news-list', loadChildren:() => import('../../pages/news-list/news-list.module').then(m => m.NewsListModule),canActivate: [AuthGuard]},
   { path: 'create-news', loadChildren:() => import('../../pages/create-news/create-news.module').then(m => m.CreateNewsModule),canActivate: [AuthGuard]},
   { path: 'edit-news/:id', loadChildren:() => import('../../pages/edit-news/edit-news.module').then(m => m.EditNewsModule),canActivate: [AuthGuard]},

   { path: 'event-list', loadChildren: () => import('../../pages/events/event.module').then(m => m.EventsModule) ,canActivate: [AuthGuard]}
];


  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminLayoutRoutesModule { }
