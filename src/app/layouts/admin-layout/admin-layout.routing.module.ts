import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlreadyLoginActivate } from 'app/_guards/auth-guard.service';

const routes: Routes = [
   { path: 'login', canActivate: [AlreadyLoginActivate], loadChildren: () => import('../../pages/login/login.module').then(m => m.LoginModule) },
   { path: 'dashboard', loadChildren: () => import('../../pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
   { path: 'profile', loadChildren: () => import('../../pages/profile/profile.module').then(m => m.ProfileModule) },
   { path: 'change-password', loadChildren: () => import('../../pages/change-password/change-password.module').then(m => m.ChangePasswordModule) },
   { path: 'agent-type-list', loadChildren: () => import('../../pages/agent-type-list/agent-type-list.module').then(m => m.AgentTypeListModule)},
   { path: 'edit-agent-type/:id', loadChildren: () => import('../../pages/edit-agent-type/edit-agent-type.module').then(m => m.EditAgentTypeModule)},
   { path: 'create-agent-type', loadChildren: () => import('../../pages/create-agent-type/create-agent-type.module').then(m => m.CreateAgentTypeModule)},
   { path: 'sub-agent-type-list', loadChildren: () => import('../../pages/sub-agent-type-list/sub-agent-type-list.module').then(m => m.SubAgentTypeListModule)},
   { path: 'edit-sub-agent-type/:id', loadChildren: () => import('../../pages/edit-sub-agent-type/edit-sub-agent-type.module').then(m => m.EditSubAgentTypeModule)},
   { path: 'create-sub-agent-type', loadChildren: () => import('../../pages/create-sub-agent-type/create-sub-agent-type.module').then(m => m.CreateSubAgentTypeModule)},
   { path: 'property-category-list', loadChildren: () => import('../../pages/property-category-list/property-category-list.module').then(m => m.PropertyCategoryListModule)},
   { path: 'create-property-category', loadChildren: () => import('../../pages/create-property-category/create-property-category.module').then(m => m.CreatePropertyCategoryModule)},
   { path: 'edit-property-category/:id', loadChildren: () => import('../../pages/edit-property-category/edit-property-category.module').then(m => m.EditPropertyCategoryModule)},

   { path: 'property-type-list', loadChildren: () => import('../../pages/property-type-list/property-type-list.module').then(m => m.PropertyTypeListModule)},
   { path: 'create-property-type', loadChildren: () => import('../../pages/create-property-type/create-property-type.module').then(m => m.CreatePropertyTypeModule)},
   { path: 'edit-property-type/:id', loadChildren: () => import('../../pages/edit-property-type/edit-property-type.module').then(m => m.EditPropertyTypeModule)},

   { path: 'user-list', loadChildren: () => import('../../pages/user/user.module').then(m => m.UserModule) },
   { path: 'agent-list', loadChildren: () => import('../../pages/agent-list/agent-list.module').then(m => m.AgentListModule) },
   { path: 'edit-agent/:id', loadChildren: () => import('../../pages/edit-agent/edit-agent.module').then(m => m.EditAgentModule) },
   { path: 'create-agent', loadChildren:() => import('../../pages/create-agent/create-agent.module').then(m => m.CreateAgentModule)},
   { path: 'edit-user/:id', loadChildren:() => import('../../pages/edit-user/edit-user.module').then(m => m.EditUserModule)},
   { path: 'create-user', loadChildren:() => import('../../pages/create-user/create-user.module').then(m => m.CreateUserModule)},

   { path: 'news-list', loadChildren:() => import('../../pages/news-list/news-list.module').then(m => m.NewsListModule)},
   { path: 'create-news', loadChildren:() => import('../../pages/create-news/create-news.module').then(m => m.CreateNewsModule)},
   { path: 'edit-news/:id', loadChildren:() => import('../../pages/edit-news/edit-news.module').then(m => m.EditNewsModule)},

   { path: 'event-list', loadChildren: () => import('../../pages/events/event.module').then(m => m.EventsModule) }
];

  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminLayoutRoutesModule { }
