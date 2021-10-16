import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { AuthInterceptorService } from './auth-interceptor.service';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinApiService {

  readonly apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient,
              private _authInterceptor: AuthInterceptorService) { }

  get<T>(url: string){
    return this._http.get<T>(`${this.apiUrl}/${url}`)
  }

  post<T>(url: string, body: any){
    return this._http.post<T>(`${this.apiUrl}/${url}`,body)
  }

  put<T>(url: string, body: any){
    return this._http.put<T>(`${this.apiUrl}/${url}`,body)
  }

  delete<T>(url:string){
    return this._http.delete<T>(`${this.apiUrl}/${url}`);
  }

  login(usuario: string, senha: string){
    return this.post<{hash: string}>('login',{usuario,senha}).pipe(
      tap((res: any) => { this._authInterceptor.setHash(res.hash) }),
      mapTo(true)
    )
  }

}
