import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { AirportComponent } from './pages/airport/airport.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'airportsList',
    pathMatch: 'full'
  },
  
  // Pages routes
  {
    path: 'airportsList',
    component: HomeComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'airport',
    component: AirportComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },

  // Auth routes
  {
    path: 'login',
    component: LoginComponent
  },
  
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
