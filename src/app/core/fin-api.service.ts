import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FinApiService {

  private readonly apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  get<T>(url: string){
    return this._http.get<T>(`${this.apiUrl}/${url}`)
  }

  post<T>(url: string, body: any){
    return this._http.post(`${this.apiUrl}/${url}`,body)
  }

}
