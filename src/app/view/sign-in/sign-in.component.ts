import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  email = '';
  password = '';
  constructor(private router: Router, private userService: UserService) {}
  authenticate(): void {
    this.userService.authenticate(this.email, this.password).subscribe(
      (user) => {
        localStorage.setItem('token', user);
        localStorage.setItem('email', this.email);
        this.router.navigate(['/dashboard/home']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
