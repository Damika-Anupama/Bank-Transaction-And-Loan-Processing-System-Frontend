import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FixedDepositService {

  constructor(private http: HttpClient) { }
  
  getSavingAccountsDetails(): Observable<any> {
    return this.http.get<any>(environment.baseUrl + `/api/v1/fd/savingAccountsDetails/${localStorage.getItem('userId')}`);
  }
}
