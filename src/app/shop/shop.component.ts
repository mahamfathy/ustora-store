import { Component } from '@angular/core';
import { Product } from '../shared/models/Product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  products: Product[];
  constructor(private productService: ProductsService) {
    this.products = productService.getAllProducts();
  }
}
