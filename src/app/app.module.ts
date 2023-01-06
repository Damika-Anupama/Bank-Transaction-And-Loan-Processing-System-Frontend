import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProvider } from './interceptors/interceptor-barrel';
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
import { FilterPipe } from './pipes/filter.pipe';

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
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgChartsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
