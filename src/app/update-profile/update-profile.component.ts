import { Component, OnInit } from '@angular/core';
import { FormArray,FormControl,FormGroup } from '@angular/forms';
import { EnrollmentService } from '../registration-page/enrollment.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private updateservice:EnrollmentService) { }

  ngOnInit(): void {
  }
  updateProfile:any = new FormGroup({
    phone:new FormControl(),
    company:new FormControl(''),
    skills:new FormArray([]),
    hobbies:new FormArray([])
  })

  // get phone(){
  //   return this.updateProfile.get('phone')
  // }
  // get company(){
  //   return this.updateProfile.get('company')
  // }
  addskill(){
    this.updateProfile.get('skills').push(new FormControl())
  }
  addhobbies(){
    this.updateProfile.get('hobbies').push(new FormControl())
  }
  onSubmit(){
    window.alert("You have successfully Updated Profile")
    console.log(this.updateProfile.value)
    this.updateservice.updateUserProfile(this.updateProfile.value).subscribe(updateprofile=>{
      console.log(updateprofile)
    })
  }

}
