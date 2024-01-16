import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Product } from '../shared/models/Product';
@Component({
  selector: 'app-latest-products',
  standalone: true,
  imports: [CarouselModule,ButtonModule,RouterLink],
  templateUrl: './latest-products.component.html',
  styleUrl: './latest-products.component.css',
})
export class LatestProductsComponent {
  images = [
    {
      id: 1,
      name: 'Samsung gallaxy',
      src: 'assets/product-1.jpg',
      imageName: 'image 1',
      price: 800,
      discount: 900,
    },
    {
      id: 2,
      name: 'Nokia Lumia 1320',
      src: 'assets/product-2.jpg',
      imageName: 'image 2',
      price: 1100,
      discount: 1500,
    },
    {
      id: 3,
      name: 'LG Leon 2015',
      src: 'assets/product-3.jpg',
      imageName: 'image 3',
      price: 200,
      discount: 500,
    },
    {
      id: 4,
      name: 'Sony microsoft',
      src: 'assets/product-4.jpg',
      imageName: 'image 4',
      price: 550,
      discount: 700,
    },
    {
      id: 5,
      name: 'Sony Smart',
      src: 'assets/product-5.jpg',
      imageName: 'image 5',
      price: 900,
      discount: 950,
    },
    {
      id: 6,
      name: 'Samsung gallaxy',
      src: 'assets/product-6.jpg',
      imageName: 'image 6',
      price: 700,
      discount: 800,
    },
   
  ];
  responsiveOptions = [
    {
      breakpoint: '1600px',
      numVisible: 5,
      numScroll: 5,
    },
  ];
  constructor(private cartService:CartService){}

  addToCart(item:Product){
    this.cartService.addToCart(item)
  }
}
