import { Component, OnInit } from '@angular/core';
import { Answer } from '../answer';
import { EnrollmentService } from '../registration-page/enrollment.service';

@Component({
  selector: 'app-questions-and-answers',
  templateUrl: './questions-and-answers.component.html',
  styleUrls: ['./questions-and-answers.component.css']
})
export class QuestionsAndAnswersComponent implements OnInit {

  constructor(private service:EnrollmentService) { }

  question: any = "what is javascript"
  answers: any = ['jhgdafuasakjsalJ;LJLJ;JSADN,N,N,M,MSADHK',
    'AKJLKLANS,MNDNLWNNkalkd',
    'asljhlhlhlahlkhlslhlsal',
    'lajsdjkjaksdk;j;kjk'];
  points: any = 10
  vv:any;
  author='Tony Stark@gmail.com'
  answerModel = new Answer();
  ngOnInit(): void {
    this.service.postAnswer(this.answerModel).subscribe(data=>{
      this.vv=data
    console.log(data)})
  }

  onUpvote() {
    this.points++;
  }

  onDownvote() {
    this.points--;
  }

  onSubmit(){
    console.log(this.answerModel)
    this.service.postAnswer(this.answerModel).subscribe(data=>console.log(data),error=>console.log(error))

  }

}
