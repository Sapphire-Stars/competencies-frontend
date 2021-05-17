import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {  TokenInterceptorService} from './token-interceptor.service';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { QuestionsAndAnswersComponent } from './questions-and-answers/questions-and-answers.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { EnrollmentService } from './registration-page/enrollment.service';
import { AuthGuard } from './auth.guard';

//import {ConfirmEqualValidatorDirective} from './reset-password/shared/confirm-equal-validator.directive'

// import { RegistrationPageComponent } from './registration-page/registration-page.component';
// import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    QuestionsAndAnswersComponent,
    AskQuestionComponent,
    
   
    
    // RegistrationPageComponent,
    // LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

    
  ],
  
  providers: [{ 
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  },EnrollmentService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
