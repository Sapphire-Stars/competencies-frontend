import { Injectable,Injector } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest  } from "@angular/common/http";
import { EnrollmentService } from "./registration-page/enrollment.service";
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req:any,next:any) { 
    let authservice=this.injector.get(EnrollmentService)
    let tokenizedReq=req.clone( { 
      setHeaders: { 
        
      Authorization: `Bearer ${ authservice.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  
  
  // intercept(req:HttpRequest<any>,next:HttpHandler) { 
  
  //   let tokenizedReq=req.clone( { 
  //     headers: req.headers.append('Authorization','token')
  //     //{ 
        
  //    // Authorization: `Bearer xx.yy.zz`
  //     //}
  //   })
  //   return next.handle(tokenizedReq)
  // }
  }

}
