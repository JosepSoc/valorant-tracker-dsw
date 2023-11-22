import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbmListComponent } from './abm-list/abm-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PercentageBarComponent } from './components/percentage-bar/percentage-bar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AbmListComponent,
    PercentageBarComponent,
    AbmFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
