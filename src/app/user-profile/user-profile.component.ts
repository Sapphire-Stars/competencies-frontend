import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EnrollmentService } from '../registration-page/enrollment.service';
import { Active } from './active';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  // @ViewChild('fileInput',{static:false}) fileInput: ElementRef | undefined
 
 
  
  data:any;
  question:any;
  totalRec:any;
  page:number=1;
  activeModel=new Active('','','','')
  constructor(private es:EnrollmentService,private http:HttpClient) { }

  ngOnInit(): void {
    // this.es.getProfile().subscribe(data=>{
    //   console.log(data)
    //   this.data=data
    // })
   
    this.es.getProfileDetails(this.activeModel).subscribe(data=>{
      console.log(data);
      this.data = data
    })
    this.es.getUserQuestion().subscribe(question=>{
      console.log(question)
      this.question= question
      this.totalRec = this.data.length;
    })
    
  }
  profileObj:any=new FormGroup({
    profilePicture:new FormControl('')
  })
  // onFileUpload(){
  //   const imageBlob=this.fileInput?.nativeElement.files[0]
  //   const file=new FormData()
  //   file.set('file',imageBlob)
  //   this.http.post('http://localhost:8900',file).subscribe(data=>{
  //     console.log(data)
  //   })

  // }

  
  // onFileSelect(event:Event) {
  //   const file = (event.target as HTMLInputElement).files[0];
    
  //   this.form.patchValue({ image: file });
  //   const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
  //   if (file && allowedMimeTypes.includes(file.type)) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.imageData = reader.result as string;
  //     };
  //     reader.readAsDataURL(file);
  //   }
    
  // }

  // onSubmit() {
  //   // this.profileService.addProfile(this.form.value.name, this.form.value.image);
  //   this.form.reset();
  //   this.imageData = null;
  // }
}

  


