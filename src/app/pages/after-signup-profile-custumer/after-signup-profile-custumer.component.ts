import { Component } from '@angular/core';
import { InfluencerService } from '../../services/influencer.service';

@Component({
  selector: 'app-after-signup-profile-custumer',
  templateUrl: './after-signup-profile-custumer.component.html',
  styleUrl: './after-signup-profile-custumer.component.scss'
})
export class AfterSignupProfileCustumerComponent {

  influencer: any;

  constructor(private influencerService: InfluencerService) {}

  ngOnInit() {
    this.influencerService.getInfluencerFromToken().subscribe(
      (data) => {
        this.influencer = data;
        console.log('Influencer data:', this.influencer);
      },
      (error) => {
        console.error('Error fetching influencer data:', error);
      }
    );
  }
}
