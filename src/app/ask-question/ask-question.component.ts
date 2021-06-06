import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { FormArray, FormControl,FormGroup, Validators,FormBuilder } from "@angular/forms";
import { EnrollmentService } from "../registration-page/enrollment.service";
import { AngularEditorConfig } from '@kolkov/angular-editor';
import Quill from 'quill';
import {COMMA, ENTER, SPACE} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
  import {Observable} from 'rxjs';
  import {map, startWith} from 'rxjs/operators';
  import { Router } from "@angular/router";
// export interface Tags {
//   name: string;
// }
@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {
 
 visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA,SPACE];
  questionObj!: any;
 //questionTag:any;
//questionTag=new FormControl()
tagCtrl=new FormControl();
questionTagArray:string[]=[];
  filteredOptions!: Observable<string[]>;
  //tags: string[] = ['nodejs'];
  allTags: any[] = ['Angular', 'react', 'expressjs', 'javascript', 'html','css','bootstrap','restApi','mongodb','java','node.js'
,'sql','python','c#','php'];

  
  @ViewChild('tagInput')
  tagInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto')
  matAutocomplete!: MatAutocomplete;
//  questionTag!: FormControl;

  createTag(value:any){
    return this.fb.control(value);
  }

  addTag(value:any){
    return this.questionObj.get('questionTag').push(this.createTag(value))
  }

  removeTag(index:number){
    return this.questionObj.get('questionTag').removeAt(index)
  }

//questionObj:any= new FormGroup({ 
 
  //questionTitle:new FormControl('',Validators.required),
  //questionBody:new FormControl('',Validators.required),
 // questionTag:new FormControl('')
// questionTag:new FormArray([
  // new FormControl('')
 //])
//})
  constructor(private questionservice:EnrollmentService,
    private fb: FormBuilder,private router:Router) { 
    
  }
  ngOnInit(): void {
    this.questionObj=this.fb.group({
      questionTitle:['',[Validators.required]],
      questionBody:['',[Validators.required]],
      questionTag:this.fb.array([this.createTag('')]),
//      questionTag:[this.questionTagArray,[Validators.required]]
    }
    )

    this.filteredOptions = this.tagCtrl.valueChanges.pipe(
      startWith(''),
      map((value:any) => value ? this._filter(value):this.allTags.slice())
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
 
get questionTitle(){
return this.questionObj.get('questionTitle')
}
get questionBody(){
  return this.questionObj.get('questionBody') 
}
//get questionTag(){
  //return this.questionObj.get('questionTag')
//}
// editorConfig: AngularEditorConfig = {
//   editable: true,
//     spellcheck: false,
//     height: '200px',
//     minHeight: '0',
//     maxHeight: 'auto',
//     width: 'auto',
//     minWidth: '0',
//     translate: 'yes',
//     enableToolbar: true,
//     showToolbar: true,
//     placeholder: 'Enter text here...',
//     defaultParagraphSeparator: '',
//     defaultFontName: '',
//     defaultFontSize: '',
//     fonts: [
//       {class: 'arial', name: 'Arial'},
//       {class: 'times-new-roman', name: 'Times New Roman'},
//       {class: 'calibri', name: 'Calibri'},
//       {class: 'comic-sans-ms', name: 'Comic Sans MS'}
//     ],
//     customClasses: [
//     {
//       name: 'quote',
//       class: 'quote',
//     },
//     {
//       name: 'redText',
//       class: 'redText'
//     },
//     {
//       name: 'titleText',
//       class: 'titleText',
//       tag: 'h1',

//     },
//   ],
//   uploadUrl: 'v1/image',
//   uploadWithCredentials: false,
//   sanitize: true,
//   toolbarPosition: 'top',
//   toolbarHiddenButtons: [
//     ['bold', 'italic'],
//     ['fontSize']
//   ]
// };

config={
  toolbar:[
    ['bold', 'italic', 'underline'],        // toggled buttons
    ['blockquote', 'code-block'],

  //  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    //[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'],                                         // remove formatting button

    ['link', 'image', 'video']                         // link and image, video

  ]
}

//addTags(){
  //this.questionObj.get('questionTag').push(new FormControl(null,Validators.required))
//}



add(event:MatChipInputEvent): void {
  //const value = (event.value || '').trim();

  // Add our fruit
  //if (value) {
    //this.tags.push(value);
  //}

  // Clear the input value
//  event.chipInput!.clear();

//  this.questionTag.setValue(null);

  const input=event.input;
  const value=event.value;
  console.log(value)

  if(this.questionTagArray.length<5){
    if((value || '').trim()){
      this.questionTagArray.push(value.trim());
      this.addTag(value);
    }
  }
  if(input){
    input.value='';
  }
  this.tagCtrl.setValue(null);
//   if((value||'').trim()&&this.questionTagArray.length<5){
// this.questionTagArray.push({name:value.trim()})
// }
// if(input){
//   input.value='';
// }


// const value=(event.value || '').trim();
// if(value){
//   this.questionTagArray.push(value);
// }
//this.questionObj.get('questionTag').setValue(null)

}

remove(tags:string): void {
  const index = this.questionTagArray.indexOf(tags);

  if (index >= 0) {
    this.questionTagArray.splice(index, 1);
    this.removeTag(index+1);
  }
}

selected(event: any): void {
  // this.questionTagArray.push(event.option.viewValue);
if(this.questionTagArray.length<5){
  this.questionTagArray.push(event.option.viewValue);

  const value=event.option.viewValue;
  
  console.log(event.option.viewValue);
 
  this.addTag(value);
  const index=this.allTags.indexOf(value.trim());
  if(index>=0){
    this.allTags.splice(index,1)
  }
}
  
    
    this.tagCtrl.setValue(null);
  this.tagInput.nativeElement.value = '';
//  this.questionObj.get('questionTag').setValue(null);
}






onSubmit(){ 
  window.alert("Your question is submited")
  console.log(this.questionObj.value);
  this.questionservice.postQuestions(this.questionObj.value).subscribe(result=>{ 
    console.log(result)
  })
  this.router.navigate(['/home-page'])

}
}
