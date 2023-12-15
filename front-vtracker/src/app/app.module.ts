import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProfileModule } from './profile/profile.module';
import { SharedModule } from './shared/shared.module';
import { CrudUserModule } from './crud-user/crud-user.module';
import { CrudAgentRoutingModule } from './crud-agent/crud-agent-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProfileModule,
    CrudUserModule,
    SharedModule,
    CrudAgentRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
