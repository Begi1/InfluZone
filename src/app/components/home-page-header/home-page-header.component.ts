import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-page-header',
  templateUrl: './home-page-header.component.html',
  styleUrls: ['./home-page-header.component.scss']
})
export class HomePageHeaderComponent {
  @Input() showAuth: boolean = true; // Set to true if you want to show the buttons, false to hide them
}
