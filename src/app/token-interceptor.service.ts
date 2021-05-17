import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { EnrollmentService } from "./registration-page/enrollment.service";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  /*constructor(private enroll:EnrollmentService){}
  intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    request=request.clone({
      setHeaders:{
        Authorization: `Bearer ${ this.enroll.getToken()}`
      }
    })
    return next.handle(request);
  }
  */

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('interceptor')
    let authservice = this.injector.get(EnrollmentService)
    
    console.log(`${authservice.getToken()}`)

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authservice.getToken()}`
        //Authorization: `Bearer xxx.yyy.zzz`
      }
    })
    return next.handle(request)
  }


  /*
  intercept(req:HttpRequest<any>,next:HttpHandler) { 
  
    let tokenizedReq=req.clone( { 
      //headers: req.headers.append('authorization','token')
      setHeaders:{ 
        
      Authorization: `Bearer xx.yy.zz`
      }
    })
    return next.handle(tokenizedReq)
  }
*/
}
