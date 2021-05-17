import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { EnrollmentService } from '../registration-page/enrollment.service';
import { Login } from './login';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  userModel = new Login('', '');

  constructor(private es: EnrollmentService,private route:Router) {}

  public validator = false;
  public validator2 = false;
  ngOnInit(): void {
    document.createElement;
  }
  onSubmit() {
    console.log(this.userModel);
    this.es.login(this.userModel).subscribe(
      (data) => {
        console.log(data);
        // email exists and password verified
        if (data.message == 'success') {
          console.log('ya success');
          this.validator = false;
          this.validator2 = false;
          localStorage.setItem('token', data.token);
          this.route.navigate(['/home-page'])
          window.alert("Login successfull")
          

        }
        // email does not exists in database
        else if (data.message == 'email does not exist') {
          this.validator = false;
          this.validator2 = true;
        }
        // password entered is incorrect
        else {
          this.validator2 = false;
          this.validator = true;
        }
      },
      (error) => console.log(error)
    );
  }
  
}
