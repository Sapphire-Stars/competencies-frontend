import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../registration-page/enrollment.service';
import { Active } from './active';
import {Router} from '@angular/router'

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
  constructor(private es:EnrollmentService,private route:Router) { }

  ngOnInit(): void {
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
  signOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    this.route.navigate(['/login'])
  }
  onClick(value:any){
    this.route.navigate(['./questions',value])
  }
  

}