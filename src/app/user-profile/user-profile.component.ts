import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../registration-page/enrollment.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  data:any;
  constructor(private es:EnrollmentService) { }

  ngOnInit(): void {
    this.es.getProfile().subscribe(data=>{
      console.log(data)
      this.data=data
    })
  }

}
