import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/customer/user.service';

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
        console.log(user);
        const token = user.token;
        const type = user.type;
        localStorage.setItem('token', token);
        localStorage.setItem('email', this.email);
        switch
        (type) {
          case 'CUSTOMER':
            this.router.navigate(['/dashboard/home']);
            break;
          case 'EMPLOYEE':
            this.router.navigate(['/employee-dashboard/employee-home']);
            break;
          case 'MANAGER':
            this.router.navigate(['/manager-dashboard/manager-home']);
            break;
        }

      },
      (err) => {
        console.log(err);
      }
    );
  }

}
