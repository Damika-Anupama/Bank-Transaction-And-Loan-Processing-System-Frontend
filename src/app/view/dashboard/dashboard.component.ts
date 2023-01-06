import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private router: Router) {}
  exit() {
    // empty local storage and navigate to the welcome page
    localStorage.clear();
    this.router.navigate(['/welcome']);
  }
}
