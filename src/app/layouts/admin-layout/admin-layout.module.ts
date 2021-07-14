import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutesModule } from './admin-layout.routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AdminLayoutRoutesModule
  ],
  declarations: [
  ]
})

export class AdminLayoutModule {}

