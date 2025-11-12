import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager.dashboard',
  templateUrl: './manager.dashboard.component.html',
  styleUrls: ['./manager.dashboard.component.scss']
})
export class ManagerDashboardComponent {
  isSidebarOpen = false;

  constructor(private router: Router) {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  exit() {
    // empty local storage and navigate to the welcome page
    localStorage.clear();
    this.router.navigate(['/welcome']);
  }
}
