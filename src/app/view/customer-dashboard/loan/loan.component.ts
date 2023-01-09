import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/service/customer/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss'],
})
export class LoanComponent implements OnInit {
  fds: any;
  loans: any;
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
  }
}
