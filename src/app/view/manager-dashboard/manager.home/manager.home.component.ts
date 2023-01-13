import { Component, OnInit } from '@angular/core';
import { ManagerHomeService } from 'src/app/service/manager/manager.home.service';
@Component({
  selector: 'app-manager.home',
  templateUrl: './manager.home.component.html',
  styleUrls: ['./manager.home.component.scss'],
})
export class ManagerHomeComponent implements OnInit {
  branch_id: any;
  branch_name = '';
  manager_id: any;
  num_accounts: any;
  num_employees: any;
  transactions: any;
  withdrwals: any;
  loans: any;
  constructor(private managerService: ManagerHomeService) {}

  ngOnInit() {
    this.managerService.getDashboardBlockDetails().subscribe((user) => {
      user = user['data'];
      localStorage.setItem('userId', user[0]['user_id']);
      localStorage.setItem('branchId', user[0]['branch_id']);
      this.branch_id = user[0]['branch_id'];
      this.branch_name = user[0]['branch_name'];
      this.manager_id = user[0]['manager_id'];
      this.num_accounts = user[0]['num_accounts'];
      this.num_employees = user[0]['num_employees'];
      this.managerService.getTotalTransactions(this.branch_id).subscribe((transactions) => {
        this.transactions = transactions.result;
      });
      this.managerService.getTotalWithdrawals(this.branch_id).subscribe((withdrawals) => {
        this.withdrwals = withdrawals;
      });
      this.managerService.getLateLoans(this.branch_id).subscribe((loans) => {
        this.loans = loans;
        console.log(this.loans);
      });
    });



  }

}
