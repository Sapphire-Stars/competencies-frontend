import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { Registration } from './registration';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  validator =false;
 validator2=true

  userModel = new Registration('','','','');
  constructor(private es:EnrollmentService) { }
  onSubmit(){
    this.es.checkUser(this.userModel).subscribe(data=>{
      if(data.message!='email does not exist'){
        this.validator=true
        console.log(data.message)
      }
      else{
        this.es.enroll(this.userModel)

        .subscribe(
          data =>{
            this.validator=false;
           Swal.fire({
            icon: 'success',
            title: 'verification link has been sent to your mail, please verify!',
            text: 'Hurry up',
          })
            console.log('Success!',data)},
          error=>{
            this.validator=true;
            console.log(error)}
        );

      }
    })

   
  }
  

  ngOnInit(): void {
  }

}
