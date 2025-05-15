import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.scss']
})
export class CustomersPageComponent implements OnInit {

  category: any = null; // The category object will be stored here
  categories = this.categoriesService.categories; // All available categories
  
  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      const categoryName = params.get('category'); 

      this.category = this.categories.find(cat => cat.navigate === categoryName);
    });
  }
}
