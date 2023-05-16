import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { WebApiService } from 'app/web-api.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
  userId:any;
  imageUrl: any;
  userInfo: any;

  constructor(private route:Router,private _activeRoute: ActivatedRoute,private webservice:WebApiService) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(params => {
      this.userId = params['id'];
    })
    this.getUserById(this.userId);
    this.imageUrl = this.webservice.imageUrl;

  }

  getUserById(id:any) {
    this.webservice.getUserById(id).subscribe((res: any) => {
    // console.log(res);
    this.userInfo = res.user
    })
  }

}
