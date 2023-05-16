import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebApiService} from '../web-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData: any={};

  constructor(private webapiservice:WebApiService,
    private router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  doLogin(data:any){
    //  console.log(data);
     this.webapiservice.doLogin(data).subscribe((res:any)=>{
      // console.log(res);
      if(res?.user?.userType == 'USER'){
       alert("Invalid Login");
      }
      else{
        if(res.status == "ok"){
          sessionStorage.setItem('loginId',res.user._id);
          sessionStorage.setItem('name',res.user.name);
          sessionStorage.setItem('type',res.user.userType);
          this.router.navigate(['/dashboard']);
        }
        else{
          alert(res.msg);
        }
      }
     })
  
    }

}
