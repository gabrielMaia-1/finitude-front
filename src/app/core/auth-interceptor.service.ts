import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  hash = '';
  
  constructor() {
  }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const validacao = this.hash || localStorage.getItem('hash');
    if(!validacao) return next.handle(req).pipe(catchError(this.errorHandler));
    const newreq = req.clone({setHeaders: {Auth: validacao}})

    return next.handle(newreq).pipe(catchError(this.errorHandler));
  }

  errorHandler(err: HttpErrorResponse){
    console.log(err)
    return throwError('Something wrong happen');
  }

  isAuthenticated(){
    return this.hash || localStorage.getItem('hash')
  }
  setHash(hash: string){
    this.hash = hash;
    localStorage.setItem('hash', hash)
  }
}
