import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  account_id = '';
  balance = '';
  account_type = '';
  saving_type = '';
  branch = '';
  accounts = null;
  selectedAccount = null;
  transactions = null;
  cumulativeBalance = null;

  transfer_amount = '';
  sender_remarks = '';
  beneficiary_remarks = '';
  to_account = '';

  constructor(private router:Router, private transactionService: TransactionService, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.transactionService.getAccountDetails().subscribe(
      (data) => {
        this.accounts = data.data;
        this.account_id = data.data[0].account_id;
        this.cumulativeBalance = this.balance = data.data[0].amount;
        this.account_type = data.data[0].account_type;
        this.saving_type = data.data[0].saving_type;
        this.branch = data.data[0].branch_name;
        this.selectedAccount = data.data[0];
        this.loadDataToTable(this.account_id);
      }
    );
    
  }
  updateSmallBox(account: any) {
    // Update the balance value
    this.balance = account.amount;
    // Update the account number value
    this.account_id = account.account_id;
  }
  showToast(data: any) {
    console.log(data);
    if (data.message == 'Transfer created successfully!') {
      Swal.fire({
        title: 'Success',
        text: data.message,
        icon: 'success'
      });
    }
    else {
      Swal.fire({
        title: 'Error',
        text: data.message,
        icon: 'error'
      });
    }

  }
  proceedTransaction() {
    this.transactionService.proceedTransaction(this.account_id, this.to_account, this.transfer_amount, this.sender_remarks, this.beneficiary_remarks).subscribe(
      (data) => {
        this.balance = String(Number(this.balance) -  Number(this.transfer_amount));
        this.transfer_amount =  '';
        this.sender_remarks = '';
        this.beneficiary_remarks = '';
        this.to_account = '';
        this.showToast(data);
      }
    );
  }
  loadDataToTable(accountId: any) {
    this.transactionService.getTransactions(accountId).subscribe(
      (data) => {
        console.log(data.data);
        this.transactions = data.data;
      }
    );
  }
}
