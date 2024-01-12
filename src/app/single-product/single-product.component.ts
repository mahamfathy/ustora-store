import { Component } from '@angular/core';
import { SearchProductsComponent } from '../search-products/search-products.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [SearchProductsComponent],
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {
  productId:any
 
  constructor(private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe(params=>{
      this.productId=params["id"]
      console.log(this.productId)
    })
  }  

    
}

