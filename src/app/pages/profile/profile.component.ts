import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from '../../services/google-auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // userChannelData: any;
  // isLoggedIn: boolean = false;

  // constructor(private googleAuthService: GoogleAuthService) { }

  // ngOnInit(): void {
    // Subscribe to authentication state and channel data
    // this.googleAuthService.isLoggedIn$.subscribe(isLoggedIn => {
    //   this.isLoggedIn = isLoggedIn;
    //   console.log('Login State:', this.isLoggedIn);  // Log login state
    // });

    // this.googleAuthService.userChannelData$.subscribe(data => {
    //   this.userChannelData = data;
    //   console.log('User Channel Data:', this.userChannelData);  // Log user channel data
    // });
  // }

  // signIn() {
  //   console.log('Attempting to sign in...');
  //   this.googleAuthService.signIn();
  // }

  // signOut() {
  //   console.log('Attempting to sign out...');
  //   this.googleAuthService.signOut();
  // }

  private clientKey = 'sbaw3d8spamufiqu5g';
  private clientSecret = 'Teiq8Gdfu9YwMaFflUKSFwz681g6E2Sa';
  private redirectUri = 'http://localhost:4200/profile';
  private tokenEndpoint = 'https://open.tiktokapis.com/v2/oauth/token/';
  private userInfoEndpoint = 'https://open-api.tiktok.com/user/info/';
  
  userInfo: any = null;
  error: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    // Capture the authorization code from the URL
    this.route.queryParams.subscribe(params => {
      const authCode = params['code'];

      if (authCode) {
        // Proceed with exchanging the authorization code for an access token
        this.getAccessToken(authCode);
      } else {
        console.error('Authorization code not found in the URL');
      }
    });
  }

  // Step 3: Redirect the user to TikTok's OAuth page for login
  signUpWithTikTok(): void {
    const authUrl = `https://www.tiktok.com/auth/authorize/?client_key=${this.clientKey}&response_type=code&scope=user_info&redirect_uri=${encodeURIComponent(this.redirectUri)}&state=random_state_string`;
    
    // Redirect user to TikTok OAuth URL
    window.location.href = authUrl;
  }

  // Step 4: Exchange authorization code for access token
  private getAccessToken(authCode: string): void {
    const body = {
      client_key: this.clientKey,
      client_secret: this.clientSecret,
      code: authCode,
      redirect_uri: this.redirectUri
    };
  
    this.http.post(this.tokenEndpoint, body).subscribe(
      (response: any) => {
        // Ensure the response contains the access token
        if (response.access_token) {
          const accessToken = response.access_token;
          // Step 5: Fetch user info using the access token
          this.getUserInfo(accessToken);
        } else {
          this.error = 'No access token received';
          console.error('Access token not found in response:', response);
        }
      },
      (err) => {
        this.error = 'Error fetching access token';
        console.error('Error response:', err);
      }
    );
  }

  // Step 6: Use the access token to fetch the user info from TikTok
  private getUserInfo(accessToken: string): void {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    this.http.get(this.userInfoEndpoint, { headers }).subscribe(
      (userData) => {
        // Handle user data, e.g., store it in a component property
        this.userInfo = userData;
      },
      (err) => {
        this.error = 'Error fetching user info';
        console.error('Error fetching user info:', err);
      }
    );
  }
}
