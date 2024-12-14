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

  userChannelData: any;
  isLoggedIn: boolean = false;

  constructor(private googleAuthService: GoogleAuthService) { }

  ngOnInit(): void {
    // Subscribe to authentication state and channel data
    this.googleAuthService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      console.log('Login State:', this.isLoggedIn);  // Log login state
    });

    this.googleAuthService.userChannelData$.subscribe(data => {
      this.userChannelData = data;
      console.log('User Channel Data:', this.userChannelData);  // Log user channel data
    });
  }

  signIn() {
    console.log('Attempting to sign in...');
    this.googleAuthService.signIn();
  }

  signOut() {
    console.log('Attempting to sign out...');
    this.googleAuthService.signOut();
  }
}
