import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
    {path:'', redirectTo:'/Login',pathMatch:'full' },
    {path:'',
  children:[
    {path:'products',component:ProductsComponent }
    //{path:'list',component:ProductListComponent}
    ] },
    {path:'Register',component:RegisterComponent},
    {path:'Login',component:LoginComponent}
];
@NgModule({
    imports: [
      RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
  export const routingComponents=[ProductsComponent,
    ProductFormComponent,
    ProductListComponent, 
    RegisterComponent,
    LoginComponent]; 