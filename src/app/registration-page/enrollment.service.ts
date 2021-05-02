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
  constructor(private _http: HttpClient) { }

  enroll(user: Registration) {
    return this._http.post<any>(this._url,user);
        // .pipe(catchError(this.errorHandler))
  }

  login(user: Login){
    return this._http.post<any>(this._loginUrl,user)
  }

  checkUser(user: ForgotPassword){
    return this._http.post<any>(this._checkUser,user)
  }
  // errorHandler(error:HttpErrorResponse){
  //   return throwError(error);
  // }
}
