import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudUserRoutingModule } from './crud-user-routing.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AbmFormComponent } from './pages/abm-form/abm-form.component';
import { AbmListComponent } from './pages/abm-list/abm-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    ConfirmDialogComponent,
    AbmFormComponent,
    AbmListComponent

  ],
  imports: [
    CommonModule,
    CrudUserRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule

  ]
})
export class CrudUserModule { }
