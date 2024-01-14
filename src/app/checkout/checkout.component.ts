import { Component, OnInit } from '@angular/core';
import { SearchProductsComponent } from '../search-products/search-products.component';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/Cart';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [SearchProductsComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }
}
