import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager.dashboard',
  templateUrl: './manager.dashboard.component.html',
  styleUrls: ['./manager.dashboard.component.scss']
})
export class ManagerDashboardComponent {
  constructor(private router: Router) {}
  exit() {
    // empty local storage and navigate to the welcome page
    localStorage.clear();
    this.router.navigate(['/welcome']);
  }
}
