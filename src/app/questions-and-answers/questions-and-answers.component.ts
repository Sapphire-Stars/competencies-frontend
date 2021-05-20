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

  constructor(private service: EnrollmentService, private route: ActivatedRoute) { }


  points: any = 0
  questionDetails: any;
  question: any;
  answerModel = new Answer();
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {

      this.question = params.get('question');
      console.log(this.question)
    })
    this.service.getQuetionDetails(this.question).subscribe(
      data => {
        console.log(data)
        this.questionDetails = data
      },
      error => {
        console.log(error)
      })
  }

  response: any;
  response2:any;
  onUpvoteQuestion() {

    let questionObj = { "question": this.question, "type": "good", "email": localStorage.getItem('email') }
    this.service.voteQuestion(questionObj).subscribe(data => {
      console.log(data)
      this.response = data
      if (this.response.message == 'already voted') {
        window.alert('You have already voted!!')
      }
      else {
        this.questionDetails[0].points++;
      }

    }, error => {
      console.log(error)
    })

  }

  onDownvoteQuestion() {

    let questionObj = { "question": this.question, "type": "not good", "email":localStorage.getItem('email')}
    this.service.voteQuestion(questionObj).subscribe(data => {
      console.log(data)
      this.response2 = data
      if (this.response2.message == 'already voted') {
        window.alert('You have already voted')
      }
      else {
        this.questionDetails[0].points--
      }
    }, error => {
      console.log(error)
    })
   
  }


  responseForUpVotAnswer: any;
  responseForDownVoteAnswer:any

  onUpvoteAnswer(answer: any) {

      let questionAnswerObj = { "question": this.question, "type": "good", "answer": answer.answer, "email":localStorage.getItem('email') }
      this.service.voteAnswer(questionAnswerObj).subscribe(data => {
       
        this.responseForUpVotAnswer=data

        if(this.responseForUpVotAnswer.message=="already voted"){
        
          window.alert("You have already voted")
        }else{
          answer.points++
        }
      }, error => {
        console.log(error)
      })

  }

  onDownvoteAnswer(answer: any) {


      let questionObj = { "question": this.question, "type": "not good", "answer": answer.answer, "email":localStorage.getItem('email') }
      this.service.voteAnswer(questionObj).subscribe(data => {
        console.log(data)
        this.responseForDownVoteAnswer=data
        if(this.responseForDownVoteAnswer.message=="already voted"){
          window.alert("You have already voted")
        }
        else{
          answer.points--
        }
       
      }, error => {
        console.log(error)
      })
    
  }
 responseForAnswer:any;
  onSubmit() {
    
    this.service.postAnswer(this.questionDetails[0].questionTitle, this.answerModel).subscribe(data => {
      console.log(data)
      this.responseForAnswer  = data
      
    },
      error => {
        console.log(error)
      })
    // window.location.reload()

  }

}
