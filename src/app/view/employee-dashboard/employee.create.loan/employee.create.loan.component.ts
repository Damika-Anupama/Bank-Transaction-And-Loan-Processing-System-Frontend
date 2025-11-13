import { Component } from '@angular/core';
import { loanPackage } from 'src/app/model/LoanPackage';


@Component({
  selector: 'app-employee.create.loan',
  templateUrl: './employee.create.loan.component.html',
  styleUrls: ['./employee.create.loan.component.scss']
})
export class EmployeeCreateLoanComponent {
  customerID: string = '';
  loans: any;
  maximumLoanAmount: number = 0;
  loanAmount: number = 0;
  selectedLoan: number | undefined;
  packageArray: loanPackage[] = [
    { index: 1, period: '6 months', interest: '13%' },
    { index: 2, period: '1 year', interest: '14%' },
    { index: 3, period: '3 years', interest: '15%' },
  ];
  duration: any;
  interest: any;
  selectedLoanType: string = '';
  constructor() { }

  
  onLoanSelected() {
    for (const element of this.packageArray) {
      if (element.index === Number(this.selectedLoan)) {
        this.duration = element.period;
        this.interest = element.interest;
      }
    }
  }
  proceed(){

  }
}
