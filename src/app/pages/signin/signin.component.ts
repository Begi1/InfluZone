import { Component } from '@angular/core';
import { InfluencerService } from '../../services/influencer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  email: string = '';
  password: string = '';

  constructor(private influencerService: InfluencerService, private router: Router) {}

  onSubmit(): void {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.influencerService.login(loginData).subscribe({
      next: (response) => {
        console.log('Login successful:', response);

        const token = response?.accessToken; // Adjust based on your actual response
        if (token) {
          localStorage.setItem('accessToken', token);

          try {
            const decoded = this.decodeJWT(token);
           
            if (decoded?.socialVerify === 'false') {
              this.router.navigate(['/after-signup-influencer']);
            } else {
              this.router.navigate(['/home']);
            }            
          } catch (err) {
            console.error('Error decoding token:', err);
          }
        } else {
          console.error('No accessToken in login response');
        }
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
  }

  decodeJWT(token: string): any {
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid token format');
    }

    const payload = parts[1];
    const decodedPayload = this.base64UrlDecode(payload);

    return JSON.parse(decodedPayload);
  }

  base64UrlDecode(base64Url: string): string {
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const padding = base64.length % 4;
    if (padding) {
      base64 += '='.repeat(4 - padding);
    }

    return atob(base64);
  }
}
