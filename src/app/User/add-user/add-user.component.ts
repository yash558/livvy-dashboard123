import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { WebApiService } from 'app/web-api.service';
import * as e from 'express';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userId:any;
  imageUrl: any;
  userInfo: any;
  formData:any={};
  profile: any;

  constructor(private route:Router,private _activeRoute: ActivatedRoute,private webservice:WebApiService) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(params => {
      this.userId = params['id'];
    })
    if(this.userId){
      this.getUserById(this.userId);
    }
    this.imageUrl = this.webservice.imageUrl;
  }

  getUserById(id:any) {
    this.webservice.getUserById(id).subscribe((res: any) => {
    console.log(res);
    this.formData = res.user;
    this.profile = res.user.image;
    })
  }
  saveData(data:any){
    if(this.userId){
      data._id = this.userId;
    }
    else{
      data.isActive = true;
    }
        this.webservice.createUser(data).subscribe((res: any) => {
          // console.log(res);
         if(res.status == "ok"){
       alert(res.msg);
       this.route.navigate(["/view-user"]);
         }
         else{
          alert(res.msg);
         }
          })
  }

  getImage(e:any){
    // console.log(e.target.files[0]);
    if(e.target.files[0].type != "image/png" || e.target.files[0].type != "image/jpg" || e.target.files[0].type != "image/jpeg" ){
      alert('Please Upload image');
    }
    else{
      const formData = new FormData();
      formData.append('image',e.target.files[0]);
      formData.append('type','return');
      this.webservice.uploadImage(formData).subscribe((res: any) => {
         if(res.status == "ok"){
          this.formData.image = res.imageName
         }
         else{
          alert("something went wrong")
         }
       });
    }

  }

}
