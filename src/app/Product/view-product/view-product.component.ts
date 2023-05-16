import { Component, OnInit,Inject, Renderer2, ElementRef } from '@angular/core';
import { WebApiService } from 'app/web-api.service';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  filter: any = {};
  p: number = 1;
  total: any;
  productList: any;
  imageUrl: any;
  categoryList: any;
  vendorList: any;
  formData:any = {};
  userType: any;
  loginId:any;

  constructor(private webservice: WebApiService,private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.imageUrl = this.webservice.imageUrl;
    this.userType = sessionStorage.getItem('type');
    this.loginId = sessionStorage.getItem('loginId');
    this.filter = {
      "size": 10,
      "pageNo": 1,
      "filter":{
         "name":"",
         "vendorId-objectId":'',
         "categoryId-objectId":'',
      }
    };
if(this.userType == "BUSINESS"){
    this.filter.filter['vendorId-objectId'] = this.loginId;
 }
    this.getAllProduct(this.filter);
    this.getAllBusinessUser();
    this.getCategory();
  }


  getAllProduct(filter: any) {
    this.webservice.getAllProduct(filter).subscribe((res: any) => {
      // console.log(res);
      this.productList = res.data;
      this.total = res.total;
    });
  }

  saveData(data:any){
    if(this.userType == "BUSINESS"){
      data.vendorId = this.loginId;
    }
  this.webservice.productExcel(data).subscribe((res: any) => {
    if(res.status == "ok"){
      alert('Product Added success');
      const button = this.elementRef.nativeElement.querySelector('#closeBtn');
      if (button) {
        button.click();
      }
      this.getAllProduct(this.filter);
     }
     else{
      alert("something went wrong")
     }
  });
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

  deleteProduct(id:any){
    let con = confirm("Are you sure want to delete Product");
    if(con){
      let val = {
        "_id":id,
        "isActive":false
      }
      this.webservice.addProduct(val).subscribe((res: any) => {
        console.log(res);
        if(res.status == "ok"){
          alert(res.msg);
          this.getAllProduct(this.filter);
        }
        else{
          alert("Something went Wrong");
        }
      });
    }
    else{
      this.getAllProduct(this.filter);
    }

  }
  onTableDataChange(event: any) {
    this.filter.pageNo = event;
    this.getAllProduct(this.filter);
    this.p = event;
  }

  getBulkFile(e:any){
    const formData = new FormData();
    formData.append('image',e.target.files[0]);
    formData.append('type','return');
    this.webservice.uploadImage(formData).subscribe((res: any) => {
       if(res.status == "ok"){
         alert('Uploaded file successfully');
         this.formData.file = res.imageName;
        }
        else{
         alert("something went wrong")
        }
     });
  }

  getCatId(e:any){
    if(e.target.value){
      this.filter.filter["categoryId-objectId"] = e.target.value; 
      this.webservice.getAllProduct(this.filter).subscribe((res: any) => {
       this.productList = res.data;
       this.total = res.total;
     }); 
    }
    else{
      this.filter.filter["categoryId-objectId"] = ""; 
     this.getAllProduct(this.filter);
    }
  }

  getVenId(e:any){
    if(e.target.value){
      this.filter.filter["vendorId-objectId"] = e.target.value; 
      this.webservice.getAllProduct(this.filter).subscribe((res: any) => {
       this.productList = res.data;
       this.total = res.total;
     }); 
    }
    else{
      this.filter.filter["vendorId-objectId"] = ""; 
     this.getAllProduct(this.filter);
    }
  }

  searchName(e:any){
    if(e.target.value){
      this.filter.filter.name = e.target.value; 
      this.webservice.getAllProduct(this.filter).subscribe((res: any) => {
       this.productList = res.data;
       this.total = res.total;
     }); 
    }
    else{
      this.filter.filter.name = ""; 
     this.getAllProduct(this.filter);
    }
  }

}
