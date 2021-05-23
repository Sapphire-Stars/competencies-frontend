import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../registration-page/enrollment.service';
import {Observable} from 'rxjs'
import {Router} from '@angular/router'
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { Question } from '../ask-question/askQuestion';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  counter:number=0
  data:any
  totalRec:any
  page:number=1
  constructor(private es:EnrollmentService,private route:Router) { }
 

  ngOnInit(): void {
    this.es.getQuestions().subscribe(data=>{
      console.log(data)
      this.data=data
      this.totalRec = this.data.length;
     
    })

  }
  onClick(value:any){

    let obj={question:value}
    this.es.getQuestionViews(obj).subscribe(data=>{
      console.log(data)
      this.data=data
    })

    

    this.route.navigate(['./questions',value])
  }
  signOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    this.route.navigate(['/login'])
  }
  searchQuestionsByTags(tag:any){
    this.es.questionByTags(tag).subscribe(data=>{
      console.log(data)
      this.data=data
    })
  }

}
