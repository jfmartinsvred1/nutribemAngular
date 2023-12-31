import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
  path: '',
  redirectTo:'',
  pathMatch:'full'
  },
  {
  path: 'login',
  component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
