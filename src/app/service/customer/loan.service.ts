import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) { }
  getFDs(): Observable<any> {
    return this.http.get<any>(environment.baseUrl + `/api/v1/fd/user/${localStorage.getItem('userId')}`);
  }
  getLoans(): Observable<any> {
    return this.http.get<any>(environment.baseUrl + `/api/v1/loan/user/${localStorage.getItem('userId')}`);
  }
  applyLoan(fdId: number, loanAmount: number,userId: any, duration: string, interest: string, selectedLoanType: string): Observable<any> {
    return this.http.post<any>(environment.baseUrl + `/api/v1/loan/online`, {
      fixed_deposit_id: fdId,
      amount: loanAmount,
      customer_id: userId,
      duration_days: duration,
      interest: interest,
      loan_type: selectedLoanType
    });
  }
}
