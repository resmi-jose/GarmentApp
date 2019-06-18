import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:LoginService,
    private toastr :ToastrService,
    private router:Router) { }
    
    model={
      UserName:'',
      Password:''
    }

  ngOnInit() {
  }

  onSubmit(UserNametext,PasswordText){

    //to check user name and password
	console.log(UserNametext);
	//console.log(PasswordText);
  this.service.userAuthentication(UserNametext,PasswordText).subscribe((data : any)=>{
  // localStorage.setItem('username',data.UserName);//not mandatory,it'a a method used to get username in all forms in a application.

   //alert(data);
  //your route url
  if(data==1)
  {
    localStorage.setItem('SUPToken','prod');
    this.router.navigate(['/products']);
    
    this.toastr.success('Login Successfully');
  }
  if(data==0)
  {
    
    this.toastr.error('Login invalid');
  }
    
  },
  (err : HttpErrorResponse)=>{
   this.toastr.error('Invalid Username or Password');
    //this.isLoginError = true;
  });

}

}
