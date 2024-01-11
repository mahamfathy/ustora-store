import { Injectable, OnInit } from '@angular/core';
import { Product } from '../shared/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService implements OnInit {
  productsApiUrl = 'http://localhost:3000/products';

  constructor() {}
  ngOnInit(): void {}
  async getAllProducts():Promise<Product[]>{
    const data = await fetch(this.productsApiUrl)
    return await data.json()??[]
  }

  async getProductById(id: number): Promise<Product | undefined> {
    const data = await fetch(`${this.productsApiUrl}/${id}`);
    return (await data.json()) ?? {};
  }
}
