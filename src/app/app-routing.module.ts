import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ResolveFn, RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { DashboardGuard } from './guard/dashboard.guard';
import { FixedDepositComponent } from './view/customer-dashboard/fixed-deposit/fixed-deposit.component';
import { HomeComponent } from './view/customer-dashboard/home/home.component';
import { LoanComponent } from './view/customer-dashboard/loan/loan.component';
import { NotFoundComponent } from './view/not-found/not-found.component';
import { ServerErrorComponent } from './view/server-error/server-error.component';
import { SignInComponent } from './view/sign-in/sign-in.component';
import { SignUpComponent } from './view/sign-up/sign-up.component';
import { TransactionComponent } from './view/customer-dashboard/transaction/transaction.component';
import { WelcomeComponent } from './view/welcome/welcome.component';
import { EmployeeHomeComponent } from './view/employee-dashboard/employee.home/employee.home.component';
import { EmployeeRegisterCustomerComponent } from './view/employee-dashboard/employee.register.customer/employee.register.customer.component';
import { EmployeeCreateLoanComponent } from './view/employee-dashboard/employee.create.loan/employee.create.loan.component';
import { EmployeeWithdrawalComponent } from './view/employee-dashboard/employee.withdrawal/employee.withdrawal.component';
import { ManagerHomeComponent } from './view/manager-dashboard/manager.home/manager.home.component';
import { ManagerAddEmployeeComponent } from './view/manager-dashboard/manager.add.employee/manager.add.employee.component';
import { ManagerLoanApprovalComponent } from './view/manager-dashboard/manager.loan.approval/manager.loan.approval.component';
import { SettingsComponent } from './view/customer-dashboard/settings/settings.component';
import { EmployeeSettingsComponent } from './view/employee-dashboard/employee.settings/employee.settings.component';
import { ManagerSettingsComponent } from './view/manager-dashboard/manager.settings/manager.settings.component';
import { UnifiedDashboardComponent } from './shared/components/unified-dashboard/unified-dashboard.component';
import { DashboardConfig } from './shared/models/navigation-config.model';

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('Home');

// Dashboard configurations
const customerDashboardConfig: DashboardConfig = {
  dashboardType: 'customer',
  logoRoute: '/dashboard',
  navigationItems: [
    { label: 'Home', route: './home', icon: 'fa-home', title: 'Home' },
    { label: 'Transaction', route: './transaction', icon: 'fa-exchange-alt', title: 'Transaction' },
    { label: 'Fixed Deposit', route: './fixed-deposit', icon: 'fa-piggy-bank', title: 'Fixed Deposit' },
    { label: 'Loan', route: './loan', icon: 'fa-hand-holding-usd', title: 'Loan' }
  ]
};

const employeeDashboardConfig: DashboardConfig = {
  dashboardType: 'employee',
  logoRoute: '/employee-dashboard',
  navigationItems: [
    { label: 'Home', route: './employee-home', icon: 'fa-home', title: 'Home' },
    { label: 'Manual Loan', route: './employee-create-loan', icon: 'fa-hand-holding-usd', title: 'Manual Loan' },
    { label: 'Register Customer', route: './employee-register-customer', icon: 'fa-user-plus', title: 'Register Customer' },
    { label: 'Withdrawal', route: './employee-withdraw', icon: 'fa-money-bill-wave', title: 'Withdrawal' }
  ]
};

const managerDashboardConfig: DashboardConfig = {
  dashboardType: 'manager',
  logoRoute: '/manager-dashboard',
  navigationItems: [
    { label: 'Home', route: './manager-home', icon: 'fa-home', title: 'Home' },
    { label: 'Add Employee', route: './manager-add-employee', icon: 'fa-user-plus', title: 'Add Employee' },
    { label: 'Loan Approvals', route: './manager-loan-approval', icon: 'fa-handshake', title: 'Loan Approvals' }
  ]
};

const routes: Routes = [
  {
    component: WelcomeComponent,
    path: "welcome"
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo: '/welcome'
  },
  {
    component:SignInComponent,
    path:'sign-in'
  },
  {
    component:SignUpComponent,
    path:'sign-up'
  },
  {
    component:NotFoundComponent,
    path:'not-found'
  },
  {
    component:ServerErrorComponent,
    path:'server-error'
  },
  {
    path:'dashboard',
    title: "Dashboard",
    component: UnifiedDashboardComponent,
    children: [
      {
        path:'',
        pathMatch:'prefix',
        redirectTo: 'home'
      },
      {
        path: 'home',
        title:resolvedChildATitle,
        component: HomeComponent,
      },
      {
        path: 'fixed-deposit',
        title:"Fixed Deposit",
        component: FixedDepositComponent,
      },
      {
        path: 'loan',
        title: "Loan",
        component: LoanComponent,
      },
      {
        path: 'transaction',
        title: "Transaction",
        component: TransactionComponent,
      },
      {
        path: 'settings',
        title: "Settings",
        component: SettingsComponent,
      }
    ],
    data: { preload: true, config: customerDashboardConfig },
    canActivate: [DashboardGuard]
  },
  {
    path:'employee-dashboard',
    title: "Employee Dashboard",
    component: UnifiedDashboardComponent,
    children: [
      {
        path:'',
        pathMatch:'prefix',
        redirectTo: 'employee-home'
      },
      {
        path: 'employee-home',
        title:resolvedChildATitle,
        component: EmployeeHomeComponent,
      },
      {
        path: 'employee-create-loan',
        title:"Manual Loan Creation",
        component: EmployeeCreateLoanComponent,
      },
      {
        path: 'employee-register-customer',
        title: "Register Customer",
        component: EmployeeRegisterCustomerComponent,
      },
      {
        path: 'employee-withdraw',
        title: "Withdraw",
        component: EmployeeWithdrawalComponent,
      },
      {
        path: 'employee-settings',
        title: "Settings",
        component: EmployeeSettingsComponent,
      }
    ],
    data: { preload: true, config: employeeDashboardConfig },
    canActivate: [DashboardGuard]
  },
   {
    path:'manager-dashboard',
    title: "Manager Dashboard",
    component: UnifiedDashboardComponent,
    children: [
      {
        path:'',
        pathMatch:'prefix',
        redirectTo: 'manager-home'
      },
      {
        path: 'manager-home',
        title:resolvedChildATitle,
        component: ManagerHomeComponent,
      },
      {
        path: 'manager-add-employee',
        title:"Add Employee",
        component: ManagerAddEmployeeComponent,
      },
      {
        path: 'manager-loan-approval',
        title: "Loan Approval",
        component: ManagerLoanApprovalComponent,
      },
      {
        path: 'manager-settings',
        title: "Settings",
        component: ManagerSettingsComponent,
      }
    ],
    data: { preload: true, config: managerDashboardConfig },
    canActivate: [DashboardGuard]
  },
  {
    component:NotFoundComponent,
    path:'**'
  }
];

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Banking System | ${title}`);
    }
  }
}


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
})
export class AppRoutingModule { }
