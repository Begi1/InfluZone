import { Injectable } from '@angular/core';
import { gapi } from 'gapi-script';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  private apiKey = 'AIzaSyCyk4wqrIqKIDDUQHu5E4ZhEOG03aeF-6M';  // Replace with your YouTube API key
  private clientId = '522982029446-jucblmnlj62dsnva2g11nuhd754gls88.apps.googleusercontent.com';  // Replace with your Google OAuth 2.0 client ID
  private scope = 'https://www.googleapis.com/auth/youtube.readonly';

  private userChannelDataSubject = new BehaviorSubject<any>(null);
  userChannelData$ = this.userChannelDataSubject.asObservable();

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() {
    this.loadGoogleAPIClient();
  }

  private loadGoogleAPIClient() {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId: this.clientId,
        scope: this.scope,
        plugin_name: 'chat',
      }).then(() => {
        const authInstance = gapi.auth2.getAuthInstance();
        
        if (authInstance) {
          const isLoggedIn = authInstance.isSignedIn.get();
          this.isLoggedInSubject.next(isLoggedIn);
          console.log('Google API client initialized. Is Logged In:', isLoggedIn);
        } else {
          console.error("Auth instance not initialized properly");
        }
      }).catch((error: any) => {
        console.error('Error initializing Google API client:', error);
      });
    });
  }

  signIn() {
    const authInstance = gapi.auth2.getAuthInstance();
    
    if (authInstance) {
      authInstance.signIn().then(() => {
        this.isLoggedInSubject.next(true);
        console.log('Successfully signed in');
        this.getChannelData();
      }).catch((error: any) => {
        console.error('Error signing in:', error);
      });
    } else {
      console.error("Auth instance is not available.");
    }
  }

  signOut() {
    const authInstance = gapi.auth2.getAuthInstance();
    
    if (authInstance) {
      authInstance.signOut().then(() => {
        this.isLoggedInSubject.next(false);
        this.userChannelDataSubject.next(null);
        console.log('Successfully signed out');
      }).catch((error: any) => {
        console.error('Error signing out:', error);
      });
    } else {
      console.error("Auth instance is not available.");
    }
  }

  private getChannelData() {
    const authInstance = gapi.auth2.getAuthInstance();
    
    if (authInstance) {
      const googleUser = authInstance.currentUser.get();
      const accessToken = googleUser.getAuthResponse().access_token;

      // Now that we have accessToken, we can proceed with the API call
      gapi.client.setApiKey(this.apiKey);
      gapi.client.load('youtube', 'v3', () => {
        const request = gapi.client.youtube.channels.list({
          mine: true,
          part: 'snippet,contentDetails,statistics'
        });

        request.execute((response: any) => {
          if (response.error) {
            console.error('Error fetching channel data:', response.error);
          } else {
            console.log('Channel Data:', response.items[0]);  // Log the channel data
            this.userChannelDataSubject.next(response.items[0]);
          }
        });
      });
    } else {
      console.error("Auth instance is not available.");
    }
  }
}
