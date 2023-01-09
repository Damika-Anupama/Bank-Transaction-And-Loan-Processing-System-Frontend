import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FixedDepositService {
  constructor(private http: HttpClient) {}

  getSavingAccountsDetails(): Observable<any> {
    return this.http.get<any>(
      environment.baseUrl +
        `/api/v1/fd/savingAccountsDetails/${localStorage.getItem('userId')}`
    );
  }
  createFD(
    savingsAccountId: any,
    duration: any,
    interest: any,
    amount: any
  ): Observable<any> {
    const body = {
      saving_account_id: savingsAccountId,
      duration: duration,
      rate_per_annum: interest,
      amount: amount,
    };
    return this.http.post<any>(environment.baseUrl + `/api/v1/fd`, body);
  }
}
