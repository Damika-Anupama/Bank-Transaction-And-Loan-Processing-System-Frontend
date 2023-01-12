import { Component, OnInit } from '@angular/core';
import { fd } from 'src/app/model/FD';
import { loanPackage } from 'src/app/model/LoanPackage';
import { LoanService } from 'src/app/service/customer/loan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss'],
})
export class LoanComponent implements OnInit {
  fds: any;
  loans: any;
  selectedFD!: fd;
  selectedFDId: number = 0;
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

  constructor(private loanService: LoanService) {}

  ngOnInit(): void {
    this.loanService.getFDs().subscribe((data) => {
      console.log(data.data);
      this.fds = data.data;
    });
    this.loanService.getLoans().subscribe((data) => {
      console.log(data.data);
      this.loans = data.data;
    });
  }
  convertDuration(duration: any) {
    return duration.replace(/_/g, ' ').toLowerCase();
  }
  onFDSelected() {
    console.log(this.selectedFD.amount);
    if (Number(this.selectedFD.amount) * 0.6 < 500000) {
      this.maximumLoanAmount = Number(this.selectedFD.amount) * 0.6;
      this.selectedFDId = this.selectedFD.fd_id;
    } else {
      this.maximumLoanAmount = 500000;
    }
  }
  onLoanSelected() {
    for (const element of this.packageArray) {
      if (element.index === Number(this.selectedLoan)) {
        this.duration = element.period;
        this.interest = element.interest;
      }
    }
    console.log(this.duration, this.interest);
  }
  checkLoanAmount() {
    if (this.loanAmount > this.maximumLoanAmount) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Loan amount should be less than or equal to maximum loan amount',
      });
    }
  }
  proceed(){
    if(this.selectedLoanType === 'Personal'){
      this.selectedLoanType = 'PERSONAL';
    }
    else if(this.selectedLoanType === 'Business'){
      this.selectedLoanType = 'BUSINESS';
    }

    switch (this.interest) {
      case '13%':
        this.interest = Number(13.00);
        break;
      case '14%':
        this.interest = Number(14.00);
        break;
      case '15%':
        this.interest = Number(15.00);
        break;
    }
    
    switch (this.duration) {
      case '6 months':
        this.duration = 30 * 6;
        break;
      case '1 year':
        this.duration = 30 * 12;
        break;
      case '3 years':
        this.duration = 30 * 36;
        break;
    }


    console.log(this.selectedFD.fd_id,this.loanAmount, localStorage.getItem("userId"), this.duration,this.interest, this.selectedLoanType);
    if(this.selectedFD && this.selectedLoan && this.loanAmount && this.selectedLoanType){
      this.loanService.applyLoan(this.selectedFD.fd_id,this.loanAmount, localStorage.getItem("userId"), this.duration,this.interest, this.selectedLoanType).subscribe(data=>{
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Loan applied successfully',
        });
      })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please select all the fields',
      });
    }
  }
}
