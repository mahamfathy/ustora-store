import { Component } from '@angular/core';
import { LatestProductsComponent } from '../latest-products/latest-products.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [LatestProductsComponent, CarouselComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  constructor() {}
}
