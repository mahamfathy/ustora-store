import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import * as $ from 'jquery';
@Component({
  selector: 'app-latest-products',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './latest-products.component.html',
  styleUrl: './latest-products.component.css'
})
export class LatestProductsComponent {

}
