import { Component } from '@angular/core';
import { InfluencerService } from '../../services/influencer.service';

@Component({
  selector: 'app-influencer-page',
  templateUrl: './influencer-page.component.html',
  styleUrl: './influencer-page.component.scss'
})
export class InfluencerPageComponent {
influencers: any[] = [];
  loading: boolean = false;
  
    constructor(private influencerService: InfluencerService) {}
  
    ngOnInit(): void {
      // Call the function to get influencers when the component initializes
      this.getInfluencersData();
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
}
