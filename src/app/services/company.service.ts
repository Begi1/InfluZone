import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

interface LoginResponse {
    accessToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl = 'http://localhost:3000/companies'; // Adjust the URL according to your backend

  constructor(private http: HttpClient) { }

  createCompany(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  verifyOtp(email: string, otp: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/verify-otp`, { email, otp });
  }

  login(data: { email: string; password: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, data).pipe(
      tap(response => {
        const accessToken = response?.accessToken;
        if (accessToken) {
          localStorage.setItem('accessToken', accessToken);
          console.log('Token saved to localStorage');
        }
      })
    );
  }
  
}
