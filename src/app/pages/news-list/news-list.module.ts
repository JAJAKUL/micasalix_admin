import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomPipeModule } from 'app/custom/custom-pipe/custom-pipe.module';
import { MatTabsModule } from '@angular/material/tabs';
import { NewsListRoutes } from './news-list.routing.module';
import { NewsListComponent } from './news-list.component';


@NgModule({
  declarations: [NewsListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NewsListRoutes,
    MatPaginatorModule,
    CustomPipeModule,
    MatTabsModule,
  ]
})
export class NewsListModule { }
