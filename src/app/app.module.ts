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

import { AngularEditorModule } from '@kolkov/angular-editor';
import {  NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import { MatChipsModule } from "@angular/material/chips";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {  MatIconModule} from '@angular/material/icon';
//import {  MatInputModule } from "@angular/material/input";
//import {  MatAutocompleteModule } from "@angular/material/autocomplete";
//import {  MatChipsModule  } from "@angular/material/chips";
//import {  MatFormFieldModule } from "@angular/material/form-field";
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
    LandingPageComponent
    
   
    
   
    

    // RegistrationPageComponent,
    // LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AngularEditorModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule ,
    NgMultiSelectDropDownModule.forRoot()
    
  ],
  
  providers: [{ 
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  },EnrollmentService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
