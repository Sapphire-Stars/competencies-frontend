import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../registration-page/enrollment.service';
import { Active } from './active';
import {Router} from '@angular/router'
import Swal from 'sweetalert2'

import { HttpClient } from '@angular/common/http';

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
  profile:any;
  email:any;
  data1:any;
  activeModel=new Active('','','','')
  constructor(private es:EnrollmentService,private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
      this.email=localStorage.getItem('email')
      this.es.getProfileDetails(this.activeModel).subscribe(data=>{
      console.log(data);
      this.data = data
    })
    this.es.getUserQuestion().subscribe(question=>{
      console.log(question)
      this.question= question
      this.totalRec = this.data.length;
    })
    //image part
      this.showImage().subscribe(data1=>{
      console.log(data1)
      this.data1=data1
      console.log(this.data1)
      this.profile=this.data1[this.data1.length-1].imagePath
      console.log(this.profile)
    })
    
    
  }
  signOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    Swal.fire({
      icon: 'success',
      title: 'Signed out',
      text: 'See you again',
    })
    this.route.navigate(['/login'])
  }
  onClick(value:any){
    this.route.navigate(['./questions',value])
  }
  showImage(){
    return this.http.get(`http://localhost:8900/api/getImage/${this.email}`)
  }
  

}
