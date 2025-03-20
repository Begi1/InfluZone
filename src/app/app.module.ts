import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageHeaderComponent } from './components/home-page-header/home-page-header.component';
import { HomeComponent } from './pages/home/home.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { HttpClientModule } from '@angular/common/http';
import { PartnersComponent } from './components/partners/partners.component';
import { CustomersCategoryComponent } from './components/customers-category/customers-category.component';
import { InfluencersCategoryComponent } from './components/influencers-category/influencers-category.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersCategoryPageComponent } from './pages/customers-category-page/customers-category-page.component';
import { InfluencersCategoryPageComponent } from './pages/influencers-category-page/influencers-category-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfluencersPageComponent } from './pages/influencers-page/influencers-page.component';
import { CustomersPageComponent } from './pages/customers-page/customers-page.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { CustomerPageAboutComponent } from './components/customer-page-about/customer-page-about.component';
import { CustomerPageFeedbackComponent } from './components/customer-page-feedback/customer-page-feedback.component';
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
import { FuckComponent } from './components/fuck/fuck.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { MySocialComponent } from './pages/my-social/my-social.component';
import { AfterSignupProfileCustumerComponent } from './pages/after-signup-profile-custumer/after-signup-profile-custumer.component';
import { AfterSignupProfileInfluencerComponent } from './pages/after-signup-profile-influencer/after-signup-profile-influencer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupInfluencerComponent,
    SigninComponent,
    HomePageHeaderComponent,
    HomeComponent,
    UserHeaderComponent,
    PartnersComponent,
    CustomersCategoryComponent,
    InfluencersCategoryComponent,
    UserCardComponent,
    CustomersCategoryPageComponent,
    InfluencersCategoryPageComponent,
    FooterComponent,
    InfluencersPageComponent,
    CustomersPageComponent,
    CustomerPageComponent,
    CustomerPageAboutComponent,
    CustomerPageFeedbackComponent,
    InfluencerPageComponent,
    WelcomePageComponent,
    NotificationsComponent,
    SocialComponent,
    ContactComponent,
    GetStartComponent,
    BeforeSignupInfluencerComponent,
    BeforeSignupCompanyComponent,
    SignupCustomerComponent,
    FaqComponent,
    FuckComponent,
    MyProfileComponent,
    MySocialComponent,
    AfterSignupProfileCustumerComponent,
    AfterSignupProfileInfluencerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
