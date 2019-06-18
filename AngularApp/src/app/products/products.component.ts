import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute  } from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  

  constructor(private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }
  showProductForm(){
    this.router.navigate(['product-form'],{relativeTo:this.route});
  }
  showProductList(){
    this.router.navigate(['product-list'],{relativeTo:this.route});
  }
  
}
