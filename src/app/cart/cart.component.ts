import { Component } from '@angular/core';
import { SearchProductsComponent } from '../search-products/search-products.component';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SearchProductsComponent,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
cart!:Cart
constructor(private cartService:CartService){
this.setCart()
}
setCart(){
  this.cart =this.cartService.getCart()
}
}
