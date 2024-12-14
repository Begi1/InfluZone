import { Component, AfterViewInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements AfterViewInit {

  // Fake data for testing the slider
  slides: { name: string; image: string; }[] = [
    { name: 'Partner 1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2d7bF1q2WBQnHUhqaR2OuxjFiv_EIWBwqow&s' },
    { name: 'Partner 2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2d7bF1q2WBQnHUhqaR2OuxjFiv_EIWBwqow&s' },
    { name: 'Partner 3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2d7bF1q2WBQnHUhqaR2OuxjFiv_EIWBwqow&s' },
    { name: 'Partner 4', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2d7bF1q2WBQnHUhqaR2OuxjFiv_EIWBwqow&s' },
    { name: 'Partner 5', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2d7bF1q2WBQnHUhqaR2OuxjFiv_EIWBwqow&s' },
    { name: 'Partner 6', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2d7bF1q2WBQnHUhqaR2OuxjFiv_EIWBwqow&s' }
  ];

  constructor() {}

  ngAfterViewInit(): void {
    this.initSplide();
  }

  private initSplide(): void {
    new Splide('.splide', {
      type       : 'loop',
      perPage    : 9,
      perMove    : 1,
      pagination : false,
      arrows     : false,
      autoplay   : true,
      interval   : 1000,
    }).mount();
  }
}
