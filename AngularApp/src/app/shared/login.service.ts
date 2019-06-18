import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly rootURL="http://localhost:51828/api"
  formData:User;
  constructor(private http :HttpClient) { }
   userAuthentication(UserName : any, Password : any) {
    console.log(UserName);
	console.log(Password);
      //alert("service login");
    const params = new HttpParams().set('UserName', UserName).set('Password', Password )
    const headers = new HttpHeaders().set('content-type', 'application/json');
     return this.http.get<any>(this.rootURL+'/users/Getusers',{headers,params});
     //return this.http.get<UserLogin>(ROOT_URL + 'api/UserLogin/CheckUserLoginDetails', {
     // headers, params
    //});
    

   
    }
}
