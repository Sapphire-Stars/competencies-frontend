import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {  TokenInterceptorService} from './token-interceptor.service';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { UserProfileComponent } from './user-profile/user-profile.component';

import { QuestionsAndAnswersComponent } from './questions-and-answers/questions-and-answers.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { EnrollmentService } from './registration-page/enrollment.service';
import { AuthGuard } from './auth.guard';
import {HomePageComponent} from './home-page/home-page.component'
import {NgxPaginationModule} from 'ngx-pagination'
import { LandingPageComponent } from './landing-page/landing-page.component';
<<<<<<< HEAD
import { AngularEditorModule } from '@kolkov/angular-editor';


=======
import { UpdateProfileComponent } from './update-profile/update-profile.component';
>>>>>>> 640fbd3b64eeb22772bf2fd5a88cc4ae2372b2a3


//import {ConfirmEqualValidatorDirective} from './reset-password/shared/confirm-equal-validator.directive'

// import { RegistrationPageComponent } from './registration-page/registration-page.component';
// import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ForgotPasswordComponent,
    ResetPasswordComponent,

    UserProfileComponent,
    QuestionsAndAnswersComponent,
    AskQuestionComponent,
    HomePageComponent,
<<<<<<< HEAD
    LandingPageComponent
  
=======
    LandingPageComponent,
    UpdateProfileComponent
    
   
    
   
    

    // RegistrationPageComponent,
    // LoginPageComponent
>>>>>>> 640fbd3b64eeb22772bf2fd5a88cc4ae2372b2a3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AngularEditorModule

    
  ],
  
  providers: [{ 
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  },EnrollmentService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
