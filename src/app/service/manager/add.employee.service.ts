import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {

  constructor(private http: HttpClient) {}
  saveEmployee(employee: any): Observable<any> {
    return this.http.post<any>(environment.baseUrl + `/api/v1/employee`, employee);
  }
}
