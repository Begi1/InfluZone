import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service.service';  // Import your user service to handle API calls

@Component({
  selector: 'app-signup-influencer',
  templateUrl: './signup-influencer.component.html',
  styleUrls: ['./signup-influencer.component.scss']
})
export class SignupInfluencerComponent {
  currentCard: string = 'signup'; // Initial card

  // Method to navigate to the desired card
  goToCard(card: string): void {
    this.currentCard = card;
  }
}
