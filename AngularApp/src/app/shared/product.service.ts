import { Injectable } from '@angular/core';
import { Product } from './product.model';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 formData :Product;
 list:Product[];
 selectedProductList:Product;
 formHideshow=0;
 img_url: string="";
 urls3Garment:string;
 garmentImg:string;
 urlslogolabel1:string;
 labelImg1:string;
 urlslogolabel2:string;
 labelImg2:string;
 urlslogoImg1:string;
 logoImg1:string;
 urlslogoImg2:string;
 logoImg2:string;
 urlslogoImg3:string;
 logoImg3:string;
 urlslogoImg4:string;
 logoImg4:string;


 ImageRootUrl:string="http://localhost:51828/";

 readonly rootURL="http://localhost:51828/api"
 

  constructor(private http:HttpClient) { }

  Postproduct(formData :Product,fileuploadGarment:File,fileToUploadlabel1:File,fileToUploadlabel2:File,fileToUploadlogoImg1:File,fileToUploadlogoImg2:File,fileToUploadlogoImg3:File,fileToUploadlogoImg4:File){
    console.log(formData);
    let headers = new HttpHeaders().set('contentType', 'false');
    var body={
      productID:formData.productID,
      fabricInfo:formData.fabricInfo,
      productName:formData.productName,
      garmentDes:formData.garmentDes,
      fontName:formData.fontName,
      fontNumber:formData.fontNumber,
      garmentImg:formData.garmentImg,
      garmentSpecf:formData.garmentSpecf,
      chestXs:formData.chestXs,
      chestS:formData.chestS,
      chestM:formData.chestM,
      chestL:formData.chestL,
      chestXl:formData.chestXl,
      chest2xl:formData.chest2xl,
      chest3xl:formData.chest3xl,
      chest4xl:formData.chest4xl,
      chest5xl:formData.chest5xl,
      lengthXs:formData.lengthXs,
      lengthS:formData.lengthS,
      lengthM:formData.lengthM,
      lengthL:formData.lengthL,
      lengthXl:formData.lengthXl,
      length2xl:formData.length2xl,
      length3xl:formData.length3xl,
      length4xl:formData.length4xl,
      length5xl:formData.length5xl,
      specialInstruction:formData.specialInstruction,
      signature:formData.signature,
      orderedDate:formData.orderedDate,
      requiredDate:formData.requiredDate,
      favcolor1:formData.favcolor1,
      favcolorText1:formData.favcolorText1,
      favcolor2:formData.favcolor2,
      favcolorText2:formData.favcolorText2,
      favcolor3:formData.favcolor3,
      favcolorText3:formData.favcolorText3,
      favcolor4:formData.favcolor4,
      favcolorText4:formData.favcolorText4,
      favcolor5:formData.favcolor5,
      favcolorText5:formData.favcolorText5,
      favcolor6:formData.favcolor6,
      favcolorText6:formData.favcolorText6,
      piecesXs:formData.piecesXs,
      piecesS:formData.piecesS,
      piecesM:formData.piecesM,
      piecesL:formData.piecesL,
      piecesXl:formData.piecesXl,
      pieces2xl:formData.pieces2xl,
      pieces3xl:formData.pieces3xl,
      pieces4xl:formData.pieces4xl,
      pieces5xl:formData.pieces5xl,
      pieces6xl:formData.pieces6xl,
      pieces7xl:formData.pieces7xl,
      piecesTotal:formData.piecesTotal,
      labelText1:formData.labelText1,
      labelImg1:formData.labelImg1,
      labelImg2:formData.labelImg2,
      labelText2:formData.labelText2,
      logoText1:formData.logoText1,
      logoImg1:formData.logoImg1,
      logoText2:formData.logoText2,
      logoImg2:formData.logoImg2,
      logoText3:formData.logoText3,
      logoImg3:formData.logoImg3,
      logoText4:formData.logoText4,
      logoImg4:formData.logoImg4
    }

    let  frmDataIMG =new FormData();
    frmDataIMG.append('logolabel1',fileToUploadlabel1);
    frmDataIMG.append('Garment',fileuploadGarment);
    frmDataIMG.append('logolabel2',fileToUploadlabel2);
    frmDataIMG.append('logoImg1',fileToUploadlogoImg1);
    frmDataIMG.append('logoImg2',fileToUploadlogoImg2);
    frmDataIMG.append('logoImg3',fileToUploadlogoImg3);
    frmDataIMG.append('logoImg4',fileToUploadlogoImg4);
    frmDataIMG.append('obj', JSON.stringify(body));

    console.log(frmDataIMG);
    return this.http.post(this.rootURL+'/products',frmDataIMG,{
      headers
    });
  }

  Putproduct(formData :Product,fileuploadGarment:File,fileToUploadlabel1:File,fileToUploadlabel2:File,fileToUploadlogoImg1:File,fileToUploadlogoImg2:File,fileToUploadlogoImg3:File,fileToUploadlogoImg4:File){
    let headers = new HttpHeaders().set('contentType', 'false');
    var body={
      productID:formData.productID,
      fabricInfo:formData.fabricInfo,
      productName:formData.productName,
      garmentDes:formData.garmentDes,
      fontName:formData.fontName,
      fontNumber:formData.fontNumber,
      garmentImg:this.garmentImg,
      garmentSpecf:formData.garmentSpecf,
      chestXs:formData.chestXs,
      chestS:formData.chestS,
      chestM:formData.chestM,
      chestL:formData.chestL,
      chestXl:formData.chestXl,
      chest2xl:formData.chest2xl,
      chest3xl:formData.chest3xl,
      chest4xl:formData.chest4xl,
      chest5xl:formData.chest5xl,
      lengthXs:formData.lengthXs,
      lengthS:formData.lengthS,
      lengthM:formData.lengthM,
      lengthL:formData.lengthL,
      lengthXl:formData.lengthXl,
      length2xl:formData.length2xl,
      length3xl:formData.length3xl,
      length4xl:formData.length4xl,
      length5xl:formData.length5xl,
      specialInstruction:formData.specialInstruction,
      signature:formData.signature,
      orderedDate:formData.orderedDate,
      requiredDate:formData.requiredDate,
      favcolor1:formData.favcolor1,
      favcolorText1:formData.favcolorText1,
      favcolor2:formData.favcolor2,
      favcolorText2:formData.favcolorText2,
      favcolor3:formData.favcolor3,
      favcolorText3:formData.favcolorText3,
      favcolor4:formData.favcolor4,
      favcolorText4:formData.favcolorText4,
      favcolor5:formData.favcolor5,
      favcolorText5:formData.favcolorText5,
      favcolor6:formData.favcolor6,
      favcolorText6:formData.favcolorText6,
      piecesXs:formData.piecesXs,
      piecesS:formData.piecesS,
      piecesM:formData.piecesM,
      piecesL:formData.piecesL,
      piecesXl:formData.piecesXl,
      pieces2xl:formData.pieces2xl,
      pieces3xl:formData.pieces3xl,
      pieces4xl:formData.pieces4xl,
      pieces5xl:formData.pieces5xl,
      pieces6xl:formData.pieces6xl,
      pieces7xl:formData.pieces7xl,
      piecesTotal:formData.piecesTotal,
      labelText1:formData.labelText1,
      labelImg1:this.labelImg1,
      labelImg2:this.labelImg2,
      labelText2:formData.labelText2,
      logoText1:formData.logoText1,
      logoImg1:this.logoImg1,
      logoText2:formData.logoText2,
      logoImg2:this.logoImg2,
      logoText3:formData.logoText3,
      logoImg3:this.logoImg3,
      logoText4:formData.logoText4,
      logoImg4:this.logoImg4
    }

    let  frmDataIMG =new FormData();
    frmDataIMG.append('logolabel1',fileToUploadlabel1);
    frmDataIMG.append('Garment',fileuploadGarment);
    frmDataIMG.append('logolabel2',fileToUploadlabel2);
    frmDataIMG.append('logoImg1',fileToUploadlogoImg1);
    frmDataIMG.append('logoImg2',fileToUploadlogoImg2);
    frmDataIMG.append('logoImg3',fileToUploadlogoImg3);
    frmDataIMG.append('logoImg4',fileToUploadlogoImg4);
    frmDataIMG.append('obj', JSON.stringify(body));
      console.log(frmDataIMG);
    return this.http.put(this.rootURL+'/products/'+ formData.productID,frmDataIMG,{
      headers
    }); 
   }

   refreshList(){
    this.http.get(this.rootURL+'/products')
    .toPromise().then(res=>this.list=res as Product[]);
  }

   Deleteproduct(id:number){
     return this.http.delete(this.rootURL+'/products/'+ id);
  }
}
