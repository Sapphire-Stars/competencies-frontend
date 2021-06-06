import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { AuthGuard } from './auth.guard';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { QuestionsAndAnswersComponent } from './questions-and-answers/questions-and-answers.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:'',redirectTo:'landingPage', pathMatch:'full'},
  {path:'landingPage',component:LandingPageComponent},
  {path:'register',component:RegistrationPageComponent},
  {path:'questions/:question',component:QuestionsAndAnswersComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginPageComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'resetPassword/:email/:token',component:ResetPasswordComponent},
 
  {path:'home-page',component:HomePageComponent,canActivate:[AuthGuard]},
 
  {path:'user-profile',component:UserProfileComponent,canActivate:[AuthGuard]},

  {path:'askQuestion',component:AskQuestionComponent,canActivate:[AuthGuard]},
  {path:'update-profile',component:UpdateProfileComponent},
  {path:'create-profile',component:CreateProfileComponent},
  {path:'dashboard', component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistrationPageComponent,LoginPageComponent]

