// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class EnrollmentService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Registration } from './registration';
import { Login } from '../login-page/login'
import { ForgotPassword } from '../forgot-password/forgot-password';
import { ResetPassword } from '../reset-password/reset-password';
import { Answer } from '../answer';
// import { Registration } from './Registration';
// import {catchError} from 'rxjs/operators';
// import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:8900/api/registrations';
  _loginUrl = 'http://localhost:8900/api/login';
  _checkUser = 'http://localhost:8900/api/check'
 _updateUrl:any
  constructor(private _http: HttpClient) { }

  enroll(user: Registration) {
    return this._http.post<any>(this._url,user);
        
  }

  login(user: Login){
    return this._http.post<any>(this._loginUrl,user)
  }

  checkUser(user: ForgotPassword){
    return this._http.post<any>(this._checkUser,user)
  }
  


  getToken(){ 
    return localStorage.getItem('token');
  }
  update(user:ResetPassword,email:any,token:any){
   this. _updateUrl=`http://localhost:8900/api/reset-password/${email}/${token}`
   return this._http.post<any>(this._updateUrl,user)
  }
  getLink(user:ForgotPassword){
    let url='http://localhost:8900/api/forget-password'
    return this._http.post<any>(url,user)
  }

  postAnswer(answer:Answer){
    let url='http://localhost:8900/api/answer'
    return this._http.post(url,answer)
  }
}

