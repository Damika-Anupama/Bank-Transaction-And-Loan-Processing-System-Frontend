import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoanApprovalService {

  constructor(private http: HttpClient) {}

  getUnapprovedLoans(): Observable<any> {
    return this.http.get<any>(environment.baseUrl + `/api/v1/loan/unapproved-loans`);
  }
}
