import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Product } from '../shared/models/Product';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart= new Cart()
  constructor() {

   }
   addToCart(product:Product):void{
     this.cart.items.push(new CartItem(product))
       }
   getCart():Cart{
    return this.cart
   }
}
