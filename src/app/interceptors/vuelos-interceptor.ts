
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ApiService } from '../servicios/api/api.service';


@Injectable()
export class VueloInterceptor implements HttpInterceptor{
  constructor(private apiService: ApiService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe()


  }
  herrorHandler(error: HttpErrorResponse): Observable<never>{
    if(error instanceof HttpErrorResponse){
      if(error.error instanceof ErrorEvent){
        console.log('Error de vuelo');

      }else{
        console.log('error de servidor');
        console.log(error.status);
        console.log(error.message);
      }
    }
  }

}
