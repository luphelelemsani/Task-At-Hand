import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products = this.productsService.getProducts();

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}

  clearCart() {
    this.products.splice(0, this.products.length);
  }
}
