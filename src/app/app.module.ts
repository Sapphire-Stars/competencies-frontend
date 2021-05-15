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
import { LandingPageComponent } from './landing-page/landing-page.component';

//import {ConfirmEqualValidatorDirective} from './reset-password/shared/confirm-equal-validator.directive'

// import { RegistrationPageComponent } from './registration-page/registration-page.component';
// import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    LandingPageComponent,
   
    
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
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
