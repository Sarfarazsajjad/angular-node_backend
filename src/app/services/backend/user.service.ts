import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(){
    return this.httpClient.get<User>(`${environment.apiBaseRoute}/get-user`)
  }
  postUser(data: User){
    return this.httpClient.post<User>(`${environment.apiBaseRoute}/post-user`,data)
  }

  getUsers(){
    return this.httpClient.get<User>(`${environment.apiBaseRoute}/get-users`)
  }
}
