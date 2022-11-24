import { API_URL } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor( private http:HttpClient) { }
   
  signUp(userName: string, email: string, password: string, phoneNumber: string, fullName:string){
    console.log(userName, email, password, phoneNumber, fullName)
    return this.http.post( `${API_URL}/Users`, {userName, email, password, phoneNumber, fullName})
  }

  signIn(email: string, password: string){
    console.log(email, password)
    return this.http.post<ILoginResponse>( `${API_URL}/Account`, {email, password})
  }

  isAuthenticated(): boolean{
    const author=localStorage.getItem("token");
    if(author){
      return true;
    }
    return false;
  }
}
