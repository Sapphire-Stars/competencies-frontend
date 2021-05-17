import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { error } from 'selenium-webdriver';
import { Answer } from '../answer';
import { EnrollmentService } from '../registration-page/enrollment.service';

@Component({
  selector: 'app-questions-and-answers',
  templateUrl: './questions-and-answers.component.html',
  styleUrls: ['./questions-and-answers.component.css']
})
export class QuestionsAndAnswersComponent implements OnInit {

  constructor(private service:EnrollmentService, private route:ActivatedRoute) { }

  
  points: any = 10
  questionDetails:any;
  author='Tony Stark@gmail.com'
  question:any;
  answerModel = new Answer();
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{

      this.question= params.get('question');
      console.log(this.question)
    })
    this.service.getQuetionDetails(this.question).subscribe(
      data=>{
        console.log(data)
      this.questionDetails=data
      },
      error=>{
        console.log(error)
    })
  }

  onUpvote() {
    this.points++;
  }

  onDownvote() {
    this.points--;
  }

  onSubmit(){
    
    this.service.postAnswer(this.questionDetails[0].questionTitle,this.answerModel).subscribe(data=>console.log(data),error=>console.log(error))

  }

}
