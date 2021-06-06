import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollmentService } from '../registration-page/enrollment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any;
  counter:number=0
  totalRec:any
  page:number=1

  constructor(private service: EnrollmentService, private route:Router) { }

  ngOnInit(): void {

    this.service.getUsers().subscribe(data => {
      this.users = data
      this.totalRec = this.users.length
      console.log(data)
    },
      error => {
        console.log(error)
      })
  }
  onClick(value:any){

    let obj={question:value}
    this.service.getQuestionViews(obj).subscribe(data=>{
      console.log(data)
      this.users=data
    })

    

    this.route.navigate(['./questions',value])
  }
  signOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    this.route.navigate(['/login'])
  }
  searchQuestionsByTags(tag:any){
    this.service.questionByTags(tag).subscribe(data=>{
      console.log(data)
      this.users=data
    })
  }


}
