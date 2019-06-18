import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import{NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private service:UserService,
    private toastr :ToastrService,) { }
  formData:User;
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form ?:NgForm)
  {
    if(form!=null)
    form.resetForm();
    this.service.formData={
      UserId:null,
      UserName:'',
      Password:'',
      Email:'',
      FirstName:'',
      LastName:''
    }
    
  }
  onSubmit(form:NgForm){
    if(form.value.EmployeeID==null)
    this.insertRecord(form);
   

  }
  insertRecord(form:NgForm){
    this.service.Postuser(form.value).subscribe(response =>{
      this.toastr.success('Registered successfully');
      this.resetForm(form);
      //this.service.refreshList();
  
      });
        

  }
}
