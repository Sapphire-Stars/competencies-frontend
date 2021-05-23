import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EnrollmentService } from '../registration-page/enrollment.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  data:any;
  constructor(private es:EnrollmentService) { }

  ngOnInit(): void {
    this.es.getProfile().subscribe(data=>{
      console.log(data)
      this.data=data
    })
  }
  profileObj:any=new FormGroup({
    profilePicture:new FormControl('')
  })
onSubmit(){
  console.log(this.profileObj.value)
  this.es.postProfileData(this.profileObj.value).subscribe(result=>{
    console.log(result)
  })
}
}
