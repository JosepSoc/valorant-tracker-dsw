import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbmListComponent } from './abm-list/abm-list.component';
import { AbmFormComponent } from './abm-form/abm-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AbmListComponent,
    AbmFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
