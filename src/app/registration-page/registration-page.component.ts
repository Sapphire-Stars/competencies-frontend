import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { Registration } from './registration';


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  info =false;
  Error:any;

  userModel = new Registration('','','','');
  constructor(private es:EnrollmentService) { }
  onSubmit(){
    this.es.enroll(this.userModel)
    .subscribe(
      data =>console.log('Success!',data),
      error=>{
        this.info=true;
        let DataError= document.getElementById("email");
        if(DataError){
          console.log(DataError)
          DataError.innerHTML="email already exist"
        }
        this.Error=error.error.error;
        console.log('Error!',error.error.error)}
    );
  }
  

  ngOnInit(): void {
  }

}
