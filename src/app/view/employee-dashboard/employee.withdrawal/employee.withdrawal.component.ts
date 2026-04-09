import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee.withdrawal',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './employee.withdrawal.component.html',
  styleUrls: ['./employee.withdrawal.component.scss']
})
export class EmployeeWithdrawalComponent {

}
