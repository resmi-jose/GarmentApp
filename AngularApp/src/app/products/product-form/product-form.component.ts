import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  imageUrl: string = "/assets/images/default_label.png";

  label1 :string="/assets/images/default_label.png";
  label2 :string="/assets/images/default_label.png";
  logoUrl1 :string="/assets/images/default_label.png";
  logoUrl2 :string="/assets/images/default_label.png";
  logoUrl3 :string="/assets/images/default_label.png";
  logoUrl4 :string="/assets/images/default_label.png";

  //Aju Imgae uploading variable
  fileToUploadGarment:File=null;
 // fileToUploadlogoImg3:File=null;
  //fileToUploadlogoImg4 : File = null;

  constructor(private service :ProductService,
    private toastr :ToastrService,
    private router:Router) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?:NgForm)
  {
    if(form!=null)
    form.resetForm();
    this.service.formData={
    productID:null,
    fabricInfo:'',
    productName:'',
    garmentDes:'',
    fontName:'',
    garmentImg:'',
    fontNumber:'',
    garmentSpecf:'',
    chestXs : null,
    chestS :null,
    chestM :null,
    chestL:null,
    chestXl:null,
    chest2xl:null,
    chest3xl:null,
    chest4xl:null,
    chest5xl:null,
    lengthXs:null,
    lengthS:null,
    lengthM:null,
    lengthL:null,
    lengthXl:null,
    length2xl:null,
    length3xl:null,
    length4xl:null,
    length5xl:null,
    specialInstruction:'',
    signature:'',
    orderedDate:'',
    requiredDate:'',
    favcolor1:'',
    favcolorText1:'',
    favcolor2:'',
    favcolorText2:'',
    favcolor3:'',
    favcolorText3:'',
    favcolor4:'',
    favcolorText4:'',
    favcolor5:'',
    favcolorText5:'',
    favcolor6:'',
    favcolorText6:'',
    piecesXs:null,
    piecesS:null,
    piecesM:null,
    piecesL:null,
    piecesXl:null,
    pieces2xl:null,
    pieces3xl:null,
    pieces4xl:null,
    pieces5xl:null,
    pieces6xl:null,
    pieces7xl:null,
    piecesTotal:null,
    labelText1:null,
    labelImg1:'',
    labelImg2:'',
    labelText2:null,
    logoText1:null,
    logoImg1:'',
    logoText2:null,
    logoImg2:'',
    logoText3:null,
    logoImg3:'',
    logoText4:null,
    logoImg4:''
    }

    //Aju Image Upload clearing the variable
   // fileToUploadGarment:null;
   // fileToUploadlogoImg3:null;
   // fileToUploadlogoImg4:null;

    this.urls3logoImg4 = [];
   // this.urls3Garment=[];
     //this.service.img_url="/assets/images/default.jpg";
    // this.service.Garmentimg_url="";
    //this.service.img_url

  }
  
  // Aju
  myFilesDocumentlogoImg4: string[] = [];
  urls3logoImg4 = new Array<string>();

    //ToUpload Garment File 
    

    getFileDetailsDocumentGarment(event:any) {
      if (event.target.files && event.target.files[0]) {
        //this.fileToUploadGarment=event.target.files[0];
          var reader = new FileReader();
    
          reader.onload = (event:any) => {
            this.service.urls3Garment = event.target.result;
          }
    
          reader.readAsDataURL(event.target.files[0]);
      }
    }
    
        handleFileInputGarment(file: FileList) {
          
          this.fileToUploadGarment = file.item(0);
      }
      //ToUpload label1
      fileToUploadlabel1:File=null;
    getFilelabelImg1(event:any) {
      if (event.target.files && event.target.files[0]) {
       
          var reader = new FileReader();
    
          reader.onload = (event:any) => {
            this.service.urlslogolabel1 = event.target.result;
          }
    
          reader.readAsDataURL(event.target.files[0]);
      }
    }
    
    handleFileInputlabelImg1(file: FileList) {
          
          this.fileToUploadlabel1 = file.item(0);
      }
            //ToUpload label2
            fileToUploadlabel2:File=null;
            getFilelabelImg2(event:any) {
              if (event.target.files && event.target.files[0]) {
               
                  var reader = new FileReader();
            
                  reader.onload = (event:any) => {
                    this.service.urlslogolabel2 = event.target.result;
                  }
            
                  reader.readAsDataURL(event.target.files[0]);
              }
            }
            
            handleFileInputlabelImg2(file: FileList) {
                  
                  this.fileToUploadlabel2 = file.item(0);
              }
              //ToUpload logoImg1
            fileToUploadlogoImg1:File=null;
            getFilelogoImg1(event:any) {
              if (event.target.files && event.target.files[0]) {
               
                  var reader = new FileReader();
            
                  reader.onload = (event:any) => {
                    this.service.urlslogoImg1 = event.target.result;
                  }
            
                  reader.readAsDataURL(event.target.files[0]);
              }
            }
            
            handleFileInputlogoImg1(file: FileList) {
                  
                  this.fileToUploadlogoImg1 = file.item(0);
              }
              //ToUpload logoImg2
            fileToUploadlogoImg2:File=null;
            getFilelogoImg2(event:any) {
              if (event.target.files && event.target.files[0]) {
               
                  var reader = new FileReader();
            
                  reader.onload = (event:any) => {
                    this.service.urlslogoImg2 = event.target.result;
                  }
            
                  reader.readAsDataURL(event.target.files[0]);
              }
            }
            
            handleFileInputlogoImg2(file: FileList) {
                  
                  this.fileToUploadlogoImg2 = file.item(0);
              }
              //ToUpload logoImg3
            fileToUploadlogoImg3:File=null;
            getFilelogoImg3(event:any) {
              if (event.target.files && event.target.files[0]) {
               
                  var reader = new FileReader();
            
                  reader.onload = (event:any) => {
                    this.service.urlslogoImg3 = event.target.result;
                  }
            
                  reader.readAsDataURL(event.target.files[0]);
              }
            }
            
            handleFileInputlogoImg3(file: FileList) {
                  
                  this.fileToUploadlogoImg3 = file.item(0);
              }
              //ToUpload logoImg4
            fileToUploadlogoImg4:File=null;
            getFilelogoImg4(event:any) {
              if (event.target.files && event.target.files[0]) {
               
                  var reader = new FileReader();
            
                  reader.onload = (event:any) => {
                    this.service.urlslogoImg4 = event.target.result;
                  }
            
                  reader.readAsDataURL(event.target.files[0]);
              }
            }
            
            handleFileInputlogoImg4(file: FileList) {
                  
                  this.fileToUploadlogoImg4 = file.item(0);
              }
  
  onSubmit(form :NgForm){
    // console.log(form);
    // console.log(this.fileToUploadlogoImg4);
    if(form.value.productID==null)
      this.insertRecord(form);
    else
      this.updateRecord(form);

    this.service.refreshList();
    this.service.formHideshow=0;
  }


  insertRecord(form :NgForm){
    this.service.Postproduct(
      form.value,
      this.fileToUploadGarment,
      this.fileToUploadlabel1,
      this.fileToUploadlabel2,
      this.fileToUploadlogoImg1,
      this.fileToUploadlogoImg2,
      this.fileToUploadlogoImg3,
      this.fileToUploadlogoImg4
      ).subscribe(res =>{
      this.resetForm(form);
      this.toastr.success('Inserted successfully');
      this.service.refreshList();   
    });
  }
  

  updateRecord(form :NgForm){
     //console.log(form.value);
      this.service.Putproduct(
        form.value,
        this.fileToUploadGarment,
        this.fileToUploadlabel1,
        this.fileToUploadlabel2,
        this.fileToUploadlogoImg1,
        this.fileToUploadlogoImg2,
        this.fileToUploadlogoImg3,
        this.fileToUploadlogoImg4
        ).subscribe(res =>{
      this.resetForm(form);
      this.toastr.info('updated successfully');
      this.service.refreshList();   
    });
  }
  BackProductList(){
    this.service.refreshList();
    this.service.formHideshow=0;
  }
}
