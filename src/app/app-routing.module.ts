import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent }, //home http://localhost:4200/
  {path: 'login', component: LoginComponent },//login http://localhost:4200/login
  {path: 'register', component: RegisterComponent},//register http://localhost:4200/register
  {
    path: 'dashboard',
    loadChildren: ()=> import ("./protected/protected.module")
    .then(module => module.ProtectedModule)
  },
  {path: '**', redirectTo: ''} //hola -> home http://localhost:4200/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
