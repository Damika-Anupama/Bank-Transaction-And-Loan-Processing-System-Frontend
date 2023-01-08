import { Component, OnInit } from '@angular/core';
import { FixedDepositService } from 'src/app/service/fixed-deposit.service';

@Component({
  selector: 'app-fixed-deposit',
  templateUrl: './fixed-deposit.component.html',
  styleUrls: ['./fixed-deposit.component.scss']
})
export class FixedDepositComponent implements OnInit {
  savingAccounts: any;

  constructor(private fdService: FixedDepositService) { }

  ngOnInit(): void {
    
    this.fdService.getSavingAccountsDetails().subscribe((res) => {
      this.savingAccounts = res.result;
      console.log(res.result);
    })
  }

}

