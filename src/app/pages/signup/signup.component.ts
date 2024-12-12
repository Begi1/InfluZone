import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  cardChanger = 0

  cardChange(number: number) {
    this.cardChanger += number
  }
}
