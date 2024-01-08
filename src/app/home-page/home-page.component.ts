import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LatestProductsComponent } from '../latest-products/latest-products.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,LatestProductsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
