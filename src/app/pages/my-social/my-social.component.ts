import { ChangeDetectorRef, Component } from '@angular/core';
import { GoogleAuthService } from '../../services/google-auth.service';

@Component({
  selector: 'app-my-social',
  templateUrl: './my-social.component.html',
  styleUrl: './my-social.component.scss'
})
export class MySocialComponent {
activeCard: number = 0;

  // Method to resize cards when clicked
  socialLinks: string[] = [];

  
  userChannelData: any;
  isLoggedIn: boolean = false;
  // Array to store available items for the dropdown
  availableItems: string[] = ['Skin care', 'Makeup Tutorials',];

  // Array to store the selected items for the list
  selectedItems: string[] = [];

  // Variable to bind the selected item from the dropdown
  selectedItem: string = '';

  newVideo: string = '';          // To store the input value
  videos: string[] = [];  

  constructor(private googleAuthService: GoogleAuthService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    // Subscribe to authentication state and channel data
    this.googleAuthService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      console.log('Login State:', this.isLoggedIn);  // Log login state
    });

    this.googleAuthService.userChannelData$.subscribe(data => {
      this.userChannelData = data;
      console.log('User Channel Data:', this.userChannelData);
      this.socialLinks.push('youtube.com/' + this.userChannelData.snippet.customUrl)
      this.cdRef.detectChanges();
    });
  }

  resizeCard(index: number): void {
    this.activeCard = index;
  }


  signIn() {
    console.log('Attempting to sign in...');
    this.googleAuthService.signIn();
  }

  signOut() {
    console.log('Attempting to sign out...');
    this.googleAuthService.signOut();
  }

  onSelect() {
    if (this.selectedItem && !this.selectedItems.includes(this.selectedItem)) {
      this.selectedItems.push(this.selectedItem);
    }
  }

  removeItem(item: string) {
    const index = this.selectedItems.indexOf(item);
    if (index !== -1) {
      this.selectedItems.splice(index, 1);
    }
  }

  addVideo(): void {
    if (this.newVideo.trim()) {
      this.videos.push(this.newVideo);  // Add the input value to the array
      this.newVideo = '';               // Clear the input field
    }
  }

  removeVideo(index: number): void {
    this.videos.splice(index, 1); // Remove from the array
  }
}
