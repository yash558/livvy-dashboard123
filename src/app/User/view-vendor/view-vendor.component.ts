import { Component, OnInit } from '@angular/core';
import { WebApiService } from 'app/web-api.service';

@Component({
  selector: 'app-view-vendor',
  templateUrl: './view-vendor.component.html',
  styleUrls: ['./view-vendor.component.css']
})
export class ViewVendorComponent implements OnInit {

  filter:any={};
  p: number = 1;
  total: any;
  userList: any;
  imageUrl: any;
  constructor(private webservice: WebApiService) { }

  ngOnInit(): void {
    this.imageUrl = this.webservice.imageUrl;
    this.filter = {
      filter:{
        "isActive":true,
        "userType-Id":"BUSINESS",
        "name":"",
        "email":"",
      },
      "size":10,
      "pageNo":1
    };
    this.getAllUser(this.filter);
  }

  getAllUser(filter:any) {
    this.webservice.getAllUserByType(filter).subscribe((res: any) => {
      // console.log(res);
      this.userList = res.data;
      this.total = res.total;
    });
  }

  deleteUser(id:any){
    let con = confirm("Are you sure want to Delete");
    if(con){
      let val = {
        "_id":id,
        "isActive":false
      }
      this.webservice.createUser(val).subscribe((res: any) => {
        // console.log(res);
        if(res.status == "ok"){
          alert(res.msg);
          this.getAllUser(this.filter);
        }
        else{
          alert(res.msg);
        }
      });
    }
    else{
      this.getAllUser(this.filter);
    }
  }

  setStatus(e:any,userId:any){
    let con = confirm("Are you sure want to Change Status");
    if(con){
      let val = {
        "_id":userId,
        "isActive":e.target.value
      }
      this.webservice.createUser(val).subscribe((res: any) => {
        // console.log(res);
        if(res.status == "ok"){
          alert(res.msg);
          this.getAllUser(this.filter);
        }
        else{
          alert(res.msg);
        }
      });
    }
    else{
      this.getAllUser(this.filter);
    }

  }
  setUserType(e:any,userId:any){
    let con = confirm("Are you sure want to Change UserType");
    if(con){
      let val = {
        "_id":userId,
        "userType":e.target.value
      }
      this.webservice.createUser(val).subscribe((res: any) => {
        // console.log(res);
        if(res.status == "ok"){
          alert(res.msg);
          this.getAllUser(this.filter);
        }
        else{
          alert(res.msg);
        }
      });
    }
    else{
      this.getAllUser(this.filter);
    }

  }

  searchUsername(e:any){
    if(e.target.value){
     this.filter.filter.name = e.target.value; 
     this.webservice.getAllUserByType(this.filter).subscribe((res: any) => {
      this.userList = res.data;
      this.total = res.total;
    }); 
   }
   else{
    this.filter.filter.name = ""; 
    this.getAllUser(this.filter);
   }
   
  }
  searchEmail(e:any){
    if(e.target.value){
      this.filter.filter.email = e.target.value; 
      this.webservice.getAllUserByType(this.filter).subscribe((res: any) => {
       this.userList = res.data;
       this.total = res.total;
     }); 
    }
    else{
      this.filter.filter.email = ""; 
     this.getAllUser(this.filter);
    }
  }

  onTableDataChange(event: any) {
    this.filter.pageNo = event;
    this.getAllUser(this.filter);
    this.p = event;
  }

}
