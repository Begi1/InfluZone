import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { InfluencerService } from '../../services/influencer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  influencers: any[] = [];
  loading: boolean = false;
  role: string = ''; // Variable to store the user's role

  constructor(private influencerService: InfluencerService) {}

  ngOnInit(): void {
    // Call the function to get influencers when the component initializes
    this.getInfluencersData();
    this.logDecodedToken(); // Log the decoded token on init
  }

  // Function to log decoded access token
  logDecodedToken(): void {
    const token = localStorage.getItem('accessToken'); // Get the token from localStorage (or another storage)
    
    if (token) {
      try {
        const decodedToken = this.decodeJWT(token); // Decode the JWT token
        console.log('Decoded Access Token:', decodedToken); // Log the decoded token
        this.role = decodedToken.role; // Store the role from the decoded token
      } catch (error) {
        console.error('Error decoding token:', error); // Handle errors if any
      }
    } else {
      console.log('No access token found.');
    }
  }

  // Function to manually decode a JWT token
  decodeJWT(token: string): any {
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid token format');
    }

    const payload = parts[1];
    const decodedPayload = this.base64UrlDecode(payload);

    return JSON.parse(decodedPayload);
  }

  // Function to decode a base64 URL-encoded string
  base64UrlDecode(base64Url: string): string {
    // Replace base64 URL-safe characters with base64 characters
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    
    // Pad the base64 string with '=' to make it a valid base64 string
    const padding = base64.length % 4;
    if (padding) {
      base64 += '='.repeat(4 - padding);
    }

    return atob(base64); // Decode the base64 string
  }

  // Define the function that gets the last 6 influencers
  getInfluencersData(): void {
    this.loading = true; // Set loading to true when starting the request
    this.influencerService.getLast6Influencers().subscribe(
      (data) => {
        this.influencers = data;
        this.loading = false; // Set loading to false when data is fetched
        console.log(data);
      },
      (error) => {
        console.error('Error fetching influencers:', error);
        this.loading = false; // Set loading to false on error
      }
    );
  }
}
