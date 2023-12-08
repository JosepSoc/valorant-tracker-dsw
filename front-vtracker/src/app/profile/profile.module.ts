import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentsListComponent } from './components/agents-list/agents-list.component';
import { MatchHistoryComponent } from './components/match-history/match-history.component';
import { ProfileTemplateComponent } from './components/profile-template/profile-template.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AgentsListComponent,
    MatchHistoryComponent,
    ProfileTemplateComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
  ]
})
export class ProfileModule { }
