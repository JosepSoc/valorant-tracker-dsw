import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmListComponent } from './pages/abm-list/abm-list.component';
import { AbmFormComponent } from './pages/abm-form/abm-form.component';

const routes: Routes = [
  { path: '', component: AbmListComponent },
  { path: 'form', component: AbmFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudUserRoutingModule { }
