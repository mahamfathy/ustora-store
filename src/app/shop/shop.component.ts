import { Component } from '@angular/core';
import { Product } from '../shared/models/Product';
import { ProductsService } from '../services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  products: Product[];
  constructor(private productService: ProductsService) {
    this.products = productService.getAllProducts();
  }
}
