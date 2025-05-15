import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-customers-category-page',
  templateUrl: './customers-category-page.component.html',
  styleUrl: './customers-category-page.component.scss'
})
export class CustomersCategoryPageComponent {
  
  constructor(private router: Router,
              private categoriesService: CategoriesService
  ) {}

  categories = this.categoriesService.categories

  navigateToCategory(category: string): void {
    this.router.navigate([`customers-page/${category}`]);
  }
}
