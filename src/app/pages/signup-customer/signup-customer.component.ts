import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-customer',
  templateUrl: './signup-customer.component.html',
  styleUrl: './signup-customer.component.scss'
})
export class SignupCustomerComponent {
  currentCard: string = 'signup'; // Initial card

  // Method to navigate to the desired card
  goToCard(card: string): void {
    this.currentCard = card;
  }
}
