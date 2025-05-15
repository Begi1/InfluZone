import { Component } from '@angular/core';
import { InfluencerService } from '../../services/influencer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-influencer-page',
  templateUrl: './influencer-page.component.html',
  styleUrl: './influencer-page.component.scss'
})
export class InfluencerPageComponent {
  activeCard: number = 0;
  userEmail: string = '';
  influencers: any[] = [];
  user: any;
  loading: boolean = false;
  
    constructor(private influencerService: InfluencerService, private route: ActivatedRoute) {}
  
    ngOnInit(): void {

      this.route.queryParams.subscribe(params => {
        this.userEmail = params['email'];
        console.log('User email:', this.userEmail);
      });

      this.getInfluencersData();

      this.influencerService.getInfluencerByEmail(this.userEmail).subscribe({
        next: (data) => {
          this.user = data
        },
        error: (err) => {
          console.error('Error fetching influencer:', err);
        }
      });
    }
  
    // Define the function that gets the last 6 influencers
    getInfluencersData(): void {
      this.loading = true; // Set loading to true when starting the request
      this.influencerService.getLast6Influencers().subscribe(
        (data) => {
          this.influencers = data;
          this.loading = false; // Set loading to false when data is fetched
          console.log(data)
        },
        (error) => {
          console.error('Error fetching influencers:', error);
          this.loading = false; // Set loading to false on error
        }
      );
    }
  
    resizeCard(index: number): void {
      this.activeCard = index;
    }
}
