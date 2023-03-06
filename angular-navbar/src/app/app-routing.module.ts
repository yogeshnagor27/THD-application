import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InternationalComponent } from './international/international.component';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'news', component:NewsComponent},
  {path: 'events', component:EventsComponent},
  {path: 'navigation', component:NavigationComponent},
  {path: 'international', component:InternationalComponent},
 
  {path: 'signup', component:SignupComponent},
  {path: 'login', component:LoginComponent},
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'auth', component: AuthComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





