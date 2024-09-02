import { Component } from '@angular/core';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-user-auth',
  standalone: true,
  imports: [],
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.scss'
})
export class UserAuthComponent {
  userlog:boolean = false;
constructor(private userauthService:UserAuthService){
  this.userlog=this.userauthService.getUserLogged;
}

loginFunc(){
  this.userauthService.login("user@gmail.com","1111");
  this.userlog=this.userauthService.getUserLogged;
}
logoutFunc(){
  this.userauthService.logout();
  this.userlog=this.userauthService.getUserLogged;
}

}
