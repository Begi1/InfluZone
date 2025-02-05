import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CustomersCategoryPageComponent } from './pages/customers-category-page/customers-category-page.component';
import { InfluencersCategoryPageComponent } from './pages/influencers-category-page/influencers-category-page.component';
import { InfluencersPageComponent } from './pages/influencers-page/influencers-page.component';
import { CustomersPageComponent } from './pages/customers-page/customers-page.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { InfluencerPageComponent } from './pages/influencer-page/influencer-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SocialComponent } from './pages/social/social.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GetStartComponent } from './pages/get-start/get-start.component';
import { SignupInfluencerComponent } from './pages/signup-influencer/signup-influencer.component';
import { SigninComponent } from './pages/signin/signin.component';
import { BeforeSignupInfluencerComponent } from './pages/before-signup-influencer/before-signup-influencer.component';
import { BeforeSignupCompanyComponent } from './pages/before-signup-company/before-signup-company.component';
import { SignupCustomerComponent } from './pages/signup-customer/signup-customer.component';
import { FaqComponent } from './pages/faq/faq.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { MySocialComponent } from './pages/my-social/my-social.component';

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'signup-influencer', component: SignupInfluencerComponent},
  {path: 'signup-customer', component: SignupCustomerComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'customers-category-page', component: CustomersCategoryPageComponent},
  {path: 'influencers-category-page', component: InfluencersCategoryPageComponent},
  {path: 'influencers-page', component: InfluencersPageComponent},
  {path: 'customers-page', component: CustomersPageComponent},
  {path: 'customer-page', component: CustomerPageComponent},
  {path: 'influencer-page', component: InfluencerPageComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'social', component: SocialComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'get-start', component: GetStartComponent},
  {path: 'before-signup-influencer', component: BeforeSignupInfluencerComponent},
  {path: 'before-signup-company', component: BeforeSignupCompanyComponent},
  {path: 'app-customers-category-page', component: CustomersCategoryPageComponent},
  {path: 'app-influencers-category-page', component: InfluencersCategoryPageComponent},
  {path: 'f.a.q', component: FaqComponent},
  {path: 'my-profile', component: MyProfileComponent},
  {path: 'my-social', component: MySocialComponent},
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
