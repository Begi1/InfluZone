import { Component } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent {
  isDropdownVisible: boolean = false;

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  // Function to delete the access token
  deleteAccessToken(): void {
    // Removing the access token from localStorage (or sessionStorage)
    localStorage.removeItem('accessToken'); // Or sessionStorage.removeItem('accessToken');
    console.log('Access token has been deleted.');
  }
}
