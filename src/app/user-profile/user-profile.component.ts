import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EnrollmentService } from '../registration-page/enrollment.service';
import { Active } from './active';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  data:any;
  question:any;
  totalRec:any;
  page:number=1;
  activeModel=new Active('','','','')
  constructor(private es:EnrollmentService) { }

  ngOnInit(): void {
    // this.es.getProfile().subscribe(data=>{
    //   console.log(data)
    //   this.data=data
    // })
    this.es.getProfileDetails(this.activeModel).subscribe(data=>{
      console.log(data);
      this.data = data
    })
    this.es.getUserQuestion().subscribe(question=>{
      console.log(question)
      this.question= question
      this.totalRec = this.data.length;
    })
    
  }
  profileObj:any=new FormGroup({
    profilePicture:new FormControl('')
  })

  

}
