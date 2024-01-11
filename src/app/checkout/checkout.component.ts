import { Component } from '@angular/core';
import { SearchProductsComponent } from '../search-products/search-products.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [SearchProductsComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

}
