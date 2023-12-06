import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AbmListComponent } from './components/abm-list/abm-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbmFormComponent } from './components/abm-form/abm-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AgentsListComponent } from './components/agents-list/agents-list.component';
import { ProfileTemplateComponent } from './components/profile-template/profile-template.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AbmListComponent,
    AbmFormComponent,
    LoginFormComponent,
    AgentsListComponent,
    ProfileTemplateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
