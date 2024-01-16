import { Product } from "./Product";

export class CartItem {
  id!: number;
  product!: Product;
  quantity: number = 1;

  constructor(product: Product) {
    this.product = product;
  }

  get price(): number {
    return this.product.price * this.quantity;
  }

  get imageUrl(): string {
    return this.product.src; // Adjust this according to your actual property name for the image URL
  }
}
