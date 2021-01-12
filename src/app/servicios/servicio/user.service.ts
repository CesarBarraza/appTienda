import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../clases/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://localhost:44308/api'

  constructor(private http: HttpClient) { }

  login(user: User){
    return this.http.post(this.url+'/Login',user)
  } 

  isLogged(){
    localStorage.getItem('login')
  }
}
