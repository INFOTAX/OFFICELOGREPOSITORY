import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';


import { LoginService, ILogin } from './login.service';
import { Observable } from 'rxjs';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    login : ILogin;
    constructor(private auth : LoginService) {} 

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const token = localStorage.getItem("token");
      
        request = request.clone({
          headers : request.headers.set("Authorization","Bearer " + token)
          });
        
          return next.handle(request);
        // const token = localStorage.getItem("token");
        
        // if(token){
        //     const cloned = request.clone({
        //         headers : request.headers.set("Authorization","Bearer " + token)
        //     });
           
        //     return next.handle(cloned).do((event : HttpEvent<any>) => {
        //         if (event instanceof HttpResponse) {
                    
        //         }});
            
        // }else{
            
        //     return next.handle(request);
            
        // }
    }
}

