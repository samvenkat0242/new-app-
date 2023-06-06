import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { App2Component } from './app2/app2.component';
import { App3Component } from './app3/app3.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'first-component', component: AppComponent },
  { path: 'second-component', component: App2Component },
  { path: 'third-component', component: App3Component },
  { path: 'login', component: LoginComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
