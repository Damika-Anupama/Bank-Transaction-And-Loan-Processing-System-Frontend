import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { FixedDepositComponent } from './fixed-deposit/fixed-deposit.component';
import { TransactionComponent } from './transaction/transaction.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoanComponent,
    FixedDepositComponent,
    TransactionComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
