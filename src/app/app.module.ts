import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProvider } from './interceptors/interceptor-barrel';
import { DashboardComponent } from './view/customer-dashboard/dashboard/dashboard.component';
import { FixedDepositComponent } from './view/customer-dashboard/fixed-deposit/fixed-deposit.component';
import { HomeComponent } from './view/customer-dashboard/home/home.component';
import { LoanComponent } from './view/customer-dashboard/loan/loan.component';
import { NotFoundComponent } from './view/not-found/not-found.component';
import { ServerErrorComponent } from './view/server-error/server-error.component';
import { SignInComponent } from './view/sign-in/sign-in.component';
import { SignUpComponent } from './view/sign-up/sign-up.component';
import { TransactionComponent } from './view/customer-dashboard/transaction/transaction.component';
import { WelcomeComponent } from './view/welcome/welcome.component';
import { FilterPipe } from './pipes/filter.pipe';
import { EmployeeDashboardComponent } from './view/employee-dashboard/employee.dashboard/employee.dashboard.component';
import { ManagerDashboardComponent } from './view/manager-dashboard/manager.dashboard/manager.dashboard.component';
import { ManagerLoanApprovalComponent } from './view/manager-dashboard/manager.loan.approval/manager.loan.approval.component';
import { ManagerAddEmployeeComponent } from './view/manager-dashboard/manager.add.employee/manager.add.employee.component';
import { ManagerHomeComponent } from './view/manager-dashboard/manager.home/manager.home.component';
import { EmployeeHomeComponent } from './view/employee-dashboard/employee.home/employee.home.component';
import { EmployeeCreateLoanComponent } from './view/employee-dashboard/employee.create.loan/employee.create.loan.component';
import { EmployeeRegisterCustomerComponent } from './view/employee-dashboard/employee.register.customer/employee.register.customer.component';
import { EmployeeWithdrawalComponent } from './view/employee-dashboard/employee.withdrawal/employee.withdrawal.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignInComponent,
    SignUpComponent,
    NotFoundComponent,
    ServerErrorComponent,
    DashboardComponent,
    FixedDepositComponent,
    HomeComponent,
    LoanComponent,
    TransactionComponent,
    FilterPipe,
    EmployeeDashboardComponent,
    ManagerDashboardComponent,
    ManagerLoanApprovalComponent,
    ManagerAddEmployeeComponent,
    ManagerHomeComponent,
    EmployeeHomeComponent,
    EmployeeCreateLoanComponent,
    EmployeeRegisterCustomerComponent,
    EmployeeWithdrawalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgChartsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
