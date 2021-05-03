import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor  } from "@angular/common/http";
import { EnrollmentService } from "../app/registration-page/enrollment.service";
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
  }
}
