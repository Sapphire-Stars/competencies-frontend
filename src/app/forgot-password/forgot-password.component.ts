import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnrollmentService } from '../registration-page/enrollment.service';
import { ForgotPassword } from './forgot-password';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private es: EnrollmentService, private router:Router) { }
  validator=false;
  ngOnInit(): void {
  }
  userModel = new ForgotPassword("");
  onSubmit(){
    console.log(this.userModel)
    this.es.checkUser(this.userModel).subscribe(
      data => {
        console.log(data)
        if(data.message=='valid user'){
          this.validator=false
           window.alert("Link to reset password has been sent to your email")
          this.es.getLink(this.userModel).subscribe(data=>{
            console.log(data)
            window.alert("link to reset password has been sent to your mail!!")
          })
        }
        else{
         
          this.validator=true
        }
        
              
      },
      error =>console.log(error)
    ) 
  }
 
  
}
