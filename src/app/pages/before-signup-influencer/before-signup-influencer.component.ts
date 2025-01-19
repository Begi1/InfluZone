import { Component } from '@angular/core';

@Component({
  selector: 'app-before-signup-influencer',
  templateUrl: './before-signup-influencer.component.html',
  styleUrl: './before-signup-influencer.component.scss'
})
export class BeforeSignupInfluencerComponent {
  currentCard: number = 0;

  showCard(cardIndex: number): void {
    this.currentCard = cardIndex;
  }
}
