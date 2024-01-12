import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LatestProductsComponent } from '../latest-products/latest-products.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    LatestProductsComponent,
    CarouselComponent,
    SlickCarouselModule,
    CommonModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  images = [
    { id: 1, src: 'assets/product-1.jpg', alt: 'Image 1' },
    { id: 2, src: 'assets/product-2.jpg', alt: 'Image 2' },
    { id: 3, src: 'assets/product-3.jpg', alt: 'Image 3' },
    { id: 4, src: 'assets/product-4.jpg', alt: 'Image 4' },
    { id: 5, src: 'assets/product-5.jpg', alt: 'Image 5' },
    { id: 6, src: 'assets/product-6.jpg', alt: 'Image 6' },
    // Add more objects as needed
  ];
  currentIndex = 0;

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };
  constructor() {}
  next() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
  }
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
