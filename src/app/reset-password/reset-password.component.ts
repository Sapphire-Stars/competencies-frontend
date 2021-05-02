import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../registration-page/enrollment.service';
import { ResetPassword } from './reset-password';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private es:EnrollmentService) { }
  userModel = new ResetPassword('','')
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.userModel)
  }

}
