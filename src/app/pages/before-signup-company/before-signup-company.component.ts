import { Component } from '@angular/core';

@Component({
  selector: 'app-before-signup-company',
  templateUrl: './before-signup-company.component.html',
  styleUrl: './before-signup-company.component.scss'
})
export class BeforeSignupCompanyComponent {
  currentCard: number = 0;

  showCard(cardIndex: number): void {
    this.currentCard = cardIndex;
  }
}
