import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../../../models/products';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() product!: Products;
  products: Products[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}
  addProduct(product: Products) {
    this.productsService.addProduct(product);
    window.alert('The product has been added!');
  }
}
