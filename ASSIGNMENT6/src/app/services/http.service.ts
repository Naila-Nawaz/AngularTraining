import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/Login';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = 'https://reqres.in/';
  constructor(private http: HttpClient) {}

  doLogin(login: Login): any {
  
  }
}
