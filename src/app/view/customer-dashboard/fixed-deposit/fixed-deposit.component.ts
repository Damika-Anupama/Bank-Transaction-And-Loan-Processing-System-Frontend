import { Component, OnInit } from '@angular/core';
import { fd } from 'src/app/model/FD';
import { fdPackage } from 'src/app/model/FDpackage';
import { FDSelectedSavingAccount } from 'src/app/model/FDSelectedSavingAccount';
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
  selectedSavingAccount: FDSelectedSavingAccount | undefined;
  selectedPackage: number | undefined;
  packageArray: fdPackage[] = [
    { index: 1, period: '6 months', interest: '13%' },
    { index: 2, period: '1 year', interest: '14%' },
    { index: 3, period: '3 years', interest: '15%' },
  ];
  savingAccountId: any;
  duration: any;
  rpa: any;
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
  onAccountSelected() {
    this.savingAccountId = this.selectedSavingAccount?.saving_account_id;
  }
  onPackageSelected() {
    for (const element of this.packageArray) {
        if (element.index === Number(this.selectedPackage)) {
            this.duration = element.period;
            this.rpa = element.interest;
        }
    }
}



  convertDuration(duration: any) {
    return duration.replace(/_/g, ' ').toLowerCase();
  }
  checkForm() {
    if (this.selectedSavingAccount && this.selectedPackage && this.fdAmount) {
      if (this.fdAmount.match(/^[0-9]+$/)) {

        switch (this.duration) {
          case '6 months':
            this.duration = "6_MONTH";
            break;
          case '1 year':
            this.duration = "1_YEAR";
            break;
          case '3 years':
            this.duration = "3_YEARS";
            break;
        }
        switch (this.rpa) {
          case '13%':
            this.rpa = "13";
            break;
          case '14%':
            this.rpa = "14";
            break;
          case '15%':
            this.rpa = "15";
            break;
        }
        console.log(
          this.savingAccountId,this.duration,this.rpa,
          this.fdAmount
        );
        this.fdService.createFD(this.savingAccountId,this.duration,this.rpa,Number(this.fdAmount)).subscribe((data) => {
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
