import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmListComponent } from './pages/abm-list/abm-list.component';
import { AbmFormComponent } from './pages/abm-form/abm-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudAgentRoutingModule } from './crud-agent-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AbmListComponent,
    AbmFormComponent,
  ],
  imports: [
    CommonModule,
    CrudAgentRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    SharedModule
  ]
})
export class CrudAgentModule { }
