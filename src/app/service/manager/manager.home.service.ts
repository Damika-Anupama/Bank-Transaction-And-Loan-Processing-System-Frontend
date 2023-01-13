import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ManagerHomeService {
  constructor(private http: HttpClient) {}
  getDashboardBlockDetails(): Observable<any> {
    return this.http.get<any>(environment.baseUrl + `/api/v1/manager/dashboard-blocks/${localStorage.getItem('email')}`);
  }
  getTotalTransactions(branch_id: any): Observable<any> {
    return this.http.get<any>(environment.baseUrl + `/api/v1/manager/total-transactions/${branch_id}`);
  }
  getTotalWithdrawals(branch_id: any): Observable<any> {
    return this.http.get<any>(environment.baseUrl + `/api/v1/manager/total-withdrawals/${branch_id}`);
  }
  getLateLoans(branch_id: any): Observable<any> {
    return this.http.get<any>(environment.baseUrl + `/api/v1/manager/late-loans/${branch_id}`);
  }
}
