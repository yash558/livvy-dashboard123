import { Component, OnInit } from '@angular/core';
import { WebApiService } from 'app/web-api.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  filter:any={};
  p: number = 1;
  total: any;
  orderList: any;
  imageUrl: any;
  userType: any;
  loginId:any;
  constructor(private webservice: WebApiService) { }

  ngOnInit(): void {
    this.userType = sessionStorage.getItem('type');
    this.loginId = sessionStorage.getItem('loginId');
    this.filter = {
      "size": 10,
      "pageNo": 1,
      "filter":{
        "vendorId":"",
         "name":"",
         "orderId":''
      }
    };
    if(this.userType == "BUSINESS"){
      this.filter.filter['vendorId-objectId'] = this.loginId;
   }
    this.getAllOrder(this.filter);
  }

  getAllOrder(filter:any) {
    this.webservice.getAllOrder(filter).subscribe((res: any) => {
      // console.log(res);
      this.orderList = res.data;
      this.total = res.total;
    });
  }

  onTableDataChange(event: any) {
    this.filter.pageNo = event;
    this.getAllOrder(this.filter);
    this.p = event;
  }

  setStatus(e:any,userId:any){
    let con = confirm("Are you sure want to Change Status");
    if(con){
      let val = {
        "_id":userId,
        "orderStatus":e.target.value
      }
      this.webservice.updateOrder(val).subscribe((res: any) => {
        // console.log(res);
        if(res.status == "ok"){
          alert(res.msg);
        this.getAllOrder(this.filter);
        }
        else{
          alert(res.msg);
        }
      });
    }
    else{
      this.getAllOrder(this.filter);
    }

  }

  searchName(e:any){
    if(e.target.value){
      this.filter.filter.name = e.target.value; 
      this.webservice.getAllOrder(this.filter).subscribe((res: any) => {
       this.orderList = res.data;
       this.total = res.total;
     }); 
    }
    else{
      this.filter.filter.name = ""; 
     this.getAllOrder(this.filter);
    }
  }
  searchOrderId(e:any){
    if(e.target.value){
      this.filter.filter.orderId = e.target.value; 
      this.webservice.getAllOrder(this.filter).subscribe((res: any) => {
       this.orderList = res.data;
       this.total = res.total;
     }); 
    }
    else{
      this.filter.filter.orderId = ""; 
     this.getAllOrder(this.filter);
    }
  }

}
