import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudUserRoutingModule } from './crud-user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AbmFormComponent } from './pages/abm-form/abm-form.component';
import { AbmListComponent } from './pages/abm-list/abm-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AbmFormComponent,
    AbmListComponent

  ],
  imports: [
    CommonModule,
    CrudUserRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    SharedModule

  ]
})
export class CrudUserModule { }
