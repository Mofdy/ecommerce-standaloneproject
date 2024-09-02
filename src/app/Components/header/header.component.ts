import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  user:boolean = true;
constructor(private userAuthService: UserAuthService){
  // this.user=this.userAuthService.getUserLogged;
}
  ngOnInit(): void {

    this.userAuthService.getUserLogObserable().subscribe({
      next:(u)=>{
        this.user=u;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
