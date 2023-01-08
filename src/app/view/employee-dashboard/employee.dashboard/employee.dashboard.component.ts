import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee.dashboard',
  templateUrl: './employee.dashboard.component.html',
  styleUrls: ['./employee.dashboard.component.scss']
})
export class EmployeeDashboardComponent {
  constructor(private router: Router) {}
  exit() {
    // empty local storage and navigate to the welcome page
    localStorage.clear();
    this.router.navigate(['/welcome']);
  }
}
