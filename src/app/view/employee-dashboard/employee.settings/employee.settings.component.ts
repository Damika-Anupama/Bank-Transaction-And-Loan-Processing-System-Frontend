import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee.settings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employee.settings.component.html',
  styleUrls: ['./employee.settings.component.scss']
})
export class EmployeeSettingsComponent {

}
