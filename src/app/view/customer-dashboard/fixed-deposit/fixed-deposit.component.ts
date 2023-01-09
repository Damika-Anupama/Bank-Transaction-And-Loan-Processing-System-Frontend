import { Component, OnInit } from '@angular/core';
import { FixedDepositService } from 'src/app/service/customer/fixed-deposit.service';
import { LoanService } from 'src/app/service/customer/loan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fixed-deposit',
  templateUrl: './fixed-deposit.component.html',
  styleUrls: ['./fixed-deposit.component.scss'],
})
export class FixedDepositComponent implements OnInit {
  fds = null;
  savingAccounts = null;
  selectedSavingAccount: { account_id: number; account_type: string; amount: string; } | undefined;
  selectedPackage: { index: number; period: string; interest: string; } | undefined;
  packageArray = [
    [1, '6 months', '13%'],
    [2, '1 year', '14%'],
    [3, '3 years', '15%'],
  ];
  fdAmount: any;

  constructor(
    private fdService: FixedDepositService,
    private loanService: LoanService
  ) {}

  ngOnInit(): void {
    this.fdService.getSavingAccountsDetails().subscribe((res) => {
      this.savingAccounts = res.result;
      console.log(res.result);
    });
    this.loanService.getFDs().subscribe((data) => {
      this.fds = data.data;
      console.log(this.fds);
    });
  }

  convertDuration(duration: any) {
    return duration.replace(/_/g, ' ').toLowerCase();
  }
  checkForm() {
    if (this.selectedSavingAccount && this.selectedPackage && this.fdAmount) {
      if (this.fdAmount.match(/^[0-9]+$/)) {
        let duration: string;
        let interest: string;

        duration = this.selectedPackage.period;
        interest = this.selectedPackage.interest;
        switch (duration) {
          case '6 months':
            duration = "6_MONTH";
            break;
          case '1 year':
            duration = "1_YEAR";
            break;
          case '3 years':
            duration = "3_YEARS";
            break;
        }
        switch (interest) {
          case '13%':
            interest = "13";
            break;
          case '14%':
            interest = "14";
            break;
          case '15%':
            interest = "15";
            break;
        }
        console.log(this.selectedSavingAccount.account_id, duration, interest);
        this.fdService.createFD(this.selectedSavingAccount.account_id, duration, interest, this.fdAmount).subscribe((data) => {
          console.log(data);
          Swal.fire({
            title: 'Success',
            text: 'data.message',
            icon: 'success',
          });
        });
      }else{
        Swal.fire({
          title: 'Error',
          text: 'Please enter valid amount.',
          icon: 'error',
        });
      }
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Please select appropriate saving account, package and mention FD amount.',
        icon: 'error',
      });
    }
  }
}
