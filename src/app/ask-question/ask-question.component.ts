import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { FormArray, FormControl,FormGroup, Validators,FormBuilder } from "@angular/forms";
import { EnrollmentService } from "../registration-page/enrollment.service";
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {COMMA, ENTER, SPACE} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
  import {Observable} from 'rxjs';
  import {map, startWith} from 'rxjs/operators';
  import { Router } from "@angular/router";
export interface Tags {
  name: string;
}
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
//  questionTag:any;
questionTagArray:Tags[]=[];
  filteredOptions!: Observable<string[]>;
  //tags: string[] = ['nodejs'];
  allTags: any[] = ['Angular', 'react', 'expressjs', 'javascript', 'html','css','bootstrap','restApi','mongodb'];

  
  @ViewChild('tagInput')
  tagInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto')
  matAutocomplete!: MatAutocomplete;

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
    
    // this.filteredOptions = this.questionTagArray.valueChanges.pipe(
    //   startWith(null),
    //   map((fruit: string | null) => fruit ? this._filter(fruit) : this.allTags.slice()));
  }
  ngOnInit(): void {
    this.questionObj=this.fb.group({
      questionTitle:['',[Validators.required]],
      questionBody:['',[Validators.required]],
      questionTag:[this.questionTagArray],
//      questionTag:[this.questionTagArray,[Validators.required]]
    })

    this.filteredOptions = this.questionObj.get('questionTag').valueChanges.pipe(
      startWith(''),
      map((value:any) => this._filter(value))
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
editorConfig: AngularEditorConfig = {
  editable: true,
    spellcheck: false,
    height: '200px',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
    {
      name: 'quote',
      class: 'quote',
    },
    {
      name: 'redText',
      class: 'redText'
    },
    {
      name: 'titleText',
      class: 'titleText',
      tag: 'h1',

    },
  ],
  uploadUrl: 'v1/image',
  uploadWithCredentials: false,
  sanitize: true,
  toolbarPosition: 'top',
  toolbarHiddenButtons: [
    ['bold', 'italic'],
    ['fontSize']
  ]
};

//addTags(){
  //this.questionObj.get('questionTag').push(new FormControl(null,Validators.required))
//}

add(event: MatChipInputEvent): void {
  //const value = (event.value || '').trim();

  // Add our fruit
  //if (value) {
    //this.tags.push(value);
  //}

  // Clear the input value
//  event.chipInput!.clear();

  //this.questionTag.setValue(null);
  const input=event.input;
  const value=event.value;
  if((value||'').trim()&&this.questionTagArray.length<5){
this.questionTagArray.push({name:value.trim()})
}
if(input){
  input.value='';
}
}

remove(tags: Tags): void {
  const index = this.questionTagArray.indexOf(tags);

  if (index >= 0) {
    this.questionTagArray.splice(index, 1);
  }
}

// selected(event: MatAutocompleteSelectedEvent): void {
//   this.questionTagArray.push(event.option.viewValue);
//   this.tagInput.nativeElement.value = '';
//   this.questionObj.get('questionTag').setValue(null);
// }

// private _filter(value: string): string[] {
//   const filterValue = value.toLowerCase();

//  return this.allTags.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
// }




onSubmit(){ 
  window.alert("Your question is submited")
  console.log(this.questionObj.value);
  this.questionservice.postQuestions(this.questionObj.value).subscribe(result=>{ 
    console.log(result)
  })
  this.router.navigate(['/home-page'])
}
}
