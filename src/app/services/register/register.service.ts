import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = "http://localhost:8080/api/auth/signup";

  constructor(private http:HttpClient) { }

  register(data){
    return this.http.post(this.url,data,{responseType: 'text'})
  } 
}
