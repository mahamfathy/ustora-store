import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Product } from '../shared/models/Product';
import { CartItem } from '../shared/models/CartItem';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();
  private cartUpdateSubject = new Subject<void>();

  addToCart(product: Product): void {
    this.cart.items.push(new CartItem(product));
    this.cartUpdateSubject.next();
  }

  getCart(): Cart {
    return this.cart;
  }

  getCartUpdateObservable() {
    return this.cartUpdateSubject.asObservable();
  }

  getTotalPrice(): number {
    return this.cart.items.reduce((total, item) => total + item.product.price, 0);
  }
}
