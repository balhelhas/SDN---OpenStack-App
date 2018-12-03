import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

import { AppService } from '../app.service';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent {
    username: string;
    password: string;
    loginFailed: boolean;

    constructor(private appService: AppService, 
                private router: Router) {}

    login(){
        this.appService.login(this.username,this.password).subscribe(r => {
          if(r){
            this.loginFailed = false;
            this.router.navigateByUrl('/networks');
          }else{
            this.loginFailed = true;
          }
        });
    }

}
