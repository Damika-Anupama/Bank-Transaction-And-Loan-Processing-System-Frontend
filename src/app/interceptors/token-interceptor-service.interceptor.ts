import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');
    let tokenizedReq = null;
    // if token is not null then tokenize the request as a bearer token
    if (token) {
      tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    } else {
      tokenizedReq = req.clone();
    }
    
    console.log(tokenizedReq);
    return next.handle(tokenizedReq);
  }
}