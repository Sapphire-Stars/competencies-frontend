import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { EnrollmentService } from "./registration-page/enrollment.service";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private enroll:EnrollmentService,private router:Router){

 }
 canActivate():boolean{
   if(this.enroll.getToken()){
     return true
   }else{
     this.router.navigate(['/login'])
     return false
   }
 }
  
}
