import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ResolveFn, RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { DashboardGuard } from './guard/dashboard.guard';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { FixedDepositComponent } from './view/fixed-deposit/fixed-deposit.component';
import { HomeComponent } from './view/home/home.component';
import { LoanComponent } from './view/loan/loan.component';
import { NotFoundComponent } from './view/not-found/not-found.component';
import { ServerErrorComponent } from './view/server-error/server-error.component';
import { SignInComponent } from './view/sign-in/sign-in.component';
import { SignUpComponent } from './view/sign-up/sign-up.component';
import { TransactionComponent } from './view/transaction/transaction.component';
import { WelcomeComponent } from './view/welcome/welcome.component';

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
      
    ],
    // data: { preload: true },
    // canActivate: [DashboardGuard]
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
