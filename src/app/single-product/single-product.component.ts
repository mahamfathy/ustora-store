import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SearchProductsComponent } from '../search-products/search-products.component';
import * as $ from 'jquery';
import "owl.carousel"
@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [SearchProductsComponent],
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit{
  @ViewChild('owl-carousel',{static:true}) owlCarousel!:ElementRef
  constructor(){}
ngOnInit(): void {
  
    
}
}

