import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubscriptionComponent } from "./subscription.component";
import { SubscriptionRoutingModule } from "./subscription-routing.module";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatPaginatorModule } from "@angular/material/paginator";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSortModule} from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
@NgModule({
  declarations: [SubscriptionComponent],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSortModule,
    MatSelectModule,
    MatDialogModule
  ],
})
export class SubscriptionModule {}
