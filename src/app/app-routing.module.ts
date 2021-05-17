import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {path:'',redirectTo:'landingPage', pathMatch:'full'},
  {path:'landingPage',component:LandingPageComponent},
  {path:'register',component:RegistrationPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'resetPassword/:email/:token',component:ResetPasswordComponent},
  {path:'ask-question',component:AskQuestionComponent},
  {path:'home-page',component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistrationPageComponent,LoginPageComponent]

