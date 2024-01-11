import { Component } from '@angular/core';
import { SearchProductsComponent } from '../search-products/search-products.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SearchProductsComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
