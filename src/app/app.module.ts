import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomePageHeaderComponent } from './components/home-page-header/home-page-header.component';
import { HomeComponent } from './pages/home/home.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { PartnersComponent } from './components/partners/partners.component';
import { CustomersCategoryComponent } from './components/customers-category/customers-category.component';
import { InfluencersCategoryComponent } from './components/influencers-category/influencers-category.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { FormsModule } from '@angular/forms';
import { CustomersCategoryPageComponent } from './pages/customers-category-page/customers-category-page.component';
import { InfluencersCategoryPageComponent } from './pages/influencers-category-page/influencers-category-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfluencersPageComponent } from './pages/influencers-page/influencers-page.component';
import { CustomersPageComponent } from './pages/customers-page/customers-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomePageHeaderComponent,
    HomeComponent,
    UserHeaderComponent,
    ProfileComponent,
    PartnersComponent,
    CustomersCategoryComponent,
    InfluencersCategoryComponent,
    UserCardComponent,
    CustomersCategoryPageComponent,
    InfluencersCategoryPageComponent,
    FooterComponent,
    InfluencersPageComponent,
    CustomersPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
