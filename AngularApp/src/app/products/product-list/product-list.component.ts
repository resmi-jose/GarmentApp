import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/app/shared/product.model';
import { ToastrService } from 'ngx-toastr';
import {Router  } from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private service :ProductService,
    private toastr :ToastrService,
    private router:Router
   ) { }

  ngOnInit() {
    this.service.refreshList();
    this.service.formHideshow=0;

  }

  populateForm(pdt :Product){
    //this.router.navigate(['product-form'],{relativeTo:this.route});
    this.service.formData= Object.assign({},pdt);
}

onDelete(id:number){
  if(confirm('Are you sure to delete this record ?')){
  this.service.Deleteproduct(id).subscribe(res =>{
    this.service.refreshList();
    this.toastr.warning('deleted successfully');
   
  });
}
}

openForEdit(pdt:Product){
  this.service.img_url=this.service.ImageRootUrl+ "Image/Products/" //common path for all product image
  console.log(this.service.img_url);
  console.log(pdt);
  this.service.formData=Object.assign({},pdt);
  if(pdt.garmentImg != null)
  {
    this.service.urls3Garment= this.service.img_url+pdt.garmentImg
    this.service.garmentImg= pdt.garmentImg
  }
  else
  this.service.urls3Garment="/assets/images/default_label.png";
  
  if(pdt.labelImg1 != null)
  {
    this.service.urlslogolabel1= this.service.img_url+pdt.labelImg1
  this.service.labelImg1= pdt.labelImg1
  }
  else
  this.service.urlslogolabel1="/assets/images/default_label.png";
  
  if(pdt.labelImg2 != null)
  {
    this.service.urlslogolabel2= this.service.img_url+pdt.labelImg2
  this.service.labelImg2= pdt.labelImg2
  }
  else
  this.service.urlslogolabel2="/assets/images/default_label.png";
  
  if(pdt.logoImg1 != null)
  {
    this.service.urlslogoImg1= this.service.img_url+pdt.logoImg1
  this.service.logoImg1= pdt.logoImg1
  }
  else
  this.service.urlslogoImg1="/assets/images/default_label.png";
  
  if(pdt.logoImg1 != null)
  {
    this.service.urlslogoImg2= this.service.img_url+pdt.logoImg2
    this.service.logoImg2= pdt.logoImg2
  }
  else
  this.service.urlslogoImg2="/assets/images/default_label.png";
  if(pdt.logoImg1 != null)
  {
    this.service.urlslogoImg3= this.service.img_url+pdt.logoImg3
  this.service.logoImg3= pdt.logoImg3
  }
  else
  this.service.urlslogoImg3="/assets/images/default_label.png";
  if(pdt.logoImg1 != null)
  {
    this.service.urlslogoImg4= this.service.img_url+pdt.logoImg4
    this.service.logoImg4= pdt.logoImg4
  }
  else
  this.service.urlslogoImg4="/assets/images/default_label.png";

  
  
 
  this.service.formHideshow=1;
  console.log(this.service.formData);
}
Logout() {
  //alert("12")
  localStorage.removeItem('SUPToken');
 
  this.router.navigate(['/Login']);
}

addnew(){
  this.service.refreshList();
  this.service.formHideshow=1;
  this.service.urls3Garment="/assets/images/default_label.png";
  this.service.urlslogolabel1="/assets/images/default_label.png";
  this.service.urlslogolabel2="/assets/images/default_label.png";
  this.service.urlslogoImg1="/assets/images/default_label.png";
  this.service.urlslogoImg2="/assets/images/default_label.png";
  this.service.urlslogoImg3="/assets/images/default_label.png";
  this.service.urlslogoImg4="/assets/images/default_label.png";
}

}
