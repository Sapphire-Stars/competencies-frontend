import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl,FormGroup, Validators } from "@angular/forms";
import { EnrollmentService } from "../registration-page/enrollment.service";
@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {

  constructor(private questionservice:EnrollmentService) { }

  ngOnInit(): void {
  }
questionObj:any= new FormGroup({ 
  questionTitle:new FormControl(''),
  questionBody:new FormControl(''),
 // questionTag:new FormControl('')
 questionTag:new FormArray([
   
 ])
})

addTags(){
  this.questionObj.get('questionTag').push(new FormControl(null,Validators.required))
}
onSubmit(){ 
  console.log(this.questionObj.value);
  this.questionservice.postQuestions(this.questionObj.value).subscribe(result=>{ 
    console.log(result)
  })
}
}
