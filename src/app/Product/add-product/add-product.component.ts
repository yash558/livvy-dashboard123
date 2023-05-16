import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { WebApiService } from 'app/web-api.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  formData:any = {};
  vendorList:any;
  categoryList:any;
  subcategoryList:any;
  attribution:any;
  proId: any;
  cmbImg:any=[];
  imgArr:any=[];
  imgUrl:any;
  userType: any;
  loginId:any;

  constructor(private route:Router,private _activeRoute: ActivatedRoute,private webservice: WebApiService) { }

  ngOnInit(): void {
    this.imgUrl = this.webservice.imageUrl;
    this.userType = sessionStorage.getItem('type');
    this.loginId = sessionStorage.getItem('loginId');

    this._activeRoute.params.subscribe(params => {
      this.proId = params['id'];
    })
    if(this.proId){
      this.getUserById(this.proId);
    }
    this.formData.combination = [];
    this.getCategory();
    this.getAllBusinessUser();
  }

  getUserById(id:any) {
    this.webservice.getProductById(id).subscribe((res: any) => {
    // this.attribution = res.data.combination[0].value;
    this.formData = res.data;
    })
  }

  getCategory() {
    this.webservice.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    });
  }
  getAllBusinessUser() {
    this.webservice.getAllBusinessUser().subscribe((res: any) => {
      this.vendorList = res.data
    });
  }

  getCategoryById(e:any){
    let dat = []
    if(this.proId){
      dat = this.categoryList.filter(c => c._id == e)
    }
    else{
      dat = this.categoryList.filter(c => c._id == e.target.value)
    }
      this.attribution = dat[0].attribute;
      let attr = {
        value:dat[0].attribute
      }
      this.formData.combination.push(attr)
  }
  saveData(data:any){
    // console.log(data); 
    if(this.userType == "BUSINESS"){
      data.vendorId = this.loginId;
    }
    data.isActive =true; 
   this.webservice.addProduct(data).subscribe((res: any) => {
    console.log(res);
    if(res.status == "ok"){
      alert(res.msg);
      this.route.navigate(['/view-product'])
    }
    else{
      alert("Something went Wrong");
    }
  });
  }
  getProductImage(e:any){
    const formData = new FormData();
    formData.append('image',e.target.files[0]);
    formData.append('type','return');
    this.webservice.uploadImage(formData).subscribe((res: any) => {
       if(res.status == "ok"){
         alert('Uploaded file successfully');
         this.formData.default = res.imageName;
        }
        else{
         alert("something went wrong")
        }
     });
  }

  addCombination(){   
    let arr = []
    arr = Array.from({length: this.attribution.length}, () => 0);
    this.formData.combination.push({
      value:arr,
      images:[]
    });
  }

  removeCombination(index:any){
    this.formData.combination.splice(index,1);
  }
  onInputChange(e:any,i:any,j:any){
   if(e.target.value != ''){
     this.formData.combination[i].value[j] = e.target.value ?? "";
   }
  }

  uploadImages(e:any,i:any,j:any){
    const formData = new FormData();
    formData.append('image',e.target.files[0]);
    formData.append('type','return');
    this.webservice.uploadImage(formData).subscribe((res: any) => {
       if(res.status == "ok"){
         alert('Uploaded file successfully');
         this.imgArr.push(res.imageName);
         e.target.value = '';
         this.formData.combination[i].images.push(res.imageName);
        }
        else{
         alert("something went wrong")
        }
     });
  }

}
