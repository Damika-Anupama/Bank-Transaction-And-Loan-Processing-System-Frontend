import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Routing
import { ManagerRoutingModule } from './manager-routing.module';

// Shared Module
import { SharedModule } from '../../shared/shared.module';

// Components
import { ManagerHomeComponent } from '../../view/manager-dashboard/manager.home/manager.home.component';
import { ManagerAddEmployeeComponent } from '../../view/manager-dashboard/manager.add.employee/manager.add.employee.component';
import { ManagerLoanApprovalComponent } from '../../view/manager-dashboard/manager.loan.approval/manager.loan.approval.component';
import { ManagerSettingsComponent } from '../../view/manager-dashboard/manager.settings/manager.settings.component';

// Services
import { AddEmployeeService } from '../../service/manager/add.employee.service';
import { LoanApprovalService } from '../../service/manager/loan.approval.service';
import { ManagerHomeService } from '../../service/manager/manager.home.service';

/**
 * Manager Feature Module
 *
 * This module contains all manager-related functionality including:
 * - Manager dashboard home with analytics
 * - Employee registration and management
 * - Loan approval workflow
 * - Manager profile settings
 *
 * This module is lazy-loaded when a manager accesses /manager-dashboard
 */
@NgModule({
  declarations: [
    ManagerHomeComponent,
    ManagerAddEmployeeComponent,
    ManagerLoanApprovalComponent,
    ManagerSettingsComponent
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    ManagerRoutingModule
  ],
  providers: [
    AddEmployeeService,
    LoanApprovalService,
    ManagerHomeService
  ]
})
export class ManagerModule { }
