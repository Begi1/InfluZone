import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CustomersCategoryPageComponent } from './pages/customers-category-page/customers-category-page.component';
import { InfluencersCategoryPageComponent } from './pages/influencers-category-page/influencers-category-page.component';
import { InfluencersPageComponent } from './pages/influencers-page/influencers-page.component';
import { CustomersPageComponent } from './pages/customers-page/customers-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'customers-category-page', component: CustomersCategoryPageComponent},
  {path: 'influencers-category-page', component: InfluencersCategoryPageComponent},
  {path: 'influencers-page', component: InfluencersPageComponent},
  {path: 'customers-page', component: CustomersPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
