import { Component } from '@angular/core';
import { SearchProductsComponent } from '../search-products/search-products.component';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SearchProductsComponent,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
// constructor(private productServer:ProductsService[]){}
}
