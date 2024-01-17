import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
   products: Product[] = [
    {
      id: 1,
      name: 'Apple new mac book 2015 March :P',
      src: '../assets/product-1.jpg',
      imageName: 'Apple New Mac',
      price: 899,
      discount: 999,
    },
    {
      id: 2,
      name: 'Apple new mac book 2015 March :P',
      src: '../assets/product-2.jpg',
      imageName: 'Apple New Mac',
      price: 899,
      discount: 999,
    },
    {
      id: 3,
      name: 'Apple new mac book 2021 March :P',
      src: '../assets/product-3.jpg',
      imageName: 'Apple New Mac',
      price: 750,
      discount: 900,
    },
    {
      id: 4,
      name: 'Apple new mac book 2015 March :P',
      src: '../assets/product-4.jpg',
      imageName: 'Apple New Mac',
      price: 899,
      discount: 999,
    },
    {
      id: 5,
      name: 'New mac March :P',
      src: '../assets/product-1.jpg',
      imageName: 'Apple New Mac',
      price: 450,
      discount: 600,
    },
    {
      id: 6,
      name: 'Apple 2022 March :P',
      src: '../assets/product-2.jpg',
      imageName: 'Apple New Mac',
      price: 550,
      discount: 799,
    },
    {
      id: 7,
      name: 'mac book 2023 March :P',
      src: '../assets/product-3.jpg',
      imageName: 'Apple New Mac',
      price: 600,
      discount: 799,
    },
    {
      id: 8,
      name: 'Andriod :P',
      src: '../assets/product-4.jpg',
      imageName: 'Apple New Mac',
      price: 499,
      discount: 699,
    },
    {
      id: 9,
      name: 'Apple new mac book :P',
      src: '../assets/product-1.jpg',
      imageName: 'Apple New Mac',
      price: 899,
      discount: 999,
    },
    {
      id: 10,
      name: 'IPhone 2015 March :P',
      src: '../assets/product-2.jpg',
      imageName: 'Apple New Mac',
      price: 600,
      discount: 799,
    },
    {
      id: 11,
      name: ' mac book 2020 March :P',
      src: '../assets/product-3.jpg',
      imageName: 'Apple New Mac',
      price: 700,
      discount: 899,
    },
    {
      id: 12,
      name: 'Apple new mac book 2018 :P',
      src: '../assets/product-4.jpg',
      imageName: 'Apple New Mac',
      price: 500,
      discount: 900,
    },
  ];

  carousel:Product[]=[
      {
      id: 1,
      name: 'Samsung gallaxy',
      src: 'assets/product-1.jpg',
      imageName: 'image 1',
      price: 800,
      discount: 900,
    },
    {
      id: 2,
      name: 'Nokia Lumia 1320',
      src: 'assets/product-2.jpg',
      imageName: 'image 2',
      price: 1100,
      discount: 1500,
    },
    {
      id: 3,
      name: 'LG Leon 2015',
      src: 'assets/product-3.jpg',
      imageName: 'image 3',
      price: 200,
      discount: 500,
    },
    {
      id: 4,
      name: 'Sony microsoft',
      src: 'assets/product-4.jpg',
      imageName: 'image 4',
      price: 550,
      discount: 700,
    },
    {
      id: 5,
      name: 'Sony Smart',
      src: 'assets/product-5.jpg',
      imageName: 'image 5',
      price: 900,
      discount: 950,
    },
    {
      id: 6,
      name: 'Samsung gallaxy',
      src: 'assets/product-6.jpg',
      imageName: 'image 6',
      price: 700,
      discount: 800,
    },
   
  ]
  constructor() {}

  getAllProducts(): Product[] {
   
    return this.products;
  }
  getProductById(id:number):Promise<Product|undefined>{
    const product = this.products.find(p => p.id === id);

  
    return Promise.resolve(product);

}
getTotalProductsPrice(): number {
  return this.products.reduce((total, product) => total + product.price, 0);
}
getCarouselInfo():Product[]{
  return this.carousel
}
}
