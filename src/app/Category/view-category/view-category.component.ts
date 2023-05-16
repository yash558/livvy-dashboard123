import { Component, OnInit } from '@angular/core';
import { WebApiService } from 'app/web-api.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  filter:any={};
  p: number = 1;
  total: any;
  imageUrl: any;
  catList: any;

  constructor(private webservice: WebApiService) { }

  ngOnInit(): void {
    this.imageUrl = this.webservice.imageUrl;
    this.filter = {
      "size":10,
      "pageNo":1
    };
    this.getAllCategory(this.filter);
  }

  
  getAllCategory(filter:any) {
    this.webservice.getAllCategory(filter).subscribe((res: any) => {
      // console.log(res);
      this.catList = res.data;
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
      this.webservice.createCategory(val).subscribe((res: any) => {
        // console.log(res);
        if(res.status == "ok"){
          alert(res.msg);
          this.getAllCategory(this.filter);
        }
        else{
          alert(res.msg);
        }
      });
    }
    else{
      this.getAllCategory(this.filter);
    }
  }
  onTableDataChange(event: any) {
    this.filter.pageNo = event;
    this.getAllCategory(this.filter);
    this.p = event;
  }

}
