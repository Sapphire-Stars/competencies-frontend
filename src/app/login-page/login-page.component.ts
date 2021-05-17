import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { EnrollmentService } from '../registration-page/enrollment.service';
import { Login } from './login';
<<<<<<< HEAD
import {Router} from '@angular/router'
=======
import { Router} from "@angular/router";
>>>>>>> 30764a3c0247f1e77c08a0dcd09dfd32adb61b0f

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  userModel = new Login('', '');

<<<<<<< HEAD
  constructor(private es: EnrollmentService,private route:Router) {}

  public validator = false;
  public validator2 = false;
=======
  userModel=new Login('','');
  
  constructor(private es:EnrollmentService,private route:Router) { }
  
  public validator=false;
  public validator2 = false
>>>>>>> 30764a3c0247f1e77c08a0dcd09dfd32adb61b0f
  ngOnInit(): void {
    document.createElement;
  }
  onSubmit() {
    console.log(this.userModel);
    this.es.login(this.userModel).subscribe(
      (data) => {
        console.log(data);
        // email exists and password verified
        if(data.message=='success'){
          console.log("ya success")
          this.validator=false
          this.validator2=false
          localStorage.setItem('token',data.token)
          localStorage.setItem('email',this.userModel.email)
          window.alert("login successfull")
             localStorage.setItem('token',data.token)
             
             //getting  token and decoding it and storing into local storage
          //    var token=data.token
          //  let decodedHeader:any= jwt_decode(token)
          //   console.log(decodedHeader)
          //   localStorage.setItem('email',decodedHeader.user.email)
             //navigate after logged in
           //this.route.navigate(['/askQuestion'])
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
