import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Product } from '../shared/models/Product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ustoraImage: string = 'assets/logo.png';
  totalPrice: number = 0;
  count: number = 0;

  // constructor(private cartService: CartService) {}

  // ngOnInit(): void {
  //   this.updateTotalPrice(); // Initialize total price
  //   this.cartService.getCartUpdateObservable().subscribe(() => {
  //     this.updateTotalPrice(); // Update total price whenever the cart is updated
  //   });
  // }

  // private updateTotalPrice(): void {
  //   this.totalPrice = this.cartService.getTotalPrice();
  //   this.count = this.cartService.getCart().items.length;
  // }

 
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.updateTotalPrice();

    // Subscribe to cart updates
    this.cartService.getCartUpdateObservable().subscribe(() => {
      this.updateTotalPrice();
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  private updateTotalPrice(): void {
    const cart = this.cartService.getCart();
    this.totalPrice = cart.items.length > 0 ? this.cartService.getTotalPrice() : 0;
    this.count = cart.items.length;
  }
}