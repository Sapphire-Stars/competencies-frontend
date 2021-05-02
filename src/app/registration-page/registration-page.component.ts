import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { Registration } from './registration';


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
    this.es.enroll(this.userModel)
    .subscribe(
      data =>{
        this.validator=false;
        console.log('Success!',data)},
      error=>{
        this.validator=true;
        console.log('Error!',error.error.error)}
    );
  }
  

  ngOnInit(): void {
  }

}
