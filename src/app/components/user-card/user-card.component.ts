import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() title: string = '';
  @Input() isHeaderVisible: boolean = true; 
  @Input() headerRoute: string = '';
  @Input() buttonRoute: string = '';
  @Input() users: any = [];

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.users);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['users']) {
      this.users = this.users.filter((user: any) => user.socialVerify === 'true');
      console.log('Filtered users:', this.users);
    }
  }

  route(user: any) {
    const fullRoute = `${this.buttonRoute}/${user.name}${user.lastname}`;
    this.router.navigate([fullRoute], {
      queryParams: { email: user.email }
    });
  }
  
}
