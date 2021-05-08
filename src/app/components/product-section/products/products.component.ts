import { Component, OnInit } from '@angular/core';
import { Products } from '../../../models/products';

import { RestService } from '../../../services/rest.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];
  p: number = 1;
  value = '';
  constructor(private res: RestService) {}

  ngOnInit(): void {
    this.res.fetchProducts().subscribe((response) => {
      this.products = response;
    });
  }
  key: string = 'name';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  onCheck() {
    this.products = this.products;
    console.log(this.products);
  }
}
