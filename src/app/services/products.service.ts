import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getAllProducts(): Product[] {
    const products: Product[] = [
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
        header: 'Apple new mac book 2015 March :P',
        imageUrl: '../assets/product-3.jpg',
        imageName: 'Apple New Mac',
        price: 850,
        discount: 999,
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
        header: 'Apple new mac book 2015 March :P',
        imageUrl: '../assets/product-1.jpg',
        imageName: 'Apple New Mac',
        price: 899,
        discount: 999,
      },
      {
        id: 6,
        header: 'Apple new mac book 2015 March :P',
        imageUrl: '../assets/product-2.jpg',
        imageName: 'Apple New Mac',
        price: 899,
        discount: 999,
      },
      {
        id: 7,
        header: 'Apple new mac book 2015 March :P',
        imageUrl: '../assets/product-3.jpg',
        imageName: 'Apple New Mac',
        price: 600,
        discount: 999,
      },
      {
        id: 8,
        header: 'Apple new mac book 2015 March :P',
        imageUrl: '../assets/product-4.jpg',
        imageName: 'Apple New Mac',
        price: 899,
        discount: 999,
      },
      {
        id: 9,
        header: 'Apple new mac book 2015 March :P',
        imageUrl: '../assets/product-1.jpg',
        imageName: 'Apple New Mac',
        price: 899,
        discount: 999,
      },
      {
        id: 10,
        header: 'Apple new mac book 2015 March :P',
        imageUrl: '../assets/product-2.jpg',
        imageName: 'Apple New Mac',
        price: 899,
        discount: 999,
      },
      {
        id: 11,
        header: 'Apple new mac book 2015 March :P',
        imageUrl: '../assets/product-3.jpg',
        imageName: 'Apple New Mac',
        price: 700,
        discount: 999,
      },
      {
        id: 12,
        header: 'Apple new mac book 2015 March :P',
        imageUrl: '../assets/product-4.jpg',
        imageName: 'Apple New Mac',
        price: 899,
        discount: 999,
      },
    ];
    return products;
  }
}
