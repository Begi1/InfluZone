import { ChangeDetectorRef, Component } from '@angular/core';
import { GoogleAuthService } from '../../services/google-auth.service';
import { InfluencerService } from '../../services/influencer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-after-signup-profile-influencer',
  templateUrl: './after-signup-profile-influencer.component.html',
  styleUrl: './after-signup-profile-influencer.component.scss'
})
export class AfterSignupProfileInfluencerComponent {
  activeCard: number = 0;

  servicesModal = false

  // Method to resize cards when clicked
  socialLinks: string[] = [];

  
  userChannelData: any = {
    snippet: {
      title: "Channel name",
      customUrl: "@etag",
      description: "Description"
    },
    statistics: {
      subscriberCount: 69,
      videoCount: 69,
    }
  };
  userChannelDataAPI: any;
  isLoggedIn: boolean = false;
  // Array to store available items for the dropdown
  availableItems: string[] = [
    "Fashion",
    "Beauty & Makeup",
    "Fitness & Health",
    "Travel",
    "Food & Cooking",
    "Technology & Gadgets",
    "Gaming",
    "Photography & Videography",
    "Music",
    "Education & Learning",
    "Sports",
    "Art & Design",
    "Events & Entertainment",
    "Business & Entrepreneurship",
    "Cars & Automobiles",
    "Food Reviews & Vlogging",
    "Influencer Lifestyle",
    "Product Reviews"
  ];
  
  

  // Array to store the selected items for the list
  selectedItems: string[] = [];

  // Variable to bind the selected item from the dropdown
  selectedItem: string = '';

  newVideo: string = '';          // To store the input value
  videos: string[] = [];  

  constructor(private googleAuthService: GoogleAuthService, private cdRef: ChangeDetectorRef, private influencerService: InfluencerService, private router: Router) { }

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

  userSave() {

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
    if(this.videos.length < 3) {
      if (this.newVideo.trim()) {
        this.videos.push(this.newVideo);  // Add the input value to the array
        this.newVideo = '';               // Clear the input field
      }
    }
  }

  removeVideo(index: number): void {
    this.videos.splice(index, 1); // Remove from the array
  }

  updateProfile() {
    if (!this.userChannelData) {
      console.error('No user channel data found');
      return;
    }
  
    const payload = {
      mainImage: this.userChannelData.snippet.thumbnails.default.url,
      socialMedia: [
        {
          title: 'YouTube',
          username: this.userChannelData.snippet.title,
          url: this.userChannelData.snippet.customUrl,
          image: this.userChannelData.snippet.thumbnails.default.url,
          about: this.userChannelData.snippet.description,
        },
      ],
      content: this.selectedItems,
      topThreeVideo: this.videos,
    };
  
    this.influencerService.updateInfluencerProfileByEmail(payload).subscribe(
      (response) => {
        console.log('Influencer profile updated successfully', response);
      },
      (error) => {
        console.error('Error updating influencer profile:', error);
      }
    );

    this.router.navigate(['/home']);
  }
  
  showServicesModal() {
    this.servicesModal = !this.servicesModal
  }
  
}
