import { Component, OnInit } from '@angular/core';
import { LoanApprovalService } from 'src/app/service/manager/loan.approval.service';

@Component({
  selector: 'app-manager.loan.approval',
  templateUrl: './manager.loan.approval.component.html',
  styleUrls: ['./manager.loan.approval.component.scss']
})
export class ManagerLoanApprovalComponent implements OnInit{
  loans: any;
  constructor(private loanService: LoanApprovalService) { }

  ngOnInit(): void {
    this.loanService.getUnapprovedLoans().subscribe((data) => {
      this.loans = data.data;
      console.log(this.loans);
    }
    );
  }
  approve(){

  }
  reject(){
  }
}
