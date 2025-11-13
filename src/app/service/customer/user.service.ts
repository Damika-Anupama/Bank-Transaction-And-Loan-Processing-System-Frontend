import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  sendVerificationCode(num: number, email: string) {
    const body = {
      recipient: email,
      msgBody: num,
      subject: 'Verification Code - Palindrome Sign-up',
    }
    this.http.post(environment.baseUrl + `/api/v1/mails/sendMail`, body)
  }
  constructor(private http: HttpClient) {
  }

  createAccount(uname: string, email: string, contactNumber: string, sex: string, pwd: string): Observable<HttpResponse<any>> {
    let gender: string;
    if (sex === 'Male') {
      gender = 'MALE';
    } else if (sex === 'Female') {
      gender = 'FEMALE';
    } else {
      gender = 'OTHER';
    }

    const body = {
      username: uname,
      password: pwd,
      role: 'USER',
      email,
      gender,
      shortDescription: 'Hello, I\'m a newbie 🐰',
      contactNum: contactNumber
    };
    return this.http.post<HttpResponse<any>>(environment.baseUrl + `/api/v1/users`, body, {
      observe: 'response'
    });
  }

  findUser(query: string): Observable<string> {
    const httpParams = new HttpParams().append('q', query)
      .append('ignoreProgressBar', '');
    return this.http.get<string>(environment.baseUrl + `/api/v1/users/name/` + query);
  }
  findEmail(query: string): Observable<string> {
    const httpParams = new HttpParams().append('q', query)
      .append('ignoreProgressBar', '');
    return this.http.get<string>(environment.baseUrl + `/api/v1/users/email/` + query);
  }
  getUserDetailsById(query: string | null): Observable<any> {
    return this.http.get<any>(environment.baseUrl + `/api/v1/users/${query}`);
  }

  getProfilePic(query: string | null): Observable<any> {
    return this.http.get<any>(environment.baseUrl + `/api/v1/users/picture/` + query);
  }

  getDashboardDetails(): Observable<any> {
    return this.http.get<any>(environment.baseUrl + `/api/v1/user/dashboard/${localStorage.getItem('email')}`);
  }

  authenticate(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    };
    return this.http.post<any>(environment.baseUrl + `/api/v1/user/auth`, body);
  }

  updateUser(userId: string, profilePic: string, shortDes: string, username: string, email: string, phoneNumber: string): Observable<any> {
    const body: FormData = new FormData();
    body.append('id', userId);
    body.append('username', username);
    body.append('email', email);
    body.append('shortDes', shortDes);
    body.append('profilePic', profilePic);
    body.append('phoneNum', phoneNumber);
    return this.http.put(environment.baseUrl + `/api/v1/users/${userId}`, body,{
      headers : new HttpHeaders({
        // 'Content-Type': 'multipart/form-data'
      })
    });
  }
}