import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData:User;
  readonly rootURL="http://localhost:51828/api"
  constructor(private http :HttpClient) { }
  Postuser(formData :User){
    return this.http.post(this.rootURL+'/users',formData);

  }
}
