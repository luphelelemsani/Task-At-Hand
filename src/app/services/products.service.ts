import { Injectable } from '@angular/core';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Products[] = [];

  constructor() {}

  addProduct(product: Products) {
    this.products.unshift(product);
  }

  getProducts() {
    return this.products;
  }
  clearCart() {
    this.products = [];
    return this.products;
  }

  clearProducts(index: number) {
    this.products.splice(0, index);
  }
}
