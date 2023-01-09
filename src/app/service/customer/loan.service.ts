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
}
