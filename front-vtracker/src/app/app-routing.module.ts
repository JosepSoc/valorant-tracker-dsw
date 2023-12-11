import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/pages/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path : 'abm', loadChildren: () => import('./crud-user/crud-user.module').then(m => m.CrudUserModule) },
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
