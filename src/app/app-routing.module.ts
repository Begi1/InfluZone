// import { NgModule } from '@angular/core';
// import { ExtraOptions, RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { CustomersCategoryPageComponent } from './pages/customers-category-page/customers-category-page.component';
// import { InfluencersCategoryPageComponent } from './pages/influencers-category-page/influencers-category-page.component';
// import { InfluencersPageComponent } from './pages/influencers-page/influencers-page.component';
// import { CustomersPageComponent } from './pages/customers-page/customers-page.component';
// import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
// import { InfluencerPageComponent } from './pages/influencer-page/influencer-page.component';
// import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
// import { NotificationsComponent } from './pages/notifications/notifications.component';
// import { SocialComponent } from './pages/social/social.component';
// import { ContactComponent } from './pages/contact/contact.component';
// import { GetStartComponent } from './pages/get-start/get-start.component';
// import { SignupInfluencerComponent } from './pages/signup-influencer/signup-influencer.component';
// import { SigninComponent } from './pages/signin/signin.component';
// import { BeforeSignupInfluencerComponent } from './pages/before-signup-influencer/before-signup-influencer.component';
// import { BeforeSignupCompanyComponent } from './pages/before-signup-company/before-signup-company.component';
// import { SignupCustomerComponent } from './pages/signup-customer/signup-customer.component';
// import { FaqComponent } from './pages/faq/faq.component';
// import { MyProfileComponent } from './pages/my-profile/my-profile.component';
// import { MySocialComponent } from './pages/my-social/my-social.component';
// import { AfterSignupProfileInfluencerComponent } from './pages/after-signup-profile-influencer/after-signup-profile-influencer.component';
// import { AfterSignupProfileCustumerComponent } from './pages/after-signup-profile-custumer/after-signup-profile-custumer.component';

// const routes: Routes = [
//   {path: '', component: WelcomePageComponent},
//   {path: 'home', component: HomeComponent},
//   {path: 'signup-influencer', component: SignupInfluencerComponent},
//   {path: 'signup-customer', component: SignupCustomerComponent},
//   {path: 'signin', component: SigninComponent},
//   {path: 'customers-category-page', component: CustomersCategoryPageComponent},
//   {path: 'influencers-category-page', component: InfluencersCategoryPageComponent},
//   {path: 'influencers-page', component: InfluencersPageComponent},
//   {path: 'customers-page', component: CustomersPageComponent},
//   {path: 'customer-page', component: CustomerPageComponent},
//   {path: 'influencer-page', component: InfluencerPageComponent},
//   {path: 'notifications', component: NotificationsComponent},
//   {path: 'social', component: SocialComponent},
//   {path: 'contact', component: ContactComponent},
//   {path: 'get-start', component: GetStartComponent},
//   {path: 'before-signup-influencer', component: BeforeSignupInfluencerComponent},
//   {path: 'before-signup-company', component: BeforeSignupCompanyComponent},
//   {path: 'app-influencers-category-page', component: InfluencersCategoryPageComponent},
//   {path: 'f.a.q', component: FaqComponent},
//   {path: 'my-profile', component: MyProfileComponent},
//   {path: 'my-social', component: MySocialComponent},
//   {path: 'after-signup-influencer', component: AfterSignupProfileInfluencerComponent},
//   {path: 'after-signup-custumer', component: AfterSignupProfileCustumerComponent},
//   {path: 'categories/:category', component: CustomersCategoryPageComponent},
// ];

// const routerOptions: ExtraOptions = {
//   anchorScrolling: 'enabled',
//   scrollPositionRestoration: 'enabled',
// };

// @NgModule({
//   imports: [RouterModule.forRoot(routes, routerOptions)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth.guard';  // Import the AuthGuard
import { CustomersCategoryPageComponent } from './pages/customers-category-page/customers-category-page.component';
import { InfluencersCategoryPageComponent } from './pages/influencers-category-page/influencers-category-page.component';
import { InfluencersPageComponent } from './pages/influencers-page/influencers-page.component';
import { CustomersPageComponent } from './pages/customers-page/customers-page.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { InfluencerPageComponent } from './pages/influencer-page/influencer-page.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SocialComponent } from './pages/social/social.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GetStartComponent } from './pages/get-start/get-start.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { MySocialComponent } from './pages/my-social/my-social.component';
import { AfterSignupProfileInfluencerComponent } from './pages/after-signup-profile-influencer/after-signup-profile-influencer.component';
import { AfterSignupProfileCustumerComponent } from './pages/after-signup-profile-custumer/after-signup-profile-custumer.component';
import { SignupInfluencerComponent } from './pages/signup-influencer/signup-influencer.component';
import { SignupCustomerComponent } from './pages/signup-customer/signup-customer.component';
import { BeforeSignupInfluencerComponent } from './pages/before-signup-influencer/before-signup-influencer.component';
import { BeforeSignupCompanyComponent } from './pages/before-signup-company/before-signup-company.component';
import { FaqComponent } from './pages/faq/faq.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'get-start', component: GetStartComponent },
  { path: 'signup-influencer', component: SignupInfluencerComponent },
  { path: 'signup-customer', component: SignupCustomerComponent },
  { path: 'before-signup-influencer', component: BeforeSignupInfluencerComponent },
  { path: 'before-signup-company', component: BeforeSignupCompanyComponent },
  { path: 'f.a.q', component: FaqComponent },
  // Add the AuthGuard to routes that require authentication
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'customers-category-page', component: CustomersCategoryPageComponent, canActivate: [AuthGuard] },
  { path: 'influencers-category-page', component: InfluencersCategoryPageComponent, canActivate: [AuthGuard] },
  { path: 'influencers-page', component: InfluencersPageComponent, canActivate: [AuthGuard] },
  { path: 'customers-page/:category', component: CustomersPageComponent, canActivate: [AuthGuard] },
  { path: 'customer-page', component: CustomerPageComponent, canActivate: [AuthGuard] },
  { path: 'influencer-page/:influencer', component: InfluencerPageComponent, canActivate: [AuthGuard] },
  { path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuard] },
  { path: 'social', component: SocialComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
  { path: 'get-start', component: GetStartComponent, canActivate: [AuthGuard] },
  { path: 'my-profile', component: MyProfileComponent, canActivate: [AuthGuard] },
  { path: 'my-social', component: MySocialComponent, canActivate: [AuthGuard] },
  { path: 'after-signup-influencer', component: AfterSignupProfileInfluencerComponent, canActivate: [AuthGuard] },
  { path: 'after-signup-custumer', component: AfterSignupProfileCustumerComponent, canActivate: [AuthGuard] },
  // Protect other routes that need to be accessed after authentication
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
