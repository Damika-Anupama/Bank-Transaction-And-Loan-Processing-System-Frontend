import { Component, OnInit } from '@angular/core';
import { fd } from 'src/app/model/FD';
import { LoanService } from 'src/app/service/customer/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss'],
})
export class LoanComponent implements OnInit {
  fds: any;
  loans: any;
  selectedFD!: fd;
  maximumLoanAmount: number;
  constructor(private loanService:LoanService) {}
  ngOnInit(): void {
    this.loanService.getFDs().subscribe((data) => {
      console.log(data.data);
      this.fds = data.data;
    }
    );
    this.loanService.getLoans().subscribe((data) => {
      console.log(data.data);
      this.loans = data.data;
    }
    );
    this.maximumLoanAmount = this.selectedFD.amount * 0.6;
  }
  convertDuration(duration: any) {
    return duration.replace(/_/g, ' ').toLowerCase();
  }
}
