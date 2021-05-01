import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { EnrollmentService } from '../registration-page/enrollment.service';
import { Login } from './login';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userModel=new Login('','');
  
  constructor(private es:EnrollmentService) { }
  
  public validator=false;
  public validator2 = false
  ngOnInit(): void {
    document.createElement
  }

  onSubmit(){
    console.log(this.userModel)
    this.es.login(this.userModel).subscribe(
      data => {
        console.log(data)
        if(data.message=='success'){
          console.log("ya success")
          this.validator=false
          this.validator2=false
        }
        else if(data.message == 'email does not exist'){
          this.validator=false
          this.validator2=true
        }
        else{
          this.validator2=false
          this.validator=true
        }
        
              
      },
      error =>console.log(error)
    ) 
  }
  
 
}
