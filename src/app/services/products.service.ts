import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
   products: Product[] = [
    {
      id: 1,
      header: 'Apple new mac book 2015 March :P',
      imageUrl: '../assets/product-1.jpg',
      imageName: 'Apple New Mac',
      price: 899,
      discount: 999,
    },
    {
      id: 2,
      header: 'Apple new mac book 2015 March :P',
      imageUrl: '../assets/product-2.jpg',
      imageName: 'Apple New Mac',
      price: 899,
      discount: 999,
    },
    {
      id: 3,
      header: 'Apple new mac book 2021 March :P',
      imageUrl: '../assets/product-3.jpg',
      imageName: 'Apple New Mac',
      price: 750,
      discount: 900,
    },
    {
      id: 4,
      header: 'Apple new mac book 2015 March :P',
      imageUrl: '../assets/product-4.jpg',
      imageName: 'Apple New Mac',
      price: 899,
      discount: 999,
    },
    {
      id: 5,
      header: 'New mac March :P',
      imageUrl: '../assets/product-1.jpg',
      imageName: 'Apple New Mac',
      price: 450,
      discount: 600,
    },
    {
      id: 6,
      header: 'Apple 2022 March :P',
      imageUrl: '../assets/product-2.jpg',
      imageName: 'Apple New Mac',
      price: 550,
      discount: 799,
    },
    {
      id: 7,
      header: 'mac book 2023 March :P',
      imageUrl: '../assets/product-3.jpg',
      imageName: 'Apple New Mac',
      price: 600,
      discount: 799,
    },
    {
      id: 8,
      header: 'Andriod :P',
      imageUrl: '../assets/product-4.jpg',
      imageName: 'Apple New Mac',
      price: 499,
      discount: 699,
    },
    {
      id: 9,
      header: 'Apple new mac book :P',
      imageUrl: '../assets/product-1.jpg',
      imageName: 'Apple New Mac',
      price: 899,
      discount: 999,
    },
    {
      id: 10,
      header: 'IPhone 2015 March :P',
      imageUrl: '../assets/product-2.jpg',
      imageName: 'Apple New Mac',
      price: 600,
      discount: 799,
    },
    {
      id: 11,
      header: ' mac book 2020 March :P',
      imageUrl: '../assets/product-3.jpg',
      imageName: 'Apple New Mac',
      price: 700,
      discount: 899,
    },
    {
      id: 12,
      header: 'Apple new mac book 2018 :P',
      imageUrl: '../assets/product-4.jpg',
      imageName: 'Apple New Mac',
      price: 500,
      discount: 900,
    },
  ];
  constructor() {}

  getAllProducts(): Product[] {
   
    return this.products;
  }
  getProductById(id:number):Promise<Product|undefined>{
    const product = this.products.find(p => p.id === id);

  
    return Promise.resolve(product);

}}
