import { Component, OnInit } from '@angular/core';
import { FormArray,FormControl,FormGroup } from '@angular/forms';
import { EnrollmentService } from '../registration-page/enrollment.service';
import Swal from 'sweetalert2'
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
    hobbies:new FormArray([]),
    website:new FormControl(''),
    githubLink:new FormControl(''),
    post:new FormControl('')

  })
  addskill(){
    this.updateProfile.get('skills').push(new FormControl())
  }
  addhobbies(){
    this.updateProfile.get('hobbies').push(new FormControl())
  }
  onSubmit(){
   // window.alert("You have successfully Updated Profile")
   Swal.fire({
    icon: 'success',
    title: 'You have successfully Updated Profile',
    text: 'Done..',
  })

    console.log(this.updateProfile.value)
    this.updateservice.updateUserProfile(this.updateProfile.value).subscribe(updateprofile=>{
      console.log(updateprofile)
    })
  }

}
