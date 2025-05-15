import { Component } from '@angular/core';
import { InfluencerService } from '../../services/influencer.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {
  userData: any; // Store decoded token data

  constructor(private influencerService: InfluencerService) {}

  ngOnInit(): void {
    this.logDecodedToken();
  }

  logDecodedToken(): void {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        const decodedToken = this.decodeJWT(token);
        console.log('Decoded Access Token:', decodedToken);
        this.userData = decodedToken; // Store decoded token
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else {
      console.log('No access token found.');
    }
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
