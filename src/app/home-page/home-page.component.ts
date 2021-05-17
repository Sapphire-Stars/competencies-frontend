import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../registration-page/enrollment.service';
import {Observable} from 'rxjs'
import {Router} from '@angular/router'
import { LandingPageComponent } from '../landing-page/landing-page.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  data:any
  totalRec:any
  page:number=1
  constructor(private es:EnrollmentService,private route:Router) { }
  

  ngOnInit(): void {
    this.es.getQuestions().subscribe(data=>{
      console.log(data)
      this.data=data
      this.totalRec = this.data.questionObj.length;
     
    })

  }
  onClick(){
    this.route.navigate(['./landingPage'])
  }

}
