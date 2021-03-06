import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
//import { Profile } from "../models/profile";
import Swal from 'sweetalert2';

import { Subscription } from 'rxjs';
//import { ProfileService } from '../profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
})
export class CreateProfileComponent implements OnInit {
  form: any;
  // profile:any ;
  imageData: any;
  data: any;
  email: any;
  selectedFile: any;
  image: any;
  profiles: any;
  thispic: any;
  img: any;
  profile: any;

  public currentProfile: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.form = new FormGroup({
      email: new FormControl(this.email),
      image: new FormControl(null),
    });

    this.showImage().subscribe((data) => {
      console.log(data);
      this.data = data;
      console.log(this.data);
      this.profile = this.data[this.data.length - 1].imagePath;
      console.log(this.profile);
    });
  }

  onFileSelect(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  onSubmit() {
    //  window.alert("You have Success")
    const fd = new FormData();
    fd.append('email', this.form.value.email);
    fd.append('image', this.selectedFile, this.selectedFile.name);
    console.log(fd);
    this.onUpload(fd).subscribe((data) => {
      console.log(data);
    });

    // Swal.fire('Your profile pic has been updated!')
    Swal.fire({
      icon: 'success',
      title: 'Profile Pic Updated',
      text: 'So far so good..',
    });
  }
  // getMyImage(){
  //     this.showImage().subscribe(data=>{
  //     console.log(data)
  //     this.data=data
  //     console.log(this.data)
  //     this.profile=this.data[this.data.length-1].imagePath
  //     console.log(this.profile)
  //   })
  // }

  onUpload(data: any) {
    return this.http.post('http://localhost:8900/api/postImage', data);
  }
  showImage() {
    return this.http.get(`http://localhost:8900/api/getImage/${this.email}`);
  }
}
