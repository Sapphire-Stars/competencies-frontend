import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray,FormControl,FormGroup } from '@angular/forms';
import { EnrollmentService } from '../registration-page/enrollment.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private updateservice:EnrollmentService,private http:HttpClient) { }
  data1:any;
  profile:any;
  email:any;
  ngOnInit(): void {
      this.email=localStorage.getItem('email')
      this.showImage().subscribe(data1=>{
      console.log(data1)
      this.data1=data1
      console.log(this.data1)
      this.profile=this.data1[this.data1.length-1].imagePath
      console.log(this.profile)
    })
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
    window.alert("You have successfully Updated Profile")
    console.log(this.updateProfile.value)
    this.updateservice.updateUserProfile(this.updateProfile.value).subscribe(updateprofile=>{
      console.log(updateprofile)
    })
  }

  showImage(){
    return this.http.get(`http://localhost:8900/api/getImage/${this.email}`)
  }

}
