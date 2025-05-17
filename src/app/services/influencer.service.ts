import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { jwtDecode } from "jwt-decode";



interface LoginResponse {
  accessToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class InfluencerService {

  //local
  private apiUrl = 'https://api.influzone.ge/';
  //prod
  // private apiUrl = 'https://api.influzone.ge/influencers';

  constructor(private http: HttpClient) { }

  // Create influencer
  createInfluencer(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}influencers`, data);
  }

  // Verify OTP
  verifyOtp(email: string, otp: string): Observable<any> {
    return this.http.post(`${this.apiUrl}influencers/verify-otp`, { email, otp });
  }

  // Login to get JWT token
  login(data: { email: string; password: string }): Observable<LoginResponse> {
    console.log(data);
    return this.http.post<LoginResponse>(`${this.apiUrl}auth/login`, data).pipe(
      tap(response => {
        const accessToken = response?.accessToken;
        if (accessToken) {
          // Store JWT token in localStorage
          localStorage.setItem('accessToken', accessToken);
          console.log('Token saved to localStorage');
        }
      })
    );
  }

  // Decode the JWT token
  decodeJwt(): any {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        // Decode the JWT token
        return jwtDecode(token);
      } catch (error) {
        console.error('Error decoding JWT token:', error);
        return null;
      }
    }
    return null; // Return null if no token is found
  }
  
  getInfluencerFromToken(): Observable<any> {
    const decodedToken = this.decodeJwt();
    if (decodedToken && decodedToken.email) {
      const email = decodedToken.email;
      return this.http.get(`${this.apiUrl}influencers/${email}`); // Send GET request to find influencer by email
    } else {
      throw new Error('No email found in the decoded JWT token');
    }
  }

  // Update influencer profile
  updateInfluencerProfileByEmail(data: any): Observable<any> {
    const decodedToken = this.decodeJwt();
    if (decodedToken && decodedToken.email) {
      const email = decodedToken.email;
      return this.http.patch(`${this.apiUrl}influencers/update-profile/${email}`, data);
    } else {
      throw new Error('No email found in the decoded JWT token');
    }
  }

  getLast6Influencers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + "influencers/latest");
  }

  getInfluencers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + "influencers");
  }

  getInfluencersByPage(page: number): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + "influencers/forpages");
  }

  getInfluencerByEmail(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}influencers/${email}`);
  }

}
