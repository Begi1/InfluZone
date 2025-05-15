import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  categories = [
    {
      navigate: "FashionBrands",
      img: "assets/categories/FashionBrands.png",
      title: "Fashion Brands"
    },
    {
      navigate: "Fitness",
      img: "assets/categories/Fitness.png",
      title: "Fitness",
    },
    {
      navigate: "Food",
      img: "assets/categories/Food.png",
      title: "Food",
    },
    {
      navigate: "Travel",
      img: "assets/categories/Travel.png",
      title: "Travel",
    },
    {
      navigate: "Technology&Electronics",
      img: "assets/categories/Technology&Electronics.png",
      title: "Technology & Electronics",
    },
    {
      navigate: "Gaming",
      img: "assets/categories/Gaming.png",
      title: "Gaming",
    },
    {
      navigate: "Photography&Videography",
      img: "assets/categories/Photography&Videography.png",
      title: "Photography & Videography",
    },
    {
      navigate: "Music&Entertainment",
      img: "assets/categories/Music&Entertainment.png",
      title: "Music & Entertainment",
    },
    {
      navigate: "FinancialServices",
      img: "assets/categories/FinancialServices.png",
      title: "Financial Services",
    },
    {
      navigate: "Sports",
      img: "assets/categories/Sports.png",
      title: "Sports",
    },
    {
      navigate: "Education",
      img: "assets/categories/Education.png",
      title: "Education",
    },
    {
      navigate: "HomeDesign&Decor",
      img: "assets/categories/HomeDesign&Decor.png",
      title: "Home Design & Decor",
    },
    {
      navigate: "Art",
      img: "assets/categories/Art.png",
      title: "Art",
    },
    {
      navigate: "PetProducts",
      img: "assets/categories/PetProducts.png",
      title: "Pet Products",
    },
    {
      navigate: "EventOrganizers",
      img: "assets/categories/EventOrganizers.png",
      title: "Event Organizers",
    },
    {
      navigate: "CarCompanies",
      img: "assets/categories/CarCompanies.png",
      title: "Car Companies",
    },
    {
      navigate: "OnlineRetailers",
      img: "assets/categories/OnlineRetailers.png",
      title: "Online Retailers",
    },
    {
      navigate: "LuxuryGoods",
      img: "assets/categories/LuxuryGoods.png",
      title: "Luxury Goods",
    },
    {
      navigate: "RealEstate",
      img: "assets/categories/Real Estate.png",
      title: "Real Estate",
    },
    {
      navigate: "Jewelry&Accessories",
      img: "assets/categories/Jewelry&Accessories.png",
      title: "Jewelry & Accessories",
    },
    {
      navigate: "Crafts&DIYBrands",
      img: "assets/categories/Crafts&DIYBrands.png",
      title: "Crafts & DIY Brands",
    },
    {
      navigate: "BeautySalons&Spas",
      img: "assets/categories/BeautySalons&Spas.png",
      title: "Beauty Salons & Spas",
    }
  ]
}
