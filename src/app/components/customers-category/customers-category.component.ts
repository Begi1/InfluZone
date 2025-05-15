import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-category',
  templateUrl: './customers-category.component.html',
  styleUrl: './customers-category.component.scss'
})
export class CustomersCategoryComponent {
  
  constructor(private router: Router) {}

  navigateToCategory(category: string): void {
    this.router.navigate([`categories/${category}`]);
  }
}
