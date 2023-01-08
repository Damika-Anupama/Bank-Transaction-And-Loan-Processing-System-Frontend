import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ResolveFn, RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { DashboardGuard } from './guard/dashboard.guard';
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
import { EmployeeDashboardComponent } from './view/employee-dashboard/employee.dashboard/employee.dashboard.component';
import { EmployeeHomeComponent } from './view/employee-dashboard/employee.home/employee.home.component';
import { EmployeeRegisterCustomerComponent } from './view/employee-dashboard/employee.register.customer/employee.register.customer.component';
import { EmployeeCreateLoanComponent } from './view/employee-dashboard/employee.create.loan/employee.create.loan.component';
import { EmployeeWithdrawalComponent } from './view/employee-dashboard/employee.withdrawal/employee.withdrawal.component';
import { ManagerDashboardComponent } from './view/manager-dashboard/manager.dashboard/manager.dashboard.component';
import { ManagerHomeComponent } from './view/manager-dashboard/manager.home/manager.home.component';
import { ManagerAddEmployeeComponent } from './view/manager-dashboard/manager.add.employee/manager.add.employee.component';
import { ManagerLoanApprovalComponent } from './view/manager-dashboard/manager.loan.approval/manager.loan.approval.component';
import { SettingsComponent } from './view/customer-dashboard/settings/settings.component';
import { EmployeeSettingsComponent } from './view/employee-dashboard/employee.settings/employee.settings.component';
import { ManagerSettingsComponent } from './view/manager-dashboard/manager.settings/manager.settings.component';

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('Home');

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
    component:DashboardComponent,
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
    data: { preload: true },
    canActivate: [DashboardGuard]
  },
  {
    path:'employee-dashboard',
    title: "Employee Dashboard",
    component:EmployeeDashboardComponent,
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
    data: { preload: true },
    canActivate: [DashboardGuard]
  },
   {
    path:'manager-dashboard',
    title: "Manager Dashboard",
    component:ManagerDashboardComponent,
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
    data: { preload: true },
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
      this.title.setTitle(`DBS Project | ${title}`);
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
