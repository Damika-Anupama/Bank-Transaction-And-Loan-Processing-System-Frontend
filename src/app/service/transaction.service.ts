import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }
  getAccountDetails(): Observable<any> {
    return this.http.get<any>(environment.baseUrl + `/api/v1/transaction/pageDetails/${localStorage.getItem('userId')}`);
  }
  proceedTransaction(fromAccount: string, toAccount: string, amount: string, senderRemarks: string, beneficiaryRemarks: string): Observable<any> {
    return this.http.post<any>(environment.baseUrl + `/api/v1/transaction/transfer`, {
      // convert fromAccount to integer value
      
      from_account: fromAccount,
      to_account: toAccount,
      transaction_fee: 0,
      amount: amount,
      sender_remarks: senderRemarks,
      beneficiary_remarks: beneficiaryRemarks
    });
  }
  getTransactions(accountId: string): Observable<any> {
    return this.http.get<any>(environment.baseUrl + `/api/v1/transaction/tableDetails/${accountId}`);
  }
}
