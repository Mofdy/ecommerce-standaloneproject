import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../Services/user.service';
import { Iuser } from '../../../Models/iuser';

@Component({
  selector: 'app-user-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './user-template-form.component.html',
  styleUrl: './user-template-form.component.scss'
})
export class UserTemplateFormComponent {

  constructor(private userService: UserService, private router: Router) {}
  user: Iuser = {} as Iuser;

  
  // u: Iuser =
  //   {
  //   username:"ahmed",
  //   lastname:"ali",
  //   email:"ali@gmail.com"
  // };
  adduser(){

    this.userService.addUser(this.user).subscribe({
      next: (u) => {
        console.log(u);
        this.router.navigate(['/Products']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
