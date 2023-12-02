import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AbmListComponent } from './components/abm-list/abm-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PercentageBarComponent } from './components/percentage-bar/percentage-bar.component';
import { AbmFormComponent } from './components/abm-form/abm-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AbmListComponent,
    PercentageBarComponent,
    AbmFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
