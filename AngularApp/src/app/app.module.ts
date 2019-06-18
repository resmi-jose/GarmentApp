import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { ProductService } from './shared/product.service';
import { UserService } from './shared/user.service';
import { LoginService } from './shared/login.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
   
   
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), Ng2SearchPipeModule
  ],
  providers: [ProductService,UserService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
