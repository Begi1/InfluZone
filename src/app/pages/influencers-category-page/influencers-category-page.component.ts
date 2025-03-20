import { Component } from '@angular/core';
import { InfluencerService } from '../../services/influencer.service';

@Component({
  selector: 'app-influencers-category-page',
  templateUrl: './influencers-category-page.component.html',
  styleUrl: './influencers-category-page.component.scss'
})
export class InfluencersCategoryPageComponent {
  page: number = 1
  loading: boolean = false;
  influencers: any[] = [];

  constructor(private influencerService: InfluencerService) {}

  ngOnInit(): void {
    // Call the function to get influencers when the component initializes
    this.getInfluencersData();
  }
  // getInfluencersByPage() {
  //   this.loading = true; // Set loading to true when starting the request
  //   this.influencerService.getLast6Influencers().subscribe(
  //     (data) => {
  //       this.influencers = data;
  //       this.loading = false; // Set loading to false when data is fetched
  //       console.log(data)
  //     },
  //     (error) => {
  //       console.error('Error fetching influencers:', error);
  //       this.loading = false; // Set loading to false on error
  //     }
  //   );
  // }

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
