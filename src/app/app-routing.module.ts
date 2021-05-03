import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {path:'',redirectTo:'register', pathMatch:'full'},
  {path:'register',component:RegistrationPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'resetPassword/:email',component:ResetPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistrationPageComponent,LoginPageComponent]

