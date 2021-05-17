import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EnrollmentService } from '../registration-page/enrollment.service';
import { ResetPassword } from './reset-password';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  email:any
  token:any

  confirmPassword:any


  constructor(private es:EnrollmentService,private route:ActivatedRoute,private router:Router) { }
  userModel = new ResetPassword('','')
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.email=params.get('email')
      this.token=params.get('token')
    })
  }

  onSubmit(){
   
   this.es.update(this.userModel,this.email,this.token).subscribe(data=>{
     console.log(data)
     if(data.message=='password has been set'){
       window.alert('Password has been updated')
     }
     else{
       window.alert("Incorrect credentials")
     }
   })
    console.log(this.userModel)
  }

}
